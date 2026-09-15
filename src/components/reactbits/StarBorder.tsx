import React from "react";

interface StarBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children: React.ReactNode;
}

export function StarBorder({
  as: Component = "button",
  className = "",
  color = "#B57E52",
  speed = "4s",
  children,
  ...rest
}: StarBorderProps) {
  return (
    <Component
      className={`relative inline-block py-[1px] px-[1px] overflow-hidden rounded-none ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-10 bg-[#131211] text-[#FAF7F2] w-full h-full">
        {children}
      </div>
    </Component>
  );
}
