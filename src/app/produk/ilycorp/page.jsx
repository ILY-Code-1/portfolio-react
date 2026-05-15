import { orgJsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import IlyCorpContent from "./IlyCorpContent";

export const metadata = {
  title: "IlyCorp — Jasa Website Company Profile untuk UMKM & PT",
  description:
    "Rumah digital untuk bisnis kamu. Website company profile profesional yang dibuat sesuai kebutuhan — mulai dari konsultasi gratis. Termasuk SSL, responsive, dan SEO-ready.",
  keywords: [
    "jasa website company profile",
    "jasa pembuatan website UMKM",
    "jasa pembuatan website PT",
    "konsultasi website bisnis gratis",
  ],
  alternates: { canonical: "/produk/ilycorp" },
  openGraph: {
    title: "IlyCorp — Jasa Website Company Profile untuk UMKM & PT",
    description:
      "Website company profile profesional yang dibuat sesuai kebutuhan, mulai dari konsultasi gratis.",
    url: "/produk/ilycorp",
  },
};

const faqItems = [
  {
    q: "Berapa biayanya? Kenapa nggak dipasang harga?",
    a: "Karena tiap bisnis beda kebutuhan — jumlah halaman, fitur, dan materi nggak sama. Daripada paket pukul rata yang maksa, kami hitung sesuai yang kamu butuh. Konsultasinya gratis, tanpa komitmen, dan kamu langsung dapat estimasi yang jelas.",
  },
  {
    q: "Apa aja yang saya dapat?",
    a: "Website company profile dengan bagian hero, about, produk/jasa, dan kontak. Sudah termasuk SSL, responsive di semua device, SEO-ready, dan maintenance dasar. Cakupan detailnya disesuaikan saat konsultasi.",
  },
  {
    q: "Domain dan hosting termasuk?",
    a: "Hosting sudah termasuk selama masa layanan. Untuk domain, kami bantu daftarkan dan biayanya kami sampaikan transparan saat konsultasi — tergantung domain yang kamu butuhkan.",
  },
  {
    q: "Berapa lama prosesnya?",
    a: "Cepat — biasanya beberapa hari kerja sejak brief dan materi (logo, teks, foto) lengkap diterima. Estimasi pastinya kami kasih saat konsultasi.",
  },
  {
    q: "Bisa request revisi?",
    a: "Ya, 2x putaran revisi desain termasuk. Revisi mayor di luar scope dihitung sebagai project baru.",
  },
];

const jsonLd = [
  orgJsonLd(),
  serviceJsonLd({
    name: "IlyCorp — Website Company Profile",
    description:
      "Website company profile profesional untuk UMKM, PT, dan badan usaha. Dibuat sesuai kebutuhan, mulai dari konsultasi gratis.",
    path: "/produk/ilycorp",
    serviceType: "Web Development",
  }),
  breadcrumbJsonLd([
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/#produk" },
    { name: "IlyCorp", href: "/produk/ilycorp" },
  ]),
  faqJsonLd(faqItems),
];

export default function IlyCorpPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <IlyCorpContent faqItems={faqItems} />
    </>
  );
}
