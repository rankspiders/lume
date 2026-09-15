import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { addOns, spaPackages, treatmentGroups } from "@/lib/treatments";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments & Menu | Lumé Aesthetics" },
      {
        name: "description",
        content: "Explore Lumé facial & body rituals, spa packages, beauty atelier, advanced aesthetics, and treatment add-ons with full PDF menu pricing.",
      },
      { property: "og:title", content: "Treatments & Menu | Lumé Aesthetics" },
      { property: "og:description", content: "Curated skin, body, beauty, spa packages and advanced aesthetics at Lumé Aesthetics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsPage,
});

const fadeInVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

function TreatmentsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Facial & Body Treatment Menu"
        title={
          <>
            Rituals for skin,
            <br />
            <em>body & self.</em>
          </>
        }
      >
        Explore our complete menu with exact pricing from our official treatment brochure. From bespoke facial rituals to multi-hour spa packages and consultation-led advanced aesthetics.
      </PageIntro>

      {/* Spa Packages Highlight */}
      <section className="border-b border-copper/20 bg-secondary/80 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <p className="eyebrow flex items-center gap-2 text-copper">
                <Sparkles className="size-4" /> Signature Experiences
              </p>
              <h2 className="mt-3 font-display text-4xl font-light sm:text-5xl">Spa Packages</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Curated combinations designed for total body rejuvenation, special occasions, or a deep sensory reset.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {spaPackages.map((pkg, idx) => (
              <motion.article
                key={pkg.name}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariant}
                className="relative flex flex-col justify-between border border-copper/30 bg-background p-8 shadow-sm transition-all duration-300 hover:border-copper sm:p-10"
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-copper/15 pb-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold">Special Package</span>
                      <h3 className="mt-1 font-display text-3xl font-light text-foreground">{pkg.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-3xl font-light text-copper">{pkg.price}</span>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{pkg.duration}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-muted-foreground">{pkg.summary}</p>

                  {pkg.includedItems && (
                    <div className="mt-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">Package Includes:</p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {pkg.includedItems.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs leading-5 text-muted-foreground">
                            <CheckCircle2 className="size-3.5 text-copper shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="mt-8 h-12 w-full rounded-none border-copper bg-transparent text-[11px] uppercase tracking-[0.18em] text-copper hover:bg-copper hover:text-primary-foreground transition-all duration-300"
                >
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Booking Spa Package: ${pkg.name}`)}`}>
                    Reserve Package — {pkg.price}
                  </a>
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Treatment Groups */}
      {treatmentGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          className={
            groupIndex === 0
              ? "border-b border-copper/15 bg-background"
              : groupIndex === 1
                ? "border-b border-copper/20 bg-secondary"
                : "bg-foreground text-background"
          }
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className={groupIndex === 2 ? "eyebrow text-copper-light" : "eyebrow"}>{group.eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl font-light sm:text-5xl">{group.title}</h2>
              <p
                className={
                  groupIndex === 2
                    ? "mt-6 max-w-sm leading-7 text-background/60"
                    : "mt-6 max-w-sm leading-7 text-muted-foreground"
                }
              >
                {group.introduction}
              </p>
            </motion.div>
            <div
              className={
                groupIndex === 2
                  ? "divide-y divide-background/15 border-t border-background/15"
                  : groupIndex === 1
                    ? "grid gap-4 sm:grid-cols-2"
                    : "divide-y divide-copper/15 border-t border-copper/15"
              }
            >
              {group.treatments.map((treatment, itemIdx) => (
                <motion.article
                  key={treatment.name}
                  custom={itemIdx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeInVariant}
                  className={
                    groupIndex === 1
                      ? "flex flex-col justify-between border border-copper/20 bg-background p-6 transition-all duration-300 hover:border-copper"
                      : "grid gap-5 py-7 sm:grid-cols-[1fr_auto] sm:gap-8"
                  }
                >
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-display text-2xl font-light">{treatment.name}</h3>
                      {(treatment.duration || treatment.price) && (
                        <p
                          className={
                            groupIndex === 2
                              ? "whitespace-nowrap font-medium text-xs tracking-wider text-copper-light"
                              : "whitespace-nowrap font-medium text-xs tracking-wider text-copper"
                          }
                        >
                          {treatment.duration}
                          {treatment.duration && treatment.price ? " · " : ""}
                          <span className="font-semibold">{treatment.price}</span>
                        </p>
                      )}
                    </div>
                    <p
                      className={
                        groupIndex === 2
                          ? "mt-2 max-w-2xl text-sm leading-6 text-background/65"
                          : "mt-2 max-w-2xl text-sm leading-6 text-muted-foreground"
                      }
                    >
                      {treatment.summary}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className={
                      groupIndex === 2
                        ? "h-10 self-end rounded-none border-copper-light bg-transparent px-4 text-[10px] uppercase tracking-[0.14em] text-copper-light hover:bg-copper-light hover:text-foreground transition-all duration-300"
                        : groupIndex === 1
                          ? "mt-6 h-10 self-start rounded-none border-copper bg-transparent px-4 text-[10px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-primary-foreground transition-all duration-300"
                          : "h-10 self-end rounded-none border-copper bg-transparent px-4 text-[10px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-primary-foreground transition-all duration-300"
                    }
                  >
                    <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Enquiry about ${treatment.name}`)}`}>
                      Enquire about this
                    </a>
                  </Button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Add-Ons */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Thoughtful additions</p>
          <h2 className="mt-3 font-display text-4xl font-light sm:text-5xl">Treatment Add-Ons</h2>
          <div className="mt-8 grid gap-px bg-copper/20 md:grid-cols-2">
            {addOns.map((item, idx) => (
              <motion.article
                key={item.name}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariant}
                className="flex flex-col justify-between bg-background p-7 sm:p-10"
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl font-light">{item.name}</h3>
                    <span className="whitespace-nowrap font-medium text-xs tracking-wider text-copper">
                      {item.duration} · <strong className="font-semibold">{item.price}</strong>
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{item.summary}</p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 h-10 self-start rounded-none border-copper bg-transparent px-4 text-[10px] uppercase tracking-[0.14em] text-copper hover:bg-copper hover:text-primary-foreground transition-all duration-300"
                >
                  <a href={`mailto:info@lumeaesthetics.co?subject=${encodeURIComponent(`Enquiry about ${item.name}`)}`}>
                    Add to treatment
                  </a>
                </Button>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild className="h-12 rounded-none px-10 text-[11px] uppercase tracking-[0.18em]">
              <a href="tel:+17804108278">Discuss your treatment plan</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}