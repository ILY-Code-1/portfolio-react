"use client";
import Link from "next/link";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Button } from "@/components/ui/Button";
import { getProductById } from "@/data/products";

/**
 * Section IlyCorp — produk #1.
 *
 * Id="produk" = anchor utama untuk nav `/#produk`.
 * Layout: split 50/50 (teks kiri + mockup card kanan) + strip fitur 3 kolom.
 */
export const IlyCorpSection = () => {
  const p = getProductById("ilycorp");
  const topFeatures = p.features.slice(0, 3);
  const restFeatures = p.features.slice(3);

  return (
    <section
      aria-labelledby="ilycorp-heading"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, #0f0f0f 0%, #14142e 100%)",
      }}
    >
      <BackgroundFX />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
            ILYCORP
          </span>
          <h2 id="ilycorp-heading" className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Rumah digital untuk <span className="text-gradient-brand">bisnis kamu.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
          {/* Teks kiri */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Tersedia Sekarang
            </span>

            <h3 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-white">Ily</span>
              <span className="text-gradient-brand">Corp</span>
            </h3>
            <p className="mt-3 text-xl font-bold text-white sm:text-2xl">{p.headline}</p>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{p.description}</p>

            <ul className="mt-6 space-y-3">
              {topFeatures.map((f) => {
                const Icon = Lucide[f.icon] ?? Lucide.Check;
                return (
                  <li key={f.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg gradient-brand">
                      <Icon size={14} className="text-white" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{f.title}</p>
                      <p className="text-xs text-white/60">{f.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to={p.cta.href}>
                {p.cta.label}
                <ArrowRight size={16} />
              </Button>
              <Link href={p.detailPath} className="text-sm font-medium text-white/60 transition hover:text-white">
                Pelajari lebih lanjut →
              </Link>
            </div>

            <p className="mt-4 text-xs italic text-white/45">{p.targetAudience}</p>
          </motion.div>

          {/* Mock-up card kanan */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Glow behind */}
              <span aria-hidden="true" className="pointer-events-none absolute -inset-8 rounded-full bg-[#667eea]/20 blur-3xl" />

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 z-10 flex h-16 w-16 items-center justify-center rounded-2xl gradient-brand shadow-xl shadow-[#667eea]/40">
                <Sparkles size={24} className="text-white" aria-hidden="true" />
              </div>

              {/* Browser mock frame */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f0f] shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-white/50">bisniskamu.id</div>
                </div>

                {/* Mock content */}
                <div className="space-y-4 p-6">
                  <div className="h-3 w-24 rounded-full gradient-brand" />
                  <div className="space-y-2">
                    <div className="h-6 w-full rounded-md bg-white/10" />
                    <div className="h-6 w-4/5 rounded-md bg-white/8" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-[#667eea]/30 to-[#764ba2]/20" />
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-[#764ba2]/30 to-[#667eea]/20" />
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                    <div className="space-y-1.5">
                      <div className="h-2 w-20 rounded-full bg-white/20" />
                      <div className="h-2 w-12 rounded-full bg-white/10" />
                    </div>
                    <div className="h-8 w-24 rounded-full gradient-brand" />
                  </div>
                </div>
              </div>

              {/* Consultation tag floating */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-5 -left-6 rounded-2xl border border-white/10 bg-black/80 px-5 py-3 backdrop-blur-xl"
              >
                <p className="text-xs text-white/60">Konsultasi</p>
                <p className="text-2xl font-extrabold text-gradient-brand">Gratis</p>
                <p className="mt-0.5 text-[10px] text-white/45">Tanpa komitmen</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Strip fitur sisa (3 kolom) */}
        {restFeatures.length > 0 && (
          <div className="mt-20 grid gap-4 sm:grid-cols-3">
            {restFeatures.map((f, i) => {
              const Icon = Lucide[f.icon] ?? Lucide.Check;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-[#667eea]/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#667eea]/15 text-[#a4b4ff] transition-colors group-hover:bg-[#667eea]/25">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-white">{f.title}</p>
                  <p className="mt-0.5 text-xs text-white/60">{f.text}</p>
                </motion.div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
};
