import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Stethoscope, Sparkles } from "lucide-react";

import { TreatmentSidebarLayout } from "@/components/treatment-sidebar-layout";
import { Button } from "@/components/ui/button";
import { STITCH_ASSETS } from "@/lib/stitch-assets";
import { treatmentGroups } from "@/lib/treatments";

export const Route = createFileRoute("/services/advanced-aesthetics")({
  head: () => ({
    meta: [
      { title: "Advanced Aesthetics | Lumé Aesthetics" },
      {
        name: "description",
        content: "Consultation-led clinical aesthetics including Lumé Botox® ($10/unit), Dermal Fillers, PRP & Exosome microneedling, teeth whitening, and IV therapies.",
      },
    ],
  }),
  component: AdvancedAestheticsPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: "easeInOut" },
  }),
};

const clinicalImages = [
  STITCH_ASSETS.advancedTherapy,
  STITCH_ASSETS.team1,
  STITCH_ASSETS.team2,
  STITCH_ASSETS.team3,
  STITCH_ASSETS.aboutPrice,
  STITCH_ASSETS.blog3,
];

function AdvancedAestheticsPage() {
  const group = treatmentGroups[2];

  return (
    <TreatmentSidebarLayout
      eyebrow="Category 04 — Advanced Aesthetics"
      title={
        <>
          Where science
          <br />
          <em>meets beauty.</em>
        </>
      }
      description="Personalized clinical services beginning with an in-depth consultation, individual facial assessment, and natural-looking targeted treatments."
      activeCategoryHref="/services/advanced-aesthetics"
    >
      {/* Visual Header Banner */}
      <div className="overflow-hidden border border-copper/30 shadow-lg relative">
        <img src={STITCH_ASSETS.advancedTherapy} alt="Advanced Aesthetics" className="w-full h-[300px] sm:h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent flex items-end p-6 sm:p-8">
          <div className="text-background">
            <span className="eyebrow text-copper-light text-[10px]">Clinical Standards</span>
            <h3 className="font-display text-2xl sm:text-3xl font-light">Consultation-led medical aesthetics & injectables</h3>
          </div>
        </div>
      </div>

      {/* Clinical Integrity Card */}
      <div className="border border-copper/25 bg-foreground text-background p-6 sm:p-8 space-y-4">
        <span className="eyebrow text-copper-light text-[10px]">Safety & Authenticity</span>
        <h4 className="font-display text-2xl font-light text-background">Refined clinical care & consultation</h4>
        <p className="text-xs leading-6 text-background/75">
          Every injectable, microneedling session, and IV therapy is performed by licensed clinical practitioners adhering strictly to Health Canada approved protocols.
        </p>
        <div className="pt-2 border-t border-background/15 flex flex-wrap gap-6 text-xs text-background/90">
          <div className="flex items-center gap-2">
            <Stethoscope className="size-4 text-copper-light" />
            <span>Licensed Medical Practitioners</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-copper-light" />
            <span>Health Canada Approved Products</span>
          </div>
        </div>
      </div>

      {/* Treatments List with Visual Cards */}
      <div className="space-y-6">
        <div className="flex justify-between items-baseline border-b border-copper/15 pb-3">
          <h3 className="font-display text-2xl font-light text-foreground">Clinical Aesthetics Menu</h3>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{group?.treatments.length} Clinicals</span>
        </div>

        <div className="grid gap-6">
          {group?.treatments.map((t, idx) => (
            <motion.article
              key={t.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="group border border-copper/20 bg-background p-6 shadow-sm transition-all duration-300 hover:border-copper grid gap-6 sm:grid-cols-12 items-center"
            >
              <div className="sm:col-span-4 overflow-hidden border border-copper/15">
                <img
                  src={clinicalImages[idx % clinicalImages.length]}
                  alt={t.name}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="sm:col-span-8 flex flex-col justify-between h-full space-y-3">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-2xl font-light text-foreground">{t.name}</h4>
                    <span className="font-display text-xl font-light text-copper">{t.price}</span>
                  </div>
                  {t.duration && (
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Duration: {t.duration}</p>
                  )}
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">{t.summary}</p>
                </div>

                {t.detailedDescription && (
                  <div className="border-t border-copper/15 pt-3 mt-2 text-xs text-muted-foreground space-y-2">
                    <div className="font-medium text-[10px] uppercase tracking-[0.16em] text-copper flex items-center gap-1.5 select-none">
                      <Sparkles className="size-3.5 text-copper" />
                      <span>Full Procedure & Treatment Breakdown</span>
                    </div>
                    <p className="text-xs leading-5 text-foreground/90">{t.detailedDescription}</p>

                    {t.keyBenefits && (
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-copper block">Key Clinical Benefits</span>
                        <ul className="grid grid-cols-1 gap-1 text-[11px] text-muted-foreground list-disc list-inside">
                          {t.keyBenefits.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {t.procedureSteps && (
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-copper block">Clinical Procedure Steps</span>
                        <ol className="space-y-1 text-[11px] text-muted-foreground list-decimal list-inside">
                          {t.procedureSteps.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <Button
                    asChild
                    variant="outline"
                    className="h-9 rounded-none border-copper bg-transparent px-5 text-[9px] uppercase tracking-[0.16em] text-copper hover:bg-copper hover:text-primary-foreground transition-all duration-300"
                  >
                    <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Clinical Enquiry: ${t.name}`)}`}>
                      Clinical Enquiry ({t.price})
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </TreatmentSidebarLayout>
  );
}
