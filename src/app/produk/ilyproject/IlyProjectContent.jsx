"use client";
import Link from "next/link";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import { ArrowLeft, ArrowRight, Check, ExternalLink, MessageCircle, Code2, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Button } from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/ui/BrandIcons";
import { getProductById } from "@/data/products";

const steps = [
  { icon: "MessageCircle", title: "Konsultasi Gratis", text: "Chat Admin via WhatsApp. Ceritain project, target, dan kendala kamu." },
  { icon: "ClipboardList", title: "Pilih Mode", text: "Mentoring (kamu yang coding) atau Development (kami yang koding)." },
  { icon: "Code2", title: "Proses Pengerjaan", text: "Kerja bareng dalam milestone. Update progres rutin, dokumentasi jalan." },
  { icon: "GraduationCap", title: "Kamu Menguasai Project", text: "Mentoring: project jalan & kamu paham. Development: walk-through sampai kamu siap sidang." },
];

const coverageIcons = {
  Web: "Globe",
  "Mobile Flutter": "Smartphone",
  Desktop: "Monitor",
  "Machine Learning": "BrainCircuit",
};

export default function IlyProjectContent({ faqItems }) {
  const product = getProductById("ilyproject");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <BackgroundFX variant="hero" />
        <Container className="relative">
          <Link href="/#produk" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
            <ArrowLeft size={16} /> Kembali ke produk
          </Link>

          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Tersedia Sekarang
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">Ily</span>
              <span className="text-gradient-brand">Project</span>
            </h1>
            <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">{product.headline}</p>
            <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={product.cta.href} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon size={18} />
                Konsultasi Gratis
                <ExternalLink size={14} />
              </Button>
              <Button href="#mode" variant="outline">
                Lihat Mode Layanan
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/50">
              Konsultasi awal gratis. Tidak ada komitmen sampai scope &amp; estimasi disepakati.
            </p>
          </div>
        </Container>
      </section>

      {/* Modes */}
      <section id="mode" className="relative py-20 sm:py-28" style={{ background: "linear-gradient(180deg, #0f0f0f 0%, #12122a 50%, #0f0f0f 100%)" }}>
        <BackgroundFX />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
              Dua Jalan
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Pilih yang paling <span className="text-gradient-brand">sesuai gaya kamu.</span>
            </h2>
            <p className="mt-3 text-white/70">
              Mau belajar sambil jalan atau mau fokus ke hal lain — kami punya jalan untuk keduanya.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {product.modes.map((mode, i) => {
              const Icon = i === 0 ? GraduationCap : Code2;
              return (
                <motion.div
                  key={mode.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:-translate-y-1 hover:border-[#667eea]/40 hover:bg-white/[0.06]"
                >
                  <span aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#667eea]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand shadow-lg shadow-[#667eea]/30">
                    <Icon size={26} className="text-white" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">{mode.name}</h3>
                  <p className="mt-1 text-base font-semibold text-[#a4b4ff]">{mode.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">{mode.description}</p>
                  <ul className="mt-6 space-y-3">
                    {mode.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#667eea]/20">
                          <Check size={12} className="text-[#a4b4ff]" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-white/80">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <a href={product.cta.href} target="_blank" rel="noopener noreferrer" className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-[#a4b4ff] transition hover:text-white">
                      Pilih mode ini
                      <ArrowRight size={14} className="transition-transform group-hover/cta:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="relative py-20 sm:py-28" style={{ background: "#0a0a0a" }}>
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kami cover <span className="text-gradient-brand">4 platform utama.</span>
            </h2>
            <p className="mt-3 text-white/70">Dari web app sampai model machine learning, kamu bisa andalkan kami.</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.coverage.map((c, i) => {
              const iconName = coverageIcons[c] || "Code2";
              const Icon = Lucide[iconName] ?? Lucide.Code2;
              return (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all hover:-translate-y-1 hover:border-[#667eea]/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#667eea]/15 text-[#a4b4ff] transition-colors group-hover:bg-[#667eea]/25">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-white">{c}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="relative py-20 sm:py-28" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #12122a 100%)" }}>
        <BackgroundFX />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
              Cara Kerja
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              4 langkah simpel, <span className="text-gradient-brand">dari chat sampai selesai.</span>
            </h2>
          </div>

          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = Lucide[step.icon] ?? Lucide.Circle;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span aria-hidden="true" className="absolute -top-3 left-5 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] px-3 py-0.5 text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 flex h-11 w-11 items-center justify-center rounded-xl bg-[#667eea]/15 text-[#a4b4ff]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-base font-bold text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-white/65">{step.text}</p>
                </motion.li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative py-20 sm:py-28" style={{ background: "#0a0a0a" }}>
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Pertanyaan <span className="text-gradient-brand">yang sering ditanya</span>
              </h2>
              <p className="mt-3 text-white/70">Belum terjawab? Chat Admin langsung, tidak perlu komitmen.</p>
            </div>
            <div className="mt-12 space-y-3">
              {faqItems.map((item, i) => (
                <motion.details
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-[#667eea]/40 open:border-[#667eea]/40 open:bg-white/[0.05]"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-white">
                    {item.q}
                    <Lucide.ChevronDown size={18} className="shrink-0 text-[#a4b4ff] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{item.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 sm:py-32" style={{ background: "radial-gradient(ellipse at top, #12122a 0%, #0a0a0a 60%)" }}>
        <Container className="relative">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 p-10 text-center sm:p-14">
            <MessageCircle size={40} className="mx-auto text-[#a4b4ff]" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Siap mulai <span className="text-gradient-brand">satu baris kode?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Ceritakan idemu via WhatsApp. Konsultasi awal gratis — kami bantu rumuskan scope dan timeline yang realistis.
            </p>
            <div className="mt-8">
              <Button href={product.cta.href} target="_blank" rel="noopener noreferrer" size="lg">
                <WhatsappIcon size={20} />
                Konsultasi via WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
