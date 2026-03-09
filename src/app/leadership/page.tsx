"use client";

import PageTransition from "@/components/PageTransition";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const stats = [
  { num: "30+", label: "Designers Led", desc: "Cross-functional team across enterprise product engagements" },
  { num: "20%", label: "Conversion Lift", desc: "Through usability audits and data-driven UX redesigns" },
  { num: "12x", label: "Faster Workflows", desc: "AI-powered platform replacing legacy AutoCAD processes" },
  { num: "30%", label: "Dev Effort Cut", desc: "Through scalable design systems and component libraries" },
];

const mentoring = [
  { title: "Structured Critiques", desc: "Facilitating design reviews that elevate craft across all verticals." },
  { title: "Career Development", desc: "Portfolio reviews, skill mapping, and growth paths for each designer." },
  { title: "Hiring & Onboarding", desc: "Scaling the team with consistent practices and delivery standards." },
  { title: "Design Governance", desc: "Review processes and UX standards adopted across product verticals." },
];

export default function LeadershipPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-label">// Leadership</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
            Leading design <span className="gradient-text">at scale</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I don&apos;t just design products — I build the teams, systems, and culture that consistently deliver exceptional work.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="relative p-[1px] rounded-2xl max-w-3xl" style={{ background: "var(--gradient-accent)" }}>
              <div className="rounded-2xl px-8 md:px-12 py-10" style={{ background: "var(--bg)" }}>
                <p className="font-display text-2xl md:text-3xl font-medium leading-snug italic" style={{ color: "var(--text-primary)" }}>
                  &ldquo;Design leadership is not about having all the answers. It is about building teams that find better ones.&rdquo;
                </p>
                <p className="mt-4 text-sm" style={{ color: "var(--text-dim)" }}>— My leadership philosophy</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal><span className="section-label">// Impact</span></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12" style={{ color: "var(--text-primary)" }}>
              Measurable outcomes
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="card p-6 md:p-8">
                  <div className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>{s.num}</div>
                  <div className="font-display text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{s.label}</div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI + Hari */}
      <section id="ai-hari" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal><span className="section-label">// Human + AI</span></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              AI + Hari
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg max-w-2xl leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
              I believe AI amplifies human judgment, it doesn&apos;t replace it. My approach integrates AI into every stage of the design process — not as a shortcut, but as a force multiplier.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Figma → LLM Pipelines",
                desc: "Design specs flow into LLM chains that understand component structure, intent, and accessibility requirements.",
                color: "#2563eb",
              },
              {
                step: "02",
                title: "Claude Code Prototyping",
                desc: "AI generates production-ready components with proper typing and responsive behaviour. Human reviews, AI executes.",
                color: "#7c3aed",
              },
              {
                step: "03",
                title: "Ship with Confidence",
                desc: "Design-to-development handoff time drops dramatically. Teams ship faster with minimal rework.",
                color: "#059669",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="card p-7 h-full">
                  <div className="font-mono text-[10px] tracking-[2px] uppercase mb-4" style={{ color: item.color }}>Step {item.step}</div>
                  <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3} className="mt-8">
            <div className="card p-7 flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="flex gap-3">
                {["Claude Code", "LLM Toolchains", "MCP Integrations", "Figma-to-LLM"].map((tool) => (
                  <span key={tool} className="font-mono text-[10px] px-3 py-1.5 rounded-lg" style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{tool}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mentoring */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal><span className="section-label">// Mentoring</span></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12" style={{ color: "var(--text-primary)" }}>
              Growing designers into leaders
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-5" staggerDelay={0.1}>
            {mentoring.map((m) => (
              <StaggerItem key={m.title}>
                <div className="card p-7">
                  <h3 className="font-display text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{m.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
