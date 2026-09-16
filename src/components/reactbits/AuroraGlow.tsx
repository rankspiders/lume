import React from "react";

interface AuroraGlowProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "dark" | "light" | "rose";
}

export function AuroraGlow({
  className = "",
  children,
  variant = "rose",
}: AuroraGlowProps) {
  const gradient =
    variant === "dark"
      ? "linear-gradient(135deg, #131211 0%, #201a17 25%, #2a201c 50%, #1c1815 75%, #131211 100%)"
      : variant === "rose"
      ? "linear-gradient(135deg, #FAF5F3 0%, #F5EAE7 30%, #EEDCD9 60%, #FAF5F3 100%)"
      : "linear-gradient(135deg, #FAF5F3 0%, #F4E8E5 25%, #E8C5C8 50%, #F8F3ED 75%, #FAF5F3 100%)";

  const isLightSurface = variant !== "dark";

  return (
    <div
      className={`relative overflow-hidden animate-aurora ${isLightSurface ? "lume-light-surface" : ""} ${className}`}
      data-surface={isLightSurface ? "light" : "dark"}
      style={{
        backgroundImage: gradient,
      }}
    >
      {/* Soft Ambient Radial Accents */}
      <div
        className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          variant === "dark" ? "bg-copper/15" : "bg-[#B76E79]/15"
        }`}
      />
      <div
        className={`absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          variant === "dark" ? "bg-[#DFC29D]/10" : "bg-[#E7B2A9]/20"
        }`}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
