import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Phone,
  Calendar,
  HeartHandshake,
  Compass,
  Star,
  ChevronRight,
  Clock,
  Gift,
  Droplets,
  Flower2,
  Sparkle,
  ArrowUpRight,
  Layers,
  Sparkle as SparkleIcon,
} from "lucide-react";
import { useState } from "react";

import advancedImage from "@/assets/advanced-aesthetics.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import facialImage from "@/assets/facial-ritual.jpg";
import heroImage from "@/assets/lume-hero.jpg";

import heroFloralImg from "@/assets/lumeproject/hero-2-1.png";
import aboutLumeImg from "@/assets/lumeproject/about-lume-2.png";
import price1Img from "@/assets/lumeproject/price-1-1.jpg";
import heroFlower from "@/assets/lumeproject/hero-flower.png";
import heroLeaf3 from "@/assets/lumeproject/hero-leaf-3.png";
import heroLeaf4 from "@/assets/lumeproject/hero-leaf-4.png";
import heroLeaf5 from "@/assets/lumeproject/hero-leaf-5.png";
import leaf13 from "@/assets/lumeproject/leaf-1-3.png";
import gal1 from "@/assets/lumeproject/gal-3-1.jpg";
import gal2 from "@/assets/lumeproject/gal-3-2.jpg";
import gal3 from "@/assets/lumeproject/gal-3-3.jpg";
import gal4 from "@/assets/lumeproject/gal-3-4.jpg";

import plump2 from "@/assets/competitors/plump-2.jpg";
import plump3 from "@/assets/competitors/plump-3.png";
import rejuva2 from "@/assets/competitors/rejuva-2.jpg";
import rejuva4 from "@/assets/competitors/rejuva-4.png";
import rejuva5 from "@/assets/competitors/rejuva-5.jpg";

import imgAquaLuxe from "@/assets/treatments/aqua-luxe.jpg";
import imgPrimaGlow from "@/assets/treatments/prima-glow.jpg";
import imgCollagenLifting from "@/assets/treatments/collagen-lifting.jpg";
import imgMochaContour from "@/assets/treatments/mocha-contour.jpg";
import imgAuraInfusion from "@/assets/treatments/aura-infusion.jpg";
import imgBotox from "@/assets/treatments/botox.jpg";
import imgQueenForADay from "@/assets/treatments/queen-for-a-day.jpg";
import imgYouDeserveIt from "@/assets/treatments/you-deserve-it.jpg";
import imgGlamChapter from "@/assets/treatments/glam-chapter.jpg";
import imgPolishedNails from "@/assets/treatments/polished-nails.jpg";
import imgLashCouture from "@/assets/treatments/lash-couture.jpg";
import imgPRPMicroneedling from "@/assets/treatments/prp-microneedling.jpg";

import { RotatingBadge } from "@/components/rotating-badge";
import { Button } from "@/components/ui/button";
import { HauteMarquee, LiveSuiteClock, BeforeAfterInteractive } from "@/components/luxury-motion";
import {
  SpotlightCard,
  ShinyText,
  MagneticButton,
  BlurText,
  TiltedCard,
  CountUp,
  SplitText,
  DecryptedText,
  StarBorder,
  AuroraGlow,
  TrueFocus,
} from "@/components/reactbits";
import { spaPackages, treatmentGroups } from "@/lib/treatments";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumé Aesthetics | Skin, Beauty & Clinical Atelier | Sherwood Park" },
      {
        name: "description",
        content:
          "Lumé Aesthetics: bespoke facial & body rituals, signature spa packages, beauty atelier artistry, and consultation-led clinical aesthetics in Sherwood Park, AB.",
      },
      { property: "og:title", content: "Lumé Aesthetics | Skin, Beauty & Clinical Atelier" },
      {
        property: "og:description",
        content: "Where European botanical rituals meet clinical precision in unhurried serenity.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: IndexPage,
});

