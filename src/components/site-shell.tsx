import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Search,
  Calendar,
  DollarSign,
  Users,
  Image as ImageIcon,
  FileText,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MagneticButton, ShinyText } from "@/components/reactbits";
import { BrandLogo } from "@/components/BrandLogo";
import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import advancedImage from "@/assets/advanced-aesthetics.jpg";
import heroImage from "@/assets/lume-hero.jpg";

const serviceCategories = [
  {
    title: "All Treatments Menu",
    eyebrow: "Complete 24+ Catalog",
    href: "/treatments" as const,
    description: "Explore all facial, bodywork, medical aesthetic, and beauty atelier suites.",
    tag: "Full Menu",
  },
  {
    title: "Skin & Body Rituals",
    eyebrow: "Italian Botanical Care",
    href: "/services/skin-and-body-rituals" as const,
    description: "Bioline 20% AHA Glycolic peels, Aqua Luxe hydration, and Mocha Gua Sha bodywork.",
    tag: "Bioline Jatò",
  },
  {
    title: "Advanced Clinical Aesthetics",
    eyebrow: "Doctor-Led Precision",
    href: "/services/advanced-aesthetics" as const,
    description: "Botox® ($10/unit), Dermal Fillers, autologous PRP, and exosome microneedling.",
    tag: "$10/Unit Botox",
  },
  {
    title: "Signature Spa Packages",
    eyebrow: "Multi-Hour Sanctuaries",
    href: "/services/spa-packages" as const,
    description: "Comprehensive sanctuary packages (You Deserve It! & Queen For A Day!).",
    tag: "VIP Packages",
  },
  {
    title: "Beauty Atelier & Artistry",
    eyebrow: "Polished Finishing",
    href: "/services/beauty-atelier" as const,
    description: "The Glam Chapter makeup, structured gel nails, lash couture, and silk waxing.",
    tag: "Beauty Studio",
  },
  {
    title: "Protocol Monograph & Steps",
    eyebrow: "Clinical Breakdown",
    href: "/service-details" as const,
    description: "In-depth procedural steps, ingredients, and clinical formulation journeys.",
    tag: "Protocols",
  },
];

const skinConcerns = [
  {
    name: "Fine Lines & Wrinkles",
    treatment: "Botox® ($10/u) & Exosome Needling",
    href: "/services/advanced-aesthetics" as const,
  },
  {
    name: "Acne & Texture Congestion",
    treatment: "Bioline 20% AHA Glycolic Ritual",
    href: "/services/skin-and-body-rituals" as const,
  },
  {
    name: "Hyperpigmentation & Melasma",
    treatment: "Autologous PRP & Brightening Peels",
    href: "/services/advanced-aesthetics" as const,
  },
  {
    name: "Dryness & Barrier Depletion",
    treatment: "Aqua Luxe Deep Hydration",
    href: "/services/skin-and-body-rituals" as const,
  },
  {
    name: "Full-Body Stress & Tension",
    treatment: "Mocha Gua Sha & Body Scrub",
    href: "/services/spa-packages" as const,
  },
];

