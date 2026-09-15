import { createFileRoute } from "@tanstack/react-router";
import interiorImage from "@/assets/advanced-aesthetics.jpg";
import { PageIntro } from "@/components/site-shell";
import { teamMembers } from "@/lib/treatments";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us & Team | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Discover Lumé’s considered approach to skin, beauty, body rituals, and team of master beauticians and specialists.",
      },
      { property: "og:title", content: "About Lumé Aesthetics & Team" },
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
        Lumé brings together restorative rituals, meticulous beauty services, and advanced aesthetics in one calm, deeply personal setting.
      </PageIntro>

      {/* Interior & Approach Section */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <img
            src={interiorImage}
            alt="Serene Lumé treatment room"
            width={800}
            height={1000}
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="max-w-lg lg:pl-10">
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
          </div>
        </div>
      </section>

      {/* Core Standards */}
      <section className="bg-foreground px-5 py-24 text-background sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-copper-light">Our Standards</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <span className="font-display text-5xl text-copper-light">01</span>
              <h3 className="mt-5 font-display text-3xl font-light">Clean & Sustainable</h3>
              <p className="mt-3 text-sm leading-7 text-background/65">
                We formulate with clean, high-purity botanicals and skin-identical active ingredients that respect skin integrity.
              </p>
            </div>
            <div>
              <span className="font-display text-5xl text-copper-light">02</span>
              <h3 className="mt-5 font-display text-3xl font-light">Tailored Precision</h3>
              <p className="mt-3 text-sm leading-7 text-background/65">
                Every detail—from custom facial peels to lash lifts and aesthetic placement—is executed with meticulous detail.
              </p>
            </div>
            <div>
              <span className="font-display text-5xl text-copper-light">03</span>
              <h3 className="mt-5 font-display text-3xl font-light">Unhurried Sanctuary</h3>
              <p className="mt-3 text-sm leading-7 text-background/65">
                The studio atmosphere is calm by design, giving every appointment the time, privacy, and undivided attention it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Team Showcase */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">Our Specialists</p>
            <h2 className="mt-4 font-display text-5xl font-light sm:text-6xl">Meet the Experts Behind Your Care</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Our team brings together decades of expertise in skincare, nail couture, body sculpting, and advanced aesthetics.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="border border-copper/20 bg-background p-8 transition-colors hover:border-copper">
                <span className="text-[10px] uppercase tracking-[0.2em] text-copper font-semibold">{member.role}</span>
                <h3 className="mt-2 font-display text-3xl font-light text-foreground">{member.name}</h3>
                <p className="mt-2 text-xs font-medium text-copper">{member.specialty}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}