import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  User,
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
import { addOns, spaPackages, treatmentGroups } from "@/lib/treatments";

import plump2 from "@/assets/competitors/plump-2.jpg";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book An Appointment | Lumé Aesthetics Atelier" },
      {
        name: "description",
        content:
          "Reserve your private aesthetic consultation, Bioline facial, spa package, or clinical injector session at Lumé Aesthetics in Sherwood Park, AB.",
      },
      { property: "og:title", content: "Book An Appointment | Lumé Aesthetics Atelier" },
      { property: "og:description", content: "Schedule your unhurried consultation and treatment session." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
  const [selectedCategory, setSelectedCategory] = useState("Skin & Body Rituals");
  const [selectedTreatment, setSelectedTreatment] = useState("Lumé Aqua Luxe Facial ($125 • 65 min)");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("Morning (10:00 AM - 1:00 PM)");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Derive treatment options based on selected category
  const treatmentOptions = (() => {
    switch (selectedCategory) {
      case "Skin & Body Rituals":
        return treatmentGroups[0]?.treatments.map((t) => `${t.name} (${t.price} • ${t.duration})`) || [];
      case "Signature Spa Packages":
        return spaPackages.map((t) => `${t.name} (${t.price} • ${t.duration})`);
      case "Beauty Atelier":
        return treatmentGroups[1]?.treatments.map((t) => `${t.name} (${t.price} • ${t.duration || "Custom"})`) || [];
      case "Advanced Clinical Aesthetics":
        return treatmentGroups[2]?.treatments.map((t) => `${t.name} (${t.price} • ${t.duration || "Consultation"})`) || [];
      default:
        return [];
    }
  })();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Appointment Booking: ${selectedTreatment} — ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCategory: ${selectedCategory}\nSelected Treatment: ${selectedTreatment}\nPreferred Date: ${selectedDate || "Next Available"}\nPreferred Time: ${selectedTimeSlot}\n\nGuest Notes & Concerns:\n${notes}`
    );
    window.location.href = `mailto:info@lumeaesthetics.co?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#0A0908] text-[#FAF7F2]">
      {/* Bespoke Reservation Hero with AuroraGlow */}
      <AuroraGlow variant="dark" className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-copper/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em]">
                  <ShinyText text="Online Concierge &amp; Reservations" speed={4} />
                </span>
                <span className="h-px w-8 bg-[#F3C592]/70" />
                <span className="dark-pill-badge">
                  <DecryptedText text="100% PRIVATE SUITE GUARANTEED" />
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-[#FAF7F2] text-balance">
                Reserve your
                <br />
                <span className="italic font-serif gold-gradient-text font-normal">
                  <SplitText text="atelier visit." delay={45} />
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base sm:leading-7 text-[#E7E2DB] font-normal leading-relaxed">
                Select your desired ritual or consultation below. Our concierge will prepare your private acoustic suite and tailor European formulations specifically to your aesthetic goals.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <LiveSuiteClock />
                <span className="text-xs text-[#FAF7F2]/80 font-medium">
                  Direct Line: (780) 410-8278
                </span>
              </div>
            </div>

            {/* Bespoke Right Highlight Frame with TiltedCard */}
            <div className="lg:col-span-5 relative">
              <TiltedCard rotateAmplitude={8}>
                <div className="border border-copper/35 bg-[#131211] p-3 shadow-2xl relative">
                  <div className="overflow-hidden relative group">
                    <img
                      src={plump2}
                      alt="Private Lumé suite interior"
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131211] via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-[9px] uppercase tracking-widest text-copper font-mono">
                        <DecryptedText text="Sherwood Park Sanctuary" />
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
          "ONLINE CONCIERGE",
          "100% PRIVATE SUITES",
          "UNHURRIED APPOINTMENTS",
          "COMPLIMENTARY HERBAL TEA",
          "SHERWOOD PARK, ALBERTA",
        ]}
      />

      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Interactive Booking Form with SpotlightCard */}
          <div className="lg:col-span-8">
            <SpotlightCard
              spotlightColor="rgba(181, 126, 82, 0.2)"
              borderColor="rgba(181, 126, 82, 0.3)"
              className="bg-[#131211] p-6 sm:p-10 shadow-2xl relative text-white border border-copper/25"
            >
              <h2 className="font-display text-3xl font-light text-white border-b border-copper/20 pb-4">
                Appointment Details
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="size-16 rounded-full bg-copper/20 border border-copper text-copper-light flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="font-display text-3xl text-white font-light">
                    Booking Request Sent
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-6 font-light">
                    Thank you, <strong>{fullName}</strong>. Your appointment request for{" "}
                    <strong>{selectedTreatment}</strong> has been opened in your email client. Our concierge will confirm your session shortly.
                  </p>
                  <div className="pt-4">
                    <Button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="rounded-none border-copper text-xs uppercase tracking-widest text-copper-light hover:bg-copper hover:text-[#0A0908]"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-8 text-xs">
                  {/* Step 1: Category Selection */}
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold block">
                      1. Select Ritual Discipline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        "Skin & Body Rituals",
                        "Signature Spa Packages",
                        "Beauty Atelier",
                        "Advanced Clinical Aesthetics",
                      ].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat);
                            const first = (() => {
                              if (cat === "Skin & Body Rituals")
                                return `${treatmentGroups[0]?.treatments[0]?.name} (${treatmentGroups[0]?.treatments[0]?.price} • ${treatmentGroups[0]?.treatments[0]?.duration})`;
                              if (cat === "Signature Spa Packages")
                                return `${spaPackages[0]?.name} (${spaPackages[0]?.price} • ${spaPackages[0]?.duration})`;
                              if (cat === "Beauty Atelier")
                                return `${treatmentGroups[1]?.treatments[0]?.name} (${treatmentGroups[1]?.treatments[0]?.price} • ${treatmentGroups[1]?.treatments[0]?.duration || "Custom"})`;
                              return `${treatmentGroups[2]?.treatments[0]?.name} (${treatmentGroups[2]?.treatments[0]?.price} • ${treatmentGroups[2]?.treatments[0]?.duration || "Consultation"})`;
                            })();
                            setSelectedTreatment(first);
                          }}
                          className={`p-3 text-left border transition-all text-xs ${
                            selectedCategory === cat
                              ? "border-copper bg-[#1c1a17] text-white font-medium shadow-md"
                              : "border-copper/20 bg-[#161412] text-white/60 hover:border-copper/40 hover:text-white"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Treatment Selection */}
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold block">
                      2. Select Menu Treatment / Ceremony
                    </label>
                    <select
                      value={selectedTreatment}
                      onChange={(e) => setSelectedTreatment(e.target.value)}
                      className="w-full h-12 px-4 bg-[#161412] border border-copper/30 text-white text-xs focus:outline-none focus:border-copper"
                      required
                    >
                      {treatmentOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#161412] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Step 3: Date & Preferred Timing */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold block">
                        3. Preferred Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full h-12 px-4 bg-[#161412] border border-copper/30 text-white text-xs focus:outline-none focus:border-copper"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold block">
                        4. Preferred Time Window
                      </label>
                      <select
                        value={selectedTimeSlot}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="w-full h-12 px-4 bg-[#161412] border border-copper/30 text-white text-xs focus:outline-none focus:border-copper"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)" className="bg-[#161412] text-white">
                          Morning (10:00 AM - 1:00 PM)
                        </option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)" className="bg-[#161412] text-white">
                          Afternoon (1:00 PM - 4:00 PM)
                        </option>
                        <option value="Late Afternoon / Evening (4:00 PM - 7:00 PM)" className="bg-[#161412] text-white">
                          Late Afternoon / Evening (4:00 PM - 7:00 PM)
                        </option>
                        <option value="Flexible / First Available" className="bg-[#161412] text-white">
                          Flexible / First Available
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div className="space-y-4 pt-4 border-t border-copper/20">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#F3C592] font-bold block">
                      5. Guest Details
                    </span>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name *"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full h-11 px-4 bg-[#1A1715] border border-copper/40 text-white text-xs placeholder:text-[#FAF7F2]/50 focus:outline-none focus:border-[#F3C592]"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number *"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full h-11 px-4 bg-[#1A1715] border border-copper/40 text-white text-xs placeholder:text-[#FAF7F2]/50 focus:outline-none focus:border-[#F3C592]"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address *"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-11 px-4 bg-[#1A1715] border border-copper/40 text-white text-xs placeholder:text-[#FAF7F2]/50 focus:outline-none focus:border-[#F3C592]"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder="Skin concerns, sensitivities, bridal event dates, or specific questions..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full p-4 bg-[#1A1715] border border-copper/40 text-white text-xs placeholder:text-[#FAF7F2]/50 focus:outline-none focus:border-[#F3C592] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Action with MagneticButton */}
                  <div className="pt-4 border-t border-copper/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-[#FAF7F2]/80 font-normal">
                      * No prepayment required. Consultations are 100% private.
                    </span>
                    <MagneticButton pullStrength={0.25}>
                      <Button
                        type="submit"
                        className="w-full sm:w-auto h-12 rounded-none bg-copper text-[#0A0908] font-bold px-10 text-xs uppercase tracking-[0.18em] hover:bg-white transition-all shadow-lg"
                      >
                        Confirm &amp; Request Appointment
                      </Button>
                    </MagneticButton>
                  </div>
                </form>
              )}
            </SpotlightCard>
          </div>

          {/* Right Column: Direct Studio Contact & Sanctuary Perks with SpotlightCard & TiltedCard */}
          <div className="lg:col-span-4 space-y-6">
            {/* Visual Sanctuary Plate */}
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
                      Sanctuary Atmosphere
                    </span>
                    <p className="text-xs text-white font-light mt-0.5">
                      100% Private 1-on-1 Suites • Sherwood Park
                    </p>
                  </div>
                </div>
              </div>
            </TiltedCard>

            {/* Direct Studio Line Card */}
            <SpotlightCard
              spotlightColor="rgba(223, 194, 157, 0.2)"
              borderColor="rgba(181, 126, 82, 0.4)"
              className="bg-[#131211] text-white p-8 space-y-4 shadow-xl border border-copper/25"
            >
              <span className="eyebrow text-copper-light text-[10px]">
                <DecryptedText text="Direct Studio Line" />
              </span>
              <h3 className="font-display text-2xl font-light text-white">
                Prefer to book by phone?
              </h3>
              <p className="text-xs text-white/75 leading-6 font-light">
                Our concierge team is available to guide your treatment selection, advise on bridal timelines, or book urgent appointments.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+17804108278"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-copper-light hover:text-white transition-colors"
                >
                  <Phone className="size-4" /> (780) 410-8278
                </a>
              </div>
            </SpotlightCard>

            {/* Studio Hours & Location Card */}
            <SpotlightCard
              spotlightColor="rgba(181, 126, 82, 0.18)"
              borderColor="rgba(181, 126, 82, 0.3)"
              className="bg-[#131211] text-white p-8 space-y-4 shadow-xl border border-copper/25"
            >
              <span className="eyebrow text-copper text-[10px]">Sherwood Park Sanctuary</span>
              <div className="space-y-2 text-xs text-white/70 font-light">
                <p className="flex items-start gap-2">
                  <MapPin className="size-4 text-copper shrink-0 mt-0.5" />
                  <span>2457 Broadmoor Blvd #121, Sherwood Park, AB T8H 0Y6</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="size-4 text-copper shrink-0 mt-0.5" />
                  <span>Mon–Fri: 10am – 7pm | Sat: 10am – 5pm | Sun: Closed</span>
                </p>
              </div>

              <div className="pt-4 border-t border-copper/15 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-copper font-semibold block">
                  The Lumé Promise:
                </span>
                <ul className="space-y-1.5 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-copper" /> 100% Private acoustic suites
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-copper" /> Certified Italian Bioline skincare
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-copper" /> Health Canada approved clinicals
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </div>
  );
}
