import React from "react";
import { motion, type Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; y: number; filter?: string };
  animationTo?: { opacity: number; y: number; filter?: string };
  easing?: [number, number, number, number] | string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  splitBy?: "characters" | "words";
}

export function SplitText({
  text,
  className = "",
  delay = 30,
  animationFrom = { opacity: 0, y: 24, filter: "blur(6px)" },
  animationTo = { opacity: 1, y: 0, filter: "blur(0px)" },
  easing = [0.2, 0.65, 0.3, 0.9],
  textAlign = "left",
  splitBy = "characters",
}: SplitTextProps) {
  const items = splitBy === "characters" ? text.split("") : text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: animationFrom,
    visible: {
      ...animationTo,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{ textAlign }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
    >
      {items.map((item, idx) => (
        <motion.span
          key={idx}
          variants={itemVariants}
          className="inline-block"
          style={{ whiteSpace: item === " " ? "pre" : "normal" }}
        >
          {item === " " ? "\u00A0" : item}
          {splitBy === "words" && idx < items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
