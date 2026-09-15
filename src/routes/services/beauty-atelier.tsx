import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

import plump3 from "@/assets/competitors/plump-3.png";
import { TreatmentSidebarLayout } from "@/components/treatment-sidebar-layout";
import { Button } from "@/components/ui/button";
import {
  SpotlightCard,
  ShinyText,
  MagneticButton,
  TiltedCard,
  DecryptedText,
} from "@/components/reactbits";
import { treatmentGroups } from "@/lib/treatments";

export const Route = createFileRoute("/services/beauty-atelier")({
  head: () => ({
    meta: [
      { title: "Beauty Atelier & Artistry | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Polished beauty artistry including custom makeup (The Glam Chapter), gel nails, lash couture lift & tint, silk waxing, precision threading, and bespoke henna.",
      },
    ],
  }),
  component: BeautyAtelierPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

function BeautyAtelierPage() {
  const group = treatmentGroups[1];

  return (
    <TreatmentSidebarLayout
      eyebrow="Collection III — Beauty Atelier"
      title={
        <>
          Where beauty
          <br />
          <em>becomes an art.</em>
        </>
      }
      description="Quietly polished beauty services, each tailored to your features, bone structure, and occasion. From bespoke event makeup to structured gel nail artistry, lash couture lifts, and silk body waxing."
      activeCategoryHref="/services/beauty-atelier"
    >
      {/* Visual Header Banner with TiltedCard */}
      <TiltedCard rotateAmplitude={5}>
        <div className="overflow-hidden rounded-2xl border border-[#B76E79]/25 shadow-soft-card relative group bg-white p-2">
          <div className="overflow-hidden rounded-xl relative">
            <img
              src={plump3}
              alt="Beauty Atelier Artistry"
              className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white">
                <span className="eyebrow text-[#E7B2A9] text-[10px] tracking-[0.2em] font-semibold">
                  <ShinyText text="Artistry &amp; Anatomical Precision" speed={3} />
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-light">
                  Custom Makeup, Lash Couture &amp; Statement Gel Nails
                </h3>
              </div>
            </div>
          </div>
        </div>
      </TiltedCard>

      {/* Grid of Beauty Services with Pure White Furniture Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {group?.treatments.map((treatment, idx) => (
          <motion.div
            key={treatment.name}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <SpotlightCard
              spotlightColor="rgba(183, 110, 121, 0.12)"
              borderColor="rgba(183, 110, 121, 0.22)"
              className="group flex flex-col justify-between rounded-2xl border border-[#B76E79]/20 bg-white p-6 shadow-soft-card transition-all duration-300 hover:border-[#B76E79]/50 hover:shadow-lg h-full text-[#2A2124]"
            >
              <div>
                <div className="overflow-hidden mb-5 rounded-xl border border-[#B76E79]/20 -mx-1 -mt-1 shadow-xs">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-baseline gap-2 border-b border-[#B76E79]/15 pb-2">
                  <h4 className="font-display text-2xl font-light text-[#2A2124]">
                    {treatment.name}
                  </h4>
                  <span className="font-display text-2xl font-light text-[#8F4954]">
                    {treatment.price}
                  </span>
                </div>
                {treatment.duration && (
                  <p className="text-xs text-[#7A6B6E] font-medium uppercase tracking-wider mt-1">
                    Duration: {treatment.duration}
                  </p>
                )}
                <p className="mt-3 text-sm leading-6 text-[#5E5054] font-normal">
                  {treatment.summary}
                </p>

                {treatment.detailedDescription && (
                  <div className="border-t border-[#B76E79]/15 pt-3 mt-3 text-xs space-y-2">
                    <div className="font-semibold text-xs uppercase tracking-[0.16em] text-[#8F4954] flex items-center gap-1.5 select-none">
                      <Sparkles className="size-3.5 text-[#B76E79]" />
                      <span>Artistry Protocol Breakdown</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-5 text-[#3A3033] font-normal">
                      {treatment.detailedDescription}
                    </p>

                    {treatment.keyBenefits && (
                      <div className="space-y-1 pt-1">
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#8F4954] block">
                          Key Highlights
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#5E5054]">
                          {treatment.keyBenefits.map((b) => (
                            <li key={b} className="flex items-center gap-1.5">
                              <CheckCircle2 className="size-3.5 text-[#B76E79] shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <MagneticButton pullStrength={0.2} className="w-full mt-6">
                <Button
                  asChild
                  className="h-11 w-full rounded-full bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] text-white text-xs uppercase tracking-[0.16em] font-semibold hover:opacity-95 transition-all duration-300 shadow-md"
                >
                  <a
                    href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(
                      `Enquiry for ${treatment.name}`
                    )}`}
                  >
                    Book {treatment.name}
                  </a>
                </Button>
              </MagneticButton>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </TreatmentSidebarLayout>
  );
}