const diagnosticOptions = [
  {
    id: "hydration",
    label: "Intense Moisture & Barrier Repair",
    treatment: {
      name: "Lumé Aqua Luxe Facial",
      eyebrow: "Hydration Couturier",
      duration: "65 min",
      price: "$125",
      summary:
        "Multi-molecular hyaluronic acid infusion with Bioline signature nectar drop dermal massage to eliminate dehydration lines.",
      image: imgAquaLuxe,
      href: "/services/skin-and-body-rituals",
      actives: ["Multi-Weight Hyaluronic Acid", "Bioline Nectar Concentrate", "Barrier Ceramides"],
    },
  },
  {
    id: "brightening",
    label: "Hyperpigmentation & AHA Resurfacing",
    treatment: {
      name: "Lumé Prima Glow (20% AHA)",
      eyebrow: "Chemical Resurfacing",
      duration: "60 min",
      price: "$135",
      summary:
        "Gentle yet intensive 20% AHA botanical peel dissolving cellular debris for a clear, luminous, and unified complexion.",
      image: imgPrimaGlow,
      href: "/services/skin-and-body-rituals",
      actives: ["20% Glycolic & Lactic Acids", "Mandelic Botanical Extract", "Calming Thermal Compress"],
    },
  },
  {
    id: "lifting",
    label: "Cheekbone Lift & Collagen Restoration",
    treatment: {
      name: "Lumé Collagen Lifting Facial",
      eyebrow: "Non-Surgical Face Contour",
      duration: "75 min",
      price: "$195",
      summary:
        "Bioline Lifting Code bio-architectural formulations paired with manual contouring massage and microcurrent firming.",
      image: imgCollagenLifting,
      href: "/services/skin-and-body-rituals",
      actives: ["Lifting Code Bio-Architectural Complex", "Marine Collagen Matrix", "Microcurrent Tone"],
    },
  },
  {
    id: "sculpting",
    label: "Body Contouring & Lymphatic Drainage",
    treatment: {
      name: "Lumé Mocha Contour",
      eyebrow: "Bodywork & Sculpting",
      duration: "60 min",
      price: "$145",
      summary:
        "Bioline Jatò Coffee Shape caffeine wrap paired with traditional rhythmic Bian stone Gua Sha bodywork to drain and sculpt.",
      image: imgMochaContour,
      href: "/services/skin-and-body-rituals",
      actives: ["Green Coffee Bean Extract", "Bian Stone Gua Sha", "Circulatory Caffeine Wrap"],
    },
  },
  {
    id: "redcarpet",
    label: "Event-Ready 'Glass Skin' Radiance",
    treatment: {
      name: "Lumé Aura Infusion (Glass Skin)",
      eyebrow: "Negative-Ion Oxygen Dome",
      duration: "60 min",
      price: "$199",
      summary:
        "90%+ pure negative-ion hyper-oxygen dome infusion paired with custom bioactive ampoules and full-spectrum LED light.",
      image: imgAuraInfusion,
      href: "/services/skin-and-body-rituals",
      actives: ["90% Pure Negative-Ion Oxygen", "Bio-Active Ampoules", "Celluma LED Phototherapy"],
    },
  },
  {
    id: "clinical",
    label: "Clinical Neuromodulators & Dermal Volume",
    treatment: {
      name: "Lumé Botox® & Dermal Fillers",
      eyebrow: "Clinical Aesthetics",
      duration: "Consultation + Treatment",
      price: "From $10 / Unit",
      summary:
        "Consultation-led clinical neuromodulators and hyaluronic acid volume sculpting administered by licensed medical practitioners.",
      image: imgBotox,
      href: "/services/advanced-aesthetics",
      actives: ["Health Canada Approved Neuromodulators", "Hyaluronic Acid Fillers", "Facial Mapping"],
    },
  },
  {
    id: "royal",
    label: "Head-to-Toe Multi-Hour Sanctuary Day",
    treatment: {
      name: "Queen For A Day! Royal Experience",
      eyebrow: "Flagship Spa Package",
      duration: "3 hours",
      price: "$395",
      summary:
        "Botanical body exfoliating wrap, Lifting Code facial, restorative warm oil scalp ritual, foot reflexology, and LED therapy.",
      image: imgQueenForADay,
      href: "/services/spa-packages",
      actives: ["Seasonal Body Wrap", "Lifting Code Facial", "Warm Oil Scalp", "Luxe Foot Care"],
    },
  },
];

const categorySuites = [
  {
    roman: "Collection 01",
    title: "Skin & Body Rituals",
    count: "10 Rituals",
    copy: "Unhurried facials, 20% AHA chemical peels, negative-ion oxygen dome therapy, and Mocha Gua Sha body contouring.",
    image: rejuva5,
    href: "/services/skin-and-body-rituals",
  },
  {
    roman: "Collection 02",
    title: "Signature Spa Packages",
    count: "2 Packages",
    copy: "Multi-hour head-to-toe sensory experiences combining custom facials, warm botanical wraps, scalp rituals, and LED light therapy.",
    image: price1Img,
    href: "/services/spa-packages",
  },
  {
    roman: "Collection 03",
    title: "Beauty Atelier",
    count: "6 Services",
    copy: "Quietly polished makeup artistry (The Glam Chapter), structured gel nail couture, lash lift & tint, and silk waxing.",
    image: plump3,
    href: "/services/beauty-atelier",
  },
  {
    roman: "Collection 04",
    title: "Advanced Aesthetics",
    count: "6 Clinicals",
    copy: "Consultation-led clinical injectables (Botox® $10/unit, Dermal Fillers), autologous PRP microneedling, and exosome therapies.",
    image: rejuva2,
    href: "/services/advanced-aesthetics",
  },
];

const galleryItems = [
  { title: "Skinscent Atelier Experience", category: "Skin & Body", image: gal1, price: "$125" },
  { title: "Bespoke Eye & Shadow Beauty", category: "Beauty Atelier", image: gal2, price: "$110+" },
  { title: "Lumé Med-Spa Sanctuary Suite", category: "Private Studio", image: plump2, price: "Sherwood Park" },
  { title: "Clinical Micro-Sculpting & PRP", category: "Advanced Aesthetics", image: rejuva4, price: "From $450" },
  { title: "Thermal Sanctuary Relaxation", category: "Spa Package", image: gal3, price: "$395" },
  { title: "Lumé Stone Massage & Gua Sha", category: "Body Sculpt", image: gal4, price: "$145" },
];

