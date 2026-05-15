"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import { Code2, GraduationCap, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Button } from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/ui/BrandIcons";
import { getProductById } from "@/data/products";

/**
 * Section IlyProject — produk #3 (live, internal).
 *
 * Layout: hero split (teks kiri + coverage visual kanan) →
 *         2 card mode side-by-side (Mentoring vs Development).
 *
 * CTA konsultasi sekarang dipisah jadi ConsultationSection sendiri (general,
 * berlaku untuk seluruh produk).
 */

const coverageIcons = {
  Web: "Globe",
  "Mobile Flutter": "Smartphone",
  Desktop: "Monitor",
  "Machine Learning": "BrainCircuit",
};

export const IlyProjectSection = () => {
  const p = getProductById("ilyproject");

  return (
    <section
      id="produk"
      aria-labelledby="ilyproject-heading"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, #0f0f0f 0%, #12122a 50%, #0f0f0f 100%)",
      }}
    >
      <BackgroundFX />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
            ILYPROJECT
          </span>
          <h2 id="ilyproject-heading" className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Partner ngoding untuk <span className="text-gradient-brand">project-mu.</span>
          </h2>
        </div>

        {/* HERO SPLIT: teks kiri + coverage grid kanan */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h3 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-white">Ily</span>
              <span className="text-gradient-brand">Project</span>
            </h3>
            <p className="mt-3 text-xl font-bold text-white sm:text-2xl">{p.headline}</p>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {p.hook} {p.description}
            </p>
          </motion.div>

          {/* Coverage grid kanan */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Cakupan Platform</p>
            <div className="grid grid-cols-2 gap-3">
              {p.coverage.map((c, i) => {
                const iconName = coverageIcons[c] || "Code2";
                const Icon = Lucide[iconName] ?? Lucide.Code2;
                return (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-1 hover:border-[#667eea]/40 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#667eea]/15 text-[#a4b4ff] transition-colors group-hover:bg-[#667eea]/25">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold text-white">{c}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* DUAL MODE CARDS */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Dua jalan, <span className="text-gradient-brand">pilih yang kamu suka.</span>
            </h3>
            <p className="mt-2 text-sm text-white/60 sm:text-base">Mau belajar sambil jalan atau serahkan ke kami — keduanya kami jamin kamu menguasai project-nya.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {p.modes.map((mode, i) => {
              const Icon = i === 0 ? GraduationCap : Code2;
              return (
                <motion.div
                  key={mode.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#667eea]/40 hover:bg-white/[0.06] sm:p-8"
                >
                  <span aria-hidden="true" className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#667eea]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand shadow-lg shadow-[#667eea]/30">
                      <Icon size={26} className="text-white" aria-hidden="true" />
                    </span>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/60">Mode {String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <h4 className="mt-5 text-2xl font-extrabold tracking-tight">{mode.name}</h4>
                  <p className="mt-1 text-sm font-semibold text-[#a4b4ff]">{mode.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{mode.description}</p>

                  <ul className="mt-5 space-y-2.5">
                    {mode.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#667eea]/20">
                          <Check size={12} className="text-[#a4b4ff]" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-white/80">{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* CTA fokus — untuk yang sudah yakin pilih IlyProject */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5"
          >
            <Button href={p.cta.href} target="_blank" rel="noopener noreferrer" size="lg">
              <WhatsappIcon size={18} />
              {p.cta.label}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};