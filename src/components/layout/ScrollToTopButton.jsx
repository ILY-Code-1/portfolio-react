"use client";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export const ScrollToTopButton = () => {
  const scrollY = useScrollPosition();
  const visible = scrollY > 500;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Kembali ke atas"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-28 right-8 z-40 hidden h-12 w-12 items-center justify-center rounded-full gradient-brand text-white shadow-lg shadow-[#667eea]/40 transition-transform hover:-translate-y-1 sm:flex"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
