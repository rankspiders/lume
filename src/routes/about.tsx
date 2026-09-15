import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";

import interiorImage from "@/assets/advanced-aesthetics.jpg";
import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import { PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Discover Lumé’s considered approach to skin, beauty, body rituals, and bespoke aesthetics.",
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

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: "easeInOut",
    },
  }),
};

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
        Lumé brings together restorative rituals, meticulous beauty services, and advanced aesthetics in one calm, deeply personal setting.
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
                We believe the most beautiful results feel like you—rested, polished, and quietly confident. That means listening first and choosing each experience with intention.
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
                We formulate with clean, high-purity botanicals and skin-identical active ingredients that respect skin integrity.
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
    </>
  );
}