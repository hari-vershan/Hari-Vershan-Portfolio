"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const highlights = [
  {
    href: "/leadership",
    label: "Leadership",
    title: "Leading 30+ Designers",
    desc: "Building design operations, governance, and high-performing teams across enterprise engagements.",
    color: "#2563eb",
  },
  {
    href: "/work",
    label: "Featured Work",
    title: "AI-Powered Products",
    desc: "From HVAC estimation platforms to design system tools — products that replace legacy workflows.",
    color: "#7c3aed",
  },
  {
    href: "/leadership#ai-hari",
    label: "AI + Human",
    title: "AI + Hari",
    desc: "Pioneering Figma-to-LLM pipelines and Claude Code workflows that transform how design teams ship.",
    color: "#059669",
  },
  {
    href: "/about",
    label: "Background",
    title: "9+ Years of Craft",
    desc: "From data analytics to design leadership — a deliberate evolution across enterprise scale.",
    color: "#2563eb",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.035] dark:opacity-[0.06] blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #2563eb, #7c3aed, transparent 70%)" }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div className="relative z-10 max-w-4xl mx-auto px-6 text-center" style={{ y, opacity }}>
          <motion.div
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[2px] uppercase mb-10 px-4 py-2 rounded-full"
            style={{ color: "#2563eb", background: "var(--accent-glow)", border: "1px solid rgba(37,99,235,0.15)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            Product Design Lead
          </motion.div>

          <motion.h1
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1] mb-8"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ color: "var(--text-primary)" }}>40% Designer.</span>
            <br />
            <span className="gradient-text-full">60% Leader.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-xl mx-auto mb-14 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
          >
            I build AI-powered enterprise products and the high-performing teams behind them.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-12 md:gap-16 mb-14"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
          >
            {[
              { num: "9+", label: "Years" },
              { num: "30+", label: "Designers Led" },
              { num: "12x", label: "Faster Workflows" },
              { num: "20%", label: "Conversion Lift" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>{stat.num}</div>
                <div className="font-mono text-[10px] tracking-[2px] uppercase mt-1" style={{ color: "var(--text-dim)" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0 }}
          >
            <Link href="/work" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm rounded-xl hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 transition-all duration-300">
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-medium text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5" style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          <motion.div className="w-6 h-10 rounded-full flex justify-center pt-2" style={{ border: "2px solid var(--border)" }} animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
            <motion.div className="w-1 h-2 rounded-full" style={{ background: "var(--text-dim)" }} animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">// Highlights</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-16" style={{ color: "var(--text-primary)" }}>
              What I bring to the table
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-5" staggerDelay={0.1}>
            {highlights.map((h) => (
              <StaggerItem key={h.title}>
                <Link href={h.href} className="card block p-8 group">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full" style={{ background: h.color }} />
                    <span className="font-mono text-[10px] tracking-[2px] uppercase" style={{ color: h.color }}>{h.label}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:translate-x-1 transition-transform" style={{ color: "var(--text-primary)" }}>{h.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{h.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all" style={{ color: h.color }}>
                    Learn more <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
