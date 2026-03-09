"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const workflowSteps = [
  {
    step: "01",
    title: "Design in Figma",
    desc: "Create high-fidelity designs with structured components, tokens, and semantic layers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    color: "accent-blue",
  },
  {
    step: "02",
    title: "LLM Processing",
    desc: "Feed design specs into LLM pipelines that understand component structure, intent, and context.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: "accent-purple",
  },
  {
    step: "03",
    title: "Claude Code Generation",
    desc: "AI generates production-ready components with proper typing, accessibility, and responsive behaviour.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: "accent-green",
  },
  {
    step: "04",
    title: "Review & Ship",
    desc: "Human-in-the-loop review ensures quality. Teams ship with minimal rework and faster handoff.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: "accent-blue",
  },
];

function WorkflowDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid md:grid-cols-4 gap-6 mt-16">
      {workflowSteps.map((step, i) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative"
        >
          {/* Connector line */}
          {i < workflowSteps.length - 1 && (
            <motion.div
              className="hidden md:block absolute top-10 left-full w-full h-[2px] z-0"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
              style={{ transformOrigin: "left" }}
            >
              <div className="h-full bg-gradient-to-r from-white/10 to-white/[0.03]" />
            </motion.div>
          )}

          <div className="card-surface rounded-2xl p-6 relative z-10 h-full">
            <div className={`w-12 h-12 rounded-xl bg-${step.color}/10 flex items-center justify-center text-${step.color} mb-5`}>
              {step.icon}
            </div>
            <div className="font-mono text-[10px] tracking-[2px] uppercase text-zinc-600 mb-2">
              Step {step.step}
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              {step.title}
            </h4>
            <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function AIWorkflow() {
  return (
    <section id="ai-workflow" className="section-padding relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <span className="section-label">// AI Workflow</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            AI-assisted{" "}
            <span className="gradient-text">design workflow</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Pioneering Figma-to-LLM pipelines and Claude Code workflows that
            transform how design teams ship products — reducing handoff time and
            enabling teams to move from concept to code faster than ever.
          </p>
        </ScrollReveal>

        <WorkflowDiagram />

        {/* Tools showcase */}
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="card-surface rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-xl font-semibold text-white mb-6">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Claude Code", tag: "AI Development" },
                { name: "LLM Toolchains", tag: "AI Pipeline" },
                { name: "MCP Integrations", tag: "Protocol" },
                { name: "Figma-to-LLM", tag: "Design Pipeline" },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent-blue/20 hover:bg-accent-blue/[0.03] transition-all duration-300"
                >
                  <div className="font-display text-sm font-semibold text-white">
                    {tool.name}
                  </div>
                  <div className="font-mono text-[10px] tracking-wider uppercase text-zinc-600 mt-1">
                    {tool.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
