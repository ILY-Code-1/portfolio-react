import { orgJsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import IlyProjectContent from "./IlyProjectContent";

export const metadata = {
  title: "IlyProject — Partner Ngoding untuk Project-mu",
  description:
    "Mentoring coding untuk yang mau belajar sambil bangun, atau Development full untuk yang butuh kami yang bangun. Cocok untuk mahasiswa tugas akhir & kreator.",
  keywords: [
    "jasa coding mahasiswa",
    "jasa skripsi programming",
    "mentoring ngoding",
    "jasa bikin project flutter",
    "jasa machine learning indonesia",
  ],
  alternates: { canonical: "/produk/ilyproject" },
  openGraph: {
    title: "IlyProject — Partner Ngoding untuk Project-mu",
    description:
      "Mentoring coding atau Development full — pilih yang paling sesuai gaya kamu. Mulai dari konsultasi gratis.",
    url: "/produk/ilyproject",
  },
};

const faqItems = [
  {
    q: "Mode mana yang cocok untuk saya?",
    a: "Kalau kamu mau belajar dan siap ngoding sendiri dengan bimbingan, ambil Mode Mentoring. Kalau kamu fokus di sisi lain (riset, penulisan, presentasi) dan mau kami yang bangun, ambil Mode Development.",
  },
  {
    q: "Kalau Mode Development, apakah saya tetap paham projectnya?",
    a: "Tentu. Kami kasih walk-through logika kode per milestone, dokumentasi teknis, dan sesi tanya-jawab sebelum sidang. Tujuannya kamu bukan cuma terima file, tapi benar-benar paham.",
  },
  {
    q: "Apakah bisa untuk tugas akhir / skripsi?",
    a: "Bisa, dan ini memang segmen utama kami. Kami bantu dari proposal (kalau butuh), development, sampai walk-through pra-sidang. Kami menghargai proses akademik kamu.",
  },
  {
    q: "Stack apa saja yang kalian support?",
    a: "Web (React, Next.js, Laravel, Node), Mobile (Flutter), Desktop, dan Machine Learning (Python, TensorFlow/PyTorch). Kalau ada kebutuhan stack lain, chat Admin dulu.",
  },
  {
    q: "Berapa biayanya?",
    a: "Tidak ada harga tetap karena tiap project beda scope. Setelah konsultasi dan scope jelas, baru kami kasih penawaran yang fair. Konsultasi sendiri gratis.",
  },
  {
    q: "Berapa lama pengerjaannya?",
    a: "Tergantung scope. Project kecil (CRUD sederhana) 1–2 minggu, menengah 3–6 minggu, besar bisa 2–3 bulan. Timeline pasti dikasih setelah konsultasi.",
  },
];

const jsonLd = [
  orgJsonLd(),
  serviceJsonLd({
    name: "IlyProject — Mentoring & Development",
    description:
      "Layanan mentoring coding dan development custom untuk mahasiswa tugas akhir, kreator, dan pengembang independen. Cakupan: Web, Mobile Flutter, Desktop, Machine Learning.",
    path: "/produk/ilyproject",
    serviceType: "Software Development Consulting",
  }),
  breadcrumbJsonLd([
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/#produk" },
    { name: "IlyProject", href: "/produk/ilyproject" },
  ]),
  faqJsonLd(faqItems),
];

export default function IlyProjectPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <IlyProjectContent faqItems={faqItems} />
    </>
  );
}
