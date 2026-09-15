export type Treatment = {
  name: string;
  duration?: string;
  price?: string;
  summary: string;
  includedItems?: string[];
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
      },
      {
        name: "Lumé Prima Glow",
        duration: "60 min",
        price: "$135",
        summary: "Brightening 20% AHA peel ritual to improve hyperpigmentation, fine lines, scarring, and impurities for sensitive and all skin types.",
      },
      {
        name: "Lumé Radiance C Facial",
        duration: "60 min",
        price: "$145",
        summary: "Concentrated 20% Vitamin C treatment restoring luminosity, elasticity, and firmness while preventing glycation.",
      },
      {
        name: "Lumé Collagen Lifting Facial",
        duration: "75 min",
        price: "$195",
        summary: "Event-ready Bioline Lifting Code facial pairing advanced massage and microcurrent therapy for visibly lifted, youthful skin.",
      },
      {
        name: "Lumé Acne Purify Ritual",
        duration: "60 min",
        price: "$125",
        summary: "Deep cleansing, extractions, high frequency, blue LED therapy, and lymphatic drainage for pure, clear skin.",
      },
      {
        name: "Lumé Hydra Glow Treatment",
        duration: "60 min",
        price: "$150",
        summary: "Hydra dermabrasion, skin scrubber cleansing, radio frequency, facial massage, and spray infusion deep serum delivery.",
      },
      {
        name: "Lumé Sculpt & Renew Body Treatment",
        duration: "60 min",
        price: "$145",
        summary: "Bioline professional Retinol Lift body renewal treatment for cellular renewal, improved skin texture, tone, and firmness.",
      },
      {
        name: "Lumé Mocha Contour",
        duration: "60 min",
        price: "$145",
        summary: "Bioline Jatò Coffee Shape paired with rhythmic Body Gua Sha massage to promote circulation, lymphatic drainage, and sculpting.",
      },
      {
        name: "Lumé Aura Infusion Treatment",
        duration: "60 min",
        price: "$199",
        summary: "AKA Glass Skin Facial. High purity oxygen, negative-ion dome infusion, personalized serums, and LED light therapy.",
      },
      {
        name: "Lumé Signature Dermaplaning",
        duration: "30 min",
        price: "$75",
        summary: "Gentle resurfacing to remove surface buildup and fine facial hair (peach fuzz), followed by a soothing mask, hydration, and SPF.",
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
      },
      {
        name: "Lumé Polished",
        duration: "90 min",
        price: "Starting from $65",
        summary: "Customized shapes, lengths, colours, and nail art for an impeccably finished, statement set.",
      },
      {
        name: "Lumé Lash Couture",
        duration: "60 min",
        price: "$99",
        summary: "Lash Lift + Tint creating darker-looking, fuller, and naturally defined lashes without extensions.",
      },
      {
        name: "Lumé Silk Body Waxing",
        price: "Starting from $45",
        summary: "Signature body waxing experience designed to leave skin soft, smooth, and impeccably groomed with maximum comfort.",
      },
      {
        name: "Lumé Precision Threading",
        price: "Starting from $25",
        summary: "Delicate eyebrow shaping and upper-lip threading performed with meticulous attention to detail for clean definition.",
      },
      {
        name: "Lumé Henna Artistry",
        price: "Starting from $50",
        summary: "Bespoke henna from minimalist modern details to intricate traditional creations for weddings, celebrations, and special occasions.",
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
      },
      {
        name: "Lumé Dermal Fillers",
        price: "Starting from $550",
        summary: "Personalized injectable treatments to restore or add volume and subtly enhance facial contours.",
      },
      {
        name: "Lumé PRP Microneedling",
        duration: "60 min",
        price: "$450",
        summary: "Advanced skin-renewal combining controlled microchanneling with platelet-rich plasma prepared from your own blood.",
      },
      {
        name: "Lumé Exosome Microneedling",
        duration: "60 min",
        price: "$550",
        summary: "Sophisticated microneedling experience paired with exosome-based topical formulations for radiance and texture.",
      },
      {
        name: "Lumé Bright Teeth Whitening",
        duration: "45 min",
        price: "$199",
        summary: "Professional cosmetic whitening experience designed to reduce surface staining for a luminous smile.",
      },
      {
        name: "Lumé Infusion Therapies",
        duration: "45 min",
        price: "Starting from $175",
        summary: "Personalized IV wellness therapies administered following appropriate health screening and clinical assessment.",
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
  },
  {
    name: "Celluma Add-on for Acne",
    duration: "30 min",
    price: "$55",
    summary: "Blue LED light therapy to destroy acne-causing bacteria, clear blemishes, and prevent future breakouts.",
  },
];

export const teamMembers = [
  {
    name: "Lenda Murray",
    role: "Founder & CEO",
    specialty: "Aesthetic Direction & Master Treatments",
    bio: "Pioneering holistic and clinical beauty experiences with over 15 years of industry leadership.",
  },
  {
    name: "Emely Jonson",
    role: "Manicure Expert",
    specialty: "Nail Art & Lumé Polished Sets",
    bio: "Specializing in precise nail shaping, custom couture art, and long-lasting luxury manicure rituals.",
  },
  {
    name: "Arika Murray",
    role: "Beautician & Skin Specialist",
    specialty: "Facial Rituals & Glow Therapies",
    bio: "Dedicated to skin barrier preservation, active botanicals, and personalized facial rejuvenation.",
  },
  {
    name: "Lola Jonson",
    role: "Spa Specialist",
    specialty: "Body Contour & Gua Sha Rituals",
    bio: "Expert in lymphatic drainage, body sculpting, and sensory relaxation experiences.",
  },
  {
    name: "Rose Marian",
    role: "Massage Expert",
    specialty: "Therapeutic Bodywork & Reflexology",
    bio: "Combines ancient bodywork traditions with modern relief techniques for deep restoration.",
  },
];