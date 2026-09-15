import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Calendar, User, ArrowRight, Sparkles, Clock, Tag, BookOpen } from "lucide-react";
import { useState } from "react";

import facialImage from "@/assets/facial-ritual.jpg";
import bodyImage from "@/assets/body-ritual.jpg";
import advancedImage from "@/assets/advanced-aesthetics.jpg";
import heroImage from "@/assets/lume-hero.jpg";

import blog1 from "@/assets/lumeproject/blog-1-1.jpg";
import blog2 from "@/assets/lumeproject/blog-1-2.jpg";
import blog3 from "@/assets/lumeproject/blog-1-3.jpg";
import blog4 from "@/assets/lumeproject/blog-1-4.jpg";

import { HauteMarquee, LiveSuiteClock } from "@/components/luxury-motion";
import { RotatingBadge } from "@/components/rotating-badge";
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

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Skincare Insights & Aesthetic Journal | Lumé Aesthetics" },
      {
        name: "description",
        content:
          "Read expert skincare guides, clinical aesthetic insights, bridal beauty advice, and Italian Bioline treatment spotlights from Lumé Aesthetics in Sherwood Park.",
      },
      { property: "og:title", content: "Skincare Insights & Journal | Lumé Aesthetics" },
      { property: "og:description", content: "Expert clinical insights, formulation science, and beauty journals." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogsPage,
});

const blogPosts = [
  {
    id: "aha-resurfacing-guide",
    title: "Appearance & Skin Barrier Health: The Power of 20% AHA Peels",
    summary:
      "Understand the cellular benefits of Glycolic, Lactic, and Mandelic acids in our Lumé Prima Glow peel and how to optimize post-treatment hydration.",
    category: "Skin Health",
    date: "March 10, 2026",
    author: "Lumé Dermal Specialist",
    readTime: "5 min read",
    image: blog1,
    featured: true,
  },
  {
    id: "prp-vs-exosomes",
    title: "Body Spa Treatments & Cellular Rejuvenation on a Relaxing Retreat",
    summary:
      "Comparing autologous platelet-rich plasma centrifugation with bioactive exosome signaling for deep collagen induction and structural firming.",
    category: "Clinical Aesthetics",
    date: "February 24, 2026",
    author: "Clinical Nurse Injector",
    readTime: "7 min read",
    image: blog2,
    featured: false,
  },
  {
    id: "bridal-skin-timeline",
    title: "Beautiful Wedding Body & Facial Protocol: The 6-Month Roadmap",
    summary:
      "A month-by-month guide covering chemical peels, teeth whitening, Queen For A Day spa pampering, and The Glam Chapter trial artistry.",
    category: "Bridal & Atelier",
    date: "February 12, 2026",
    author: "Atelier Artistry Lead",
    readTime: "6 min read",
    image: blog3,
    featured: false,
  },
  {
    id: "bioline-hyaluronic-science",
    title: "Guide to Finding the Best Facial & Body Treatments for Radiant Tone",
    summary:
      "Exploring Bioline Jatò Italy's patented nectar drop infusion technique and why standard topicals fail to penetrate deep dermal layers.",
    category: "Formulation Science",
    date: "January 28, 2026",
    author: "Dermal Esthetician",
    readTime: "4 min read",
    image: blog4,
    featured: false,
  },
];

