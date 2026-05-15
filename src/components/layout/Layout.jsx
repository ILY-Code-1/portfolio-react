import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { WhatsAppFab } from "./WhatsAppFab";

const SkipLink = () => (
  <a
    href="#main"
    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:gradient-brand focus:px-4 focus:py-2 focus:text-white focus:shadow-xl"
  >
    Lewati ke konten utama
  </a>
);

export const Layout = ({ children }) => {
  const { pathname, hash } = useLocation();

  // Auto-scroll ke top saat pindah halaman (kecuali ada hash)
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  // Smooth scroll ke section saat hash berubah
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    const t = setTimeout(tryScroll, 80);
    return () => clearTimeout(t);
  }, [hash, pathname]);

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="relative">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppFab />
    </>
  );
};
