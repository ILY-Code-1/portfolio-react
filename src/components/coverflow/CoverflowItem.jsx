"use client";
/**
 * Single 3D coverflow item dengan reflection.
 * Props:
 *  - project: object dari data/projects.js
 *  - style: hasil getItemStyle(index) dari useCoverflow
 *  - active: boolean (item di tengah). Active = cursor-default (tidak clickable),
 *            inactive = cursor-pointer (klik untuk navigasi ke index itu).
 *  - onClick: handler
 */
export const CoverflowItem = ({ project, style, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={active ? `Proyek ${project.title} (aktif)` : `Pilih proyek ${project.title}`}
    aria-current={active ? "true" : undefined}
    style={style}
    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${active ? "cursor-default" : "cursor-pointer"}`}
  >
    <div
      className={`group relative h-[280px] w-[280px] overflow-hidden rounded-2xl border bg-gradient-to-br from-[#1a1a2e] to-[#0f0f0f] shadow-2xl shadow-black/60 sm:h-[300px] sm:w-[300px] ${
        active ? "border-[#667eea]/60 ring-2 ring-[#667eea]/30" : "border-white/10"
      }`}
    >
      <img
        src={project.image}
        alt={`Tampilan layar proyek ${project.title} — ${project.description}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
    </div>

    {/* Reflection */}
    <div
      aria-hidden="true"
      className="mx-auto mt-2 h-[80px] w-[280px] sm:w-[300px] overflow-hidden rounded-2xl opacity-30"
      style={{
        transform: "scaleY(-1)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        filter: "blur(2px)",
      }}
    >
      <img
        src={project.image}
        alt=""
        aria-hidden="true"
        className="h-[280px] w-[280px] object-cover sm:h-[300px] sm:w-[300px]"
      />
    </div>
  </button>
);