export function PageIntro({
  eyebrow,
  title,
  children,
  rightSlot,
  badgeText,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  rightSlot?: ReactNode;
  badgeText?: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 border-b border-[#B76E79]/20 bg-gradient-to-b from-[#FAF5F3] via-[#F4E8E5] to-[#EEDBD7] text-[#2A2124]">
      {/* Ambient background glow with gentle breathing float */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-1/4 w-[36rem] h-[36rem] rounded-full blur-3xl pointer-events-none bg-[#E8C5C8]/40"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className={`grid gap-10 ${rightSlot ? "lg:grid-cols-12 lg:items-end" : "max-w-4xl"}`}>
          <div className={rightSlot ? "lg:col-span-7" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em] text-[#B76E79]">{eyebrow}</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-10 bg-[#B76E79]/50 origin-left"
              />
              {badgeText && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#B76E79]/30 text-[#B76E79] text-[10px] tracking-widest uppercase font-mono shadow-sm"
                >
                  {badgeText}
                </motion.span>
              )}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 font-display text-4xl font-light leading-[1.08] sm:text-6xl lg:text-7xl text-[#2A2124] text-balance"
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`mt-6 text-sm leading-relaxed sm:text-base sm:leading-7 font-normal ${
                rightSlot ? "max-w-2xl" : "max-w-3xl"
              } text-[#5E5054]`}
            >
              {children}
            </motion.div>
          </div>

          {rightSlot && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              {rightSlot}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState<"categories" | "concerns">("categories");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#B76E79]/20 transition-all duration-300 shadow-sm">
      {/* Top Global Atelier Announcement Strip */}
      <div className="bg-[#FAF5F3] text-[#2A2124] py-1.5 px-5 sm:px-8 text-center text-[10px] tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-3 border-b border-[#B76E79]/15">
        <span className="flex items-center gap-1.5">
          <Sparkles className="size-3 text-[#8F4954]" />
          <span className="font-bold text-[#8F4954]">Sherwood Park Sanctuary</span>
          <span className="text-[#8F4954]/40">|</span>
          <span className="text-[#5E5054] font-medium">Bioline Jatò Italy Certified</span>
        </span>
        <span className="hidden md:inline text-[#8F4954]/40">•</span>
        <span className="hidden md:inline text-[#5E5054]">
          Direct Concierge:{" "}
          <a href="tel:+17804108278" className="text-[#8F4954] font-bold underline hover:text-[#682230] transition-colors">
            (780) 410-8278
          </a>
        </span>
        <span className="hidden lg:inline text-[#8F4954]/40">•</span>
        <span className="hidden lg:inline text-[#5E5054] font-medium">100% Private Clinical Suites</span>
      </div>

      <div className="relative mx-auto flex h-16 sm:h-20 max-w-[1480px] items-center justify-between px-5 sm:px-8">
        {/* Left: Brand Logo */}
        <Link to="/" aria-label="Lumé Aesthetics home" onClick={() => setOpen(false)} className="flex items-center">
          <BrandLogo size="md" variant="light" />
        </Link>

        {/* Center: Dermace / SkinMed Style Direct Luxury Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {/* 1. HOME */}
          <Link
            to="/"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2A2124] transition-colors hover:text-[#8F4954]"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-[#8F4954]" }}
          >
            HOME
          </Link>

          {/* 2. SERVICES & PROTOCOLS MEGA MENU */}
          <div
            className="relative py-6"
            onMouseEnter={() => setServiceMenuOpen(true)}
            onMouseLeave={() => setServiceMenuOpen(false)}
          >
            <button
              type="button"
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2A2124] transition-colors hover:text-[#8F4954] flex items-center gap-1 cursor-pointer"
            >
              <span>SERVICES &amp; PROTOCOLS</span>
              <ChevronDown className="size-3 text-[#8F4954]" />
            </button>

            <AnimatePresence>
              {serviceMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-16 -left-20 w-[840px] rounded-none border border-[#B76E79]/30 bg-white p-6 shadow-2xl backdrop-blur-3xl text-[#2A2124]"
                >
                  {/* Mega Menu Header Tabs */}
                  <div className="flex items-center justify-between border-b border-[#B76E79]/20 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveMenuTab("categories")}
                        className={`text-[10px] uppercase tracking-[0.18em] font-bold px-3 py-1.5 transition-all ${
                          activeMenuTab === "categories"
                            ? "bg-[#8F4954] text-white shadow-sm"
                            : "bg-[#FAF5F3] text-[#5E5054] hover:text-[#8F4954]"
                        }`}
                      >
                        Browse By Category
                      </button>
                      <button
                        onClick={() => setActiveMenuTab("concerns")}
                        className={`text-[10px] uppercase tracking-[0.18em] font-bold px-3 py-1.5 transition-all ${
                          activeMenuTab === "concerns"
                            ? "bg-[#8F4954] text-white shadow-sm"
                            : "bg-[#FAF5F3] text-[#5E5054] hover:text-[#8F4954]"
                        }`}
                      >
                        Shop By Skin Concern
                      </button>
                    </div>

                    <Link
                      to="/treatments"
                      onClick={() => setServiceMenuOpen(false)}
                      className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#8F4954] hover:underline flex items-center gap-1"
                    >
                      View All 24+ Menu <ChevronRight className="size-3" />
                    </Link>
                  </div>

                  {/* Mega Menu Body */}
                  <div className="grid grid-cols-12 gap-6">
                    {activeMenuTab === "categories" ? (
                      <div className="col-span-8 grid grid-cols-2 gap-3">
                        {serviceCategories.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setServiceMenuOpen(false)}
                            className="p-3 border border-[#B76E79]/15 bg-[#FAF5F3] hover:bg-white hover:border-[#8F4954] transition-all group block shadow-xs"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[8.5px] uppercase tracking-wider text-[#8F4954] font-mono font-bold">
                                {item.eyebrow}
                              </span>
                              <span className="text-[8px] px-1.5 py-0.5 bg-[#8F4954]/10 text-[#8F4954] font-bold uppercase tracking-wider">
                                {item.tag}
                              </span>
                            </div>
                            <h4 className="text-xs font-bold text-[#2A2124] group-hover:text-[#8F4954] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-[#5E5054] font-normal mt-0.5 line-clamp-1 leading-snug">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="col-span-8 space-y-2">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#8F4954] font-bold mb-2">
                          Targeted Aesthetic Goals &amp; Concerns
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          {skinConcerns.map((concern) => (
                            <Link
                              key={concern.name}
                              to={concern.href}
                              onClick={() => setServiceMenuOpen(false)}
                              className="p-3 border border-[#B76E79]/15 bg-[#FAF5F3] hover:bg-white hover:border-[#8F4954] transition-all flex items-center justify-between group shadow-xs"
                            >
                              <div>
                                <p className="text-xs font-bold text-[#2A2124] group-hover:text-[#8F4954] transition-colors">
                                  {concern.name}
                                </p>
                                <p className="text-[11px] text-[#5E5054] font-normal mt-0.5">
                                  Recommended: <span className="text-[#8F4954] font-semibold">{concern.treatment}</span>
                                </p>
                              </div>
                              <ArrowRight className="size-3.5 text-[#8F4954] transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Right Column: Spotlight Feature Card */}
                    <div className="col-span-4 bg-gradient-to-br from-[#FAF5F3] to-[#F0DFDA] p-4 border border-[#B76E79]/25 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#8F4954] font-bold block mb-1">
                          Flagship Protocol
                        </span>
                        <h4 className="font-display text-base font-semibold text-[#2A2124] leading-snug">
                          Botox® ($10/Unit) &amp; Bioline 20% AHA Rejuvenation
                        </h4>
                        <p className="text-[11px] text-[#5E5054] mt-2 leading-relaxed font-normal">
                          Doctor-administered neuromodulators paired with Italian glycolic exfoliation for immediate radiance.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#B76E79]/20 mt-4 space-y-2">
                        <Button
                          asChild
                          className="w-full h-9 rounded-none bg-[#8F4954] hover:bg-[#682230] text-white text-[10px] uppercase tracking-[0.16em] font-bold shadow-md"
                        >
                          <Link to="/appointment" onClick={() => setServiceMenuOpen(false)}>
                            Book Consultation
                          </Link>
                        </Button>
                        <a
                          href="/Brochure.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] uppercase tracking-wider text-[#8F4954] hover:underline font-bold text-center block"
                        >
                          Download Brochure (PDF)
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. BEFORE & AFTER GALLERY */}
          <Link
            to="/gallery"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2A2124] transition-colors hover:text-[#8F4954]"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-[#8F4954]" }}
          >
            BEFORE &amp; AFTER
          </Link>

          {/* 4. PRICING */}
          <Link
            to="/price-plan"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2A2124] transition-colors hover:text-[#8F4954]"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-[#8F4954]" }}
          >
            PRICING
          </Link>

          {/* 5. OUR TEAM */}
          <Link
            to="/team"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2A2124] transition-colors hover:text-[#8F4954]"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-[#8F4954]" }}
          >
            OUR TEAM
          </Link>

          {/* 6. ABOUT US */}
          <Link
            to="/about"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2A2124] transition-colors hover:text-[#8F4954]"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-[#8F4954]" }}
          >
            ABOUT US
          </Link>

          {/* 7. JOURNAL */}
          <Link
            to="/blogs"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2A2124] transition-colors hover:text-[#8F4954]"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-[#8F4954]" }}
          >
            JOURNAL
          </Link>

          {/* 8. CONTACT */}
          <Link
            to="/contact"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2A2124] transition-colors hover:text-[#8F4954]"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-[#8F4954]" }}
          >
            CONTACT
          </Link>
        </nav>

        {/* Right: Booking CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <MagneticButton strength={0.2} pullStrength={0.2}>
            <Button asChild className="h-10 sm:h-11 rounded-none bg-gradient-to-r from-[#8F4954] via-[#A35260] to-[#7A2838] hover:from-[#7A2838] hover:to-[#682230] text-white px-5 sm:px-7 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] shadow-md hover:opacity-95 transition-all duration-300 font-bold">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </MagneticButton>

          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-none text-[#2A2124] hover:bg-[#FAF5F3] lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 5.5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[5.5rem] z-40 overflow-y-auto border-t border-[#B76E79]/20 bg-[#FAF5F3] px-6 py-8 text-[#2A2124] lg:hidden custom-scrollbar"
          >
            <nav className="flex flex-col space-y-6" aria-label="Mobile navigation">
              <div className="space-y-4">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-[#2A2124] hover:text-[#8F4954] transition-colors block"
                >
                  HOME
                </Link>

                <div className="border-y border-[#B76E79]/20 py-4 space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-bold block">
                    SERVICES &amp; PROTOCOLS
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                    <Link to="/treatments" onClick={() => setOpen(false)} className="p-2.5 bg-white border border-[#B76E79]/20 hover:border-[#8F4954] shadow-xs text-[#2A2124]">
                      All 24+ Treatments
                    </Link>
                    <Link to="/service-details" onClick={() => setOpen(false)} className="p-2.5 bg-white border border-[#B76E79]/20 hover:border-[#8F4954] shadow-xs text-[#2A2124]">
                      Monographs &amp; Steps
                    </Link>
                    <Link to="/services/skin-and-body-rituals" onClick={() => setOpen(false)} className="p-2.5 bg-white border border-[#B76E79]/20 hover:border-[#8F4954] shadow-xs text-[#2A2124]">
                      Skin &amp; Body Rituals
                    </Link>
                    <Link to="/services/spa-packages" onClick={() => setOpen(false)} className="p-2.5 bg-white border border-[#B76E79]/20 hover:border-[#8F4954] shadow-xs text-[#2A2124]">
                      Spa Packages
                    </Link>
                    <Link to="/services/beauty-atelier" onClick={() => setOpen(false)} className="p-2.5 bg-white border border-[#B76E79]/20 hover:border-[#8F4954] shadow-xs text-[#2A2124]">
                      Beauty Atelier
                    </Link>
                    <Link to="/services/advanced-aesthetics" onClick={() => setOpen(false)} className="p-2.5 bg-white border border-[#B76E79]/20 hover:border-[#8F4954] shadow-xs text-[#2A2124]">
                      Advanced Aesthetics
                    </Link>
                  </div>
                </div>

                <Link
                  to="/gallery"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-[#2A2124] hover:text-[#8F4954] transition-colors block"
                >
                  BEFORE &amp; AFTER
                </Link>

                <Link
                  to="/price-plan"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-[#2A2124] hover:text-[#8F4954] transition-colors block"
                >
                  PRICING
                </Link>

                <Link
                  to="/team"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-[#2A2124] hover:text-[#8F4954] transition-colors block"
                >
                  OUR TEAM
                </Link>

                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-[#2A2124] hover:text-[#8F4954] transition-colors block"
                >
                  ABOUT US
                </Link>

                <Link
                  to="/blogs"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-[#2A2124] hover:text-[#8F4954] transition-colors block"
                >
                  JOURNAL
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-[#2A2124] hover:text-[#8F4954] transition-colors block"
                >
                  CONTACT US
                </Link>
              </div>

              {/* Mobile Direct Action Buttons */}
              <div className="pt-2 border-t border-[#B76E79]/20 space-y-2">
                <Button asChild className="w-full h-11 rounded-none bg-[#8F4954] hover:bg-[#7A2838] text-white text-xs uppercase tracking-[0.18em] font-bold shadow-md">
                  <Link to="/appointment" onClick={() => setOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-11 rounded-none border-[#8F4954]/40 text-[#8F4954] text-xs uppercase tracking-[0.18em] font-bold">
                  <a href="tel:+17804108278">Call Studio: (780) 410-8278</a>
                </Button>
                <a
                  href="/Brochure.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-wider text-[#8F4954] hover:underline font-bold text-center block pt-1"
                >
                  Download Atelier Brochure (PDF)
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#B76E79]/25 bg-[#201317] text-[#FAF4F2]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" aria-label="Lumé Aesthetics Home" className="inline-block">
              <BrandLogo size="lg" variant="dark" />
            </Link>
            <p className="text-xs leading-7 text-[#FAF4F2]/75 max-w-sm font-light">
              A private medical aesthetics sanctuary in Sherwood Park, Alberta. Unhurried facial &amp; body rituals, Italian Bioline Jatò formulations, and doctor-led clinical treatments.
            </p>
            <div className="flex flex-col gap-2.5 text-xs pt-1">
              <div className="flex items-center gap-2 text-[#E7B2A9]">
                <Phone className="size-3.5" />
                <a href="tel:+17804108278" className="hover:underline font-semibold">
                  (780) 410-8278
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#E7B2A9]">
                <Mail className="size-3.5" />
                <a href="mailto:info@lumeaesthetics.co" className="hover:underline font-semibold">
                  info@lumeaesthetics.co
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#E7B2A9]">
                <MapPin className="size-3.5" />
                <span className="font-normal text-[#FAF4F2]/80">2457 Broadmoor Blvd #121, Sherwood Park, AB</span>
              </div>
            </div>
          </div>

          {/* Important Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <p className="eyebrow text-[#E7B2A9] text-[10px] uppercase tracking-[0.22em] font-bold">
              Important Links
            </p>
            <ul className="space-y-2.5 text-xs text-[#FAF4F2]/80 font-normal">
              <li>
                <Link to="/treatments" className="hover:text-[#E7B2A9] transition-colors">
                  All Services Menu (24+)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E7B2A9] transition-colors">
                  About Our Sanctuary
                </Link>
              </li>
              <li>
                <Link to="/price-plan" className="hover:text-[#E7B2A9] transition-colors">
                  Price Plan &amp; Packages
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-[#E7B2A9] transition-colors">
                  Appointment Booking
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#E7B2A9] transition-colors">
                  Transformation Gallery
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-[#E7B2A9] transition-colors">
                  Clinical Skincare Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E7B2A9] transition-colors">
                  Contact Studio Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="lg:col-span-2 space-y-4">
            <p className="eyebrow text-[#E7B2A9] text-[10px] uppercase tracking-[0.22em] font-bold">
              Collections
            </p>
            <ul className="space-y-2.5 text-xs text-[#FAF4F2]/80 font-normal">
              <li>
                <Link to="/services/skin-and-body-rituals" className="hover:text-[#E7B2A9] transition-colors">
                  Skin &amp; Body Rituals
                </Link>
              </li>
              <li>
                <Link to="/services/advanced-aesthetics" className="hover:text-[#E7B2A9] transition-colors">
                  Advanced Clinicals
                </Link>
              </li>
              <li>
                <Link to="/services/spa-packages" className="hover:text-[#E7B2A9] transition-colors">
                  Spa Packages
                </Link>
              </li>
              <li>
                <Link to="/services/beauty-atelier" className="hover:text-[#E7B2A9] transition-colors">
                  Beauty Atelier
                </Link>
              </li>
              <li>
                <Link to="/service-details" className="hover:text-[#E7B2A9] transition-colors">
                  Protocol Monographs
                </Link>
              </li>
              <li>
                <a href="/Brochure.pdf" target="_blank" rel="noreferrer" className="text-[#E7B2A9] hover:underline font-bold">
                  Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Hours & Booking Column */}
          <div className="lg:col-span-3 space-y-5 border-l border-[#B76E79]/20 pl-0 lg:pl-8">
            <div>
              <p className="text-xs text-[#FAF4F2] font-bold uppercase tracking-wider">Sherwood Park Atelier</p>
              <p className="text-xs text-[#FAF4F2]/70 mt-1">2457 Broadmoor Blvd #121, AB</p>
            </div>
            <p className="text-xs leading-5 text-[#FAF4F2]/80">
              Hours of Care: Mon–Fri 10am–7pm | Sat 10am–5pm | Sun By Appointment
            </p>
            <Button
              asChild
              className="w-full h-11 rounded-none bg-gradient-to-r from-[#C5838B] via-[#B76E79] to-[#8F4954] text-white text-xs uppercase tracking-[0.16em] hover:opacity-95 font-bold transition-all duration-300 shadow-md"
            >
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-16 pt-8 border-t border-[#B76E79]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#FAF4F2]/70 font-normal">
          <p>© {new Date().getFullYear()} Lumé Aesthetics. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-[#FAF4F2]">
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-[#E7B2A9]" /> Bioline Jatò Italy Partner</span>
            <span>Health Canada Approved Clinicals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}