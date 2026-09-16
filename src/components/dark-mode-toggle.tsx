import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function DarkModeToggle() {
  const { theme, isDark, toggleTheme, mounted } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

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
      className="fixed bottom-6 right-6 z-50 select-none print:hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        type="button"
        onClick={toggleTheme}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isDark ? "Switch to Porcelain Light Mode" : "Switch to Plum Noir Dark Mode"}
        className={cn(
          "group relative flex items-center gap-2.5 h-12 px-4 rounded-full transition-all duration-500",
          "backdrop-blur-xl border cursor-pointer",
          // Light Mode appearance
          "bg-white/90 text-[#2A2124] border-[#B76E79]/35",
          "shadow-[0_8px_25px_-4px_rgba(143,73,84,0.18)] hover:shadow-[0_12px_32px_-4px_rgba(143,73,84,0.28)] hover:border-[#8F4954]",
          // Dark Mode appearance
          "dark:bg-[#1C1116]/92 dark:text-[#FAF4F2] dark:border-[#E7B2A9]/35",
          "dark:shadow-[0_10px_35px_-4px_rgba(0,0,0,0.85),0_0_20px_rgba(231,178,169,0.15)] dark:hover:border-[#E7B2A9] dark:hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.9),0_0_28px_rgba(231,178,169,0.25)]"
        )}
      >
        {/* Ambient background pulsing aura */}
        <div
          className={cn(
            "absolute inset-0 rounded-full blur-md opacity-40 transition-opacity duration-500 pointer-events-none",
            isDark ? "bg-[#E7B2A9]/20" : "bg-[#B76E79]/15",
            isHovered && "opacity-75"
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
          <Sparkles className="size-3 text-[#B76E79] dark:text-[#E7B2A9] opacity-70 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </motion.button>
    </div>
  );
}
