import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Sparkles } from "lucide-react";

import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import advancedImage from "@/assets/advanced-aesthetics.jpg";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Lumé Aesthetics Atelier" },
      {
        name: "description",
        content:
          "Discover Lumé’s considered approach to skin, beauty, body rituals, and bespoke clinical aesthetics.",
      },
      { property: "og:title", content: "About Lumé Aesthetics" },
      {
        property: "og:description",
        content: "A considered beauty destination where care, artistry, and precision meet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="The Lumé Philosophy"
        title={
          <>
            Beauty, considered
            <br />
            <em>from every angle.</em>
          </>
        }
      >
        Lumé brings together restorative rituals, meticulous beauty services, and advanced clinical aesthetics in one calm, deeply personal studio sanctuary.
      </PageIntro>

      {/* Interior & Approach Section */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <motion.img
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src={facialImage}
              alt="Lumé bespoke facial treatment session"
              width={800}
              height={600}
              className="w-full h-[400px] object-cover border border-copper/20 shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              src={bodyImage}
              alt="Lumé modern spa sanctuary interior"
              width={800}
              height={500}
              className="w-full h-[280px] object-cover border border-copper/20 shadow-md"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-lg lg:pl-10"
          >
            <p className="eyebrow">A Private Atelier</p>
            <h2 className="mt-6 font-display text-5xl font-light leading-tight">
              Space to pause.
              <br />
              Care with purpose.
            </h2>
            <div className="mt-8 space-y-5 leading-8 text-muted-foreground">
              <p>
                At Lumé Aesthetics, we believe the most beautiful results feel effortlessly like you—rested, polished, and quietly confident. That means listening first and choosing each experience with intention.
              </p>
              <p>
                Our menu moves naturally between facial and body rituals, beauty artistry, and consultation-led advanced treatments, allowing care to feel connected rather than one-size-fits-all.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Standards */}
      <section className="bg-foreground px-5 py-24 text-background sm:px-8 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <p className="eyebrow text-copper-light text-center sm:text-left">Our Core Philosophy</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-background text-center sm:text-left">
            Uncompromising Standards of Care
          </h2>
          
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group border border-copper/30 bg-white/5 p-8 transition-all duration-300 hover:border-copper-light hover:bg-white/10 shadow-lg relative"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-copper-light transition-transform duration-300 group-hover:scale-110">01</span>
                <Sparkles className="size-5 text-copper-light opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-light text-background">Clean & Sustainable</h3>
              <p className="mt-4 text-xs leading-7 text-background/70 font-light">
                We formulate with clean, high-purity botanicals and skin-identical active ingredients that respect natural skin barrier integrity without compromise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group border border-copper/30 bg-white/5 p-8 transition-all duration-300 hover:border-copper-light hover:bg-white/10 shadow-lg relative"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-copper-light transition-transform duration-300 group-hover:scale-110">02</span>
                <Sparkles className="size-5 text-copper-light opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-light text-background">Tailored Precision</h3>
              <p className="mt-4 text-xs leading-7 text-background/70 font-light">
                Every detail—from custom facial AHA peels to lash lifts, gel nail artistry, and aesthetic placement—is executed with meticulous clinical detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group border border-copper/30 bg-white/5 p-8 transition-all duration-300 hover:border-copper-light hover:bg-white/10 shadow-lg relative"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-copper-light transition-transform duration-300 group-hover:scale-110">03</span>
                <Sparkles className="size-5 text-copper-light opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-light text-background">Unhurried Sanctuary</h3>
              <p className="mt-4 text-xs leading-7 text-background/70 font-light">
                The studio atmosphere is calm by design, giving every appointment the time, privacy, and undivided 1-on-1 attention it deserves.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section with Image Placeholders */}
      <section className="px-5 py-24 sm:px-8 bg-background border-b border-copper/15">
        <div className="mx-auto max-w-7xl">
          <div className="text-center sm:text-left max-w-2xl">
            <p className="eyebrow text-copper">Master Practitioners</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-foreground">
              Meet Our Specialist Team
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Our clinical dermal therapists, aesthetic practitioners, and beauty artists bring years of specialized artistry and warm, personal care to Lumé.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-copper/25 bg-secondary/20 p-7 flex flex-col items-center text-center space-y-4 group hover:border-copper transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-copper/40 bg-secondary flex flex-col items-center justify-center text-muted-foreground group-hover:border-copper transition-colors">
                <span className="font-display text-2xl text-copper font-light">HK</span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Photo Placeholder</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-foreground">Harleen Kaur</h3>
                <p className="text-[11px] uppercase tracking-wider text-copper font-semibold mt-1">Founder & Lead Clinical Dermal Specialist</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Specializes in Bioline 20% AHA peels, skin barrier repair, and custom facial sculpting rituals.
                </p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="border border-copper/25 bg-secondary/20 p-7 flex flex-col items-center text-center space-y-4 group hover:border-copper transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-copper/40 bg-secondary flex flex-col items-center justify-center text-muted-foreground group-hover:border-copper transition-colors">
                <span className="font-display text-2xl text-copper font-light">GS</span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Photo Placeholder</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-foreground">Gurpreet Singh</h3>
                <p className="text-[11px] uppercase tracking-wider text-copper font-semibold mt-1">Advanced Aesthetic Clinical Injector</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Clinical lead for Lumé Botox®, dermal filler contouring, and precision PRP microneedling.
                </p>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="border border-copper/25 bg-secondary/20 p-7 flex flex-col items-center text-center space-y-4 group hover:border-copper transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-copper/40 bg-secondary flex flex-col items-center justify-center text-muted-foreground group-hover:border-copper transition-colors">
                <span className="font-display text-2xl text-copper font-light">SG</span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Photo Placeholder</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-foreground">Simran Gill</h3>
                <p className="text-[11px] uppercase tracking-wider text-copper font-semibold mt-1">Master Beauty & Makeup Artist</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Expert in Soft Glam, Bridal makeup artistry, Lash Couture lifts, and statement nail design.
                </p>
              </div>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="border border-copper/25 bg-secondary/20 p-7 flex flex-col items-center text-center space-y-4 group hover:border-copper transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-copper/40 bg-secondary flex flex-col items-center justify-center text-muted-foreground group-hover:border-copper transition-colors">
                <span className="font-display text-2xl text-copper font-light">AM</span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Photo Placeholder</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-foreground">Amanpreet Mann</h3>
                <p className="text-[11px] uppercase tracking-wider text-copper font-semibold mt-1">Clinical Infusion & Body Therapist</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Specializes in IV wellness infusion therapies, Mocha Gua Sha bodywork, and Retinol wraps.
                </p>
              </div>
            </motion.div>

            {/* Team Member 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="border border-copper/25 bg-secondary/20 p-7 flex flex-col items-center text-center space-y-4 group hover:border-copper transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-copper/40 bg-secondary flex flex-col items-center justify-center text-muted-foreground group-hover:border-copper transition-colors">
                <span className="font-display text-2xl text-copper font-light">JD</span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Photo Placeholder</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-foreground">Jasleen Dhillon</h3>
                <p className="text-[11px] uppercase tracking-wider text-copper font-semibold mt-1">Senior Esthetician & Acne Specialist</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Focuses on Acne Purify rituals, high frequency therapy, extractions, and blue LED light care.
                </p>
              </div>
            </motion.div>

            {/* Team Member 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-copper/25 bg-secondary/20 p-7 flex flex-col items-center text-center space-y-4 group hover:border-copper transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-copper/40 bg-secondary flex flex-col items-center justify-center text-muted-foreground group-hover:border-copper transition-colors">
                <span className="font-display text-2xl text-copper font-light">MS</span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Photo Placeholder</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-foreground">Maninder Sidhu</h3>
                <p className="text-[11px] uppercase tracking-wider text-copper font-semibold mt-1">Aesthetics Medical Director</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Oversees health screening protocols, clinical safety guidelines, and advanced skin regenerations.
                </p>
              </div>
            </motion.div>

            {/* Team Member 7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="border border-copper/25 bg-secondary/20 p-7 flex flex-col items-center text-center space-y-4 group hover:border-copper transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-copper/40 bg-secondary flex flex-col items-center justify-center text-muted-foreground group-hover:border-copper transition-colors">
                <span className="font-display text-2xl text-copper font-light">KG</span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Photo Placeholder</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-foreground">Kirandeep Grewal</h3>
                <p className="text-[11px] uppercase tracking-wider text-copper font-semibold mt-1">Henna Artist & Precision Threader</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Renowned for intricate bridal henna artistry, brow shaping, and delicate upper-lip threading.
                </p>
              </div>
            </motion.div>

            {/* Team Member 8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.56 }}
              className="border border-copper/25 bg-secondary/20 p-7 flex flex-col items-center text-center space-y-4 group hover:border-copper transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-copper/40 bg-secondary flex flex-col items-center justify-center text-muted-foreground group-hover:border-copper transition-colors">
                <span className="font-display text-2xl text-copper font-light">TS</span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Photo Placeholder</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-foreground">Tarunpreet Sandhu</h3>
                <p className="text-[11px] uppercase tracking-wider text-copper font-semibold mt-1">Laser & Teeth Whitening Practitioner</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Specialist in cosmetic teeth whitening, radio frequency skin tightening, and laser resurfacing.
                </p>
              </div>
            </motion.div>

            {/* Team Member 9 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.64 }}
              className="border border-copper/25 bg-secondary/20 p-7 flex flex-col items-center text-center space-y-4 group hover:border-copper transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-copper/40 bg-secondary flex flex-col items-center justify-center text-muted-foreground group-hover:border-copper transition-colors">
                <span className="font-display text-2xl text-copper font-light">PB</span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Photo Placeholder</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-foreground">Priya Brar</h3>
                <p className="text-[11px] uppercase tracking-wider text-copper font-semibold mt-1">Atelier Experience Director</p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Ensures an unhurried, welcoming sanctuary environment and personal concierge scheduling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Location, Contact Details & Social Handles */}
      <section className="px-5 py-24 sm:px-8 bg-secondary/30">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="eyebrow text-copper">Atelier Details</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-light text-foreground">
                Visit our Sherwood Park sanctuary.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground max-w-xl">
                Located conveniently in Sherwood Park, Alberta. We welcome you for tailored clinical skin consultations, restorative spa days, and beauty artistry.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 pt-2">
              <div className="border border-copper/20 bg-background p-6 space-y-3">
                <div className="flex items-center gap-2.5 text-copper font-medium">
                  <MapPin className="size-4" />
                  <span className="text-xs uppercase tracking-widest text-foreground font-semibold">Location</span>
                </div>
                <p className="text-xs leading-6 text-muted-foreground">
                  Sherwood Park, AB, Canada
                  <br />
                  <span className="text-[11px] text-copper font-medium">Private Atelier Suite</span>
                </p>
              </div>

              <div className="border border-copper/20 bg-background p-6 space-y-3">
                <div className="flex items-center gap-2.5 text-copper font-medium">
                  <Phone className="size-4" />
                  <span className="text-xs uppercase tracking-widest text-foreground font-semibold">Direct Atelier Line</span>
                </div>
                <p className="text-xs leading-6 text-muted-foreground">
                  <a href="tel:+17804108278" className="hover:text-copper transition-colors">
                    (780) 410-8278
                  </a>
                  <br />
                  <a href="mailto:info@lumeaesthetics.co" className="hover:text-copper transition-colors">
                    info@lumeaesthetics.co
                  </a>
                </p>
              </div>

              <div className="border border-copper/20 bg-background p-6 space-y-3">
                <div className="flex items-center gap-2.5 text-copper font-medium">
                  <Clock className="size-4" />
                  <span className="text-xs uppercase tracking-widest text-foreground font-semibold">Hours of Care</span>
                </div>
                <p className="text-xs leading-5 text-muted-foreground">
                  Mon – Fri: 10:00 AM – 7:00 PM
                  <br />
                  Saturday: 10:00 AM – 5:00 PM
                  <br />
                  Sunday: By Appointment
                </p>
              </div>

              <div className="border border-copper/20 bg-background p-6 space-y-3">
                <div className="flex items-center gap-2.5 text-copper font-medium">
                  <Sparkles className="size-4" />
                  <span className="text-xs uppercase tracking-widest text-foreground font-semibold">Connect With Us</span>
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-copper transition-colors"
                  >
                    <Instagram className="size-4 text-copper" /> @lumeaesthetics
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-copper transition-colors"
                  >
                    <Facebook className="size-4 text-copper" /> Lumé Studio
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                asChild
                className="h-12 rounded-none bg-copper px-8 text-xs uppercase tracking-[0.16em] text-primary-foreground hover:bg-copper/90 transition-all duration-300"
              >
                <a href="tel:+17804108278">Call Studio: (780) 410-8278</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-none border-copper px-8 text-xs uppercase tracking-[0.16em] text-copper hover:bg-copper hover:text-primary-foreground transition-all duration-300"
              >
                <a href="mailto:info@lumeaesthetics.co">Send Direct Email</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden border border-copper/30 shadow-xl relative">
              <img
                src={advancedImage}
                alt="Lumé Aesthetics Sherwood Park Studio"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-background">
                  <span className="eyebrow text-copper-light text-[10px]">Sherwood Park Sanctuary</span>
                  <h4 className="font-display text-2xl font-light">Where Science Meets Artistry</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}