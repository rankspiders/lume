import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
  sentence?: string;
  words?: string[];
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}

export function TrueFocus({
  sentence = "Unhurried Serenity Clinical Precision Bespoke Artistry",
  words,
  manualMode = false,
  blurAmount = 4,
  borderColor = "#B57E52",
  glowColor = "rgba(181, 126, 82, 0.4)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1.2,
  className = "",
}: TrueFocusProps) {
  const wordList = words || sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (manualMode) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wordList.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, wordList.length]);

  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const target = wordRefs.current[currentIndex]!;
    const container = containerRef.current;

    const targetRect = target.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setFocusRect({
      x: targetRect.left - containerRect.left - 4,
      y: targetRect.top - containerRect.top - 2,
      width: targetRect.width + 8,
      height: targetRect.height + 4,
    });
  }, [currentIndex]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode && lastActiveIndex !== null) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex flex-wrap items-center gap-x-3 gap-y-2 select-none ${className}`}
      onMouseLeave={handleMouseLeave}
    >
      {wordList.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            className="relative cursor-pointer transition-all duration-300 font-display text-lg sm:text-2xl"
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              opacity: isActive ? 1 : 0.45,
              color: isActive ? "#B57E52" : "inherit",
            }}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute pointer-events-none border border-copper/80"
        style={{
          boxShadow: `0 0 16px ${glowColor}`,
        }}
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: focusRect.width > 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-copper" />
        <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-copper" />
        <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-copper" />
        <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-copper" />
      </motion.div>
    </div>
  );
}
