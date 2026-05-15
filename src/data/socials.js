/**
 * Daftar social media + kontak. Dipakai di Contact section, Footer, dan FAB.
 * Icon name = key dari lucide-react.
 *
 * Pesan WA FAB (di bawah) sengaja ditulis plain lalu di-encode otomatis —
 * lebih gampang di-edit daripada URL-encoded string mentah.
 */

const waAdminPhone = "6285178226071";

const waFabMessage =
  "Halo Admin ILY Code.\n\n" +
  "Saya tertarik untuk mengembangkan project digital dan ingin diskusi lebih lanjut soal layanan ILY Code.\n\n" +
  "Terima kasih.";

const waFabUrl = `https://wa.me/${waAdminPhone}?text=${encodeURIComponent(waFabMessage)}`;

export const socials = [
  {
    name: "Instagram",
    icon: "Instagram",
    url: "https://www.instagram.com/ilycode_/",
    color: "#E4405F",
    handle: "@ilycode_",
  },
  {
    name: "TikTok",
    icon: "Tiktok",
    url: "https://www.tiktok.com/@ily_code",
    color: "#000000",
    handle: "@ily_code",
  },
  {
    name: "WhatsApp",
    icon: "Whatsapp",
    url: waFabUrl,
    color: "#25D366",
    handle: "Chat Admin",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://www.linkedin.com/in/ily-code-850301396/",
    color: "#0A66C2",
    handle: "ILY Code",
  },
  {
    name: "YouTube",
    icon: "Youtube",
    url: "https://www.youtube.com/@ILYcode-z4f",
    color: "#FF0000",
    handle: "@ILYcode-z4f",
  },
];

export const whatsappFabUrl = socials.find((s) => s.name === "WhatsApp").url;
