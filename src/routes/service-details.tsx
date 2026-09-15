import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles, CheckCircle2, Clock, ShieldCheck, Phone, ArrowRight, Compass } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { RotatingBadge } from "@/components/rotating-badge";
import { Button } from "@/components/ui/button";
import {
  SpotlightCard,
  ShinyText,
  MagneticButton,
  TiltedCard,
  DecryptedText,
} from "@/components/reactbits";
import { spaPackages, treatmentGroups, addOns, type Treatment } from "@/lib/treatments";

export const Route = createFileRoute("/service-details")({
  head: () => ({
    meta: [
      { title: "Service Details & Clinical Protocols | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Detailed procedural steps, active formulations, and benefits for every treatment at Lumé Aesthetics in Sherwood Park.",
      },
      { property: "og:title", content: "Service Details | Lumé Aesthetics" },
      { property: "og:description", content: "In-depth treatment protocols and clinical formulations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/service-details" },
    ],
    links: [{ rel: "canonical", href: "/service-details" }],
  }),
  component: ServiceDetailsPage,
});

function ServiceDetailsPage() {
  // Consolidate all treatments
  const allTreatments: Array<{ treatment: Treatment; category: string }> = [
    ...treatmentGroups[0]!.treatments.map((t) => ({ treatment: t, category: "Skin & Body Rituals" })),
    ...spaPackages.map((t) => ({ treatment: t, category: "Signature Spa Packages" })),
    ...treatmentGroups[1]!.treatments.map((t) => ({ treatment: t, category: "Beauty Atelier" })),
    ...treatmentGroups[2]!.treatments.map((t) => ({ treatment: t, category: "Advanced Aesthetics" })),
    ...addOns.map((t) => ({ treatment: t, category: "Ceremonial Add-Ons" })),
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeItem = allTreatments[selectedIndex] || allTreatments[0]!;
  const { treatment, category } = activeItem;

  return (
    <div className="bg-[#0A0908] text-[#FAF7F2]">
      <PageIntro
        eyebrow="Clinical Protocol Monograph"
        title={
          <>
            Service details &amp;
            <br />
            <em>procedural steps.</em>
          </>
        }
      >
        Examine the active ingredients, European biotechnology, and choreographed steps behind every treatment on the official Lumé menu.
      </PageIntro>

      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Treatment Selector Menu with SpotlightCard */}
          <div className="lg:col-span-4">
            <SpotlightCard
              spotlightColor="rgba(181, 126, 82, 0.2)"
              borderColor="rgba(181, 126, 82, 0.3)"
              className="bg-[#131211] p-6 space-y-3 shadow-2xl"
            >
              <span className="eyebrow text-xs tracking-[0.24em] font-bold block mb-2">
                <ShinyText text="Select A Service (24+):" speed={4} />
              </span>
              <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {allTreatments.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={item.treatment.name}
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      className={`w-full text-left p-3 border transition-all text-xs flex items-center justify-between group ${
                        isSelected
                          ? "border-copper bg-[#1F1C19] text-white font-semibold shadow-md"
                          : "border-copper/20 bg-[#141210] text-[#FAF7F2]/80 hover:border-copper hover:text-white hover:bg-[#1A1715]"
                      }`}
                    >
                      <div>
                        <span
                          className={`text-[10px] uppercase tracking-wider block font-medium ${
                            isSelected ? "text-[#F3C592]" : "text-[#F3C592]/70"
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="text-xs font-normal tracking-wide text-[#FAF7F2]">{item.treatment.name}</span>
                      </div>
                      <span
                        className={`text-xs font-bold ${
                          isSelected ? "text-[#F3C592]" : "text-[#F5D0A9]"
                        }`}
                      >
                        {item.treatment.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: In-Depth Service Details Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <SpotlightCard
                  spotlightColor="rgba(181, 126, 82, 0.22)"
                  borderColor="rgba(181, 126, 82, 0.35)"
                  className="bg-[#131211] p-6 sm:p-10 shadow-2xl space-y-8 text-white border border-copper/30"
                >
                  {/* Visual Header with TiltedCard */}
                  <TiltedCard rotateAmplitude={4}>
                    <div className="overflow-hidden border border-copper/30 h-72 sm:h-96 relative group bg-[#0A0908]">
                      <img
                        src={treatment.image}
                        alt={treatment.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131211] via-black/40 to-transparent flex flex-col justify-between p-6">
                        <span className="bg-[#0A0908]/90 backdrop-blur-md px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-copper-light font-semibold border border-copper/30 self-start">
                          {category}
                        </span>
                        <div className="text-white space-y-1">
                          <h2 className="font-display text-3xl sm:text-4xl font-light text-white">
                            {treatment.name}
                          </h2>
                          <div className="flex items-center gap-4 text-xs text-copper-light font-medium">
                            {treatment.duration && <span>Duration: {treatment.duration}</span>}
                            <span>•</span>
                            <span>Investment: {treatment.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltedCard>

                  {/* Treatment Summary & Narrative */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-4 text-copper" />
                      <span className="eyebrow text-copper text-[10px]">Treatment Overview</span>
                    </div>
                    <p className="text-sm leading-7 text-white/80 font-light">
                      {treatment.detailedDescription || treatment.summary}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  {treatment.keyBenefits && (
                    <div className="space-y-3 pt-4 border-t border-copper/20">
                      <span className="text-[10px] uppercase tracking-wider text-copper font-semibold block">
                        Key Highlights &amp; Clinical Benefits:
                      </span>
                      <ul className="grid sm:grid-cols-2 gap-2 text-xs text-white/90">
                        {treatment.keyBenefits.map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-copper shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Step-by-Step Procedural Protocol */}
                  {treatment.procedureSteps && (
                    <div className="space-y-3 pt-4 border-t border-copper/20">
                      <span className="text-[10px] uppercase tracking-wider text-copper font-semibold block">
                        Procedural Step-By-Step Journey:
                      </span>
                      <div className="grid gap-2.5 text-xs">
                        {treatment.procedureSteps.map((step, sIdx) => (
                          <div
                            key={step}
                            className="p-3 border border-copper/20 bg-[#161412] flex items-center gap-3"
                          >
                            <span className="font-display text-lg text-copper font-light shrink-0">
                              0{sIdx + 1}
                            </span>
                            <span className="text-white/90 font-light">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Booking & Call Actions with MagneticButton */}
                  <div className="pt-6 border-t border-copper/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="font-display text-2xl text-copper font-light">
                        {treatment.price}
                      </span>
                      <span className="text-xs text-white/60 ml-2 font-light">
                        ({treatment.duration || "Bespoke Session"})
                      </span>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <MagneticButton pullStrength={0.25} className="w-full sm:w-auto">
                        <Button
                          asChild
                          className="h-11 rounded-none bg-copper text-white text-xs uppercase tracking-[0.18em] hover:bg-copper/90 px-8 w-full sm:w-auto"
                        >
                          <Link to="/appointment">Reserve Session</Link>
                        </Button>
                      </MagneticButton>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
