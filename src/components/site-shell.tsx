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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-foreground/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="Lumé Aesthetics home" onClick={() => setOpen(false)}>
          <img src={logoWordmark.url} alt="Lumé Aesthetics" className="h-11 w-auto sm:h-12" />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-background/80 transition-colors hover:text-copper-light"
              activeProps={{ className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-copper-light" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button asChild variant="outline" className="h-11 rounded-none border-copper-light bg-transparent px-6 text-[11px] uppercase tracking-[0.18em] text-copper-light shadow-none hover:bg-copper-light hover:text-foreground">
              <a href="tel:+17804108278">Book a ritual</a>
            </Button>
          </div>
          <Link to="/" aria-label="Lumé Aesthetics logo mark" onClick={() => setOpen(false)} className="flex items-center">
            <img src={logoMark.url} alt="Lumé Aesthetics emblem logo" className="h-10 w-10 transition-transform duration-300 hover:scale-105" />
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
    <footer className="border-t border-copper/15 bg-background px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logoMark.url} alt="Lumé Aesthetics" className="h-14 w-14" />
          <p className="mt-4 font-display text-2xl font-light italic text-foreground">
            Beautiful skin.
            <br />
            Confidence within.
          </p>
          <p className="mt-4 text-xs leading-6 text-muted-foreground">
            A sanctuary of bespoke skincare, body rituals, and consultation-led advanced aesthetics.
          </p>
        </div>

        <div>
          <p className="eyebrow text-copper">Open Hours</p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Monday to Saturday
            <br />
            <strong className="font-semibold text-foreground">9:00 AM – 6:00 PM</strong>
            <br />
            Sunday by appointment
          </p>
        </div>

        <div>
          <p className="eyebrow text-copper">Location & Contact</p>
          <address className="mt-4 text-sm not-italic leading-7 text-muted-foreground">
            2457 Broadmoor Blvd #121
            <br />
            Sherwood Park, AB T8H 0Y6, Canada
          </address>
          <div className="mt-3 space-y-1 text-sm">
            <a className="block hover:text-copper transition-colors" href="tel:+17804108278">
              +1 780-410-8278
            </a>
            <a className="block hover:text-copper transition-colors" href="tel:+919872325444">
              +91 9872325444
            </a>
            <a className="block hover:text-copper transition-colors" href="mailto:info@lumeaesthetics.co">
              info@lumeaesthetics.co
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-copper">Categories</p>
          <ul className="mt-4 space-y-2 text-xs uppercase tracking-widest text-muted-foreground">
            <li>
              <Link to="/treatments" className="hover:text-copper transition-colors">
                Skincare & Facials
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="hover:text-copper transition-colors">
                Body Rituals & Sculpting
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="hover:text-copper transition-colors">
                Beauty Atelier & Nails
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="hover:text-copper transition-colors">
                Advanced Aesthetics & IV
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-copper/15 pt-7 text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:justify-between">
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