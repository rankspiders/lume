import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

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
    treatments: ["Lumé Aqua Luxe ($125)", "Prima Glow 20% AHA ($135)", "Radiance C ($145)", "Collagen Lifting ($195)", "Mocha Contour ($145)"],
  },
  {
    title: "Spa Packages",
    eyebrow: "Category 02",
    href: "/services/spa-packages" as const,
    image: heroImage,
    description: "Multi-hour head-to-toe luxury experiences combining facials, body wraps & scalp treatments.",
    treatments: ["You Deserve It! — 2 hrs ($265)", "Queen For A Day! — 3 hrs ($395)"],
  },
  {
    title: "Beauty Atelier",
    eyebrow: "Category 03",
    href: "/services/beauty-atelier" as const,
    image: bodyImage,
    description: "Quietly polished makeup, gel nail artistry, lash couture lifts & silk waxing.",
    treatments: ["The Glam Chapter ($110+)", "Polished Gel Nails ($65+)", "Lash Couture ($99)", "Silk Body Waxing"],
  },
  {
    title: "Advanced Aesthetics",
    eyebrow: "Category 04",
    href: "/services/advanced-aesthetics" as const,
    image: advancedImage,
    description: "Consultation-led clinical injectables, PRP microneedling & IV wellness therapies.",
    treatments: ["Lumé Botox® ($10/unit)", "Dermal Fillers ($550+)", "PRP Microneedling ($450)", "Exosome Therapy ($550)"],
  },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const activeCategory = categoryPreviews[hoveredIndex] ?? categoryPreviews[0];

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
          {/* Treatments Nav Item with Interactive Hover Mega Menu */}
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

            {/* Enhanced Mega Menu Dropdown with Dynamic Hover Preview Image */}
            {treatmentsOpen && (
              <div className="absolute top-16 -left-64 w-[840px] rounded-none border border-copper/30 bg-foreground p-7 shadow-2xl backdrop-blur-2xl grid grid-cols-12 gap-7 animate-in fade-in slide-in-from-top-2 duration-200 text-background">
                
                {/* 4 Category Column List */}
                <div className="col-span-7 space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <p className="eyebrow text-copper-light text-[10px] tracking-[0.2em] uppercase font-semibold">
                      Service Categories
                    </p>
                    <Link
                      to="/treatments"
                      onClick={() => setTreatmentsOpen(false)}
                      className="text-[9px] uppercase tracking-wider text-copper-light hover:underline flex items-center gap-1"
                    >
                      All Rituals →
                    </Link>
                  </div>

                  <div className="space-y-2">
                    {categoryPreviews.map((cat, idx) => {
                      const isHovered = hoveredIndex === idx;
                      return (
                        <div
                          key={cat.title}
                          onMouseEnter={() => setHoveredIndex(idx)}
                          className={`group p-3 border transition-all duration-200 cursor-pointer ${
                            isHovered
                              ? "border-copper bg-copper/15 shadow-sm"
                              : "border-white/5 bg-white/5 hover:border-copper/40"
                          }`}
                        >
                          <Link
                            to={cat.href}
                            onClick={() => setTreatmentsOpen(false)}
                            className="flex items-center justify-between"
                          >
                            <div>
                              <span className="text-[9px] uppercase tracking-widest text-copper-light">{cat.eyebrow}</span>
                              <h4 className="font-display text-lg font-light text-background group-hover:text-copper-light transition-colors">
                                {cat.title}
                              </h4>
                            </div>
                            <ArrowRight className={`size-4 transition-transform duration-200 ${isHovered ? "text-copper-light translate-x-1" : "text-background/40"}`} />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Live Dynamic Preview Card Column */}
                <div className="col-span-5 flex flex-col justify-between border-l border-white/10 pl-7 space-y-4">
                  <div>
                    <div className="overflow-hidden border border-copper/30 h-44 mb-3 relative group">
                      <img
                        src={activeCategory.image}
                        alt={activeCategory.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent flex items-end p-3">
                        <span className="text-[10px] uppercase tracking-wider text-copper-light font-semibold">
                          {activeCategory.eyebrow}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-display text-xl font-light text-background">{activeCategory.title}</h4>
                    <p className="mt-1 text-xs text-background/70 leading-5">{activeCategory.description}</p>
                    
                    <ul className="mt-3 space-y-1 text-[11px] text-copper-light">
                      {activeCategory.treatments.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="size-1 bg-copper-light rounded-full shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-9 rounded-none border-copper-light bg-transparent text-[9px] uppercase tracking-[0.16em] text-copper-light hover:bg-copper-light hover:text-foreground transition-all duration-300"
                  >
                    <Link to={activeCategory.href} onClick={() => setTreatmentsOpen(false)}>
                      Explore {activeCategory.title}
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