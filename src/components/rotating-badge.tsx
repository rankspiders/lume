import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function RotatingBadge({
  text = "LUMÉ AESTHETICS • BESPOKE BEAUTY ATELIER • ",
  href = "/treatments",
  size = 140,
  className = "",
}: {
  text?: string;
  href?: string;
  size?: number;
  className?: string;
}) {
  const id = `circle-path-${text.replace(/[^a-zA-Z0-9]/g, "").slice(0, 10)}`;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* SVG Rotating Text */}
      <svg
        viewBox="0 0 160 160"
        className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
      >
        <defs>
          <path
            id={id}
            d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          />
        </defs>
        <text className="text-[10px] uppercase font-semibold tracking-[0.24em] fill-[#8F4954]">
          <textPath href={`#${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Action Button */}
      {href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") ? (
        <a
          href={href}
          className="relative z-10 size-12 rounded-full bg-white text-[#8F4954] border border-[#B76E79]/40 flex items-center justify-center transition-all duration-300 hover:bg-[#B76E79] hover:text-white hover:scale-110 shadow-md"
        >
          <ArrowUpRight className="size-4" />
        </a>
      ) : (
        <Link
          to={href as any}
          className="relative z-10 size-12 rounded-full bg-white text-[#8F4954] border border-[#B76E79]/40 flex items-center justify-center transition-all duration-300 hover:bg-[#B76E79] hover:text-white hover:scale-110 shadow-md"
        >
          <ArrowUpRight className="size-4" />
        </Link>
      )}
    </div>
  );
}
