import { cn } from "@/lib/cn";

export const Badge = ({ as: Tag = "span", href, className, children, ...props }) => {
  const classes = cn(
    "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium",
    "border border-white/15 bg-white/5 text-white/90",
    "transition-all duration-300",
    "hover:border-[#667eea] hover:bg-gradient-to-br hover:from-[#667eea] hover:to-[#764ba2] hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#667eea]/40",
    className,
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
