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
    <div className="bg-[#0A0908] text-[#FAF7F2]">
      {/* Bespoke Haute Hero */}
      <section className="relative overflow-hidden px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 border-b border-copper/20 bg-gradient-to-b from-[#161412] via-[#0A0908] to-[#0A0908]">
        <div className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-copper/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em]">
                  <ShinyText text="Haute Investment Dossier" speed={4} />
                </span>
                <span className="h-px w-8 bg-[#F3C592]/70" />
                <span className="dark-pill-badge">
                  100% TRANSPARENT PRICING
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-[#FAF7F2] text-balance">
                Transparent luxury.
                <br />
                <span className="italic font-serif gold-gradient-text font-normal">
                  <ShinyText text="Priced with care." speed={4} />
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base sm:leading-7 text-[#E7E2DB] font-normal leading-relaxed">
                Every service at Lumé Aesthetics is offered with complete transparency and unhurried dedication. All pricing reflects genuine Italian Bioline formulations, medical-grade sterilizations, and certified clinical standards.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <LiveSuiteClock />
                <MagneticButton>
                  <Button
                    asChild
                    className="h-11 rounded-none bg-copper text-[#0A0908] font-bold px-6 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A0908] transition-all duration-300 shadow-lg"
                  >
                    <a href="/Brochure.pdf" target="_blank" rel="noreferrer">
                      <Download className="mr-2 h-3.5 w-3.5" /> Download PDF Brochure
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Bespoke Interactive Price Highlights Card with Spotlight */}
            <div className="lg:col-span-5 relative">
              <SpotlightCard
                spotlightColor="rgba(243, 197, 146, 0.22)"
                borderColor="rgba(243, 197, 146, 0.4)"
                className="bg-[#131211] text-white p-6 sm:p-8 shadow-2xl relative border border-copper/35"
              >
                <div className="flex items-center justify-between border-b border-copper/25 pb-4 mb-6">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#F3C592] font-bold font-mono">
                    Official Rate Standard
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#F5D0A9] bg-[#1C1917] px-2.5 py-1 border border-copper/50 font-mono font-bold">
                    2026 Edition
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2.5 border-b border-white/10">
                    <div>
                      <p className="font-display text-base text-[#FAF7F2] font-medium">Botox® &amp; Dysport®</p>
                      <p className="text-xs text-[#E7E2DB] font-normal">Certified Nurse Injector</p>
                    </div>
                    <span className="font-display text-xl text-[#F3C592] font-medium">$10 / unit</span>
                  </div>

                  <div className="flex items-center justify-between py-2.5 border-b border-white/10">
                    <div>
                      <p className="font-display text-base text-[#FAF7F2] font-medium">Aqua Luxe Hydration</p>
                      <p className="text-xs text-[#E7E2DB] font-normal">45 Min Bioline Protocol</p>
                    </div>
                    <span className="font-display text-xl text-[#F3C592] font-medium">$125</span>
                  </div>

                  <div className="flex items-center justify-between py-2.5 border-b border-white/10">
                    <div>
                      <p className="font-display text-base text-[#FAF7F2] font-medium">Queen For A Day Ceremony</p>
                      <p className="text-xs text-[#E7E2DB] font-normal">3.5 Hr Flagship Day</p>
                    </div>
                    <span className="font-display text-xl text-[#F5D0A9] font-medium">$395</span>
                  </div>

                  <div className="flex items-center justify-between py-2.5 border-b border-white/10">
                    <div>
                      <p className="font-display text-base text-[#FAF7F2] font-medium">Autologous PRP Regenerative</p>
                      <p className="text-xs text-[#E7E2DB] font-normal">Full Face Centrifugation</p>
                    </div>
                    <span className="font-display text-xl text-[#F3C592] font-medium">$550</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-copper/25 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-white/60">
                    Private Consultations Included
                  </span>
                  <Link
                    to="/appointment"
                    className="text-[10px] uppercase tracking-widest text-copper-light hover:text-white font-semibold flex items-center gap-1"
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
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto border-b border-copper/15">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-copper">Signature Multi-Hour Experiences</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-white">
            Flagship Spa Ceremonies
          </h2>
          <p className="mt-4 text-xs sm:text-sm leading-6 text-white/70 font-light">
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
                spotlightColor={idx === 1 ? "rgba(223, 194, 157, 0.22)" : "rgba(181, 126, 82, 0.18)"}
                borderColor={idx === 1 ? "#B57E52" : "rgba(181, 126, 82, 0.3)"}
                className="p-8 sm:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 relative h-full bg-[#131211] text-white border border-copper/25"
              >
                {idx === 1 && (
                  <span className="absolute top-0 right-0 bg-copper text-[#0A0908] text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-bold">
                    Most Indulgent
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-baseline border-b border-copper/20 pb-4">
                    <div>
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${idx === 1 ? "text-copper-light" : "text-copper"}`}>
                        {pkg.duration}
                      </span>
                      <h3 className="font-display text-3xl font-light mt-1 text-white">{pkg.name}</h3>
                    </div>
                    <span className={`font-display text-4xl font-light ${idx === 1 ? "text-copper-light" : "text-copper"}`}>
                      {pkg.price}
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-6 font-light text-white/75">
                    {pkg.summary}
                  </p>

                  {pkg.includedItems && (
                    <div className="mt-6 pt-5 border-t border-copper/15 space-y-2.5">
                      <span className={`text-[10px] uppercase tracking-wider font-semibold block ${idx === 1 ? "text-copper-light" : "text-copper"}`}>
                        Full Ceremony Inclusions:
                      </span>
                      <ul className="space-y-2 text-xs">
                        {pkg.includedItems.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 className={`size-4 shrink-0 ${idx === 1 ? "text-copper-light" : "text-copper"}`} />
                            <span className="text-white/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-copper/15">
                  <MagneticButton className="w-full">
                    <Button
                      asChild
                      className={`w-full h-12 rounded-none text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-md ${
                        idx === 1
                          ? "bg-copper text-[#0A0908] font-semibold hover:bg-white"
                          : "bg-[#1c1a17] text-white hover:bg-copper hover:text-[#0A0908]"
                      }`}
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
        {/* PDF Download Bar */}
        <div className="border border-copper/30 bg-[#131211] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <FileText className="size-6 text-copper" />
            <div>
              <h4 className="font-display text-lg text-white font-medium">Download Official Menu &amp; Brochure</h4>
              <p className="text-xs text-white/60 font-light">Keep a copy of our complete treatment pricing and procedure guides.</p>
            </div>
          </div>
          <Button asChild variant="outline" className="h-10 rounded-none border-copper bg-transparent text-xs uppercase tracking-[0.16em] text-copper-light hover:bg-copper hover:text-[#0A0908]">
            <a href="/Brochure.pdf" target="_blank" rel="noreferrer">
              Download PDF (Brochure)
            </a>
          </Button>
        </div>

        {/* 1. Skin & Body Rituals Table */}
        <div className="space-y-6">
          <div className="flex justify-between items-baseline border-b border-copper/20 pb-3">
            <div>
              <span className="eyebrow text-copper text-[10px]">Collection 01</span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-white">Skin &amp; Body Rituals</h3>
            </div>
            <Link to="/services/skin-and-body-rituals" className="text-xs uppercase tracking-widest text-copper hover:underline font-semibold">
              View Detailed Protocols →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {treatmentGroups[0]?.treatments.map((t) => (
              <div key={t.name} className="border border-copper/20 bg-[#131211] p-5 flex flex-col justify-between hover:border-copper transition-colors">
                <div>
                  <div className="flex justify-between items-baseline border-b border-copper/15 pb-2">
                    <h4 className="font-display text-lg font-light text-white">{t.name}</h4>
                    <span className="font-display text-xl text-copper font-light">{t.price}</span>
                  </div>
                  {t.duration && <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Duration: {t.duration}</p>}
                  <p className="text-xs text-white/70 leading-5 mt-2 font-light">{t.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-copper/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-copper font-medium">Bioline Italy</span>
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Booking: ${t.name}`)}`} className="text-copper-light hover:text-white uppercase tracking-[0.14em] text-[10px] font-semibold">
                    Reserve →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Beauty Atelier Table */}
        <div className="space-y-6">
          <div className="flex justify-between items-baseline border-b border-copper/20 pb-3">
            <div>
              <span className="eyebrow text-copper text-[10px]">Collection 02</span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-white">Beauty Atelier &amp; Artistry</h3>
            </div>
            <Link to="/services/beauty-atelier" className="text-xs uppercase tracking-widest text-copper hover:underline font-semibold">
              View Artistry Details →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {treatmentGroups[1]?.treatments.map((t) => (
              <div key={t.name} className="border border-copper/20 bg-[#131211] p-5 flex flex-col justify-between hover:border-copper transition-colors">
                <div>
                  <div className="flex justify-between items-baseline border-b border-copper/15 pb-2">
                    <h4 className="font-display text-lg font-light text-white">{t.name}</h4>
                    <span className="font-display text-xl text-copper font-light">{t.price}</span>
                  </div>
                  {t.duration && <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Duration: {t.duration}</p>}
                  <p className="text-xs text-white/70 leading-5 mt-2 font-light">{t.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-copper/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-copper font-medium">Atelier Couture</span>
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Booking: ${t.name}`)}`} className="text-copper-light hover:text-white uppercase tracking-[0.14em] text-[10px] font-semibold">
                    Reserve →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Advanced Aesthetics Table */}
        <div className="space-y-6">
          <div className="flex justify-between items-baseline border-b border-copper/20 pb-3">
            <div>
              <span className="eyebrow text-copper text-[10px]">Collection 03</span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-white">Advanced Clinical Aesthetics</h3>
            </div>
            <Link to="/services/advanced-aesthetics" className="text-xs uppercase tracking-widest text-copper hover:underline font-semibold">
              View Clinical Details →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {treatmentGroups[2]?.treatments.map((t) => (
              <div key={t.name} className="border border-copper/20 bg-[#131211] p-5 flex flex-col justify-between hover:border-copper transition-colors">
                <div>
                  <div className="flex justify-between items-baseline border-b border-copper/15 pb-2">
                    <h4 className="font-display text-lg font-light text-white">{t.name}</h4>
                    <span className="font-display text-xl text-copper font-light">{t.price}</span>
                  </div>
                  {t.duration && <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Duration: {t.duration}</p>}
                  <p className="text-xs text-white/70 leading-5 mt-2 font-light">{t.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-copper/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-copper font-medium">Health Canada Certified</span>
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Consultation: ${t.name}`)}`} className="text-copper-light hover:text-white uppercase tracking-[0.14em] text-[10px] font-semibold">
                    Consultation →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Add-Ons Strip */}
        <div className="space-y-6">
          <div className="border-b border-copper/20 pb-3">
            <span className="eyebrow text-copper text-[10px]">Ceremonial Enhancements</span>
            <h3 className="font-display text-2xl font-light text-white">Treatment Add-Ons</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {addOns.map((add) => (
              <div key={add.name} className="border border-copper/20 bg-[#131211] p-5 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-lg text-white font-light">{add.name}</h4>
                  <p className="text-xs text-white/60 mt-0.5">{add.summary}</p>
                  <span className="text-[10px] uppercase tracking-wider text-copper font-semibold mt-1 block">Duration: {add.duration}</span>
                </div>
                <span className="font-display text-2xl text-copper font-light shrink-0 ml-4">{add.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Reservation Callout */}
      <section className="bg-[#070605] text-white py-20 text-center px-5 sm:px-8 border-t border-copper/20">
        <div className="max-w-2xl mx-auto space-y-4">
          <RotatingBadge text="STUDIO RESERVATIONS • LUMÉ AESTHETICS • " href="tel:+17804108278" size={100} className="mx-auto mb-3" />
          <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
            Questions about our treatment plans?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-6">
            Speak directly with our concierge team for custom package pairings, bridal group bookings, or clinical consultation scheduling.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-11 rounded-none bg-copper text-[#0A0908] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-white px-8">
              <a href="tel:+17804108278">Call Studio: (780) 410-8278</a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-none border-copper-light bg-transparent text-xs uppercase tracking-[0.18em] text-copper-light hover:bg-copper-light hover:text-[#0A0908]">
              <Link to="/contact">Contact Concierge</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
