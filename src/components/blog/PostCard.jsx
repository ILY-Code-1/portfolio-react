"use client";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { formatDateID } from "@/lib/formatters";

export const PostCard = ({ post, index = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-[#667eea]/50 hover:bg-white/[0.06]"
  >
    <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0f0f0f]">
      <img
        src={post.coverImage}
        alt={`Cover artikel: ${post.title}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.style.opacity = "0";
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
        {post.category}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center gap-3 text-xs text-white/50">
        <span className="inline-flex items-center gap-1">
          <Calendar size={12} aria-hidden="true" />
          <time dateTime={post.publishedAt}>{formatDateID(post.publishedAt)}</time>
        </span>
        <span aria-hidden="true">·</span>
        <span className="inline-flex items-center gap-1">
          <Clock size={12} aria-hidden="true" /> {post.readingTime} menit
        </span>
      </div>

      <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#667eea]">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
          {post.title}
        </Link>
      </h3>

      <p className="mt-2 line-clamp-3 flex-1 text-sm text-white/65">{post.excerpt}</p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#667eea]">
        Baca selengkapnya{" "}
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </motion.article>
);
