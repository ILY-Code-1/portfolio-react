import { sendConsultationEmail } from "@/lib/mailer";

export async function POST(request) {
  try {
    const data = await request.json();
    await sendConsultationEmail(data);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Consultation email error:", err);
    return Response.json({ error: "Gagal mengirim permintaan." }, { status: 500 });
  }
}
