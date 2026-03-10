"use client";

import TextReveal, { CharReveal } from "@/components/TextReveal";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import PageTransition from "@/components/PageTransition";

/* ─── Data ─── */
const projects = [
  {
    badge: "FEATURED \u00B7 AI PRODUCT",
    badgeColor: "#2563eb",
    title: "AI HVAC Estimation Platform",
    desc: "End-to-end AI platform that extracts mechanical diagrams from floor plans, analyses specifications, maps duct systems, and generates automated estimation reports \u2014 replacing legacy AutoCAD workflows.",
    metrics: ["12x Faster", "Full AutoCAD Replacement", "AI Catalog Matching"],
    featured: true,
  },
  {
    badge: "ENTERPRISE",
    badgeColor: "#7c3aed",
    title: "Ad Agency Product System",
    desc: "End-to-end product system for a leading ad agency \u2014 streamlining campaign management, asset production, and client delivery across teams.",
    metrics: ["Campaign Management", "Asset Production", "Cross-Team Delivery"],
    featured: false,
  },
  {
    badge: "OPTIMISATION",
    badgeColor: "#7c3aed",
    title: "Enterprise CMS Optimisation",
    desc: "Redesigned reseller e-commerce CMS increasing product listing accuracy from 45% to 80% through structured UX audit and workflow optimisation.",
    metrics: ["45% \u2192 80% Accuracy", "UX Audit Led"],
    featured: false,
  },
  {
    badge: "UX RESEARCH",
    badgeColor: "#059669",
    title: "Global Recycling Firm CRM",
    desc: "Conducted UX research for CRM rollout improving customer satisfaction to 4.2/5 and enabling smooth adoption across non-technical teams.",
    metrics: ["4.2/5 Satisfaction", "Research-Led"],
    featured: false,
  },
];

export default function WorkPage() {
  return (
    <PageTransition>
      {/* ──────────────── Hero ──────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Orbs */}
        <div className="bg-orb bg-orb-purple animate-float w-[550px] h-[550px] top-[-8%] right-[-10%]" />
        <div className="bg-orb bg-orb-green animate-float-slow w-[450px] h-[450px] bottom-[-5%] left-[-8%]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">// Work</span>
          </ScrollReveal>
          <CharReveal
            as="h1"
            className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6"
            delay={0.1}
          >
            Selected work
          </CharReveal>
          <TextReveal
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            delay={0.2}
          >
            End-to-end design leadership across AI platforms, enterprise systems, and product ecosystems.
          </TextReveal>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* ──────────────── Library Forge Featured ──────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <TiltCard className="card relative overflow-hidden" glowColor="#059669">
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green" />

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                      <span
                        className="font-mono text-[10px] tracking-[2px] uppercase"
                        style={{ color: "#059669" }}
                      >
                        AI PRODUCT &middot; 2026 &middot; LIVE
                      </span>
                    </div>
                    <h2
                      className="font-display text-2xl md:text-3xl font-bold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Library Forge
                    </h2>
                    <p
                      className="text-sm leading-relaxed max-w-lg"
                      style={{ color: "var(--text-muted)" }}
                    >
                      AI-powered design system platform enabling teams to generate
                      component libraries and documentation automatically.
                    </p>
                  </div>
                  <a
                    href="https://library-forge.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 font-mono text-sm font-medium transition-all hover:gap-3"
                    style={{ color: "#059669" }}
                  >
                    Visit Live App
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* ──────────────── Projects Grid ──────────────── */}
      <section className="py-20 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">// Projects</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12"
              style={{ color: "var(--text-primary)" }}
            >
              Case studies
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-5" staggerDelay={0.1}>
            {projects.map((p) => (
              <StaggerItem key={p.title} className={p.featured ? "md:col-span-2" : ""}>
                <TiltCard
                  className="card p-8 h-full"
                  glowColor={p.badgeColor}
                >
                  <span
                    className="inline-block font-mono text-[10px] tracking-[2px] uppercase px-3 py-1 rounded-md mb-5"
                    style={{
                      color: p.badgeColor,
                      background: `${p.badgeColor}10`,
                      border: `1px solid ${p.badgeColor}20`,
                    }}
                  >
                    {p.badge}
                  </span>
                  <h3
                    className="font-display text-xl md:text-2xl font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="font-mono text-[10px] px-3 py-1.5 rounded-lg"
                        style={{
                          background: "var(--bg-tertiary)",
                          border: "1px solid var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
