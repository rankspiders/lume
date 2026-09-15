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
  detailedDescription?: string;
  keyBenefits?: string[];
  procedureSteps?: string[];
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
    detailedDescription: "Designed for ultimate relaxation and total rejuvenation. This 2-hour experience blends customized facial hydration, Jatò Coffee body sculpting, and therapeutic Celluma LED phototherapy to awaken dull skin, soothe muscle tension, and restore inner vitality.",
    keyBenefits: ["Comprehensive facial & body transformation", "Promotes deep lymphatic fluid drainage & relaxation", "Full-spectrum Celluma LED phototherapy for cellular repair"],
    procedureSteps: ["Bespoke Bioline Facial Cleanse & Hydration", "Jatò Coffee Shape Body Contour Wrap", "Rhythmic Body Gua Sha Lymphatic Massage", "Therapeutic Celluma LED Light Healing"],
    includedItems: ["Custom Facial (1 hr)", "Coffee Shape Body Treatment (1 hr)", "Celluma LED Therapy"],
    image: imgYouDeserveIt,
  },
  {
    name: "Queen For A Day!",
    duration: "3 hours",
    price: "$395",
    summary: "The ultimate head-to-toe luxury experience designed for total renewal, special events, or bespoke self-care.",
    detailedDescription: "The flagship Lumé sanctuary package. Spanning 3 unhurried hours, this royal treatment includes a seasonal body exfoliating wrap, Lumé Lifting Code facial, deeply restorative scalp oil massage, soothing foot ritual, and Celluma LED therapy.",
    keyBenefits: ["Complete head-to-toe sensory pampering", "Visible facial lift & contour definition", "Deep scalp & foot reflexology relaxation"],
    procedureSteps: ["Seasonal Botanical Body Polish & Warm Wrap", "Bioline Lifting Code Non-Surgical Facelift", "Therapeutic Warm Oil Scalp Treatment", "Luxe Foot Reflexology Exfoliation", "Celluma LED Phototherapy Finish"],
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
        detailedDescription: "Designed for skin requiring intensive moisture restoration. This soothing ritual combines multi-molecular weight hyaluronic acid formulations with Bioline's signature nectar drop facial massage to penetrate deep skin layers, repair lipid barriers, and eliminate dehydration lines.",
        keyBenefits: ["Deep cellular hydration & barrier repair", "Instant plumping of fine dehydration lines", "Nectar drop lymphatic facial massage"],
        procedureSteps: ["Bioline Gentle Cleansing & Tonal Balance", "Warm Steamed Botanical Exfoliation", "Hyaluronic Nectar Drop Dermal Massage", "Hydra-Surge Cream Mask Application", "Finishing Moisture Lock & SPF Protection"],
        image: imgAquaLuxe,
      },
      {
        name: "Lumé Prima Glow",
        duration: "60 min",
        price: "$135",
        summary: "Brightening 20% AHA peel ritual to improve hyperpigmentation, fine lines, scarring, and impurities for sensitive and all skin types.",
        detailedDescription: "A gentle yet highly efficacious chemical resurfacing treatment utilizing 20% Alpha Hydroxy Acids (AHA) derived from glycolic, lactic, and mandelic botanicals. Safely dissolves surface dead skin cells to reveal glowing, uniform complexion.",
        keyBenefits: ["Targeted hyperpigmentation & dark spot fading", "Refined skin texture & reduced pore visibility", "Safe resurfacing suitable even for sensitive barrier profiles"],
        procedureSteps: ["Deep Pore Enzyme Pre-Purify", "20% Bioline AHA Resurfacing Solution Application", "Calming Neutralizing Thermal Compress", "Cellular Repair Conditioning Serum", "Restorative Barrier Cream & Broad-Spectrum Sunscreen"],
        image: imgPrimaGlow,
      },
      {
        name: "Lumé Radiance C Facial",
        duration: "60 min",
        price: "$145",
        summary: "Concentrated 20% Vitamin C treatment restoring luminosity, elasticity, and firmness while preventing glycation.",
        detailedDescription: "An antioxidant powerhouse ritual featuring stabilized 20% L-Ascorbic Acid and botanical Vitamin C complexes. Fights oxidative stress, inhibits collagen degradation, and brightens dull, fatigued skin affected by environmental exposure.",
        keyBenefits: ["High-potency antioxidant protection against urban pollutants", "Boosts natural collagen synthesis for firming", "Luminous, glass-skin radiant complexion"],
        procedureSteps: ["Vitamin C Brightening Wash & Prep", "Resurfacing Micro-Peel Activator", "Concentrated 20% Serum Ultrasonic Infusion", "Radiance C Alginate Rubberizing Mask", "Illuminating Firming Fluid Application"],
        image: imgRadianceC,
      },
      {
        name: "Lumé Collagen Lifting Facial",
        duration: "75 min",
        price: "$195",
        summary: "Event-ready Bioline Lifting Code facial pairing advanced massage and microcurrent therapy for visibly lifted, youthful skin.",
        detailedDescription: "Lumé's premier non-surgical facelift ritual. Combines Bioline Jatò Lifting Code bio-architectural formulations, marine collagen matrices, and targeted facial contouring techniques to re-sculpt facial features, tighten jawline definition, and smooth deep expression lines.",
        keyBenefits: ["Visible immediate cheekbone & jawline lift", "Stimulates structural elastin & collagen production", "Ideal event-prep treatment with zero downtime"],
        procedureSteps: ["Triple-Action Purifying Cleanse", "Bioline Lifting Code Bio-Serum Application", "Sculpting Manual Facial Contouring Massage", "3D Collagen Hydro-Matrix Mask Treatment", "Microcurrent Tone Firming & Lift Seal"],
        image: imgCollagenLifting,
      },
      {
        name: "Lumé Acne Purify Ritual",
        duration: "60 min",
        price: "$125",
        summary: "Deep cleansing, extractions, high frequency, blue LED therapy, and lymphatic drainage for pure, clear skin.",
        detailedDescription: "A targeted therapeutic treatment specifically formulated for congested, oily, or acne-prone skin profiles. Combines salicylic acid pore decongestion, precision hygienic extractions, high-frequency anti-bacterial stimulation, and soothing Blue LED light.",
        keyBenefits: ["Destroys acne-causing P. acnes bacteria", "Decongests clogged pores & blackheads", "Reduces inflammation, redness & post-blemish marks"],
        procedureSteps: ["Salicylic Pore Decongestant Cleansing", "Warm Ozonated Steam & Precision Extractions", "High-Frequency Thermal Disinfection", "Blue Light Celluma LED Therapy", "Sebum-Balancing Mattifying Hydrators"],
        image: imgAcnePurify,
      },
      {
        name: "Lumé Hydra Glow Treatment",
        duration: "60 min",
        price: "$150",
        summary: "Hydra dermabrasion, skin scrubber cleansing, radio frequency, facial massage, and spray infusion deep serum delivery.",
        detailedDescription: "Multi-technology dermal infusion combining vortex hydro-exfoliation, ultrasonic cavitation scrubbing, gentle radiofrequency skin tightening, and pressurized oxygen spray atomization to deliver customized nutrient serums directly into active epidermal layers.",
        keyBenefits: ["Pore vacuum extraction without mechanical trauma", "Deeper serum penetration via pressurized oxygen atomization", "Instant glassy skin polish and hydration"],
        procedureSteps: ["Hydro-Vortex AHA/BHA Exfoliation & Extraction", "Ultrasonic Skin Scrubber Deep Cleanse", "Pressurized Oxygen & Peptide Atomization Spray", "Radiofrequency Thermal Collagen Stimulation", "Cooling Globe Massage & Barrier Protection"],
        image: imgHydraGlow,
      },
      {
        name: "Lumé Sculpt & Renew Body Treatment",
        duration: "60 min",
        price: "$145",
        summary: "Bioline professional Retinol Lift body renewal treatment for cellular renewal, improved skin texture, tone, and firmness.",
        detailedDescription: "An intense body rejuvenating experience utilizing Bioline professional retinol complexes and botanical firming agents. Encouraged cellular turnover on targeted body zones (arms, thighs, abdomen) to improve skin elasticity, smooth dimpling, and restore youthful skin bounce.",
        keyBenefits: ["Accelerates dermal cell renewal for soft, supple body skin", "Improves elasticity & firms sagging tissue", "Deeply hydrates rough elbow & knee textures"],
        procedureSteps: ["Exfoliating Retinol Body Scrub", "Targeted Firming Bio-Concentrate Application", "Thermo-Sculpting Wrap Application", "Restorative Nourishing Body Balm Finish"],
        image: imgSculptRenew,
      },
      {
        name: "Lumé Mocha Contour",
        duration: "60 min",
        price: "$145",
        summary: "Bioline Jatò Coffee Shape paired with rhythmic Body Gua Sha massage to promote circulation, lymphatic drainage, and sculpting.",
        detailedDescription: "A specialized detoxifying and contouring body ritual harnessing green coffee bean extracts, caffeine complexes, and traditional Bian stone Gua Sha bodywork. Stimulates micro-circulation, breaks down water retention, and smooths cellulitic texture.",
        keyBenefits: ["Promotes deep lymphatic fluid drainage & reduces bloating", "Visibly smoothes skin dimpling & uneven texture", "Energizes body micro-circulation"],
        procedureSteps: ["Dry Body Brushing Micro-Stimulation", "Bioline Coffee Shape Caffeine Wrap Application", "Rhythmic Body Gua Sha Lymphatic Massage", "Firming Contour Body Elixir Application"],
        image: imgMochaContour,
      },
      {
        name: "Lumé Aura Infusion Treatment",
        duration: "60 min",
        price: "$199",
        summary: "AKA Glass Skin Facial. High purity oxygen, negative-ion dome infusion, personalized serums, and LED light therapy.",
        detailedDescription: "The ultimate red-carpet 'Glass Skin' experience. Uses a specialized hyperbaric hyper-oxygen dome delivering 90%+ pure negative-ion oxygen directly to the skin surface, paired with custom bioactive ampoules and full-spectrum LED light therapy.",
        keyBenefits: ["Stimulates cellular respiration & collagen production", "Rebalances skin pH and neutralizes free radicals", "Unrivalled luminous, glass-skin glow"],
        procedureSteps: ["Bio-Cellular Cleansing & Enzymatic Polish", "Targeted Active Ampoule Dermal Application", "90% Pure Oxygen Negative-Ion Dome Inhalation & Infusion", "Full-Spectrum Celluma LED Phototherapy", "Barrier Repair Seal & UV Shield"],
        image: imgAuraInfusion,
      },
      {
        name: "Lumé Signature Dermaplaning",
        duration: "30 min",
        price: "$75",
        summary: "Gentle resurfacing to remove surface buildup and fine facial hair (peach fuzz), followed by a soothing mask, hydration, and SPF.",
        detailedDescription: "A surgical-grade mechanical exfoliation procedure that gently abrades the outermost layer of dead skin cells and vellus hair (peach fuzz). Leaves the skin silky smooth, enhancing skincare product absorption and flawless makeup application.",
        keyBenefits: ["Immediate smooth canvas for makeup application", "Enhances skincare ingredient penetration by up to 70%", "Non-invasive with immediate glowing results"],
        procedureSteps: ["Antiseptic Dermal Preparation & Cleansing", "Precision Sterile Dermaplaning Resurfacing", "Soothing Botanical Hydrogel Cooling Mask", "Nourishing Barrier Lipid Seal & Mineral Sunscreen"],
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
        detailedDescription: "Bespoke beauty artistry customized to highlight your natural bone structure and skin tone. Available in Soft Glam, High-Definition Full Glam, and Bridal Couture packages with premium luxury cosmetics.",
        keyBenefits: ["Long-wearing, camera-ready finish", "Customized shade matching & skin prep", "Includes luxury false lash application"],
        procedureSteps: ["Skin Prep & Hydration Primer", "Custom Foundation & Contour Sculpting", "Eye Artistry & Couture Lash Placement", "Setting Mist Lock & Touch-Up Kit"],
        image: imgGlamChapter,
      },
      {
        name: "Lumé Polished",
        duration: "90 min",
        price: "Starting from $65",
        summary: "Customized shapes, lengths, colours, and nail art for an impeccably finished, statement set.",
        detailedDescription: "High-precision nail artistry service offering structured gel manicures, custom nail shaping, cuticle therapy, and hand-painted bespoke art.",
        keyBenefits: ["Non-chipping long wear up to 4 weeks", "Strengthens & protects natural nail beds", "Custom hand-painted nail designs"],
        procedureSteps: ["Precision Cuticle Care & Nail Shaping", "Dehydrating & Strengthening Base Layer", "Multi-Coat Gel Polish / Artistry", "Nourishing Botanical Cuticle Oil Massage"],
        image: imgPolishedNails,
      },
      {
        name: "Lumé Lash Couture",
        duration: "60 min",
        price: "$99",
        summary: "Lash Lift + Tint creating darker-looking, fuller, and naturally defined lashes without extensions.",
        detailedDescription: "A gentle keratine-infused lifting treatment that curls and darkens natural eyelashes from root to tip, giving the appearance of longer, fuller lashes for 6-8 weeks.",
        keyBenefits: ["Maintenance-free beauty with zero mascara needed", "Nutrient keratine infusion strengthens natural lashes", "Lasts 6 to 8 weeks"],
        procedureSteps: ["Eye Area Cleansing & Shield Placement", "Gentle Lash Curvature Lift Solution", "Keratin Tint & Color Enhancement", "Nourishing Botanical Conditioning Serum"],
        image: imgLashCouture,
      },
      {
        name: "Lumé Silk Body Waxing",
        price: "Starting from $45",
        summary: "Signature body waxing experience designed to leave skin soft, smooth, and impeccably groomed with maximum comfort.",
        detailedDescription: "Low-temperature hypoallergenic wax formulations infused with soothing chamomile and tea tree oils for ultra-gentle, thorough hair removal.",
        keyBenefits: ["Removes hair from the root for up to 4 weeks smoothness", "Soothes sensitive skin with reduced redness", "Prevents ingrown hair formation"],
        procedureSteps: ["Pre-Wax Cleansing & Antiseptic Prep", "Gentle Low-Temp Silk Wax Application", "Precision Soothing Hair Removal", "Post-Wax Calming Oil & Cooling Lotion"],
        image: imgBodyWaxing,
      },
      {
        name: "Lumé Precision Threading",
        price: "Starting from $25",
        summary: "Delicate eyebrow shaping and upper-lip threading performed with meticulous attention to detail for clean definition.",
        detailedDescription: "Traditional antibacterial cotton thread technique used to shape eyebrows and clean fine facial hair with millimeter-perfect precision.",
        keyBenefits: ["100% natural with zero chemicals or heat", "Ideal for sensitive skin using Retin-A or peels", "Creates crisp, defined eyebrow arches"],
        procedureSteps: ["Mapping & Eyebrow Arch Assessment", "Precision Threading Hair Removal", "Soothing Aloe Vera & Rosewater Compress"],
        image: imgThreading,
      },
      {
        name: "Lumé Henna Artistry",
        price: "Starting from $50",
        summary: "Bespoke henna from minimalist modern details to intricate traditional creations for weddings, celebrations, and special occasions.",
        detailedDescription: "100% organic, chemical-free henna paste hand-drawn by master artists for bridal celebrations, special events, or personal adornment.",
        keyBenefits: ["Natural deep rich mahogany stain", "100% organic & skin-safe ingredients", "Custom modern or traditional motifs"],
        procedureSteps: ["Skin Cleansing & Eucalyptus Oil Prep", "Hand-Drawn Intricate Henna Artistry", "Lemon-Sugar Sealant & Drying Care"],
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
        detailedDescription: "Medical-grade neuromodulator injections administered by certified nurse injectors to soften forehead furrows, crow's feet, and frown lines while preserving natural expression.",
        keyBenefits: ["Softens dynamic wrinkles & expression lines", "Prevents deep permanent crease formation", "Quick 15-minute treatment with zero downtime"],
        procedureSteps: ["Facial Muscle Assessment & Mapping", "Targeted Micro-Injections", "Post-Care Guidance & 2-Week Follow-Up"],
        image: imgBotox,
      },
      {
        name: "Lumé Dermal Fillers",
        price: "Starting from $550",
        summary: "Personalized injectable treatments to restore or add volume and subtly enhance facial contours.",
        detailedDescription: "Hyaluronic acid dermal fillers targeted to restore lost mid-face volume, refine cheekbones, plump lips, and define jawline contours.",
        keyBenefits: ["Immediate subtle contour enhancement", "Restores lost mid-face volume & cheek definition", "Results last 9 to 18 months"],
        procedureSteps: ["Anatomical Facial Mapping & Numbing", "Precision Hyaluronic Acid Injection", "Sculpting & Symmetry Verification"],
        image: imgDermalFillers,
      },
      {
        name: "Lumé PRP Microneedling",
        duration: "60 min",
        price: "$450",
        summary: "Advanced skin-renewal combining controlled microchanneling with platelet-rich plasma prepared from your own blood.",
        detailedDescription: "AKA Vampire Facial. Utilizes autologous Platelet-Rich Plasma (PRP) harvested from your blood, infused via medical microneedling to trigger intense collagen regeneration.",
        keyBenefits: ["Harnesses your body's natural growth factors", "Dramatically improves acne scars & pore size", "Smooths skin texture & fine lines"],
        procedureSteps: ["Comfort Numbing Cream Application", "Centrifugation & PRP Plasma Preparation", "Medical Microneedling & PRP Infusion", "Cooling PRP Hydrogel Mask"],
        image: imgPRPMicroneedling,
      },
      {
        name: "Lumé Exosome Microneedling",
        duration: "60 min",
        price: "$550",
        summary: "Sophisticated microneedling experience paired with exosome-based topical formulations for radiance and texture.",
        detailedDescription: "Next-generation regenerative aesthetic treatment pairing automated micro-channeling with pure stem-cell derived exosomes containing billions of growth factors and peptides.",
        keyBenefits: ["100x more concentrated growth factors than PRP", "Accelerates skin healing & collagen synthesis", "Reduces redness & hyperpigmentation"],
        procedureSteps: ["Topical Anesthetic Application", "Precision Automated Microneedling", "Concentrated Exosome Complex Infusion", "Calming Regenerative Post-Procedure Shield"],
        image: imgExosomeMicroneedling,
      },
      {
        name: "Lumé Bright Teeth Whitening",
        duration: "45 min",
        price: "$199",
        summary: "Professional cosmetic whitening experience designed to reduce surface staining for a luminous smile.",
        detailedDescription: "Enamel-safe hydrogen peroxide gel activated by blue LED cold-light technology to lift coffee, tea, and red wine staining up to 8 shades lighter.",
        keyBenefits: ["Lifts stubborn stains up to 8 shades lighter", "Enamel-safe with minimal sensitivity", "Instant 45-minute visible results"],
        procedureSteps: ["Gingival Barrier Protection Application", "Medical-Grade Whitening Gel Application", "3 x 15 Minute Blue LED Light Activation cycles"],
        image: imgTeethWhitening,
      },
      {
        name: "Lumé Infusion Therapies",
        duration: "45 min",
        price: "Starting from $175",
        summary: "Personalized IV wellness therapies administered following appropriate health screening and clinical assessment.",
        detailedDescription: "Custom formulated intravenous vitamin cocktails (Glutathione, Vitamin C, B-Complex, Magnesium) delivered directly into the bloodstream for 100% cellular absorption.",
        keyBenefits: ["100% direct cellular absorption of vitamins", "Boosts energy, immunity & systemic radiance", "Rehydrates & detoxifies body tissue"],
        procedureSteps: ["Clinical Health Screening & Vitals Check", "Gentle Intravenous Access Setup", "45-Minute Relaxing IV Drip Infusion"],
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
    detailedDescription: "FDA-cleared medical LED phototherapy delivering red and near-infrared light energy to boost ATP production, firm sagging tissue, and smooth fine lines.",
    keyBenefits: ["Stimulates dermal fibroblast cells", "Increases collagen & elastin production"],
    procedureSteps: ["Clean Skin Preparation", "30-Minute Celluma Red Light Panel Exposure"],
    image: imgCollagenLifting,
  },
  {
    name: "Celluma Add-on for Acne",
    duration: "30 min",
    price: "$55",
    summary: "Blue LED light therapy to destroy acne-causing bacteria, clear blemishes, and prevent future breakouts.",
    detailedDescription: "Targeted blue wavelength LED light therapy that penetrates deep into hair follicles to neutralize P. acnes bacteria and calm active breakout inflammation.",
    keyBenefits: ["Kills acne bacteria without dry irritation", "Reduces active breakout redness"],
    procedureSteps: ["Deep Cleanse & Eye Protection", "30-Minute Celluma Blue Light Panel Exposure"],
    image: imgAcnePurify,
  },
];