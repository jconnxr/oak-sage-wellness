import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactFormSchema } from "@/lib/contact-form";

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // TODO: connect real email delivery — set RESEND_API_KEY and CONTACT_TO_EMAIL
  // in the environment (and optionally CONTACT_FROM_EMAIL). Until then, do not
  // pretend the message was sent.
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Oak & Sage Contact <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      {
        error:
          "Contact form email delivery is not configured yet. Please call or email us directly.",
      },
      { status: 503 },
    );
  }

  const { name, email, phone, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Website inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }
}
