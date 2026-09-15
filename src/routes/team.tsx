import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Award, Sparkles, Phone, Mail, CheckCircle2 } from "lucide-react";

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

import team1 from "@/assets/lumeproject/team-1-1.png";
import team2 from "@/assets/lumeproject/team-1-2.png";
import team3 from "@/assets/lumeproject/team-1-3.png";
import team4 from "@/assets/lumeproject/team-1-4.png";
import team5 from "@/assets/lumeproject/team-1-5.png";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Expert Practitioners & Atelier Team | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Meet the licensed clinical injectors, Bioline certified dermal specialists, and beauty artistry directors at Lumé Aesthetics in Sherwood Park, AB.",
      },
      { property: "og:title", content: "Expert Practitioners & Team | Lumé Aesthetics" },
      { property: "og:description", content: "Clinical mastery, formulation science, and bespoke beauty artistry." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const teamMembers = [
  {
    name: "Dr. Lenda Murray",
    role: "Clinical Director & Injectables Lead",
    credentials: "RN, BScN, Health Canada Certified",
    specialties: [
      "Botox® Facial Mapping",
      "Dermal Filler Contouring",
      "Autologous PRP Centrifugation",
      "Exosome Regenerative Therapy",
    ],
    bio: "Specializing in facial musculoskeletal anatomy, our clinical director ensures every neuromodulator placement and dermal filler contour enhances your natural symmetry without an overdone appearance.",
    image: team1,
  },
  {
    name: "Emely Jonson",
    role: "Lead Medical Esthetician & Bioline Italy Specialist",
    credentials: "CIDESCO Certified, Bioline Jatò Italy Master",
    specialties: [
      "20% AHA Botanical Chemical Peels",
      "Lifting Code Non-Surgical Facials",
      "Aqua Luxe Barrier Repair",
      "Negative-Ion Oxygen Dome",
    ],
    bio: "With advanced certifications in Italian dermal biotechnologies and clinical acid resurfacing, our skin therapists personalize active serums to address barrier impairment, hyperpigmentation, and cellular collagen renewal.",
    image: team2,
  },
  {
    name: "Arika Murray",
    role: "Lead Makeup & Lash Couture Artist",
    credentials: "Haute Couture Event Makeup Specialist",
    specialties: [
      "The Glam Chapter Soft & Full Glam",
      "Bridal Trial & Event Beauty",
      "Keratin Lash Couture Lifts",
      "Russian Gel Nail Artistry",
    ],
    bio: "Passionate about framing facial features with refined elegance, our artistry lead creates glowing, camera-ready bridal looks and structured gel manicures with millimeter perfection.",
    image: team3,
  },
  {
    name: "Lola Jonson",
    role: "Spa & Sanctuary Specialist",
    credentials: "Certified Lymphatic Drainage & Body Sculpting",
    specialties: [
      "Mocha Contour Jatò Coffee Wraps",
      "Bian Stone Traditional Gua Sha",
      "Retinol Sculpt & Renew",
      "Reflexology Foot Rituals",
    ],
    bio: "Choreographing soothing rhythmic body wraps and Bian stone Gua Sha rituals to awaken lymphatic circulation, eliminate water retention, and melt deep physical tension.",
    image: team4,
  },
  {
    name: "Rose Marian",
    role: "Massage & Lymphatic Drainage Expert",
    credentials: "Licensed Massage Therapist (LMT)",
    specialties: [
      "Deep Tissue Recovery",
      "Warm Botanical Oil Scalp Therapy",
      "Celluma LED Phototherapy Integration",
      "Contour Bodywork",
    ],
    bio: "Focused on nervous system restoration and tension release, blending European massage techniques with restorative herbal compress therapy.",
    image: team5,
  },
];

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function TeamPage() {
  return (
    <div className="bg-[#FAF5F3] text-[#2A2124]">
      {/* Bespoke Practitioners Hero with AuroraGlow */}
      <AuroraGlow variant="rose" className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[#B76E79]/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em] text-[#B76E79]">
                  <ShinyText text="Haute Practitioners Dossier" speed={4} />
                </span>
                <span className="h-px w-8 bg-[#B76E79]/40" />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase bg-white/80 border border-[#B76E79]/30 text-[#8F4954] shadow-sm">
                  <DecryptedText text="LICENSED CLINICIANS" />
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-[#2A2124] text-balance">
                Mastery behind
                <br />
                <span className="italic font-serif gold-gradient-text font-normal">
                  <SplitText text="every touch." delay={50} />
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base sm:leading-7 text-[#5E5054] font-normal leading-relaxed">
                Lumé Aesthetics brings together licensed medical injectors, Italian Bioline certified estheticians, and couture beauty artists united by a single ethos: unhurried, anatomical precision in a tranquil sanctuary.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <LiveSuiteClock />
                <MagneticButton pullStrength={0.25}>
                  <Button
                    asChild
                    className="h-11 rounded-none bg-[#B76E79] text-white font-bold px-6 text-xs uppercase tracking-[0.2em] hover:bg-[#8F4954] transition-all duration-300 shadow-md"
                  >
                    <Link to="/appointment">Schedule Consultation</Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Bespoke Right Highlight Frame with TiltedCard */}
            <div className="lg:col-span-5 relative">
              <TiltedCard rotateAmplitude={6}>
                <div className="border border-[#B76E79]/30 bg-white p-3 shadow-soft-card relative">
                  <div className="overflow-hidden relative group">
                    <img
                      src={team1}
                      alt="Clinical Director & Lead Nurse"
                      className="w-full h-80 sm:h-96 object-contain object-bottom bg-[#FAF5F3] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-[9px] uppercase tracking-widest text-[#E7B2A9] font-mono">
                        <DecryptedText text="Health Canada Certified" />
                      </span>
                      <p className="font-display text-xl text-white mt-1">
                        Facial Anatomy &amp; Medical Injectables
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
          "LICENSED NURSE INJECTORS",
          "CIDESCO CERTIFIED ESTHETICIANS",
          "BIOLINE JATÒ ITALY MASTERS",
          "ANATOMICAL FACIAL MAPPING",
          "100% PRIVATE 1-ON-1 SUITES",
        ]}
      />

      {/* Standards & Certifications Bar with CountUp */}
      <section className="px-5 py-8 bg-white border-y border-[#B76E79]/20 text-[#2A2124] shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#B76E79]/20">
          <div className="pt-2 md:pt-0">
            <span className="font-display text-2xl text-[#8F4954] font-semibold">
              <CountUp to={100} suffix="%" />
            </span>
            <p className="text-[10px] uppercase tracking-wider text-[#5E5054] mt-1 font-semibold">Licensed &amp; Certified</p>
          </div>
          <div className="pt-2 md:pt-0">
            <span className="font-display text-2xl text-[#8F4954] font-semibold">
              <DecryptedText text="Bioline" />
            </span>
            <p className="text-[10px] uppercase tracking-wider text-[#5E5054] mt-1 font-semibold">Italy Official Master</p>
          </div>
          <div className="pt-2 md:pt-0">
            <span className="font-display text-2xl text-[#8F4954] font-semibold">
              <DecryptedText text="Health Canada" />
            </span>
            <p className="text-[10px] uppercase tracking-wider text-[#5E5054] mt-1 font-semibold">Clinical Sterilization</p>
          </div>
          <div className="pt-2 md:pt-0">
            <span className="font-display text-2xl text-[#8F4954] font-semibold">1-on-1</span>
            <p className="text-[10px] uppercase tracking-wider text-[#5E5054] mt-1 font-semibold">Unhurried Care</p>
          </div>
        </div>
      </section>

      {/* Team Profiles Grid with SpotlightCard */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.role}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <SpotlightCard
                spotlightColor="rgba(183, 110, 121, 0.15)"
                borderColor="rgba(183, 110, 121, 0.25)"
                className="bg-white text-[#2A2124] p-6 sm:p-8 flex flex-col justify-between h-full shadow-soft-card hover:border-[#B76E79] transition-all duration-300 border border-[#B76E79]/20"
              >
                <div>
                  <div className="overflow-hidden h-72 border border-[#B76E79]/20 mb-6 relative bg-[#FAF5F3]">
                    <img
                      src={member.image}
                      alt={member.role}
                      className="w-full h-full object-contain object-bottom transition-transform duration-700 hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 bg-white/95 text-[#8F4954] text-[9px] uppercase tracking-widest px-3 py-1 font-bold border border-[#B76E79]/30 shadow-sm">
                      {member.credentials}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="eyebrow text-[#B76E79] text-[10px] uppercase tracking-[0.2em] font-bold">
                      {member.role}
                    </span>
                    <h3 className="font-display text-2xl font-light text-[#2A2124]">{member.name}</h3>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-[#5E5054] font-normal">{member.bio}</p>

                  <div className="mt-5 pt-4 border-t border-[#B76E79]/15 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-bold block">
                      Key Clinical Disciplines:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-[10px] bg-[#FAF5F3] px-2.5 py-1 text-[#2A2124] font-medium border border-[#B76E79]/20"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B76E79]/15 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#7D6B70] font-light">
                    Sherwood Park Studio
                  </span>
                  <Button
                    asChild
                    variant="outline"
                    className="h-9 rounded-none border-[#B76E79] bg-white text-[9px] uppercase tracking-[0.14em] text-[#8F4954] hover:bg-[#B76E79] hover:text-white"
                  >
                    <Link to="/appointment">Book Session →</Link>
                  </Button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join the Sanctuary Consultation CTA */}
      <AuroraGlow variant="rose" className="py-20 text-center px-5 sm:px-8 border-t border-[#B76E79]/20">
        <div className="max-w-2xl mx-auto space-y-4">
          <RotatingBadge
            text="MEET OUR TEAM • LUMÉ AESTHETICS • "
            href="/appointment"
            size={100}
            className="mx-auto mb-3"
          />
          <h2 className="font-display text-3xl sm:text-5xl font-light text-[#2A2124]">
            Schedule a personal consultation.
          </h2>
          <p className="text-xs sm:text-sm text-[#5E5054] font-normal leading-6">
            Meet with our practitioners for an in-depth skin assessment, facial contour plan, or treatment roadmap.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton pullStrength={0.25}>
              <Button
                asChild
                className="h-11 rounded-none bg-[#B76E79] text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#8F4954] px-8 w-full sm:w-auto shadow-md"
              >
                <Link to="/appointment">Book Appointment</Link>
              </Button>
            </MagneticButton>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-none border-[#B76E79] bg-white text-xs uppercase tracking-[0.18em] text-[#8F4954] hover:bg-[#FAF5F3]"
            >
              <a href="tel:+17804108278">Call Studio: (780) 410-8278</a>
            </Button>
          </div>
        </div>
      </AuroraGlow>
    </div>
  );
}
