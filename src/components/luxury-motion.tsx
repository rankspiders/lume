import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, Clock, Check, ArrowRight, Shield, Star, Compass } from "lucide-react";

export function HauteMarquee({
  items,
  speed = "normal",
  dark = false,
}: {
  items?: string[];
  speed?: "fast" | "normal" | "slow";
  dark?: boolean;
}) {
  const defaultItems = [
    "BIOLINE JATÒ ITALY CERTIFIED",
    "100% PRIVATE SANCTUARY SUITES",
    "ADVANCED DERMAL PROTOCOLS",
    "SHERWOOD PARK, ALBERTA",
    "BESPOKE BOTANICAL FORMULATIONS",
    "HAUTE CLINICAL AESTHETICS",
    "AUTOLOGOUS PRP & DERMAL REJUVENATION",
  ];

  const list = items || defaultItems;

  return (
    <div
      className={`overflow-hidden whitespace-nowrap py-3.5 border-y select-none relative ${
        dark
          ? "bg-[#2A2124] text-white border-[#B76E79]/40"
          : "bg-white/90 text-[#2A2124] border-[#B76E79]/25 shadow-sm"
      }`}
    >
      <div className="animate-marquee flex items-center gap-8">
        {[...list, ...list, ...list, ...list].map((item, idx) => (
          <span key={idx} className="flex items-center gap-8 text-[11px] sm:text-xs font-sans font-semibold tracking-[0.25em] uppercase">
            <span className={dark ? "text-white" : "text-[#2A2124]"}>{item}</span>
            <span className="text-[#B76E79] inline-block font-bold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function LiveSuiteClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Edmonton",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setTime(formatted);
      } catch (e) {
        setTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-white text-[#2A2124] border border-[#B76E79]/40 text-xs tracking-[0.18em] uppercase font-sans shadow-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span className="text-[#5E5054] font-medium">Sherwood Park (MT):</span>
      <span className="font-mono text-[#8F4954] font-bold">{time || "10:00:00 AM"}</span>
      <span className="text-[#B76E79]/40">|</span>
      <span className="text-[#8F4954] font-bold">SUITES OPEN</span>
    </div>
  );
}

export interface RitualStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
  formulation: string;
  benefit: string;
}

export function InteractiveRitualTimeline({
  steps,
  treatmentTitle,
}: {
  steps: RitualStep[];
  treatmentTitle: string;
}) {
  const [activeStep, setActiveStep] = useState(0);

  if (!steps || steps.length === 0) {
    return null;
  }

  const currentStep = steps[activeStep] ?? steps[0];
  if (!currentStep) {
    return null;
  }

  return (
    <div className="border border-[#B76E79]/25 bg-white text-[#2A2124] p-6 sm:p-10 shadow-soft-card relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B76E79]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#B76E79]/20 pb-6 mb-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#8F4954] font-bold">
            Protocol Architecture
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-light text-[#2A2124] mt-1">
            {treatmentTitle} Sequence
          </h3>
        </div>
        <div className="text-left md:text-right">
          <span className="text-[10px] uppercase tracking-widest text-[#8F4954] font-semibold block">
            Step {activeStep + 1} of {steps.length}
          </span>
          <span className="text-xs text-[#5E5054] font-normal">Interactive Clinical Scrub</span>
        </div>
      </div>

      {/* Scrub Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`text-left p-3.5 border transition-all duration-300 relative ${
              activeStep === idx
                ? "border-[#B76E79] bg-[#FDF8F7] text-[#2A2124] shadow-sm font-semibold"
                : "border-[#B76E79]/15 bg-[#FAF5F3] text-[#5E5054] hover:border-[#B76E79]/40 hover:text-[#2A2124]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-widest text-[#8F4954] font-bold">
                {step.phase}
              </span>
              {activeStep === idx && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#B76E79] animate-pulse" />
              )}
            </div>
            <p className="font-display text-sm mt-1 truncate text-[#2A2124]">{step.title}</p>
          </button>
        ))}
      </div>

      {/* Active Step Showcase */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid md:grid-cols-12 gap-6 bg-[#FAF5F3] border border-[#B76E79]/20 p-6 sm:p-8"
      >
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-white text-[#8F4954] border border-[#B76E79]/30 text-[9px] tracking-widest uppercase font-bold shadow-sm">
              {currentStep.phase}
            </span>
            <span className="text-[11px] text-[#5E5054] font-medium tracking-wider flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#B76E79]" /> {currentStep.duration}
            </span>
          </div>

          <h4 className="font-display text-2xl sm:text-3xl text-[#2A2124] font-light">
            {currentStep.title}
          </h4>

          <p className="text-xs sm:text-sm text-[#5E5054] font-normal leading-relaxed">
            {currentStep.description}
          </p>
        </div>

        <div className="md:col-span-5 space-y-4 md:border-l md:border-[#B76E79]/20 md:pl-6 flex flex-col justify-center">
          <div className="bg-white p-4 border border-[#B76E79]/25 shadow-sm">
            <span className="text-[9px] uppercase tracking-widest text-[#8F4954] font-bold block">
              Italian Formulation Base
            </span>
            <p className="font-display text-base text-[#2A2124] mt-1">
              {currentStep.formulation}
            </p>
          </div>

          <div className="bg-white p-4 border border-[#B76E79]/25 shadow-sm">
            <span className="text-[9px] uppercase tracking-widest text-emerald-600 font-bold block">
              Clinical Dermal Objective
            </span>
            <p className="text-xs text-[#5E5054] font-normal mt-1">
              {currentStep.benefit}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function BeforeAfterInteractive({
  beforeImage,
  afterImage,
  title,
  subtitle,
}: {
  beforeImage: string;
  afterImage: string;
  title: string;
  subtitle: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="border border-[#B76E79]/25 bg-white p-6 sm:p-8 text-[#2A2124] shadow-soft-card relative">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-bold">
            Clinical Transformation
          </span>
          <h3 className="font-display text-2xl font-light text-[#2A2124]">{title}</h3>
        </div>
        <p className="text-xs text-[#5E5054] font-normal">{subtitle}</p>
      </div>

      <div
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden select-none border border-[#B76E79]/20 group cursor-ew-resize"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const pos = ((e.clientX - rect.left) / rect.width) * 100;
          setSliderPos(Math.min(Math.max(pos, 5), 95));
        }}
        onTouchMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const touch = e.touches[0];
          if (!touch) return;
          const pos = ((touch.clientX - rect.left) / rect.width) * 100;
          setSliderPos(Math.min(Math.max(pos, 5), 95));
        }}
      >
        {/* After Image (Full background) */}
        <img
          src={afterImage}
          alt="After treatment transformation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-black/75 text-[#E7B2A9] border border-[#E7B2A9]/40 text-[9px] uppercase tracking-widest font-mono">
          After Protocol
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden border-r-2 border-[#B76E79]"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={beforeImage}
            alt="Before treatment transformation"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-black/75 text-white/95 border border-white/30 text-[9px] uppercase tracking-widest font-mono">
            Initial State
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#B76E79] flex items-center justify-center pointer-events-none shadow-lg"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="h-8 w-8 rounded-full bg-white border-2 border-[#B76E79] flex items-center justify-center text-[#8F4954] text-xs font-mono shadow-md">
            ⟷
          </div>
        </div>
      </div>
      <p className="text-[10px] text-center text-[#7D6B70] tracking-wider uppercase mt-3 font-medium">
        Hover or drag across the frame to reveal treatment refinement
      </p>
    </div>
  );
}
