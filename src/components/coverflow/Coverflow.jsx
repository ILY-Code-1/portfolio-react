"use client";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CoverflowItem } from "./CoverflowItem";
import { useCoverflow } from "./useCoverflow";
import { projects, initialCoverflowIndex } from "@/data/projects";
import { cn } from "@/lib/cn";

export const Coverflow = () => {
  const total = projects.length;
  const {
    currentIndex,
    isPlaying,
    next,
    prev,
    goTo,
    togglePlay,
    getItemStyle,
    onTouchStart,
    onTouchEnd,
  } = useCoverflow({
    total,
    initialIndex: initialCoverflowIndex,
    autoplayDelay: 4000,
  });

  const active = projects[currentIndex];

  return (
    <div className="relative w-full">
      <div
        className="relative mx-auto h-[440px] w-full max-w-5xl select-none overflow-hidden sm:h-[500px]"
        style={{ perspective: "1200px" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Showcase Proyek ILY Code"
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {projects.map((project, idx) => (
            <CoverflowItem
              key={project.id}
              project={project}
              style={getItemStyle(idx)}
              active={idx === currentIndex}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => prev()}
          aria-label="Proyek sebelumnya"
          className="absolute left-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-gradient-to-br hover:from-[#667eea] hover:to-[#764ba2] hover:scale-110 sm:left-6 sm:h-14 sm:w-14"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={() => next()}
          aria-label="Proyek berikutnya"
          className="absolute right-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-gradient-to-br hover:from-[#667eea] hover:to-[#764ba2] hover:scale-110 sm:right-6 sm:h-14 sm:w-14"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mx-auto mt-8 max-w-2xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              {active.tags?.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold sm:text-3xl">{active.title}</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white/70 sm:text-base">
              {active.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause autoplay" : "Putar autoplay"}
            aria-pressed={isPlaying}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#667eea] hover:bg-white/10"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          <div
            role="tablist"
            aria-label="Navigasi proyek"
            className="flex items-center gap-2"
          >
            {projects.map((p, idx) => {
              const active = idx === currentIndex;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Pilih proyek ${p.title}`}
                  onClick={() => goTo(idx)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    active
                      ? "w-8 gradient-brand shadow-md shadow-[#667eea]/50"
                      : "w-2.5 bg-white/20 hover:bg-white/40",
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};