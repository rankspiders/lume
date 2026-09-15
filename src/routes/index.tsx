import { Link, createFileRoute } from "@tanstack/react-router";
import { Leaf, ShieldCheck, Sparkles, Award, ArrowRight } from "lucide-react";

import advancedImage from "@/assets/advanced-aesthetics.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import facialImage from "@/assets/facial-ritual.jpg";
import heroImage from "@/assets/lume-hero.jpg";
import { Button } from "@/components/ui/button";
import { spaPackages, teamMembers } from "@/lib/treatments";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumé Aesthetics | Skin, Beauty & Wellness" },
      {
        name: "description",
        content:
          "Discover Lumé Aesthetics: curated facial & body rituals, bespoke beauty atelier, spa packages, and consultation-led advanced aesthetics.",
      },
      { property: "og:title", content: "Lumé Aesthetics | Skin, Beauty & Wellness" },
      { property: "og:description", content: "Beautiful skin. Confidence within. Curated beauty and aesthetics at Lumé Aesthetics." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const highlights = [
  {
    image: advancedImage,
    label: "Advanced Aesthetics",
    title: "Refined, consultation-led care",
    copy: "Personalized injectables, microneedling, whitening, and infusion therapies shaped around your goals.",
  },
  {
    image: facialImage,
    label: "Facial Rituals",
    title: "The art of luminous skin",
    copy: "Thoughtful facials bringing together touch, technology, and Bioline professional skincare in one experience.",
  },
  {
    image: bodyImage,
    label: "Body Rituals",
    title: "A moment of total renewal",
    copy: "Sculpting Jatò Coffee Shape, retinol lift, and Gua Sha bodywork designed to leave you feeling restored.",
  },
];

const pillars = [
  {
    icon: <Leaf className="size-6 text-copper" />,
    title: "Clean Ingredients",
    copy: "High-purity botanical formulations and clinical actives selected to respect and nourish your skin barrier.",
  },
  {
    icon: <ShieldCheck className="size-6 text-copper" />,
    title: "Made Sustainably",
    copy: "Ethically sourced skincare products and eco-conscious studio practices committed to sustainable luxury.",
  },
  {
    icon: <Sparkles className="size-6 text-copper" />,
    title: "Bespoke Artistry",
    copy: "Every facial, lash lift, and aesthetic ritual is uniquely tailored to your individual skin profile.",
  },
  {
    icon: <Award className="size-6 text-copper" />,
    title: "Expert Specialists",
    copy: "Dedicated beauty artists and clinical practitioners focused on safe, natural-looking, and transformative results.",
  },
];

function Index() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative flex min-h-[85svh] items-center justify-center overflow-hidden px-5 pb-16 pt-24 text-center sm:min-h-[92svh] sm:px-8 sm:pt-28">
        <img
          src={heroImage}
          alt="Skincare serum on warm sculpted stone"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-background/65 sm:bg-background/55" />
        <div className="mx-auto max-w-5xl animate-rise">
          <p className="eyebrow text-copper font-medium tracking-[0.25em]">Lumé Aesthetics · Sanctuary of Renewal</p>
          <h1 className="mt-7 font-display text-6xl font-light leading-[0.91] text-foreground text-balance sm:text-8xl lg:text-[7.5rem]">
            Beautiful skin.
            <br />
            <em className="font-light italic">Confidence within.</em>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base font-medium leading-7 text-foreground/85 sm:text-lg">
            A private beauty destination where curated skin rituals, refined artistry, and consultation-led advanced aesthetics come together.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-none border-copper bg-background/80 px-8 text-[11px] uppercase tracking-[0.18em] text-copper shadow-none backdrop-blur-sm hover:bg-copper hover:text-primary-foreground"
            >
              <Link to="/treatments">Explore Treatments & Menu</Link>
            </Button>
            <Button
              asChild
              className="h-12 rounded-none bg-foreground px-8 text-[11px] uppercase tracking-[0.18em] text-background hover:bg-copper-light hover:text-foreground"
            >
              <a href="tel:+17804108278">Book Appointment</a>
            </Button>
          </div>
        </div>
        <span className="absolute bottom-8 text-[9px] uppercase tracking-[0.3em] text-foreground/50">Scroll to discover</span>
      </header>

      {/* Brand Pillars / Values */}
      <section className="border-b border-copper/15 bg-secondary/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-start bg-background p-7 border border-copper/15">
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="font-display text-xl font-light text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Highlights */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-display text-2xl italic text-copper">Curated Experiences</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight sm:text-6xl">
                Care that begins with
                <br />
                the individual.
              </h2>
            </div>
            <p className="max-w-lg leading-7 text-muted-foreground md:col-span-5">
              From Bioline facial rituals to body sculpting, lash lifts, and advanced injectables, every Lumé experience is selected with intention and delivered with exacting care.
            </p>
          </div>
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => (
              <article
                key={item.label}
                className={
                  index === 0
                    ? "bg-secondary"
                    : index === 1
                      ? "border border-copper/30 bg-background"
                      : "bg-foreground text-background"
                }
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <p className={index === 2 ? "eyebrow text-copper-light" : "eyebrow"}>{item.label}</p>
                  <h3 className="mt-3 font-display text-3xl font-light">{item.title}</h3>
                  <p className={index === 2 ? "mt-3 text-sm leading-7 text-background/70" : "mt-3 text-sm leading-7 text-muted-foreground"}>
                    {item.copy}
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className={index === 2 ? "mt-5 h-auto p-0 text-[10px] uppercase tracking-[0.16em] text-copper-light" : "mt-5 h-auto p-0 text-[10px] uppercase tracking-[0.16em] text-copper"}
                  >
                    <Link to="/treatments">View Treatments Menu →</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Packages Feature Banner */}
      <section className="bg-secondary/80 border-y border-copper/20 px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-copper">Head-to-Toe Luxury</p>
            <h2 className="mt-3 font-display text-4xl font-light sm:text-6xl">Featured Spa Packages</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Indulge in our signature multi-treatment packages crafted for special occasions and total body transformation.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {spaPackages.map((pkg) => (
              <div key={pkg.name} className="flex flex-col justify-between border border-copper/25 bg-background p-8 sm:p-10 shadow-sm">
                <div>
                  <div className="flex justify-between items-baseline border-b border-copper/15 pb-4">
                    <h3 className="font-display text-3xl font-light">{pkg.name}</h3>
                    <span className="font-display text-3xl text-copper font-light">{pkg.price}</span>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-copper">{pkg.duration}</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{pkg.summary}</p>
                </div>
                <Button asChild variant="outline" className="mt-8 h-11 w-full rounded-none border-copper bg-transparent text-[10px] uppercase tracking-[0.18em] text-copper hover:bg-copper hover:text-primary-foreground">
                  <Link to="/treatments">View Menu & Book</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Team Preview */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Meet Our Team</p>
              <h2 className="mt-3 font-display text-4xl font-light sm:text-6xl">Master Beauticians & Specialists</h2>
            </div>
            <Button asChild variant="link" className="p-0 text-xs uppercase tracking-widest text-copper">
              <Link to="/about">Read Team Profiles <ArrowRight className="ml-1 inline size-4" /></Link>
            </Button>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {teamMembers.map((member) => (
              <div key={member.name} className="border border-copper/20 bg-background p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-copper font-medium">{member.role}</span>
                  <h3 className="mt-2 font-display text-2xl font-light text-foreground">{member.name}</h3>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="bg-foreground px-5 py-24 text-background sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow text-copper-light">The Lumé Philosophy</p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.02] sm:text-7xl">
              Subtle. Personal.
              <br />
              <em className="text-copper-light">Entirely you.</em>
            </h2>
          </div>
          <div className="border-l border-background/20 pl-7 sm:pl-12">
            <p className="max-w-xl font-display text-2xl font-light leading-relaxed text-background/80 sm:text-3xl">
              Beauty is not a formula. It is a thoughtful balance of how your skin looks, how you feel, and what feels true to you.
            </p>
            <Button asChild variant="link" className="mt-7 h-auto p-0 text-[11px] uppercase tracking-[0.18em] text-copper-light">
              <Link to="/about">Our Approach & Standards →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Your Time at Lumé</p>
          <h2 className="mt-7 font-display text-5xl font-light sm:text-7xl">Begin with a conversation.</h2>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-muted-foreground">
            Tell us what you would like to address. We’ll help you find a facial ritual, body treatment, or clinical consultation tailored to your goals.
          </p>
          <Button asChild className="mt-9 h-12 rounded-none px-10 text-[11px] uppercase tracking-[0.18em]">
            <a href="tel:+17804108278">Call to Book Appointment</a>
          </Button>
        </div>
      </section>
    </>
  );
}