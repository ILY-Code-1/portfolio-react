"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import { ArrowRight, ExternalLink, Clock } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Satu card produk. Layout adaptif berdasarkan status & punya atau tidak gambar.
 *
 * Props:
 *   product: object dari data/products.js
 *   featured: boolean — kalau true, card di-highlight (size lebih besar / border glow)
 *   index: number — untuk stagger animation
 */
export const ProductCard = ({ product, featured = false, index = 0 }) => {
  const isComingSoon = product.status === "coming-soon";
  const accent = product.accent || "#667eea";

  const CTAInner = (
    <>
      {product.cta.label}
      {product.cta.external ? (
        <ExternalLink size={16} aria-hidden="true" />
      ) : (
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </>
  );

  const CTA = product.cta.external ? (
    <a
      href={product.cta.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#667eea]/40"
    >
      {CTAInner}
    </a>
  ) : (
    <Link
      href={product.cta.href}
      className="group/cta inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#667eea]/40"
    >
      {CTAInner}
    </Link>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border bg-white/[0.03] p-6 transition-all duration-500 sm:p-7",
        "hover:-translate-y-1 hover:bg-white/[0.06]",
        featured
          ? "border-[#667eea]/30 shadow-xl shadow-[#667eea]/10 lg:col-span-2"
          : "border-white/10 hover:border-[#667eea]/40",
      )}
      aria-labelledby={`product-${product.id}-title`}
    >
      {/* Decorative glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ backgroundColor: accent }}
      />

      {/* Header: badge + name */}
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <h3
            id={`product-${product.id}-title`}
            className="text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            <span className="text-white">Ily</span>
            <span className="text-gradient-brand">
              {product.name.replace("Ily", "")}
            </span>
          </h3>
          <p className="mt-1 text-sm text-white/60">{product.tagline}</p>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
            isComingSoon
              ? "border border-[#667eea]/40 bg-[#667eea]/15 text-[#a4b4ff]"
              : "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
          )}
        >
          {isComingSoon && (
            <Clock size={11} className="mr-1 inline-block" aria-hidden="true" />
          )}
          {product.badge}
        </span>
      </div>

      {/* Image slot — only IlySchool */}
      {product.imageSlot && (
        <div
          className="relative mt-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02]"
          aria-label={`Slot gambar: ${product.imagePlaceholder}`}
        >
          <div className="text-center text-xs text-white/40">
            <Lucide.Image
              size={28}
              className="mx-auto mb-2 opacity-40"
              aria-hidden="true"
            />
            {product.imagePlaceholder}
          </div>
        </div>
      )}

      {/* Headline */}
      <p className="mt-5 text-xl font-bold leading-snug text-white sm:text-2xl">
        {product.headline}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
        {product.hook}
      </p>

      {/* Features (grid) */}
      {product.features && (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {product.features.map((f) => {
            const Icon = Lucide[f.icon] ?? Lucide.Check;
            return (
              <li key={f.title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#a4b4ff] transition-colors group-hover:bg-[#667eea]/15">
                  <Icon size={16} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="text-xs text-white/55">{f.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* Modes (IlyProject) */}
      {product.modes && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {product.modes.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
            >
              <p className="text-sm font-bold text-white">{m.name}</p>
              <p className="mt-1 text-xs text-white/60">{m.tagline}</p>
            </div>
          ))}
        </div>
      )}

      {/* Coverage chips */}
      {product.coverage && (
        <div className="mt-4 flex flex-wrap gap-2">
          {product.coverage.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/75"
            >
              {c}
            </span>
          ))}
        </div>
      )}

      {/* Social proof / target audience */}
      {(product.socialProof || product.targetAudience) && (
        <p className="mt-5 text-xs italic text-white/50">
          {product.socialProof || product.targetAudience}
        </p>
      )}

      {/* CTA pinned to bottom */}
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        {CTA}
        {product.detailPath && !product.cta.external && (
          <Link
            href={product.detailPath}
            className="text-sm font-medium text-white/60 transition hover:text-white"
          >
            Pelajari lebih lanjut →
          </Link>
        )}
      </div>
    </motion.article>
  );
};
