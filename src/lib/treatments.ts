import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import advancedImage from "@/assets/advanced-aesthetics.jpg";
import heroImage from "@/assets/lume-hero.jpg";

// Import downloaded local treatment photography assets
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

import imgYouDeserveIt from "@/assets/treatments/you-deserve-it.jpg";
import imgQueenForADay from "@/assets/treatments/queen-for-a-day.jpg";

export type Treatment = {
  name: string;
  duration?: string;
  price?: string;
  summary: string;
  includedItems?: string[];
  image: string;
};

export type TreatmentGroup = {
  eyebrow: string;
  title: string;
  introduction: string;
  treatments: Treatment[];
};

export const spaPackages: Treatment[] = [
  {
    name: "You Deserve It!",
    duration: "2 hours",
    price: "$265",
    summary: "A luxurious 2-hour pampering ritual combining deep facial rejuvenation, body sculpting, and therapeutic LED light.",
    includedItems: ["Custom Facial (1 hr)", "Coffee Shape Body Treatment (1 hr)", "Celluma LED Therapy"],
    image: imgYouDeserveIt,
  },
  {
    name: "Queen For A Day!",
    duration: "3 hours",
    price: "$395",
    summary: "The ultimate head-to-toe luxury experience designed for total renewal, special events, or bespoke self-care.",
    includedItems: [
      "Seasonal Body Treatment",
      "Lifting Code Facial",
      "Scalp Treatment",
      "Luxe Foot Ritual",
      "Celluma LED Therapy",
    ],
    image: imgQueenForADay,
  },
];

