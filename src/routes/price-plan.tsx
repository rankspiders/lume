import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Sparkles, FileText, Phone, Gift, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { PageIntro } from "@/components/site-shell";
import { RotatingBadge } from "@/components/rotating-badge";
import { Button } from "@/components/ui/button";
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

  return (
    <div className="bg-[#FAF7F2] text-[#131211]">
      <PageIntro
        eyebrow="Treatment Investment"
        title={
          <>
            Transparent luxury.
            <br />
            <em>Priced with care.</em>
          </>
        }
      >
        Every service at Lumé Aesthetics is offered with complete transparency and unhurried dedication. All pricing reflects genuine Italian Bioline formulations and certified clinical standards.
      </PageIntro>

      {/* Flagship Spa Packages Banner */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto border-b border-copper/15">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-copper">Signature Multi-Hour Experiences</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-foreground">
            Flagship Spa Ceremonies
          </h2>
          <p className="mt-4 text-xs sm:text-sm leading-6 text-muted-foreground font-light">
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
              className={`border p-8 sm:p-10 flex flex-col justify-between shadow-xl transition-all duration-300 relative ${
                idx === 1
                  ? "border-copper bg-[#131211] text-white"
                  : "border-copper/30 bg-background text-foreground hover:border-copper"
              }`}
            >
              {idx === 1 && (
                <span className="absolute top-0 right-0 bg-copper text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-semibold">
                  Most Indulgent
                </span>
              )}

              <div>
                <div className="flex justify-between items-baseline border-b border-copper/20 pb-4">
                  <div>
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${idx === 1 ? "text-copper-light" : "text-copper"}`}>
                      {pkg.duration}
                    </span>
                    <h3 className="font-display text-3xl font-light mt-1">{pkg.name}</h3>
                  </div>
                  <span className={`font-display text-4xl font-light ${idx === 1 ? "text-copper-light" : "text-copper"}`}>
                    {pkg.price}
                  </span>
                </div>

                <p className={`mt-4 text-xs leading-6 font-light ${idx === 1 ? "text-white/75" : "text-muted-foreground"}`}>
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
                          <span className={idx === 1 ? "text-white/85" : "text-foreground/85"}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-copper/15">
                <Button
                  asChild
                  className={`w-full h-12 rounded-none text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                    idx === 1
                      ? "bg-copper text-white hover:bg-copper/90"
                      : "bg-[#131211] text-white hover:bg-copper"
                  }`}
                >
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Reservation: ${pkg.name} (${pkg.price})`)}`}>
                    Reserve Ceremony ({pkg.price})
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Complete Pricing Menus by Discipline */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto space-y-16">
        {/* PDF Download Bar */}
        <div className="border border-copper/25 bg-secondary/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="size-6 text-copper" />
            <div>
              <h4 className="font-display text-lg text-foreground font-medium">Download Official Menu & Brochure</h4>
              <p className="text-xs text-muted-foreground font-light">Keep a copy of our complete treatment pricing and procedure guides.</p>
            </div>
          </div>
          <Button asChild variant="outline" className="h-10 rounded-none border-copper bg-transparent text-xs uppercase tracking-[0.16em] text-copper hover:bg-copper hover:text-white">
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
              <h3 className="font-display text-2xl sm:text-3xl font-light text-foreground">Skin & Body Rituals</h3>
            </div>
            <Link to="/services/skin-and-body-rituals" className="text-xs uppercase tracking-widest text-copper hover:underline font-semibold">
              View Detailed Protocols →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {treatmentGroups[0]?.treatments.map((t) => (
              <div key={t.name} className="border border-copper/20 bg-background p-5 flex flex-col justify-between hover:border-copper transition-colors">
                <div>
                  <div className="flex justify-between items-baseline border-b border-copper/15 pb-2">
                    <h4 className="font-display text-lg font-light text-foreground">{t.name}</h4>
                    <span className="font-display text-xl text-copper font-light">{t.price}</span>
                  </div>
                  {t.duration && <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Duration: {t.duration}</p>}
                  <p className="text-xs text-muted-foreground leading-5 mt-2 font-light">{t.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-copper/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-copper font-medium">Bioline Italy</span>
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Booking: ${t.name}`)}`} className="text-foreground hover:text-copper uppercase tracking-[0.14em] text-[10px] font-semibold">
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
              <h3 className="font-display text-2xl sm:text-3xl font-light text-foreground">Beauty Atelier & Artistry</h3>
            </div>
            <Link to="/services/beauty-atelier" className="text-xs uppercase tracking-widest text-copper hover:underline font-semibold">
              View Artistry Details →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {treatmentGroups[1]?.treatments.map((t) => (
              <div key={t.name} className="border border-copper/20 bg-background p-5 flex flex-col justify-between hover:border-copper transition-colors">
                <div>
                  <div className="flex justify-between items-baseline border-b border-copper/15 pb-2">
                    <h4 className="font-display text-lg font-light text-foreground">{t.name}</h4>
                    <span className="font-display text-xl text-copper font-light">{t.price}</span>
                  </div>
                  {t.duration && <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Duration: {t.duration}</p>}
                  <p className="text-xs text-muted-foreground leading-5 mt-2 font-light">{t.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-copper/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-copper font-medium">Atelier Couture</span>
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Booking: ${t.name}`)}`} className="text-foreground hover:text-copper uppercase tracking-[0.14em] text-[10px] font-semibold">
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
              <h3 className="font-display text-2xl sm:text-3xl font-light text-foreground">Advanced Clinical Aesthetics</h3>
            </div>
            <Link to="/services/advanced-aesthetics" className="text-xs uppercase tracking-widest text-copper hover:underline font-semibold">
              View Clinical Details →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {treatmentGroups[2]?.treatments.map((t) => (
              <div key={t.name} className="border border-copper/20 bg-background p-5 flex flex-col justify-between hover:border-copper transition-colors">
                <div>
                  <div className="flex justify-between items-baseline border-b border-copper/15 pb-2">
                    <h4 className="font-display text-lg font-light text-foreground">{t.name}</h4>
                    <span className="font-display text-xl text-copper font-light">{t.price}</span>
                  </div>
                  {t.duration && <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Duration: {t.duration}</p>}
                  <p className="text-xs text-muted-foreground leading-5 mt-2 font-light">{t.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-copper/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-copper font-medium">Health Canada Certified</span>
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Consultation: ${t.name}`)}`} className="text-foreground hover:text-copper uppercase tracking-[0.14em] text-[10px] font-semibold">
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
            <h3 className="font-display text-2xl font-light text-foreground">Treatment Add-Ons</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {addOns.map((add) => (
              <div key={add.name} className="border border-copper/20 bg-secondary/30 p-5 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-lg text-foreground font-light">{add.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{add.summary}</p>
                  <span className="text-[10px] uppercase tracking-wider text-copper font-semibold mt-1 block">Duration: {add.duration}</span>
                </div>
                <span className="font-display text-2xl text-copper font-light shrink-0 ml-4">{add.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Reservation Callout */}
      <section className="bg-[#131211] text-white py-20 text-center px-5 sm:px-8 border-t border-copper/20">
        <div className="max-w-2xl mx-auto space-y-4">
          <RotatingBadge text="STUDIO RESERVATIONS • LUMÉ AESTHETICS • " href="tel:+17804108278" size={100} className="mx-auto mb-3" />
          <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
            Questions about our treatment plans?
          </h2>
          <p className="text-xs sm:text-sm text-white/75 font-light leading-6">
            Speak directly with our concierge team for custom package pairings, bridal group bookings, or clinical consultation scheduling.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-11 rounded-none bg-copper text-white text-xs uppercase tracking-[0.18em] hover:bg-copper/90 px-8">
              <a href="tel:+17804108278">Call Studio: (780) 410-8278</a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-none border-copper-light bg-transparent text-xs uppercase tracking-[0.18em] text-copper-light hover:bg-copper-light hover:text-[#131211]">
              <Link to="/contact">Contact Concierge</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
