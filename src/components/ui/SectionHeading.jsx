import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}) => {
  const alignment =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("flex max-w-3xl flex-col gap-4", alignment, className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient-brand">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-white/70 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};
