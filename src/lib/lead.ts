/**
 * Shared lead model used by every enquiry form (browser) and by /api/lead (server).
 * Keeping normalisation + validation in one place guarantees the server enforces
 * exactly the same rules the forms show to visitors.
 */

export const LEAD_FORM_TYPES = ["Free Trial Booking", "Brochure Download"] as const;
export type LeadFormType = (typeof LEAD_FORM_TYPES)[number];

export interface LeadInput {
  formType: LeadFormType;
  name: string;
  contact: string;
  email?: string;
  /** Maps to the WATI template's attribute1 */
  course?: string;
  /** Maps to the WATI template's attribute2 */
  branch?: string;
  /** Child's / student's age — not part of the WhatsApp template, stored in its own column */
  age?: string;
  /** Hidden honeypot field value; real visitors never fill it */
  honeypot?: string;
}

export interface NormalizedLead {
  formType: LeadFormType;
  name: string;
  contact: string;
  email: string;
  course: string;
  branch: string;
  age: string;
}

export type LeadFieldErrors = Partial<Record<"name" | "contact" | "email" | "course" | "branch" | "age", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * The WATI template requires non-empty attribute1/attribute2. Forms that don't
 * collect a course/branch (e.g. the brochure modal) get these neutral values so the
 * template still sends.
 */
export const FALLBACK_COURSE = "Program Brochure";
export const FALLBACK_BRANCH = "Not specified";

const clean = (value: unknown, max = 120): string =>
  typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : "";

/**
 * Keeps an explicit international prefix ("+" or "00") and strips formatting.
 * Numbers without a prefix are kept as typed digits; the client's Apps Script
 * fixNumber() remains responsible for adding the default country code.
 */
export function normalizeContact(raw: string): string {
  const trimmed = raw.trim();
  const digits = trimmed.replace(/\D/g, "");
  if (trimmed.startsWith("+")) return `+${digits}`;
  if (digits.startsWith("00")) return `+${digits.slice(2)}`;
  return digits;
}

export function normalizeLead(input: LeadInput): NormalizedLead {
  return {
    formType: input.formType,
    name: clean(input.name, 100),
    contact: normalizeContact(clean(input.contact, 30)),
    email: clean(input.email, 120).toLowerCase(),
    course: clean(input.course) || FALLBACK_COURSE,
    branch: clean(input.branch) || FALLBACK_BRANCH,
    age: clean(input.age, 50),
  };
}

/** Returns field errors; an empty object means the lead is valid. */
export function validateLead(lead: NormalizedLead): LeadFieldErrors {
  const errors: LeadFieldErrors = {};

  if (!LEAD_FORM_TYPES.includes(lead.formType)) {
    // Not a visitor-facing problem, but never forward unknown form types.
    errors.name = "Unsupported form.";
  }

  if (lead.name.length < 2) {
    errors.name = "Please enter a valid name.";
  }

  // E.164 allows at most 15 digits; 7 is the shortest realistic local number.
  const digitCount = lead.contact.replace(/\D/g, "").length;
  if (digitCount < 7 || digitCount > 15) {
    errors.contact = "Please enter a valid phone or WhatsApp number.";
  }

  if (lead.email && !EMAIL_PATTERN.test(lead.email)) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
}

