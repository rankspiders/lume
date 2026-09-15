import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Sparkles, ShieldCheck, Award, Leaf, Droplets, CheckCircle2, ArrowRight } from "lucide-react";

import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import advancedImage from "@/assets/advanced-aesthetics.jpg";
import heroImage from "@/assets/lume-hero.jpg";

import aboutLumeImg from "@/assets/lumeproject/about-lume-2.png";
import leaf13 from "@/assets/lumeproject/leaf-1-3.png";
import team1 from "@/assets/lumeproject/team-1-1.png";
import team2 from "@/assets/lumeproject/team-1-2.png";
import team3 from "@/assets/lumeproject/team-1-3.png";

import plump2 from "@/assets/competitors/plump-2.jpg";
import plump3 from "@/assets/competitors/plump-3.png";
import rejuva2 from "@/assets/competitors/rejuva-2.jpg";
import rejuva4 from "@/assets/competitors/rejuva-4.png";
import rejuva5 from "@/assets/competitors/rejuva-5.jpg";

import { HauteMarquee, LiveSuiteClock } from "@/components/luxury-motion";
import { PageIntro } from "@/components/site-shell";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { SpotlightCard, ShinyText, TiltedCard, CountUp, MagneticButton, BlurText } from "@/components/reactbits";

import brandLogo1 from "@/assets/lumeproject/b-2-1.png";
import brandLogo2 from "@/assets/lumeproject/b-2-2.png";
import brandLogo3 from "@/assets/lumeproject/b-2-3.png";
import brandLogo4 from "@/assets/lumeproject/b-2-4.png";
import brandLogo5 from "@/assets/lumeproject/b-2-5.png";
import brandLogo6 from "@/assets/lumeproject/b-2-6.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Atelier Story & Philosophy | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Discover Lumé’s bespoke approach to skin health, European botanical rituals, and advanced clinical aesthetics in Sherwood Park & Edmonton.",
      },
      { property: "og:title", content: "The Atelier Story | Lumé Aesthetics" },
      {
        property: "og:description",
        content: "A considered luxury beauty destination where European skincare heritage, clinical precision, and unhurried care meet.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const disciplines = [
  {
    role: "Clinical Medical Aesthetics",
    focus: "Botox®, Dermal Fillers, PRP & Exosome Microneedling",
    image: rejuva2,
    description: "Led by certified medical nurse injectors adhering strictly to Health Canada protocols. Every facial contour and neuromodulator placement begins with full skeletal and muscular anatomy mapping for naturally rested results.",
    credentials: ["Health Canada Certified", "Anatomical Facial Mapping", "Autologous PRP Centrifugation"],
  },
  {
    role: "Advanced Dermal Therapeutics",
    focus: "Bioline Jatò Italy AHA 20%, Collagen Lifting & Hydra-Infusions",
    image: rejuva5,
    description: "Specialized in cellular barrier restoration, anti-glycation Vitamin C therapies, and non-surgical bio-lifting. Formulated with Italian dermal biotechnologies that respect the natural skin mantle.",
    credentials: ["Certified Bioline Jatò Italy Partner", "Medical-Grade Peels", "Celluma LED Phototherapy"],
  },
  {
    role: "Beauty Atelier & Artistry",
    focus: "The Glam Chapter Makeup, Structured Gel Nails & Lash Couture",
    image: plump3,
    description: "Couture event beauty, structured Russian manicures, and keratin lash lifts executed with millimeter precision to highlight natural bone structure and personal style.",
    credentials: ["Bespoke Color Matching", "Hypoallergenic Silk Waxing", "Event & Bridal Artistry"],
  },
  {
    role: "Holistic Body & Wellness",
    focus: "Mocha Contour Gua Sha, Retinol Wraps & IV Vitamin Drips",
    image: bodyImage,
    description: "Full-body lymphatic drainage, green coffee contour wraps, and intravenous micronutrient therapy designed to restore systemic cellular energy and deep muscular relaxation.",
    credentials: ["Lymphatic Gua Sha Protocols", "Bio-Active Body Elixirs", "Clinical IV Hydration"],
  },
];

