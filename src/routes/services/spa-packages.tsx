import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { TreatmentSidebarLayout } from "@/components/treatment-sidebar-layout";
import { Button } from "@/components/ui/button";
import { STITCH_ASSETS } from "@/lib/stitch-assets";
import { spaPackages } from "@/lib/treatments";

export const Route = createFileRoute("/services/spa-packages")({
  head: () => ({
    meta: [
      { title: "Spa Packages | Lumé Aesthetics" },
      {
        name: "description",
        content: "Luxury head-to-toe spa packages including You Deserve It! ($265) and Queen For A Day! ($395) multi-hour rituals.",
      },
    ],
  }),
  component: SpaPackagesPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeInOut" },
  }),
};

const packageImages = [STITCH_ASSETS.relaxingSpa, STITCH_ASSETS.heroModel];

function SpaPackagesPage() {
  return (
    <TreatmentSidebarLayout
      eyebrow="Category 02 — Spa Packages"
      title={
        <>
          Multi-hour rituals for
          <br />
          <em>total renewal.</em>
        </>
      }
      description="Designed for special events, gifts, or deep personal rejuvenation. Experience paired facial, body, scalp, and LED therapies in one seamless visit."
      activeCategoryHref="/services/spa-packages"
    >
      {/* Visual Banner */}
      <div className="overflow-hidden border border-copper/30 shadow-lg relative">
        <img src={STITCH_ASSETS.relaxingSpa} alt="Spa Packages Luxury Rituals" className="w-full h-[300px] sm:h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent flex items-end p-6 sm:p-8">
          <div className="text-background">
            <span className="eyebrow text-copper-light text-[10px]">Curated Self-Care</span>
            <h3 className="font-display text-2xl sm:text-3xl font-light">Complete sensory reset & pampering</h3>
          </div>
        </div>
      </div>

      {/* Spa Packages Listing */}
      <div className="space-y-8">
        {spaPackages.map((pkg, idx) => (
          <motion.article
            key={pkg.name}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="group border border-copper/30 bg-secondary/30 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-copper space-y-6"
          >
            <div className="overflow-hidden border border-copper/15">
              <img
                src={packageImages[idx % packageImages.length]}
                alt={pkg.name}
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-copper/15 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold">Signature Package</span>
                <h3 className="mt-1 font-display text-3xl font-light text-foreground">{pkg.name}</h3>
              </div>
              <div className="text-right">
                <span className="font-display text-3xl font-light text-copper">{pkg.price}</span>
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{pkg.duration}</p>
              </div>
            </div>

            <p className="text-xs leading-6 text-muted-foreground">{pkg.summary}</p>

            {pkg.includedItems && (
              <div className="bg-background/80 p-5 border border-copper/15 space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">Package Inclusions:</p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {pkg.includedItems.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs leading-5 text-muted-foreground">
                      <CheckCircle2 className="size-3.5 text-copper shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button
              asChild
              className="h-12 w-full rounded-none bg-copper text-primary-foreground text-[10px] uppercase tracking-[0.18em] hover:bg-copper/90 transition-all duration-300"
            >
              <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Booking Spa Package: ${pkg.name}`)}`}>
                Reserve Package — {pkg.price}
              </a>
            </Button>
          </motion.article>
        ))}
      </div>
    </TreatmentSidebarLayout>
  );
}
