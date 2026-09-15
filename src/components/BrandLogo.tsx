import React from "react";
import { cn } from "@/lib/utils";
import mainLogo from "@/assets/lumeproject/main-logo.png";
import mainWhiteLogo from "@/assets/lumeproject/main-white-logo.png";

interface BrandLogoProps {
  className?: string;
  variant?: "dark" | "light" | "auto" | "white";
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  markOnly?: boolean;
}

export function BrandLogo({
  className = "",
  variant = "light",
  showSubtitle = true,
  size = "md",
  markOnly = false,
}: BrandLogoProps) {
  const isDark = variant === "dark" || variant === "white";
  const logoSrc = isDark ? mainWhiteLogo : mainLogo;

  const sizeClasses = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-11",
    lg: "h-12 sm:h-14",
    xl: "h-16 sm:h-20",
  };

  return (
    <div className={cn("inline-flex items-center select-none group cursor-pointer", className)}>
      <img
        src={logoSrc}
        alt="Lumé Aesthetics"
        className={cn(
          "w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]",
          sizeClasses[size]
        )}
      />
    </div>
  );
}
