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
      <section className="bg-foreground px-5 py-24 text-background sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-copper-light">Our Standards</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="font-display text-5xl text-copper-light">01</span>
              <h3 className="mt-5 font-display text-3xl font-light">Clean & Sustainable</h3>
              <p className="mt-3 text-sm leading-7 text-background/65">
                We formulate with clean, high-purity botanicals and skin-identical active ingredients that respect skin barrier integrity.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              <span className="font-display text-5xl text-copper-light">02</span>
              <h3 className="mt-5 font-display text-3xl font-light">Tailored Precision</h3>
              <p className="mt-3 text-sm leading-7 text-background/65">
                Every detail—from custom facial peels to lash lifts and aesthetic placement—is executed with meticulous detail.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
              <span className="font-display text-5xl text-copper-light">03</span>
              <h3 className="mt-5 font-display text-3xl font-light">Unhurried Sanctuary</h3>
              <p className="mt-3 text-sm leading-7 text-background/65">
                The studio atmosphere is calm by design, giving every appointment the time, privacy, and undivided attention it deserves.
              </p>
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