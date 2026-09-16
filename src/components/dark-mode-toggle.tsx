import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Sparkles, X, ArrowDown } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function DarkModeToggle() {
  const { theme, isDark, toggleTheme, mounted } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [showCallout, setShowCallout] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-reveal callout slightly after mount to grab user's attention
  const [calloutVisible, setCalloutVisible] = useState(false);
  useEffect(() => {
    if (!mounted) return;
    const timer = setTimeout(() => {
      setCalloutVisible(true);
    }, 900);
    return () => clearTimeout(timer);
  }, [mounted]);

  const handleToggle = () => {
    toggleTheme();
    setHasInteracted(true);
  };

  // Avoid hydration mismatch by rendering a stable placeholder until mounted
  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none opacity-0">
        <button className="h-12 w-12 rounded-full" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 select-none print:hidden flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. ATTENTION GRABBER FLOATING CALLOUT BUBBLE */}
      <AnimatePresence>
        {calloutVisible && showCallout && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.92 }}
            animate={{
              opacity: 1,
              y: [0, -4, 0],
              scale: 1,
            }}
            exit={{ opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.25 } }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 2.8,
                ease: "easeInOut",
              },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            className="mb-3 relative mr-1"
          >
            <div
              onClick={handleToggle}
              className={cn(
                "cursor-pointer group flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-lg backdrop-blur-xl transition-all duration-300",
                // Light mode callout
                "bg-white/95 text-[#2A2124] border-[#B76E79]/45 shadow-[0_6px_20px_-4px_rgba(143,73,84,0.25)] hover:border-[#8F4954] hover:shadow-[0_8px_25px_-4px_rgba(143,73,84,0.35)]",
                // Dark mode callout
                "dark:bg-[#1C1116]/95 dark:text-[#FAF4F2] dark:border-[#E7B2A9]/45 dark:shadow-[0_8px_25px_-4px_rgba(0,0,0,0.85),0_0_15px_rgba(231,178,169,0.2)] dark:hover:border-[#E7B2A9]"
              )}
            >
              {/* Radar beacon dot */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B76E79] dark:bg-[#E7B2A9] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8F4954] dark:bg-[#E7B2A9]" />
              </span>

              {/* Callout prompt text */}
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-[0.16em]">
                {isDark ? (
                  <>
                    <Sun className="size-3 text-[#E7B2A9] shrink-0" />
                    <span>Switch to Porcelain Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="size-3 text-[#8F4954] shrink-0" />
                    <span>Try Noir Dark Mode</span>
                  </>
                )}
                <span className="text-[#B76E79] dark:text-[#E7B2A9] font-mono group-hover:translate-x-0.5 transition-transform">
                  ✦
                </span>
              </div>

              {/* Dismiss X button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCallout(false);
                }}
                aria-label="Dismiss callout"
                className="p-0.5 ml-1 text-[#7A6B6E] hover:text-[#2A2124] dark:text-[#A8969C] dark:hover:text-[#FAF4F2] rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                <X className="size-3" />
              </button>
            </div>

            {/* Downward Caret Indicator */}
            <div className="flex justify-end pr-8 -mt-1">
              <div
                className={cn(
                  "size-2 rotate-45 border-b border-r bg-white/95 border-[#B76E79]/45 shadow-xs",
                  "dark:bg-[#1C1116]/95 dark:border-[#E7B2A9]/45"
                )}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. RADAR ATTENTION PULSING RINGS AROUND THE TOGGLE */}
      <div className="relative">
        {/* Expanding subtle radar ping wave */}
        <span
          className={cn(
            "absolute -inset-2.5 rounded-full pointer-events-none opacity-30 animate-ping",
            isDark ? "bg-[#E7B2A9]" : "bg-[#B76E79]"
          )}
          style={{ animationDuration: "3.5s" }}
        />

        {/* Soft breathing radial glow halo */}
        <span
          className={cn(
            "absolute -inset-1 rounded-full pointer-events-none opacity-50 blur-sm animate-pulse",
            isDark ? "bg-[#E7B2A9]/30" : "bg-[#8F4954]/25"
          )}
        />

        {/* 3. MAIN TOGGLE BUTTON */}
        <motion.button
          type="button"
          onClick={handleToggle}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.94 }}
          aria-label={isDark ? "Switch to Porcelain Light Mode" : "Switch to Plum Noir Dark Mode"}
          className={cn(
            "group relative flex items-center gap-2.5 h-12 px-4 rounded-full transition-all duration-500",
            "backdrop-blur-xl border cursor-pointer",
            // Light Mode appearance
            "bg-white/95 text-[#2A2124] border-[#B76E79]/40",
            "shadow-[0_8px_25px_-4px_rgba(143,73,84,0.22)] hover:shadow-[0_12px_32px_-4px_rgba(143,73,84,0.32)] hover:border-[#8F4954]",
            // Dark Mode appearance
            "dark:bg-[#1C1116]/95 dark:text-[#FAF4F2] dark:border-[#E7B2A9]/40",
            "dark:shadow-[0_10px_35px_-4px_rgba(0,0,0,0.85),0_0_20px_rgba(231,178,169,0.2)] dark:hover:border-[#E7B2A9] dark:hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.9),0_0_28px_rgba(231,178,169,0.3)]"
          )}
        >
          {/* Ambient background pulsing aura */}
          <div
            className={cn(
              "absolute inset-0 rounded-full blur-md opacity-40 transition-opacity duration-500 pointer-events-none",
              isDark ? "bg-[#E7B2A9]/25" : "bg-[#B76E79]/20",
              isHovered && "opacity-80"
            )}
          />

          {/* Animated Icon Container */}
          <div className="relative flex items-center justify-center size-6 shrink-0">
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="dark-sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center text-[#E7B2A9]"
                >
                  <Sun className="size-4.5 stroke-[2] drop-shadow-[0_0_8px_rgba(231,178,169,0.6)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="light-moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center text-[#8F4954]"
                >
                  <Moon className="size-4.5 stroke-[2] drop-shadow-[0_0_6px_rgba(143,73,84,0.3)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Text Label with subtle luxury tracking */}
          <div className="flex flex-col text-left overflow-hidden">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] font-sans">
                {isDark ? "Noir Suite" : "Porcelain"}
              </span>
              <span
                className={cn(
                  "inline-block size-1.5 rounded-full transition-colors duration-300",
                  isDark ? "bg-[#E7B2A9] animate-pulse" : "bg-[#8F4954]"
                )}
              />
            </div>
            <span className="text-[8.5px] uppercase tracking-[0.14em] text-[#7A6B6E] dark:text-[#A8969C] -mt-0.5 font-mono">
              {isDark ? "Dark Active" : "Light Active"}
            </span>
          </div>

          {/* Hover Sparkle Accent */}
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="ml-0.5 shrink-0"
          >
            <Sparkles className="size-3 text-[#B76E79] dark:text-[#E7B2A9] opacity-75 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}

