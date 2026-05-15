/**
 * Decorative background: gradient blobs + grid overlay.
 * Pure presentational. `pointer-events-none` agar tidak ganggu interaksi.
 */
export const BackgroundFX = ({ variant = "default" }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    <div className="absolute inset-0 bg-grid opacity-40" />
    <div className="absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full bg-[#667eea] opacity-20 blur-[120px] animate-[pulseGlow_8s_ease-in-out_infinite]" />
    <div className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-[#764ba2] opacity-20 blur-[140px] animate-[pulseGlow_10s_ease-in-out_infinite]" />
    {variant === "hero" && (
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#667eea]/15 to-[#764ba2]/15 blur-[100px]" />
    )}
  </div>
);
