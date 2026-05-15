"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Button } from "@/components/ui/Button";
import { Coverflow } from "@/components/coverflow/Coverflow";
import { siteConfig } from "@/data/siteConfig";

export const HomeSection = () => (
  <section
    id="home"
    aria-labelledby="hero-heading"
    className="relative min-h-screen pb-24 pt-32 sm:pt-36"
  >
    <BackgroundFX variant="hero" />
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          <Sparkles size={12} className="text-[#667eea]" aria-hidden="true" />
          {siteConfig.taglineId}
        </span>
        <h1
          id="hero-heading"
          className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Ubah ide jadi <span className="text-gradient-brand">solusi digital</span> yang membuat orang tersenyum.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
          Kami {siteConfig.name} — tim kreatif yang membantu mahasiswa, kreator, dan pelaku bisnis
          mewujudkan ide melalui kode yang bersih, kreatif, dan berdampak.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/#contact" size="lg">
            Mulai Proyekmu
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="/#project" variant="outline" size="lg">
            Lihat Karya Kami
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        id="project"
        className="mt-20 sm:mt-24"
      >
        <Coverflow />

        <div className="mt-12 flex justify-center">
          <Button to="/proyek" variant="outline" size="lg">
            Lihat Semua Proyek
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </div>
      </motion.div>
    </Container>
  </section>
);