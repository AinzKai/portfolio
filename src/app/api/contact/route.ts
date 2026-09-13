import { type NextRequest, NextResponse } from "next/server";
import { contactInfo } from "@/lib/data";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, website } = body;

    // Honeypot: bots fill this hidden field. Treat as success without
    // sending so we don't tip them off.
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent. I'll be in touch soon.",
      });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All required fields must be provided." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        {
          error:
            "The contact form is not configured yet. Please email me directly at " + contactInfo.email + ".",
        },
        { status: 503 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Portfolio Contact <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "N/A"}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      console.error("Contact form delivery failed:", data);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent. I'll be in touch soon.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}