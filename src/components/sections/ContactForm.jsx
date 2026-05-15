"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { normalizeWhatsapp, isValidWhatsapp } from "@/lib/formatters";

const schema = z.object({
  name: z
    .string()
    .min(2, "Nama minimal 2 karakter.")
    .max(80, "Nama terlalu panjang."),
  whatsapp: z
    .string()
    .min(1, "Nomor WhatsApp wajib diisi.")
    .refine((v) => isValidWhatsapp(normalizeWhatsapp(v)), {
      message: "Nomor WhatsApp tidak valid. Pastikan panjangnya 9–15 digit.",
    }),
  email: z.string().email("Format email tidak valid."),
  subject: z
    .string()
    .min(3, "Subjek minimal 3 karakter.")
    .max(120, "Subjek terlalu panjang."),
  message: z
    .string()
    .min(10, "Pesan minimal 10 karakter.")
    .max(2000, "Pesan terlalu panjang."),
});

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 transition focus:border-[#667eea] focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#667eea]/30";

export const ContactForm = () => {
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
    defaultValues: { name: "", whatsapp: "", email: "", subject: "", message: "" },
  });

  const submit = async (data) => {
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
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
      setErrorMsg("Gagal mengirim pesan. Silakan coba lagi nanti.");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(submit)}
      noValidate
      aria-label="Form kontak ILY Code"
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8"
    >
      <h3 className="text-2xl font-bold">Kirim Pesan</h3>
      <p className="mt-1 text-sm text-white/60">
        Pesan kamu akan dikirim langsung ke email kami.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Nama Lengkap <span className="text-[#667eea]">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Mis. Budi Santoso"
            className={fieldClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium">
            Nomor WhatsApp <span className="text-[#667eea]">*</span>
          </label>
          <input
            id="whatsapp"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="08xxxxxxxxxx"
            className={fieldClass}
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? "wa-error" : undefined}
            {...register("whatsapp")}
          />
          {errors.whatsapp && (
            <p id="wa-error" className="mt-1.5 text-xs text-red-400">
              {errors.whatsapp.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Alamat Email <span className="text-[#667eea]">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="kamu@email.com"
            className={fieldClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
            Subjek <span className="text-[#667eea]">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Mis. Konsultasi pembuatan website"
            className={fieldClass}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 text-xs text-red-400">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            Pesan <span className="text-[#667eea]">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Ceritakan idemu di sini…"
            className={`${fieldClass} min-h-[150px] resize-y`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          aria-live="polite"
          className={`text-sm ${
            sent ? "text-green-400" : errorMsg ? "text-red-400" : "text-white/50"
          }`}
        >
          {sent ? (
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} /> Pesan berhasil dikirim! Kami akan segera menghubungi kamu.
            </span>
          ) : errorMsg ? (
            errorMsg
          ) : (
            "Field bertanda * wajib diisi."
          )}
        </p>
        <Button as="button" type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Mengirim…
            </>
          ) : (
            <>
              Kirim Pesan <Send size={18} />
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
};
