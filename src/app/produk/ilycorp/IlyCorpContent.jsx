"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import { ArrowLeft, Send, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Button } from "@/components/ui/Button";
import { getProductById } from "@/data/products";
import { normalizeWhatsapp, isValidWhatsapp } from "@/lib/formatters";

const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter.").max(80, "Terlalu panjang."),
  whatsapp: z
    .string()
    .min(1, "Nomor WhatsApp wajib diisi.")
    .refine((v) => isValidWhatsapp(normalizeWhatsapp(v)), {
      message: "Nomor WhatsApp tidak valid (9–15 digit).",
    }),
  email: z.string().email("Format email tidak valid."),
  business: z.string().min(2, "Nama usaha minimal 2 karakter.").max(100, "Terlalu panjang."),
});

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 transition focus:border-[#667eea] focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#667eea]/30";

export default function IlyCorpContent({ faqItems }) {
  const product = getProductById("ilycorp");
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { name: "", whatsapp: "", email: "", business: "" },
  });

  const submit = async (data) => {
    setErrorMsg("");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, whatsapp: normalizeWhatsapp(data.whatsapp) }),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 6000);
    } catch (err) {
      console.error(err);
      setErrorMsg("Gagal mengirim permintaan. Silakan coba lagi nanti.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <BackgroundFX variant="hero" />
        <Container className="relative">
          <Link href="/#produk" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
            <ArrowLeft size={16} /> Kembali ke produk
          </Link>

          <div className="mt-8 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Tersedia Sekarang
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-white">Ily</span>
                <span className="text-gradient-brand">Corp</span>
              </h1>
              <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">{product.headline}</p>
              <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
                {product.description} Rilis cepat, sudah termasuk maintenance &amp; SSL — semuanya dibahas transparan saat{" "}
                <span className="font-semibold text-white">konsultasi gratis</span>, tanpa biaya tersembunyi.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20">
                <Sparkles size={56} className="text-[#a4b4ff]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="relative py-20 sm:py-28" style={{ background: "linear-gradient(180deg, #0f0f0f 0%, #12122a 100%)" }}>
        <BackgroundFX />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Semua yang kamu butuhkan, <span className="text-gradient-brand">sudah termasuk.</span>
            </h2>
            <p className="mt-3 text-white/70">
              Tanpa paket tambahan, tanpa biaya tersembunyi. Semua kebutuhanmu dibahas tuntas saat konsultasi.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => {
              const Icon = Lucide[f.icon] ?? Lucide.Check;
              return (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-[#667eea]/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand shadow-lg shadow-[#667eea]/30">
                    <Icon size={22} className="text-white" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-lg font-bold text-white">{f.title}</p>
                  <p className="mt-1 text-sm text-white/65">{f.text}</p>
                </motion.li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Consultation form */}
      <section id="konsultasi" className="relative py-20 sm:py-28" style={{ background: "#0a0a0a" }}>
        <Container className="relative">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
                Konsultasi Gratis
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Ngobrol dulu, gratis —{" "}
                <span className="text-gradient-brand">sebelum mutusin apa pun.</span>
              </h2>
              <p className="mt-4 text-white/70">
                Isi form di samping, Admin langsung hubungi kamu via WhatsApp untuk bahas kebutuhan &amp; kasih estimasi. Tanpa biaya, tanpa paksaan.
              </p>
              <ul className="mt-6 space-y-3">
                {["Konsultasi gratis tanpa komitmen", "Langsung dapat estimasi & rekomendasi", "Dihubungi Admin via WhatsApp"].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#a4b4ff]" />
                    <span className="text-sm text-white/80">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit(submit)}
              noValidate
              aria-label="Form konsultasi IlyCorp"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Nama Lengkap <span className="text-[#667eea]">*</span>
                  </label>
                  <input id="name" type="text" autoComplete="name" placeholder="Mis. Budi Santoso" className={fieldClass} aria-invalid={!!errors.name} {...register("name")} />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium">
                    WhatsApp <span className="text-[#667eea]">*</span>
                  </label>
                  <input id="whatsapp" type="tel" inputMode="numeric" autoComplete="tel" placeholder="08xxxxxxxxxx" className={fieldClass} aria-invalid={!!errors.whatsapp} {...register("whatsapp")} />
                  {errors.whatsapp && <p className="mt-1.5 text-xs text-red-400">{errors.whatsapp.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email <span className="text-[#667eea]">*</span>
                  </label>
                  <input id="email" type="email" autoComplete="email" placeholder="kamu@email.com" className={fieldClass} aria-invalid={!!errors.email} {...register("email")} />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="business" className="mb-1.5 block text-sm font-medium">
                    Nama Usaha / PT <span className="text-[#667eea]">*</span>
                  </label>
                  <input id="business" type="text" placeholder="Mis. CV Jaya Makmur" className={fieldClass} aria-invalid={!!errors.business} {...register("business")} />
                  {errors.business && <p className="mt-1.5 text-xs text-red-400">{errors.business.message}</p>}
                </div>
              </div>

              <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p aria-live="polite" className={`text-sm ${sent ? "text-green-400" : errorMsg ? "text-red-400" : "text-white/50"}`}>
                  {sent ? (
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle2 size={16} /> Permintaan konsultasi terkirim! Admin akan menghubungi kamu via WhatsApp.
                    </span>
                  ) : errorMsg ? (
                    errorMsg
                  ) : (
                    "Semua field wajib diisi."
                  )}
                </p>
                <Button as="button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Memproses…</>
                  ) : (
                    <> Minta Konsultasi <Send size={18} /></>
                  )}
                </Button>
              </div>
            </motion.form>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative py-20 sm:py-28" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #12122a 100%)" }}>
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Pertanyaan <span className="text-gradient-brand">yang sering ditanya</span>
              </h2>
              <p className="mt-3 text-white/70">Belum ketemu jawabannya? Langsung hubungi Admin di bawah.</p>
            </div>
            <div className="mt-12 space-y-3">
              {faqItems.map((item, i) => (
                <motion.details
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
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
            <div className="mt-10 text-center">
              <Button href="/#contact" variant="outline">
                Masih ada pertanyaan? Tanya Admin
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
