import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Award, Sparkles, Phone, Mail, CheckCircle2 } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { RotatingBadge } from "@/components/rotating-badge";
import { Button } from "@/components/ui/button";

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
    specialties: ["Botox® Facial Mapping", "Dermal Filler Contouring", "Autologous PRP Centrifugation", "Exosome Regenerative Therapy"],
    bio: "Specializing in facial musculoskeletal anatomy, our clinical director ensures every neuromodulator placement and dermal filler contour enhances your natural symmetry without an overdone appearance.",
    image: team1,
  },
  {
    name: "Emely Jonson",
    role: "Lead Medical Esthetician & Bioline Italy Specialist",
    credentials: "CIDESCO Certified, Bioline Jatò Italy Master",
    specialties: ["20% AHA Botanical Chemical Peels", "Lifting Code Non-Surgical Facials", "Aqua Luxe Barrier Repair", "Negative-Ion Oxygen Dome"],
    bio: "With advanced certifications in Italian dermal biotechnologies and clinical acid resurfacing, our skin therapists personalize active serums to address barrier impairment, hyperpigmentation, and cellular collagen renewal.",
    image: team2,
  },
  {
    name: "Arika Murray",
    role: "Lead Makeup & Lash Couture Artist",
    credentials: "Haute Couture Event Makeup Specialist",
    specialties: ["The Glam Chapter Soft & Full Glam", "Bridal Trial & Event Beauty", "Keratin Lash Couture Lifts", "Russian Gel Nail Artistry"],
    bio: "Passionate about framing facial features with refined elegance, our artistry lead creates glowing, camera-ready bridal looks and structured gel manicures with millimeter perfection.",
    image: team3,
  },
  {
    name: "Lola Jonson",
    role: "Spa & Sanctuary Specialist",
    credentials: "Certified Lymphatic Drainage & Body Sculpting",
    specialties: ["Mocha Contour Jatò Coffee Wraps", "Bian Stone Traditional Gua Sha", "Retinol Sculpt & Renew", "Reflexology Foot Rituals"],
    bio: "Choreographing soothing rhythmic body wraps and Bian stone Gua Sha rituals to awaken lymphatic circulation, eliminate water retention, and melt deep physical tension.",
    image: team4,
  },
  {
    name: "Rose Marian",
    role: "Massage & Lymphatic Drainage Expert",
    credentials: "Licensed Massage Therapist (LMT)",
    specialties: ["Deep Tissue Recovery", "Warm Botanical Oil Scalp Therapy", "Celluma LED Phototherapy Integration", "Contour Bodywork"],
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
    <div className="bg-[#FAF7F2] text-[#131211]">
      <PageIntro
        eyebrow="The Practitioners"
        title={
          <>
            Mastery behind
            <br />
            <em>every touch.</em>
          </>
        }
      >
        Lumé Aesthetics brings together licensed medical injectors, Italian Bioline certified estheticians, and couture beauty artists united by a single ethos: unhurried, anatomical precision in a tranquil sanctuary.
      </PageIntro>

      {/* Standards & Certifications Bar */}
      <section className="px-5 py-8 bg-[#131211] text-white border-b border-copper/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-2 md:pt-0">
            <span className="font-display text-2xl text-copper-light">100%</span>
            <p className="text-[10px] uppercase tracking-wider text-white/70 mt-1">Licensed & Certified</p>
          </div>
          <div className="pt-2 md:pt-0">
            <span className="font-display text-2xl text-copper-light">Bioline</span>
            <p className="text-[10px] uppercase tracking-wider text-white/70 mt-1">Italy Official Master</p>
          </div>
          <div className="pt-2 md:pt-0">
            <span className="font-display text-2xl text-copper-light">Health Canada</span>
            <p className="text-[10px] uppercase tracking-wider text-white/70 mt-1">Clinical Sterilization</p>
          </div>
          <div className="pt-2 md:pt-0">
            <span className="font-display text-2xl text-copper-light">1-on-1</span>
            <p className="text-[10px] uppercase tracking-wider text-white/70 mt-1">Unhurried Care</p>
          </div>
        </div>
      </section>

      {/* Team Profiles Grid */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2">
          {teamMembers.map((member, idx) => (
            <motion.article
              key={member.role}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="border border-copper/25 bg-background p-6 sm:p-8 flex flex-col justify-between hover:border-copper transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="overflow-hidden h-72 border border-copper/15 mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#131211]/90 text-copper-light text-[9px] uppercase tracking-widest px-3 py-1 font-semibold">
                    {member.credentials}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="eyebrow text-copper text-[10px] uppercase tracking-[0.2em]">{member.role}</span>
                  <h3 className="font-display text-2xl font-light text-foreground">{member.name}</h3>
                </div>

                <p className="mt-3 text-xs leading-6 text-muted-foreground font-light">
                  {member.bio}
                </p>

                <div className="mt-5 pt-4 border-t border-copper/15 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-copper font-semibold block">Key Clinical Disciplines:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec) => (
                      <span key={spec} className="text-[10px] bg-secondary px-2.5 py-1 text-foreground/90 font-light border border-copper/10">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-copper/15 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-light">Sherwood Park Studio</span>
                <Button asChild variant="outline" className="h-9 rounded-none border-copper bg-transparent text-[9px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-white">
                  <Link to="/appointment">Book Session →</Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Join the Sanctuary Consultation CTA */}
      <section className="bg-[#131211] text-white py-20 text-center px-5 sm:px-8 border-t border-copper/20">
        <div className="max-w-2xl mx-auto space-y-4">
          <RotatingBadge text="MEET OUR TEAM • LUMÉ AESTHETICS • " href="/appointment" size={100} className="mx-auto mb-3" />
          <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
            Schedule a personal consultation.
          </h2>
          <p className="text-xs sm:text-sm text-white/75 font-light leading-6">
            Meet with our practitioners for an in-depth skin assessment, facial contour plan, or treatment roadmap.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-11 rounded-none bg-copper text-white text-xs uppercase tracking-[0.18em] hover:bg-copper/90 px-8">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-none border-copper-light bg-transparent text-xs uppercase tracking-[0.18em] text-copper-light hover:bg-copper-light hover:text-[#131211]">
              <a href="tel:+17804108278">Call Studio: (780) 410-8278</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
