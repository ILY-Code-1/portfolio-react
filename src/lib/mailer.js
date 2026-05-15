const buildBodyHtml = ({ name, whatsapp, email, subject, message }) => `
<!doctype html>
<html lang="id">
<meta charset="utf-8">
<body style="font-family:Arial,sans-serif;margin:16px">
<h3>Informasi Kontak Baru dari Web Portfolio!</h3>
<p><b>Nama:</b> ${name}<br>
    <b>WA:</b> ${whatsapp}<br>
    <b>Email:</b> ${email}<br>
    <b>Subjek:</b> ${subject}</p>
<p><b>Pesan:</b><br>${message}</p>
<p>
    <a href="mailto:${email}?subject=Balasan%20untuk%20${encodeURIComponent(subject)}">Balas Email</a>
    &nbsp;|&nbsp;
    <a href="https://wa.me/${whatsapp}">WhatsApp</a>
</p>
</body>
</html>
`;

const buildConsultationHtml = ({ name, whatsapp, email, business }) => `
<!doctype html>
<html lang="id">
<meta charset="utf-8">
<body style="font-family:Arial,sans-serif;margin:16px">
<h3>Permintaan Konsultasi IlyCorp Baru!</h3>
<p><b>Nama:</b> ${name}<br>
    <b>WA:</b> ${whatsapp}<br>
    <b>Email:</b> ${email}<br>
    <b>Nama Usaha:</b> ${business}</p>
<p>Calon klien minta konsultasi IlyCorp. Segera follow-up via WhatsApp untuk bahas kebutuhan & estimasi.</p>
<p>
    <a href="mailto:${email}?subject=Konsultasi%20IlyCorp">Balas Email</a>
    &nbsp;|&nbsp;
    <a href="https://wa.me/${whatsapp}">WhatsApp</a>
</p>
</body>
</html>
`;

const sendOmailer = async ({ subject, body_html }) => {
  const payload = {
    smtp_host: process.env.SMTP_HOST,
    smtp_port: Number(process.env.SMTP_PORT),
    auth_email: process.env.SMTP_AUTH_EMAIL,
    auth_password: process.env.SMTP_AUTH_PASSWORD,
    sender_name: process.env.SMTP_SENDER_NAME,
    recipient: process.env.SMTP_RECIPIENT,
    subject,
    body_html,
  };

  const encoded = encodeURIComponent(JSON.stringify(payload));
  const response = await fetch(`${process.env.OMAILER_ENDPOINT}?data=${encoded}`);

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || `Omailer error ${response.status}`);
  }
};

export const sendContactEmail = ({ name, whatsapp, email, subject, message }) =>
  sendOmailer({
    subject,
    body_html: buildBodyHtml({ name, whatsapp, email, subject, message }),
  });

export const sendConsultationEmail = ({ name, whatsapp, email, business }) =>
  sendOmailer({
    subject: `Konsultasi IlyCorp - ${name} (${business})`,
    body_html: buildConsultationHtml({ name, whatsapp, email, business }),
  });
