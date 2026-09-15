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
        <div className="overflow-hidden border border-copper/30 shadow-lg relative group bg-[#131211]">
          <img
            src={plump3}
            alt="Beauty Atelier Artistry"
            className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131211]/90 via-black/30 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <span className="eyebrow text-copper-light text-[10px]">
                <ShinyText text="Artistry & Anatomical Precision" speed={3} />
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-light">
                Custom Makeup, Lash Couture &amp; Statement Gel Nails
              </h3>
            </div>
          </div>
        </div>
      </TiltedCard>

      {/* Grid of Beauty Services with SpotlightCard */}
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
              spotlightColor="rgba(243, 197, 146, 0.2)"
              borderColor="rgba(243, 197, 146, 0.4)"
              className="group flex flex-col justify-between border border-copper/30 bg-[#131211] p-6 shadow-xl transition-all duration-300 hover:border-copper h-full"
            >
              <div>
                <div className="overflow-hidden mb-5 border-b border-copper/20 -mx-6 -mt-6">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-baseline gap-2 border-b border-copper/20 pb-2">
                  <h4 className="font-display text-2xl font-medium text-[#FAF7F2]">
                    {treatment.name}
                  </h4>
                  <span className="font-display text-2xl font-medium text-[#F3C592]">
                    {treatment.price}
                  </span>
                </div>
                {treatment.duration && (
                  <p className="text-xs text-[#F5D0A9] font-medium uppercase tracking-widest mt-1">
                    Duration: {treatment.duration}
                  </p>
                )}
                <p className="mt-3 text-sm leading-6 text-[#E7E2DB] font-normal">
                  {treatment.summary}
                </p>

                {treatment.detailedDescription && (
                  <div className="border-t border-copper/20 pt-3 mt-3 text-xs space-y-2">
                    <div className="font-bold text-xs uppercase tracking-[0.16em] text-[#F3C592] flex items-center gap-1.5 select-none">
                      <Sparkles className="size-3.5 text-[#F3C592]" />
                      <span>Artistry Protocol Breakdown</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-5 text-[#FAF7F2] font-normal">
                      {treatment.detailedDescription}
                    </p>

                    {treatment.keyBenefits && (
                      <div className="space-y-1 pt-1">
                        <span className="text-xs uppercase tracking-wider font-bold text-[#F3C592] block">
                          Key Highlights
                        </span>
                        <ul className="space-y-1 text-xs text-[#E7E2DB]">
                          {treatment.keyBenefits.map((b) => (
                            <li key={b} className="flex items-center gap-1.5">
                              <CheckCircle2 className="size-3.5 text-[#F3C592] shrink-0" />
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
                  variant="outline"
                  className="h-11 w-full rounded-none border-copper/60 text-xs uppercase tracking-[0.16em] text-[#F3C592] font-bold hover:bg-copper hover:text-[#0A0908] transition-all duration-300"
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
