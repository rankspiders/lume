import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  pullStrength?: number;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  pullStrength,
}: MagneticButtonProps) {
  const actualStrength = pullStrength !== undefined ? pullStrength : strength;
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * actualStrength, y: middleY * actualStrength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
