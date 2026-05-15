import { Suspense } from "react";
import { breadcrumbJsonLd } from "@/lib/seo";
import ProyekContent from "./ProyekContent";

export const metadata = {
  title: "Proyek",
  description:
    "Kumpulan proyek yang pernah dikerjakan ILY Code — dari ERP, machine learning, company profile, sampai aplikasi mobile.",
  keywords: [
    "portofolio ilycode",
    "proyek ilycode",
    "contoh project web development",
    "portfolio developer indonesia",
  ],
  alternates: { canonical: "/proyek" },
  openGraph: {
    title: "Proyek — ILY Code",
    description: "Kumpulan proyek yang pernah dikerjakan ILY Code — dari ERP, machine learning, sampai company profile.",
    url: "/proyek",
  },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Beranda", href: "/" },
  { name: "Proyek", href: "/proyek" },
]);

export default function ProyekPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense>
        <ProyekContent />
      </Suspense>
    </>
  );
}
