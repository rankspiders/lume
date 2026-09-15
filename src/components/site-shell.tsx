import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import logoMark from "@/assets/lume-mark.svg.asset.json";
import logoWordmark from "@/assets/lume-wordmark.svg.asset.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/treatments" as const, label: "Treatments" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

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
          {/* Treatments Nav Item with Hover/Click Mega Menu */}
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

            {/* Treatments Mega Menu Dropdown */}
            {treatmentsOpen && (
              <div className="absolute top-16 -left-32 w-[680px] rounded-none border border-copper/30 bg-foreground/98 p-7 shadow-2xl backdrop-blur-2xl grid grid-cols-2 gap-7 animate-in fade-in slide-in-from-top-2 duration-200">
                <div>
                  <p className="eyebrow text-copper-light text-[10px] pb-2 border-b border-white/10">01. Skin & Body Rituals</p>
                  <ul className="mt-3 space-y-2 text-xs text-background/80">
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Lumé Aqua Luxe Facial ($125)</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Lumé Prima Glow ($135)</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Lumé Radiance C Facial ($145)</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Lumé Collagen Lifting Facial ($195)</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Lumé Aura Infusion Glass Skin ($199)</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Mocha Contour & Body Gua Sha ($145)</Link></li>
                  </ul>
                  
                  <p className="eyebrow text-copper-light text-[10px] mt-5 pb-2 border-b border-white/10">02. Spa Packages</p>
                  <ul className="mt-3 space-y-2 text-xs text-background/80">
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light font-medium transition-colors">You Deserve It! — 2 hrs ($265)</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light font-medium transition-colors">Queen For A Day! — 3 hrs ($395)</Link></li>
                  </ul>
                </div>

                <div>
                  <p className="eyebrow text-copper-light text-[10px] pb-2 border-b border-white/10">03. Beauty Atelier</p>
                  <ul className="mt-3 space-y-2 text-xs text-background/80">
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">The Glam Chapter (Makeup)</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Lumé Polished Nails ($65+)</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Lumé Lash Couture Lift & Tint ($99)</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Silk Waxing & Precision Threading</Link></li>
                  </ul>

                  <p className="eyebrow text-copper-light text-[10px] mt-5 pb-2 border-b border-white/10">04. Advanced Aesthetics</p>
                  <ul className="mt-3 space-y-2 text-xs text-background/80">
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Lumé Botox® ($10/unit) & Dermal Fillers</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">PRP & Exosome Microneedling</Link></li>
                    <li><Link to="/treatments" onClick={() => setTreatmentsOpen(false)} className="hover:text-copper-light transition-colors">Teeth Whitening ($199) & IV Therapies</Link></li>
                  </ul>
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
          <Button asChild className="mt-4 h-12 rounded-none bg-copper-light text-[11px] uppercase tracking-[0.18em] text-foreground shadow-none hover:bg-copper hover:text-background">
            <a href="tel:+17804108278">Call to book</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-copper/20 bg-foreground text-background px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src="/lume-logo-full.svg" alt="Lumé Aesthetics" className="h-16 w-auto object-contain" />
          <p className="mt-4 font-display text-2xl font-light italic text-background">
            Beautiful skin.
            <br />
            <span className="text-copper-light">Confidence within.</span>
          </p>
          <p className="mt-4 text-xs leading-6 text-background/65">
            A sanctuary of bespoke skincare, body rituals, and consultation-led advanced aesthetics.
          </p>
        </div>

        <div>
          <p className="eyebrow text-copper-light">Open Hours</p>
          <p className="mt-4 text-sm leading-7 text-background/70">
            Monday to Saturday
            <br />
            <strong className="font-semibold text-background">9:00 AM – 6:00 PM</strong>
            <br />
            Sunday by appointment
          </p>
        </div>

        <div>
          <p className="eyebrow text-copper-light">Location & Contact</p>
          <address className="mt-4 text-sm not-italic leading-7 text-background/70">
            2457 Broadmoor Blvd #121
            <br />
            Sherwood Park, AB T8H 0Y6, Canada
          </address>
          <div className="mt-3 space-y-1 text-sm text-background/80">
            <a className="block hover:text-copper-light transition-colors" href="tel:+17804108278">
              +1 780-410-8278
            </a>
            <a className="block hover:text-copper-light transition-colors" href="tel:+919872325444">
              +91 9872325444
            </a>
            <a className="block hover:text-copper-light transition-colors" href="mailto:info@lumeaesthetics.co">
              info@lumeaesthetics.co
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-copper-light">Categories</p>
          <ul className="mt-4 space-y-2 text-xs uppercase tracking-widest text-background/70">
            <li>
              <Link to="/treatments" className="hover:text-copper-light transition-colors">
                Skincare & Facials
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="hover:text-copper-light transition-colors">
                Body Rituals & Sculpting
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="hover:text-copper-light transition-colors">
                Beauty Atelier & Nails
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="hover:text-copper-light transition-colors">
                Advanced Aesthetics & IV
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-background/15 pt-7 text-[10px] uppercase tracking-[0.16em] text-background/50 sm:flex-row sm:justify-between">
        <span>© 2026 Lumé Aesthetics. All rights reserved.</span>
        <span>Relax · Rejuvenate · Glow</span>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="border-b border-copper/15 px-5 pb-20 pt-40 sm:px-8 sm:pb-28 sm:pt-48">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-7 max-w-5xl font-display text-5xl font-light leading-[0.98] sm:text-7xl lg:text-8xl">{title}</h1>
        <div className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{children}</div>
      </div>
    </section>
  );
}