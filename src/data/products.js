/**
 * ============================================================
 * PRODUK ILY CODE — Sumber Konten Section "Produk Kami"
 * ============================================================
 *
 * Edit file ini untuk update headline, fitur, atau status tiap produk.
 *
 * Field penting:
 *   - status: "coming-soon" | "live"
 *   - cta.external: true kalau buka URL luar (pakai target=_blank)
 *                   false kalau navigasi internal React Router
 *   - detailPath: null kalau tidak ada halaman detail (mis. IlySchool)
 *   - accent: warna CSS hex — dipakai untuk glow/shadow unik per produk
 */

import { siteConfig } from "./siteConfig";

const adminPhone = siteConfig.contact.phone.replace(/\D/g, "");

/**
 * Helper bangun URL wa.me dengan pesan pre-fill.
 */
const waLink = (msg) => `https://wa.me/${adminPhone}?text=${encodeURIComponent(msg)}`;

export const products = [
  {
    id: "ilycorp",
    name: "IlyCorp",
    status: "live",
    badge: "Tersedia Sekarang",
    tagline: "Rumah digital untuk bisnis kamu.",
    headline: "Website company profile yang dibuat khusus untuk bisnismu.",
    hook: "Branding profesional tanpa drama. Mulai dari konsultasi gratis — tanpa biaya, tanpa komitmen.",
    description: "Untuk UMKM, PT, dan badan usaha yang mau punya rumah digital tanpa pusing soal teknis. Kebutuhan tiap bisnis beda — makanya kami mulai dari ngobrol dulu, baru susun solusi & estimasi yang pas. Kamu tinggal terima jadi.",
    features: [
      { icon: "Zap", title: "Rilis cepat", text: "Begitu brief & materi siap, website jalan tanpa ribet." },
      { icon: "Wrench", title: "Maintenance included", text: "Sudah termasuk pemeliharaan dan pengembangan." },
      { icon: "ShieldCheck", title: "Sertifikat SSL", text: "Free SSL, aman dan terpercaya." },
      { icon: "Smartphone", title: "Responsive", text: "Tampilan responsif di setiap device." },
      { icon: "Rocket", title: "Layanan SEO Lengkap", text: "Optimasi load speed, sitemap & indexing, artikel + copy SEO, plus local search." },
      { icon: "Receipt", title: "Penawaran transparan", text: "Harga dihitung sesuai kebutuhan — jelas dari awal, tanpa biaya tersembunyi." },
    ],
    targetAudience: "Untuk UMKM, PT, dan badan usaha.",
    cta: {
      label: "Konsultasi Gratis",
      href: "/produk/ilycorp",
      external: false,
    },
    detailPath: "/produk/ilycorp",
    accent: "#667eea",
  },
  {
    id: "ilyschool",
    name: "IlySchool",
    status: "live",
    badge: "Tersedia Sekarang",
    tagline: "Website sekolah jadi terjangkau.",
    headline: "Website sekolah cuma 100rb/tahun.",
    hook: "Seriusan. Sudah termasuk domain, hosting, dan update konten selama 12 bulan.",
    description: "Cocok untuk TK, SD, MI, madrasah, pesantren, bimbel, dan LKP yang mau hadir online tanpa beban biaya.",
    features: [
      { icon: "Palette", title: "Desain custom", text: "Tersdia 10 Template dan pilihan desain custom" },
      { icon: "Smartphone", title: "Mobile-friendly", text: "Lancar di semua perangkat." },
      { icon: "Settings2", title: "Admin mudah", text: "Update konten tanpa coding." },
      { icon: "Globe", title: "Domain & hosting", text: "Termasuk, tanpa biaya tambahan." },
    ],
    socialProof: "Telah dipercaya 50+ instansi pendidikan.",
    targetAudience: "Untuk TK, SD, madrasah, pesantren, bimbel, dan LKP.",
    cta: {
      label: "Kunjungi IlySchool.com",
      href: "https://ilyschool.com",
      external: true,
    },
    detailPath: null,
    accent: "#764ba2",
    // Slot gambar — ganti `imageSlot: true` dengan path asset saat sudah ada
    imageSlot: "/images/ilyschool.webp",
    imagePlaceholder: "Foto siswa / aktivitas sekolah",
  },
  {
    id: "ilyproject",
    name: "IlyProject",
    status: "live",
    badge: "Tersedia Sekarang",
    tagline: "Partner ngoding untuk project-mu.",
    headline: "Wujudin project-mu, satu baris kode setiap kali.",
    hook: "Untuk mahasiswa tugas akhir & siapapun yang punya ide tapi stuck di teknis.",
    description: "Pilih mode yang paling cocok buat kamu — mau tetap coding sendiri dengan bimbingan, atau serahkan full ke kami dan fokus ke dokumentasi.",
    modes: [
      {
        name: "Mode Mentoring",
        tagline: "Kamu tetap yang coding.",
        description: "Kami jadi tempat nanya, review code, dan debug bareng. Cocok buat yang mau belajar sambil jalan & menguasai projek-nya sendiri.",
        highlights: ["Sesi 1-on-1 via meet/WA", "Code review per milestone", "Debug bareng saat stuck", "Panduan struktur kode"],
      },
      {
        name: "Mode Development",
        tagline: "Kami yang koding, kamu yang kuasai.",
        description: "Kami bangun dari nol sesuai kebutuhan. Kamu dapat walk-through logika sampai paham & siap jawab pertanyaan di sidang.",
        highlights: ["Develop full sesuai spesifikasi", "Dokumentasi teknis lengkap", "Sesi walk-through logika kode", "Siap presentasi/sidang"],
      },
    ],
    coverage: ["Web", "Mobile Flutter", "Desktop", "Machine Learning"],
    targetAudience: "Untuk mahasiswa, kreator, dan pengembang independen.",
    cta: {
      label: "Diskusi IlyProject via WhatsApp",
      href: waLink("Halo Admin ILY Code! 👋\nSaya tertarik dengan IlyProject dan mau lanjut diskusi detail kebutuhan-nya. Mohon arahannya ya!"),
      external: true,
    },
    detailPath: "/produk/ilyproject",
    accent: "#667eea",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

/**
 * URL WhatsApp untuk CTA konsultasi gratis (general).
 * Pesan sengaja singkat & siap kirim — tujuannya memulai percakapan dulu,
 * detail kebutuhan dibahas via chat. Dipakai di ConsultationSection.
 */
export const consultationWaUrl = waLink("Halo ILY Code! \nSaya tertarik dengan layanan ILY Code dan mau konsultasi terlebih dahulu");
