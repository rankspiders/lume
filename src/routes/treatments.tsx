import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, Search, FileText, Filter, Phone, Calendar } from "lucide-react";
import { useState, useMemo } from "react";

import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import advancedImage from "@/assets/advanced-aesthetics.jpg";
import heroImage from "@/assets/lume-hero.jpg";

import plump3 from "@/assets/competitors/plump-3.png";
import rejuva2 from "@/assets/competitors/rejuva-2.jpg";
import rejuva5 from "@/assets/competitors/rejuva-5.jpg";
import price1Img from "@/assets/lumeproject/price-1-1.jpg";

import { TreatmentSidebarLayout } from "@/components/treatment-sidebar-layout";
import { Button } from "@/components/ui/button";
import { addOns, spaPackages, treatmentGroups, type Treatment } from "@/lib/treatments";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Complete Treatment Menu & Brochure | Lumé Aesthetics" },
      {
        name: "description",
        content: "Explore Lumé facial & body rituals, signature spa packages, beauty atelier, and clinical aesthetics with exact brochure pricing.",
      },
      { property: "og:title", content: "Complete Treatment Menu & Brochure | Lumé Aesthetics" },
      { property: "og:description", content: "Curated skin, body, beauty, spa packages and advanced aesthetics at Lumé Aesthetics." },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

const categoryShowcase = [
  {
    title: "Skin & Body Rituals",
    eyebrow: "Collection I",
    href: "/services/skin-and-body-rituals" as const,
    image: rejuva5,
    count: "10 Rituals",
  },
  {
    title: "Signature Spa Packages",
    eyebrow: "Collection II",
    href: "/services/spa-packages" as const,
    image: price1Img,
    count: "2 Packages",
  },
  {
    title: "Beauty Atelier",
    eyebrow: "Collection III",
    href: "/services/beauty-atelier" as const,
    image: plump3,
    count: "6 Services",
  },
  {
    title: "Advanced Aesthetics",
    eyebrow: "Collection IV",
    href: "/services/advanced-aesthetics" as const,
    image: rejuva2,
    count: "6 Clinicals",
  },
];

type FilterType = "all" | "skin" | "spa" | "beauty" | "advanced" | "addons";

function TreatmentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const allTreatmentsWithCategory = useMemo(() => {
    const list: Array<{ treatment: Treatment; category: string; filterKey: FilterType; categoryHref: string }> = [];

    // Skin & Body
    treatmentGroups[0]?.treatments.forEach((t) => {
      list.push({ treatment: t, category: "Skin & Body Rituals", filterKey: "skin", categoryHref: "/services/skin-and-body-rituals" });
    });

    // Spa Packages
    spaPackages.forEach((t) => {
      list.push({ treatment: t, category: "Signature Spa Packages", filterKey: "spa", categoryHref: "/services/spa-packages" });
    });

    // Beauty Atelier
    treatmentGroups[1]?.treatments.forEach((t) => {
      list.push({ treatment: t, category: "Beauty Atelier", filterKey: "beauty", categoryHref: "/services/beauty-atelier" });
    });

    // Advanced Aesthetics
    treatmentGroups[2]?.treatments.forEach((t) => {
      list.push({ treatment: t, category: "Advanced Aesthetics", filterKey: "advanced", categoryHref: "/services/advanced-aesthetics" });
    });

    // Add-Ons
    addOns.forEach((t) => {
      list.push({ treatment: t, category: "Treatment Add-Ons", filterKey: "addons", categoryHref: "/treatments" });
    });

    return list;
  }, []);

  const filteredTreatments = useMemo(() => {
    return allTreatmentsWithCategory.filter((item) => {
      const matchesFilter = activeFilter === "all" || item.filterKey === activeFilter;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.treatment.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [allTreatmentsWithCategory, activeFilter, searchQuery]);

  return (
    <TreatmentSidebarLayout
      eyebrow="Complete Atelier Brochure"
      title={
        <>
          Rituals for skin,
          <br />
          <em>body & self.</em>
        </>
      }
      description="Explore our complete treatment brochure with exact pricing and procedural protocols. Filter by collection or search for specific active ingredients."
      activeCategoryHref="/treatments"
    >
      {/* 4 Featured Category Showcase Lookbook Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-copper/20 pb-3">
          <div>
            <span className="eyebrow text-copper text-[10px]">Four Atelier Suites</span>
            <h3 className="font-display text-2xl font-light text-foreground">Explore Treatment Collections</h3>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:block">Select a collection</span>
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
                className="group flex flex-col justify-between h-full overflow-hidden border border-copper/30 bg-[#131211] text-white shadow-md transition-all duration-500 hover:border-copper hover:shadow-xl"
              >
                <div>
                  <div className="overflow-hidden h-44 relative">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131211] via-[#131211]/30 to-transparent" />
                    <span className="absolute top-3 right-3 text-[9px] uppercase tracking-widest bg-copper text-primary-foreground px-2.5 py-1 font-semibold">
                      {cat.count}
                    </span>
                    <span className="absolute bottom-3 left-4 text-[9px] uppercase tracking-[0.2em] text-copper-light font-semibold">
                      {cat.eyebrow}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-display text-2xl font-light text-white group-hover:text-copper-light transition-colors">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-white/75 leading-5 line-clamp-3 font-light">
                      {idx === 0 && "Custom 20% AHA botanical peels, Bioline hyaluronic facials, and Gua Sha body contouring."}
                      {idx === 1 && "Multi-hour head-to-toe luxury experiences combining facials, body wraps & scalp care."}
                      {idx === 2 && "Quietly polished event makeup, gel nail artistry, lash couture lifts & silk waxing."}
                      {idx === 3 && "Consultation-led clinical injectables, PRP microneedling & exosome therapies."}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 mt-auto">
                  <div className="w-full h-9 border border-copper-light/40 flex items-center justify-between px-3 text-[9px] uppercase tracking-[0.14em] text-copper-light group-hover:bg-copper-light group-hover:text-[#131211] transition-all duration-300">
                    <span>View Suite</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Search & Filter Controls */}
      <div className="border border-copper/25 bg-secondary/30 p-6 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="size-4 text-copper absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments, actives (e.g. AHA, Botox, Gua Sha)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-4 text-xs bg-background border border-copper/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-copper"
            />
          </div>

          {/* PDF Download CTAs */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="/Brochure.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-copper hover:underline font-medium"
            >
              <FileText className="size-3.5" /> Download Full Brochure (PDF)
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-copper/15">
          {[
            { id: "all", label: "All Rituals (24+)" },
            { id: "skin", label: "Skin & Body (10)" },
            { id: "spa", label: "Spa Packages (2)" },
            { id: "beauty", label: "Beauty Atelier (6)" },
            { id: "advanced", label: "Advanced Clinical (6)" },
            { id: "addons", label: "Add-Ons (2)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as FilterType)}
              className={cn(
                "px-3.5 py-1.5 text-xs transition-all border",
                activeFilter === tab.id
                  ? "bg-copper text-primary-foreground border-copper font-medium shadow-sm"
                  : "bg-background text-muted-foreground border-copper/20 hover:border-copper/50 hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Treatment Cards Grid */}
      <div className="space-y-6">
        <div className="flex justify-between items-baseline border-b border-copper/15 pb-3">
          <h3 className="font-display text-2xl font-light text-foreground">
            {activeFilter === "all" ? "Complete Treatment Catalog" : `Filtered Collection (${filteredTreatments.length})`}
          </h3>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Showing {filteredTreatments.length} Rituals
          </span>
        </div>

        <div className="grid gap-8">
          {filteredTreatments.map(({ treatment: t, category, categoryHref }, idx) => (
            <motion.article
              key={t.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="group border border-copper/25 bg-background p-6 shadow-sm transition-all duration-300 hover:border-copper grid gap-6 sm:grid-cols-12 items-start"
            >
              <div className="sm:col-span-4 overflow-hidden border border-copper/15 relative">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 text-[9px] uppercase tracking-widest bg-foreground/90 text-copper-light px-2 py-0.5 font-semibold">
                  {category}
                </span>
              </div>

              <div className="sm:col-span-8 flex flex-col justify-between h-full space-y-3">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-copper/15 pb-2">
                    <h4 className="font-display text-2xl font-light text-foreground">{t.name}</h4>
                    <span className="font-display text-2xl font-light text-copper">{t.price}</span>
                  </div>
                  {t.duration && (
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Duration: {t.duration}</p>
                  )}
                  <p className="mt-2 text-xs leading-6 text-muted-foreground font-light">{t.summary}</p>
                </div>

                {/* Procedure Breakdown & Key Benefits */}
                {t.detailedDescription && (
                  <div className="border-t border-copper/15 pt-3 mt-2 text-xs text-muted-foreground space-y-2">
                    <div className="font-medium text-[10px] uppercase tracking-[0.16em] text-copper flex items-center gap-1.5 select-none">
                      <Sparkles className="size-3 text-copper" />
                      <span>Procedural Breakdown & Active Ingredients</span>
                    </div>
                    <p className="text-xs leading-5 text-foreground/90 font-light">{t.detailedDescription}</p>

                    {t.keyBenefits && (
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-copper block">Key Highlights</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-muted-foreground">
                          {t.keyBenefits.map((b) => (
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

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="h-9 rounded-none border-copper/40 bg-transparent px-4 text-[9px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-primary-foreground transition-all duration-300"
                  >
                    <Link to={categoryHref as any}>
                      Suite Details →
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="h-9 rounded-none bg-foreground text-background px-5 text-[9px] uppercase tracking-[0.14em] hover:bg-copper hover:text-primary-foreground transition-all duration-300"
                  >
                    <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Enquiry for ${t.name}`)}`}>
                      Enquire ({t.price})
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