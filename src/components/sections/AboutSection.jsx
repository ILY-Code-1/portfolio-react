"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Check, ArrowRight, Code2, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TechStackBlock } from "@/components/sections/TechStackBlock";
import { features } from "@/data/features";
import { stats } from "@/data/stats";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const Stat = ({ target, suffix, label, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const value = useCountUp(target, { start: inView, duration: 2000 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all hover:-translate-y-1 hover:border-[#667eea]/40 hover:bg-white/[0.06]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#667eea]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="text-4xl font-extrabold sm:text-5xl">
        <span className="text-gradient-brand">
          {value.toLocaleString("id-ID")}
          {suffix}
        </span>
      </p>
      <p className="mt-2 text-sm font-medium text-white/70 sm:text-base">{label}</p>
    </motion.div>
  );
};

export const AboutSection = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="relative scroll-mt-24 py-24 sm:py-32"
    style={{
      background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)",
    }}
  >
    <BackgroundFX />
    <Container className="relative">
      <SectionHeading eyebrow="Tentang Kami" title="Convert Smile" highlight="Into Code" description="Halo! Kami ILY Code — startup teknologi yang lahir dari mimpi sederhana: membuat teknologi terasa manusiawi." />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Showcase Card */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          aria-label="Kartu showcase Happines Code"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f0f] p-8 sm:p-10"
        >
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#667eea]/30 blur-[100px]" />
          <div className="relative flex flex-col gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-brand shadow-lg shadow-[#667eea]/40">
              <Heart size={28} className="text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-3xl font-bold sm:text-4xl">
                Happines <span className="text-gradient-brand">Code</span>
              </h3>
              <p className="mt-2 text-base text-white/70 sm:text-lg">Kami percaya di balik setiap baris kode, selalu ada cerita.</p>
            </div>

            <TechStackBlock />

            <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
              <Code2 size={20} className="text-[#667eea]" aria-hidden="true" />
              <p className="text-sm text-white/70">Dibangun dengan stack modern: React, Vite, Tailwind, dan banyak hati.</p>
            </div>
          </div>
        </motion.aside>

        {/* About Info */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <h3 id="about-heading" className="text-2xl font-bold sm:text-3xl">
            Dimulai Dengan <span className="text-gradient-brand">Satu Tujuan Sederhana</span>
          </h3>
          <div className="mt-5 space-y-4 text-white/75">
            <p>Berawal sebagai startup kecil yang membantu mahasiswa membangun program mereka, kini kami tumbuh menjadi tim kreatif yang passionate mengubah ide menjadi solusi digital bermakna.</p>
            <p>Hari ini, kami berkolaborasi dengan mahasiswa, kreator, dan pelaku bisnis untuk mewujudkan ide mereka melalui kode yang bersih, kreatif, dan berdampak. Kami percaya teknologi harus lebih dari sekadar fungsional.</p>
            <p>
              Bagi kami, setiap proyek bukan sekadar tugas — tapi kesempatan untuk <span className="text-white">membuat orang tersenyum</span>.
            </p>
          </div>

          <ul className="mt-6 space-y-3" aria-label="Komitmen kami">
            {features.map((f, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full gradient-brand">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-sm text-white/80 sm:text-base">{f}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="/#contact" size="lg">
              Mulai Proyekmu
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Stat key={s.label} {...s} delay={i * 0.1} />
        ))}
      </div>
    </Container>
  </section>
);