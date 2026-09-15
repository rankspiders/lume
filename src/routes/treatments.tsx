import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

import { TreatmentSidebarLayout } from "@/components/treatment-sidebar-layout";
import { Button } from "@/components/ui/button";
import { STITCH_ASSETS } from "@/lib/stitch-assets";
import { addOns, spaPackages, treatmentGroups } from "@/lib/treatments";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Complete Treatments & Menu | Lumé Aesthetics" },
      {
        name: "description",
        content: "Explore Lumé facial & body rituals, spa packages, beauty atelier, advanced aesthetics, and treatment add-ons with full brochure pricing.",
      },
      { property: "og:title", content: "Complete Treatments & Menu | Lumé Aesthetics" },
      { property: "og:description", content: "Curated skin, body, beauty, spa packages and advanced aesthetics at Lumé Aesthetics." },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: "easeInOut" },
  }),
};

const categoryShowcase = [
  {
    title: "Skin & Body Rituals",
    eyebrow: "01 — Facials & Bodywork",
    href: "/services/skin-and-body-rituals" as const,
    image: STITCH_ASSETS.facialTherapy,
    count: "10 Rituals",
  },
  {
    title: "Spa Packages",
    eyebrow: "02 — Signature Experiences",
    href: "/services/spa-packages" as const,
    image: STITCH_ASSETS.relaxingSpa,
    count: "2 Packages",
  },
  {
    title: "Beauty Atelier",
    eyebrow: "03 — Beauty Artistry",
    href: "/services/beauty-atelier" as const,
    image: STITCH_ASSETS.bodySculpting,
    count: "6 Services",
  },
  {
    title: "Advanced Aesthetics",
    eyebrow: "04 — Clinical Care",
    href: "/services/advanced-aesthetics" as const,
    image: STITCH_ASSETS.advancedTherapy,
    count: "6 Clinicals",
  },
];

