import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

import { HauteMarquee, LiveSuiteClock } from "@/components/luxury-motion";
import { Button } from "@/components/ui/button";
import {
  SpotlightCard,
  ShinyText,
  MagneticButton,
  TiltedCard,
  DecryptedText,
  AuroraGlow,
  SplitText,
} from "@/components/reactbits";
import plump2 from "@/assets/competitors/plump-2.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Concierge & Appointments | Lumé Aesthetics Atelier" },
      {
        name: "description",
        content:
          "Reserve your private aesthetic consultation or treatment at Lumé Aesthetics in Sherwood Park, AB. Direct line: (780) 410-8278.",
      },
      { property: "og:title", content: "Concierge & Appointments | Lumé Aesthetics" },
      {
        property: "og:description",
        content:
          "Plan your visit or speak with Lumé concierge about your tailored skincare, beauty artistry, or clinical aesthetics.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceCategory, setServiceCategory] = useState("Skin & Body Rituals");
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Request: ${serviceCategory} — ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nRequested Category: ${serviceCategory}\nPreferred Timing: ${preferredDate || "Flexible"}\nSkin & Aesthetic Notes:\n${notes}`
    );
    window.location.href = `mailto:info@lumeaesthetics.co?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAF5F3] text-[#2A2124]">
      {/* Bespoke Concierge Hero */}
      <section className="relative overflow-hidden px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 border-b border-[#B76E79]/20 bg-gradient-to-b from-[#FAF5F3] via-[#F4E8E5] to-[#FAF5F3]">
        <div className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-[#E8C5C8]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em] text-[#8F4954]">
                  <ShinyText text="Concierge &amp; Appointments" speed={4} />
                </span>
                <span className="h-px w-8 bg-[#B76E79]/40" />
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-white border border-[#B76E79]/30 text-[#8F4954] shadow-xs">
                  <DecryptedText text="SHERWOOD PARK ATELIER" />
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-[#2A2124] text-balance">
                Your Lumé ritual
                <br />
                <span className="italic font-serif bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] bg-clip-text text-transparent font-normal">
                  <SplitText text="begins here." delay={45} />
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base sm:leading-7 text-[#5E5054] font-normal leading-relaxed">
                Speak directly with our studio concierge about what you would like to address, or reserve your private consultation at our Sherwood Park atelier sanctuary.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <LiveSuiteClock />
                <MagneticButton pullStrength={0.25}>
                  <Button
                    asChild
                    className="h-11 rounded-full bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] text-white font-semibold px-7 text-xs uppercase tracking-[0.16em] hover:opacity-95 transition-all duration-300 shadow-md"
                  >
                    <a href="tel:+17804108278">Call Concierge: (780) 410-8278</a>
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Bespoke Right Suite Plate with Pure White Furniture Card */}
            <div className="lg:col-span-5 relative">
              <TiltedCard rotateAmplitude={8}>
                <div className="rounded-2xl border border-[#B76E79]/25 bg-white p-3 shadow-soft-card relative">
                  <div className="overflow-hidden rounded-xl relative group">
                    <img
                      src={plump2}
                      alt="Private Lumé suite interior"
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-[9px] uppercase tracking-widest text-[#E7B2A9] font-mono">
                        <DecryptedText text="2457 Broadmoor Blvd #121" />
                      </span>
                      <p className="font-display text-xl text-white mt-1">
                        Private Acoustic Suite &amp; Dedicated Parking
                      </p>
                    </div>
                  </div>
                </div>
              </TiltedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Luxury Ticker */}
      <HauteMarquee
        items={[
          "DIRECT LINE (780) 410-8278",
          "2457 BROADMOOR BLVD #121",
          "SHERWOOD PARK, AB",
          "100% PRIVATE SUITES",
          "UNHURRIED CONSULTATIONS",
          "ITALIAN BIOLINE FORMULATIONS",
        ]}
      />

      {/* Top 3 Core Contact Cards with Pure White Furniture Cards */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 border-b border-[#B76E79]/20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <SpotlightCard
            spotlightColor="rgba(183, 110, 121, 0.15)"
            borderColor="rgba(183, 110, 121, 0.25)"
            className="bg-white text-[#2A2124] p-8 sm:p-10 rounded-2xl shadow-soft-card transition-all duration-300 hover:border-[#B76E79]/50 hover:shadow-lg flex flex-col justify-between border border-[#B76E79]/20"
          >
            <a href="tel:+17804108278" className="group block h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="p-3 bg-[#FAF0F0] rounded-xl border border-[#B76E79]/30 text-[#8F4954] group-hover:bg-[#8F4954] group-hover:text-white transition-colors">
                    <Phone className="size-5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-semibold">
                    Direct Atelier
                  </span>
                </div>
                <p className="font-display text-2xl sm:text-3xl font-light text-[#2A2124] mt-6">
                  (780) 410-8278
                </p>
                <p className="mt-2 text-xs leading-6 text-[#5E5054] font-normal">
                  Direct booking line, treatment guidance, and appointment reservations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#B76E79]/15 flex items-center text-[10px] uppercase tracking-[0.16em] text-[#8F4954] font-semibold">
                <span>Call Atelier Concierge →</span>
              </div>
            </a>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(183, 110, 121, 0.15)"
            borderColor="rgba(183, 110, 121, 0.25)"
            className="bg-white text-[#2A2124] p-8 sm:p-10 rounded-2xl shadow-soft-card transition-all duration-300 hover:border-[#B76E79]/50 hover:shadow-lg flex flex-col justify-between border border-[#B76E79]/20"
          >
            <a href="mailto:info@lumeaesthetics.co" className="group block h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="p-3 bg-[#FAF0F0] rounded-xl border border-[#B76E79]/30 text-[#8F4954] group-hover:bg-[#8F4954] group-hover:text-white transition-colors">
                    <Mail className="size-5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-semibold">
                    Electronic Mail
                  </span>
                </div>
                <p className="font-display text-2xl sm:text-3xl font-light text-[#2A2124] mt-6">
                  info@lumeaesthetics.co
                </p>
                <p className="mt-2 text-xs leading-6 text-[#5E5054] font-normal">
                  General inquiries, bridal packages, and personalized treatment roadmaps.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#B76E79]/15 flex items-center text-[10px] uppercase tracking-[0.16em] text-[#8F4954] font-semibold">
                <span>Send Written Message →</span>
              </div>
            </a>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(183, 110, 121, 0.15)"
            borderColor="rgba(183, 110, 121, 0.25)"
            className="bg-white text-[#2A2124] p-8 sm:p-10 rounded-2xl shadow-soft-card flex flex-col justify-between border border-[#B76E79]/20"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="p-3 bg-[#FAF0F0] rounded-xl border border-[#B76E79]/30 text-[#8F4954]">
                  <MapPin className="size-5" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-semibold">
                  Sanctuary Suite
                </span>
              </div>
              <p className="font-display text-2xl sm:text-3xl font-light text-[#2A2124] mt-6">
                2457 Broadmoor Blvd
              </p>
              <p className="mt-1 text-xs text-[#8F4954] font-semibold">Suite #121 • Sherwood Park, AB</p>
              <p className="mt-2 text-xs leading-6 text-[#5E5054] font-normal">
                Convenient parking, discrete private entrance, and tranquil acoustic suites.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#B76E79]/15 flex items-center text-[10px] uppercase tracking-[0.16em] text-[#7A6B6E]">
              <span>T8H 0Y6, Canada</span>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Main Reservation & Consultation Form Section */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 bg-[#FAF5F3]">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-12 items-start">
          {/* Left Column: Context & House Expectations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-[#B76E79]" />
                <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Private Consultation</span>
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-[#2A2124]">
                Request an Appointment
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-7 text-[#5E5054] font-normal">
                Whether you are seeking European facial rejuvenation, milestone spa pampering, or consultation-led medical injectables, our concierge will tailor your visit with precision.
              </p>
            </div>

            {/* Studio Sanctuary Image Plate with TiltedCard */}
            <TiltedCard rotateAmplitude={6}>
              <div className="overflow-hidden rounded-2xl border border-[#B76E79]/25 shadow-soft-card relative group bg-white p-2">
                <div className="overflow-hidden rounded-xl relative">
                  <img
                    src={plump2}
                    alt="Lumé Aesthetics Private Treatment Lounge"
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#E7B2A9] font-semibold block">
                        Private Sanctuary
                      </span>
                      <p className="text-xs text-white font-light mt-0.5">
                        100% Acoustic Isolation • Sherwood Park
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltedCard>

            {/* What to Expect Card with Pure White Furniture Card */}
            <SpotlightCard
              spotlightColor="rgba(183, 110, 121, 0.12)"
              borderColor="rgba(183, 110, 121, 0.22)"
              className="bg-white text-[#2A2124] p-6 sm:p-8 space-y-5 shadow-soft-card rounded-2xl border border-[#B76E79]/20"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-semibold block">
                The Lumé Arrival Experience
              </span>
              <ul className="space-y-3.5 text-xs text-[#5E5054] font-normal">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-[#B76E79] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2A2124]">Dedicated 1-on-1 Consultation:</strong> Unhurried assessment of facial anatomy and skin condition before treatment.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-[#B76E79] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2A2124]">Sensory Sanctuary:</strong> Calming acoustic isolation and warm organic herbal tea service upon arrival.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-[#B76E79] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2A2124]">Zero-Pressure Advice:</strong> Honest clinical recommendations tailored strictly to your goals and comfort.
                  </span>
                </li>
              </ul>
            </SpotlightCard>

            {/* Hours Box */}
            <SpotlightCard
              spotlightColor="rgba(183, 110, 121, 0.12)"
              borderColor="rgba(183, 110, 121, 0.22)"
              className="bg-white text-[#2A2124] p-6 space-y-3 rounded-2xl shadow-soft-card border border-[#B76E79]/20"
            >
              <div className="flex items-center gap-2 text-[#8F4954]">
                <Clock className="size-4 text-[#B76E79]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2A2124]">
                  Atelier Hours
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#5E5054] pt-1">
                <div>
                  <span className="text-[#2A2124] font-medium block">Mon – Fri</span>
                  <span>10:00 AM – 7:00 PM</span>
                </div>
                <div>
                  <span className="text-[#2A2124] font-medium block">Saturday</span>
                  <span>10:00 AM – 5:00 PM</span>
                </div>
                <div className="col-span-2 pt-1 border-t border-[#B76E79]/15">
                  <span className="text-[#2A2124] font-medium">Sunday:</span> By Bespoke Appointment Only
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form - Pure White Furniture Card */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(183, 110, 121, 0.15)"
              borderColor="rgba(183, 110, 121, 0.25)"
              className="bg-white text-[#2A2124] p-8 sm:p-12 shadow-soft-card rounded-2xl relative border border-[#B76E79]/20"
            >
              <div className="mb-8 border-b border-[#B76E79]/15 pb-4">
                <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Client Concierge Portal</span>
                <h3 className="font-display text-2xl sm:text-3xl font-light text-[#2A2124] mt-1">
                  Consultation &amp; Reservation Request
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-[#FAF0F0] rounded-2xl border border-[#B76E79]/30 text-center space-y-4 text-[#2A2124]"
                >
                  <div className="size-12 rounded-full bg-white text-[#8F4954] flex items-center justify-center mx-auto border border-[#B76E79]/20 shadow-xs">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h4 className="font-display text-2xl font-light text-[#2A2124]">Inquiry Prepared</h4>
                  <p className="text-xs sm:text-sm text-[#5E5054] leading-relaxed font-normal">
                    Your appointment details have been prepared for our concierge team. If your email client did not open automatically, please contact us directly at{" "}
                    <a href="mailto:info@lumeaesthetics.co" className="text-[#8F4954] underline font-medium">
                      info@lumeaesthetics.co
                    </a>{" "}
                    or call{" "}
                    <a href="tel:+17804108278" className="text-[#8F4954] underline font-medium">
                      (780) 410-8278
                    </a>.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-4 rounded-full border-[#B76E79]/40 bg-white text-[10px] uppercase tracking-[0.18em] text-[#8F4954] hover:bg-[#FAF0F0] hover:text-[#2A2124] font-semibold"
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="fullName"
                        className="text-xs uppercase tracking-[0.16em] text-[#8F4954] font-bold"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl px-4 py-3 text-xs text-[#2A2124] placeholder:text-[#7A6B6E] focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs uppercase tracking-[0.16em] text-[#8F4954] font-bold"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. eleanor@example.com"
                        className="w-full bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl px-4 py-3 text-xs text-[#2A2124] placeholder:text-[#7A6B6E] focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs uppercase tracking-[0.16em] text-[#8F4954] font-bold"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. (780) 555-0192"
                        className="w-full bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl px-4 py-3 text-xs text-[#2A2124] placeholder:text-[#7A6B6E] focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="serviceCategory"
                        className="text-xs uppercase tracking-[0.16em] text-[#8F4954] font-bold"
                      >
                        Collection of Interest *
                      </label>
                      <select
                        id="serviceCategory"
                        value={serviceCategory}
                        onChange={(e) => setServiceCategory(e.target.value)}
                        className="w-full bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl px-4 py-3 text-xs text-[#2A2124] focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954] transition-colors"
                      >
                        <option value="Skin & Body Rituals" className="bg-white text-[#2A2124]">Collection I — Skin &amp; Body Rituals</option>
                        <option value="Signature Spa Packages" className="bg-white text-[#2A2124]">Collection II — Signature Spa Packages</option>
                        <option value="Beauty Atelier & Artistry" className="bg-white text-[#2A2124]">Collection III — Beauty Atelier &amp; Artistry</option>
                        <option value="Advanced Clinical Aesthetics" className="bg-white text-[#2A2124]">Collection IV — Advanced Clinical Aesthetics</option>
                        <option value="Comprehensive Aesthetic Diagnosis" className="bg-white text-[#2A2124]">General Aesthetic Diagnosis &amp; Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="preferredDate"
                      className="text-xs uppercase tracking-[0.16em] text-[#8F4954] font-bold"
                    >
                      Preferred Date or Time Window
                    </label>
                    <input
                      id="preferredDate"
                      type="text"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      placeholder="e.g. Next Tuesday afternoon or Saturday morning"
                      className="w-full bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl px-4 py-3 text-xs text-[#2A2124] placeholder:text-[#7A6B6E] focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="notes"
                      className="text-xs uppercase tracking-[0.16em] text-[#8F4954] font-bold"
                    >
                      Aesthetic Goals or Skin Notes
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Describe your skin concerns, past treatments, or any particular goals you wish to achieve..."
                      className="w-full bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl p-4 text-xs text-[#2A2124] placeholder:text-[#7A6B6E] focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954] transition-colors resize-none"
                    />
                  </div>

                  <MagneticButton pullStrength={0.2}>
                    <Button
                      type="submit"
                      className="w-full h-12 rounded-full bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] text-white font-semibold text-xs uppercase tracking-[0.16em] hover:opacity-95 transition-all duration-300 shadow-md"
                    >
                      <Send className="size-3.5 mr-2 text-white" />
                      Transmit Consultation Request
                    </Button>
                  </MagneticButton>
                </form>
              )}
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="border-t border-[#B76E79]/20 bg-[#FAF0F0] px-5 py-16 sm:px-8 sm:py-24 text-[#2A2124]">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Location &amp; Directions</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light text-[#2A2124]">
                2457 Broadmoor Blvd #121, Sherwood Park
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#5E5054] font-normal max-w-xl">
                Located with effortless access from both Edmonton and Strathcona County, with ample complimentary parking immediately outside our entrance.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-[#B76E79]/40 bg-white px-6 text-[10px] uppercase tracking-[0.16em] text-[#8F4954] hover:bg-[#FAF0F0] hover:text-[#2A2124] font-semibold transition-all duration-300 self-start sm:self-auto"
            >
              <a href="https://maps.app.goo.gl/x93Ne5NphPnA5DXN8" target="_blank" rel="noopener noreferrer">
                Open in Google Maps ↗
              </a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#B76E79]/30 bg-white p-2 shadow-soft-card">
            <iframe
              title="Lumé Aesthetics location map"
              src="https://maps.google.com/maps?q=Lum%C3%A9+Aesthetics%2C+2457+Broadmoor+Blvd+%23121%2C+Sherwood+Park%2C+AB+T8H+0Y6%2C+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="440"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}