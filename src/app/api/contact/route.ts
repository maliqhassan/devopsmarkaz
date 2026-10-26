import nodemailer from "nodemailer";
import { site } from "@/lib/site";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  budget?: string;
  message?: string;
  services?: string[];
  company_website?: string;
};

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden honeypot field; pretend success.
  if (body.company_website) return Response.json({ ok: true });

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return Response.json({ error: "Please fill in your name, a valid email and a short message." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP environment variables are not configured.");
    return Response.json({ error: "Our mail service is temporarily unavailable." }, { status: 503 });
  }

  const port = Number(SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", body.phone?.trim() || "—"],
    ["Budget", body.budget || "—"],
    ["Services", body.services?.length ? body.services.join(", ") : "—"],
  ];

  try {
    await transporter.sendMail({
      from: `"${site.name} Website" <${SMTP_USER}>`,
      to: CONTACT_TO || site.email,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New project inquiry from ${name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`,
      html: `
        <h2>New project inquiry</h2>
        <table cellpadding="6">${rows
          .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escape(v)}</td></tr>`)
          .join("")}</table>
        <p style="white-space:pre-wrap">${escape(message)}</p>`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return Response.json({ error: "We couldn't send your message right now." }, { status: 500 });
  }
}