function TreatmentsPage() {
  return (
    <TreatmentSidebarLayout
      eyebrow="Facial & Body Treatment Menu"
      title={
        <>
          Rituals for skin,
          <br />
          <em>body & self.</em>
        </>
      }
      description="Explore our complete treatment brochure with exact pricing. Select a category below or use the sidebar to jump into detailed service pages."
      activeCategoryHref="/treatments"
    >
      {/* 4 Featured Treatment Category Showcase Panels */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-copper/20 pb-3">
          <div>
            <span className="eyebrow text-copper text-[10px]">Four Care Pillars</span>
            <h3 className="font-display text-2xl font-light text-foreground">Explore Treatment Categories</h3>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:block">Select a category</span>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categoryShowcase.map((cat, idx) => (
            <motion.div
              key={cat.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <Link
                to={cat.href}
                resetScroll={false}
                className="group flex flex-col justify-between h-full overflow-hidden border border-copper/30 bg-foreground text-background shadow-md transition-all duration-500 hover:border-copper hover:shadow-xl"
              >
                <div>
                  <div className="overflow-hidden h-44 relative">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
                    <span className="absolute top-3 right-3 text-[9px] uppercase tracking-widest bg-copper/90 text-primary-foreground px-2.5 py-1 font-semibold shadow-sm">
                      {cat.count}
                    </span>
                    <span className="absolute bottom-3 left-4 text-[9px] uppercase tracking-[0.2em] text-copper-light font-semibold">
                      {cat.eyebrow}
                    </span>
                  </div>
                  
                  <div className="p-5 space-y-2">
                    <h4 className="font-display text-2xl font-light text-background group-hover:text-copper-light transition-colors">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-background/80 leading-5 line-clamp-4 font-light">
                      {idx === 0 && "Custom 20% AHA botanical peels, Bioline hyaluronic facials, and Gua Sha body contouring."}
                      {idx === 1 && "Multi-hour head-to-toe luxury experiences combining facials, body wraps, scalp care & foot rituals."}
                      {idx === 2 && "Quietly polished event makeup, gel nail artistry, lash couture lifts & silk body waxing."}
                      {idx === 3 && "Consultation-led clinical injectables, PRP microneedling, exosome therapy & IV infusions."}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0 mt-auto">
                  <div className="w-full h-10 border border-copper-light/40 flex items-center justify-between px-3 text-[10px] uppercase tracking-[0.1em] text-copper-light group-hover:bg-copper-light group-hover:text-foreground transition-all duration-300">
                    <span className="whitespace-nowrap font-medium">Explore Rituals</span>
                    <ArrowRight className="size-3.5 text-copper-light group-hover:text-foreground shrink-0 transition-transform group-hover:translate-x-1 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 01. Signature Spa Packages */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-copper/20 pb-4 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="eyebrow text-copper">Category 01</span>
            <h2 className="font-display text-3xl font-light text-foreground">Signature Spa Packages</h2>
          </div>
          <Link
            to="/services/spa-packages"
            resetScroll={false}
            className="text-xs uppercase tracking-widest text-copper hover:underline flex items-center gap-1 font-semibold"
          >
            View Spa Packages Page →
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {spaPackages.map((pkg, idx) => (
            <motion.article
              key={pkg.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="flex flex-col justify-between border border-copper/30 bg-secondary/30 p-7 transition-all duration-300 hover:border-copper shadow-sm"
            >
              <div>
                <Link to="/services/spa-packages" resetScroll={false} className="block overflow-hidden mb-4 border border-copper/15 -mx-7 -mt-7 group">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex justify-between items-baseline border-b border-copper/15 pb-4">
                  <h3 className="font-display text-2xl font-light text-foreground">{pkg.name}</h3>
                  <span className="font-display text-2xl font-light text-copper">{pkg.price}</span>
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-widest text-copper font-semibold">{pkg.duration}</p>
                <p className="mt-4 text-xs leading-6 text-muted-foreground">{pkg.summary}</p>
                
                {pkg.includedItems && (
                  <ul className="mt-4 space-y-1.5 pt-4 border-t border-copper/10">
                    {pkg.includedItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-foreground/80">
                        <CheckCircle2 className="size-3 text-copper shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="h-10 w-full rounded-none border-copper/40 bg-transparent text-[9px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-primary-foreground"
                >
                  <Link to="/services/spa-packages" resetScroll={false}>
                    Package Details
                  </Link>
                </Button>
                <Button
                  asChild
                  className="h-10 w-full rounded-none bg-copper text-primary-foreground text-[9px] uppercase tracking-[0.14em] hover:bg-copper/90"
                >
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Booking Spa Package: ${pkg.name}`)}`}>
                    Reserve ({pkg.price})
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 02. Skin & Body Rituals */}
      <section className="space-y-6 pt-6">
        <div className="border-b border-copper/20 pb-4 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="eyebrow text-copper">Category 02</span>
            <h2 className="font-display text-3xl font-light text-foreground">Skin & Body Rituals</h2>
          </div>
          <Link
            to="/services/skin-and-body-rituals"
            resetScroll={false}
            className="text-xs uppercase tracking-widest text-copper hover:underline flex items-center gap-1 font-semibold"
          >
            View Skin & Body Page →
          </Link>
        </div>

        <div className="divide-y divide-copper/15 border-t border-b border-copper/15">
          {treatmentGroups[0]?.treatments.map((t, idx) => (
            <motion.article
              key={t.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="py-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-2xl font-light text-foreground">{t.name}</h3>
                  <span className="text-xs font-semibold text-copper">{t.price}</span>
                  {t.duration && <span className="text-[10px] uppercase tracking-wider text-muted-foreground">({t.duration})</span>}
                </div>
                <p className="mt-2 text-xs leading-6 text-muted-foreground max-w-2xl">{t.summary}</p>
              </div>
              <Button
                asChild
                variant="outline"
                className="h-9 rounded-none border-copper bg-transparent px-4 text-[9px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-primary-foreground"
              >
                <Link to="/services/skin-and-body-rituals" resetScroll={false}>
                  View Full Ritual →
                </Link>
              </Button>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 03. Beauty Atelier */}
      <section className="space-y-6 pt-6">
        <div className="border-b border-copper/20 pb-4 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="eyebrow text-copper">Category 03</span>
            <h2 className="font-display text-3xl font-light text-foreground">Beauty Atelier</h2>
          </div>
          <Link
            to="/services/beauty-atelier"
            resetScroll={false}
            className="text-xs uppercase tracking-widest text-copper hover:underline flex items-center gap-1 font-semibold"
          >
            View Beauty Atelier Page →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {treatmentGroups[1]?.treatments.map((t, idx) => (
            <motion.article
              key={t.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="flex flex-col justify-between border border-copper/20 bg-background p-6 transition-all duration-300 hover:border-copper"
            >
              <div>
                <h3 className="font-display text-xl font-light text-foreground">{t.name}</h3>
                <p className="mt-1 text-xs font-semibold text-copper">{t.price}</p>
                {t.duration && <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Duration: {t.duration}</p>}
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{t.summary}</p>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-6 h-9 w-full rounded-none border-copper bg-transparent text-[9px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-primary-foreground"
              >
                <Link to="/services/beauty-atelier" resetScroll={false}>
                  View Service Details →
                </Link>
              </Button>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 04. Advanced Aesthetics */}
      <section className="space-y-6 pt-6">
        <div className="border-b border-copper/20 pb-4 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="eyebrow text-copper">Category 04</span>
            <h2 className="font-display text-3xl font-light text-foreground">Advanced Aesthetics</h2>
          </div>
          <Link
            to="/services/advanced-aesthetics"
            resetScroll={false}
            className="text-xs uppercase tracking-widest text-copper hover:underline flex items-center gap-1 font-semibold"
          >
            View Advanced Aesthetics Page →
          </Link>
        </div>

        <div className="divide-y divide-copper/15 border-t border-b border-copper/15">
          {treatmentGroups[2]?.treatments.map((t, idx) => (
            <motion.article
              key={t.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="py-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-2xl font-light text-foreground">{t.name}</h3>
                  <span className="text-xs font-semibold text-copper">{t.price}</span>
                  {t.duration && <span className="text-[10px] uppercase tracking-wider text-muted-foreground">({t.duration})</span>}
                </div>
                <p className="mt-2 text-xs leading-6 text-muted-foreground max-w-2xl">{t.summary}</p>
              </div>
              <Button
                asChild
                variant="outline"
                className="h-9 rounded-none border-copper bg-transparent px-4 text-[9px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-primary-foreground"
              >
                <Link to="/services/advanced-aesthetics" resetScroll={false}>
                  Clinical Details →
                </Link>
              </Button>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 05. Add-Ons */}
      <section className="space-y-6 pt-6">
        <div className="border-b border-copper/20 pb-4 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="eyebrow text-copper">Add-Ons</span>
            <h2 className="font-display text-3xl font-light text-foreground">Treatment Add-Ons</h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {addOns.map((item, idx) => (
            <motion.article
              key={item.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="flex flex-col justify-between border border-copper/20 bg-secondary/20 p-6"
            >
              <div>
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="font-display text-xl font-light text-foreground">{item.name}</h3>
                  <span className="text-xs font-semibold text-copper">{item.price}</span>
                </div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{item.duration}</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{item.summary}</p>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-6 h-9 w-full rounded-none border-copper/40 bg-transparent text-[9px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-primary-foreground"
              >
                <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Add-on Enquiry: ${item.name}`)}`}>
                  Add to Ritual
                </a>
              </Button>
            </motion.article>
          ))}
        </div>
      </section>
    </TreatmentSidebarLayout>
  );
}