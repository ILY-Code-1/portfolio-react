"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Custom hook 3D Coverflow.
 *
 * Mempertahankan math/feel dari script asli:
 *   translateX = offset * 220px
 *   translateZ = -|offset| * 200px
 *   rotateY    = -sign(offset) * min(|offset| * 60, 60)deg
 *   opacity    = 1 - |offset| * 0.2
 *   scale      = 1 - |offset| * 0.1
 *   |offset| > 3 → opacity 0, translateX = sign * 800px
 *
 * Fitur:
 *   - keyboard ← →
 *   - autoplay (default 4000ms), berhenti saat user interaksi
 *   - swipe touch dengan threshold 30px
 *   - play/pause toggle
 */
export const useCoverflow = ({
  total,
  initialIndex = 0,
  autoplayDelay = 4000,
} = {}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const userInteractedRef = useRef(false);
  const touchStartXRef = useRef(null);

  const goTo = useCallback(
    (idx, { fromUser = true } = {}) => {
      if (fromUser) userInteractedRef.current = true;
      setCurrentIndex(((idx % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(
    ({ fromUser = true } = {}) => goTo(currentIndex + 1, { fromUser }),
    [currentIndex, goTo],
  );

  const prev = useCallback(
    ({ fromUser = true } = {}) => goTo(currentIndex - 1, { fromUser }),
    [currentIndex, goTo],
  );

  const togglePlay = useCallback(() => {
    userInteractedRef.current = true;
    setIsPlaying((p) => !p);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      if (!userInteractedRef.current) {
        setCurrentIndex((i) => (i + 1) % total);
      }
    }, autoplayDelay);
    return () => clearInterval(id);
  }, [isPlaying, autoplayDelay, total]);

  // Reset interaction flag setelah user idle 8 detik
  useEffect(() => {
    if (!userInteractedRef.current) return;
    const id = setTimeout(() => {
      userInteractedRef.current = false;
    }, 8000);
    return () => clearTimeout(id);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      const tag = t?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || t?.isContentEditable) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, togglePlay]);

  // Touch swipe handlers (return them for binding)
  const onTouchStart = useCallback((e) => {
    touchStartXRef.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      if (touchStartXRef.current == null) return;
      const dx = e.changedTouches[0].clientX - touchStartXRef.current;
      if (Math.abs(dx) > 30) {
        if (dx < 0) next();
        else prev();
      }
      touchStartXRef.current = null;
    },
    [next, prev],
  );

  /**
   * Hitung style transform untuk satu item berdasarkan index.
   */
  const getItemStyle = useCallback(
    (index) => {
      const offset = index - currentIndex;
      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);

      if (absOffset > 3) {
        return {
          transform: `translateX(${sign * 800}px) translateZ(-800px) rotateY(${-sign * 60}deg) scale(0.5)`,
          opacity: 0,
          zIndex: 0,
          pointerEvents: "none",
        };
      }

      const translateX = offset * 220;
      const translateZ = -absOffset * 200;
      const rotateY = -sign * Math.min(absOffset * 60, 60);
      const opacity = 1 - absOffset * 0.2;
      const scale = 1 - absOffset * 0.1;

      return {
        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
        opacity,
        zIndex: total - absOffset,
        pointerEvents: "auto",
      };
    },
    [currentIndex, total],
  );

  return {
    currentIndex,
    isPlaying,
    goTo,
    next,
    prev,
    togglePlay,
    getItemStyle,
    onTouchStart,
    onTouchEnd,
  };
};