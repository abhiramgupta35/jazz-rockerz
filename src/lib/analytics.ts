"use client";

// Google Ads & Marketing Event Tracking Helper

export type AnalyticsEvent =
  | "free_trial_cta_click"
  | "form_submission"
  | "phone_click"
  | "whatsapp_click"
  | "read_reviews_click"
  | "branch_select"
  | "program_view";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem("jazzrockers_utm");
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.error("Error retrieving stored UTMs", e);
  }
  return {};
}

export function captureUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const utms: UtmParams = {};
    const keys: (keyof UtmParams)[] = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];

    let hasAny = false;
    keys.forEach((key) => {
      const val = params.get(key);
      if (val) {
        utms[key] = val;
        hasAny = true;
      }
    });

    if (hasAny) {
      sessionStorage.setItem("jazzrockers_utm", JSON.stringify(utms));
      return utms;
    }
    return getStoredUtmParams();
  } catch (e) {
    console.error("Error capturing UTMs", e);
    return {};
  }
}

export function trackEvent(
  eventName: AnalyticsEvent,
  payload?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;

  const utms = getStoredUtmParams();
  const fullPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...utms,
    ...payload,
  };

  // Log in development
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Analytics Event: ${eventName}]`, fullPayload);
  }

  // Push to dataLayer if present (Google Tag Manager / Google Ads)
  if (typeof (window as unknown as { dataLayer?: unknown[] }).dataLayer !== "undefined") {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push(fullPayload);
  }

  // Fire gtag event if gtag is present
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      eventName,
      fullPayload
    );
  }
}
