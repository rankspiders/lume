import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "dark" | "light" | "auto";
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  className = "",
  variant = "auto",
  showSubtitle = true,
  size = "md",
}: BrandLogoProps) {
  const sizeClasses = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-[1.85rem]",
    lg: "text-3xl sm:text-4xl",
  };

  const subtitleClasses = {
    sm: "text-[7.5px] tracking-[0.32em]",
    md: "text-[8.5px] tracking-[0.36em]",
    lg: "text-[10px] tracking-[0.4em]",
  };

  return (
    <div className={cn("inline-flex items-center gap-3 select-none group cursor-pointer", className)}>
      {/* Luxury Geometric Crest Emblem (SVG Vector) */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-7 sm:size-9 transition-transform duration-500 group-hover:scale-105"
        >
          {/* Outer Delicate Rhombus / Diamond */}
          <rect
            x="24"
            y="4"
            width="28"
            height="28"
            transform="rotate(45 24 4)"
            stroke="url(#lume-crest-gold)"
            strokeWidth="1"
            className="opacity-70"
          />
          {/* Inner Concentric Diamond */}
          <rect
            x="24"
            y="10"
            width="19.8"
            height="19.8"
            transform="rotate(45 24 10)"
            stroke="url(#lume-crest-copper)"
            strokeWidth="0.75"
            strokeDasharray="2 2"
            className="opacity-50"
          />
          {/* Central 8-Point Atelier Star */}
          <path
            d="M24 13L25.8 21.2L34 23L25.8 24.8L24 33L22.2 24.8L14 23L22.2 21.2L24 13Z"
            fill="url(#lume-crest-gold)"
          />
          {/* Micro Corner Petals */}
          <circle cx="24" cy="7" r="1" fill="#DFC29D" />
          <circle cx="24" cy="39" r="1" fill="#DFC29D" />
          <circle cx="8" cy="23" r="1" fill="#DFC29D" />
          <circle cx="40" cy="23" r="1" fill="#DFC29D" />

          <defs>
            <linearGradient id="lume-crest-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF7F2" />
              <stop offset="50%" stopColor="#DFC29D" />
              <stop offset="100%" stopColor="#C58A58" />
            </linearGradient>
            <linearGradient id="lume-crest-copper" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0A96D" />
              <stop offset="100%" stopColor="#8F5524" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Haute Wordmark Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-0.5">
          <span
            className={cn(
              "font-display font-light tracking-[0.14em] uppercase transition-colors duration-300",
              sizeClasses[size],
              variant === "light"
                ? "text-[#131211]"
                : "text-[#FAF7F2] group-hover:text-white"
            )}
            style={{
              letterSpacing: "0.14em",
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            LUM
            <span className="relative inline-block">
              É
              {/* Refined Gold Accent Aigu Highlight */}
              <span
                className="absolute -top-1 right-0 text-[#DFC29D] font-serif font-normal"
                aria-hidden="true"
              />
            </span>
          </span>
        </div>

        {showSubtitle && (
          <span
            className={cn(
              "font-sans font-semibold uppercase text-copper block -mt-0.5 transition-colors",
              subtitleClasses[size],
              "text-[#C58A58] group-hover:text-[#DFC29D]"
            )}
          >
            Aesthetics • Atelier
          </span>
        )}
      </div>
    </div>
  );
}
