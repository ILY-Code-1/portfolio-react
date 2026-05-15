import { sendContactEmail } from "@/lib/mailer";

export async function POST(request) {
  try {
    const data = await request.json();
    await sendContactEmail(data);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return Response.json({ error: "Gagal mengirim pesan." }, { status: 500 });
  }
}
