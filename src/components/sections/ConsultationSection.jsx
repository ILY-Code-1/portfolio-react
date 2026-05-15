"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Headset } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Button } from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/ui/BrandIcons";
import { consultationWaUrl } from "@/data/products";

/**
 * Section CTA Konsultasi Gratis (general).
 *
 * Diletakkan setelah seluruh produk (IlyCorp/IlySchool/IlyProject) sebagai
 * jembatan ke ContactSection — user yang masih ragu pilih produk mana
 * bisa langsung chat Admin dulu via WhatsApp.
 *
 * Pesan WA siap-kirim (lihat consultationWaUrl di data/products.js).
 */

export const ConsultationSection = () => (
  <section
    id="konsultasi"
    aria-labelledby="konsultasi-heading"
    className="relative scroll-mt-24 py-24 sm:py-32"
    style={{ background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a2e 100%)" }}
  >
    <BackgroundFX />
    <Container className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#667eea]/15 via-white/[0.02] to-[#764ba2]/15 p-8 text-center sm:p-12"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#667eea]/25 blur-[100px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#764ba2]/25 blur-[100px]" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
            KONSULTASI GRATIS
          </span>

          <span className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-2xl gradient-brand shadow-lg shadow-[#667eea]/40">
            <Headset size={28} className="text-white" aria-hidden="true" />
          </span>

          <h2 id="konsultasi-heading" className="mt-5 text-3xl font-bold sm:text-4xl">
            Punya ide tapi <span className="text-gradient-brand">belum yakin mulai dari mana?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            Chat Admin langsung. Konsultasi awal gratis — kami bantu petakan kebutuhanmu, rekomendasi solusi, dan estimasi biaya tanpa komitmen.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href={consultationWaUrl} target="_blank" rel="noopener noreferrer" size="lg">
              <WhatsappIcon size={18} />
              Mulai Konsultasi via WhatsApp
            </Button>
          </div>

          <p className="mt-5 text-xs italic text-white/45">Respon cepat di jam aktif. Tanpa biaya, tanpa komitmen.</p>
        </div>
      </motion.div>
    </Container>
  </section>
);