const masterPractitioners = [
  {
    name: "Geneva Sterling, RN",
    role: "Clinical Director & Lead Aesthetic Nurse",
    image: team1,
    bio: "12+ years specialized in facial anatomy, micro-cannula hyaluronic placement, and Health Canada clinical compliance.",
  },
  {
    name: "Dr. Alyssa Vane, MD",
    role: "Medical Aesthetics Consultant",
    image: team2,
    bio: "Consulting physician with expertise in non-surgical facial restructuring and autologous regenerative PRP therapies.",
  },
  {
    name: "Elena Rostova",
    role: "Master Dermal Clinician & Bioline Specialist",
    image: team3,
    bio: "Trained in northern Italy with Bioline Jatò laboratories, mastering bio-architectural lifting and chemical peel chemistry.",
  },
];

function AboutPage() {
  return (
    <div className="bg-[#FAF5F3] text-[#2A2124]">
      {/* Bespoke Editorial Hero in Dusty Pink Sanctuary */}
      <section className="relative overflow-hidden px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 border-b border-[#B76E79]/20 bg-gradient-to-b from-[#FAF5F3] via-[#F4E8E5] to-[#FAF5F3]">
        <div className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-[#E8C5C8]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em] text-[#8F4954]">
                  Monograph — The Lumé Story
                </span>
                <span className="h-px w-8 bg-[#B76E79]/40" />
                <span className="inline-flex items-center px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white border border-[#B76E79]/40 text-[#8F4954] shadow-xs">
                  EST. SHERWOOD PARK
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-[#2A2124] text-balance">
                Beauty, considered
                <br />
                <span className="italic font-serif text-[#8F4954] font-medium">from every angle.</span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base sm:leading-7 text-[#5E5054] font-normal leading-relaxed">
                Lumé Aesthetics was conceived as an antidote to the rushed, clinical med-spa experience. We combine centuries-old European botanical skincare heritage with cutting-edge non-invasive clinical aesthetics in an unhurried, private atelier sanctuary.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <LiveSuiteClock />
                <MagneticButton strength={0.2} pullStrength={0.2}>
                  <Button
                    asChild
                    className="h-11 rounded-none bg-gradient-to-r from-[#8F4954] via-[#A35260] to-[#7A2838] hover:from-[#7A2838] hover:to-[#682230] text-white px-7 text-xs uppercase tracking-[0.16em] hover:opacity-95 font-bold transition-all duration-300 shadow-md"
                  >
                    <Link to="/appointment">Reserve Private Suite</Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Bespoke 3D Tilted Architectural Hero Plate - Pure White Frame */}
            <div className="lg:col-span-5 relative">
              <TiltedCard rotateAmplitude={8} scaleOnHover={1.03}>
                <div className="border border-[#B76E79]/25 bg-white p-3 sm:p-4 shadow-soft-card relative">
                  <div className="overflow-hidden relative group">
                    <img
                      src={aboutLumeImg}
                      alt="Lumé bespoke botanical facial session"
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-[9px] uppercase tracking-widest text-[#E7B2A9] font-mono font-bold">
                        Haute Medispa Atelier
                      </span>
                      <p className="font-display text-xl text-white mt-1">
                        100% Private 1-on-1 Sanctuary Suites
                      </p>
                    </div>
                  </div>
                </div>
              </TiltedCard>

              {/* Floating Italian Bioline Seal - Pure White Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 border border-[#B76E79]/30 p-4 shadow-soft-card hidden sm:block text-[#2A2124] backdrop-blur-md">
                <span className="text-[9px] uppercase tracking-widest text-[#8F4954] font-bold block">
                  Official Partner
                </span>
                <p className="font-display text-lg text-[#8F4954] font-semibold">
                  Bioline Jatò Italy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Luxury Ticker */}
      <HauteMarquee />

      {/* Partner Accreditations Strip */}
      <section className="bg-white py-6 border-b border-[#B76E79]/20 shadow-xs">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-wrap items-center justify-between gap-6 opacity-85">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#8F4954] font-bold">
            Certified Formulations &amp; Industry Standards
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <img src={brandLogo1} alt="Brand Partner" className="h-6 sm:h-7 w-auto object-contain filter invert opacity-75 hover:opacity-100 transition-opacity" />
            <img src={brandLogo2} alt="Boutique" className="h-6 sm:h-7 w-auto object-contain filter invert opacity-75 hover:opacity-100 transition-opacity" />
            <img src={brandLogo3} alt="Knightsbridge" className="h-6 sm:h-7 w-auto object-contain filter invert opacity-75 hover:opacity-100 transition-opacity" />
            <img src={brandLogo4} alt="Boutique Script" className="h-5 sm:h-6 w-auto object-contain filter invert opacity-75 hover:opacity-100 transition-opacity" />
            <img src={brandLogo5} alt="Rosaflora" className="h-6 sm:h-7 w-auto object-contain filter invert opacity-75 hover:opacity-100 transition-opacity" />
            <img src={brandLogo6} alt="Clinical Formulation" className="h-6 sm:h-7 w-auto object-contain filter invert opacity-75 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 max-w-7xl mx-auto bg-[#FAF5F3] text-[#2A2124]">
        <div className="grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Decorative leaf motif */}
            <img
              src={leaf13}
              alt=""
              aria-hidden="true"
              className="absolute -top-10 -right-6 size-24 pointer-events-none animate-jump hidden sm:block z-20 opacity-80"
            />

            <div className="overflow-hidden border border-[#B76E79]/25 shadow-soft-card relative group bg-white p-2">
              <div className="overflow-hidden relative">
                <img
                  src={aboutLumeImg}
                  alt="Lumé bespoke botanical facial session"
                  className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white text-xs tracking-widest uppercase font-light">The Lumé Sanctuary • Sherwood Park</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden border border-[#B76E79]/20 group bg-white p-1.5 shadow-xs">
                <img
                  src={plump2}
                  alt="Spa suite interior"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden border border-[#B76E79]/20 group bg-white p-1.5 shadow-xs">
                <img
                  src={rejuva4}
                  alt="Clinical aesthetics suite"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:pl-6 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#8F4954]" />
              <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-bold">The Atelier Philosophy</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight text-[#2A2124]">
              Space to pause.
              <br />
              <span className="italic font-serif text-[#8F4954] font-medium">Care with intention.</span>
            </h2>
            <div className="space-y-4 text-xs sm:text-sm leading-7 text-[#5E5054] font-normal">
              <p>
                Founded on the belief that genuine aesthetic enhancement should feel effortless and deeply restorative, Lumé rejects one-size-fits-all treatments. Every client journey begins with comprehensive dialogue—listening to your skin history, lifestyle, and aesthetic intentions before a single active formulation is chosen.
              </p>
              <p>
                Our sanctuary brings together three distinct yet harmonious disciplines under one roof: restorative European facial &amp; body rituals powered by Bioline Jatò Italy, meticulous beauty artistry, and licensed clinical injectables and regenerative therapies.
              </p>
              <p>
                Here, your time is protected. Treatment suites are private, consultations are unhurried, and every protocol is executed with uncompromising clinical hygiene and artisan precision.
              </p>
            </div>

            <div className="pt-4 border-t border-[#B76E79]/20 grid grid-cols-2 gap-6">
              <div>
                <span className="font-display text-3xl sm:text-4xl text-[#8F4954] font-semibold block">
                  <CountUp to={100} suffix="%" duration={1.8} />
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#5E5054] mt-1 block font-bold">
                  Private 1-on-1 Suites
                </span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl text-[#8F4954] font-serif font-semibold block">
                  Bioline
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#5E5054] mt-1 block font-bold">
                  Italian Formulations
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 4 Clinical & Artistry Disciplines - Pure White Furniture Cards */}
      <section className="bg-[#FAF0F0] px-5 py-24 sm:px-8 border-y border-[#B76E79]/20 relative">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#8F4954]" />
              <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-bold">Mastery &amp; Credentials</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#2A2124]">
              Four Pillars of <span className="italic font-serif font-semibold text-[#8F4954]">Atelier Excellence</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5054] font-normal leading-relaxed">
              Our multidisciplinary team unites certified medical nurse injectors, licensed dermal therapists, and master beauty artists to deliver comprehensive aesthetic care.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {disciplines.map((item, idx) => (
              <motion.div
                key={item.role}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariant}
              >
                <SpotlightCard
                  spotlightColor="rgba(183, 110, 121, 0.15)"
                  borderColor="rgba(183, 110, 121, 0.25)"
                  className="bg-white rounded-2xl border border-[#B76E79]/20 p-6 sm:p-8 shadow-soft-card flex flex-col justify-between h-full group text-[#2A2124]"
                >
                <div className="space-y-5">
                  <div className="overflow-hidden rounded-xl border border-[#B76E79]/20 relative">
                    <img
                      src={item.image}
                      alt={item.role}
                      className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#B76E79]/30 text-[#8F4954] text-[9px] tracking-[0.2em] uppercase font-semibold">
                      Pillar 0{idx + 1}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-semibold block">{item.focus}</span>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl font-light text-[#2A2124]">{item.role}</h3>
                  </div>

                  <p className="text-xs sm:text-sm leading-6 text-[#5E5054] font-normal">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B76E79]/15 space-y-2">
                  <span className="text-[9px] uppercase tracking-[0.16em] text-[#8F4954] block font-semibold">Standard of Care:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-[#5E5054]">
                    {item.credentials.map((c) => (
                      <li key={c} className="flex items-center gap-1.5">
                        <CheckCircle2 className="size-3.5 text-[#B76E79] shrink-0" />
                        <span className="truncate">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Master Practitioner Spotlight - Pure White Cards */}
      <section className="px-5 py-24 sm:px-8 bg-[#FAF5F3] border-b border-[#B76E79]/20 text-[#2A2124]">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Specialist Collective</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-[#2A2124]">
                Meet our master clinicians.
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-[#5E5054] font-normal">
                Consultation-led care delivered by medical nurse injectors and master European skincare specialists.
              </p>
            </div>
            <Link
              to="/team"
              className="text-xs uppercase tracking-widest text-[#8F4954] hover:text-[#B76E79] hover:underline flex items-center gap-1 font-semibold"
            >
              View Full Team &amp; Credentials →
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {masterPractitioners.map((practitioner) => (
              <div
                key={practitioner.name}
                className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 shadow-soft-card hover:border-[#B76E79]/50 transition-all flex flex-col justify-between text-[#2A2124]"
              >
                <div>
                  <div className="overflow-hidden bg-[#FAF5F3] rounded-xl border border-[#B76E79]/20 mb-5 relative group">
                    <img
                      src={practitioner.image}
                      alt={practitioner.name}
                      className="w-full h-64 object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-xl font-light text-[#2A2124]">{practitioner.name}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-semibold block mt-0.5">
                    {practitioner.role}
                  </span>
                  <p className="mt-3 text-xs leading-6 text-[#5E5054] font-normal">{practitioner.bio}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#B76E79]/15">
                  <Link
                    to="/appointment"
                    className="text-[10px] uppercase tracking-[0.16em] text-[#8F4954] hover:text-[#B76E79] font-semibold flex items-center justify-between"
                  >
                    <span>Schedule With {practitioner.name.split(" ")[0]}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House Standards & Formulations */}
      <section className="px-5 py-24 sm:px-8 bg-[#FAF0F0] text-[#2A2124]">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Uncompromising Integrity</span>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#2A2124]">
              The Lumé Quality Charter
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5054] font-normal">
              Every product, needle, laser wavelength, and formulation active in our studio is curated with non-negotiable safety standards.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 space-y-4 shadow-soft-card hover:border-[#B76E79]/50 transition-all text-[#2A2124]">
              <ShieldCheck className="size-7 text-[#B76E79]" />
              <h3 className="font-display text-xl font-light text-[#2A2124]">Health Canada Adherence</h3>
              <p className="text-xs leading-6 text-[#5E5054] font-normal">
                All neuromodulators, dermal fillers, and sterile microneedling cartridges are 100% Health Canada approved and traceable.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 space-y-4 shadow-soft-card hover:border-[#B76E79]/50 transition-all text-[#2A2124]">
              <Droplets className="size-7 text-[#B76E79]" />
              <h3 className="font-display text-xl font-light text-[#2A2124]">Italian Dermocosmetics</h3>
              <p className="text-xs leading-6 text-[#5E5054] font-normal">
                Partnered with Bioline Jatò Italy, delivering bio-compatible plant actives, hyaluronic nectar drops, and patented peptides.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 space-y-4 shadow-soft-card hover:border-[#B76E79]/50 transition-all text-[#2A2124]">
              <Award className="size-7 text-[#B76E79]" />
              <h3 className="font-display text-xl font-light text-[#2A2124]">Celluma Phototherapy</h3>
              <p className="text-xs leading-6 text-[#5E5054] font-normal">
                Medical FDA-cleared LED phototherapy for rapid cellular ATP stimulation, acne healing, and deep tissue anti-aging.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 space-y-4 shadow-soft-card hover:border-[#B76E79]/50 transition-all text-[#2A2124]">
              <Leaf className="size-7 text-[#B76E79]" />
              <h3 className="font-display text-xl font-light text-[#2A2124]">Clean &amp; Mindful Formulations</h3>
              <p className="text-xs leading-6 text-[#5E5054] font-normal">
                Free of harsh parabens, sulfates, synthetic fragrances, and aggressive abrasives that compromise delicate barrier function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Sanctuary Details - Pure White Furniture Cards */}
      <section className="px-5 py-24 sm:px-8 bg-[#FAF5F3] border-t border-[#B76E79]/20 text-[#2A2124]">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Atelier Residence</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-[#2A2124]">
                Visit our Sherwood Park sanctuary.
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-7 text-[#5E5054] font-normal max-w-xl">
                Located conveniently in Sherwood Park, Alberta. We welcome you for tailored clinical consultations, restorative multi-hour spa days, and bespoke beauty artistry in private acoustic suites.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 space-y-3 shadow-soft-card text-[#2A2124]">
                <div className="flex items-center gap-2.5 text-[#8F4954] font-medium">
                  <MapPin className="size-4 text-[#B76E79]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#2A2124] font-semibold">Location</span>
                </div>
                <p className="text-xs leading-6 text-[#5E5054] font-normal">
                  Sherwood Park, AB, Canada
                  <br />
                  <span className="text-[11px] text-[#8F4954] font-medium font-mono">Private Dedicated Studio Suite</span>
                </p>
              </div>

              <div className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 space-y-3 shadow-soft-card text-[#2A2124]">
                <div className="flex items-center gap-2.5 text-[#8F4954] font-medium">
                  <Phone className="size-4 text-[#B76E79]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#2A2124] font-semibold">Direct Atelier Hotline</span>
                </div>
                <p className="text-xs leading-6 text-[#5E5054] font-normal">
                  <a href="tel:+17804108278" className="hover:text-[#8F4954] transition-colors font-medium text-[#2A2124]">
                    (780) 410-8278
                  </a>
                  <br />
                  <a href="mailto:info@lumeaesthetics.co" className="hover:text-[#8F4954] transition-colors text-[#7A6B6E]">
                    info@lumeaesthetics.co
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 space-y-3 shadow-soft-card text-[#2A2124]">
                <div className="flex items-center gap-2.5 text-[#8F4954] font-medium">
                  <Clock className="size-4 text-[#B76E79]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#2A2124] font-semibold">Hours of Care</span>
                </div>
                <p className="text-xs leading-5 text-[#5E5054] font-normal">
                  Mon – Fri: 10:00 AM – 7:00 PM
                  <br />
                  Saturday: 10:00 AM – 5:00 PM
                  <br />
                  Sunday: By Bespoke Appointment
                </p>
              </div>

              <div className="rounded-2xl border border-[#B76E79]/20 bg-white p-6 space-y-3 shadow-soft-card text-[#2A2124]">
                <div className="flex items-center gap-2.5 text-[#8F4954] font-medium">
                  <Sparkles className="size-4 text-[#B76E79]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#2A2124] font-semibold">Client Experience</span>
                </div>
                <p className="text-xs leading-5 text-[#5E5054] font-normal">
                  Complimentary herbal infusions
                  <br />
                  Acoustic sound conditioning
                  <br />
                  Strict sanitary sterilization
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                asChild
                className="h-12 rounded-full bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] px-8 text-[10px] uppercase tracking-[0.16em] text-white hover:opacity-95 font-semibold transition-all duration-300 shadow-md"
              >
                <a href="tel:+17804108278">Direct Line: (780) 410-8278</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-[#B76E79]/40 bg-white px-8 text-[10px] uppercase tracking-[0.16em] text-[#8F4954] hover:bg-[#FAF0F0] hover:text-[#2A2124] transition-all duration-300 font-semibold"
              >
                <a href="mailto:info@lumeaesthetics.co?subject=Atelier%20Consultation%20Inquiry">
                  Email Studio Concierge
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[#B76E79]/30 shadow-soft-card relative group bg-white p-2">
              <div className="overflow-hidden rounded-xl relative">
                <img
                  src={heroImage}
                  alt="Lumé Aesthetics Sherwood Park Studio"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="eyebrow text-[#E7B2A9] text-[10px] tracking-[0.2em] font-semibold">Sherwood Park Sanctuary</span>
                    <h4 className="font-display text-2xl font-light">Where European Care Meets Science</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}