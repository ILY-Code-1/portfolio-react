"use client";
import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide " +
  "transition-all duration-300 will-change-transform " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2 focus-visible:ring-offset-black " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "gradient-brand text-white shadow-lg shadow-[#667eea]/30 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(102,126,234,0.5)] active:translate-y-0",
  outline:
    "border border-white/20 bg-white/5 text-white hover:border-[#667eea] hover:bg-white/10 hover:-translate-y-0.5",
  ghost:
    "text-white/80 hover:text-white hover:bg-white/5",
};

const sizes = {
  sm: "h-9 px-4 text-sm rounded-full",
  md: "h-11 px-6 text-base rounded-full",
  lg: "h-14 px-8 text-base rounded-full",
};

export const Button = forwardRef(function Button(
  {
    as,
    href,
    to,
    target,
    rel,
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
  },
  ref,
) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link ref={ref} href={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        ref={ref}
        href={href}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  const Tag = as || "button";
  return (
    <Tag ref={ref} className={classes} {...props}>
      {children}
    </Tag>
  );
});
