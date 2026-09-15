import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Sparkles, Send, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
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
        content: "Plan your visit or speak with Lumé concierge about your tailored skincare, beauty artistry, or clinical aesthetics.",
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
    <>
      <PageIntro
        eyebrow="Concierge & Appointments"
        title={
          <>
            Your Lumé ritual
            <br />
            <em>begins here.</em>
          </>
        }
      >
        Speak with our studio concierge about what you would like to address, or reserve your private consultation at our Sherwood Park atelier.
      </PageIntro>

      {/* Top 3 Core Contact Cards */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 border-b border-copper/15">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <a
            href="tel:+17804108278"
            className="group border border-copper/25 bg-background p-8 sm:p-10 transition-all duration-300 hover:border-copper hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="p-3 bg-[#FAF7F2] border border-copper/20 text-copper group-hover:bg-copper group-hover:text-white transition-colors">
                  <Phone className="size-5" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold">Direct Atelier</span>
              </div>
              <p className="font-display text-2xl sm:text-3xl font-light text-foreground mt-6">
                (780) 410-8278
              </p>
              <p className="mt-2 text-xs leading-6 text-muted-foreground font-light">
                Direct booking line, treatment guidance, and appointment reservations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-copper/15 flex items-center text-[10px] uppercase tracking-[0.16em] text-copper font-medium">
              <span>Call Atelier Concierge →</span>
            </div>
          </a>

          <a
            href="mailto:info@lumeaesthetics.co"
            className="group border border-copper/25 bg-background p-8 sm:p-10 transition-all duration-300 hover:border-copper hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="p-3 bg-[#FAF7F2] border border-copper/20 text-copper group-hover:bg-copper group-hover:text-white transition-colors">
                  <Mail className="size-5" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold">Electronic Mail</span>
              </div>
              <p className="font-display text-2xl sm:text-3xl font-light text-foreground mt-6">
                info@lumeaesthetics.co
              </p>
              <p className="mt-2 text-xs leading-6 text-muted-foreground font-light">
                General inquiries, bridal packages, and personalized treatment roadmaps.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-copper/15 flex items-center text-[10px] uppercase tracking-[0.16em] text-copper font-medium">
              <span>Send Written Message →</span>
            </div>
          </a>

          <div className="border border-copper/25 bg-background p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="p-3 bg-[#FAF7F2] border border-copper/20 text-copper">
                  <MapPin className="size-5" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold">Sanctuary Suite</span>
              </div>
              <p className="font-display text-2xl sm:text-3xl font-light text-foreground mt-6">
                2457 Broadmoor Blvd
              </p>
              <p className="mt-1 text-xs text-copper font-medium">Suite #121 • Sherwood Park, AB</p>
              <p className="mt-2 text-xs leading-6 text-muted-foreground font-light">
                Convenient parking, discrete private entrance, and tranquil acoustic suites.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-copper/15 flex items-center text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span>T8H 0Y6, Canada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reservation & Consultation Form Section */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 bg-[#FAF7F2]">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-12 items-start">
          
          {/* Left Column: Context & House Expectations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-copper" />
                <span className="eyebrow text-copper text-[10px]">Private Consultation</span>
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-foreground">
                Request an Appointment
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-7 text-muted-foreground font-light">
                Whether you are seeking European facial rejuvenation, milestone spa pampering, or consultation-led medical injectables, our concierge will tailor your visit with precision.
              </p>
            </div>

            {/* Studio Sanctuary Image Plate */}
            <div className="overflow-hidden border border-copper/30 shadow-lg relative group bg-[#131211]">
              <img
                src={plump2}
                alt="Lumé Aesthetics Private Treatment Lounge"
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131211]/85 via-transparent to-transparent flex items-end p-5">
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

            {/* What to Expect Card */}
            <div className="border border-copper/25 bg-background p-6 sm:p-8 space-y-5 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold block">
                The Lumé Arrival Experience
              </span>
              <ul className="space-y-3.5 text-xs text-muted-foreground font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-copper shrink-0 mt-0.5" />
                  <span><strong>Dedicated 1-on-1 Consultation:</strong> Unhurried assessment of facial anatomy and skin condition before treatment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-copper shrink-0 mt-0.5" />
                  <span><strong>Sensory Sanctuary:</strong> Calming acoustic isolation and warm organic herbal tea service upon arrival.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-copper shrink-0 mt-0.5" />
                  <span><strong>Zero-Pressure Advice:</strong> Honest clinical recommendations tailored strictly to your goals and comfort.</span>
                </li>
              </ul>
            </div>

            {/* Hours Box */}
            <div className="border border-copper/20 bg-background p-6 space-y-3">
              <div className="flex items-center gap-2 text-copper">
                <Clock className="size-4" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-foreground">Atelier Hours</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground pt-1">
                <div>
                  <span className="text-foreground font-medium block">Mon – Fri</span>
                  <span>10:00 AM – 7:00 PM</span>
                </div>
                <div>
                  <span className="text-foreground font-medium block">Saturday</span>
                  <span>10:00 AM – 5:00 PM</span>
                </div>
                <div className="col-span-2 pt-1 border-t border-copper/10">
                  <span className="text-foreground font-medium">Sunday:</span> By Bespoke Appointment Only
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="border border-copper/30 bg-background p-8 sm:p-12 shadow-xl relative">
              <div className="mb-8 border-b border-copper/15 pb-4">
                <span className="eyebrow text-copper text-[10px]">Client Concierge Portal</span>
                <h3 className="font-display text-2xl sm:text-3xl font-light text-foreground mt-1">
                  Consultation & Reservation Request
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-[#FAF7F2] border border-copper/30 text-center space-y-4"
                >
                  <div className="size-12 rounded-full bg-copper/10 text-copper flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h4 className="font-display text-2xl font-light text-foreground">Inquiry Prepared</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                    Your appointment details have been prepared for our concierge team. If your email client did not open automatically, please contact us directly at <a href="mailto:info@lumeaesthetics.co" className="text-copper underline font-medium">info@lumeaesthetics.co</a> or call <a href="tel:+17804108278" className="text-copper underline font-medium">(780) 410-8278</a>.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-4 rounded-none border-copper text-[10px] uppercase tracking-[0.18em] text-copper hover:bg-copper hover:text-white"
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-[10px] uppercase tracking-[0.16em] text-foreground font-semibold">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#FAF7F2] border border-copper/25 px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-copper transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-[0.16em] text-foreground font-semibold">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. eleanor@example.com"
                        className="w-full bg-[#FAF7F2] border border-copper/25 px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-copper transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.16em] text-foreground font-semibold">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. (780) 555-0192"
                        className="w-full bg-[#FAF7F2] border border-copper/25 px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-copper transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="serviceCategory" className="text-[10px] uppercase tracking-[0.16em] text-foreground font-semibold">
                        Collection of Interest *
                      </label>
                      <select
                        id="serviceCategory"
                        value={serviceCategory}
                        onChange={(e) => setServiceCategory(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-copper/25 px-4 py-3 text-xs text-foreground focus:outline-none focus:border-copper transition-colors"
                      >
                        <option value="Skin & Body Rituals">Collection I — Skin & Body Rituals</option>
                        <option value="Signature Spa Packages">Collection II — Signature Spa Packages</option>
                        <option value="Beauty Atelier & Artistry">Collection III — Beauty Atelier & Artistry</option>
                        <option value="Advanced Clinical Aesthetics">Collection IV — Advanced Clinical Aesthetics</option>
                        <option value="Comprehensive Aesthetic Diagnosis">General Aesthetic Diagnosis & Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="preferredDate" className="text-[10px] uppercase tracking-[0.16em] text-foreground font-semibold">
                      Preferred Date or Time Window
                    </label>
                    <input
                      id="preferredDate"
                      type="text"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      placeholder="e.g. Next Tuesday afternoon or Saturday morning"
                      className="w-full bg-[#FAF7F2] border border-copper/25 px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-copper transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="notes" className="text-[10px] uppercase tracking-[0.16em] text-foreground font-semibold">
                      Aesthetic Goals or Skin Notes
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Describe your skin concerns, past treatments, or any particular goals you wish to achieve..."
                      className="w-full bg-[#FAF7F2] border border-copper/25 p-4 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-copper transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-none bg-[#131211] text-white text-[10px] uppercase tracking-[0.2em] hover:bg-copper transition-all duration-300 border border-copper/40"
                  >
                    <Send className="size-3.5 mr-2 text-copper" />
                    Transmit Consultation Request
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Map & Location Section */}
      <section className="border-t border-copper/15 bg-secondary/40 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-copper text-[10px]">Location & Directions</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light text-foreground">
                2457 Broadmoor Blvd #121, Sherwood Park
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-light max-w-xl">
                Located with effortless access from both Edmonton and Strathcona County, with ample complimentary parking immediately outside our entrance.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-none border-copper bg-transparent px-6 text-[10px] uppercase tracking-[0.18em] text-copper hover:bg-copper hover:text-white transition-all duration-300 self-start sm:self-auto"
            >
              <a href="https://maps.app.goo.gl/x93Ne5NphPnA5DXN8" target="_blank" rel="noopener noreferrer">
                Open in Google Maps ↗
              </a>
            </Button>
          </div>

          <div className="overflow-hidden border border-copper/30 bg-background shadow-xl">
            <iframe
              title="Lumé Aesthetics location map"
              src="https://maps.google.com/maps?q=Lum%C3%A9+Aesthetics%2C+2457+Broadmoor+Blvd+%23121%2C+Sherwood+Park%2C+AB+T8H+0Y6%2C+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="440"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.15]"
            />
          </div>
        </div>
      </section>
    </>
  );
}