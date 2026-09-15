import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import advancedImage from "@/assets/advanced-aesthetics.jpg";
import heroImage from "@/assets/lume-hero.jpg";

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
    treatments: [
      { name: "Lumé Aqua Luxe Facial", price: "$125" },
      { name: "Lumé Prima Glow 20% AHA", price: "$135" },
      { name: "Lumé Radiance C Facial", price: "$145" },
      { name: "Lumé Collagen Lifting Facial", price: "$195" },
      { name: "Lumé Mocha Contour", price: "$145" },
    ],
  },
  {
    title: "Spa Packages",
    eyebrow: "Category 02",
    href: "/services/spa-packages" as const,
    image: heroImage,
    description: "Multi-hour head-to-toe luxury experiences combining facials, body wraps & scalp treatments.",
    treatments: [
      { name: "You Deserve It!", price: "$265" },
      { name: "Queen For A Day!", price: "$395" },
    ],
  },
  {
    title: "Beauty Atelier",
    eyebrow: "Category 03",
    href: "/services/beauty-atelier" as const,
    image: bodyImage,
    description: "Quietly polished makeup, gel nail artistry, lash couture lifts & silk waxing.",
    treatments: [
      { name: "The Glam Chapter", price: "$110+" },
      { name: "Lumé Polished Nails", price: "$65+" },
      { name: "Lumé Lash Couture", price: "$99" },
      { name: "Lumé Silk Body Waxing", price: "$45+" },
    ],
  },
  {
    title: "Advanced Aesthetics",
    eyebrow: "Category 04",
    href: "/services/advanced-aesthetics" as const,
    image: advancedImage,
    description: "Consultation-led clinical injectables, PRP microneedling & IV wellness therapies.",
    treatments: [
      { name: "Lumé Botox®", price: "$10/unit" },
      { name: "Lumé Dermal Fillers", price: "$550+" },
      { name: "Lumé PRP Microneedling", price: "$450" },
      { name: "Lumé Exosome Microneedling", price: "$550" },
    ],
  },
] as const;

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
        <p className="eyebrow text-copper">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-light leading-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
          {children}
        </p>
      </div>
    </section>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(0);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(0);

  const activeCategory = categoryPreviews[hoveredCategoryIndex] ?? categoryPreviews[0];
  const activeService = activeCategory.treatments[hoveredServiceIndex] ?? activeCategory.treatments[0];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-foreground/95 backdrop-blur-xl">
      <div className="relative mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 sm:px-8">
        {/* Left: Full Brand Logo */}
        <Link to="/" aria-label="Lumé Aesthetics home" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <img
            src="/lume-logo-full.svg"
            alt="Lumé Aesthetics"
            className="h-11 w-auto sm:h-13 object-contain transition-opacity hover:opacity-90"
          />
        </Link>

        {/* Center: Centered Primary Navigation */}
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
              <div className="absolute top-16 -left-72 w-[980px] rounded-none border border-copper/30 bg-foreground p-6 shadow-2xl backdrop-blur-2xl grid grid-cols-12 gap-5 animate-in fade-in slide-in-from-top-2 duration-200 text-background">
                
                {/* Col 1: Categories (Left) */}
                <div className="col-span-3 border-r border-white/10 pr-4 space-y-2">
                  <p className="eyebrow text-copper-light text-[9px] tracking-[0.18em] uppercase font-semibold pb-2 border-b border-white/10">
                    Categories
                  </p>
                  <div className="space-y-1">
                    {categoryPreviews.map((cat, idx) => {
                      const isHovered = hoveredCategoryIndex === idx;
                      return (
                        <div
                          key={cat.title}
                          onMouseEnter={() => {
                            setHoveredCategoryIndex(idx);
                            setHoveredServiceIndex(0);
                          }}
                          className={`p-2.5 transition-all duration-200 cursor-pointer flex items-center justify-between text-xs border ${
                            isHovered
                              ? "border-copper bg-copper/20 text-copper-light font-medium"
                              : "border-transparent text-background/70 hover:text-background hover:bg-white/5"
                          }`}
                        >
                          <Link to={cat.href} onClick={() => setTreatmentsOpen(false)} className="w-full flex items-center justify-between">
                            <span>{cat.title}</span>
                            <ChevronRight className={`size-3.5 transition-transform ${isHovered ? "translate-x-1 text-copper-light" : "opacity-40"}`} />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Col 2: Services List under Active Category (Middle) */}
                <div className="col-span-4 border-r border-white/10 pr-4 space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <p className="eyebrow text-copper-light text-[9px] tracking-[0.18em] uppercase font-semibold">
                      {activeCategory.title}
                    </p>
                    <Link
                      to={activeCategory.href}
                      onClick={() => setTreatmentsOpen(false)}
                      className="text-[9px] uppercase tracking-wider text-copper-light hover:underline"
                    >
                      View All →
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {activeCategory.treatments.map((service, sIdx) => {
                      const isServiceHovered = hoveredServiceIndex === sIdx;
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
                        src={activeCategory.image}
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

              </div>
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
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button asChild variant="outline" className="h-11 rounded-none border-copper-light bg-transparent px-6 text-[11px] uppercase tracking-[0.18em] text-copper-light shadow-none hover:bg-copper-light hover:text-foreground">
              <a href="tel:+17804108278">Book a ritual</a>
            </Button>
          </div>
          <Link to="/" aria-label="Lumé Aesthetics emblem icon" onClick={() => setOpen(false)} className="flex items-center">
            <img
              src="/lume-emblem.svg"
              alt="Lumé Aesthetics emblem"
              className="h-10 w-10 object-contain transition-transform duration-300 hover:scale-105"
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
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <div className={cn("fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] overflow-y-auto border-t border-copper/15 bg-background px-8 py-12 md:hidden", open ? "block" : "hidden")}>
        <nav className="flex flex-col gap-8" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="group font-display text-4xl font-light leading-none text-foreground transition-colors hover:text-copper">
              <span className="inline-block border-b border-transparent pb-1 transition-colors group-hover:border-copper">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-copper/20 bg-foreground text-background py-16 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <h3 className="font-display text-2xl font-light text-background">Lumé Aesthetics</h3>
          <p className="mt-1 text-xs text-background/60">Beautiful skin. Confidence within.</p>
        </div>
        <p className="text-xs text-background/50">
          © {new Date().getFullYear()} Lumé Aesthetics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}