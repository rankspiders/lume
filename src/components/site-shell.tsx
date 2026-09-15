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
} from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import advancedImage from "@/assets/advanced-aesthetics.jpg";
import heroImage from "@/assets/lume-hero.jpg";
import { treatmentGroups, spaPackages } from "@/lib/treatments";

const serviceCategories = [
  {
    title: "All Services Menu",
    eyebrow: "Complete Menu",
    href: "/treatments" as const,
    description: "Browse all 24+ facial, body, spa, beauty, and clinical aesthetics.",
  },
  {
    title: "Service Details",
    eyebrow: "Clinical Protocols",
    href: "/service-details" as const,
    description: "In-depth procedural steps, ingredients, and step-by-step journeys.",
  },
  {
    title: "Skin & Body Rituals",
    eyebrow: "Collection I",
    href: "/services/skin-and-body-rituals" as const,
    description: "Bioline 20% AHA peels, Aqua Luxe hydration, and Mocha Gua Sha bodywork.",
  },
  {
    title: "Signature Spa Packages",
    eyebrow: "Collection II",
    href: "/services/spa-packages" as const,
    description: "Multi-hour luxury sanctuary experiences (You Deserve It! & Queen For A Day!).",
  },
  {
    title: "Beauty Atelier & Artistry",
    eyebrow: "Collection III",
    href: "/services/beauty-atelier" as const,
    description: "The Glam Chapter makeup, structured gel nails, lash couture, and silk waxing.",
  },
  {
    title: "Advanced Clinical Aesthetics",
    eyebrow: "Collection IV",
    href: "/services/advanced-aesthetics" as const,
    description: "Botox® ($10/unit), Dermal Fillers, autologous PRP, and exosome microneedling.",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EBE4] via-[#FAF7F2] to-[#FAF7F2] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 border-b border-copper/20">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-copper/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          {/* Main Title & Description Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="eyebrow text-copper">{eyebrow}</span>
              <span className="h-px w-8 bg-copper/30" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-display text-4xl font-light leading-[1.05] sm:text-6xl lg:text-7xl text-foreground text-balance"
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-xs leading-6 sm:text-sm sm:leading-7 text-muted-foreground font-light"
            >
              {children}
            </motion.div>
          </div>

          {/* Right-Side Feature Atelier Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 border border-copper/30 bg-background/90 backdrop-blur-md p-6 sm:p-7 space-y-4 shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-copper/15 pb-3">
              <span className="text-[10px] uppercase tracking-[0.22em] text-copper font-semibold">
                Lumé Clinical Atelier
              </span>
              <span className="text-[9px] uppercase tracking-widest text-copper bg-copper/10 px-2.5 py-1 font-medium">
                Sherwood Park, AB
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div>
                <p className="font-display text-2xl font-light text-foreground">24+ Rituals</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Bespoke Formulations</p>
              </div>
              <div>
                <p className="font-display text-2xl font-light text-foreground">Bioline Jatò</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Italy Certified Partner</p>
              </div>
            </div>

            <div className="pt-3 border-t border-copper/15 flex flex-col sm:flex-row items-center gap-3">
              <Button
                asChild
                variant="outline"
                className="w-full h-10 rounded-none border-copper/50 bg-transparent text-[10px] uppercase tracking-[0.16em] text-copper hover:bg-copper hover:text-white transition-all duration-300"
              >
                <a href="tel:+17804108278">Direct Line: (780) 410-8278</a>
              </Button>
              <Button
                asChild
                className="w-full h-10 rounded-none bg-foreground text-background text-[10px] uppercase tracking-[0.16em] hover:bg-copper hover:text-white transition-all duration-300"
              >
                <Link to="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);

  // Lock body scroll on mobile when menu drawer is open
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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-copper/20 transition-all duration-300 shadow-sm">
      {/* Top Global Atelier Announcement Strip */}
      <div className="bg-[#131211] text-copper-light py-1.5 px-5 sm:px-8 text-center text-[10px] tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-3 border-b border-copper/15">
        <span className="flex items-center gap-1.5">
          <Sparkles className="size-3 text-copper-light" />
          <span>Bespoke Medispa Atelier</span>
          <span className="text-white/30">|</span>
          <span className="text-white/80">Sherwood Park, AB</span>
        </span>
        <span className="hidden md:inline text-white/30">•</span>
        <span className="hidden md:inline text-white/80">
          Direct Line:{" "}
          <a href="tel:+17804108278" className="text-copper-light underline hover:text-white transition-colors">
            (780) 410-8278
          </a>
        </span>
        <span className="hidden lg:inline text-white/30">•</span>
        <span className="hidden lg:inline text-white/70">100% Private Suites</span>
      </div>

      <div className="relative mx-auto flex h-16 sm:h-20 max-w-[1480px] items-center justify-between px-5 sm:px-8">
        {/* Left: Brand Logo */}
        <Link to="/" aria-label="Lumé Aesthetics home" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <img
            src="/lume-logo-full.svg"
            alt="Lumé Aesthetics"
            className="h-8 w-auto sm:h-11 object-contain transition-opacity hover:opacity-90"
          />
        </Link>

        {/* Center: Exact Navigation matching the user requested screenshot:
            HOME | ABOUT US | SERVICE ⌵ | BLOGS | PAGES ⌵ | CONTACT US */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {/* 1. HOME */}
          <Link
            to="/"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#131211] transition-colors hover:text-copper"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-copper" }}
          >
            HOME
          </Link>

          {/* 2. ABOUT US */}
          <Link
            to="/about"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#131211] transition-colors hover:text-copper"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-copper" }}
          >
            ABOUT US
          </Link>

          {/* 3. SERVICE ⌵ Dropdown */}
          <div
            className="relative py-6"
            onMouseEnter={() => setServiceMenuOpen(true)}
            onMouseLeave={() => setServiceMenuOpen(false)}
          >
            <Link
              to="/treatments"
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#131211] transition-colors hover:text-copper flex items-center gap-1"
              activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-copper" }}
            >
              <span>SERVICE</span>
              <ChevronDown className="size-3 text-copper" />
            </Link>

            <AnimatePresence>
              {serviceMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-16 left-0 w-80 rounded-none border border-copper/35 bg-[#131211] p-4 shadow-2xl backdrop-blur-3xl space-y-2 text-white"
                >
                  {serviceCategories.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={() => setServiceMenuOpen(false)}
                      className="p-3 border border-copper/15 bg-white/5 hover:bg-white/10 text-xs text-white block transition-colors group"
                    >
                      <span className="text-[9px] uppercase tracking-wider text-copper-light block font-semibold">
                        {item.eyebrow}
                      </span>
                      <span className="text-xs font-medium text-white group-hover:text-copper-light transition-colors">
                        {item.title}
                      </span>
                      <p className="text-[11px] text-white/60 font-light mt-0.5 line-clamp-1">{item.description}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. BLOGS */}
          <Link
            to="/blogs"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#131211] transition-colors hover:text-copper"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-copper" }}
          >
            BLOGS
          </Link>

          {/* 5. PAGES ⌵ Mega Menu */}
          <div
            className="relative py-6"
            onMouseEnter={() => setPagesMenuOpen(true)}
            onMouseLeave={() => setPagesMenuOpen(false)}
          >
            <button
              type="button"
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#131211] transition-colors hover:text-copper flex items-center gap-1"
            >
              <span>PAGES</span>
              <ChevronDown className="size-3 text-copper" />
            </button>

            <AnimatePresence>
              {pagesMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.22 }}
                  className="absolute top-16 -left-48 w-[680px] rounded-none border border-copper/35 bg-[#131211] p-6 shadow-2xl backdrop-blur-3xl grid grid-cols-3 gap-6 text-white"
                >
                  {/* Column 1: The Atelier Story */}
                  <div className="space-y-3 border-r border-white/10 pr-4">
                    <span className="text-[9px] uppercase tracking-[0.24em] text-copper-light font-semibold block">
                      01 • Sanctuary &amp; Editorial
                    </span>
                    <ul className="space-y-2 text-xs font-light">
                      <li>
                        <Link to="/about" onClick={() => setPagesMenuOpen(false)} className="text-white/80 hover:text-copper-light transition-colors block py-0.5">
                          Our Story &amp; Philosophy
                        </Link>
                      </li>
                      <li>
                        <Link to="/blogs" onClick={() => setPagesMenuOpen(false)} className="text-white/80 hover:text-copper-light transition-colors block py-0.5">
                          Skincare &amp; Clinical Journal
                        </Link>
                      </li>
                      <li>
                        <Link to="/team" onClick={() => setPagesMenuOpen(false)} className="text-white/80 hover:text-copper-light transition-colors block py-0.5">
                          Master Clinicians &amp; Team
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Reservations & Menus */}
                  <div className="space-y-3 border-r border-white/10 pr-4">
                    <span className="text-[9px] uppercase tracking-[0.24em] text-copper-light font-semibold block">
                      02 • Reservations &amp; Menus
                    </span>
                    <ul className="space-y-2 text-xs font-light">
                      <li>
                        <Link to="/appointment" onClick={() => setPagesMenuOpen(false)} className="text-white/80 hover:text-copper-light transition-colors block py-0.5">
                          Reserve Appointment
                        </Link>
                      </li>
                      <li>
                        <Link to="/price-plan" onClick={() => setPagesMenuOpen(false)} className="text-white/80 hover:text-copper-light transition-colors block py-0.5">
                          Price Plan &amp; Investment
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-details" onClick={() => setPagesMenuOpen(false)} className="text-white/80 hover:text-copper-light transition-colors block py-0.5">
                          Protocol Monograph &amp; Steps
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Lookbook & Concierge */}
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-[0.24em] text-copper-light font-semibold block">
                      03 • Lookbook &amp; Concierge
                    </span>
                    <ul className="space-y-2 text-xs font-light">
                      <li>
                        <Link to="/gallery" onClick={() => setPagesMenuOpen(false)} className="text-white/80 hover:text-copper-light transition-colors block py-0.5">
                          Visual Lookbook &amp; Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={() => setPagesMenuOpen(false)} className="text-white/80 hover:text-copper-light transition-colors block py-0.5">
                          Direct Studio Concierge
                        </Link>
                      </li>
                      <li>
                        <a href="/Brochure.pdf" target="_blank" rel="noreferrer" className="text-copper-light hover:underline block py-0.5 font-medium flex items-center justify-between">
                          <span>Official Brochure (PDF)</span>
                          <span className="text-[9px] bg-copper/20 px-1.5 py-0.5 rounded-none border border-copper/30">Download</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 6. CONTACT US */}
          <Link
            to="/contact"
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#131211] transition-colors hover:text-copper"
            activeProps={{ className: "text-[11px] font-bold uppercase tracking-[0.18em] text-copper" }}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Right: Book Button & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Button asChild className="h-10 sm:h-11 rounded-none bg-[#131211] text-white px-5 sm:px-7 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] shadow-md hover:bg-copper hover:text-white transition-all duration-300">
            <Link to="/appointment">Book Appointment</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-none text-[#131211] hover:bg-copper/10 lg:hidden"
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
            className="fixed inset-x-0 top-[5.5rem] z-40 overflow-y-auto border-t border-copper/20 bg-[#131211] px-6 py-8 text-white lg:hidden custom-scrollbar"
          >
            <nav className="flex flex-col space-y-6" aria-label="Mobile navigation">
              <div className="space-y-4">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-white hover:text-copper-light transition-colors block"
                >
                  HOME
                </Link>
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-white hover:text-copper-light transition-colors block"
                >
                  ABOUT US
                </Link>

                <div className="border-y border-white/10 py-3 space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-copper-light font-semibold block">
                    SERVICES &amp; PROTOCOLS
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-light">
                    <Link to="/treatments" onClick={() => setOpen(false)} className="p-2 bg-white/5 border border-white/10 hover:border-copper">
                      All Treatments (24+)
                    </Link>
                    <Link to="/service-details" onClick={() => setOpen(false)} className="p-2 bg-white/5 border border-white/10 hover:border-copper">
                      Service Details
                    </Link>
                    <Link to="/services/skin-and-body-rituals" onClick={() => setOpen(false)} className="p-2 bg-white/5 border border-white/10 hover:border-copper">
                      Skin &amp; Body Rituals
                    </Link>
                    <Link to="/services/spa-packages" onClick={() => setOpen(false)} className="p-2 bg-white/5 border border-white/10 hover:border-copper">
                      Spa Packages
                    </Link>
                    <Link to="/services/beauty-atelier" onClick={() => setOpen(false)} className="p-2 bg-white/5 border border-white/10 hover:border-copper">
                      Beauty Atelier
                    </Link>
                    <Link to="/services/advanced-aesthetics" onClick={() => setOpen(false)} className="p-2 bg-white/5 border border-white/10 hover:border-copper">
                      Advanced Aesthetics
                    </Link>
                  </div>
                </div>

                <Link
                  to="/blogs"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-white hover:text-copper-light transition-colors block"
                >
                  BLOGS
                </Link>

                <div className="border-b border-white/10 pb-3 space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-copper-light font-semibold block">
                    ALL PAGES
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-light">
                    <Link to="/appointment" onClick={() => setOpen(false)} className="p-2 bg-white/5 border border-white/10 hover:border-copper">
                      Appointment Booking
                    </Link>
                    <Link to="/price-plan" onClick={() => setOpen(false)} className="p-2 bg-white/5 border border-white/10 hover:border-copper">
                      Price Plan &amp; Menu
                    </Link>
                    <Link to="/gallery" onClick={() => setOpen(false)} className="p-2 bg-white/5 border border-white/10 hover:border-copper">
                      Portfolio / Gallery
                    </Link>
                    <Link to="/team" onClick={() => setOpen(false)} className="p-2 bg-white/5 border border-white/10 hover:border-copper">
                      Practitioners &amp; Team
                    </Link>
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light text-white hover:text-copper-light transition-colors block"
                >
                  CONTACT US
                </Link>
              </div>

              {/* Mobile Direct Line Callout */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Button asChild className="w-full h-12 rounded-none bg-copper text-white text-xs uppercase tracking-[0.18em]">
                  <a href="tel:+17804108278">Call Studio: (780) 410-8278</a>
                </Button>
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
    <footer className="border-t border-copper/25 bg-[#131211] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" aria-label="Lumé Aesthetics Home" className="inline-block">
              <img
                src="/lume-logo-full.svg"
                alt="Lumé Aesthetics"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs leading-7 text-white/70 max-w-sm font-light">
              A private beauty atelier in Sherwood Park, Alberta. Unhurried facial &amp; body rituals, quietly polished beauty artistry, and consultation-led clinical aesthetics.
            </p>
            <div className="flex flex-col gap-2 text-xs pt-1">
              <div className="flex items-center gap-2 text-copper-light">
                <Phone className="size-3.5" />
                <a href="tel:+17804108278" className="hover:underline font-medium">
                  (780) 410-8278
                </a>
              </div>
              <div className="flex items-center gap-2 text-copper-light">
                <Mail className="size-3.5" />
                <a href="mailto:info@lumeaesthetics.co" className="hover:underline font-medium">
                  info@lumeaesthetics.co
                </a>
              </div>
            </div>
          </div>

          {/* Important Links Column (matching lumeproject footer layout) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="eyebrow text-copper-light text-[10px] uppercase tracking-[0.22em] font-semibold">
              Important Links
            </p>
            <ul className="space-y-2 text-xs text-white/75 font-light">
              <li>
                <Link to="/treatments" className="hover:text-copper-light transition-colors">
                  All Services Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-copper-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/price-plan" className="hover:text-copper-light transition-colors">
                  Price Plan &amp; Packages
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-copper-light transition-colors">
                  Appointment Booking
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-copper-light transition-colors">
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-copper-light transition-colors">
                  Our Blogs &amp; Journals
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-copper-light transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Column (matching lumeproject footer layout) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="eyebrow text-copper-light text-[10px] uppercase tracking-[0.22em] font-semibold">
              Categories
            </p>
            <ul className="space-y-2 text-xs text-white/75 font-light">
              <li>
                <Link to="/services/skin-and-body-rituals" className="hover:text-copper-light transition-colors">
                  Skin &amp; Body Rituals
                </Link>
              </li>
              <li>
                <Link to="/services/spa-packages" className="hover:text-copper-light transition-colors">
                  Spa Packages
                </Link>
              </li>
              <li>
                <Link to="/services/beauty-atelier" className="hover:text-copper-light transition-colors">
                  Beauty Atelier
                </Link>
              </li>
              <li>
                <Link to="/services/advanced-aesthetics" className="hover:text-copper-light transition-colors">
                  Advanced Clinical
                </Link>
              </li>
              <li>
                <Link to="/service-details" className="hover:text-copper-light transition-colors">
                  Service Details
                </Link>
              </li>
              <li>
                <a href="/Brochure.pdf" target="_blank" rel="noreferrer" className="hover:text-copper-light transition-colors text-copper-light font-medium">
                  Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Hours & Location Column */}
          <div className="lg:col-span-3 space-y-5 border-l border-white/10 pl-0 lg:pl-8">
            <div className="flex items-center gap-3">
              <img src="/lume-emblem.svg" alt="Lumé Emblem" className="h-8 w-8 object-contain" />
              <div>
                <p className="text-xs text-white font-medium">Sherwood Park Atelier</p>
                <p className="text-[11px] text-white/60">2457 Broadmoor Blvd #121, AB</p>
              </div>
            </div>
            <p className="text-[11px] leading-5 text-white/60">
              Hours of Care: Mon–Fri 10am–7pm | Sat 10am–5pm | Sun By Appointment
            </p>
            <Button
              asChild
              className="w-full h-10 rounded-none bg-copper text-white text-[10px] uppercase tracking-[0.16em] hover:bg-copper/90 transition-all duration-300"
            >
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/50 font-light">
          <p>© {new Date().getFullYear()} Lumé Aesthetics. Design inspired by Lumé Project.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-3 text-copper-light" /> Bioline Jatò Italy Partner</span>
            <span>Health Canada Approved Clinicals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}