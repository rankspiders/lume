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

import brandLogo1 from "@/assets/lumeproject/b-2-1.png";
import brandLogo2 from "@/assets/lumeproject/b-2-2.png";
import brandLogo3 from "@/assets/lumeproject/b-2-3.png";
import brandLogo4 from "@/assets/lumeproject/b-2-4.png";
import brandLogo5 from "@/assets/lumeproject/b-2-5.png";
import brandLogo6 from "@/assets/lumeproject/b-2-6.png";

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
import {
  HauteMarquee,
  LiveSuiteClock,
  BeforeAfterInteractive,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  LuxuryTiltCard,
  FloatingOrb,
} from "@/components/luxury-motion";

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
    <div className="bg-[#FAF5F3] text-[#2A2124] overflow-hidden">
      {/* 1. HERO SECTION: Dusty Pink Ambiance with Pure White Furniture Cards & Rose Gold Accents */}
      <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 border-b border-[#B76E79]/20 bg-gradient-to-b from-[#FAF5F3] via-[#F4E8E5] to-[#EEDBD7]">
        {/* Soft atmospheric ambient glowing orbs */}
        <FloatingOrb
          className="absolute top-0 right-1/3 w-[42rem] h-[42rem] bg-[#E8C5C8]/40 -mr-20 -mt-20"
          duration={11}
          distance={20}
        />
        <FloatingOrb
          className="absolute bottom-0 left-10 w-96 h-96 bg-white/60"
          duration={9}
          delay={2}
          distance={16}
        />

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Typography, Luxury Status Pill & Floating Pure White Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Top Refined Status Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#B76E79]/40 bg-white shadow-sm">
                  <Sparkles className="size-3.5 text-[#8F4954]" />
                  <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#8F4954]">
                    Sherwood Park • Medical Aesthetics Sanctuary
                  </span>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8F4954]/60 font-bold hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF5F3] border border-[#B76E79]/40 text-[#8F4954] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
                  Bioline Jatò Certified
                </span>
              </div>

              {/* Main Headline with high contrast & rose gold gradient */}
              <div className="space-y-3">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.75rem] font-light leading-[1.02] text-[#2A2124] tracking-tight text-balance">
                  The Sanctuary for
                  <br />
                  <span className="italic font-serif rose-gold-gradient-text font-normal">
                    <SplitText text="Considered Beauty." delay={45} />
                  </span>
                </h1>
                <p className="font-serif italic text-lg sm:text-2xl text-[#8F4954] font-normal">
                  "Where Italian botanical rituals meet clinical precision in unhurried serenity."
                </p>
              </div>

              {/* Editorial Subtext */}
              <p className="max-w-xl text-sm sm:text-base leading-relaxed sm:leading-7 text-[#5E5054] font-normal">
                Experience bespoke facials, Italian Bioline Jatò 20% AHA peels, multi-hour sanctuary spa packages, and consultation-led clinical aesthetics ($10/unit Botox®) in private suites.
              </p>

              {/* 2 Floating Overlaid Hero Treatment Cards with Luxury 3D Tilt & Specular Sheen */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {/* Plan Card 1: Aqua Luxe */}
                <LuxuryTiltCard maxTilt={5}>
                  <div className="bg-white border border-[#B76E79]/20 p-5 shadow-md hover:shadow-xl hover:border-[#B76E79] relative group transition-all duration-300">
                    <div className="flex items-start justify-between border-b border-[#B76E79]/15 pb-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-[#B76E79] font-bold">Skin &amp; Facial Ritual</p>
                        <h3 className="font-display text-lg font-medium text-[#2A2124]">Aqua Luxe Facial</h3>
                      </div>
                      <div className="text-right">
                        <span className="font-display text-2xl font-light text-[#B76E79]">$125</span>
                        <p className="text-[9px] uppercase tracking-widest text-[#7D6F73]">65 min</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[#5E5054] font-normal line-clamp-2">
                      Multi-molecular hyaluronic acid infusion with Bioline nectar drop dermal massage for instant bounce.
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#B76E79]/15 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#B76E79] font-bold">Bioline Italy</span>
                      <Link
                        to="/services/skin-and-body-rituals"
                        className="text-[10px] uppercase tracking-[0.16em] text-[#B76E79] hover:text-[#8F4954] font-bold flex items-center gap-1"
                      >
                        Reserve Ritual →
                      </Link>
                    </div>
                  </div>
                </LuxuryTiltCard>

                {/* Plan Card 2: Clinical Botox ($10/unit) */}
                <LuxuryTiltCard maxTilt={5}>
                  <div className="bg-white border border-[#B76E79]/30 p-5 shadow-md hover:shadow-xl hover:border-[#B76E79] relative group transition-all duration-300">
                    <div className="absolute top-0 right-0 bg-[#B76E79] text-white text-[8px] uppercase tracking-[0.2em] px-2.5 py-0.5 font-bold">
                      Specialist Rate
                    </div>
                    <div className="flex items-start justify-between border-b border-[#B76E79]/15 pb-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-[#B76E79] font-bold">Doctor-Led Aesthetic</p>
                        <h3 className="font-display text-lg font-medium text-[#2A2124]">Botox® Neuromodulators</h3>
                      </div>
                      <div className="text-right">
                        <span className="font-display text-2xl font-light text-[#B76E79]">$10<span className="text-xs">/u</span></span>
                        <p className="text-[9px] uppercase tracking-widest text-[#7D6F73]">Consult + Care</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[#5E5054] font-normal line-clamp-2">
                      Anatomical facial mapping and natural wrinkle smoothing administered by licensed medical practitioners.
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#B76E79]/15 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#B76E79] font-bold">Health Canada</span>
                      <Link
                        to="/services/advanced-aesthetics"
                        className="text-[10px] uppercase tracking-[0.16em] text-[#B76E79] hover:text-[#8F4954] font-bold flex items-center gap-1"
                      >
                        Book Consult →
                      </Link>
                    </div>
                  </div>
                </LuxuryTiltCard>
              </div>


              {/* Action Buttons & Hotline */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <MagneticButton strength={0.25} pullStrength={0.25}>
                  <Button
                    asChild
                    className="h-12 rounded-none bg-gradient-to-r from-[#C5838B] via-[#B76E79] to-[#8F4954] text-white px-8 text-[10px] uppercase tracking-[0.2em] shadow-md hover:opacity-95 transition-all duration-300 w-full sm:w-auto font-bold"
                  >
                    <Link to="/treatments">
                      Explore Treatment Menu (24+)
                      <ArrowRight className="size-3.5 ml-2 text-white" />
                    </Link>
                  </Button>
                </MagneticButton>

                <a
                  href="tel:+17804108278"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-[#B76E79]/35 bg-white text-xs font-bold text-[#2A2124] hover:border-[#B76E79] hover:text-[#B76E79] transition-colors shadow-xs"
                >
                  <Phone className="size-3.5 text-[#B76E79]" />
                  <span>Studio Desk: (780) 410-8278</span>
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
                <div className="relative overflow-hidden border-2 border-[#B76E79]/35 shadow-2xl bg-white p-2 group">
                  <div className="overflow-hidden bg-[#FAF5F3] relative">
                    <img
                      src={heroFloralImg}
                      alt="Lumé Aesthetics Sanctuary Treatment"
                      className="w-full h-[480px] sm:h-[560px] object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Floating Glass Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#201317]/90 via-transparent to-transparent flex flex-col justify-between p-6 sm:p-8 text-white">
                      <div className="flex justify-between items-start">
                        <span className="bg-white/90 backdrop-blur-md px-3 py-1 border border-[#B76E79]/40 text-[#B76E79] text-[9px] tracking-[0.24em] uppercase font-bold">
                          Atelier No. 01
                        </span>
                        <span className="bg-[#201317]/80 backdrop-blur-md px-3 py-1 border border-white/20 text-white text-[9px] tracking-widest uppercase font-mono">
                          Sherwood Park, AB
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-1 text-[#E7B2A9]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="size-3 fill-[#E7B2A9] text-[#E7B2A9]" />
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
                  className="bg-white backdrop-blur-md border border-[#B76E79]/40 shadow-2xl rounded-full text-[#2A2124]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Luxury Ticker */}
      <HauteMarquee
        items={[
          "BIOLINE JATÒ ITALY CERTIFIED",
          "HEALTH CANADA PROTOCOLS",
          "20% AHA BOTANICAL PEELS",
          "100% PRIVATE 1-ON-1 SUITES",
          "CLINICAL BOTOX® ($10/UNIT) & PRP",
          "SHERWOOD PARK SANCTUARY",
        ]}
      />

      {/* 2. BRAND & STANDARDS STRIP with DecryptedText and CountUp */}
      <section className="bg-white text-[#2A2124] py-10 border-b border-[#B76E79]/20 shadow-xs">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center divide-y sm:divide-y-0 sm:divide-x divide-[#B76E79]/20">
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block">
                <DecryptedText text="Bioline Jatò" />
              </span>
              <p className="text-xs text-[#5E5054] font-medium mt-0.5">Italy Certified Partner</p>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block">
                <DecryptedText text="Health Canada" />
              </span>
              <p className="text-xs text-[#5E5054] font-medium mt-0.5">Approved Protocol</p>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block">
                <DecryptedText text="Celluma LED" />
              </span>
              <p className="text-xs text-[#5E5054] font-medium mt-0.5">Phototherapy Light</p>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block">
                <DecryptedText text="Autologous PRP" />
              </span>
              <p className="text-xs text-[#5E5054] font-medium mt-0.5">Centrifugation Care</p>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="font-display text-xl text-[#B76E79] font-semibold">
                <CountUp to={24} duration={2} suffix="+" />
              </span>
              <p className="text-xs text-[#5E5054] font-medium mt-0.5">Treatment Menu</p>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="font-display text-xl text-[#B76E79] font-semibold">
                <CountUp to={100} duration={2} suffix="%" />
              </span>
              <p className="text-xs text-[#5E5054] font-medium mt-0.5">Private Suites</p>
            </div>
          </div>

          {/* Partner & Formulation Accreditations Logo Row */}
          <div className="mt-8 pt-6 border-t border-[#B76E79]/15 flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 opacity-85">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#8F4954] font-bold">
              Atelier Formulation Partners:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              <img
                src={brandLogo1}
                alt="Brand Partner"
                className="h-7 sm:h-8 w-auto object-contain filter invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={brandLogo2}
                alt="Boutique Partner"
                className="h-7 sm:h-8 w-auto object-contain filter invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={brandLogo3}
                alt="Knightsbridge"
                className="h-7 sm:h-8 w-auto object-contain filter invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={brandLogo4}
                alt="Boutique Script"
                className="h-6 sm:h-7 w-auto object-contain filter invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={brandLogo5}
                alt="Rosaflora"
                className="h-7 sm:h-8 w-auto object-contain filter invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={brandLogo6}
                alt="Clinical Formulation"
                className="h-7 sm:h-8 w-auto object-contain filter invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 FEATURE DISCIPLINES in Pure White Luxury Cards */}
      <section className="py-24 sm:py-32 bg-[#FAF5F3] border-b border-[#B76E79]/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="eyebrow text-[#8F4954] font-bold">
              Curated Atelier Collections
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-light text-[#2A2124]">
              Facials, Body &amp; Clinical Aesthetics
            </h2>
            <p className="text-sm leading-relaxed text-[#5E5054] font-normal">
              Explore four dedicated treatment disciplines crafted around formulation purity, anatomical facial precision, and unhurried luxury.
            </p>
          </div>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categorySuites.map((suite) => (
              <StaggerItem key={suite.title}>
                <LuxuryTiltCard maxTilt={5} className="h-full">
                  <div className="bg-white border border-[#B76E79]/20 p-6 flex flex-col justify-between h-full shadow-md hover:border-[#B76E79] hover:shadow-xl transition-all duration-300">
                    <div>
                      <div className="overflow-hidden h-48 border border-[#B76E79]/20 mb-6 relative">
                        <img
                          src={suite.image}
                          alt={suite.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-white/95 text-[#B76E79] text-[9px] uppercase tracking-widest px-2.5 py-0.5 font-bold border border-[#B76E79]/30">
                          {suite.roman}
                        </div>
                        <div className="absolute bottom-3 right-3 bg-[#B76E79] text-white text-[9px] uppercase tracking-widest px-2.5 py-0.5 font-bold">
                          {suite.count}
                        </div>
                      </div>

                      <h3 className="font-display text-2xl font-light text-[#2A2124] group-hover:text-[#B76E79] transition-colors">
                        {suite.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-[#5E5054] font-normal">
                        {suite.copy}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#B76E79]/15">
                      <Link
                        to={suite.href as any}
                        className="text-[10px] uppercase tracking-[0.18em] text-[#B76E79] font-bold flex items-center justify-between hover:underline"
                      >
                        <span>Explore Collection</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </LuxuryTiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 4. DERMACE-INSPIRED INTERACTIVE SKIN CONCERN MATCHER */}
      <section id="ritual-matcher" className="px-5 py-24 sm:px-8 sm:py-32 bg-white border-b border-[#B76E79]/20 text-[#2A2124]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl text-left mb-12">
            <div className="flex items-center gap-3">
              <Compass className="size-4 text-[#8F4954]" />
              <span className="eyebrow text-[#8F4954] font-bold">Interactive Concern &amp; Goal Matcher</span>
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl font-light text-[#2A2124]">
              Discover your bespoke ritual.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5E5054] font-normal">
              Select your primary skin or body objective below. Our atelier diagnostic reveals your recommended protocol, formulation actives, and duration.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Options List (Left Col) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block mb-3 pl-1 font-mono">
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
                      "w-full text-left p-4 transition-all duration-300 border flex items-center justify-between group cursor-pointer",
                      isSelected
                        ? "border-[#B76E79] bg-[#FAF5F3] text-[#2A2124] shadow-md ring-1 ring-[#B76E79]/40"
                        : "border-[#B76E79]/20 bg-white text-[#5E5054] hover:border-[#B76E79]/50 hover:bg-[#FAF5F3]/50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn("font-display text-lg", isSelected ? "text-[#B76E79] font-bold" : "text-[#B76E79]")}>
                        0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-medium tracking-wide">{opt.label}</span>
                    </div>
                    <ChevronRight
                      className={cn(
                        "size-4 transition-transform duration-200",
                        isSelected ? "translate-x-1 text-[#B76E79]" : "text-[#7D6F73] group-hover:translate-x-1"
                      )}
                    />
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Result Spotlight in Pure White Furniture Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDiagnostic.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <div className="bg-white border border-[#B76E79]/30 p-6 sm:p-8 shadow-xl relative overflow-hidden text-[#2A2124]">
                    <div className="grid gap-6 sm:grid-cols-12 items-start">
                      <div className="sm:col-span-5 overflow-hidden border border-[#B76E79]/25 relative group">
                        <img
                          src={activeDiagnostic.treatment.image}
                          alt={activeDiagnostic.treatment.name}
                          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest bg-white/95 text-[#B76E79] px-2.5 py-1 font-bold border border-[#B76E79]/30">
                          {activeDiagnostic.treatment.eyebrow}
                        </span>
                      </div>

                      <div className="sm:col-span-7 space-y-4">
                        <div>
                          <div className="flex items-baseline justify-between gap-2 border-b border-[#B76E79]/15 pb-2">
                            <h3 className="font-display text-2xl font-light text-[#2A2124]">
                              {activeDiagnostic.treatment.name}
                            </h3>
                            <span className="font-display text-2xl font-light text-[#B76E79]">
                              {activeDiagnostic.treatment.price}
                            </span>
                          </div>
                          <p className="text-[10px] uppercase tracking-wider text-[#7D6F73] mt-1 font-medium">
                            Duration: {activeDiagnostic.treatment.duration}
                          </p>
                        </div>

                        <p className="text-xs leading-relaxed text-[#5E5054] font-normal">
                          {activeDiagnostic.treatment.summary}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-[#B76E79]/15">
                          <span className="text-[9px] uppercase tracking-wider text-[#B76E79] font-bold block">
                            Formulation Actives &amp; Protocol:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {activeDiagnostic.treatment.actives.map((act) => (
                              <span
                                key={act}
                                className="text-[10px] bg-[#FAF5F3] px-2.5 py-1 border border-[#B76E79]/25 text-[#2A2124] font-medium"
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
                            className="h-10 rounded-none border-[#B76E79]/40 bg-white text-[9px] uppercase tracking-[0.16em] text-[#B76E79] hover:bg-[#FAF5F3] font-bold transition-all duration-300"
                          >
                            <Link to={activeDiagnostic.treatment.href as any}>
                              Ritual Details →
                            </Link>
                          </Button>
                          <Button
                            asChild
                            className="h-10 rounded-none bg-gradient-to-r from-[#C5838B] via-[#B76E79] to-[#8F4954] text-white text-[9px] uppercase tracking-[0.16em] font-bold transition-all duration-300 shadow-md hover:opacity-95"
                          >
                            <Link to="/appointment">
                              Reserve Ritual
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ASTRA & SKIN MED INSPIRED INTERACTIVE BEFORE & AFTER SLIDER */}
      <section className="py-24 sm:py-32 bg-[#FAF5F3] border-b border-[#B76E79]/20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="eyebrow text-[#8F4954] font-bold">
              Clinical Transformations
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#2A2124]">
              Real Clinical Refinement
            </h2>
            <p className="text-sm leading-relaxed text-[#5E5054] font-normal">
              Compare baseline vs post-protocol results. Drag the slider to observe dermal smoothing, pore refinement, and facial contour elevation.
            </p>
          </div>

          <div className="bg-white border border-[#B76E79]/25 p-4 sm:p-6 shadow-xl">
            <BeforeAfterInteractive
              beforeImage={facialImage}
              afterImage={advancedImage}
              title="Bioline 20% AHA Peeling & Dermal Rejuvenation"
              subtitle="4-week post-protocol cellular turnover & collagen firming"
            />
          </div>
        </div>
      </section>

      {/* 6. "DISCOVER A NEW YOU" PHILOSOPHY SPLIT */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#B76E79]/20 relative overflow-hidden text-[#2A2124]">
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
                <div className="border-2 border-[#B76E79]/35 bg-[#FAF5F3] p-3 shadow-2xl relative">
                  <img
                    src={aboutLumeImg}
                    alt="Lumé Aesthetics Botanical Formulation Philosophy"
                    className="w-full h-[460px] sm:h-[520px] object-cover transition-transform duration-700"
                  />

                  {/* Floating Pure White Glass Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 border border-[#B76E79]/40 p-5 shadow-2xl max-w-[220px] hidden sm:block text-[#2A2124] backdrop-blur-md">
                    <span className="text-[#8F4954] font-display text-3xl font-semibold block">
                      <CountUp to={100} suffix="%" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#2A2124] font-bold block mt-1">
                      Bespoke Formulations
                    </span>
                    <p className="text-[11px] text-[#5E5054] font-normal mt-1">
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
                <span className="eyebrow text-[#8F4954] font-bold">The Lumé Sanctuary</span>
                <span className="text-[#8F4954]/40 text-xs">•</span>
                <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-mono font-bold">Sherwood Park</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#2A2124] leading-[1.08]">
                DISCOVER A <span className="italic font-serif rose-gold-gradient-text font-semibold">RADIANT</span> YOU.
              </h2>

              <p className="text-sm leading-relaxed text-[#5E5054] font-normal">
                We believe your skin should reflect health, vitality, and balance. Lumé Aesthetics was founded as an unhurried haven where European botanical dermocosmetics converge with Health Canada certified clinical procedures.
              </p>

              {/* Spec Table */}
              <div className="pt-2 divide-y divide-[#B76E79]/15 text-xs">
                <div className="py-3 flex items-center justify-between">
                  <span className="font-bold uppercase tracking-wider text-[#8F4954] text-[10px]">Official Partner :</span>
                  <span className="text-[#2A2124] font-medium">Bioline Jatò Italy Certified</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="font-bold uppercase tracking-wider text-[#8F4954] text-[10px]">Clinical Injectors :</span>
                  <span className="text-[#2A2124] font-medium">Certified Medical Injectors &amp; Botox® Protocol</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="font-bold uppercase tracking-wider text-[#8F4954] text-[10px]">Sanctuary Privacy :</span>
                  <span className="text-[#2A2124] font-medium">100% Private 1-on-1 Treatment Lounges</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="font-bold uppercase tracking-wider text-[#8F4954] text-[10px]">Studio Location :</span>
                  <span className="text-[#2A2124] font-medium">2457 Broadmoor Blvd #121, Sherwood Park</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="h-11 rounded-none bg-[#8F4954] hover:bg-[#682230] text-white text-[10px] uppercase tracking-[0.18em] px-8 font-bold transition-all duration-300 shadow-md"
                >
                  <Link to="/about">Our Philosophy &amp; Team</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-none border-[#8F4954]/40 bg-white text-[10px] uppercase tracking-[0.18em] text-[#8F4954] hover:bg-[#FAF5F3] font-bold transition-all duration-300"
                >
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. SIGNATURE SPA PACKAGES in Pure White Furniture Cards */}
      <section className="py-24 sm:py-32 bg-[#FAF5F3] border-b border-[#B76E79]/20 text-[#2A2124]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="eyebrow text-[#8F4954] font-bold">
              Signature Spa Packages
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-light text-[#2A2124]">
              Your Perfect Package
            </h2>
            <p className="text-sm leading-relaxed text-[#5E5054] font-normal">
              Multi-hour head-to-toe luxury ceremonies crafted for milestone celebrations, bridal parties, or absolute restoration.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Package 1: You Deserve It! */}
            <LuxuryTiltCard maxTilt={5} className="h-full">
              <div className="bg-white border border-[#B76E79]/25 p-8 sm:p-10 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div>
                  <div className="flex justify-between items-baseline border-b border-[#B76E79]/15 pb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-bold">
                        2 Hour Ceremony
                      </span>
                      <h3 className="font-display text-3xl font-light text-[#2A2124] mt-1">You Deserve It!</h3>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-4xl font-semibold text-[#8F4954]">$265</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-[#5E5054] font-normal">
                    A deeply restorative head-to-toe package combining custom facial therapy, green coffee body contouring, and therapeutic LED light.
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#B76E79]/15 space-y-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-bold block">
                      Included In Package:
                    </span>
                    <ul className="space-y-2.5 text-xs text-[#2A2124]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#8F4954] shrink-0" />
                        <span>Custom Bioline Facial (1 Hour)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#8F4954] shrink-0" />
                        <span>Coffee Shape Body Treatment (1 Hour)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#8F4954] shrink-0" />
                        <span>Celluma LED Light Healing Therapy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#8F4954] shrink-0" />
                        <span>Complimentary Organic Herbal Tea Service</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#B76E79]/15">
                  <MagneticButton strength={0.2} pullStrength={0.2}>
                    <Button
                      asChild
                      className="w-full h-12 rounded-none bg-[#8F4954] hover:bg-[#682230] text-white text-[10px] uppercase tracking-[0.18em] font-bold transition-all duration-300 shadow-md"
                    >
                      <Link to="/appointment">
                        Reserve Package ($265)
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </LuxuryTiltCard>

            {/* Package 2: Queen For A Day! */}
            <LuxuryTiltCard maxTilt={5} className="h-full">
              <div className="bg-white border-2 border-[#B76E79]/40 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative h-full">
                <div className="absolute top-0 right-0 bg-[#8F4954] text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-bold z-10">
                  Royal Flagship
                </div>
                <div>
                  <div className="flex justify-between items-baseline border-b border-[#B76E79]/15 pb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-bold">
                        3 Hour Luxury Ritual
                      </span>
                      <h3 className="font-display text-3xl font-light text-[#2A2124] mt-1">Queen For A Day!</h3>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-4xl font-semibold text-[#8F4954]">$395</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-[#5E5054] font-normal">
                    The ultimate Lumé sanctuary experience. Three unhurried hours of complete head-to-toe sensory pampering and visible facial lift.
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#B76E79]/15 space-y-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-bold block">
                      Included In Package:
                    </span>
                    <ul className="space-y-2.5 text-xs text-[#2A2124]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#8F4954] shrink-0" />
                        <span>Seasonal Botanical Body Exfoliating Wrap</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#8F4954] shrink-0" />
                        <span>Bioline Lifting Code Non-Surgical Facelift</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#8F4954] shrink-0" />
                        <span>Therapeutic Warm Oil Scalp Treatment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#8F4954] shrink-0" />
                        <span>Luxe Foot Reflexology Exfoliation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-[#8F4954] shrink-0" />
                        <span>Full-Spectrum Celluma LED Phototherapy</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#B76E79]/15">
                  <MagneticButton strength={0.25} pullStrength={0.25}>
                    <Button
                      asChild
                      className="w-full h-12 rounded-none bg-gradient-to-r from-[#8F4954] via-[#A35260] to-[#7A2838] hover:from-[#7A2838] hover:to-[#682230] text-white text-[10px] uppercase tracking-[0.18em] hover:opacity-95 shadow-lg font-bold transition-all duration-300"
                    >
                      <Link to="/appointment">
                        Reserve Royal Day ($395)
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </LuxuryTiltCard>
          </div>

        </div>
      </section>

      {/* 8. GUEST REVIEWS / TESTIMONIALS in Pure White Furniture Cards */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 bg-white border-b border-[#B76E79]/20 text-[#2A2124]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="eyebrow text-[#8F4954] font-bold">
                Verified Guest Experiences
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight text-[#2A2124]">
                Words from our guests.
              </h2>
              <p className="text-sm leading-relaxed text-[#5E5054] font-normal">
                Discover why clients trust Lumé Aesthetics for restorative skin rituals, bridal beauty, and clinical precision in Sherwood Park.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-none border-[#8F4954]/40 bg-[#FAF5F3] px-6 text-[10px] uppercase tracking-[0.16em] text-[#8F4954] hover:bg-[#8F4954] hover:text-white font-bold transition-all duration-300"
                >
                  <Link to="/contact">Speak With Our Specialists</Link>
                </Button>
              </div>
            </div>

            <StaggerContainer className="lg:col-span-7 grid gap-6">
              {clientStories.map((story) => (
                <StaggerItem key={story.author}>
                  <LuxuryTiltCard maxTilt={3}>
                    <div className="bg-[#FAF5F3] border border-[#B76E79]/25 p-6 sm:p-7 space-y-3 relative shadow-md hover:shadow-xl hover:border-[#B76E79]/50 transition-all duration-300">
                      <div className="flex items-center gap-1 text-[#8F4954]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-3.5 fill-[#8F4954] text-[#8F4954]" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#2A2124] font-normal italic">
                        "{story.quote}"
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-[#B76E79]/15 text-xs">
                        <span className="font-bold text-[#2A2124]">{story.author}</span>
                        <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-bold">
                          {story.ritual}
                        </span>
                      </div>
                    </div>
                  </LuxuryTiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 9. CTA BANNER in Dusty Pink & Rose Gold */}
      <section className="relative px-5 py-24 text-center sm:px-8 sm:py-32 bg-gradient-to-b from-[#FAF5F3] via-[#F4E8E5] to-[#EEDBD7] text-[#2A2124] border-t border-[#B76E79]/20 overflow-hidden">
        {/* Floating atmospheric glow */}
        <FloatingOrb
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-[#E8C5C8]/35"
          duration={10}
          distance={20}
        />

        <ScrollReveal direction="up" className="mx-auto max-w-3xl space-y-6 relative z-10">
          <RotatingBadge
            text="RESERVE SANCTUARY • LUMÉ AESTHETICS • "
            href="tel:+17804108278"
            size={110}
            className="mx-auto bg-white border border-[#B76E79]/40 shadow-xl rounded-full text-[#2A2124]"
          />

          <span className="eyebrow text-[#8F4954] text-[11px] block font-bold">
            Your Time at Lumé
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-light text-[#2A2124] leading-tight">
            Begin with a personal consultation.
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-[#5E5054] text-sm sm:text-base font-normal">
            Share what you would like to address. Our dermal specialists and clinical practitioners will design a tailored roadmap for your skin and wellbeing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton strength={0.25} pullStrength={0.25}>
              <Button
                asChild
                className="h-12 rounded-none bg-gradient-to-r from-[#8F4954] via-[#A35260] to-[#7A2838] hover:from-[#7A2838] hover:to-[#682230] text-white px-10 text-xs uppercase tracking-[0.18em] shadow-lg font-bold w-full sm:w-auto transition-all duration-300 hover:opacity-95"
              >
                <a href="tel:+17804108278">Studio Desk: (780) 410-8278</a>
              </Button>
            </MagneticButton>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-none border-[#8F4954] bg-white px-10 text-xs uppercase tracking-[0.18em] text-[#8F4954] hover:bg-[#FAF5F3] font-bold transition-all duration-300 shadow-xs"
            >
              <Link to="/contact">Book Atelier Visit</Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}