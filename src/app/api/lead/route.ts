import { NextResponse } from "next/server";
import { LeadFormType, LEAD_FORM_TYPES, normalizeLead, validateLead } from "@/lib/lead";

/**
 * Server-side bridge between the website forms and the client's Google Apps Script
 * Web App (which writes to the existing Google Sheet and triggers WATI).
 *
 * Why a server route instead of posting to Apps Script from the browser:
 * - Apps Script Web Apps don't return CORS headers, so a browser could only use
 *   `no-cors` and would get an opaque response — success could never be verified.
 * - Server-to-server, we read the real JSON result and only report success when the
 *   sheet write is confirmed.
 * - The shared secret stays on the server, so the public Apps Script URL can't be
 *   spammed directly. The WATI token never leaves Apps Script.
 */

export const runtime = "nodejs";
// Apps Script cold starts + the WATI call can take several seconds.
export const maxDuration = 30;

const APPS_SCRIPT_TIMEOUT_MS = 25_000;

// Lightweight per-instance rate limit: 5 submissions / 10 minutes / IP.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  const limited = recent.length >= MAX_REQUESTS_PER_WINDOW;
  if (!limited) recent.push(now);
  requestLog.set(ip, recent);

  if (requestLog.size > 1000) {
    for (const [key, list] of requestLog) {
      if (list.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) requestLog.delete(key);
    }
  }
  return limited;
}

const fail = (status: number, error: string, extra: Record<string, unknown> = {}) =>
  NextResponse.json({ ok: false, error, ...extra }, { status });

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return fail(429, "Too many submissions. Please wait a few minutes and try again.");
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request.");
  }

  // Honeypot: pretend success so bots don't learn to adapt, but store nothing.
  if (typeof body.honeypot === "string" && body.honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const formType = body.formType as LeadFormType;
  if (!LEAD_FORM_TYPES.includes(formType)) {
    return fail(400, "Unsupported form.");
  }

  const lead = normalizeLead({
    formType,
    name: String(body.name ?? ""),
    contact: String(body.contact ?? ""),
    email: typeof body.email === "string" ? body.email : "",
    course: typeof body.course === "string" ? body.course : "",
    branch: typeof body.branch === "string" ? body.branch : "",
    age: typeof body.age === "string" ? body.age : "",
  });

  const fieldErrors = validateLead(lead);
  if (Object.keys(fieldErrors).length > 0) {
    return fail(400, "Please check the highlighted fields.", { fieldErrors });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  if (!scriptUrl || !secret) {
    console.error("[lead] GOOGLE_SCRIPT_URL or LEAD_WEBHOOK_SECRET is not configured.");
    return fail(503, "Enquiries are temporarily unavailable. Please call us on +971 800 509.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), APPS_SCRIPT_TIMEOUT_MS);

  try {
    // Apps Script answers POST with a 302 to script.googleusercontent.com; fetch
    // follows it (as a GET) and returns the doPost JSON output.
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        submissionId: typeof body.submissionId === "string" ? body.submissionId.slice(0, 64) : "",
        source: "Website",
        pageUrl: typeof body.pageUrl === "string" ? body.pageUrl.slice(0, 300) : "",
        ...lead,
      }),
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    });

    const text = await response.text();
    let result: { ok?: boolean; error?: string; whatsappStatus?: string } = {};
    try {
      result = JSON.parse(text);
    } catch {
      // An HTML page here usually means the deployment URL is wrong or access
      // isn't set to "Anyone".
      console.error("[lead] Apps Script returned non-JSON response", response.status);
      return fail(502, "We couldn't submit your details right now. Please try again shortly.");
    }

    if (!response.ok || result.ok !== true) {
      console.error("[lead] Apps Script rejected lead:", result.error ?? response.status);
      return fail(502, "We couldn't submit your details right now. Please try again shortly.");
    }

    // The lead is saved. WhatsApp delivery status is recorded in the sheet; a WATI
    // failure must not tell the visitor their enquiry failed.
    return NextResponse.json({ ok: true, whatsappStatus: result.whatsappStatus ?? "" });
  } catch (error) {
    const timedOut = error instanceof Error && error.name === "AbortError";
    console.error("[lead] Apps Script request failed:", timedOut ? "timeout" : error);
    return fail(
      504,
      timedOut
        ? "The request took too long. Please try again."
        : "We couldn't submit your details right now. Please try again shortly."
    );
  } finally {
    clearTimeout(timeout);
  }
}

