"use client";
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { siteConfig, navigation } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

export const Header = () => {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 50;
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;
    const sectionIds = ["home", "about", "produk", "project", "konsultasi", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveHash(`#${visible[0].target.id}`);
      },
      { threshold: [0.3, 0.5, 0.7], rootMargin: "-80px 0px -40% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (e, href) => {
    if (!href.includes("#")) return;
    const [pathPart, hash] = href.split("#");
    if ((pathPart === "" || pathPart === "/") && pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        const offset = scrolled ? 70 : 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        history.replaceState(null, "", `/#${hash}`);
        setActiveHash(`#${hash}`);
      }
    } else if (pathPart === "" || pathPart === "/") {
      e.preventDefault();
      router.push(`/#${hash}`);
    }
    setOpen(false);
  };

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "h-[70px] bg-black/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "h-20 bg-black/80 backdrop-blur-md", "border-b border-white/5")}>
      <Container className="flex h-full items-center justify-between">
        <Link href="/" aria-label={`${siteConfig.name} — kembali ke beranda`} className="flex items-center gap-3 transition-transform hover:scale-[1.02]" onClick={() => setActiveHash("#home")}>
          <img src="/favicon.png" alt="ILY Code logo" className="h-10 w-10 object-contain" />
          <span className="text-lg font-semibold tracking-tight sm:text-xl">
            ILY <span className="text-gradient-brand">Code</span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isHash = item.href.startsWith("/#");
              const hash = isHash ? item.href.slice(1) : null;
              const active = (isHash && pathname === "/" && activeHash === hash) || (!isHash && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)} className={cn("relative rounded-full px-4 py-2 text-sm font-medium transition-colors", active ? "text-white" : "text-white/70 hover:text-white")}>
                    {item.label}
                    {active && <motion.span layoutId="active-pill" className="absolute inset-0 -z-10 rounded-full bg-white/8 ring-1 ring-white/10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute inset-x-0 top-full mx-4 mt-2 origin-top rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-2xl shadow-2xl"
          >
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 transition hover:bg-white/8">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
