"use client";
import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PostCard } from "@/components/blog/PostCard";
import { categories, getPublishedPosts } from "@/data/posts";
import { cn } from "@/lib/cn";

export default function BlogContent() {
  const allPosts = useMemo(getPublishedPosts, []);
  const searchParams = useSearchParams();
  const router = useRouter();

  const [q, setQ] = useState(searchParams.get("q") ?? "");
  const [cat, setCat] = useState(searchParams.get("kategori") ?? "Semua");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return allPosts.filter((p) => {
      const matchCat = cat === "Semua" || p.category === cat;
      const matchQ =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.excerpt.toLowerCase().includes(term) ||
        p.tags?.some((t) => t.toLowerCase().includes(term));
      return matchCat && matchQ;
    });
  }, [allPosts, q, cat]);

  const updateUrl = (newQ, newCat) => {
    const params = new URLSearchParams();
    if (newQ) params.set("q", newQ);
    if (newCat && newCat !== "Semua") params.set("kategori", newCat);
    const qs = params.toString();
    router.replace(qs ? `/blog?${qs}` : "/blog", { scroll: false });
  };

  const handleCat = (c) => {
    setCat(c);
    updateUrl(q, c);
  };

  const handleQ = (val) => {
    setQ(val);
    updateUrl(val, cat);
  };

  return (
    <section className="relative pb-24 pt-32 sm:pt-40">
      <BackgroundFX />
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Cerita, Tips,"
          highlight="& Insight"
          description="Tempat kami berbagi cerita di balik proyek, tips praktis untuk mahasiswa & kreator, dan insight seputar dunia teknologi."
        />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search size={16} aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="search"
              value={q}
              onChange={(e) => handleQ(e.target.value)}
              placeholder="Cari artikel…"
              aria-label="Cari artikel"
              className="w-full rounded-full border border-white/10 bg-white/[0.04] py-2.5 pl-11 pr-4 text-sm text-white placeholder-white/40 transition focus:border-[#667eea] focus:outline-none focus:ring-2 focus:ring-[#667eea]/30"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => handleCat(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
                  cat === c
                    ? "gradient-brand border-transparent text-white shadow-md shadow-[#667eea]/40"
                    : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:text-white",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-white/60">
            Belum ada artikel yang cocok. Coba kata kunci atau kategori lain.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
