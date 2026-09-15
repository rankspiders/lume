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
        <div className="overflow-hidden border border-copper/30 shadow-lg relative group bg-[#131211]">
          <img
            src={price1Img}
            alt="Spa Packages Luxury Sanctuary Rituals"
            className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131211]/90 via-black/35 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <span className="eyebrow text-copper-light text-[10px]">
                <ShinyText text="Sanctuary Retreat" speed={3} />
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-light">
                Unhurried Multi-Hour Holistic Ceremonies
              </h3>
            </div>
          </div>
        </div>
      </TiltedCard>

      {/* Editorial Quote Box with SpotlightCard */}
      <SpotlightCard
        spotlightColor="rgba(181, 126, 82, 0.16)"
        className="bg-[#FAF7F2] p-6 sm:p-8 space-y-3"
      >
        <div className="flex items-center gap-2">
          <Gift className="size-4 text-copper" />
          <span className="eyebrow text-copper text-[10px]">The Lumé Milestone Experience</span>
        </div>
        <p className="font-serif text-lg sm:text-xl italic text-[#131211] leading-relaxed">
          "A sanctuary visit is never rushed. From herbal infusion welcome teas to warm botanical wraps and Celluma light, each hour is choreographed for absolute stillness."
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-copper/15">
          <span>Private Treatment Suite</span>
          <span>•</span>
          <span>Complimentary Organic Herbal Tea Service</span>
          <span>•</span>
          <span>Gift Certificates Available</span>
        </div>
      </SpotlightCard>

      {/* Spa Packages Listing with SpotlightCard */}
      <div className="space-y-10">
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
              spotlightColor="rgba(243, 197, 146, 0.2)"
              borderColor="rgba(243, 197, 146, 0.45)"
              className="bg-[#131211] p-6 sm:p-10 shadow-2xl transition-all duration-300 hover:border-copper border border-copper/30 space-y-6 text-[#FAF7F2]"
            >
              <div className="overflow-hidden border border-copper/20 relative group">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#131211]/90 backdrop-blur-md px-3.5 py-1.5 border border-copper/40 text-[#F3C592] text-xs tracking-[0.2em] uppercase font-bold">
                  {pkg.duration}
                </div>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-copper/20 pb-5">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#F3C592] font-bold block">
                    Signature Atelier Ceremony 0{idx + 1}
                  </span>
                  <h3 className="mt-1 font-display text-3xl sm:text-4xl font-medium text-[#FAF7F2]">
                    {pkg.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl sm:text-4xl font-medium text-[#F3C592]">
                    {pkg.price}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#F5D0A9] justify-end mt-1 font-medium">
                    <Clock className="size-3.5 text-[#F3C592]" />
                    <span className="text-xs uppercase tracking-[0.16em]">
                      {pkg.duration} unhurried
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-6 sm:leading-7 text-[#E7E2DB] font-normal">
                {pkg.summary}
              </p>

              {pkg.detailedDescription && (
                <div className="border-t border-copper/20 pt-5 space-y-3">
                  <div className="font-bold text-xs uppercase tracking-[0.16em] text-[#F3C592] flex items-center gap-2 select-none">
                    <Sparkles className="size-3.5 text-[#F3C592]" />
                    <span>The Ceremonial Journey</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-6 text-[#FAF7F2] font-normal">
                    {pkg.detailedDescription}
                  </p>

                  {pkg.procedureSteps && (
                    <div className="space-y-2 pt-2 bg-[#1A1715] p-5 border border-copper/25">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#F3C592] block">
                        Itinerary &amp; Sequence of Care
                      </span>
                      <ol className="space-y-1.5 text-xs text-[#E7E2DB] list-decimal list-inside">
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
                <div className="bg-[#1A1715] p-5 border border-copper/25 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F3C592]">
                    Included Ritual Components:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {pkg.includedItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs leading-5 text-[#E7E2DB] font-normal"
                      >
                        <CheckCircle2 className="size-3.5 text-[#F3C592] shrink-0" />
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
                    className="w-full h-12 rounded-none bg-copper text-[#0A0908] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-lg"
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
                  className="h-12 rounded-none border-copper/60 text-xs uppercase tracking-[0.16em] text-[#F3C592] font-bold hover:bg-copper hover:text-[#0A0908] transition-all duration-300"
                >
                  <a
                    href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(
                      `Gift Certificate Request: ${pkg.name}`
                    )}`}
                  >
                    <HeartHandshake className="size-3.5 mr-2 text-[#F3C592]" />
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
