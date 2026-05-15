"use client";
import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";

const years = [
  "Semua",
  ...Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b.localeCompare(a)),
];

export default function ProyekContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [q, setQ] = useState(searchParams.get("q") ?? "");
  const [year, setYear] = useState(searchParams.get("tahun") ?? "Semua");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return projects.filter((p) => {
      const matchYear = year === "Semua" || p.year === year;
      const matchQ =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.longDescription.toLowerCase().includes(term) ||
        p.tags?.some((t) => t.toLowerCase().includes(term));
      return matchYear && matchQ;
    });
  }, [q, year]);

  const updateUrl = (newQ, newYear) => {
    const params = new URLSearchParams();
    if (newQ) params.set("q", newQ);
    if (newYear && newYear !== "Semua") params.set("tahun", newYear);
    const qs = params.toString();
    router.replace(qs ? `/proyek?${qs}` : "/proyek", { scroll: false });
  };

  const handleYear = (y) => {
    setYear(y);
    updateUrl(q, y);
  };

  const handleQ = (val) => {
    setQ(val);
    updateUrl(val, year);
  };

  return (
    <section className="relative pb-24 pt-32 sm:pt-40">
      <BackgroundFX />
      <Container>
        <SectionHeading
          eyebrow="Proyek"
          title="Karya yang sudah"
          highlight="kami bangun"
          description="Kumpulan proyek yang pernah kami kerjakan — dari ERP, machine learning, sampai company profile."
        />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search size={16} aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="search"
              value={q}
              onChange={(e) => handleQ(e.target.value)}
              placeholder="Cari proyek…"
              aria-label="Cari proyek"
              className="w-full rounded-full border border-white/10 bg-white/[0.04] py-2.5 pl-11 pr-4 text-sm text-white placeholder-white/40 transition focus:border-[#667eea] focus:outline-none focus:ring-2 focus:ring-[#667eea]/30"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {years.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => handleYear(y)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
                  year === y
                    ? "gradient-brand border-transparent text-white shadow-md shadow-[#667eea]/40"
                    : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:text-white",
                )}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-white/60">
            Belum ada proyek yang cocok. Coba kata kunci atau tahun lain.
          </p>
        ) : (
          <>
            <p className="mt-8 text-sm text-white/50">
              Menampilkan {filtered.length} dari {projects.length} proyek
            </p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
