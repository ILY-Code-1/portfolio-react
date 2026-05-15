"use client";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/BrandIcons";
import { whatsappFabUrl } from "@/data/socials";
import { siteConfig } from "@/data/siteConfig";

const STORAGE_KEY = "ily_wa_fab_dismissed_at";
const REAPPEAR_AFTER_MS = 1000 * 60 * 60 * 24; // 1 hari

export const WhatsAppFab = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1000);

    try {
      const last = Number(localStorage.getItem(STORAGE_KEY));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (last && Date.now() - last < REAPPEAR_AFTER_MS) setDismissed(true);
    } catch (e) {
      void e;
    }
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch (e) {
      void e;
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {open && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-label="Quick chat WhatsApp"
          className="relative w-72 rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-2xl shadow-2xl"
        >
          <button type="button" onClick={dismiss} aria-label="Tutup pop-up" className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white">
            <X size={14} />
          </button>
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
              <WhatsappIcon size={20} className="text-white" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Hai! 👋 Saya Admin {siteConfig.name}</p>
              <p className="mt-1 text-xs text-white/70">Ada yang bisa kami bantu hari ini? Klik tombol di bawah untuk mulai chat.</p>
            </div>
          </div>
          <a
            href={whatsappFabUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-sm font-semibold text-white transition hover:bg-[#1da851]"
          >
            <WhatsappIcon size={16} /> Mulai Chat
          </a>
        </motion.div>
      )}

      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat WhatsApp dengan Admin ILY Code"
        aria-expanded={open}
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-110"
      >
        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsappIcon size={26} className="relative" />
      </motion.button>
    </div>
  );
};
