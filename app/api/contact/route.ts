import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Force Node.js runtime (Nodemailer fails on Next.js Edge Runtime)
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, category, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const user = process.env.GMAIL_USER?.trim();
    // Automatically remove all spaces from the 16-character password
    const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

    if (!user || !pass) {
      console.error("❌ Error: GMAIL_USER or GMAIL_APP_PASSWORD is not defined in .env.local");
      return NextResponse.json(
        { error: "Server environment variables are missing." },
        { status: 500 }
      );
    }

    // Direct Gmail SSL Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: user,
      subject: `[InnoSprint 2.0 Inquiry] ${category} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #18181B; background-color: #FAF9F5; border: 2px solid #18181B; border-radius: 12px;">
          <h2 style="color: #FF3B30; margin-top: 0;">New Contact Form Message</h2>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 1px solid #18181B; margin: 16px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #18181B;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("❌ Gmail SMTP Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email." },
      { status: 500 }
    );
  }
}