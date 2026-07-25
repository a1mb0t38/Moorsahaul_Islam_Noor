import { NextResponse } from "next/server";
import { Resend } from "resend";

// Basic in-memory rate limiting map: ip -> timestamps[]
// Note: For production at scale, move to a persistent rate limiter like Upstash Redis
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside window
  const validTimestamps = timestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown-client";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error:
            "Too many contact submissions from this IP. Please wait 10 minutes before sending another message.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, message, company } = body || {};

    // 2. Honeypot Anti-Spam Check
    // If hidden field "company" is filled out, silently return success to trick bots
    if (company && typeof company === "string" && company.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    // 3. Server-Side Data Validation
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: "ERROR: All fields (Name, Email, Message) are required." },
        { status: 400 }
      );
    }

    // Basic Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "ERROR: Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Message Character Limit
    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { error: "ERROR: Message content exceeds the maximum limit of 5000 characters." },
        { status: 400 }
      );
    }

    // 4. Initialize Resend SDK
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Server configuration error: Email service key is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    /*
     * NOTE FOR PRODUCTION / VERIFIED DOMAIN:
     * Resend's default test sender is "onboarding@resend.dev".
     * When you verify your own domain (e.g. mynoordomain.com) in Resend's dashboard,
     * update the "from" address below to "contact@mynoordomain.com".
     */
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mursahaulnur17@gmail.com",
      replyTo: trimmedEmail,
      subject: `New portfolio contact from ${trimmedName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0d1117; color: #c9d1d9; border: 1px solid #30363d; border-radius: 6px; padding: 24px;">
          <h2 style="color: #58a6ff; border-bottom: 1px solid #30363d; padding-bottom: 12px; margin-top: 0; font-size: 20px;">
            📬 New Portfolio Message Payload
          </h2>
          
          <div style="margin-bottom: 16px;">
            <strong style="color: #8b949e; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">SENDER NAME:</strong>
            <span style="font-size: 16px; color: #f0f6fc; font-weight: 600;">${trimmedName}</span>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #8b949e; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">REPLY EMAIL:</strong>
            <a href="mailto:${trimmedEmail}" style="font-size: 15px; color: #58a6ff; text-decoration: none;">${trimmedEmail}</a>
          </div>

          <div style="margin-bottom: 24px;">
            <strong style="color: #8b949e; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">MESSAGE BODY:</strong>
            <div style="background-color: #161b22; border: 1px solid #30363d; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e6edf3; white-space: pre-wrap;">${trimmedMessage}</div>
          </div>

          <div style="border-top: 1px solid #30363d; pt: 12px; font-size: 11px; color: #8b949e;">
            Transmitted via Portfolio Contact Route Handler — Click "Reply" to respond directly to ${trimmedEmail}.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to deliver email message through Resend API." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API Exception:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