export const treatmentGroups: TreatmentGroup[] = [
  {
    eyebrow: "01 — Skin & body rituals",
    title: "Curated facial & body experiences",
    introduction: "Unhurried, considered treatments shaped around the condition of your skin and the way you want to feel.",
    treatments: [
      {
        name: "Lumé Aqua Luxe Facial",
        duration: "65 min",
        price: "$125",
        summary: "Tailored for skin needing deep moisturization. Features nectar drop massage, hyaluronic acid cream mask, and a firming finish.",
        image: imgAquaLuxe,
      },
      {
        name: "Lumé Prima Glow",
        duration: "60 min",
        price: "$135",
        summary: "Brightening 20% AHA peel ritual to improve hyperpigmentation, fine lines, scarring, and impurities for sensitive and all skin types.",
        image: imgPrimaGlow,
      },
      {
        name: "Lumé Radiance C Facial",
        duration: "60 min",
        price: "$145",
        summary: "Concentrated 20% Vitamin C treatment restoring luminosity, elasticity, and firmness while preventing glycation.",
        image: imgRadianceC,
      },
      {
        name: "Lumé Collagen Lifting Facial",
        duration: "75 min",
        price: "$195",
        summary: "Event-ready Bioline Lifting Code facial pairing advanced massage and microcurrent therapy for visibly lifted, youthful skin.",
        image: imgCollagenLifting,
      },
      {
        name: "Lumé Acne Purify Ritual",
        duration: "60 min",
        price: "$125",
        summary: "Deep cleansing, extractions, high frequency, blue LED therapy, and lymphatic drainage for pure, clear skin.",
        image: imgAcnePurify,
      },
      {
        name: "Lumé Hydra Glow Treatment",
        duration: "60 min",
        price: "$150",
        summary: "Hydra dermabrasion, skin scrubber cleansing, radio frequency, facial massage, and spray infusion deep serum delivery.",
        image: imgHydraGlow,
      },
      {
        name: "Lumé Sculpt & Renew Body Treatment",
        duration: "60 min",
        price: "$145",
        summary: "Bioline professional Retinol Lift body renewal treatment for cellular renewal, improved skin texture, tone, and firmness.",
        image: imgSculptRenew,
      },
      {
        name: "Lumé Mocha Contour",
        duration: "60 min",
        price: "$145",
        summary: "Bioline Jatò Coffee Shape paired with rhythmic Body Gua Sha massage to promote circulation, lymphatic drainage, and sculpting.",
        image: imgMochaContour,
      },
      {
        name: "Lumé Aura Infusion Treatment",
        duration: "60 min",
        price: "$199",
        summary: "AKA Glass Skin Facial. High purity oxygen, negative-ion dome infusion, personalized serums, and LED light therapy.",
        image: imgAuraInfusion,
      },
      {
        name: "Lumé Signature Dermaplaning",
        duration: "30 min",
        price: "$75",
        summary: "Gentle resurfacing to remove surface buildup and fine facial hair (peach fuzz), followed by a soothing mask, hydration, and SPF.",
        image: imgDermaplaning,
      },
    ],
  },
  {
    eyebrow: "02 — Beauty atelier",
    title: "Where beauty becomes an art",
    introduction: "Quietly polished beauty services, each tailored to your features, style, and occasion.",
    treatments: [
      {
        name: "Lumé The Glam Chapter",
        price: "Starting from $110",
        summary: "Bespoke makeup services tailored to enhance natural features. Soft Glam, Full Glam, Special Occasions, and Bridal & Event Makeup.",
        image: imgGlamChapter,
      },
      {
        name: "Lumé Polished",
        duration: "90 min",
        price: "Starting from $65",
        summary: "Customized shapes, lengths, colours, and nail art for an impeccably finished, statement set.",
        image: imgPolishedNails,
      },
      {
        name: "Lumé Lash Couture",
        duration: "60 min",
        price: "$99",
        summary: "Lash Lift + Tint creating darker-looking, fuller, and naturally defined lashes without extensions.",
        image: imgLashCouture,
      },
      {
        name: "Lumé Silk Body Waxing",
        price: "Starting from $45",
        summary: "Signature body waxing experience designed to leave skin soft, smooth, and impeccably groomed with maximum comfort.",
        image: imgBodyWaxing,
      },
      {
        name: "Lumé Precision Threading",
        price: "Starting from $25",
        summary: "Delicate eyebrow shaping and upper-lip threading performed with meticulous attention to detail for clean definition.",
        image: imgThreading,
      },
      {
        name: "Lumé Henna Artistry",
        price: "Starting from $50",
        summary: "Bespoke henna from minimalist modern details to intricate traditional creations for weddings, celebrations, and special occasions.",
        image: imgHennaArtistry,
      },
    ],
  },
  {
    eyebrow: "03 — Advanced aesthetics",
    title: "Where science meets beauty",
    introduction: "Personalized services begin with appropriate consultation, assessment, and a conversation about your aesthetic goals.",
    treatments: [
      {
        name: "Lumé Botox®",
        price: "$10 / unit",
        summary: "Customized injectable treatment designed to temporarily relax targeted facial muscles and soften expression lines.",
        image: imgBotox,
      },
      {
        name: "Lumé Dermal Fillers",
        price: "Starting from $550",
        summary: "Personalized injectable treatments to restore or add volume and subtly enhance facial contours.",
        image: imgDermalFillers,
      },
      {
        name: "Lumé PRP Microneedling",
        duration: "60 min",
        price: "$450",
        summary: "Advanced skin-renewal combining controlled microchanneling with platelet-rich plasma prepared from your own blood.",
        image: imgPRPMicroneedling,
      },
      {
        name: "Lumé Exosome Microneedling",
        duration: "60 min",
        price: "$550",
        summary: "Sophisticated microneedling experience paired with exosome-based topical formulations for radiance and texture.",
        image: imgExosomeMicroneedling,
      },
      {
        name: "Lumé Bright Teeth Whitening",
        duration: "45 min",
        price: "$199",
        summary: "Professional cosmetic whitening experience designed to reduce surface staining for a luminous smile.",
        image: imgTeethWhitening,
      },
      {
        name: "Lumé Infusion Therapies",
        duration: "45 min",
        price: "Starting from $175",
        summary: "Personalized IV wellness therapies administered following appropriate health screening and clinical assessment.",
        image: imgIVInfusion,
      },
    ],
  },
];

export const addOns: Treatment[] = [
  {
    name: "Celluma Add-on for Anti-aging",
    duration: "30 min",
    price: "$55",
    summary: "LED light therapy using scientifically proven wavelengths to stimulate fibroblasts, collagen, and elastin.",
    image: imgCollagenLifting,
  },
  {
    name: "Celluma Add-on for Acne",
    duration: "30 min",
    price: "$55",
    summary: "Blue LED light therapy to destroy acne-causing bacteria, clear blemishes, and prevent future breakouts.",
    image: imgAcnePurify,
  },
];