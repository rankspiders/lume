import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Sparkles, ArrowRight, Eye, CheckCircle2 } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { RotatingBadge } from "@/components/rotating-badge";
import { Button } from "@/components/ui/button";
import { HauteMarquee, LiveSuiteClock } from "@/components/luxury-motion";
import {
  SpotlightCard,
  ShinyText,
  MagneticButton,
  TiltedCard,
  DecryptedText,
  CountUp,
  AuroraGlow,
  SplitText,
} from "@/components/reactbits";

import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import advancedImage from "@/assets/advanced-aesthetics.jpg";
import heroImage from "@/assets/lume-hero.jpg";

import imgAquaLuxe from "@/assets/treatments/aqua-luxe.jpg";
import imgPrimaGlow from "@/assets/treatments/prima-glow.jpg";
import imgRadianceC from "@/assets/treatments/radiance-c.jpg";
import imgCollagenLifting from "@/assets/treatments/collagen-lifting.jpg";
import imgAcnePurify from "@/assets/treatments/acne-purify.jpg";
import imgHydraGlow from "@/assets/treatments/hydra-glow.jpg";
import imgSculptRenew from "@/assets/treatments/sculpt-renew.jpg";
import imgMochaContour from "@/assets/treatments/mocha-contour.jpg";
import imgAuraInfusion from "@/assets/treatments/aura-infusion.jpg";
import imgDermaplaning from "@/assets/treatments/dermaplaning.jpg";

import imgGlamChapter from "@/assets/treatments/glam-chapter.jpg";
import imgPolishedNails from "@/assets/treatments/polished-nails.jpg";
import imgLashCouture from "@/assets/treatments/lash-couture.jpg";
import imgBodyWaxing from "@/assets/treatments/body-waxing.jpg";
import imgThreading from "@/assets/treatments/precision-threading.jpg";
import imgHennaArtistry from "@/assets/treatments/henna-artistry.jpg";

import imgBotox from "@/assets/treatments/botox.jpg";
import imgDermalFillers from "@/assets/treatments/dermal-fillers.jpg";
import imgPRPMicroneedling from "@/assets/treatments/prp-microneedling.jpg";
import imgExosomeMicroneedling from "@/assets/treatments/exosome-microneedling.jpg";
import imgTeethWhitening from "@/assets/treatments/teeth-whitening.jpg";
import imgIVInfusion from "@/assets/treatments/iv-infusion.jpg";

import gal1 from "@/assets/lumeproject/gal-3-1.jpg";
import gal2 from "@/assets/lumeproject/gal-3-2.jpg";
import gal3 from "@/assets/lumeproject/gal-3-3.jpg";
import gal4 from "@/assets/lumeproject/gal-3-4.jpg";
import aboutLumeImg from "@/assets/lumeproject/about-lume-2.png";
import price1Img from "@/assets/lumeproject/price-1-1.jpg";
import heroFloralImg from "@/assets/lumeproject/hero-2-1.png";

