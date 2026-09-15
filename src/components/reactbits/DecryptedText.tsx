import React, { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
}

export function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-=",
  className = "",
  parentClassName = "",
  encryptedClassName = "text-copper/60 opacity-80",
  animateOn = "view",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: any;
    let currentIteration = 0;

    const getNextChar = (char: string) => {
      if (char === " ") return " ";
      if (useOriginalCharsOnly) {
        const chars = Array.from(new Set(text.split("").filter((c) => c !== " ")));
        return chars[Math.floor(Math.random() * chars.length)];
      }
      return characters[Math.floor(Math.random() * characters.length)];
    };

    const shuffleText = () => {
      if (currentIteration >= maxIterations) {
        setDisplayText(text);
        clearInterval(interval);
        return;
      }

      setDisplayText((prevText) =>
        prevText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (sequential) {
              if (index < (currentIteration / maxIterations) * text.length) {
                return text[index];
              }
              return getNextChar(char);
            }
            return Math.random() > 0.5 ? text[index] : getNextChar(char);
          })
          .join("")
      );

      currentIteration++;
    };

    if (animateOn === "view" && isScrolledIntoView) {
      interval = setInterval(shuffleText, speed);
    } else if (animateOn === "hover" && isHovering) {
      interval = setInterval(shuffleText, speed);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [isHovering, isScrolledIntoView, animateOn, text, speed, maxIterations, sequential, useOriginalCharsOnly, characters]);

  useEffect(() => {
    if (animateOn !== "view") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsScrolledIntoView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [animateOn]);

  return (
    <span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={() => animateOn === "hover" && setIsHovering(true)}
      onMouseLeave={() => animateOn === "hover" && setIsHovering(false)}
    >
      <span className={className}>
        {displayText.split("").map((char, index) => {
          const isRevealed = char === text[index];
          return (
            <span
              key={index}
              className={isRevealed ? "" : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
