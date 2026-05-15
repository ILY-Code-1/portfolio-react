"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import { CheckCircle2, ExternalLink, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getProductById } from "@/data/products";

/**
 * Section IlySchool — produk #2 (live, external).
 *
 * Layout: full-width split (foto besar kiri + konten kanan).
 * Accent ungu (#764ba2) biar feel-nya beda dari IlyCorp.
 * CTA external → ilyschool.com.
 */
export const IlySchoolSection = () => {
  const p = getProductById("ilyschool");

  return (
    <section
      aria-labelledby="ilyschool-heading"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
      style={{
        background: "radial-gradient(ellipse at top left, rgba(118,75,162,0.18) 0%, transparent 50%), linear-gradient(180deg, #14142e 0%, #0f0f0f 100%)",
      }}
    >
      {/* Decorative accent shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-[#764ba2] opacity-15 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 h-[380px] w-[380px] rounded-full bg-[#667eea] opacity-15 blur-[120px]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#764ba2]" />
            ILYSCHOOL
          </span>
          <h2 id="ilyschool-heading" className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Website sekolah,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #764ba2 0%, #a4b4ff 100%)",
              }}
            >
              jadi terjangkau.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
          {/* Foto/placeholder besar kiri */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative order-2 lg:order-1">
            {/* Main image slot */}
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#764ba2]/30 via-[#1a1a2e] to-[#0f0f0f] shadow-2xl sm:aspect-[4/3] lg:aspect-[4/5]"
              aria-label={`Slot gambar: ${p.imagePlaceholder}`}
            >
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/50">
                  <Lucide.Image size={48} className="mx-auto mb-3 opacity-50" aria-hidden="true" />
                  <p className="text-sm font-medium">{p.imagePlaceholder}</p>
                  <p className="mt-1 text-xs text-white/30">(ganti imageSlot di data/products.js)</p>
                </div>
              </div> */}

              {typeof p.imageSlot === "string" ? (
                <img src={p.imageSlot} alt={p.imagePlaceholder} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <Lucide.Image size={48} className="mx-auto mb-3 opacity-50" aria-hidden="true" />
                    <p className="text-sm font-medium">{p.imagePlaceholder}</p>
                    <p className="mt-1 text-xs text-white/30">(ganti imageSlot di data/products.js)</p>
                  </div>
                </div>
              )}

              {/* Decorative dashes */}
              <div aria-hidden="true" className="absolute inset-4 rounded-2xl border border-dashed border-white/10" />
            </div>

            {/* Social proof badge floating */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-2 max-w-[85%] rounded-2xl border border-white/10 bg-black/85 p-4 shadow-2xl backdrop-blur-xl sm:-right-6"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#764ba2]/25 text-[#c4a4ff]">
                  <Quote size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-2xl font-extrabold leading-none text-white">
                    50+
                    <span className="ml-1 text-sm font-medium text-white/60">instansi</span>
                  </p>
                  <p className="mt-1 text-xs text-white/60">telah mempercayakan website-nya</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Konten kanan */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="order-1 lg:order-2">
            <h3 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-white">Ily</span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #764ba2 0%, #a4b4ff 100%)",
                }}
              >
                School
              </span>
            </h3>
            <p className="mt-3 text-xl font-bold text-white sm:text-2xl">{p.headline}</p>

            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 sm:text-base">
              <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />
              {p.socialProof}
            </p>

            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{p.hook}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {p.features.map((f) => {
                const Icon = Lucide[f.icon] ?? Lucide.CheckCircle2;
                return (
                  <li key={f.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#764ba2]/15 text-[#c4a4ff]">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{f.title}</p>
                      <p className="text-xs text-white/60">{f.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <Button href={p.cta.href} target="_blank" rel="noopener noreferrer" size="lg" className="!bg-gradient-to-r !from-[#764ba2] !to-[#a4b4ff] hover:!shadow-[0_10px_30px_rgba(118,75,162,0.5)]">
                {p.cta.label}
                <ExternalLink size={16} />
              </Button>
            </div>

            <p className="mt-4 text-xs italic text-white/45">{p.targetAudience}</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};