const categories = ["All Insights", "Skin Health", "Clinical Aesthetics", "Bridal & Atelier", "Formulation Science"];

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const filteredPosts = blogPosts.filter(
    (p) => activeCategory === "All Insights" || p.category === activeCategory
  );

  const featuredPost = blogPosts[0]!;

  return (
    <div className="bg-[#FAF5F3] text-[#2A2124]">
      {/* Bespoke Gazette Hero with AuroraGlow */}
      <AuroraGlow variant="rose" className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[#B76E79]/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-xs sm:text-sm font-bold tracking-[0.2em] text-[#B76E79]">
                  <ShinyText text="Haute Editorial Gazette" speed={4} />
                </span>
                <span className="h-px w-8 bg-[#B76E79]/40" />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase bg-white/80 border border-[#B76E79]/30 text-[#8F4954] shadow-sm">
                  <DecryptedText text="VOL. IV • CLINICAL MONOGRAPHS" />
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-[#2A2124] text-balance">
                Skincare insights &amp;
                <br />
                <span className="italic font-serif gold-gradient-text font-normal">
                  <SplitText text="clinical knowledge." delay={45} />
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base sm:leading-7 text-[#5E5054] font-normal leading-relaxed">
                Explore expert monographs on clinical dermatology, European formulation biotechnology, pre-treatment care, and bridal beauty roadmaps curated by our licensed practitioners.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <LiveSuiteClock />
                <span className="text-xs text-[#5E5054] font-medium bg-white/70 border border-[#B76E79]/20 px-3 py-1">
                  Updated weekly from our Sherwood Park clinical suite
                </span>
              </div>
            </div>

            {/* Bespoke Right Highlight Frame with TiltedCard */}
            <div className="lg:col-span-5 relative">
              <TiltedCard rotateAmplitude={6}>
                <div className="border border-[#B76E79]/30 bg-white p-3 shadow-soft-card relative">
                  <div className="overflow-hidden relative group">
                    <img
                      src={blog1}
                      alt="Featured Monograph"
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-[9px] uppercase tracking-widest text-[#E7B2A9] font-mono">
                        <DecryptedText text="Featured Clinical Monograph" />
                      </span>
                      <p className="font-display text-xl text-white mt-1">
                        AHA Chemical Resurfacing Science
                      </p>
                    </div>
                  </div>
                </div>
              </TiltedCard>
            </div>
          </div>
        </div>
      </AuroraGlow>

      {/* Infinite Luxury Ticker */}
      <HauteMarquee
        items={[
          "20% AHA CHEMICAL RESURFACING",
          "AUTOLOGOUS PRP CENTRIFUGATION",
          "BIOLINE JATÒ ITALY PROTOCOLS",
          "BRIDAL BEAUTY ROADMAPS",
          "CELLUMA LED PHOTOTHERAPY",
        ]}
      />

      {/* Main Journal Section */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto space-y-16">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#B76E79]/20 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs transition-all border font-medium ${
                activeCategory === cat
                  ? "bg-[#B76E79] text-white border-[#B76E79] font-bold shadow-md"
                  : "bg-white text-[#5E5054] border-[#B76E79]/20 hover:border-[#B76E79] hover:text-[#2A2124] shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post SpotlightCard */}
        {activeCategory === "All Insights" && (
          <SpotlightCard
            spotlightColor="rgba(183, 110, 121, 0.15)"
            borderColor="rgba(183, 110, 121, 0.3)"
            className="border border-[#B76E79]/25 bg-white text-[#2A2124] p-6 sm:p-10 shadow-soft-card relative overflow-hidden"
          >
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 overflow-hidden border border-[#B76E79]/20 relative group">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#B76E79] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold shadow-md">
                  Featured Monograph
                </span>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#8F4954]">
                  <span className="eyebrow text-[#8F4954] text-xs uppercase tracking-[0.2em] font-bold">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="text-[#5E5054] flex items-center gap-1 font-medium">
                    <Clock className="size-3 text-[#B76E79]" /> {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-[#2A2124] leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-sm leading-6 text-[#5E5054] font-normal">
                  {featuredPost.summary}
                </p>

                <div className="pt-4 border-t border-[#B76E79]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#5E5054] font-medium">
                    <User className="size-3.5 text-[#B76E79]" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <Button
                    asChild
                    className="h-10 rounded-none bg-[#B76E79] text-white font-bold text-[10px] uppercase tracking-[0.16em] hover:bg-[#8F4954] transition-all duration-300 shadow-md"
                  >
                    <Link to="/appointment">Read Clinical Monograph →</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SpotlightCard>
        )}

        {/* Article Grid with SpotlightCard */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <SpotlightCard
                spotlightColor="rgba(183, 110, 121, 0.15)"
                borderColor="rgba(183, 110, 121, 0.25)"
                className="bg-white text-[#2A2124] p-6 flex flex-col justify-between h-full shadow-soft-card hover:border-[#B76E79] transition-all duration-300 border border-[#B76E79]/20"
              >
                <div>
                  <div className="overflow-hidden h-52 border border-[#B76E79]/20 mb-5 relative group">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 bg-white/95 text-[#8F4954] text-[10px] uppercase tracking-widest px-2.5 py-1 font-bold border border-[#B76E79]/30 shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#7D6B70] mb-2 font-medium">
                    <Calendar className="size-3.5 text-[#B76E79]" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="size-3.5 text-[#B76E79]" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-[#2A2124] group-hover:text-[#8F4954] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-6 text-[#5E5054] font-normal line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B76E79]/20 flex items-center justify-between text-xs">
                  <span className="text-xs text-[#7D6B70] font-medium">{post.author}</span>
                  <Link
                    to="/appointment"
                    className="text-xs uppercase tracking-[0.14em] text-[#8F4954] font-bold hover:underline flex items-center gap-1 hover:text-[#B76E79]"
                  >
                    Read Monograph →
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gazette Newsletter / Consultation CTA */}
      <AuroraGlow variant="rose" className="py-20 text-center px-5 sm:px-8 border-t border-[#B76E79]/20">
        <div className="max-w-2xl mx-auto space-y-4">
          <RotatingBadge text="SKINCARE GAZETTE • LUMÉ AESTHETICS • " href="/appointment" size={100} className="mx-auto mb-3" />
          <h2 className="font-display text-3xl sm:text-5xl font-light text-[#2A2124]">
            Have questions about clinical skin health?
          </h2>
          <p className="text-xs sm:text-sm text-[#5E5054] font-normal leading-6">
            Consult directly with our licensed injectors and Italian Bioline dermal specialists in Sherwood Park.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton pullStrength={0.25}>
              <Button asChild className="h-11 rounded-none bg-[#B76E79] text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#8F4954] px-8 w-full sm:w-auto shadow-md">
                <Link to="/appointment">Book Clinical Consultation</Link>
              </Button>
            </MagneticButton>
            <Button asChild variant="outline" className="h-11 rounded-none border-[#B76E79] bg-white text-xs uppercase tracking-[0.18em] text-[#8F4954] hover:bg-[#FAF5F3]">
              <Link to="/treatments">Explore Full Menu (24+)</Link>
            </Button>
          </div>
        </div>
      </AuroraGlow>
    </div>
  );
}
