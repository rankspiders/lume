import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Sparkles, Clock, Gift, HeartHandshake } from "lucide-react";

import price1Img from "@/assets/lumeproject/price-1-1.jpg";
import { TreatmentSidebarLayout } from "@/components/treatment-sidebar-layout";
import { Button } from "@/components/ui/button";
import {
  SpotlightCard,
  ShinyText,
  MagneticButton,
  TiltedCard,
  DecryptedText,
} from "@/components/reactbits";
import { spaPackages } from "@/lib/treatments";

export const Route = createFileRoute("/services/spa-packages")({
  head: () => ({
    meta: [
      { title: "Signature Spa Packages | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Multi-hour luxury head-to-toe sanctuary packages in Sherwood Park: 'You Deserve It!' (2 hrs, $265) and 'Queen For A Day!' (3 hrs, $395) featuring Bioline Jatò Italy rituals.",
      },
    ],
  }),
  component: SpaPackagesPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function SpaPackagesPage() {
  return (
    <TreatmentSidebarLayout
      eyebrow="Collection II — Signature Spa Packages"
      title={
        <>
          Multi-hour rituals for
          <br />
          <em>total sensory renewal.</em>
        </>
      }
      description="Designed for milestones, gifts of gratitude, or deep restorative self-care. Experience paired Italian Bioline facials, contouring wraps, warm scalp elixirs, and therapeutic Celluma LED phototherapy in an unhurried, private suite."
      activeCategoryHref="/services/spa-packages"
    >
      {/* Visual Banner with TiltedCard */}
      <TiltedCard rotateAmplitude={5}>
        <div className="overflow-hidden rounded-2xl border border-[#B76E79]/25 shadow-soft-card relative group bg-white p-2">
          <div className="overflow-hidden rounded-xl relative">
            <img
              src={price1Img}
              alt="Spa Packages Luxury Sanctuary Rituals"
              className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white">
                <span className="eyebrow text-[#E7B2A9] text-[10px] tracking-[0.2em] font-semibold">
                  <ShinyText text="Sanctuary Retreat" speed={3} />
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-light">
                  Unhurried Multi-Hour Holistic Ceremonies
                </h3>
              </div>
            </div>
          </div>
        </div>
      </TiltedCard>

      {/* Editorial Quote Box with SpotlightCard - Pure White Card */}
      <SpotlightCard
        spotlightColor="rgba(183, 110, 121, 0.12)"
        borderColor="rgba(183, 110, 121, 0.22)"
        className="bg-white rounded-2xl border border-[#B76E79]/20 shadow-soft-card p-6 sm:p-8 space-y-3 text-[#2A2124]"
      >
        <div className="flex items-center gap-2">
          <Gift className="size-4 text-[#B76E79]" />
          <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">The Lumé Milestone Experience</span>
        </div>
        <p className="font-serif text-lg sm:text-xl italic text-[#2A2124] leading-relaxed">
          "A sanctuary visit is never rushed. From herbal infusion welcome teas to warm botanical wraps and Celluma light, each hour is choreographed for absolute stillness."
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#7A6B6E] pt-2 border-t border-[#B76E79]/15">
          <span>Private Treatment Suite</span>
          <span>•</span>
          <span>Complimentary Organic Herbal Tea Service</span>
          <span>•</span>
          <span>Gift Certificates Available</span>
        </div>
      </SpotlightCard>

      {/* Spa Packages Listing with Pure White Furniture Cards */}
      <div className="space-y-8">
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
              className="bg-white rounded-2xl border border-[#B76E79]/20 p-6 sm:p-10 shadow-soft-card space-y-6 text-[#2A2124]"
            >
              <div className="overflow-hidden rounded-xl border border-[#B76E79]/20 relative group shadow-xs">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#B76E79]/30 text-[#8F4954] text-xs tracking-[0.2em] uppercase font-bold shadow-xs">
                  {pkg.duration}
                </div>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B76E79]/15 pb-5">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8F4954] font-bold block">
                    Signature Atelier Ceremony 0{idx + 1}
                  </span>
                  <h3 className="mt-1 font-display text-3xl sm:text-4xl font-light text-[#2A2124]">
                    {pkg.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl sm:text-4xl font-light text-[#8F4954]">
                    {pkg.price}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#7A6B6E] justify-end mt-1 font-medium">
                    <Clock className="size-3.5 text-[#B76E79]" />
                    <span className="text-xs uppercase tracking-[0.16em]">
                      {pkg.duration} unhurried
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-6 sm:leading-7 text-[#5E5054] font-normal">
                {pkg.summary}
              </p>

              {pkg.detailedDescription && (
                <div className="border-t border-[#B76E79]/15 pt-5 space-y-3">
                  <div className="font-semibold text-xs uppercase tracking-[0.16em] text-[#8F4954] flex items-center gap-2 select-none">
                    <Sparkles className="size-3.5 text-[#B76E79]" />
                    <span>The Ceremonial Journey</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-6 text-[#3A3033] font-normal">
                    {pkg.detailedDescription}
                  </p>

                  {pkg.procedureSteps && (
                    <div className="space-y-2 pt-2 bg-[#FAF5F3] p-5 rounded-xl border border-[#B76E79]/20">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#8F4954] block">
                        Itinerary &amp; Sequence of Care
                      </span>
                      <ol className="space-y-1.5 text-xs text-[#5E5054] list-decimal list-inside">
                        {pkg.procedureSteps.map((step) => (
                          <li key={step} className="font-normal">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}

              {pkg.includedItems && (
                <div className="bg-[#FAF5F3] p-5 rounded-xl border border-[#B76E79]/20 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8F4954]">
                    Included Ritual Components:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {pkg.includedItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs leading-5 text-[#5E5054] font-normal"
                      >
                        <CheckCircle2 className="size-3.5 text-[#B76E79] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <MagneticButton pullStrength={0.25} className="flex-1">
                  <Button
                    asChild
                    className="w-full h-12 rounded-full bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] text-white font-semibold text-xs uppercase tracking-[0.16em] hover:opacity-95 transition-all duration-300 shadow-md"
                  >
                    <a
                      href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(
                        `Reserve Spa Package: ${pkg.name}`
                      )}`}
                    >
                      Reserve Ceremony — {pkg.price}
                    </a>
                  </Button>
                </MagneticButton>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-[#B76E79]/40 bg-white text-xs uppercase tracking-[0.16em] text-[#8F4954] hover:bg-[#FAF0F0] hover:text-[#2A2124] transition-all duration-300 font-semibold"
                >
                  <a
                    href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(
                      `Gift Certificate Request: ${pkg.name}`
                    )}`}
                  >
                    <HeartHandshake className="size-3.5 mr-2 text-[#B76E79]" />
                    Gift This Package
                  </a>
                </Button>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </TreatmentSidebarLayout>
  );
}
