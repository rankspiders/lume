import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import { TreatmentSidebarLayout } from "@/components/treatment-sidebar-layout";
import { Button } from "@/components/ui/button";
import { treatmentGroups } from "@/lib/treatments";

export const Route = createFileRoute("/services/skin-and-body-rituals")({
  head: () => ({
    meta: [
      { title: "Skin & Body Rituals | Lumé Aesthetics" },
      {
        name: "description",
        content: "Bespoke facial and body rituals featuring Aqua Luxe, Prima Glow 20% AHA, Radiance C, Lifting Code, Acne Purify, and Mocha Contour.",
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

function SkinAndBodyPage() {
  const group = treatmentGroups[0];

  return (
    <TreatmentSidebarLayout
      eyebrow="Category 01 — Skin & Body Rituals"
      title={
        <>
          Restorative skin &
          <br />
          <em>body therapy.</em>
        </>
      }
      description="Unhurried, considered treatments shaped around the condition of your skin and the way you want to feel. Powered by Bioline professional formulations and advanced dermal techniques."
      activeCategoryHref="/services/skin-and-body-rituals"
    >
      {/* Visual Header Feature Banner */}
      <div className="overflow-hidden border border-copper/30 shadow-lg relative group">
        <img
          src={facialImage}
          alt="Facial & Body Rituals"
          className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex items-end p-6 sm:p-8">
          <div className="text-background">
            <span className="eyebrow text-copper-light text-[10px]">Bioline Professional Skincare</span>
            <h3 className="font-display text-2xl sm:text-3xl font-light">Tailored to your individual skin barrier</h3>
          </div>
        </div>
      </div>

      {/* Clinical Highlights Strip */}
      <div className="grid gap-4 sm:grid-cols-3 border-y border-copper/20 py-6">
        <div className="flex items-center gap-2.5 text-xs text-foreground">
          <ShieldCheck className="size-4 text-copper shrink-0" />
          <span>20% AHA & Vitamin C Actives</span>
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

      {/* Treatments List with Unique Images */}
      <div className="space-y-6">
        <div className="flex justify-between items-baseline border-b border-copper/15 pb-3">
          <h3 className="font-display text-2xl font-light text-foreground">Curated Facial & Body Menu</h3>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{group?.treatments.length} Rituals</span>
        </div>

        <div className="grid gap-8">
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
                  src={t.image}
                  alt={t.name}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
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
                <div className="pt-2">
                  <Button
                    asChild
                    variant="outline"
                    className="h-9 rounded-none border-copper bg-transparent px-5 text-[9px] uppercase tracking-[0.16em] text-copper hover:bg-copper hover:text-primary-foreground transition-all duration-300"
                  >
                    <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Enquiry about ${t.name}`)}`}>
                      Enquire Service
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Secondary Feature Card */}
      <div className="grid gap-6 sm:grid-cols-12 border border-copper/25 bg-secondary/30 p-6 sm:p-8 items-center">
        <div className="sm:col-span-5 overflow-hidden border border-copper/20">
          <img src={bodyImage} alt="Body Ritual Sculpting" className="w-full h-48 object-cover" />
        </div>
        <div className="sm:col-span-7 space-y-3">
          <span className="eyebrow text-copper text-[10px]">Body Work Speciality</span>
          <h4 className="font-display text-2xl font-light text-foreground">Jatò Coffee Shape & Retinol Lift</h4>
          <p className="text-xs leading-6 text-muted-foreground">
            Combine rhythmic Gua Sha bodywork with specialized collagen-boosting retinol wraps to sculpt, drain, and firm.
          </p>
        </div>
      </div>
    </TreatmentSidebarLayout>
  );
}
