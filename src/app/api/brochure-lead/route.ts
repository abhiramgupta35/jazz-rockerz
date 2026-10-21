import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, age, phone } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required" },
        { status: 400 }
      );
    }

    const leadPayload = {
      name: String(name).trim(),
      age: age ? String(age).trim() : "Not specified",
      phone: String(phone).trim(),
      source: "Brochure Download Modal",
      timestamp: new Date().toISOString(),
    };

    // Log the lead for observability
    console.log("[BROCHURE LEAD CAPTURED]:", leadPayload);

    // TODO: Connect to client email service (e.g., Resend, Nodemailer, SendGrid, or CRM webhook)
    // Example:
    // await sendEmail({
    //   to: process.env.ADMIN_EMAIL || "contact@jazzrockers.com",
    //   subject: `New Brochure Download Request: ${leadPayload.name}`,
    //   text: `Name: ${leadPayload.name}\nAge: ${leadPayload.age}\nPhone: ${leadPayload.phone}`,
    // });

    return NextResponse.json({
      success: true,
      message: "Lead details recorded successfully",
      data: leadPayload,
    });
  } catch (error) {
    console.error("[BROCHURE LEAD ERROR]:", error);
    return NextResponse.json(
      { error: "Failed to process lead details" },
      { status: 500 }
    );
  }
}
