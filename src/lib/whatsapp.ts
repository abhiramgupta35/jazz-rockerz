/**
 * WhatsApp integration utility for JazzRockers
 * Formats enquiry messages and builds WhatsApp deep links
 */

export const JAZZROCKERS_WHATSAPP_NUMBER = "971800509";
export const JAZZROCKERS_WHATSAPP_DISPLAY = "+971 800 509";

export const DEFAULT_GENERAL_ENQUIRY_MESSAGE =
  "Hello JazzRockers! I would like to enquire about your dance, music, gymnastics, and fine arts classes for my child. Please share program schedules and trial class availability.";

export interface WhatsAppBookingPayload {
  parentName: string;
  phoneNumber: string;
  childAge?: string;
  interestedIn?: string;
  preferredBranch?: string;
  branchName?: string;
  notes?: string;
}

export interface WhatsAppModalOptions {
  title?: string;
  subtitle?: string;
  phone?: string;
  displayPhone?: string;
  message?: string;
  badge?: string;
  isFormSubmission?: boolean;
  onConfirm?: () => void;
}

/**
 * Normalizes phone numbers to digits only for wa.me format
 */
export function cleanPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits || JAZZROCKERS_WHATSAPP_NUMBER;
}

/**
 * Builds standard wa.me redirect URL with URI-encoded text
 */
export function getWhatsAppUrl(phone = JAZZROCKERS_WHATSAPP_NUMBER, text = ""): string {
  const clean = cleanPhoneNumber(phone);
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${clean}?text=${encodedText}`;
}

/**
 * Formats structured free trial form submission into a professional WhatsApp enquiry message
 */
export function formatTrialBookingMessage(data: WhatsAppBookingPayload): string {
  const lines: string[] = [
    "🌟 *NEW FREE TRIAL BOOKING — JazzRockers Academy* 🌟",
    "",
    `👤 *Parent Name:* ${data.parentName.trim()}`,
    `📱 *Phone / WhatsApp:* ${data.phoneNumber.trim()}`,
  ];

  if (data.childAge && data.childAge.trim()) {
    lines.push(`🎂 *Child's Age:* ${data.childAge.trim()}`);
  }

  if (data.interestedIn && data.interestedIn.trim()) {
    const programName = data.interestedIn.charAt(0).toUpperCase() + data.interestedIn.slice(1);
    lines.push(`🎨 *Interested In:* ${programName}`);
  }

  if (data.branchName || data.preferredBranch) {
    lines.push(`📍 *Preferred Branch:* ${data.branchName || data.preferredBranch}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(`📝 *Notes:* ${data.notes.trim()}`);
  }

  lines.push("");
  lines.push("Hello JazzRockers Team, I have just submitted my free trial class registration on your website. Kindly confirm the available slots and next steps!");

  return lines.join("\n");
}
