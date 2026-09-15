import { Link } from "@tanstack/react-router";
import { Sparkles, Phone, Calendar, ShieldCheck, ChevronRight, FileText } from "lucide-react";
import type { ReactNode } from "react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const serviceCategories = [
  {
    id: "all",
    href: "/treatments",
    title: "Complete Menu Brochure",
    count: "All 24+ Rituals",
    eyebrow: "Brochure",
  },
  {
    id: "skin-and-body-rituals",
    href: "/services/skin-and-body-rituals",
    title: "Skin & Body Rituals",
    count: "10 Rituals",
    eyebrow: "Collection I",
  },
  {
    id: "spa-packages",
    href: "/services/spa-packages",
    title: "Signature Spa Packages",
    count: "2 Packages",
    eyebrow: "Collection II",
  },
  {
    id: "beauty-atelier",
    href: "/services/beauty-atelier",
    title: "Beauty Atelier",
    count: "6 Services",
    eyebrow: "Collection III",
  },
  {
    id: "advanced-aesthetics",
    href: "/services/advanced-aesthetics",
    title: "Advanced Aesthetics",
    count: "6 Clinicals",
    eyebrow: "Collection IV",
  },
];

interface TreatmentSidebarLayoutProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
  activeCategoryHref: string;
}

export function TreatmentSidebarLayout({
  eyebrow,
  title,
  description,
  children,
  activeCategoryHref,
}: TreatmentSidebarLayoutProps) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title}>
        {description}
      </PageIntro>

      <section className="px-5 py-12 sm:px-8 sm:py-20 bg-[#0A0908] min-h-screen text-[#FAF7F2]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Persistent Sidebar (Top on mobile, Sticky on desktop) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {/* Service Navigation Box */}
              <div className="border border-copper/25 bg-[#131211] p-5 sm:p-6 shadow-xl text-white">
                <div className="flex items-center justify-between border-b border-copper/20 pb-3">
                  <p className="eyebrow text-copper-light text-[10px] tracking-[0.24em] uppercase font-semibold">
                    Menu Navigation
                  </p>
                  <span className="text-[10px] text-white/60 lg:hidden">Select view</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-light text-[#FAF7F2]">
                  The Treatment Suites
                </h3>
                <nav className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5" aria-label="Treatment categories sidebar">
                  {serviceCategories.map((cat) => {
                    const isActive = activeCategoryHref === cat.href;
                    return (
                      <Link
                        key={cat.id}
                        to={cat.href}
                        resetScroll={false}
                        className={`group flex items-center justify-between p-3.5 text-xs transition-all duration-300 border ${
                          isActive
                            ? "border-copper bg-copper/20 text-white font-medium shadow-md"
                            : "border-copper/20 bg-[#0D0C0B] text-white/90 hover:border-copper/50 hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate pr-2">
                          <ChevronRight
                            className={`size-3.5 shrink-0 transition-transform duration-200 ${
                              isActive
                                ? "text-copper-light translate-x-1"
                                : "text-copper group-hover:translate-x-1"
                            }`}
                          />
                          <div className="truncate">
                            <span className="text-[9px] uppercase tracking-wider text-copper-light block font-mono">{cat.eyebrow}</span>
                            <span className="truncate font-medium text-white">{cat.title}</span>
                          </div>
                        </div>
                        <span
                          className={`text-[9px] tracking-wider uppercase px-2 py-0.5 shrink-0 ${
                            isActive
                              ? "bg-copper text-white font-semibold"
                              : "bg-copper/15 text-copper-light"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                {/* PDF Download Link */}
                <div className="mt-5 pt-4 border-t border-copper/20">
                  <a
                    href="/Brochure.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-xs text-copper-light hover:underline p-2 font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="size-3.5 text-copper-light" /> Download PDF Brochure
                    </span>
                    <span className="text-[10px] text-white/50 font-mono">PDF</span>
                  </a>
                </div>
              </div>

              {/* Consultation & Booking Callout Widget */}
              <div className="border border-copper/30 bg-[#161412] text-white p-6 sm:p-7 space-y-4 shadow-2xl">
                <div className="flex items-center gap-2 text-copper-light text-xs font-semibold uppercase tracking-widest">
                  <Sparkles className="size-4 text-copper-light" />
                  <span>Bespoke Consultation</span>
                </div>
                <h4 className="font-display text-2xl font-light text-white">
                  Unsure which ritual fits your skin?
                </h4>
                <p className="text-xs leading-5 text-white/75 font-light">
                  Our clinical specialists offer personalized 1-on-1 skin barrier consultations to curate your bespoke treatment roadmap.
                </p>
                <div className="pt-3 border-t border-white/10 space-y-2.5">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-11 rounded-none border-copper/40 bg-transparent text-[10px] uppercase tracking-[0.16em] text-copper-light hover:bg-copper hover:text-white transition-all duration-300"
                  >
                    <a href="tel:+17804108278" className="flex items-center justify-center gap-2">
                      <Phone className="size-3.5" /> Call Atelier: (780) 410-8278
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full h-11 rounded-none bg-copper text-white text-[10px] uppercase tracking-[0.16em] hover:bg-copper-light hover:text-[#0A0908] font-semibold transition-all duration-300 shadow-md"
                  >
                    <a
                      href="mailto:info@lumeaesthetics.co?subject=Requesting%20Treatment%20Consultation"
                      className="flex items-center justify-center gap-2"
                    >
                      <Calendar className="size-3.5" /> Book Consultation
                    </a>
                  </Button>
                </div>
              </div>

              {/* Clinical Standard & Guarantee Badge */}
              <div className="border border-copper/25 bg-[#131211] p-5 space-y-2.5 text-xs text-white/75 shadow-lg">
                <div className="flex items-center gap-2 text-white font-medium">
                  <ShieldCheck className="size-4 text-copper-light shrink-0" />
                  <span className="text-white font-medium">Bioline Jatò Italy &amp; Health Canada Protocol</span>
                </div>
                <p className="text-[11px] leading-5 font-light text-white/65">
                  All facial rituals feature authentic Bioline professional formulations. Advanced aesthetics treatments are performed by licensed clinical practitioners.
                </p>
              </div>
            </aside>

            {/* Main Service Content Area */}
            <main className="lg:col-span-8 space-y-12">
              {children}
            </main>
          </div>
        </div>
      </section>
    </>
  );
}

