import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig, navigation } from "@/data/siteConfig";
import { socials } from "@/data/socials";

export const Footer = () => (
  <footer className="relative border-t border-white/5 bg-black/95 backdrop-blur-md">
    <Container className="py-14">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <img src="/favicon.png" alt="ILY Code logo" className="h-10 w-10 object-contain" />
            <span className="text-lg font-semibold">
              ILY <span className="text-gradient-brand">Code</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-white/60">{siteConfig.shortDescription}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Social media">
            {socials.map((s) => (
              <li key={s.name}>
                <SocialIcon {...s} />
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Tautan navigasi">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Navigasi</p>
          <ul className="space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/70 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Tautan legal">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Legal</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="text-white/70 transition hover:text-white">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-white/70 transition hover:text-white">
                Syarat Layanan
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-sm text-white/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.copyrightHolder}. All rights reserved.
        </p>
        <p>Dibuat dengan ❤ di {siteConfig.location.region}.</p>
      </div>
    </Container>
  </footer>
);
