import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Stethoscope, Sparkles, CheckCircle2 } from "lucide-react";

import rejuva2 from "@/assets/competitors/rejuva-2.jpg";
import rejuva4 from "@/assets/competitors/rejuva-4.png";
import rejuva5 from "@/assets/competitors/rejuva-5.jpg";
import { BeforeAfterInteractive } from "@/components/luxury-motion";
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

export const Route = createFileRoute("/services/advanced-aesthetics")({
  head: () => ({
    meta: [
      { title: "Advanced Clinical Aesthetics | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Consultation-led clinical aesthetics in Edmonton & Sherwood Park including Lumé Botox® ($10/unit), Dermal Fillers, PRP & Exosome microneedling, teeth whitening, and IV wellness infusions.",
      },
    ],
  }),
  component: AdvancedAestheticsPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

function AdvancedAestheticsPage() {
  const group = treatmentGroups[2];

  return (
    <TreatmentSidebarLayout
      eyebrow="Collection IV — Advanced Aesthetics"
      title={
        <>
          Where science
          <br />
          <em>meets beauty.</em>
        </>
      }
      description="Personalized clinical medical services beginning with a comprehensive in-depth facial anatomy assessment, medical health screening, and natural-looking targeted enhancements."
      activeCategoryHref="/services/advanced-aesthetics"
    >
      {/* Visual Header Banner with TiltedCard */}
      <TiltedCard rotateAmplitude={5}>
        <div className="overflow-hidden rounded-2xl border border-[#B76E79]/25 shadow-soft-card relative group bg-white p-2">
          <div className="overflow-hidden rounded-xl relative">
            <img
              src={rejuva2}
              alt="Advanced Clinical Aesthetics"
              className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white">
                <span className="eyebrow text-[#E7B2A9] text-[10px] tracking-[0.2em] font-semibold">
                  <ShinyText text="Medical Precision &amp; Safety Standards" speed={3} />
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-light">
                  Consultation-Led Injectables, PRP &amp; Exosome Therapies
                </h3>
              </div>
            </div>
          </div>
        </div>
      </TiltedCard>

      {/* Interactive Clinical Before/After Slider */}
      <BeforeAfterInteractive
        beforeImage={rejuva4}
        afterImage={rejuva5}
        title="Cellular Collagen Regeneration & Skin Architecture"
        subtitle="Autologous Platelet-Rich Plasma (PRP) Centrifugation Protocol"
      />

      {/* Clinical Integrity Card with SpotlightCard - Pure White Furniture Card */}
      <SpotlightCard
        spotlightColor="rgba(183, 110, 121, 0.12)"
        borderColor="rgba(183, 110, 121, 0.22)"
        className="bg-white rounded-2xl border border-[#B76E79]/20 text-[#2A2124] p-6 sm:p-8 space-y-4 shadow-soft-card"
      >
        <div className="flex items-center gap-2">
          <span className="h-px w-6 bg-[#B76E79]" />
          <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">
            <DecryptedText text="Safety &amp; Authenticity Protocols" />
          </span>
        </div>
        <h4 className="font-display text-2xl font-light text-[#2A2124]">
          Refined clinical care &amp; anatomy mapping
        </h4>
        <p className="text-xs leading-6 text-[#5E5054] font-normal">
          Every neuromodulator injection, dermal filler contour, PRP centrifugation, and exosome infusion is administered strictly by licensed, certified clinical practitioners adhering to Health Canada approved safety protocols.
        </p>
        <div className="pt-3 border-t border-[#B76E79]/15 flex flex-wrap gap-6 text-xs text-[#2A2124]">
          <div className="flex items-center gap-2">
            <Stethoscope className="size-4 text-[#B76E79]" />
            <span className="font-medium text-[#2A2124]">Licensed Medical Injectors</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-[#B76E79]" />
            <span className="font-medium text-[#2A2124]">Health Canada Approved Formulations</span>
          </div>
        </div>
      </SpotlightCard>

      {/* Treatments List with Pure White Furniture Cards */}
      <div className="space-y-6">
        <div className="flex justify-between items-baseline border-b border-[#B76E79]/20 pb-3">
          <h3 className="font-display text-2xl font-light text-[#2A2124]">Clinical Aesthetic Formulations</h3>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A6B6E]">
            {group?.treatments.length} Procedures
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
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
                spotlightColor="rgba(183, 110, 121, 0.12)"
                borderColor="rgba(183, 110, 121, 0.22)"
                className="group flex flex-col justify-between rounded-2xl border border-[#B76E79]/20 bg-white p-6 shadow-soft-card transition-all duration-300 hover:border-[#B76E79]/50 hover:shadow-lg h-full text-[#2A2124]"
              >
                <div>
                  <div className="overflow-hidden mb-5 rounded-xl border border-[#B76E79]/20 -mx-1 -mt-1 shadow-xs">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-baseline gap-2 border-b border-[#B76E79]/15 pb-2">
                    <h4 className="font-display text-2xl font-light text-[#2A2124]">{t.name}</h4>
                    <span className="font-display text-2xl font-light text-[#8F4954]">{t.price}</span>
                  </div>
                  {t.duration && (
                    <p className="text-xs text-[#7A6B6E] font-medium uppercase tracking-wider mt-1">
                      Duration: {t.duration}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-6 text-[#5E5054] font-normal">{t.summary}</p>

                  {t.detailedDescription && (
                    <div className="border-t border-[#B76E79]/15 pt-3 mt-3 text-xs space-y-2">
                      <div className="font-semibold text-xs uppercase tracking-[0.16em] text-[#8F4954] flex items-center gap-1.5 select-none">
                        <Sparkles className="size-3.5 text-[#B76E79]" />
                        <span>Clinical Protocol &amp; Methodology</span>
                      </div>
                      <p className="text-xs sm:text-sm leading-5 text-[#3A3033] font-normal">{t.detailedDescription}</p>

                      {t.keyBenefits && (
                        <div className="space-y-1 pt-1">
                          <span className="text-xs uppercase tracking-wider font-semibold text-[#8F4954] block">
                            Key Clinical Benefits
                          </span>
                          <ul className="space-y-1.5 text-xs text-[#5E5054]">
                            {t.keyBenefits.map((b) => (
                              <li key={b} className="flex items-center gap-1.5">
                                <CheckCircle2 className="size-3.5 text-[#B76E79] shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {t.procedureSteps && (
                        <div className="space-y-1.5 pt-2 border-t border-[#B76E79]/10">
                          <span className="text-xs uppercase tracking-wider font-semibold text-[#8F4954] block">
                            Procedure Steps
                          </span>
                          <ol className="space-y-1 text-xs text-[#5E5054] list-decimal list-inside">
                            {t.procedureSteps.map((step) => (
                              <li key={step} className="font-normal">
                                {step}
                              </li>
                            ))}
                          </ol>
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
                        `Clinical Consultation: ${t.name}`
                      )}`}
                    >
                      Book Consultation ({t.price})
                    </a>
                  </Button>
                </MagneticButton>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </TreatmentSidebarLayout>
  );
}
