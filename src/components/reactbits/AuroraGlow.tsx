import React from "react";

interface AuroraGlowProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "dark" | "light";
}

export function AuroraGlow({
  className = "",
  children,
  variant = "dark",
}: AuroraGlowProps) {
  const gradient =
    variant === "dark"
      ? "linear-gradient(135deg, #131211 0%, #201a17 25%, #2a201c 50%, #1c1815 75%, #131211 100%)"
      : "linear-gradient(135deg, #FAF7F2 0%, #F5ECE3 25%, #EFE5DB 50%, #F8F3ED 75%, #FAF7F2 100%)";

  return (
    <div
      className={`relative overflow-hidden animate-aurora ${className}`}
      style={{
        backgroundImage: gradient,
      }}
    >
      {/* Soft Ambient Radial Accents */}
      <div
        className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          variant === "dark" ? "bg-copper/15" : "bg-copper/10"
        }`}
      />
      <div
        className={`absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          variant === "dark" ? "bg-[#DFC29D]/10" : "bg-[#B57E52]/10"
        }`}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
