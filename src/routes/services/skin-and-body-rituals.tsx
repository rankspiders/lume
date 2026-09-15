import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import aboutLumeImg from "@/assets/lumeproject/about-lume-2.png";
import { InteractiveRitualTimeline, type RitualStep } from "@/components/luxury-motion";
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

export const Route = createFileRoute("/services/skin-and-body-rituals")({
  head: () => ({
    meta: [
      { title: "Skin & Body Rituals | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Bespoke facial and body rituals featuring Aqua Luxe, Prima Glow 20% AHA, Radiance C, Lifting Code, Acne Purify, and Mocha Contour.",
      },
    ],
  }),
  component: SkinAndBodyPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: "easeInOut" },
  }),
};

const signatureAquaLuxeSteps: RitualStep[] = [
  {
    phase: "PHASE I",
    title: "Double Botanical Purification",
    duration: "10 min",
    description:
      "Gentle European milk cleansing infused with mallow and chamomile, followed by warm aromatic steam to liquefy sebaceous impurities.",
    formulation: "Bioline Daily Ritual Cleansing Milk & Gentle Toner",
    benefit: "Prepares stratum corneum without stripping essential lipid mantle.",
  },
  {
    phase: "PHASE II",
    title: "Enzymatic Micro-Exfoliation & Ultrasound",
    duration: "15 min",
    description:
      "Papaya enzyme peel activated with 28kHz ultrasonic cavitation to lift oxidized dead keratinocytes and deeply decongest pores.",
    formulation: "Bioline Exfo-Peel Papain Enzyme Gel",
    benefit: "Restores optical skin clarity and cellular absorption readiness.",
  },
  {
    phase: "PHASE III",
    title: "Italian Nectar Deep Hydration Infusion",
    duration: "20 min",
    description:
      "Triple molecular-weight hyaluronic acid and patented marine algae concentrates pressurized into deep dermal tissue with oxygen dome.",
    formulation: "Bioline Aqua+ Hydra Infusion Concentrate & Caviar Nectar",
    benefit: "Delivers 400% cellular moisture surge and bio-architectural smoothing.",
  },
  {
    phase: "PHASE IV",
    title: "Cryo-Sculpting & Barrier Shielding",
    duration: "15 min",
    description:
      "Sub-zero therapeutic cryo-globes stimulate microcirculation, reduce inflammation, and seal botanical active serums under a nourishing lipid barrier.",
    formulation: "Bioline Bio-Protective Ceramide Cream & Botanical SPF 50",
    benefit: "Immediate glass-skin radiance, tightened pore architecture, and lingering calmness.",
  },
];

