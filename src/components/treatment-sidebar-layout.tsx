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

      <section className="px-5 py-12 sm:px-8 sm:py-20 bg-[#FAF5F3] min-h-screen text-[#2A2124]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Persistent Sidebar (Top on mobile, Sticky on desktop) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {/* Service Navigation Box - Pure White Furniture Card */}
              <div className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 shadow-soft-card text-[#2A2124]">
                <div className="flex items-center justify-between border-b border-[#B76E79]/15 pb-3">
                  <p className="eyebrow text-[#8F4954] text-[10px] tracking-[0.24em] uppercase font-semibold">
                    Menu Navigation
                  </p>
                  <span className="text-[10px] text-[#7A6B6E] lg:hidden">Select view</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-light text-[#2A2124]">
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
                        className={`group flex items-center justify-between p-3.5 text-xs rounded-xl transition-all duration-300 border ${
                          isActive
                            ? "border-[#B76E79] bg-[#FAF0F0] text-[#8F4954] font-semibold shadow-sm"
                            : "border-[#B76E79]/15 bg-[#FAF5F3]/50 text-[#5E5054] hover:border-[#B76E79]/40 hover:bg-[#FAF0F0]/70 hover:text-[#2A2124]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate pr-2">
                          <ChevronRight
                            className={`size-3.5 shrink-0 transition-transform duration-200 ${
                              isActive
                                ? "text-[#B76E79] translate-x-1"
                                : "text-[#B76E79]/60 group-hover:translate-x-1 group-hover:text-[#B76E79]"
                            }`}
                          />
                          <div className="truncate">
                            <span className="text-[9px] uppercase tracking-wider text-[#8F4954] block font-mono font-medium">{cat.eyebrow}</span>
                            <span className="truncate font-medium text-[#2A2124]">{cat.title}</span>
                          </div>
                        </div>
                        <span
                          className={`text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-full shrink-0 font-medium ${
                            isActive
                              ? "bg-[#B76E79] text-white shadow-xs"
                              : "bg-[#FAF0F0] text-[#8F4954] border border-[#B76E79]/20"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                {/* PDF Download Link */}
                <div className="mt-5 pt-4 border-t border-[#B76E79]/15">
                  <a
                    href="/Brochure.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-xs text-[#8F4954] hover:text-[#B76E79] hover:underline p-2 font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="size-3.5 text-[#B76E79]" /> Download PDF Brochure
                    </span>
                    <span className="text-[10px] text-[#7A6B6E] font-mono bg-[#FAF5F3] px-1.5 py-0.5 rounded border border-[#B76E79]/20">PDF</span>
                  </a>
                </div>
              </div>

              {/* Consultation & Booking Callout Widget - Pure White Furniture Card with Rose Gold Glow */}
              <div className="rounded-2xl border border-[#B76E79]/25 bg-white p-6 sm:p-7 space-y-4 shadow-soft-card text-[#2A2124] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4E8E5] rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2 text-[#8F4954] text-xs font-semibold uppercase tracking-widest">
                    <Sparkles className="size-4 text-[#B76E79]" />
                    <span>Bespoke Consultation</span>
                  </div>
                  <h4 className="font-display text-2xl font-light text-[#2A2124]">
                    Unsure which ritual fits your skin?
                  </h4>
                  <p className="text-xs leading-5 text-[#5E5054] font-normal">
                    Our clinical specialists offer personalized 1-on-1 skin barrier consultations to curate your bespoke treatment roadmap.
                  </p>
                  <div className="pt-3 border-t border-[#B76E79]/15 space-y-2.5">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full h-11 rounded-full border-[#B76E79]/40 bg-white text-[10px] uppercase tracking-[0.16em] text-[#8F4954] hover:bg-[#FAF0F0] hover:text-[#2A2124] transition-all duration-300 font-semibold"
                    >
                      <a href="tel:+17804108278" className="flex items-center justify-center gap-2">
                        <Phone className="size-3.5 text-[#B76E79]" /> Call Atelier: (780) 410-8278
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="w-full h-11 rounded-full bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] text-white text-[10px] uppercase tracking-[0.16em] hover:opacity-95 font-semibold transition-all duration-300 shadow-md"
                    >
                      <Link
                        to="/appointment"
                        className="flex items-center justify-center gap-2"
                      >
                        <Calendar className="size-3.5" /> Book Consultation
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Clinical Standard & Guarantee Badge */}
              <div className="rounded-2xl border border-[#B76E79]/20 bg-white/80 backdrop-blur-sm p-5 space-y-2.5 text-xs shadow-soft-card text-[#5E5054]">
                <div className="flex items-center gap-2 text-[#2A2124] font-medium">
                  <ShieldCheck className="size-4 text-[#B76E79] shrink-0" />
                  <span className="text-[#2A2124] font-semibold text-xs">Bioline Jatò Italy &amp; Health Canada Protocol</span>
                </div>
                <p className="text-[11px] leading-5 font-normal text-[#5E5054]">
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

