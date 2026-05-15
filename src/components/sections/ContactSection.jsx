"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/data/siteConfig";
import { socials } from "@/data/socials";

const ContactItem = ({ Icon, title, content, href }) => {
  const inner = (
    <div className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-[#667eea]/40 hover:bg-white/[0.06]">
      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl gradient-brand shadow-md shadow-[#667eea]/30 transition-transform group-hover:scale-110">
        <Icon size={20} className="text-white" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
          {title}
        </p>
        <p className="mt-0.5 break-words text-sm text-white/85 sm:text-base">
          {content}
        </p>
      </div>
    </div>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={`${title}: ${content}`}
      >
        {inner}
      </a>
    );
  }
  return inner;
};

export const ContactSection = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
  >
    <BackgroundFX />
    <Container className="relative">
      <SectionHeading
        eyebrow="Kontak"
        title="Hubungi"
        highlight="Kami"
        description="Punya ide proyek? Mari ciptakan sesuatu yang luar biasa bersama."
      />
      <h2 id="contact-heading" className="sr-only">
        Hubungi Kami
      </h2>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold sm:text-3xl">
            Mari <span className="text-gradient-brand">Terhubung</span>
          </h3>
          <p className="mt-3 text-white/70">
            Punya ide yang ingin diwujudkan? Kami siap membuatnya jadi nyata — satu baris kode setiap
            kalinya. Baik kamu mahasiswa, kreator, atau pemilik bisnis, mari bangun sesuatu yang
            bermakna bersama.
          </p>

          <div className="mt-8 space-y-3">
            <ContactItem
              Icon={Mail}
              title="Email"
              content={siteConfig.contact.email}
              href={`mailto:${siteConfig.contact.email}`}
            />
            <ContactItem
              Icon={Phone}
              title="WhatsApp"
              content={siteConfig.contact.phoneDisplay}
              href={`https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}`}
            />
            <ContactItem
              Icon={MapPin}
              title="Alamat"
              content={`${siteConfig.location.address}, ${siteConfig.location.district}, ${siteConfig.location.region}`}
            />
            <ContactItem
              Icon={Clock}
              title="Jam Operasional"
              content={siteConfig.contact.hours}
            />
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">
              Ikuti Kami
            </p>
            <ul className="flex flex-wrap items-center gap-3" aria-label="Sosial media ILY Code">
              {socials.map((s) => (
                <li key={s.name}>
                  <SocialIcon {...s} />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <ContactForm />
      </div>
    </Container>
  </section>
);