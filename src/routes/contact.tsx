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
    <div className="bg-[#0A0908] text-[#FAF7F2]">
      {/* Bespoke Concierge Hero with AuroraGlow */}
      <AuroraGlow variant="dark" className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-copper/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em]">
                  <ShinyText text="Concierge &amp; Appointments" speed={4} />
                </span>
                <span className="h-px w-8 bg-[#F3C592]/70" />
                <span className="dark-pill-badge">
                  <DecryptedText text="SHERWOOD PARK ATELIER" />
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-[#FAF7F2] text-balance">
                Your Lumé ritual
                <br />
                <span className="italic font-serif gold-gradient-text font-normal">
                  <SplitText text="begins here." delay={45} />
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base sm:leading-7 text-[#E7E2DB] font-normal leading-relaxed">
                Speak directly with our studio concierge about what you would like to address, or reserve your private consultation at our Sherwood Park atelier sanctuary.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <LiveSuiteClock />
                <MagneticButton pullStrength={0.25}>
                  <Button
                    asChild
                    className="h-11 rounded-none bg-copper text-[#0A0908] font-bold px-6 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A0908] transition-all duration-300 shadow-lg"
                  >
                    <a href="tel:+17804108278">Call Concierge: (780) 410-8278</a>
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Bespoke Right Suite Plate with TiltedCard */}
            <div className="lg:col-span-5 relative">
              <TiltedCard rotateAmplitude={8}>
                <div className="border border-copper/35 bg-[#131211] p-2 sm:p-3 shadow-2xl relative">
                  <div className="overflow-hidden relative group">
                    <img
                      src={plump2}
                      alt="Private Lumé suite interior"
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131211] via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-[9px] uppercase tracking-widest text-copper font-mono">
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
      </AuroraGlow>

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

      {/* Top 3 Core Contact Cards with SpotlightCard */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 border-b border-copper/15">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <SpotlightCard
            spotlightColor="rgba(181, 126, 82, 0.2)"
            borderColor="rgba(181, 126, 82, 0.3)"
            className="bg-[#131211] text-white p-8 sm:p-10 transition-all duration-300 hover:border-copper hover:shadow-xl flex flex-col justify-between border border-copper/25"
          >
            <a href="tel:+17804108278" className="group block h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="p-3 bg-[#161412] border border-copper/30 text-copper-light group-hover:bg-copper group-hover:text-[#0A0908] transition-colors">
                    <Phone className="size-5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold">
                    Direct Atelier
                  </span>
                </div>
                <p className="font-display text-2xl sm:text-3xl font-light text-white mt-6">
                  (780) 410-8278
                </p>
                <p className="mt-2 text-xs leading-6 text-white/70 font-light">
                  Direct booking line, treatment guidance, and appointment reservations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-copper/15 flex items-center text-[10px] uppercase tracking-[0.16em] text-copper-light font-medium">
                <span>Call Atelier Concierge →</span>
              </div>
            </a>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(181, 126, 82, 0.2)"
            borderColor="rgba(181, 126, 82, 0.3)"
            className="bg-[#131211] text-white p-8 sm:p-10 transition-all duration-300 hover:border-copper hover:shadow-xl flex flex-col justify-between border border-copper/25"
          >
            <a href="mailto:info@lumeaesthetics.co" className="group block h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="p-3 bg-[#161412] border border-copper/30 text-copper-light group-hover:bg-copper group-hover:text-[#0A0908] transition-colors">
                    <Mail className="size-5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold">
                    Electronic Mail
                  </span>
                </div>
                <p className="font-display text-2xl sm:text-3xl font-light text-white mt-6">
                  info@lumeaesthetics.co
                </p>
                <p className="mt-2 text-xs leading-6 text-white/70 font-light">
                  General inquiries, bridal packages, and personalized treatment roadmaps.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-copper/15 flex items-center text-[10px] uppercase tracking-[0.16em] text-copper-light font-medium">
                <span>Send Written Message →</span>
              </div>
            </a>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(181, 126, 82, 0.2)"
            borderColor="rgba(181, 126, 82, 0.3)"
            className="bg-[#131211] text-white p-8 sm:p-10 flex flex-col justify-between border border-copper/25"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="p-3 bg-[#161412] border border-copper/30 text-copper-light">
                  <MapPin className="size-5" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold">
                  Sanctuary Suite
                </span>
              </div>
              <p className="font-display text-2xl sm:text-3xl font-light text-white mt-6">
                2457 Broadmoor Blvd
              </p>
              <p className="mt-1 text-xs text-copper-light font-medium">Suite #121 • Sherwood Park, AB</p>
              <p className="mt-2 text-xs leading-6 text-white/70 font-light">
                Convenient parking, discrete private entrance, and tranquil acoustic suites.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-copper/15 flex items-center text-[10px] uppercase tracking-[0.16em] text-white/50">
              <span>T8H 0Y6, Canada</span>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Main Reservation & Consultation Form Section */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 bg-[#0A0908]">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-12 items-start">
          {/* Left Column: Context & House Expectations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-copper" />
                <span className="eyebrow text-copper text-[10px]">Private Consultation</span>
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-white">
                Request an Appointment
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-7 text-white/70 font-light">
                Whether you are seeking European facial rejuvenation, milestone spa pampering, or consultation-led medical injectables, our concierge will tailor your visit with precision.
              </p>
            </div>

            {/* Studio Sanctuary Image Plate with TiltedCard */}
            <TiltedCard rotateAmplitude={6}>
              <div className="overflow-hidden border border-copper/30 shadow-lg relative group bg-[#131211]">
                <img
                  src={plump2}
                  alt="Lumé Aesthetics Private Treatment Lounge"
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131211]/90 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-copper-light font-semibold block">
                      Private Sanctuary
                    </span>
                    <p className="text-xs text-white font-light mt-0.5">
                      100% Acoustic Isolation • Sherwood Park
                    </p>
                  </div>
                </div>
              </div>
            </TiltedCard>

            {/* What to Expect Card with SpotlightCard */}
            <SpotlightCard
              spotlightColor="rgba(181, 126, 82, 0.18)"
              borderColor="rgba(181, 126, 82, 0.3)"
              className="bg-[#131211] text-white p-6 sm:p-8 space-y-5 shadow-xl border border-copper/25"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold block">
                The Lumé Arrival Experience
              </span>
              <ul className="space-y-3.5 text-xs text-white/75 font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-copper shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Dedicated 1-on-1 Consultation:</strong> Unhurried assessment of facial anatomy and skin condition before treatment.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-copper shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Sensory Sanctuary:</strong> Calming acoustic isolation and warm organic herbal tea service upon arrival.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-copper shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Zero-Pressure Advice:</strong> Honest clinical recommendations tailored strictly to your goals and comfort.
                  </span>
                </li>
              </ul>
            </SpotlightCard>

            {/* Hours Box */}
            <SpotlightCard
              spotlightColor="rgba(181, 126, 82, 0.18)"
              borderColor="rgba(181, 126, 82, 0.3)"
              className="bg-[#131211] text-white p-6 space-y-3 border border-copper/25"
            >
              <div className="flex items-center gap-2 text-copper">
                <Clock className="size-4" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
                  Atelier Hours
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/70 pt-1">
                <div>
                  <span className="text-white font-medium block">Mon – Fri</span>
                  <span>10:00 AM – 7:00 PM</span>
                </div>
                <div>
                  <span className="text-white font-medium block">Saturday</span>
                  <span>10:00 AM – 5:00 PM</span>
                </div>
                <div className="col-span-2 pt-1 border-t border-copper/15">
                  <span className="text-white font-medium">Sunday:</span> By Bespoke Appointment Only
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(181, 126, 82, 0.2)"
              borderColor="rgba(181, 126, 82, 0.35)"
              className="bg-[#131211] text-white p-8 sm:p-12 shadow-2xl relative border border-copper/25"
            >
              <div className="mb-8 border-b border-copper/20 pb-4">
                <span className="eyebrow text-copper text-[10px]">Client Concierge Portal</span>
                <h3 className="font-display text-2xl sm:text-3xl font-light text-white mt-1">
                  Consultation &amp; Reservation Request
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-[#161412] border border-copper/30 text-center space-y-4 text-white"
                >
                  <div className="size-12 rounded-full bg-copper/20 text-copper-light flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h4 className="font-display text-2xl font-light text-white">Inquiry Prepared</h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    Your appointment details have been prepared for our concierge team. If your email client did not open automatically, please contact us directly at{" "}
                    <a href="mailto:info@lumeaesthetics.co" className="text-copper underline font-medium">
                      info@lumeaesthetics.co
                    </a>{" "}
                    or call{" "}
                    <a href="tel:+17804108278" className="text-copper underline font-medium">
                      (780) 410-8278
                    </a>.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-4 rounded-none border-copper text-[10px] uppercase tracking-[0.18em] text-copper-light hover:bg-copper hover:text-[#0A0908]"
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
                        className="text-xs uppercase tracking-[0.16em] text-[#F3C592] font-bold"
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
                        className="w-full bg-[#1A1715] border border-copper/40 px-4 py-3 text-xs text-white placeholder:text-[#FAF7F2]/50 focus:outline-none focus:border-[#F3C592] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs uppercase tracking-[0.16em] text-[#F3C592] font-bold"
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
                        className="w-full bg-[#1A1715] border border-copper/40 px-4 py-3 text-xs text-white placeholder:text-[#FAF7F2]/50 focus:outline-none focus:border-[#F3C592] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs uppercase tracking-[0.16em] text-[#F3C592] font-bold"
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
                        className="w-full bg-[#1A1715] border border-copper/40 px-4 py-3 text-xs text-white placeholder:text-[#FAF7F2]/50 focus:outline-none focus:border-[#F3C592] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="serviceCategory"
                        className="text-xs uppercase tracking-[0.16em] text-[#F3C592] font-bold"
                      >
                        Collection of Interest *
                      </label>
                      <select
                        id="serviceCategory"
                        value={serviceCategory}
                        onChange={(e) => setServiceCategory(e.target.value)}
                        className="w-full bg-[#1A1715] border border-copper/40 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#F3C592] transition-colors"
                      >
                        <option value="Skin & Body Rituals" className="bg-[#1A1715] text-white">Collection I — Skin &amp; Body Rituals</option>
                        <option value="Signature Spa Packages" className="bg-[#1A1715] text-white">Collection II — Signature Spa Packages</option>
                        <option value="Beauty Atelier & Artistry" className="bg-[#1A1715] text-white">Collection III — Beauty Atelier &amp; Artistry</option>
                        <option value="Advanced Clinical Aesthetics" className="bg-[#1A1715] text-white">Collection IV — Advanced Clinical Aesthetics</option>
                        <option value="Comprehensive Aesthetic Diagnosis" className="bg-[#1A1715] text-white">General Aesthetic Diagnosis &amp; Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="preferredDate"
                      className="text-xs uppercase tracking-[0.16em] text-[#F3C592] font-bold"
                    >
                      Preferred Date or Time Window
                    </label>
                    <input
                      id="preferredDate"
                      type="text"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      placeholder="e.g. Next Tuesday afternoon or Saturday morning"
                      className="w-full bg-[#1A1715] border border-copper/40 px-4 py-3 text-xs text-white placeholder:text-[#FAF7F2]/50 focus:outline-none focus:border-[#F3C592] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="notes"
                      className="text-xs uppercase tracking-[0.16em] text-[#F3C592] font-bold"
                    >
                      Aesthetic Goals or Skin Notes
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Describe your skin concerns, past treatments, or any particular goals you wish to achieve..."
                      className="w-full bg-[#1A1715] border border-copper/40 p-4 text-xs text-white placeholder:text-[#FAF7F2]/50 focus:outline-none focus:border-[#F3C592] transition-colors resize-none"
                    />
                  </div>

                  <MagneticButton pullStrength={0.2}>
                    <Button
                      type="submit"
                      className="w-full h-12 rounded-none bg-copper text-[#0A0908] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-lg"
                    >
                      <Send className="size-3.5 mr-2 text-[#0A0908]" />
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
      <section className="border-t border-copper/15 bg-[#070605] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-copper text-[10px]">Location &amp; Directions</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light text-white">
                2457 Broadmoor Blvd #121, Sherwood Park
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/70 font-light max-w-xl">
                Located with effortless access from both Edmonton and Strathcona County, with ample complimentary parking immediately outside our entrance.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-none border-copper bg-transparent px-6 text-[10px] uppercase tracking-[0.18em] text-copper-light hover:bg-copper hover:text-[#0A0908] transition-all duration-300 self-start sm:self-auto"
            >
              <a href="https://maps.app.goo.gl/x93Ne5NphPnA5DXN8" target="_blank" rel="noopener noreferrer">
                Open in Google Maps ↗
              </a>
            </Button>
          </div>

          <div className="overflow-hidden border border-copper/30 bg-[#131211] shadow-2xl">
            <iframe
              title="Lumé Aesthetics location map"
              src="https://maps.google.com/maps?q=Lum%C3%A9+Aesthetics%2C+2457+Broadmoor+Blvd+%23121%2C+Sherwood+Park%2C+AB+T8H+0Y6%2C+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="440"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.25] invert-[0.9] hue-rotate-180"
            />
          </div>
        </div>
      </section>
    </div>
  );
}