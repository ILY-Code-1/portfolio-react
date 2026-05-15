"use client";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Badge } from "@/components/ui/Badge";
import { absoluteUrl } from "@/lib/seo";
import { formatDateID } from "@/lib/formatters";

export default function BlogPostContent({ post, prev, next }) {
  const handleShare = async () => {
    const url = absoluteUrl(`/blog/${post.slug}`);
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url });
      } catch (e) {
        void e;
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <article className="relative pb-24 pt-32 sm:pt-36">
      <BackgroundFX />
      <Container className="max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/60 transition hover:text-white">
          <ArrowLeft size={14} /> Kembali ke Blog
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formatDateID(post.publishedAt)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} aria-hidden="true" /> {post.readingTime} menit baca
            </span>
            <span>· oleh {post.author}</span>
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 transition hover:border-[#667eea] hover:text-white"
              aria-label="Bagikan artikel"
            >
              <Share2 size={12} /> Bagikan
            </button>
          </div>
        </motion.header>

        {post.coverImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 overflow-hidden rounded-2xl border border-white/10"
          >
            <img
              src={post.coverImage}
              alt={`Cover artikel: ${post.title}`}
              className="aspect-[16/9] w-full object-cover"
              onError={(e) => {
                e.currentTarget.parentElement.style.display = "none";
              }}
            />
          </motion.div>
        )}

        <div className="prose-invert mt-10 space-y-5 text-base leading-relaxed text-white/85 sm:text-lg">
          {post.body.split(/\n\n+/).map((p, i) =>
            p.startsWith("## ") ? (
              <h2 key={i} className="mt-8 text-xl font-bold text-white sm:text-2xl">
                {p.slice(3)}
              </h2>
            ) : (
              <p key={i}>{p}</p>
            ),
          )}
        </div>

        {post.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-white/8 pt-6">
            {post.tags.map((t) => (
              <Badge key={t} href={`/blog?q=${encodeURIComponent(t)}`}>
                #{t}
              </Badge>
            ))}
          </div>
        )}

        <nav aria-label="Navigasi artikel" className="mt-12 grid gap-3 border-t border-white/8 pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#667eea]/50 hover:bg-white/[0.06]"
            >
              <p className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-white/50">
                <ArrowLeft size={12} /> Sebelumnya
              </p>
              <p className="mt-1 line-clamp-2 text-sm font-semibold text-white/90 group-hover:text-white">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-right transition hover:border-[#667eea]/50 hover:bg-white/[0.06]"
            >
              <p className="flex items-center justify-end gap-1.5 text-xs uppercase tracking-widest text-white/50">
                Berikutnya <ArrowRight size={12} />
              </p>
              <p className="mt-1 line-clamp-2 text-sm font-semibold text-white/90 group-hover:text-white">
                {next.title}
              </p>
            </Link>
          )}
        </nav>
      </Container>
    </article>
  );
}
