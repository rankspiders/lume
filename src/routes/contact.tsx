import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact & Appointments | Lumé Aesthetics" }, { name: "description", content: "Call or email Lumé Aesthetics and plan your visit to our Sherwood Park studio." },
    { property: "og:title", content: "Contact Lumé Aesthetics" }, { property: "og:description", content: "Plan your visit or speak with Lumé about your next treatment." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/contact" }] }), component: ContactPage,
});

function ContactPage() { return <>
  <PageIntro eyebrow="Appointments & visits" title={<>Your Lumé ritual<br /><em>begins here.</em></>}>Speak with us about what you would like to address, or plan your visit to our Sherwood Park studio.</PageIntro>
  <section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-7xl gap-px bg-copper/20 md:grid-cols-3">
    <ContactItem icon={<Phone />} label="Call" main="+1 780-410-8278" href="tel:+17804108278" note="For appointments and treatment enquiries" />
    <ContactItem icon={<Mail />} label="Email" main="info@lumeaesthetics.co" href="mailto:info@lumeaesthetics.co" note="We’ll respond as soon as we can" />
    <ContactItem icon={<MapPin />} label="Visit" main="2457 Broadmoor Blvd #121" note="Sherwood Park, AB T8H 0Y6, Canada" />
  </div></section>
  <section className="border-t border-copper/15 bg-secondary px-5 py-16 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Find Lumé</p>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight sm:text-5xl">2457 Broadmoor Blvd #121<br /><em className="text-copper">Sherwood Park</em></h2>
          <p className="mt-5 max-w-sm leading-7 text-muted-foreground">Located in Sherwood Park, our studio is easy to reach and offers a calm, private setting for your treatments.</p>
          <Button asChild variant="outline" className="mt-8 h-11 rounded-none border-copper bg-transparent px-6 text-[11px] uppercase tracking-[0.18em] text-copper shadow-none hover:bg-copper hover:text-primary-foreground">
            <a href="https://maps.app.goo.gl/x93Ne5NphPnA5DXN8" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          </Button>
        </div>
        <div className="overflow-hidden border border-copper/20 bg-background">
          <iframe
            title="Lumé Aesthetics location map"
            src="https://maps.google.com/maps?q=Lum%C3%A9+Aesthetics%2C+2457+Broadmoor+Blvd+%23121%2C+Sherwood+Park%2C+AB+T8H+0Y6%2C+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.15]"
          />
        </div>
      </div>
    </div>
  </section>
  <section className="bg-foreground px-5 py-24 text-background sm:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div><p className="eyebrow text-copper-light">Before your visit</p><h2 className="mt-6 font-display text-5xl font-light">A thoughtful first conversation.</h2></div><div><p className="max-w-xl leading-8 text-background/60">When you call, tell us the result you are hoping for, any particular skin or body concern, and the timing you have in mind. For advanced aesthetics, the appropriate consultation and assessment will guide what comes next.</p><Button asChild className="mt-8 h-12 rounded-none bg-background px-8 text-[11px] uppercase tracking-[0.18em] text-foreground hover:bg-copper-light"><a href="tel:+17804108278">Call Lumé</a></Button></div></div></section>
  </>; }

function ContactItem({ icon, label, main, href, note }: { icon: React.ReactNode; label: string; main: string; href?: string; note: string }) { const content = <><span className="text-copper [&_svg]:size-5">{icon}</span><p className="eyebrow mt-10">{label}</p><p className="mt-4 font-display text-2xl font-light break-words sm:text-3xl">{main}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{note}</p></>; return href ? <a href={href} className="block bg-background p-8 transition-colors hover:bg-secondary sm:p-10">{content}</a> : <div className="bg-background p-8 sm:p-10">{content}</div>; }