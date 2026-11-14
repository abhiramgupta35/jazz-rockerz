"use client";

import { LeadFieldErrors, LeadInput, normalizeLead, validateLead } from "./lead";

export type LeadSubmissionResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: LeadFieldErrors };

const GENERIC_ERROR =
  "We couldn't submit your details right now. Please try again, or call us on +971 800 509.";

const REQUEST_TIMEOUT_MS = 30_000;

// Guards against the same lead being sent twice (double clicks, two mounted forms).
const inFlight = new Set<string>();

function createSubmissionId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Single entry point used by every website enquiry form.
 * Resolves `ok: true` only when the server confirms the lead was written to the
 * Google Sheet — never optimistically.
 */
export async function submitLead(input: LeadInput): Promise<LeadSubmissionResult> {
  const lead = normalizeLead(input);
  const fieldErrors = validateLead(lead);
  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, error: "Please check the highlighted fields.", fieldErrors };
  }

  const dedupeKey = `${lead.formType}|${lead.contact}`;
  if (inFlight.has(dedupeKey)) {
    return { ok: false, error: "Your details are already being submitted." };
  }
  inFlight.add(dedupeKey);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        honeypot: input.honeypot ?? "",
        submissionId: createSubmissionId(),
        pageUrl: window.location.href,
      }),
      signal: controller.signal,
    });

    const data: { ok?: boolean; error?: string; fieldErrors?: LeadFieldErrors } = await response
      .json()
      .catch(() => ({}));

    if (response.ok && data.ok === true) {
      return { ok: true };
    }

    return {
      ok: false,
      error: data.error || GENERIC_ERROR,
      fieldErrors: data.fieldErrors,
    };
  } catch (error) {
    const timedOut = error instanceof DOMException && error.name === "AbortError";
    return {
      ok: false,
      error: timedOut
        ? "The request took too long. Please check your connection and try again."
        : GENERIC_ERROR,
    };
  } finally {
    clearTimeout(timeout);
    inFlight.delete(dedupeKey);
  }
}

