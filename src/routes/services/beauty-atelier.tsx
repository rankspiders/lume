import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

import { TreatmentSidebarLayout } from "@/components/treatment-sidebar-layout";
import { Button } from "@/components/ui/button";
import { STITCH_ASSETS } from "@/lib/stitch-assets";
import { treatmentGroups } from "@/lib/treatments";

export const Route = createFileRoute("/services/beauty-atelier")({
  head: () => ({
    meta: [
      { title: "Beauty Atelier | Lumé Aesthetics" },
      {
        name: "description",
        content: "Polished beauty artistry including custom makeup (The Glam Chapter), gel nails, lash couture lift & tint, silk waxing, precision threading, and bespoke henna.",
      },
    ],
  }),
  component: BeautyAtelierPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: "easeInOut" },
  }),
};

const beautyImages = [
  STITCH_ASSETS.heroModel,
  STITCH_ASSETS.product1,
  STITCH_ASSETS.product2,
  STITCH_ASSETS.product3,
  STITCH_ASSETS.product4,
  STITCH_ASSETS.product5,
];

function BeautyAtelierPage() {
  const group = treatmentGroups[1];

  return (
    <TreatmentSidebarLayout
      eyebrow="Category 03 — Beauty Atelier"
      title={
        <>
          Where beauty
          <br />
          <em>becomes an art.</em>
        </>
      }
      description="Quietly polished beauty services, each tailored to your features, style, and occasion. From bespoke event makeup to lash lifts and silk body waxing."
      activeCategoryHref="/services/beauty-atelier"
    >
      {/* Visual Header Banner */}
      <div className="overflow-hidden border border-copper/30 shadow-lg relative">
        <img src={STITCH_ASSETS.heroModel} alt="Beauty Atelier" className="w-full h-[300px] sm:h-[400px] object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent flex items-end p-6 sm:p-8">
          <div className="text-background">
            <span className="eyebrow text-copper-light text-[10px]">Artistry & Precision</span>
            <h3 className="font-display text-2xl sm:text-3xl font-light">Custom makeup, lash couture & nail atelier</h3>
          </div>
        </div>
      </div>

      {/* Grid of Beauty Services */}
      <div className="grid gap-6 sm:grid-cols-2">
        {group?.treatments.map((treatment, idx) => (
          <motion.article
            key={treatment.name}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="group flex flex-col justify-between border border-copper/25 bg-background p-6 shadow-sm transition-all duration-300 hover:border-copper"
          >
            <div>
              <div className="overflow-hidden mb-4 border-b border-copper/15 -mx-6 -mt-6">
                <img
                  src={beautyImages[idx % beautyImages.length]}
                  alt={treatment.name}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="font-display text-xl font-light text-foreground">{treatment.name}</h4>
              <p className="mt-1 text-xs font-semibold text-copper uppercase tracking-wider">{treatment.price}</p>
              {treatment.duration && (
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">Duration: {treatment.duration}</p>
              )}
              <p className="mt-3 text-xs leading-6 text-muted-foreground">{treatment.summary}</p>

              {treatment.detailedDescription && (
                <div className="border-t border-copper/15 pt-3 mt-3 text-xs text-muted-foreground space-y-2">
                  <div className="font-medium text-[10px] uppercase tracking-[0.16em] text-copper flex items-center gap-1.5 select-none">
                    <Sparkles className="size-3 text-copper" />
                    <span>Procedure Breakdown</span>
                  </div>
                  <p className="text-xs leading-5 text-foreground/90">{treatment.detailedDescription}</p>

                  {treatment.keyBenefits && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-copper block">Key Highlights</span>
                      <ul className="grid grid-cols-1 gap-1 text-[11px] text-muted-foreground list-disc list-inside">
                        {treatment.keyBenefits.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {treatment.procedureSteps && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-copper block">Steps</span>
                      <ol className="space-y-1 text-[11px] text-muted-foreground list-decimal list-inside">
                        {treatment.procedureSteps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-6 h-9 w-full rounded-none border-copper/40 text-[9px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-primary-foreground"
            >
              <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Enquiry about ${treatment.name}`)}`}>
                Book Service
              </a>
            </Button>
          </motion.article>
        ))}
      </div>
    </TreatmentSidebarLayout>
  );
}
