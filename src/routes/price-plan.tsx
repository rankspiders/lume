import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Sparkles, FileText, Phone, Gift, ArrowRight, ShieldCheck, Search, Calculator, Download } from "lucide-react";
import { useState, useMemo } from "react";

import { HauteMarquee, LiveSuiteClock } from "@/components/luxury-motion";
import { RotatingBadge } from "@/components/rotating-badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard, ShinyText, MagneticButton } from "@/components/reactbits";
import { addOns, spaPackages, treatmentGroups } from "@/lib/treatments";

export const Route = createFileRoute("/price-plan")({
  head: () => ({
    meta: [
      { title: "Pricing & Treatment Investment | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Official treatment pricing and signature spa packages from the Lumé Aesthetics menu. Facials from $125, Botox® at $10/unit, and luxury multi-hour packages.",
      },
      { property: "og:title", content: "Pricing & Treatment Investment | Lumé Aesthetics" },
      { property: "og:description", content: "Complete official pricing brochure for all Lumé rituals and clinical treatments." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/price-plan" },
    ],
    links: [{ rel: "canonical", href: "/price-plan" }],
  }),
  component: PricePlanPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

function PricePlanPage() {
  const [activeTab, setActiveTab] = useState<"all" | "skin" | "spa" | "beauty" | "advanced">("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#FAF5F3] text-[#2A2124]">
      {/* Bespoke Haute Hero */}
      <section className="relative overflow-hidden px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 border-b border-[#B76E79]/20 bg-gradient-to-b from-[#FAF5F3] via-[#F4E8E5] to-[#FAF5F3]">
        <div className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-[#E8C5C8]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em] text-[#8F4954]">
                  <ShinyText text="Haute Investment Dossier" speed={4} />
                </span>
                <span className="h-px w-8 bg-[#B76E79]/40" />
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-white border border-[#B76E79]/30 text-[#8F4954] shadow-xs">
                  100% TRANSPARENT PRICING
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-[#2A2124] text-balance">
                Transparent luxury.
                <br />
                <span className="italic font-serif bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] bg-clip-text text-transparent font-normal">
                  <ShinyText text="Priced with care." speed={4} />
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base sm:leading-7 text-[#5E5054] font-normal leading-relaxed">
                Every service at Lumé Aesthetics is offered with complete transparency and unhurried dedication. All pricing reflects genuine Italian Bioline formulations, medical-grade sterilizations, and certified clinical standards.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <LiveSuiteClock />
                <MagneticButton>
                  <Button
                    asChild
                    className="h-11 rounded-full bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] text-white font-semibold px-7 text-xs uppercase tracking-[0.16em] hover:opacity-95 transition-all duration-300 shadow-md"
                  >
                    <a href="/Brochure.pdf" target="_blank" rel="noreferrer">
                      <Download className="mr-2 h-3.5 w-3.5" /> Download PDF Brochure
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Bespoke Interactive Price Highlights Card with Pure White Furniture Card */}
            <div className="lg:col-span-5 relative">
              <SpotlightCard
                spotlightColor="rgba(183, 110, 121, 0.15)"
                borderColor="rgba(183, 110, 121, 0.25)"
                className="bg-white text-[#2A2124] p-6 sm:p-8 shadow-soft-card rounded-2xl relative border border-[#B76E79]/20"
              >
                <div className="flex items-center justify-between border-b border-[#B76E79]/15 pb-4 mb-6">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#8F4954] font-bold font-mono">
                    Official Rate Standard
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#8F4954] bg-[#FAF0F0] px-3 py-1 rounded-full border border-[#B76E79]/30 font-mono font-bold">
                    2026 Edition
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2.5 border-b border-[#B76E79]/10">
                    <div>
                      <p className="font-display text-base text-[#2A2124] font-medium">Botox® &amp; Dysport®</p>
                      <p className="text-xs text-[#7A6B6E] font-normal">Certified Nurse Injector</p>
                    </div>
                    <span className="font-display text-xl text-[#8F4954] font-medium">$10 / unit</span>
                  </div>

                  <div className="flex items-center justify-between py-2.5 border-b border-[#B76E79]/10">
                    <div>
                      <p className="font-display text-base text-[#2A2124] font-medium">Aqua Luxe Hydration</p>
                      <p className="text-xs text-[#7A6B6E] font-normal">45 Min Bioline Protocol</p>
                    </div>
                    <span className="font-display text-xl text-[#8F4954] font-medium">$125</span>
                  </div>

                  <div className="flex items-center justify-between py-2.5 border-b border-[#B76E79]/10">
                    <div>
                      <p className="font-display text-base text-[#2A2124] font-medium">Queen For A Day Ceremony</p>
                      <p className="text-xs text-[#7A6B6E] font-normal">3.5 Hr Flagship Day</p>
                    </div>
                    <span className="font-display text-xl text-[#8F4954] font-medium">$395</span>
                  </div>

                  <div className="flex items-center justify-between py-2.5 border-b border-[#B76E79]/10">
                    <div>
                      <p className="font-display text-base text-[#2A2124] font-medium">Autologous PRP Regenerative</p>
                      <p className="text-xs text-[#7A6B6E] font-normal">Full Face Centrifugation</p>
                    </div>
                    <span className="font-display text-xl text-[#8F4954] font-medium">$550</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B76E79]/15 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#7A6B6E]">
                    Private Consultations Included
                  </span>
                  <Link
                    to="/appointment"
                    className="text-[10px] uppercase tracking-widest text-[#8F4954] hover:text-[#B76E79] font-semibold flex items-center gap-1"
                  >
                    <span>Reserve Suite</span>
                    <span>→</span>
                  </Link>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Luxury Ticker */}
      <HauteMarquee
        items={[
          "BOTOX® $10/UNIT",
          "AQUA LUXE $125",
          "QUEEN FOR A DAY $395",
          "YOU DESERVE IT $265",
          "AUTOLOGOUS PRP $550",
          "DERMAL FILLERS $550/SYRINGE",
          "SHERWOOD PARK SANCTUARY",
        ]}
      />

      {/* Flagship Spa Packages Banner */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto border-b border-[#B76E79]/20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Signature Multi-Hour Experiences</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-[#2A2124]">
            Flagship Spa Ceremonies
          </h2>
          <p className="mt-4 text-xs sm:text-sm leading-6 text-[#5E5054] font-normal">
            Crafted for total renewal, milestones, and bespoke gifting. Private suites and complimentary organic herbal tea service included.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {spaPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <SpotlightCard
                spotlightColor="rgba(183, 110, 121, 0.15)"
                borderColor="rgba(183, 110, 121, 0.25)"
                className="p-8 sm:p-10 flex flex-col justify-between shadow-soft-card rounded-2xl transition-all duration-300 relative h-full bg-white text-[#2A2124] border border-[#B76E79]/20"
              >
                {idx === 1 && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-[#8F4954] to-[#B76E79] text-white text-[9px] uppercase tracking-[0.2em] px-3.5 py-1 rounded-full font-bold shadow-xs">
                    Most Indulgent
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-baseline border-b border-[#B76E79]/15 pb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F4954]">
                        {pkg.duration}
                      </span>
                      <h3 className="font-display text-3xl font-light mt-1 text-[#2A2124]">{pkg.name}</h3>
                    </div>
                    <span className="font-display text-4xl font-light text-[#8F4954]">
                      {pkg.price}
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-6 font-normal text-[#5E5054] dark:text-white">
                    {pkg.summary}
                  </p>

                  {pkg.includedItems && (
                    <div className="mt-6 pt-5 border-t border-[#B76E79]/15 dark:border-[#B76E79]/30 space-y-2.5">
                      <span className="text-[10px] uppercase tracking-wider font-semibold block text-[#8F4954] dark:text-white">
                        Full Ceremony Inclusions:
                      </span>
                      <ul className="space-y-2 text-xs">
                        {pkg.includedItems.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 shrink-0 text-[#B76E79] dark:text-[#E7B2A9]" />
                            <span className="text-[#3A3033] dark:text-white font-normal">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-[#B76E79]/15">
                  <MagneticButton className="w-full">
                    <Button
                      asChild
                      className="w-full h-12 rounded-full text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-md bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] text-white font-semibold hover:opacity-95"
                    >
                      <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Reservation: ${pkg.name} (${pkg.price})`)}`}>
                        Reserve Ceremony ({pkg.price})
                      </a>
                    </Button>
                  </MagneticButton>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Complete Pricing Menus by Discipline */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto space-y-16">
        {/* PDF Download Bar - Pure White Card */}
        <div className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft-card text-[#2A2124]">
          <div className="flex items-center gap-3">
            <FileText className="size-6 text-[#B76E79]" />
            <div>
              <h4 className="font-display text-lg text-[#2A2124] font-medium">Download Official Menu &amp; Brochure</h4>
              <p className="text-xs text-[#5E5054] font-normal">Keep a copy of our complete treatment pricing and procedure guides.</p>
            </div>
          </div>
          <Button asChild variant="outline" className="h-10 rounded-full border-[#B76E79]/40 bg-white text-xs uppercase tracking-[0.16em] text-[#8F4954] hover:bg-[#FAF0F0] hover:text-[#2A2124] font-semibold">
            <a href="/Brochure.pdf" target="_blank" rel="noreferrer">
              Download PDF (Brochure)
            </a>
          </Button>
        </div>

        {/* 1. Skin & Body Rituals Table */}
        <div className="space-y-6">
          <div className="flex justify-between items-baseline border-b border-[#B76E79]/20 pb-3">
            <div>
              <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Collection 01</span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#2A2124]">Skin &amp; Body Rituals</h3>
            </div>
            <Link to="/services/skin-and-body-rituals" className="text-xs uppercase tracking-widest text-[#8F4954] hover:underline font-semibold">
              View Detailed Protocols →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {treatmentGroups[0]?.treatments.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 flex flex-col justify-between hover:border-[#B76E79]/50 transition-all shadow-soft-card text-[#2A2124]">
                <div>
                  <div className="flex justify-between items-baseline border-b border-[#B76E79]/15 pb-2">
                    <h4 className="font-display text-lg font-light text-[#2A2124]">{t.name}</h4>
                    <span className="font-display text-xl text-[#8F4954] font-light">{t.price}</span>
                  </div>
                  {t.duration && <p className="text-[10px] uppercase tracking-wider text-[#7A6B6E] mt-1 font-medium">Duration: {t.duration}</p>}
                  <p className="text-xs text-[#5E5054] leading-5 mt-2 font-normal">{t.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#B76E79]/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-semibold">Bioline Italy</span>
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Booking: ${t.name}`)}`} className="text-[#8F4954] hover:text-[#B76E79] uppercase tracking-[0.14em] text-[10px] font-semibold">
                    Reserve →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Beauty Atelier Table */}
        <div className="space-y-6">
          <div className="flex justify-between items-baseline border-b border-[#B76E79]/20 pb-3">
            <div>
              <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Collection 02</span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#2A2124]">Beauty Atelier &amp; Artistry</h3>
            </div>
            <Link to="/services/beauty-atelier" className="text-xs uppercase tracking-widest text-[#8F4954] hover:underline font-semibold">
              View Artistry Details →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {treatmentGroups[1]?.treatments.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 flex flex-col justify-between hover:border-[#B76E79]/50 transition-all shadow-soft-card text-[#2A2124]">
                <div>
                  <div className="flex justify-between items-baseline border-b border-[#B76E79]/15 pb-2">
                    <h4 className="font-display text-lg font-light text-[#2A2124]">{t.name}</h4>
                    <span className="font-display text-xl text-[#8F4954] font-light">{t.price}</span>
                  </div>
                  {t.duration && <p className="text-[10px] uppercase tracking-wider text-[#7A6B6E] mt-1 font-medium">Duration: {t.duration}</p>}
                  <p className="text-xs text-[#5E5054] leading-5 mt-2 font-normal">{t.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#B76E79]/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-semibold">Atelier Couture</span>
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Booking: ${t.name}`)}`} className="text-[#8F4954] hover:text-[#B76E79] uppercase tracking-[0.14em] text-[10px] font-semibold">
                    Reserve →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Advanced Aesthetics Table */}
        <div className="space-y-6">
          <div className="flex justify-between items-baseline border-b border-[#B76E79]/20 pb-3">
            <div>
              <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Collection 03</span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#2A2124]">Advanced Clinical Aesthetics</h3>
            </div>
            <Link to="/services/advanced-aesthetics" className="text-xs uppercase tracking-widest text-[#8F4954] hover:underline font-semibold">
              View Clinical Details →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {treatmentGroups[2]?.treatments.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 flex flex-col justify-between hover:border-[#B76E79]/50 transition-all shadow-soft-card text-[#2A2124]">
                <div>
                  <div className="flex justify-between items-baseline border-b border-[#B76E79]/15 pb-2">
                    <h4 className="font-display text-lg font-light text-[#2A2124]">{t.name}</h4>
                    <span className="font-display text-xl text-[#8F4954] font-light">{t.price}</span>
                  </div>
                  {t.duration && <p className="text-[10px] uppercase tracking-wider text-[#7A6B6E] mt-1 font-medium">Duration: {t.duration}</p>}
                  <p className="text-xs text-[#5E5054] leading-5 mt-2 font-normal">{t.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#B76E79]/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-semibold">Health Canada Certified</span>
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Consultation: ${t.name}`)}`} className="text-[#8F4954] hover:text-[#B76E79] uppercase tracking-[0.14em] text-[10px] font-semibold">
                    Consultation →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Add-Ons Strip */}
        <div className="space-y-6">
          <div className="border-b border-[#B76E79]/20 pb-3">
            <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Ceremonial Enhancements</span>
            <h3 className="font-display text-2xl font-light text-[#2A2124]">Treatment Add-Ons</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {addOns.map((add) => (
              <div key={add.name} className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 flex items-center justify-between shadow-soft-card text-[#2A2124]">
                <div>
                  <h4 className="font-display text-lg text-[#2A2124] font-light">{add.name}</h4>
                  <p className="text-xs text-[#5E5054] mt-0.5">{add.summary}</p>
                  <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-semibold mt-1 block">Duration: {add.duration}</span>
                </div>
                <span className="font-display text-2xl text-[#8F4954] font-light shrink-0 ml-4">{add.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Reservation Callout */}
      <section className="bg-[#FAF0F0] text-[#2A2124] py-20 text-center px-5 sm:px-8 border-t border-[#B76E79]/20">
        <div className="max-w-2xl mx-auto space-y-4">
          <RotatingBadge text="STUDIO RESERVATIONS • LUMÉ AESTHETICS • " href="tel:+17804108278" size={100} className="mx-auto mb-3" />
          <h2 className="font-display text-3xl sm:text-5xl font-light text-[#2A2124]">
            Questions about our treatment plans?
          </h2>
          <p className="text-xs sm:text-sm text-[#5E5054] font-normal leading-6">
            Speak directly with our concierge team for custom package pairings, bridal group bookings, or clinical consultation scheduling.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-11 rounded-full bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] text-white font-semibold text-xs uppercase tracking-[0.16em] hover:opacity-95 px-8 shadow-md">
              <a href="tel:+17804108278">Call Studio: (780) 410-8278</a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full border-[#B76E79]/40 bg-white text-xs uppercase tracking-[0.16em] text-[#8F4954] hover:bg-[#FAF0F0] hover:text-[#2A2124] font-semibold">
              <Link to="/contact">Contact Concierge</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
