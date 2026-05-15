"use client";
import { Calendar } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

/**
 * Kartu showcase proyek — menampilkan seluruh field dari model `projects`
 * (image, year, title, description, longDescription, tags).
 *
 * Showcase-only: tidak ada link ke halaman detail (banyak project sudah tidak
 * di-deploy). Kartu sengaja non-clickable.
 */
export const ProjectCard = ({ project, index = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: Math.min(index, 8) * 0.05 }}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-[#667eea]/50 hover:bg-white/[0.06]"
  >
    <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0f0f0f]">
      <img
        src={project.image}
        alt={`Preview proyek: ${project.title}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.style.opacity = "0";
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
        <Calendar size={12} aria-hidden="true" /> {project.year}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#667eea]">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-semibold text-[#a4b4ff]">
        {project.description}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
        {project.longDescription}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags?.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);
