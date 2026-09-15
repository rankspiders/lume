import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

import plump3 from "@/assets/competitors/plump-3.png";
import { TreatmentSidebarLayout } from "@/components/treatment-sidebar-layout";
import { Button } from "@/components/ui/button";
import { treatmentGroups } from "@/lib/treatments";

export const Route = createFileRoute("/services/beauty-atelier")({
  head: () => ({
    meta: [
      { title: "Beauty Atelier & Artistry | Lumé Aesthetics" },
      {
        name: "description",
        content: "Polished beauty artistry including custom makeup (The Glam Chapter), gel nails, lash couture lift & tint, silk waxing, precision threading, and bespoke henna.",
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
      {/* Visual Header Banner */}
      <div className="overflow-hidden border border-copper/30 shadow-lg relative group">
        <img src={plump3} alt="Beauty Atelier Artistry" className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131211]/90 via-black/30 to-transparent flex items-end p-6 sm:p-8">
          <div className="text-white">
            <span className="eyebrow text-copper-light text-[10px]">Artistry & Anatomical Precision</span>
            <h3 className="font-display text-2xl sm:text-3xl font-light">Custom Makeup, Lash Couture & Statement Gel Nails</h3>
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
              <div className="overflow-hidden mb-5 border-b border-copper/15 -mx-6 -mt-6">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline gap-2 border-b border-copper/15 pb-2">
                <h4 className="font-display text-2xl font-light text-foreground">{treatment.name}</h4>
                <span className="font-display text-xl font-light text-copper">{treatment.price}</span>
              </div>
              {treatment.duration && (
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Duration: {treatment.duration}</p>
              )}
              <p className="mt-3 text-xs leading-6 text-muted-foreground font-light">{treatment.summary}</p>

              {treatment.detailedDescription && (
                <div className="border-t border-copper/15 pt-3 mt-3 text-xs text-muted-foreground space-y-2">
                  <div className="font-medium text-[10px] uppercase tracking-[0.16em] text-copper flex items-center gap-1.5 select-none">
                    <Sparkles className="size-3 text-copper" />
                    <span>Artistry Protocol Breakdown</span>
                  </div>
                  <p className="text-xs leading-5 text-foreground/90 font-light">{treatment.detailedDescription}</p>

                  {treatment.keyBenefits && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-copper block">Key Highlights</span>
                      <ul className="space-y-1 text-[11px] text-muted-foreground">
                        {treatment.keyBenefits.map((b) => (
                          <li key={b} className="flex items-center gap-1.5">
                            <CheckCircle2 className="size-3 text-copper shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-6 h-10 w-full rounded-none border-copper/40 text-[9px] uppercase tracking-[0.16em] text-copper hover:bg-copper hover:text-primary-foreground transition-all duration-300"
            >
              <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Enquiry for ${treatment.name}`)}`}>
                Book {treatment.name}
              </a>
            </Button>
          </motion.article>
        ))}
      </div>
    </TreatmentSidebarLayout>
  );
}

