import { iconMap } from "./BrandIcons";
import { cn } from "@/lib/cn";

export const SocialIcon = ({ name, icon, url, handle, className }) => {
  const Icon = iconMap[icon];
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} ILY Code${handle ? ` — ${handle}` : ""}`}
      title={name}
      className={cn(
        "group relative flex h-12 w-12 items-center justify-center rounded-full",
        "border border-white/10 bg-white/5 text-white/80",
        "transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]",
        "hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#667eea] hover:to-[#764ba2] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#667eea]/40",
        className,
      )}
    >
      {Icon && <Icon size={18} />}
    </a>
  );
};