import plump2 from "@/assets/competitors/plump-2.jpg";
import plump3 from "@/assets/competitors/plump-3.png";
import plump12 from "@/assets/competitors/plump-12.png";
import plump15 from "@/assets/competitors/plump-15.png";
import rejuva2 from "@/assets/competitors/rejuva-2.jpg";
import rejuva4 from "@/assets/competitors/rejuva-4.png";
import rejuva5 from "@/assets/competitors/rejuva-5.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Portfolio & Visual Lookbook | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Explore the Lumé Aesthetics visual portfolio of European facials, bridal beauty artistry, lash lifts, and clinical skin rejuvenation in Sherwood Park.",
      },
      { property: "og:title", content: "Portfolio & Visual Lookbook | Lumé Aesthetics" },
      { property: "og:description", content: "Bespoke beauty, facial rituals, and clinical aesthetics lookbook." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const galleryData = [
  { title: "Skinscent Atelier Experience", category: "Skin & Body", price: "$125", image: gal1, tag: "Facial Care" },
  { title: "Bespoke Eye & Shadow Beauty", category: "Beauty Atelier", price: "$110+", image: gal2, tag: "Artistry" },
  { title: "Lumé Sanctuary Studio Lounge", category: "Skin & Body", price: "Sherwood Park", image: plump2, tag: "Sanctuary" },
  { title: "Precision Dermal Injections", category: "Advanced Clinical", price: "From $10/unit", image: rejuva2, tag: "Neuromodulator" },
  { title: "Thermal Sanctuary Relaxation", category: "Spa Packages", price: "$395", image: gal3, tag: "Flagship" },
  { title: "Lumé Stone Massage & Gua Sha", category: "Skin & Body", price: "$145", image: gal4, tag: "Bodywork" },
  { title: "Lash Couture & Brow Sculpting", category: "Beauty Atelier", price: "$99", image: plump3, tag: "Lash Lift" },
  { title: "Autologous PRP Skin Rejuvenation", category: "Advanced Clinical", price: "$450", image: rejuva4, tag: "Regenerative PRP" },
  { title: "Bioline Botanical Formulations", category: "Skin & Body", price: "Italian Tech", image: aboutLumeImg, tag: "Bioline Italy" },
  { title: "Lumé Aqua Luxe Facial", category: "Skin & Body", price: "$125", image: imgAquaLuxe, tag: "Hydration" },
  { title: "Clinical Skin Refining & Peel", category: "Skin & Body", price: "$135", image: rejuva5, tag: "Chemical Peel" },
  { title: "The Glam Chapter Event Makeup", category: "Beauty Atelier", price: "$110+", image: imgGlamChapter, tag: "Artistry" },
  { title: "Queen For A Day Royal Experience", category: "Spa Packages", price: "$395", image: price1Img, tag: "Flagship Ceremony" },
  { title: "Couture Aesthetic Radiance", category: "Beauty Atelier", price: "Bespoke", image: heroFloralImg, tag: "Editorial" },
  { title: "Lumé Polished Gel Nails", category: "Beauty Atelier", price: "From $65", image: imgPolishedNails, tag: "Nail Couture" },
  { title: "Prima Glow (20% AHA Peel)", category: "Skin & Body", price: "$135", image: imgPrimaGlow, tag: "Chemical Peel" },
  { title: "PRP Collagen Microneedling", category: "Advanced Clinical", price: "$450", image: imgPRPMicroneedling, tag: "Autologous PRP" },
  { title: "Mocha Contour Bian Stone Gua Sha", category: "Skin & Body", price: "$145", image: imgMochaContour, tag: "Body Sculpt" },
  { title: "Aura Infusion Negative-Ion Dome", category: "Skin & Body", price: "$199", image: imgAuraInfusion, tag: "Oxygen Dome" },
  { title: "Dermal Fillers Volume Sculpting", category: "Advanced Clinical", price: "From $550", image: imgDermalFillers, tag: "Volume" },
  { title: "You Deserve It! Spa Ceremony", category: "Spa Packages", price: "$265", image: gal3, tag: "2 Hours" },
];

const filterTabs = ["All Works", "Skin & Body", "Spa Packages", "Beauty Atelier", "Advanced Clinical"];

const fadeInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] },
  }),
};

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All Works");

  const filteredItems = galleryData.filter(
    (item) => activeFilter === "All Works" || item.category === activeFilter
  );

  return (
    <div className="bg-[#FAF5F3] text-[#2A2124]">
      {/* Bespoke Lookbook Hero with AuroraGlow */}
      <AuroraGlow variant="rose" className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[#B76E79]/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em] text-[#B76E79]">
                  <ShinyText text="Haute Visual Monograph" speed={4} />
                </span>
                <span className="h-px w-8 bg-[#B76E79]/40" />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase bg-white/80 border border-[#B76E79]/30 text-[#8F4954] shadow-sm">
                  <DecryptedText text="LOOKBOOK 2026" />
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-[#2A2124] text-balance">
                The artistry of
                <br />
                <span className="italic font-serif gold-gradient-text font-normal">
                  <SplitText text="Lumé Aesthetics." delay={45} />
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base sm:leading-7 text-[#5E5054] font-normal leading-relaxed">
                A curated visual lookbook showcasing bespoke facial rituals, Italian Bioline formulations, couture event makeup, structured gel nails, and clinical aesthetic transformations.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <LiveSuiteClock />
                <span className="text-xs text-[#5E5054] font-medium bg-white/70 border border-[#B76E79]/20 px-3 py-1">
                  <CountUp to={galleryData.length} /> Photographic Works Cataloged
                </span>
              </div>
            </div>

            {/* Bespoke Right Highlight Frame with TiltedCard */}
            <div className="lg:col-span-5 relative">
              <TiltedCard rotateAmplitude={6}>
                <div className="border border-[#B76E79]/30 bg-white p-3 shadow-soft-card relative">
                  <div className="overflow-hidden relative group">
                    <img
                      src={gal1}
                      alt="Lumé Sanctuary Experience"
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-[9px] uppercase tracking-widest text-[#E7B2A9] font-mono">
                        <DecryptedText text="Haute Lookbook" />
                      </span>
                      <p className="font-display text-xl text-white mt-1">
                        Skinscent &amp; Botanical Sanctuary
                      </p>
                    </div>
                  </div>
                </div>
              </TiltedCard>
            </div>
          </div>
        </div>
      </AuroraGlow>

      {/* Infinite Luxury Ticker */}
      <HauteMarquee
        items={[
          "LOOKBOOK 2026",
          "EUROPEAN FACIALS",
          "THE GLAM CHAPTER",
          "AUTOLOGOUS PRP",
          "BIOLINE JATÒ",
          "SHERWOOD PARK SANCTUARY",
        ]}
      />

      {/* Filter Tabs & Gallery Grid with SpotlightCard */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-[#B76E79]/20 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 text-xs transition-all border ${
                activeFilter === tab
                  ? "bg-[#B76E79] text-white border-[#B76E79] font-semibold shadow-md"
                  : "bg-white text-[#5E5054] border-[#B76E79]/20 hover:border-[#B76E79] hover:text-[#2A2124] shadow-sm"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3-Column Responsive Masonry/Grid with SpotlightCard */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <SpotlightCard
                spotlightColor="rgba(183, 110, 121, 0.15)"
                borderColor="rgba(183, 110, 121, 0.25)"
                className="bg-white overflow-hidden relative shadow-soft-card hover:border-[#B76E79] transition-all duration-500 border border-[#B76E79]/20"
              >
                <div className="overflow-hidden h-72 sm:h-80 relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-between p-5">
                    <div className="flex justify-between items-start">
                      <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#E7B2A9] font-semibold border border-[#E7B2A9]/40">
                        {item.tag}
                      </span>
                      <span className="bg-[#B76E79] text-white px-2.5 py-1 text-[10px] font-bold tracking-wider shadow-sm">
                        {item.price}
                      </span>
                    </div>

                    <div className="space-y-1 text-white">
                      <span className="text-[10px] uppercase tracking-wider text-[#E7B2A9] block font-light">
                        {item.category}
                      </span>
                      <h3 className="font-display text-xl font-light text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-[#B76E79]/15 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-[#7D6B70] font-light">
                    Sherwood Park Atelier
                  </span>
                  <Link
                    to="/appointment"
                    className="text-[10px] uppercase tracking-[0.16em] text-[#8F4954] font-semibold flex items-center gap-1 hover:underline hover:text-[#B76E79]"
                  >
                    Reserve Ritual →
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio CTA */}
      <AuroraGlow variant="rose" className="py-20 text-center px-5 sm:px-8 border-t border-[#B76E79]/20">
        <div className="max-w-2xl mx-auto space-y-4">
          <RotatingBadge
            text="CUSTOM ATELIER ARTISTRY • LUMÉ • "
            href="/appointment"
            size={100}
            className="mx-auto mb-3"
          />
          <h2 className="font-display text-3xl sm:text-5xl font-light text-[#2A2124]">
            Ready to experience Lumé?
          </h2>
          <p className="text-xs sm:text-sm text-[#5E5054] font-normal leading-6">
            Reserve your consultation or custom treatment session at our private Sherwood Park sanctuary.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton pullStrength={0.25}>
              <Button
                asChild
                className="h-11 rounded-none bg-[#B76E79] text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#8F4954] px-8 w-full sm:w-auto shadow-md"
              >
                <Link to="/appointment">Reserve An Appointment</Link>
              </Button>
            </MagneticButton>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-none border-[#B76E79] bg-white text-xs uppercase tracking-[0.18em] text-[#8F4954] hover:bg-[#FAF5F3]"
            >
              <Link to="/treatments">Explore Full Menu</Link>
            </Button>
          </div>
        </div>
      </AuroraGlow>
    </div>
  );
}
