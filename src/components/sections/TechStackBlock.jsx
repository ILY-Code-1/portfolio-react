"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { techStack } from "@/data/techStack";

/**
 * Stack teknologi versi compact — dipasang di dalam Showcase Card
 * "Happines Code" pada AboutSection.
 *
 * Tanpa wrapper card sendiri (parent sudah card), tanpa header,
 * tanpa label di bawah icon. Hover keluar warna brand asli + glow.
 */

const IDLE_COLOR = "rgba(255, 255, 255, 0.55)";

const TechIcon = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = SiIcons[item.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      role="img"
      aria-label={item.name}
      title={item.name}
      className="flex h-10 w-10 cursor-default items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
      style={hovered ? { boxShadow: `0 6px 18px -6px ${item.color}55` } : {}}
    >
      {Icon ? (
        <Icon
          aria-hidden="true"
          className="h-5 w-5 transition-colors duration-300"
          style={{ color: hovered ? item.color : IDLE_COLOR }}
        />
      ) : (
        <span className="text-[10px] text-white/30">?</span>
      )}
    </motion.div>
  );
};

export const TechStackBlock = () => (
  <div className="flex flex-wrap gap-2" aria-label="Stack teknologi yang kami pakai">
    {techStack.map((item) => (
      <TechIcon key={item.name} item={item} />
    ))}
  </div>
);