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
    <div className="bg-[#FAF5F3] text-[#2A2124]">
      {/* Bespoke Reservation Hero */}
      <section className="relative overflow-hidden px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 border-b border-[#B76E79]/20 bg-gradient-to-b from-[#FAF5F3] via-[#F4E8E5] to-[#FAF5F3]">
        <div className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-[#E8C5C8]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em] text-[#8F4954]">
                  <ShinyText text="Online Concierge &amp; Reservations" speed={4} />
                </span>
                <span className="h-px w-8 bg-[#B76E79]/40" />
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-white border border-[#B76E79]/30 text-[#8F4954] shadow-xs">
                  <DecryptedText text="100% PRIVATE SUITE GUARANTEED" />
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-[#2A2124] text-balance">
                Reserve your
                <br />
                <span className="italic font-serif bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] bg-clip-text text-transparent font-normal">
                  <SplitText text="atelier visit." delay={45} />
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base sm:leading-7 text-[#5E5054] font-normal leading-relaxed">
                Select your desired ritual or consultation below. Our concierge will prepare your private acoustic suite and tailor European formulations specifically to your aesthetic goals.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <LiveSuiteClock />
                <span className="text-xs text-[#5E5054] font-medium">
                  Direct Line: (780) 410-8278
                </span>
              </div>
            </div>

            {/* Bespoke Right Highlight Frame with Pure White Furniture Card */}
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
      </section>

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
          {/* Left Column: Interactive Booking Form with Pure White Furniture Card */}
          <div className="lg:col-span-8">
            <SpotlightCard
              spotlightColor="rgba(183, 110, 121, 0.15)"
              borderColor="rgba(183, 110, 121, 0.25)"
              className="bg-white p-6 sm:p-10 shadow-soft-card rounded-2xl relative text-[#2A2124] border border-[#B76E79]/20"
            >
              <h2 className="font-display text-3xl font-light text-[#2A2124] border-b border-[#B76E79]/15 pb-4">
                Appointment Details
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="size-16 rounded-full bg-[#FAF0F0] border border-[#B76E79] text-[#8F4954] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="font-display text-3xl text-[#2A2124] font-light">
                    Booking Request Sent
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5054] max-w-md mx-auto leading-6 font-normal">
                    Thank you, <strong>{fullName}</strong>. Your appointment request for{" "}
                    <strong>{selectedTreatment}</strong> has been opened in your email client. Our concierge will confirm your session shortly.
                  </p>
                  <div className="pt-4">
                    <Button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="rounded-full border-[#B76E79]/40 bg-white text-xs uppercase tracking-widest text-[#8F4954] hover:bg-[#FAF0F0] hover:text-[#2A2124] font-semibold"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-8 text-xs">
                  {/* Step 1: Category Selection */}
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-semibold block">
                      1. Select Ritual Discipline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
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
                          className={`p-3.5 text-left rounded-xl border transition-all text-xs ${
                            selectedCategory === cat
                              ? "border-[#B76E79] bg-[#FAF0F0] text-[#8F4954] font-semibold shadow-xs"
                              : "border-[#B76E79]/20 bg-[#FAF5F3] text-[#5E5054] hover:border-[#B76E79]/40 hover:text-[#2A2124]"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Treatment Selection */}
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-semibold block">
                      2. Select Menu Treatment / Ceremony
                    </label>
                    <select
                      value={selectedTreatment}
                      onChange={(e) => setSelectedTreatment(e.target.value)}
                      className="w-full h-12 px-4 bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl text-[#2A2124] text-xs focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954]"
                      required
                    >
                      {treatmentOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-[#2A2124]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Step 3: Date & Preferred Timing */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-semibold block">
                        3. Preferred Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full h-12 px-4 bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl text-[#2A2124] text-xs focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954]"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#8F4954] font-semibold block">
                        4. Preferred Time Window
                      </label>
                      <select
                        value={selectedTimeSlot}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="w-full h-12 px-4 bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl text-[#2A2124] text-xs focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954]"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)" className="bg-white text-[#2A2124]">
                          Morning (10:00 AM - 1:00 PM)
                        </option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)" className="bg-white text-[#2A2124]">
                          Afternoon (1:00 PM - 4:00 PM)
                        </option>
                        <option value="Late Afternoon / Evening (4:00 PM - 7:00 PM)" className="bg-white text-[#2A2124]">
                          Late Afternoon / Evening (4:00 PM - 7:00 PM)
                        </option>
                        <option value="Flexible / First Available" className="bg-white text-[#2A2124]">
                          Flexible / First Available
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div className="space-y-4 pt-4 border-t border-[#B76E79]/15">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#8F4954] font-bold block">
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
                          className="w-full h-11 px-4 bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl text-[#2A2124] text-xs placeholder:text-[#7A6B6E] focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954]"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number *"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full h-11 px-4 bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl text-[#2A2124] text-xs placeholder:text-[#7A6B6E] focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954]"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address *"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-11 px-4 bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl text-[#2A2124] text-xs placeholder:text-[#7A6B6E] focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954]"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder="Skin concerns, sensitivities, bridal event dates, or specific questions..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full p-4 bg-[#FAF5F3] border border-[#B76E79]/30 rounded-xl text-[#2A2124] text-xs placeholder:text-[#7A6B6E] focus:outline-none focus:border-[#8F4954] focus:ring-1 focus:ring-[#8F4954] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Action with MagneticButton */}
                  <div className="pt-4 border-t border-[#B76E79]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-[#7A6B6E] font-normal">
                      * No prepayment required. Consultations are 100% private.
                    </span>
                    <MagneticButton pullStrength={0.25}>
                      <Button
                        type="submit"
                        className="w-full sm:w-auto h-12 rounded-full bg-gradient-to-r from-[#8F4954] via-[#B76E79] to-[#8F4954] text-white font-semibold px-10 text-xs uppercase tracking-[0.16em] hover:opacity-95 transition-all shadow-md"
                      >
                        Confirm &amp; Request Appointment
                      </Button>
                    </MagneticButton>
                  </div>
                </form>
              )}
            </SpotlightCard>
          </div>

          {/* Right Column: Direct Studio Contact & Sanctuary Perks with Pure White Furniture Cards */}
          <div className="lg:col-span-4 space-y-6">
            {/* Visual Sanctuary Plate */}
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
                        Sanctuary Atmosphere
                      </span>
                      <p className="text-xs text-white font-light mt-0.5">
                        100% Private 1-on-1 Suites • Sherwood Park
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltedCard>

            {/* Direct Studio Line Card */}
            <SpotlightCard
              spotlightColor="rgba(183, 110, 121, 0.15)"
              borderColor="rgba(183, 110, 121, 0.25)"
              className="bg-white text-[#2A2124] p-8 space-y-4 shadow-soft-card rounded-2xl border border-[#B76E79]/20"
            >
              <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">
                <DecryptedText text="Direct Studio Line" />
              </span>
              <h3 className="font-display text-2xl font-light text-[#2A2124]">
                Prefer to book by phone?
              </h3>
              <p className="text-xs text-[#5E5054] leading-6 font-normal">
                Our concierge team is available to guide your treatment selection, advise on bridal timelines, or book urgent appointments.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+17804108278"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#8F4954] hover:text-[#B76E79] transition-colors"
                >
                  <Phone className="size-4 text-[#B76E79]" /> (780) 410-8278
                </a>
              </div>
            </SpotlightCard>

            {/* Studio Hours & Location Card */}
            <SpotlightCard
              spotlightColor="rgba(183, 110, 121, 0.15)"
              borderColor="rgba(183, 110, 121, 0.25)"
              className="bg-white text-[#2A2124] p-8 space-y-4 shadow-soft-card rounded-2xl border border-[#B76E79]/20"
            >
              <span className="eyebrow text-[#8F4954] text-[10px] tracking-[0.2em] font-semibold">Sherwood Park Sanctuary</span>
              <div className="space-y-2.5 text-xs text-[#5E5054] font-normal">
                <p className="flex items-start gap-2">
                  <MapPin className="size-4 text-[#B76E79] shrink-0 mt-0.5" />
                  <span>2457 Broadmoor Blvd #121, Sherwood Park, AB T8H 0Y6</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="size-4 text-[#B76E79] shrink-0 mt-0.5" />
                  <span>Mon–Fri: 10am – 7pm | Sat: 10am – 5pm | Sun: Closed</span>
                </p>
              </div>

              <div className="pt-4 border-t border-[#B76E79]/15 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#8F4954] font-semibold block">
                  The Lumé Promise:
                </span>
                <ul className="space-y-1.5 text-xs text-[#5E5054]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#B76E79]" /> 100% Private acoustic suites
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#B76E79]" /> Certified Italian Bioline skincare
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#B76E79]" /> Health Canada approved clinicals
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
