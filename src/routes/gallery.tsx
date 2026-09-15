import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Sparkles, ArrowRight, Eye, CheckCircle2 } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { RotatingBadge } from "@/components/rotating-badge";
import { Button } from "@/components/ui/button";

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
  { title: "You Deserve It! Spa Ceremony", category: "Spa Packages", price: "$265", image: imgYouDeserveIt, tag: "2 Hours" },
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
    <div className="bg-[#FAF7F2] text-[#131211]">
      <PageIntro
        eyebrow="Visual Portfolio"
        title={
          <>
            The artistry of
            <br />
            <em>Lumé Aesthetics.</em>
          </>
        }
      >
        A curated visual monograph showcasing bespoke facial rituals, Italian Bioline formulations, couture event makeup, structured gel nails, and clinical aesthetic transformations.
      </PageIntro>

      {/* Filter Tabs & Gallery Grid */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-copper/20 pb-4">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 text-xs transition-all border ${
                activeFilter === tab
                  ? "bg-copper text-white border-copper font-medium shadow-sm"
                  : "bg-background text-muted-foreground border-copper/20 hover:border-copper hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3-Column Responsive Masonry/Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="group border border-copper/25 bg-background overflow-hidden relative shadow-md hover:border-copper transition-all duration-500"
            >
              <div className="overflow-hidden h-72 sm:h-80 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131211]/90 via-black/20 to-transparent flex flex-col justify-between p-5">
                  <div className="flex justify-between items-start">
                    <span className="bg-[#131211]/80 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-widest text-copper-light font-semibold border border-copper/30">
                      {item.tag}
                    </span>
                    <span className="bg-copper text-white px-2.5 py-1 text-[10px] font-semibold tracking-wider">
                      {item.price}
                    </span>
                  </div>

                  <div className="space-y-1 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-copper-light/80 block font-light">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl font-light text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-background border-t border-copper/15 flex items-center justify-between text-xs">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-light">Sherwood Park Atelier</span>
                <a
                  href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Portfolio Booking: ${item.title}`)}`}
                  className="text-[10px] uppercase tracking-[0.16em] text-copper font-semibold flex items-center gap-1 hover:underline"
                >
                  Book Ritual →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="bg-[#131211] text-white py-20 text-center px-5 sm:px-8 border-t border-copper/20">
        <div className="max-w-2xl mx-auto space-y-4">
          <RotatingBadge text="CUSTOM ATELIER ARTISTRY • LUMÉ • " href="/contact" size={100} className="mx-auto mb-3" />
          <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
            Ready to experience Lumé?
          </h2>
          <p className="text-xs sm:text-sm text-white/75 font-light leading-6">
            Reserve your consultation or custom treatment session at our private Sherwood Park sanctuary.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-11 rounded-none bg-copper text-white text-xs uppercase tracking-[0.18em] hover:bg-copper/90 px-8">
              <Link to="/contact">Reserve An Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-none border-copper-light bg-transparent text-xs uppercase tracking-[0.18em] text-copper-light hover:bg-copper-light hover:text-[#131211]">
              <Link to="/treatments">Explore Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
