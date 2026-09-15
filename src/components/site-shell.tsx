import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import advancedImage from "@/assets/advanced-aesthetics.jpg";
import heroImage from "@/assets/lume-hero.jpg";
import { treatmentGroups, spaPackages } from "@/lib/treatments";

const links = [
  { to: "/treatments" as const, label: "Treatments" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

const categoryPreviews = [
  {
    title: "Skin & Body Rituals",
    eyebrow: "Category 01",
    href: "/services/skin-and-body-rituals" as const,
    image: facialImage,
    description: "Tailored 20% AHA peels, Bioline facial rituals, and Mocha Gua Sha body contouring.",
    treatments: treatmentGroups[0]?.treatments ?? [],
  },
  {
    title: "Spa Packages",
    eyebrow: "Category 02",
    href: "/services/spa-packages" as const,
    image: heroImage,
    description: "Multi-hour head-to-toe luxury experiences combining facials, body wraps & scalp treatments.",
    treatments: spaPackages,
  },
  {
    title: "Beauty Atelier",
    eyebrow: "Category 03",
    href: "/services/beauty-atelier" as const,
    image: bodyImage,
    description: "Quietly polished makeup, gel nail artistry, lash couture lifts & silk waxing.",
    treatments: treatmentGroups[1]?.treatments ?? [],
  },
  {
    title: "Advanced Aesthetics",
    eyebrow: "Category 04",
    href: "/services/advanced-aesthetics" as const,
    image: advancedImage,
    description: "Consultation-led clinical injectables, PRP microneedling & IV wellness therapies.",
    treatments: treatmentGroups[2]?.treatments ?? [],
  },
];

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-secondary/80 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-copper"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 font-display text-4xl font-light leading-tight sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base"
        >
          {children}
        </motion.p>
      </div>
    </section>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(0);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(0);

  const activeCategory = categoryPreviews[hoveredCategoryIndex] || categoryPreviews[0]!;
  const activeService = (activeCategory.treatments[hoveredServiceIndex] || activeCategory.treatments[0])!;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-foreground/95 backdrop-blur-xl">
      <div className="relative mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 sm:px-8">
        {/* Left: Full Brand Logo */}
        <Link to="/" aria-label="Lumé Aesthetics home" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <img
            src="/lume-logo-full.svg"
            alt="Lumé Aesthetics"
            className="h-10 w-auto sm:h-13 object-contain transition-opacity hover:opacity-90"
          />
        </Link>

        {/* Center: Centered Primary Navigation (Desktop) */}
        <nav aria-label="Primary navigation" className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-10 md:flex">
          {/* Treatments Nav Item with BMW-Style 3-Column Hover Mega Menu */}
          <div
            className="relative py-6"
            onMouseEnter={() => setTreatmentsOpen(true)}
            onMouseLeave={() => setTreatmentsOpen(false)}
          >
            <Link
              to="/treatments"
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-background/80 transition-colors hover:text-copper-light flex items-center gap-1.5"
              activeProps={{ className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-copper-light" }}
            >
              Treatments
              <span className="text-[8px] text-copper-light">▼</span>
            </Link>

            {/* BMW-Style 3-Column Mega Menu */}
            {treatmentsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute top-16 -left-72 w-[980px] rounded-none border border-copper/30 bg-foreground p-6 shadow-2xl backdrop-blur-2xl grid grid-cols-12 gap-5 text-background"
              >
                
                {/* Col 1: Categories (Left) */}
                <div className="col-span-3 border-r border-white/10 pr-4 space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-copper-light block mb-3 pl-2">
                    Ritual Collections
                  </span>
                  {categoryPreviews.map((cat, cIdx) => {
                    const isCatHovered = cIdx === hoveredCategoryIndex;
                    return (
                      <div
                        key={cat.title}
                        onMouseEnter={() => {
                          setHoveredCategoryIndex(cIdx);
                          setHoveredServiceIndex(0);
                        }}
                        className={`p-3 transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                          isCatHovered ? "bg-white/10 text-copper-light font-medium" : "text-background/80 hover:text-background hover:bg-white/5"
                        }`}
                      >
                        <Link to={cat.href} onClick={() => setTreatmentsOpen(false)} className="w-full flex items-center justify-between">
                          <span className="text-xs tracking-wide">{cat.title}</span>
                          <ChevronRight className={`size-3.5 transition-transform ${isCatHovered ? "translate-x-1 text-copper-light" : "opacity-0"}`} />
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {/* Col 2: Interactive Services List (Center) */}
                <div className="col-span-4 border-r border-white/10 pr-4 space-y-1 overflow-y-auto max-h-[340px]">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-copper-light block mb-3 pl-2">
                    {activeCategory.title} Treatments
                  </span>
                  <div className="space-y-1">
                    {activeCategory.treatments.map((service, sIdx) => {
                      const isServiceHovered = sIdx === hoveredServiceIndex;
                      return (
                        <div
                          key={service.name}
                          onMouseEnter={() => setHoveredServiceIndex(sIdx)}
                          className={`p-2.5 transition-all duration-200 cursor-pointer flex items-center justify-between text-xs border ${
                            isServiceHovered
                              ? "border-copper/40 bg-white/10 text-background font-medium shadow-sm"
                              : "border-transparent text-background/75 hover:text-background hover:bg-white/5"
                          }`}
                        >
                          <Link to={activeCategory.href} onClick={() => setTreatmentsOpen(false)} className="w-full flex items-center justify-between">
                            <span className="truncate pr-2">{service.name}</span>
                            <span className="text-[10px] text-copper-light font-semibold shrink-0">{service.price}</span>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Col 3: Detailed Image & Feature Focus (Right) */}
                <div className="col-span-5 flex flex-col justify-between pl-3 space-y-4">
                  <div>
                    <div className="overflow-hidden border border-copper/30 h-48 mb-4 relative group">
                      <img
                        src={activeService.image || activeCategory.image}
                        alt={activeService.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent flex items-end p-4">
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-copper-light font-semibold block">
                            {activeCategory.eyebrow}
                          </span>
                          <h4 className="font-display text-lg text-background font-light">{activeService.name}</h4>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <h4 className="font-display text-xl font-light text-background">{activeService.name}</h4>
                        <span className="font-display text-lg text-copper-light font-light">{activeService.price}</span>
                      </div>
                      <p className="text-xs text-background/75 leading-5">{activeCategory.description}</p>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-10 rounded-none border-copper-light bg-transparent text-[10px] uppercase tracking-[0.16em] text-copper-light hover:bg-copper-light hover:text-foreground transition-all duration-300"
                  >
                    <Link to={activeCategory.href} onClick={() => setTreatmentsOpen(false)}>
                      Book {activeService.name}
                    </Link>
                  </Button>
                </div>

              </motion.div>
            )}
          </div>

          <Link
            to="/about"
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-background/80 transition-colors hover:text-copper-light"
            activeProps={{ className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-copper-light" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-background/80 transition-colors hover:text-copper-light"
            activeProps={{ className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-copper-light" }}
          >
            Contact
          </Link>
        </nav>

        {/* Right: Actions & Emblem Icon */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block">
            <Button asChild variant="outline" className="h-10 sm:h-11 rounded-none border-copper-light bg-transparent px-4 sm:px-6 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-copper-light shadow-none hover:bg-copper-light hover:text-foreground">
              <a href="tel:+17804108278">Book a ritual</a>
            </Button>
          </div>
          <Link to="/" aria-label="Lumé Aesthetics emblem icon" onClick={() => setOpen(false)} className="flex items-center">
            <img
              src="/lume-emblem.svg"
              alt="Lumé Aesthetics emblem"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-none text-background hover:bg-white/10 hover:text-background md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Animated Menu Drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "calc(100dvh - 5rem)" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-x-0 top-20 z-40 overflow-y-auto border-t border-copper/15 bg-foreground px-6 py-10 text-background md:hidden"
        >
          <nav className="flex flex-col space-y-8" aria-label="Mobile navigation">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-copper-light font-semibold block">Navigation</span>
              <div className="flex flex-col space-y-4">
                <Link key="treatments" to="/treatments" onClick={() => setOpen(false)} className="font-display text-3xl font-light text-background hover:text-copper-light transition-colors">
                  Treatments & Rituals
                </Link>
                <Link key="about" to="/about" onClick={() => setOpen(false)} className="font-display text-3xl font-light text-background hover:text-copper-light transition-colors">
                  About Lumé
                </Link>
                <Link key="contact" to="/contact" onClick={() => setOpen(false)} className="font-display text-3xl font-light text-background hover:text-copper-light transition-colors">
                  Contact Studio
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-copper-light font-semibold block">Services Collections</span>
              <div className="grid gap-3 sm:grid-cols-2">
                {categoryPreviews.map((cat) => (
                  <Link
                    key={cat.title}
                    to={cat.href}
                    onClick={() => setOpen(false)}
                    className="p-3 border border-copper/20 bg-white/5 hover:bg-white/10 text-xs font-light text-background flex items-center justify-between"
                  >
                    <span>{cat.title}</span>
                    <ChevronRight className="size-3.5 text-copper-light" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <Button asChild variant="outline" className="w-full h-12 rounded-none border-copper-light bg-transparent text-xs uppercase tracking-[0.18em] text-copper-light hover:bg-copper-light hover:text-foreground">
                <a href="tel:+17804108278">Call Studio (780) 410-8278</a>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-copper/25 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        
        {/* Main Footer Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" aria-label="Lumé Aesthetics Home" className="inline-block">
              <img
                src="/lume-logo-full.svg"
                alt="Lumé Aesthetics"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs leading-7 text-background/70 max-w-sm font-light">
              A private beauty atelier in Sherwood Park, Alberta. Unhurried facial & body rituals, quietly polished beauty artistry, and consultation-led clinical aesthetics.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <a href="tel:+17804108278" className="text-copper-light hover:underline font-medium">
                (780) 410-8278
              </a>
              <span className="text-background/30">•</span>
              <a href="mailto:info@lumeaesthetics.co" className="text-copper-light hover:underline font-medium">
                info@lumeaesthetics.co
              </a>
            </div>
          </div>

          {/* Service Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <p className="eyebrow text-copper-light text-[10px] uppercase tracking-[0.2em] font-semibold">
              Treatment Menu
            </p>
            <ul className="space-y-2.5 text-xs text-background/75">
              <li>
                <Link to="/services/skin-and-body-rituals" className="hover:text-copper-light transition-colors">
                  Skin & Body Rituals
                </Link>
              </li>
              <li>
                <Link to="/services/spa-packages" className="hover:text-copper-light transition-colors">
                  Signature Spa Packages
                </Link>
              </li>
              <li>
                <Link to="/services/beauty-atelier" className="hover:text-copper-light transition-colors">
                  Beauty Atelier & Artistry
                </Link>
              </li>
              <li>
                <Link to="/services/advanced-aesthetics" className="hover:text-copper-light transition-colors">
                  Advanced Clinical Aesthetics
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-copper-light transition-colors">
                  Full Treatment Brochure →
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <p className="eyebrow text-copper-light text-[10px] uppercase tracking-[0.2em] font-semibold">
              The Atelier
            </p>
            <ul className="space-y-2.5 text-xs text-background/75">
              <li>
                <Link to="/about" className="hover:text-copper-light transition-colors">
                  About Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-copper-light transition-colors">
                  Location & Contact
                </Link>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-copper-light transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-copper-light transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Emblem Column */}
          <div className="lg:col-span-3 space-y-5 border-l border-white/10 pl-0 lg:pl-8">
            <div className="flex items-center gap-3">
              <img src="/lume-emblem.svg" alt="Lumé Emblem" className="h-8 w-8 object-contain" />
              <div>
                <p className="text-xs text-background font-medium">Sherwood Park Studio</p>
                <p className="text-[11px] text-background/60">Alberta, T8H 0Y6, Canada</p>
              </div>
            </div>
            <p className="text-[11px] leading-5 text-background/60">
              Hours of Care: Mon–Fri 10am–7pm | Sat 10am–5pm | Sun By Appointment
            </p>
            <Button
              asChild
              variant="outline"
              className="w-full h-10 rounded-none border-copper-light bg-transparent text-[10px] uppercase tracking-[0.16em] text-copper-light hover:bg-copper-light hover:text-foreground transition-all duration-300"
            >
              <a href="tel:+17804108278">Book Consultation</a>
            </Button>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-background/50">
          <p>© {new Date().getFullYear()} Lumé Aesthetics Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Bioline Jatò Professional Partner</span>
            <span>Health Canada Clinical Hygiene Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
}