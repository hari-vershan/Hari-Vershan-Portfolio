"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import TextReveal, { CharReveal } from "@/components/TextReveal";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import PageTransition from "@/components/PageTransition";

/* ─── Animated Counter ─── */
function AnimatedCounter({
  value,
  suffix,
  label,
  desc,
  color,
}: {
  value: number;
  suffix: string;
  label: string;
  desc: string;
  color: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, motionVal, value]);

  return (
    <TiltCard className="card p-6 md:p-8 h-full" glowColor={color}>
      <motion.span
        ref={ref}
        className="font-display text-3xl md:text-4xl font-bold block mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        {display}{suffix}
      </motion.span>
      <div
        className="font-display text-sm font-semibold mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        {label}
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {desc}
      </p>
    </TiltCard>
  );
}

/* ─── Data ─── */
const stats = [
  { value: 30, suffix: "+", label: "Designers Led", desc: "Cross-functional team across enterprise product engagements", color: "#2563eb" },
  { value: 20, suffix: "%", label: "Conversion Lift", desc: "Through usability audits and data-driven UX redesigns", color: "#7c3aed" },
  { value: 12, suffix: "x", label: "Faster Workflows", desc: "AI-powered platform replacing legacy AutoCAD processes", color: "#059669" },
  { value: 30, suffix: "%", label: "Dev Effort Cut", desc: "Through scalable design systems and component libraries", color: "#2563eb" },
];

const aiSteps = [
  {
    step: "01",
    title: "Figma \u2192 LLM Pipelines",
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
];

const mentoring = [
  { title: "Structured Critiques", desc: "Facilitating design reviews that elevate craft across all verticals." },
  { title: "Career Development", desc: "Portfolio reviews, skill mapping, and growth paths for each designer." },
  { title: "Hiring & Onboarding", desc: "Scaling the team with consistent practices and delivery standards." },
  { title: "Design Governance", desc: "Review processes and UX standards adopted across product verticals." },
];

const tools = ["Claude Code", "LLM Toolchains", "MCP Integrations", "Figma-to-LLM"];

export default function LeadershipPage() {
  return (
    <PageTransition>
      {/* ──────────────── Hero ──────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Orbs */}
        <div className="bg-orb bg-orb-blue animate-float w-[550px] h-[550px] top-[-5%] right-[-8%]" />
        <div className="bg-orb bg-orb-purple animate-float-slow w-[500px] h-[500px] bottom-[0%] left-[-10%]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">// Leadership</span>
          </ScrollReveal>
          <CharReveal
            as="h1"
            className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6"
            delay={0.1}
          >
            Leading design at scale
          </CharReveal>
          <TextReveal
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            delay={0.2}
          >
            I don't just design products — I build the teams, systems, and culture that consistently deliver exceptional work.
          </TextReveal>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* ──────────────── Philosophy Quote ──────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div
              className="relative p-[1px] rounded-2xl max-w-3xl"
              style={{ background: "var(--gradient-accent)" }}
            >
              <div
                className="rounded-2xl px-8 md:px-12 py-10"
                style={{ background: "var(--bg)" }}
              >
                <p
                  className="font-display text-2xl md:text-3xl font-medium leading-snug italic"
                  style={{ color: "var(--text-primary)" }}
                >
                  &ldquo;Design leadership is not about having all the answers.
                  It is about building teams that find better ones.&rdquo;
                </p>
                <p className="mt-4 text-sm" style={{ color: "var(--text-dim)" }}>
                  &mdash; My leadership philosophy
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* ──────────────── Impact Stats ──────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">// Impact</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12"
              style={{ color: "var(--text-primary)" }}
            >
              Measurable outcomes
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  desc={s.desc}
                  color={s.color}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* ──────────────── AI + Hari ──────────────── */}
      <section id="ai-hari" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">// Human + AI</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              AI + Hari
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              className="text-lg max-w-2xl leading-relaxed mb-12"
              style={{ color: "var(--text-muted)" }}
            >
              I believe AI amplifies human judgment, it doesn&apos;t replace it.
              My approach integrates AI into every stage of the design process
              &mdash; not as a shortcut, but as a force multiplier.
            </p>
          </ScrollReveal>

          {/* Steps Grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.12}>
            {aiSteps.map((item) => (
              <StaggerItem key={item.step}>
                <TiltCard className="card p-7 h-full" glowColor={item.color}>
                  <div
                    className="font-mono text-[10px] tracking-[2px] uppercase mb-4"
                    style={{ color: item.color }}
                  >
                    Step {item.step}
                  </div>
                  <div
                    className="w-8 h-[2px] rounded-full mb-4"
                    style={{ background: item.color }}
                  />
                  <h3
                    className="font-display text-lg font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.desc}
                  </p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Tools Bar */}
          <ScrollReveal delay={0.3} className="mt-8">
            <div className="card p-7 flex flex-col md:flex-row items-start md:items-center gap-5">
              <span
                className="font-mono text-[10px] tracking-[2px] uppercase shrink-0"
                style={{ color: "var(--text-dim)" }}
              >
                Tools I use
              </span>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[10px] px-3 py-1.5 rounded-lg"
                    style={{
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* ──────────────── Mentoring ──────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">// Mentoring</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-12"
              style={{ color: "var(--text-primary)" }}
            >
              Growing designers into leaders
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-5" staggerDelay={0.1}>
            {mentoring.map((m) => (
              <StaggerItem key={m.title}>
                <TiltCard className="card p-7 h-full" glowColor="#2563eb">
                  <h3
                    className="font-display text-base font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {m.desc}
                  </p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
