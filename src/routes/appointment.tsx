import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, Phone, Mail, MapPin, Sparkles, CheckCircle2, ShieldCheck, User } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { RotatingBadge } from "@/components/rotating-badge";
import { Button } from "@/components/ui/button";
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
    <div className="bg-[#FAF7F2] text-[#131211]">
      <PageIntro
        eyebrow="Online Concierge"
        title={
          <>
            Reserve your
            <br />
            <em>atelier visit.</em>
          </>
        }
      >
        Select your desired ritual or consultation below. Our concierge will prepare your private sanctuary suite and tailor formulations specifically to your skin goals.
      </PageIntro>

      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-8 border border-copper/30 bg-background p-6 sm:p-10 shadow-lg relative">
            <h2 className="font-display text-3xl font-light text-foreground border-b border-copper/15 pb-4">
              Appointment Details
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center space-y-4"
              >
                <div className="size-16 rounded-full bg-copper/10 border border-copper text-copper flex items-center justify-center mx-auto">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="font-display text-3xl text-foreground font-light">Booking Request Sent</h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-6 font-light">
                  Thank you, <strong>{fullName}</strong>. Your appointment request for <strong>{selectedTreatment}</strong> has been opened in your email client. Our concierge will confirm your session shortly.
                </p>
                <div className="pt-4">
                  <Button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="rounded-none border-copper text-xs uppercase tracking-widest text-copper hover:bg-copper hover:text-white"
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
                          // Auto select first treatment of newly selected category
                          const first = (() => {
                            if (cat === "Skin & Body Rituals") return `${treatmentGroups[0]?.treatments[0]?.name} (${treatmentGroups[0]?.treatments[0]?.price} • ${treatmentGroups[0]?.treatments[0]?.duration})`;
                            if (cat === "Signature Spa Packages") return `${spaPackages[0]?.name} (${spaPackages[0]?.price} • ${spaPackages[0]?.duration})`;
                            if (cat === "Beauty Atelier") return `${treatmentGroups[1]?.treatments[0]?.name} (${treatmentGroups[1]?.treatments[0]?.price} • ${treatmentGroups[1]?.treatments[0]?.duration || "Custom"})`;
                            return `${treatmentGroups[2]?.treatments[0]?.name} (${treatmentGroups[2]?.treatments[0]?.price} • ${treatmentGroups[2]?.treatments[0]?.duration || "Consultation"})`;
                          })();
                          setSelectedTreatment(first);
                        }}
                        className={`p-3 text-left border transition-all text-xs ${
                          selectedCategory === cat
                            ? "border-copper bg-[#131211] text-white font-medium shadow-md"
                            : "border-copper/20 bg-secondary/30 text-muted-foreground hover:border-copper hover:text-foreground"
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
                    className="w-full h-12 px-4 bg-secondary/20 border border-copper/30 text-foreground text-xs focus:outline-none focus:border-copper"
                    required
                  >
                    {treatmentOptions.map((opt) => (
                      <option key={opt} value={opt}>
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
                      className="w-full h-12 px-4 bg-secondary/20 border border-copper/30 text-foreground text-xs focus:outline-none focus:border-copper"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold block">
                      4. Preferred Time Window
                    </label>
                    <select
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full h-12 px-4 bg-secondary/20 border border-copper/30 text-foreground text-xs focus:outline-none focus:border-copper"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Late Afternoon / Evening (4:00 PM - 7:00 PM)">Late Afternoon / Evening (4:00 PM - 7:00 PM)</option>
                      <option value="Flexible / First Available">Flexible / First Available</option>
                    </select>
                  </div>
                </div>

                {/* Step 4: Contact Information */}
                <div className="space-y-4 pt-4 border-t border-copper/15">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold block">
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
                        className="w-full h-11 px-4 bg-secondary/20 border border-copper/30 text-foreground text-xs focus:outline-none focus:border-copper"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-11 px-4 bg-secondary/20 border border-copper/30 text-foreground text-xs focus:outline-none focus:border-copper"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-11 px-4 bg-secondary/20 border border-copper/30 text-foreground text-xs focus:outline-none focus:border-copper"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Skin concerns, sensitivities, bridal event dates, or specific questions..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-4 bg-secondary/20 border border-copper/30 text-foreground text-xs focus:outline-none focus:border-copper resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-copper/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-muted-foreground font-light">
                    * No prepayment required. Consultations are 100% private.
                  </span>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto h-12 rounded-none bg-copper text-white px-10 text-xs uppercase tracking-[0.18em] hover:bg-copper/90 shadow-lg"
                  >
                    Confirm &amp; Request Appointment
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Studio Contact & Sanctuary Perks */}
          <div className="lg:col-span-4 space-y-6">
            {/* Visual Sanctuary Plate */}
            <div className="overflow-hidden border border-copper/30 shadow-lg relative group bg-[#131211]">
              <img
                src={plump2}
                alt="Lumé Aesthetics Private Treatment Lounge"
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131211]/85 via-transparent to-transparent flex items-end p-5">
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

            {/* Direct Studio Line Card */}
            <div className="border border-copper/30 bg-[#131211] text-white p-8 space-y-4 shadow-xl">
              <span className="eyebrow text-copper-light text-[10px]">Direct Studio Line</span>
              <h3 className="font-display text-2xl font-light text-white">Prefer to book by phone?</h3>
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
            </div>

            {/* Studio Hours & Location Card */}
            <div className="border border-copper/25 bg-background p-8 space-y-4 shadow-sm">
              <span className="eyebrow text-copper text-[10px]">Sherwood Park Sanctuary</span>
              <div className="space-y-2 text-xs text-muted-foreground font-light">
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
                <span className="text-[10px] uppercase tracking-wider text-copper font-semibold block">The Lumé Promise:</span>
                <ul className="space-y-1.5 text-xs text-foreground/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-copper" /> 100% Private acoustic suites</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-copper" /> Certified Italian Bioline skincare</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-copper" /> Health Canada approved clinicals</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