const clientStories = [
  {
    quote:
      "The Prima Glow 20% AHA peel and Aqua Luxe facial completely revived my skin barrier before my wedding. The calm, unhurried atmosphere in Sherwood Park is truly unmatched.",
    author: "Elena R.",
    ritual: "Aqua Luxe & Prima Glow Ritual",
  },
  {
    quote:
      "I booked the Queen For A Day package for my milestone birthday. Three hours of absolute bliss—from the body polish to the Lifting Code facial and scalp massage.",
    author: "Claire M.",
    ritual: "Queen For A Day! (3 Hours)",
  },
  {
    quote:
      "Natural, subtle results. The consultation for Botox was thorough, honest, and precise. You can tell they care deeply about safety and enhancing your natural features.",
    author: "Sarah D.",
    ritual: "Lumé Clinical Aesthetics",
  },
];

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function IndexPage() {
  const [selectedDiagnostic, setSelectedDiagnostic] = useState<string>("hydration");
  const activeDiagnostic = diagnosticOptions.find((d) => d.id === selectedDiagnostic) || diagnosticOptions[0]!;

  return (
    <div className="bg-[#0A0908] text-[#FAF7F2] overflow-hidden">
      {/* 1. HERO SECTION: Reimagined with ReactBits Aurora & SplitText Typography in Dark Luxury */}
      <AuroraGlow variant="dark" className="pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 border-b border-copper/25">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Typography, Luxury Status Pill & Floating Price Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Top Refined Status Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#F3C592]/70 bg-[#1A1715] backdrop-blur-md shadow-lg">
                  <Sparkles className="size-3.5 text-[#F3C592]" />
                  <ShinyText text="_skincare inspires • sherwood park" speed={4} className="text-xs uppercase tracking-[0.22em] font-bold" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#F3C592]/80 font-bold hidden sm:inline">•</span>
                <span className="dark-pill-badge">
                  Specialty Atelier &amp; Spa
                </span>
              </div>

              {/* Main Headline with high contrast */}
              <div className="space-y-3">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.75rem] font-light leading-[1.02] text-[#FAF7F2] tracking-tight text-balance">
                  The Sanctuary for
                  <br />
                  <span className="italic font-serif gold-gradient-text font-normal">
                    <SplitText text="Considered Beauty." delay={45} />
                  </span>
                </h1>
                <p className="font-serif italic text-lg sm:text-2xl text-[#F5D0A9] font-normal">
                  "Where European skin rituals meet clinical precision in unhurried serenity."
                </p>
              </div>

              {/* Editorial Subtext */}
              <p className="max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-[#E7E2DB] font-normal">
                Discover bespoke facials, Bioline Jatò Italy 20% AHA botanical peels, multi-hour sanctuary spa packages, and consultation-led clinical aesthetics in Sherwood Park.
              </p>

              {/* 2 Floating Overlaid Hero Treatment Cards with ReactBits SpotlightCard */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {/* Plan Card 1: Aqua Luxe */}
                <SpotlightCard
                  spotlightColor="rgba(197, 138, 88, 0.2)"
                  className="bg-[#131211]/95 border border-copper/25 backdrop-blur-md p-5 shadow-2xl relative group transition-all duration-300 text-white"
                >
                  <div className="flex items-start justify-between border-b border-copper/20 pb-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-copper-light">Skin &amp; Facial Ritual</p>
                      <h3 className="font-display text-lg font-medium text-white">Aqua Luxe Facial</h3>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-2xl font-light text-copper-light">$125</span>
                      <p className="text-[9px] uppercase tracking-widest text-white/50">65 min</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-white/70 font-light line-clamp-2">
                    Multi-molecular hyaluronic acid infusion with Bioline nectar drop dermal massage.
                  </p>
                  <div className="mt-4 pt-3 border-t border-copper/20 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-copper-light font-semibold">Bioline Italy</span>
                    <Link
                      to="/services/skin-and-body-rituals"
                      className="text-[10px] uppercase tracking-[0.16em] text-copper-light hover:text-white font-medium flex items-center gap-1"
                    >
                      Reserve Ritual →
                    </Link>
                  </div>
                </SpotlightCard>

                {/* Plan Card 2: Queen For A Day (Highlighted Flagship) */}
                <SpotlightCard
                  spotlightColor="rgba(223, 194, 157, 0.25)"
                  borderColor="rgba(197, 138, 88, 0.6)"
                  className="bg-[#181513] border border-copper/40 text-white p-5 shadow-2xl relative group transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 bg-copper text-white text-[8px] uppercase tracking-[0.2em] px-2.5 py-0.5 font-semibold">
                    Flagship
                  </div>
                  <div className="flex items-start justify-between border-b border-white/10 pb-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-copper-light">Signature Spa Package</p>
                      <h3 className="font-display text-lg font-light text-white">Queen For A Day!</h3>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-2xl font-light text-copper-light">$395</span>
                      <p className="text-[9px] uppercase tracking-widest text-white/60">3 Hours</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-white/75 font-light line-clamp-2">
                    Lifting Code facial, body exfoliating wrap, warm oil scalp therapy, foot ritual &amp; LED light.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-copper-light font-semibold">
                      Head-To-Toe
                    </span>
                    <Link
                      to="/services/spa-packages"
                      className="text-[10px] uppercase tracking-[0.16em] text-copper-light hover:text-white font-medium flex items-center gap-1"
                    >
                      Full Itinerary →
                    </Link>
                  </div>
                </SpotlightCard>
              </div>

              {/* Action Buttons & Hotline with MagneticButton */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <MagneticButton strength={0.25} pullStrength={0.25}>
                  <Button
                    asChild
                    className="h-12 rounded-none bg-copper text-white px-8 text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-copper-light hover:text-[#0A0908] transition-all duration-300 border border-copper/40 w-full sm:w-auto font-semibold"
                  >
                    <Link to="/treatments">
                      Explore Treatment Menu (24+)
                      <ArrowRight className="size-3.5 ml-2 text-white" />
                    </Link>
                  </Button>
                </MagneticButton>

                <a
                  href="tel:+17804108278"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-copper/35 bg-white/[0.03] text-xs font-medium text-white hover:border-copper hover:text-copper-light transition-colors"
                >
                  <Phone className="size-3.5 text-copper-light" />
                  <span>Studio: (780) 410-8278</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Hero Visual Plate with 3D TiltedCard & Verified Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Floating organic leaf accents */}
              <img
                src={heroLeaf4}
                alt=""
                aria-hidden="true"
                className="absolute -top-8 -left-8 size-20 sm:size-28 z-20 pointer-events-none animate-jump opacity-90"
              />
              <img
                src={heroLeaf5}
                alt=""
                aria-hidden="true"
                className="absolute -bottom-10 -left-6 size-24 z-20 pointer-events-none animate-jump-reverse hidden sm:block opacity-90"
              />
              <img
                src={heroFlower}
                alt=""
                aria-hidden="true"
                className="absolute top-10 -right-6 size-16 z-20 pointer-events-none animate-spin-slow opacity-80"
              />

              <TiltedCard rotateAmplitude={8} scaleOnHover={1.01}>
                <div className="relative overflow-hidden border-2 border-copper/35 shadow-2xl bg-gradient-to-b from-[#181513] to-[#0D0C0B] p-2 group">
                  <div className="overflow-hidden bg-[#0A0908] relative">
                    <img
                      src={heroFloralImg}
                      alt="Lumé Aesthetics Sanctuary Treatment"
                      className="w-full h-[480px] sm:h-[560px] object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Floating Glass Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/95 via-transparent to-transparent flex flex-col justify-between p-6 sm:p-8">
                      <div className="flex justify-between items-start">
                        <span className="bg-[#131211]/90 backdrop-blur-md px-3 py-1 border border-copper/40 text-copper-light text-[9px] tracking-[0.24em] uppercase font-medium">
                          Atelier No. 01
                        </span>
                        <span className="bg-[#131211]/80 backdrop-blur-md px-3 py-1 border border-white/15 text-white/90 text-[9px] tracking-widest uppercase font-mono">
                          Sherwood Park, AB
                        </span>
                      </div>

                      <div className="space-y-2 text-white">
                        <div className="flex items-center gap-1 text-copper-light">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="size-3 fill-copper-light text-copper-light" />
                          ))}
                          <span className="text-[10px] text-white/90 ml-1.5 font-light">5.0 Star Guest Rating</span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-light">
                          Lifting Code &amp; Aqua Luxe Rituals
                        </h3>
                        <p className="text-xs text-white/80 font-light">
                          Italian Bioline formulations, 20% AHA peels, and negative-ion oxygen therapy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltedCard>

              {/* Floating Overlapping Circular Badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block z-30">
                <RotatingBadge
                  text="LUXURY SKINCARE • VERIFIED EXCELLENCE • "
                  href="/about"
                  size={120}
                  className="bg-[#131211]/95 backdrop-blur-md border border-copper/40 shadow-2xl rounded-full text-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </AuroraGlow>

      {/* Infinite Luxury Ticker */}
      <HauteMarquee
        items={[
          "BIOLINE JATÒ ITALY CERTIFIED",
          "HEALTH CANADA PROTOCOLS",
          "20% AHA BOTANICAL PEELS",
          "100% PRIVATE 1-ON-1 SUITES",
          "CLINICAL BOTOX® & PRP CENTRIFUGATION",
          "SHERWOOD PARK SANCTUARY",
        ]}
      />

      {/* 2. BRAND & STANDARDS STRIP with DecryptedText and CountUp */}
      <section className="bg-[#0D0C0B] text-white py-10 border-b border-copper/20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center divide-y sm:divide-y-0 sm:divide-x divide-copper/20">
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-copper-light font-semibold block">
                <DecryptedText text="Bioline Jatò" />
              </span>
              <p className="text-xs text-white/80 font-light mt-0.5">Italy Certified Partner</p>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-copper-light font-semibold block">
                <DecryptedText text="Health Canada" />
              </span>
              <p className="text-xs text-white/80 font-light mt-0.5">Clinical Protocol</p>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-copper-light font-semibold block">
                <DecryptedText text="Celluma LED" />
              </span>
              <p className="text-xs text-white/80 font-light mt-0.5">Phototherapy Light</p>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-copper-light font-semibold block">
                <DecryptedText text="Autologous PRP" />
              </span>
              <p className="text-xs text-white/80 font-light mt-0.5">Centrifugation Tech</p>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="font-display text-xl text-copper-light">
                <CountUp to={24} duration={2} suffix="+" />
              </span>
              <p className="text-xs text-white/80 font-light mt-0.5">Exact PDF Brochure</p>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="font-display text-xl text-copper-light">
                <CountUp to={100} duration={2} suffix="%" />
              </span>
              <p className="text-xs text-white/80 font-light mt-0.5">Private Acoustic Suites</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 FEATURE DISCIPLINES with ReactBits SpotlightCard */}
      <section className="py-24 sm:py-32 bg-[#0A0908] border-b border-copper/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="eyebrow text-copper-light">
              <ShinyText text="Curated Atelier Collections" speed={4} />
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-light text-[#FAF7F2]">
              Facials, Body &amp; Clinical Aesthetics
            </h2>
            <p className="text-sm leading-7 text-white/70 font-light">
              Explore four dedicated treatment disciplines crafted around formulation purity, anatomical facial precision, and unhurried luxury.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categorySuites.map((suite, idx) => (
              <motion.div
                key={suite.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
              >
                <SpotlightCard
                  spotlightColor="rgba(197, 138, 88, 0.2)"
                  className="bg-[#131211] border border-copper/25 p-6 flex flex-col justify-between h-full shadow-lg hover:border-copper transition-all duration-300 text-white"
                >
                  <div>
                    <div className="overflow-hidden h-48 border border-copper/20 mb-6 relative">
                      <img
                        src={suite.image}
                        alt={suite.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#0A0908]/90 text-copper-light text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold border border-copper/30">
                        {suite.roman}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-copper text-white text-[9px] uppercase tracking-widest px-2 py-0.5 font-medium">
                        {suite.count}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-light text-[#FAF7F2] group-hover:text-copper-light transition-colors">
                      {suite.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/70 font-light">
                      {suite.copy}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-copper/20">
                    <Link
                      to={suite.href as any}
                      className="text-[10px] uppercase tracking-[0.18em] text-copper-light font-semibold flex items-center justify-between hover:underline"
                    >
                      <span>Explore Collection</span>
                      <span>→</span>
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "DISCOVER A NEW YOU" PHILOSOPHY SPLIT with TrueFocus & TiltedCard */}
      <section className="py-24 sm:py-32 bg-[#0E0D0C] border-b border-copper/20 relative overflow-hidden text-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12 items-center">
            {/* Left Column: Asymmetrical Photo Frame with TiltedCard */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <img
                src={leaf13}
                alt=""
                aria-hidden="true"
                className="absolute -top-10 -right-6 size-20 pointer-events-none animate-jump hidden sm:block z-20 opacity-80"
              />

              <TiltedCard rotateAmplitude={10} scaleOnHover={1.01}>
                <div className="border-2 border-copper/35 bg-[#0A0908] p-3 shadow-2xl relative">
                  <img
                    src={aboutLumeImg}
                    alt="Lumé Aesthetics Botanical Formulation Philosophy"
                    className="w-full h-[460px] sm:h-[520px] object-cover transition-transform duration-700"
                  />

                  {/* Floating Dark Glass Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-[#131211]/95 border border-copper/40 p-5 shadow-2xl max-w-[220px] hidden sm:block text-white backdrop-blur-md">
                    <span className="text-copper-light font-display text-3xl font-light block">
                      <CountUp to={100} suffix="%" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-white font-semibold block mt-1">
                      Bespoke Formulations
                    </span>
                    <p className="text-[11px] text-white/70 font-light mt-1">
                      Personalized skin mapping for every guest.
                    </p>
                  </div>
                </div>
              </TiltedCard>
            </motion.div>

            {/* Right Column: Narrative & Experience Specs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="eyebrow text-copper-light">The Lumé Sanctuary</span>
                <span className="text-white/40 text-xs">•</span>
                <span className="text-[10px] uppercase tracking-wider text-[#DFC29D] font-mono">Sherwood Park</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF7F2] leading-[1.08]">
                DISCOVER A <span className="italic font-serif gold-gradient-text">RADIANT</span> YOU.
              </h2>

              <p className="text-sm leading-7 text-white/75 font-light">
                We believe your skin should reflect health, vitality, and balance regardless of your busy lifestyle. Lumé Aesthetics was founded as an unhurried haven where centuries-old European botanical dermocosmetics converge with Health Canada certified clinical procedures.
              </p>

              {/* TrueFocus Dynamic Focus Highlight */}
              <div className="py-2 border-y border-copper/20">
                <TrueFocus
                  words={["Anatomical Precision", "Botanical Purity", "Unhurried Serenity", "Private Suites"]}
                  manualMode={false}
                  animationDuration={0.6}
                  pauseBetweenAnimations={1.5}
                />
              </div>

              {/* Spec Table */}
              <div className="pt-2 divide-y divide-copper/15 text-xs">
                <div className="py-3 flex items-center justify-between">
                  <span className="font-semibold uppercase tracking-wider text-copper-light text-[10px]">Official Partner :</span>
                  <span className="text-[#FAF7F2] font-light">Bioline Jatò Italy Certified</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="font-semibold uppercase tracking-wider text-copper-light text-[10px]">Clinical Injectors :</span>
                  <span className="text-[#FAF7F2] font-light">Certified Medical Nurses &amp; Botox® Protocol</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="font-semibold uppercase tracking-wider text-copper-light text-[10px]">Sanctuary Privacy :</span>
                  <span className="text-[#FAF7F2] font-light">100% Private 1-on-1 Treatment Lounges</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="font-semibold uppercase tracking-wider text-copper-light text-[10px]">Studio Location :</span>
                  <span className="text-[#FAF7F2] font-light">2457 Broadmoor Blvd #121, Sherwood Park</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="h-11 rounded-none bg-copper text-white text-[10px] uppercase tracking-[0.18em] hover:bg-copper-light hover:text-[#0A0908] px-8 font-semibold transition-all duration-300 shadow-lg"
                >
                  <Link to="/about">Our Philosophy &amp; Team</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-none border-copper/40 bg-white/[0.03] text-[10px] uppercase tracking-[0.18em] text-copper-light hover:bg-copper hover:text-white transition-all duration-300"
                >
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. 6-GRID SERVICE HIGHLIGHTS with ReactBits SpotlightCard */}
      <section id="experience-menu" className="py-24 sm:py-32 bg-[#0A0908] border-b border-copper/20 text-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="eyebrow text-copper-light">
              <ShinyText text="Signature Procedures" speed={4} />
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-light text-[#FAF7F2]">
              Discover Our Atelier Menu
            </h2>
            <p className="text-sm leading-7 text-white/70 font-light">
              Every treatment is unhurried, results-oriented, and personalized to your facial bone structure and skin barrier requirements.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left 3 Services */}
            <div className="lg:col-span-4 space-y-6">
              <SpotlightCard
                spotlightColor="rgba(197, 138, 88, 0.22)"
                className="bg-[#131211] border border-copper/25 p-6 shadow-xl hover:border-copper transition-colors group text-white"
              >
                <div className="flex items-baseline justify-between border-b border-copper/20 pb-2">
                  <h3 className="font-display text-xl font-light text-[#FAF7F2] group-hover:text-copper-light transition-colors">
                    Lumé Aqua Luxe Facial
                  </h3>
                  <span className="font-display text-lg text-copper-light">$125</span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Duration: 65 min</p>
                <p className="text-xs text-white/70 font-light mt-2">
                  Nectar drop massage, hyaluronic acid cream mask, and barrier repair.
                </p>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(197, 138, 88, 0.22)"
                className="bg-[#131211] border border-copper/25 p-6 shadow-xl hover:border-copper transition-colors group text-white"
              >
                <div className="flex items-baseline justify-between border-b border-copper/20 pb-2">
                  <h3 className="font-display text-xl font-light text-[#FAF7F2] group-hover:text-copper-light transition-colors">
                    Prima Glow (20% AHA)
                  </h3>
                  <span className="font-display text-lg text-copper-light">$135</span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Duration: 60 min</p>
                <p className="text-xs text-white/70 font-light mt-2">
                  Intensive botanical AHA peel for cellular turnover, tone &amp; clarity.
                </p>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(197, 138, 88, 0.22)"
                className="bg-[#131211] border border-copper/25 p-6 shadow-xl hover:border-copper transition-colors group text-white"
              >
                <div className="flex items-baseline justify-between border-b border-copper/20 pb-2">
                  <h3 className="font-display text-xl font-light text-[#FAF7F2] group-hover:text-copper-light transition-colors">
                    Mocha Contour Gua Sha
                  </h3>
                  <span className="font-display text-lg text-copper-light">$145</span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Duration: 60 min</p>
                <p className="text-xs text-white/70 font-light mt-2">
                  Bioline Jatò Coffee wrap with Bian stone Gua Sha body contouring.
                </p>
              </SpotlightCard>
            </div>

            {/* Center Imagery Emblem */}
            <div className="lg:col-span-4 text-center">
              <TiltedCard rotateAmplitude={6}>
                <div className="relative mx-auto max-w-sm overflow-hidden border-2 border-copper/35 shadow-2xl bg-[#0D0C0B]">
                  <img
                    src={plump2}
                    alt="Lumé Aesthetics Private Sanctuary Suite"
                    className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/95 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-center">
                    <img src="/lume-emblem.svg" alt="Emblem" className="size-10 mx-auto mb-2 opacity-90" />
                    <span className="text-[10px] uppercase tracking-[0.24em] text-copper-light font-semibold">
                      The Art of Serenity
                    </span>
                    <p className="text-xs text-white/80 font-light mt-1">
                      Book individual rituals or pair them in multi-hour packages.
                    </p>
                  </div>
                </div>
              </TiltedCard>
            </div>

            {/* Right 3 Services */}
            <div className="lg:col-span-4 space-y-6">
              <SpotlightCard
                spotlightColor="rgba(197, 138, 88, 0.22)"
                className="bg-[#131211] border border-copper/25 p-6 shadow-xl hover:border-copper transition-colors group text-white"
              >
                <div className="flex items-baseline justify-between border-b border-copper/20 pb-2">
                  <h3 className="font-display text-xl font-light text-[#FAF7F2] group-hover:text-copper-light transition-colors">
                    Aura Infusion (Glass Skin)
                  </h3>
                  <span className="font-display text-lg text-copper-light">$199</span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Duration: 60 min</p>
                <p className="text-xs text-white/70 font-light mt-2">
                  90%+ pure negative-ion oxygen dome with bioactive custom ampoules.
                </p>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(197, 138, 88, 0.22)"
                className="bg-[#131211] border border-copper/25 p-6 shadow-xl hover:border-copper transition-colors group text-white"
              >
                <div className="flex items-baseline justify-between border-b border-copper/20 pb-2">
                  <h3 className="font-display text-xl font-light text-[#FAF7F2] group-hover:text-copper-light transition-colors">
                    Collagen Lifting Facial
                  </h3>
                  <span className="font-display text-lg text-copper-light">$195</span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Duration: 75 min</p>
                <p className="text-xs text-white/70 font-light mt-2">
                  Bioline Lifting Code bio-architectural firming &amp; microcurrent sculpt.
                </p>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(197, 138, 88, 0.22)"
                className="bg-[#131211] border border-copper/25 p-6 shadow-xl hover:border-copper transition-colors group text-white"
              >
                <div className="flex items-baseline justify-between border-b border-copper/20 pb-2">
                  <h3 className="font-display text-xl font-light text-[#FAF7F2] group-hover:text-copper-light transition-colors">
                    Clinical Botox® &amp; Fillers
                  </h3>
                  <span className="font-display text-lg text-copper-light">$10 / Unit</span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">
                  Duration: In-Depth Consultation
                </p>
                <p className="text-xs text-white/70 font-light mt-2">
                  Licensed clinical medical injectors adhering to Health Canada protocols.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "YOUR PERFECT PACKAGE" PRICING PLANS with ReactBits SpotlightCard & StarBorder */}
      <AuroraGlow variant="dark" className="py-24 sm:py-32 border-b border-copper/20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="eyebrow text-copper-light">
              <ShinyText text="Signature Spa Packages" speed={3} />
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-light text-white">
              Your Perfect Package
            </h2>
            <p className="text-sm leading-7 text-white/75 font-light">
              Multi-hour head-to-toe luxury ceremonies crafted for milestone celebrations, bridal parties, or absolute restoration.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Package 1: You Deserve It! */}
            <SpotlightCard
              spotlightColor="rgba(223, 194, 157, 0.22)"
              borderColor="rgba(181, 126, 82, 0.4)"
              className="bg-white/[0.04] border border-copper/30 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-copper-light font-semibold">
                      2 Hour Ceremony
                    </span>
                    <h3 className="font-display text-3xl font-light text-white mt-1">You Deserve It!</h3>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-4xl font-light text-copper-light">$265</span>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-white/75 font-light">
                  A deeply restorative head-to-toe package combining custom facial therapy, green coffee body contouring, and therapeutic LED light.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-copper-light font-semibold block">
                    Included In Package:
                  </span>
                  <ul className="space-y-2.5 text-xs text-white/85">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-copper-light shrink-0" />
                      <span>Custom Bioline Facial (1 Hour)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-copper-light shrink-0" />
                      <span>Coffee Shape Body Treatment (1 Hour)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-copper-light shrink-0" />
                      <span>Celluma LED Light Healing Therapy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-copper-light shrink-0" />
                      <span>Complimentary Organic Herbal Tea Service</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <MagneticButton strength={0.2} pullStrength={0.2}>
                  <Button
                    asChild
                    className="w-full h-12 rounded-none bg-copper text-white text-[10px] uppercase tracking-[0.18em] hover:bg-copper-light hover:text-[#0A0908] font-semibold transition-all duration-300"
                  >
                    <a href="mailto:info@lumeaesthetics.co?subject=Booking%20You%20Deserve%20It%20Package">
                      Reserve Package ($265)
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </SpotlightCard>

            {/* Package 2: Queen For A Day! with StarBorder */}
            <SpotlightCard
              spotlightColor="rgba(223, 194, 157, 0.3)"
              borderColor="rgba(181, 126, 82, 0.8)"
              className="bg-white/[0.07] border border-copper/50 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 bg-copper text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-semibold">
                Royal Flagship
              </div>
              <div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-copper-light font-semibold">
                      3 Hour Luxury Ritual
                    </span>
                    <h3 className="font-display text-3xl font-light text-white mt-1">Queen For A Day!</h3>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-4xl font-light text-copper-light">$395</span>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-white/75 font-light">
                  The ultimate Lumé sanctuary experience. Three unhurried hours of complete head-to-toe sensory pampering and visible facial lift.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-copper-light font-semibold block">
                    Included In Package:
                  </span>
                  <ul className="space-y-2.5 text-xs text-white/85">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-copper-light shrink-0" />
                      <span>Seasonal Botanical Body Exfoliating Wrap</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-copper-light shrink-0" />
                      <span>Bioline Lifting Code Non-Surgical Facelift</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-copper-light shrink-0" />
                      <span>Therapeutic Warm Oil Scalp Treatment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-copper-light shrink-0" />
                      <span>Luxe Foot Reflexology Exfoliation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-copper-light shrink-0" />
                      <span>Full-Spectrum Celluma LED Phototherapy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <MagneticButton strength={0.25} pullStrength={0.25}>
                  <Button
                    asChild
                    className="w-full h-12 rounded-none bg-copper text-white text-[10px] uppercase tracking-[0.18em] hover:bg-copper-light hover:text-[#0A0908] shadow-lg font-semibold transition-all duration-300"
                  >
                    <a href="mailto:info@lumeaesthetics.co?subject=Booking%20Queen%20For%20A%20Day%20Package">
                      Reserve Royal Day ($395)
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </AuroraGlow>

      {/* 7. INTERACTIVE GALLERY / LOOKBOOK with ReactBits TiltedCard */}
      <section className="py-24 sm:py-32 bg-[#0A0908] border-b border-copper/20 overflow-hidden text-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 border-b border-copper/20 pb-6">
            <div>
              <span className="eyebrow text-copper-light">
                <ShinyText text="Visual Lookbook" speed={4} />
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-6xl font-light text-[#FAF7F2]">
                Atelier Portfolio &amp; Rituals
              </h2>
            </div>
            <Link
              to="/treatments"
              className="text-xs uppercase tracking-widest text-copper-light hover:underline flex items-center gap-1 font-semibold"
            >
              Browse Complete Brochure (24+ Rituals) →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, idx) => (
              <SpotlightCard
                key={item.title}
                spotlightColor="rgba(197, 138, 88, 0.25)"
                className="bg-[#131211] border border-copper/25 overflow-hidden relative shadow-xl hover:border-copper transition-all duration-300 text-white"
              >
                <div className="overflow-hidden h-72 relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white w-full flex items-end justify-between">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-copper-light font-semibold block">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl font-light text-white">{item.title}</h3>
                      </div>
                      <span className="font-display text-xl font-light text-copper-light">{item.price}</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE AESTHETIC MATCHER (Interactive Diagnosis) */}
      <section id="ritual-matcher" className="px-5 py-24 sm:px-8 sm:py-32 bg-[#0E0D0C] border-b border-copper/20 text-[#FAF7F2]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl text-left mb-12">
            <div className="flex items-center gap-3">
              <Compass className="size-4 text-copper-light" />
              <span className="eyebrow text-copper-light">Interactive Atelier Matcher</span>
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl font-light text-[#FAF7F2]">
              Discover your bespoke ritual.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70 font-light">
              Select your primary skin or body objective below. Our atelier matcher will instantly reveal your tailored treatment protocol and formulation active spotlight.
            </p>
          </div>

          {/* Interactive Diagnostic Workspace */}
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Options List (Left Col) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold block mb-3 pl-1 font-mono">
                Select Your Goal / Concern:
              </span>
              {diagnosticOptions.map((opt, idx) => {
                const isSelected = opt.id === selectedDiagnostic;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedDiagnostic(opt.id)}
                    className={cn(
                      "w-full text-left p-4 transition-all duration-300 border flex items-center justify-between group",
                      isSelected
                        ? "border-copper bg-copper/20 text-white shadow-xl"
                        : "border-copper/25 bg-[#131211] text-white/90 hover:border-copper/60 hover:bg-white/[0.04]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn("font-display text-lg", isSelected ? "text-copper-light font-bold" : "text-copper-light")}>
                        0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-light tracking-wide">{opt.label}</span>
                    </div>
                    <ChevronRight
                      className={cn(
                        "size-4 transition-transform duration-200",
                        isSelected ? "translate-x-1 text-copper-light" : "text-white/40 group-hover:translate-x-1"
                      )}
                    />
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Result Spotlight (Right Col) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDiagnostic.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(197, 138, 88, 0.25)"
                    borderColor="rgba(181, 126, 82, 0.5)"
                    className="bg-[#131211] border border-copper/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white"
                  >
                    <div className="grid gap-6 sm:grid-cols-12 items-start">
                      <div className="sm:col-span-5 overflow-hidden border border-copper/25 relative group">
                        <img
                          src={activeDiagnostic.treatment.image}
                          alt={activeDiagnostic.treatment.name}
                          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest bg-[#0A0908]/90 text-copper-light px-2.5 py-1 font-semibold border border-copper/30">
                          {activeDiagnostic.treatment.eyebrow}
                        </span>
                      </div>

                      <div className="sm:col-span-7 space-y-4">
                        <div>
                          <div className="flex items-baseline justify-between gap-2 border-b border-copper/20 pb-2">
                            <h3 className="font-display text-2xl font-light text-white">
                              {activeDiagnostic.treatment.name}
                            </h3>
                            <span className="font-display text-2xl font-light text-copper-light">
                              {activeDiagnostic.treatment.price}
                            </span>
                          </div>
                          <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">
                            Duration: {activeDiagnostic.treatment.duration}
                          </p>
                        </div>

                        <p className="text-xs leading-6 text-white/75 font-light">
                          {activeDiagnostic.treatment.summary}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-copper/20">
                          <span className="text-[9px] uppercase tracking-wider text-copper-light font-semibold block">
                            Formulation Actives &amp; Protocol:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {activeDiagnostic.treatment.actives.map((act) => (
                              <span
                                key={act}
                                className="text-[10px] bg-white/[0.05] px-2.5 py-1 border border-copper/25 text-white/90 font-light"
                              >
                                {act}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 grid grid-cols-2 gap-3">
                          <Button
                            asChild
                            variant="outline"
                            className="h-10 rounded-none border-copper/40 bg-transparent text-[9px] uppercase tracking-[0.16em] text-copper-light hover:bg-copper hover:text-white transition-all duration-300"
                          >
                            <Link to={activeDiagnostic.treatment.href as any}>
                              Ritual Details →
                            </Link>
                          </Button>
                          <Button
                            asChild
                            className="h-10 rounded-none bg-copper text-white text-[9px] uppercase tracking-[0.16em] hover:bg-copper-light hover:text-[#0A0908] font-semibold transition-all duration-300 shadow-md"
                          >
                            <a
                              href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(
                                `Consultation Booking: ${activeDiagnostic.treatment.name}`
                              )}`}
                            >
                              Reserve Ritual
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GUEST REVIEWS / TESTIMONIALS with ReactBits SpotlightCard */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 bg-[#0A0908] border-b border-copper/20 text-[#FAF7F2]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="eyebrow text-copper-light">
                <ShinyText text="Client Experiences" speed={4} />
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight text-[#FAF7F2]">
                Words from our guests.
              </h2>
              <p className="text-sm leading-7 text-white/70 font-light">
                Discover why clients trust Lumé Aesthetics for restorative skin rituals, bridal beauty, and clinical precision in Sherwood Park.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-none border-copper/40 bg-white/[0.03] px-6 text-[10px] uppercase tracking-[0.16em] text-copper-light hover:bg-copper hover:text-white transition-all duration-300"
                >
                  <Link to="/contact">Speak With Our Specialists</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-6">
              {clientStories.map((story, idx) => (
                <SpotlightCard
                  key={story.author}
                  spotlightColor="rgba(197, 138, 88, 0.2)"
                  className="bg-[#131211] border border-copper/25 p-6 sm:p-7 space-y-3 relative shadow-xl text-white"
                >
                  <div className="flex items-center gap-1 text-copper-light">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-copper-light text-copper-light" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm leading-6 text-white/90 font-light italic">
                    "{story.quote}"
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-copper/20 text-xs">
                    <span className="font-medium text-white">{story.author}</span>
                    <span className="text-[10px] uppercase tracking-wider text-copper-light font-semibold">
                      {story.ritual}
                    </span>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA BANNER with StarBorder & AuroraGlow */}
      <AuroraGlow variant="dark" className="relative px-5 py-24 text-center sm:px-8 sm:py-32 text-white">
        <div className="mx-auto max-w-3xl space-y-6">
          <RotatingBadge
            text="RESERVE SANCTUARY • LUMÉ AESTHETICS • "
            href="tel:+17804108278"
            size={110}
            className="mx-auto"
          />

          <span className="eyebrow text-copper-light text-[11px] block">
            <ShinyText text="Your Time at Lumé" speed={3} />
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-light text-white leading-tight">
            Begin with a personal consultation.
          </h2>
          <p className="mx-auto max-w-xl leading-7 text-white/75 text-sm sm:text-base font-light">
            Share what you would like to address. Our dermal specialists and clinical practitioners will design a tailored roadmap for your skin and wellbeing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton strength={0.25} pullStrength={0.25}>
              <Button
                asChild
                className="h-12 rounded-none bg-copper text-white px-10 text-xs uppercase tracking-[0.18em] hover:bg-copper-light hover:text-[#0A0908] shadow-2xl font-semibold w-full sm:w-auto transition-all duration-300"
              >
                <a href="tel:+17804108278">Studio Call: (780) 410-8278</a>
              </Button>
            </MagneticButton>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-none border-copper-light bg-transparent px-10 text-xs uppercase tracking-[0.18em] text-copper-light hover:bg-copper-light hover:text-[#0A0908] transition-all duration-300"
            >
              <Link to="/contact">Book Atelier Visit</Link>
            </Button>
          </div>
        </div>
      </AuroraGlow>
    </div>
  );
}