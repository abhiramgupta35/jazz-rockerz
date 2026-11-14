/**
 * WhatsApp integration utility for JazzRockers
 * Formats enquiry messages and builds WhatsApp deep links
 */

export const JAZZROCKERS_WHATSAPP_NUMBER = "971800509";
export const JAZZROCKERS_WHATSAPP_DISPLAY = "+971 800 509";

export const DEFAULT_GENERAL_ENQUIRY_MESSAGE =
  "Hello jazzrockers! I would like to enquire about your dance, music, gymnastics, and fine arts classes for my child. Please share program schedules and trial class availability.";

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
 * Directly redirects to WhatsApp deep link in a new tab/window, falling back to current window
 */
export function openWhatsApp(phone = JAZZROCKERS_WHATSAPP_NUMBER, text = DEFAULT_GENERAL_ENQUIRY_MESSAGE): void {
  if (typeof window === "undefined") return;
  const url = getWhatsAppUrl(phone, text);
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
    window.location.href = url;
  }
}
