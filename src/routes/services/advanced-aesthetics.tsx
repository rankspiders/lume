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
        <div className="overflow-hidden border border-copper/30 shadow-lg relative group bg-[#131211]">
          <img
            src={rejuva2}
            alt="Advanced Clinical Aesthetics"
            className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131211]/90 via-black/35 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <span className="eyebrow text-copper-light text-[10px]">
                <ShinyText text="Medical Precision & Safety Standards" speed={3} />
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-light">
                Consultation-Led Injectables, PRP &amp; Exosome Therapies
              </h3>
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

      {/* Clinical Integrity Card with SpotlightCard */}
      <SpotlightCard
        spotlightColor="rgba(223, 194, 157, 0.18)"
        borderColor="rgba(181, 126, 82, 0.5)"
        className="bg-[#131211] text-white p-6 sm:p-8 space-y-4 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <span className="h-px w-6 bg-copper" />
          <span className="eyebrow text-copper-light text-[10px]">
            <DecryptedText text="Safety & Authenticity Protocols" />
          </span>
        </div>
        <h4 className="font-display text-2xl font-light text-white">
          Refined clinical care &amp; anatomy mapping
        </h4>
        <p className="text-xs leading-6 text-white/75 font-light">
          Every neuromodulator injection, dermal filler contour, PRP centrifugation, and exosome infusion is administered strictly by licensed, certified clinical practitioners adhering to Health Canada approved safety protocols.
        </p>
        <div className="pt-3 border-t border-white/10 flex flex-wrap gap-6 text-xs text-white/90">
          <div className="flex items-center gap-2">
            <Stethoscope className="size-4 text-copper" />
            <span className="tracking-wide">Licensed Medical Injectors</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-copper" />
            <span className="tracking-wide">Health Canada Approved Formulations</span>
          </div>
        </div>
      </SpotlightCard>

      {/* Treatments List with SpotlightCard */}
      <div className="space-y-6">
        <div className="flex justify-between items-baseline border-b border-copper/15 pb-3">
          <h3 className="font-display text-2xl font-light text-foreground">Clinical Aesthetic Formulations</h3>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
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
                spotlightColor="rgba(243, 197, 146, 0.2)"
                borderColor="rgba(243, 197, 146, 0.4)"
                className="group flex flex-col justify-between border border-copper/30 bg-[#131211] p-6 shadow-xl transition-all duration-300 hover:border-copper h-full"
              >
                <div>
                  <div className="overflow-hidden mb-5 border-b border-copper/20 -mx-6 -mt-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-baseline gap-2 border-b border-copper/20 pb-2">
                    <h4 className="font-display text-2xl font-medium text-[#FAF7F2]">{t.name}</h4>
                    <span className="font-display text-2xl font-medium text-[#F3C592]">{t.price}</span>
                  </div>
                  {t.duration && (
                    <p className="text-xs text-[#F5D0A9] font-medium uppercase tracking-widest mt-1">
                      Duration: {t.duration}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-6 text-[#E7E2DB] font-normal">{t.summary}</p>

                  {t.detailedDescription && (
                    <div className="border-t border-copper/20 pt-3 mt-3 text-xs space-y-2">
                      <div className="font-bold text-xs uppercase tracking-[0.16em] text-[#F3C592] flex items-center gap-1.5 select-none">
                        <Sparkles className="size-3.5 text-[#F3C592]" />
                        <span>Clinical Protocol &amp; Methodology</span>
                      </div>
                      <p className="text-xs sm:text-sm leading-5 text-[#FAF7F2] font-normal">{t.detailedDescription}</p>

                      {t.keyBenefits && (
                        <div className="space-y-1 pt-1">
                          <span className="text-xs uppercase tracking-wider font-bold text-[#F3C592] block">
                            Key Clinical Benefits
                          </span>
                          <ul className="space-y-1 text-xs text-[#E7E2DB]">
                            {t.keyBenefits.map((b) => (
                              <li key={b} className="flex items-center gap-1.5">
                                <CheckCircle2 className="size-3.5 text-[#F3C592] shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {t.procedureSteps && (
                        <div className="space-y-1 pt-2 border-t border-copper/15">
                          <span className="text-xs uppercase tracking-wider font-bold text-[#F3C592] block">
                            Procedure Steps
                          </span>
                          <ol className="space-y-1 text-xs text-[#E7E2DB] list-decimal list-inside">
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
                    variant="outline"
                    className="h-10 w-full rounded-none border-copper/40 text-[9px] uppercase tracking-[0.16em] text-copper hover:bg-copper hover:text-primary-foreground transition-all duration-300"
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
