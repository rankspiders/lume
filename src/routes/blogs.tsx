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

import { PageIntro } from "@/components/site-shell";
import { RotatingBadge } from "@/components/rotating-badge";
import { Button } from "@/components/ui/button";

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
    <div className="bg-[#FAF7F2] text-[#131211]">
      <PageIntro
        eyebrow="Editorial Journal"
        title={
          <>
            Skincare insights &
            <br />
            <em>clinical knowledge.</em>
          </>
        }
      >
        Explore expert articles on clinical dermatology, European formulation biotechnology, pre-treatment care, and bridal beauty guides curated by our licensed practitioners.
      </PageIntro>

      {/* Featured Editorial Article */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 border-b border-copper/15 max-w-7xl mx-auto">
        <div className="border border-copper/30 bg-background overflow-hidden shadow-lg grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 overflow-hidden h-[340px] sm:h-[440px] relative group">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 bg-[#131211]/90 text-copper-light text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-semibold">
              Featured Editorial
            </span>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="text-copper uppercase tracking-wider text-[10px] font-semibold">{featuredPost.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-light"><Clock className="size-3 text-copper" /> {featuredPost.readTime}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-foreground leading-tight">
              {featuredPost.title}
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground leading-6 font-light">
              {featuredPost.summary}
            </p>

            <div className="pt-4 border-t border-copper/15 flex items-center justify-between text-xs">
              <span className="text-muted-foreground font-light">{featuredPost.date}</span>
              <Button asChild className="h-10 rounded-none bg-[#131211] text-white text-[10px] uppercase tracking-[0.16em] hover:bg-copper hover:text-white">
                <Link to="/treatments">
                  Read Journal →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills & Blog Grid */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 max-w-7xl mx-auto">
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-copper/20 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs transition-all border ${
                activeCategory === cat
                  ? "bg-copper text-white border-copper font-medium shadow-sm"
                  : "bg-background text-muted-foreground border-copper/20 hover:border-copper hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="border border-copper/25 bg-background overflow-hidden flex flex-col justify-between hover:border-copper transition-all duration-300 shadow-sm group"
            >
              <div>
                <div className="overflow-hidden h-56 relative border-b border-copper/15">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#131211]/90 text-copper-light text-[9px] uppercase tracking-widest px-2.5 py-0.5 font-semibold">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-light">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl font-light text-foreground group-hover:text-copper transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-6 font-light line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <div className="border-t border-copper/15 pt-3 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-light">{post.author}</span>
                  <Link to="/treatments" className="text-[10px] uppercase tracking-[0.16em] text-copper font-semibold flex items-center gap-1 group-hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Skincare Consultation CTA */}
      <section className="bg-[#131211] text-white py-20 border-t border-copper/20 text-center px-5 sm:px-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <RotatingBadge text="SKIN CONSULTATION • LUMÉ AESTHETICS • " href="/contact" size={100} className="mx-auto mb-4" />
          <span className="eyebrow text-copper-light text-[10px]">Personalized Advice</span>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
            Have questions regarding your skin?
          </h2>
          <p className="text-xs sm:text-sm leading-6 text-white/75 max-w-xl mx-auto font-light">
            Book a dedicated one-on-one dermal consultation at our Sherwood Park studio for personalized product recommendations and custom treatment protocols.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-11 rounded-none bg-copper text-white text-xs uppercase tracking-[0.18em] hover:bg-copper/90 px-8">
              <Link to="/contact">Book Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-none border-copper-light bg-transparent text-xs uppercase tracking-[0.18em] text-copper-light hover:bg-copper-light hover:text-[#131211]">
              <a href="tel:+17804108278">Direct Line: (780) 410-8278</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
