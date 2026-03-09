"use client";

import PageTransition from "@/components/PageTransition";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const timeline = [
  { year: "2025 — Present", company: "TechJays", role: "Product Design Lead", desc: "Leading 20–30 designers across AI-powered enterprise products. Built Figma-to-LLM workflows and design operations.", current: true },
  { year: "2022 — 2025", company: "Material+ (formerly Srijan)", role: "Senior Product Designer", desc: "Drove 20% conversion improvement. Built scalable design systems reducing dev time by 30%. Mentored designers.", current: false },
  { year: "2021 — 2022", company: "Srijan Technologies", role: "Product Designer", desc: "Specialised in responsive design, accessibility, and A/B testing across enterprise CMS platforms.", current: false },
  { year: "2017 — 2021", company: "Ugam Solutions", role: "Associate Analyst", desc: "Statistical analysis and business intelligence. Transitioned into UX design through freelance work.", current: false },
];

const skills = [
  { category: "Leadership", items: ["Design Management", "Design Ops", "Team Mentorship", "Hiring", "UX Strategy"] },
  { category: "Product", items: ["Product Strategy", "Design Systems", "Information Architecture", "UX Metrics"] },
  { category: "Research", items: ["User Interviews", "Heuristic Evaluation", "A/B Testing", "Usability Testing"] },
  { category: "Tools", items: ["Figma", "Miro", "Sketch", "Framer", "Adobe Creative Cloud"] },
  { category: "AI & Dev", items: ["Claude Code", "LLM Toolchains", "MCP Integrations", "Figma-to-LLM"] },
  { category: "Enterprise", items: ["SharePoint", "Drupal", "Power BI", "Google Workspace"] },
];

const certifications = [
  "Anthropic Claude Code, AI-Assisted Development · 2025",
  "Design Thinking Practitioner (DTP) · 2025",
  "Enterprise Design Thinking, IBM · 2025",
  "Design-Led Strategy · 2024",
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-label">// About</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
            Hari Vershan <span className="gradient-text">S R</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
            An AI-enabled design leader with a career that bridges data analytics, product design, and design management — always focused on building teams that ship exceptional products.
          </p>
        </div>
      </section>

      {/* Brief narrative */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                My career has been a deliberate evolution — from understanding data at Ugam Solutions, to shaping products at Srijan and Material+, to now leading design strategy at <strong style={{ color: "var(--text-primary)" }}>TechJays</strong> across multiple AI-powered enterprise engagements.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I believe in <strong style={{ color: "var(--text-primary)" }}>building the machine that builds the product</strong> — establishing design operations, scalable systems, and AI-assisted workflows that multiply team output. Currently based in <strong style={{ color: "var(--text-primary)" }}>Coimbatore, India</strong>.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal><span className="section-label">// Experience</span></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12" style={{ color: "var(--text-primary)" }}>Career timeline</h2>
          </ScrollReveal>

          <div className="relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full" style={{ background: "var(--gradient-full)" }} />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.company} delay={i * 0.1}>
                <div className="relative pb-12 last:pb-0">
                  <div className={`absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 ${item.current ? "bg-accent-green shadow-[0_0_12px_rgba(5,150,105,0.4)]" : ""}`} style={{ borderColor: "var(--bg)", background: item.current ? "#059669" : "#2563eb" }} />
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <span className="font-display text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{item.company}</span>
                    {item.current && <span className="font-mono text-[9px] tracking-[1.5px] uppercase px-2 py-0.5 rounded" style={{ background: "rgba(5,150,105,0.1)", color: "#059669" }}>Current</span>}
                  </div>
                  <div className="text-sm mb-1" style={{ color: "#2563eb" }}>{item.role}</div>
                  <div className="font-mono text-[11px] mb-2" style={{ color: "var(--text-dim)" }}>{item.year}</div>
                  <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal><span className="section-label">// Skills</span></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12" style={{ color: "var(--text-primary)" }}>Toolkit</h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {skills.map((s) => (
              <StaggerItem key={s.category}>
                <div className="card p-6">
                  <h3 className="font-display text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>{s.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="text-[11px] px-2.5 py-1 rounded-md" style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{item}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <span className="section-label">// Education</span>
              <div className="card p-7 mt-4">
                <h3 className="font-display text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>SNS College of Engineering</h3>
                <p className="text-sm" style={{ color: "#2563eb" }}>B.E, Electronics and Communication</p>
                <p className="font-mono text-[11px] mt-1" style={{ color: "var(--text-dim)" }}>2014 — 2017 · Coimbatore</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <span className="section-label">// Certifications</span>
              <div className="card p-7 mt-4">
                {certifications.map((c, i) => (
                  <p key={i} className="text-sm py-2" style={{ color: "var(--text-muted)", borderBottom: i < certifications.length - 1 ? "1px solid var(--border)" : "none" }}>{c}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
