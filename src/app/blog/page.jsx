import { Suspense } from "react";
import { breadcrumbJsonLd } from "@/lib/seo";
import BlogContent from "./BlogContent";

export const metadata = {
  title: "Blog & Insight",
  description:
    "Cerita, tips, tutorial, dan insight seputar teknologi, web development, dan dunia coding dari tim ILY Code.",
  keywords: ["blog ilycode", "tutorial coding", "tips skripsi", "web development indonesia"],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Insight — ILY Code",
    description: "Tempat kami berbagi cerita di balik proyek, tips praktis, dan insight seputar teknologi.",
    url: "/blog",
  },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Beranda", href: "/" },
  { name: "Blog", href: "/blog" },
]);

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense>
        <BlogContent />
      </Suspense>
    </>
  );
}
