import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter per IP address
// Limit: max 5 requests per 10 minutes per IP
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestLog.get(ip) || [];

  // Filter out timestamps outside the active window
  const recentTimestamps = timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequestLog.set(ip, recentTimestamps);
    return true;
  }

  recentTimestamps.push(now);
  ipRequestLog.set(ip, recentTimestamps);

  // Periodic cleanup if map grows large (> 500 IPs)
  if (ipRequestLog.size > 500) {
    for (const [key, list] of ipRequestLog.entries()) {
      const active = list.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        ipRequestLog.delete(key);
      } else {
        ipRequestLog.set(key, active);
      }
    }
  }

  return false;
}

export async function POST(request: Request) {
  try {
    // 1. Identify Client IP & Apply Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : realIp || "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait a few minutes before submitting again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    const body = await request.json();
    const { name, age, phone, website_hp } = body || {};

    // Spam Honeypot Check: if the hidden field is filled, silently reject
    if (website_hp) {
      console.warn("[BROCHURE SPAM DETECTED]: Honeypot triggered by", clientIp);
      return NextResponse.json({
        success: true,
        message: "Enquiry submitted successfully.",
      });
    }

    // Sanitize & Validate Fields
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedAge = typeof age === "string" ? age.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Please enter a valid student or contact name (2-100 characters)." },
        { status: 400 }
      );
    }

    if (!trimmedAge || trimmedAge.length > 50) {
      return NextResponse.json(
        { error: "Please provide a valid student age or age group." },
        { status: 400 }
      );
    }

    const cleanDigits = trimmedPhone.replace(/[^0-9]/g, "");
    if (!trimmedPhone || cleanDigits.length < 7 || trimmedPhone.length > 30) {
      return NextResponse.json(
        { error: "Please provide a valid phone number (at least 7 digits)." },
        { status: 400 }
      );
    }

    // 3. Verify Server-Side Resend Configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const clientEmail = process.env.CLIENT_EMAIL;
    const resendFromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Jazzrockers Website <website@resend.dev>";

    if (
      !resendApiKey ||
      resendApiKey === "re_your_actual_api_key" ||
      resendApiKey.trim() === ""
    ) {
      console.error(
        "[BROCHURE API ERROR]: RESEND_API_KEY is not configured or still has placeholder value in environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Email service is not yet configured. Please set a valid RESEND_API_KEY in your server environment variables.",
        },
        { status: 503 }
      );
    }

    if (
      !clientEmail ||
      clientEmail.includes("example.com") ||
      clientEmail.trim() === ""
    ) {
      console.error(
        "[BROCHURE API ERROR]: CLIENT_EMAIL is not configured or still has placeholder value in environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Recipient email is not configured. Please set CLIENT_EMAIL in your server environment variables.",
        },
        { status: 503 }
      );
    }

    // 4. Send Email via Resend SDK
    const resend = new Resend(resendApiKey);

    const emailSubject = "New Brochure Download Enquiry — Jazzrockers";
    const plainTextBody = `Jazzrockers Performing Arts Academy\nA new visitor has requested the program brochure.\n\nStudent Name: ${trimmedName}\nStudent Age: ${trimmedAge}\nPhone Number: ${trimmedPhone}\nSource: Get Your Program Brochure Modal`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc;">
  <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <div style="background-color: #1c2357; padding: 24px 32px; border-bottom: 4px solid #ef4444;">
      <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">
        Jazzrockers <span style="font-size: 14px; font-weight: 500; color: #cbd5e1; display: block; margin-top: 4px;">Performing Arts Academy</span>
      </h1>
    </div>
    
    <div style="padding: 32px;">
      <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 16px; border-radius: 4px; margin-bottom: 24px;">
        <p style="margin: 0; font-size: 14px; color: #1e40af; font-weight: 600;">
          A new visitor has requested the program brochure.
        </p>
      </div>

      <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px; font-size: 14px;">
        <tr>
          <td style="color: #64748b; font-weight: 600; width: 140px; vertical-align: top;">Student Name:</td>
          <td style="color: #0f172a; font-weight: 700;">${escapeHtml(trimmedName)}</td>
        </tr>
        <tr>
          <td style="color: #64748b; font-weight: 600; vertical-align: top;">Student Age:</td>
          <td style="color: #0f172a; font-weight: 600;">${escapeHtml(trimmedAge)}</td>
        </tr>
        <tr>
          <td style="color: #64748b; font-weight: 600; vertical-align: top;">Phone Number:</td>
          <td style="color: #0f172a; font-weight: 600;">
            <a href="tel:${escapeHtml(trimmedPhone)}" style="color: #ef4444; text-decoration: none;">${escapeHtml(trimmedPhone)}</a>
          </td>
        </tr>
        <tr>
          <td style="color: #64748b; font-weight: 600; vertical-align: top;">Source:</td>
          <td style="color: #0f172a;">Get Your Program Brochure Modal</td>
        </tr>
      </table>

      <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8; display: flex; justify-content: space-between;">
        <span>Sent automatically via Jazzrockers Website</span>
        <span>${new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })} UAE</span>
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();

    const { data, error } = await resend.emails.send({
      from: resendFromEmail,
      to: clientEmail,
      subject: emailSubject,
      text: plainTextBody,
      html: htmlBody,
    });

    if (error) {
      console.error("[RESEND DELIVERY ERROR]:", error);
      return NextResponse.json(
        {
          error:
            error.message ||
            "Failed to send email notification. Please check Resend configuration.",
        },
        { status: 502 }
      );
    }

    console.log("[BROCHURE ENQUIRY EMAIL SENT]: Resend ID:", data?.id);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted and notification email dispatched.",
      id: data?.id,
    });
  } catch (err: unknown) {
    console.error("[BROCHURE ROUTE UNHANDLED ERROR]:", err);
    const message =
      err instanceof Error ? err.message : "Unexpected server error";
    return NextResponse.json(
      { error: `Internal server error: ${message}` },
      { status: 500 }
    );
  }
}

// Basic HTML escaping helper to prevent injection in email rendering
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
