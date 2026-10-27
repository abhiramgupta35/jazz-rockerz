import { POST as brochureHandler } from "../brochure/route";

// Re-export the Resend email handler so any existing or cached clients
// hitting /api/brochure-lead also trigger the email notification seamlessly.
export const POST = brochureHandler;
