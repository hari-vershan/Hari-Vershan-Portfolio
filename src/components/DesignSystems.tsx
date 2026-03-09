"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const tokens = [
  { name: "Blue 500", value: "#3b82f6", var: "--accent-blue" },
  { name: "Purple 500", value: "#8b5cf6", var: "--accent-purple" },
  { name: "Green 500", value: "#10b981", var: "--accent-green" },
  { name: "Zinc 900", value: "#18181b", var: "--surface-secondary" },
  { name: "Zinc 400", value: "#a1a1aa", var: "--text-muted" },
  { name: "White", value: "#fafafa", var: "--text-primary" },
];

const components = [
  { name: "Button — Primary", preview: "primary" },
  { name: "Button — Secondary", preview: "secondary" },
  { name: "Button — Ghost", preview: "ghost" },
  { name: "Input Field", preview: "input" },
  { name: "Badge", preview: "badge" },
  { name: "Card", preview: "card" },
];

function ComponentPreview({ type }: { type: string }) {
  switch (type) {
    case "primary":
      return (
        <button className="px-5 py-2.5 bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-blue/20 transition-all">
          Primary Action
        </button>
      );
    case "secondary":
      return (
        <button className="px-5 py-2.5 border border-white/10 text-zinc-300 text-sm font-medium rounded-lg hover:bg-white/[0.04] transition-all">
          Secondary
        </button>
      );
    case "ghost":
      return (
        <button className="px-5 py-2.5 text-zinc-400 text-sm font-medium rounded-lg hover:text-white hover:bg-white/[0.04] transition-all">
          Ghost Button
        </button>
      );
    case "input":
      return (
        <div className="w-full max-w-[200px]">
          <input
            type="text"
            placeholder="Enter value..."
            className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-sm text-white placeholder:text-zinc-600 focus:border-accent-blue/40 focus:ring-1 focus:ring-accent-blue/20 outline-none transition-all"
            readOnly
          />
        </div>
      );
    case "badge":
      return (
        <div className="flex gap-2">
          <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
            Active
          </span>
          <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-accent-green/10 text-accent-green border border-accent-green/20">
            Success
          </span>
        </div>
      );
    case "card":
      return (
        <div className="w-full max-w-[200px] p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl">
          <div className="w-full h-8 bg-white/[0.04] rounded-md mb-3" />
          <div className="w-3/4 h-2 bg-white/[0.06] rounded mb-2" />
          <div className="w-1/2 h-2 bg-white/[0.04] rounded" />
        </div>
      );
    default:
      return null;
  }
}

export default function DesignSystems() {
  const [activeComponent, setActiveComponent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="design-systems" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">// Design Systems</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Scalable systems,{" "}
            <span className="gradient-text">consistent craft</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            Building design systems that reduce front-end development effort by
            30% while improving accessibility and brand consistency.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 mt-16" ref={ref}>
          {/* Design Tokens */}
          <ScrollReveal delay={0.2}>
            <div className="card-surface rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
                Design Tokens
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {tokens.map((token, i) => (
                  <motion.div
                    key={token.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="group"
                  >
                    <div
                      className="w-full aspect-square rounded-xl mb-2 border border-white/[0.06] group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundColor: token.value }}
                    />
                    <div className="text-xs text-zinc-400 font-medium">
                      {token.name}
                    </div>
                    <div className="font-mono text-[10px] text-zinc-600">
                      {token.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Interactive Components */}
          <ScrollReveal delay={0.3}>
            <div className="card-surface rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-purple" />
                Component Library
              </h3>

              {/* Component selector */}
              <div className="flex flex-wrap gap-2 mb-8">
                {components.map((comp, i) => (
                  <button
                    key={comp.name}
                    onClick={() => setActiveComponent(i)}
                    className={`font-mono text-[11px] px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                      activeComponent === i
                        ? "bg-accent-blue/10 border-accent-blue/30 text-accent-blue"
                        : "border-white/[0.06] text-zinc-500 hover:text-zinc-300 hover:border-white/[0.1]"
                    }`}
                  >
                    {comp.name}
                  </button>
                ))}
              </div>

              {/* Preview area */}
              <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-8 flex items-center justify-center min-h-[120px]">
                <motion.div
                  key={activeComponent}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ComponentPreview
                    type={components[activeComponent].preview}
                  />
                </motion.div>
              </div>

              {/* Governance note */}
              <div className="mt-6 flex items-start gap-3 text-sm text-zinc-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-accent-green">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>
                  All components follow WCAG AA standards with keyboard
                  navigation and screen reader compatibility.
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
