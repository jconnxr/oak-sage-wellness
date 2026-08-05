import { NextResponse } from "next/server";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.email(),
  source: z.string().optional(),
});

/**
 * Email capture for the /research landing page.
 * // TODO: connect to email provider (Resend audience / Mailchimp / etc.)
 */
export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = subscribeSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // TODO: connect to email provider
  console.info("[subscribe]", {
    email: parsed.data.email,
    source: parsed.data.source ?? "unknown",
  });

  return NextResponse.json({ ok: true });
}