function SkinAndBodyPage() {
  const group = treatmentGroups[0];

  return (
    <TreatmentSidebarLayout
      eyebrow="Category 01 — Skin & Body Rituals"
      title={
        <>
          Restorative skin &amp;
          <br />
          <em>body therapy.</em>
        </>
      }
      description="Unhurried, considered treatments shaped around the condition of your skin and the way you want to feel. Powered by Bioline professional formulations and advanced dermal techniques."
      activeCategoryHref="/services/skin-and-body-rituals"
    >
      {/* Visual Header Feature Banner with TiltedCard */}
      <TiltedCard rotateAmplitude={5}>
        <div className="overflow-hidden border border-copper/30 shadow-lg relative group bg-[#131211]">
          <img
            src={aboutLumeImg}
            alt="Facial & Body Rituals"
            className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-background">
              <span className="eyebrow text-copper-light text-[10px]">
                <ShinyText text="Bioline Professional Skincare" speed={4} />
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-light">
                Tailored to your individual skin barrier
              </h3>
            </div>
          </div>
        </div>
      </TiltedCard>

      {/* Interactive Clinical Ritual Timeline Scrubber */}
      <InteractiveRitualTimeline
        treatmentTitle="Aqua Luxe & Bioline Jatò"
        steps={signatureAquaLuxeSteps}
      />

      {/* Clinical Highlights Strip with SpotlightCard */}
      <div className="grid gap-4 sm:grid-cols-3 border-y border-copper/20 py-6">
        <div className="flex items-center gap-2.5 text-xs text-foreground">
          <ShieldCheck className="size-4 text-copper shrink-0" />
          <span>20% AHA &amp; Vitamin C Actives</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs text-foreground">
          <ShieldCheck className="size-4 text-copper shrink-0" />
          <span>Bioline Jatò Coffee Body Sculpt</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs text-foreground">
          <ShieldCheck className="size-4 text-copper shrink-0" />
          <span>Negative-Ion Oxygen Dome</span>
        </div>
      </div>

      {/* Treatments List with SpotlightCard */}
      <div className="space-y-6">
        <div className="flex justify-between items-baseline border-b border-copper/15 pb-3">
          <h3 className="font-display text-2xl font-light text-foreground">Curated Facial &amp; Body Menu</h3>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {group?.treatments.length} Rituals
          </span>
        </div>

        <div className="grid gap-8">
          {group?.treatments.map((t, idx) => (
            <motion.div
              key={t.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <SpotlightCard
                spotlightColor="rgba(243, 197, 146, 0.2)"
                borderColor="rgba(243, 197, 146, 0.4)"
                className="bg-[#131211] p-6 shadow-xl transition-all duration-300 hover:border-copper border border-copper/30 grid gap-6 sm:grid-cols-12 items-start"
              >
                <div className="sm:col-span-4 overflow-hidden border border-copper/20">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="sm:col-span-8 flex flex-col justify-between h-full space-y-3">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-display text-2xl font-medium text-[#FAF7F2]">{t.name}</h4>
                      <span className="font-display text-2xl font-medium text-[#F3C592]">{t.price}</span>
                    </div>
                    {t.duration && (
                      <p className="text-xs uppercase tracking-wider text-[#F5D0A9] font-medium mt-0.5">
                        Duration: {t.duration}
                      </p>
                    )}
                    <p className="mt-2 text-sm leading-6 text-[#E7E2DB] font-normal">{t.summary}</p>
                  </div>

                  {/* Permanent Full Description & Procedure Breakdown */}
                  {t.detailedDescription && (
                    <div className="border-t border-copper/20 pt-3 mt-2 text-xs">
                      <div className="font-bold text-xs uppercase tracking-[0.16em] text-[#F3C592] flex items-center gap-2 py-1 select-none">
                        <Sparkles className="size-3.5 text-[#F3C592]" />
                        <span>Full Procedure &amp; Treatment Breakdown</span>
                      </div>
                      <div className="mt-2 space-y-3 pt-2 text-xs sm:text-sm text-[#FAF7F2] leading-6 border-t border-copper/15 font-normal">
                        <p>{t.detailedDescription}</p>

                        {t.keyBenefits && (
                          <div className="space-y-1.5 pt-1">
                            <span className="text-xs uppercase tracking-wider font-bold text-[#F3C592] block">
                              Key Benefits
                            </span>
                            <ul className="grid grid-cols-1 gap-1 text-xs text-[#E7E2DB] list-disc list-inside">
                              {t.keyBenefits.map((b) => (
                                <li key={b}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {t.procedureSteps && (
                          <div className="space-y-1.5 pt-1">
                            <span className="text-xs uppercase tracking-wider font-bold text-[#F3C592] block">
                              Step-by-Step Procedure
                            </span>
                            <ol className="space-y-1 text-xs text-[#E7E2DB] list-decimal list-inside">
                              {t.procedureSteps.map((step) => (
                                <li key={step}>{step}</li>
                              ))}
                            </ol>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between">
                    <MagneticButton pullStrength={0.2}>
                      <Button
                        asChild
                        variant="outline"
                        className="h-10 rounded-none border-copper/60 bg-transparent px-5 text-xs uppercase tracking-[0.16em] text-[#F3C592] font-bold hover:bg-copper hover:text-[#0A0908] transition-all duration-300 shadow-md"
                      >
                        <a
                          href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(
                            `Enquiry about ${t.name}`
                          )}`}
                        >
                          Enquire Service ({t.price})
                        </a>
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Secondary Feature Card with SpotlightCard */}
      <SpotlightCard
        spotlightColor="rgba(181, 126, 82, 0.18)"
        className="grid gap-6 sm:grid-cols-12 bg-secondary/30 p-6 sm:p-8 items-center"
      >
        <div className="sm:col-span-5 overflow-hidden border border-copper/20">
          <img src={bodyImage} alt="Body Ritual Sculpting" className="w-full h-48 object-cover" />
        </div>
        <div className="sm:col-span-7 space-y-3">
          <span className="eyebrow text-copper text-[10px]">Body Work Speciality</span>
          <h4 className="font-display text-2xl font-light text-foreground">
            Jatò Coffee Shape &amp; Retinol Lift
          </h4>
          <p className="text-xs leading-6 text-muted-foreground">
            Combine rhythmic Gua Sha bodywork with specialized collagen-boosting retinol wraps to sculpt, drain, and firm.
          </p>
        </div>
      </SpotlightCard>
    </TreatmentSidebarLayout>
  );
}
