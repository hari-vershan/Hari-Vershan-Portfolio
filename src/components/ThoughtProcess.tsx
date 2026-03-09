"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    phase: "01",
    title: "Research",
    color: "accent-blue",
    desc: "Deep user research, stakeholder interviews, competitive analysis, and data-driven insights to understand the problem space.",
    activities: [
      "User Interviews",
      "Heuristic Evaluation",
      "Data Analysis",
      "Competitive Audit",
    ],
  },
  {
    phase: "02",
    title: "Strategy",
    color: "accent-purple",
    desc: "Synthesise research into actionable strategy. Define product direction, information architecture, and design principles.",
    activities: [
      "Journey Mapping",
      "Information Architecture",
      "Product Roadmap",
      "Design Principles",
    ],
  },
  {
    phase: "03",
    title: "Design",
    color: "accent-green",
    desc: "Iterative design from wireframes to high-fidelity prototypes, backed by design systems and component libraries.",
    activities: [
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Interaction Design",
    ],
  },
  {
    phase: "04",
    title: "Validation",
    color: "accent-blue",
    desc: "Test with real users, measure outcomes, and iterate. Ship with confidence backed by evidence.",
    activities: [
      "Usability Testing",
      "A/B Testing",
      "UX Metrics",
      "Continuous Iteration",
    ],
  },
];

export default function ThoughtProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="thought-process" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">// Process</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How I approach{" "}
            <span className="gradient-text">problems</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            A structured, research-driven approach that balances rigour with
            speed — always grounded in real user needs and business outcomes.
          </p>
        </ScrollReveal>

        {/* Process Flow */}
        <div ref={ref} className="mt-16 grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-[2px]">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.15 + 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Phase node */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className={`w-8 h-8 rounded-full bg-${step.color}/20 border-2 border-${step.color} flex items-center justify-center relative z-10`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: i * 0.15 + 0.3,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <div className={`w-2 h-2 rounded-full bg-${step.color}`} />
                </motion.div>
                <span className="font-mono text-[10px] tracking-[2px] uppercase text-zinc-600">
                  Phase {step.phase}
                </span>
              </div>

              <h4 className="font-display text-xl font-semibold text-white mb-3">
                {step.title}
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                {step.desc}
              </p>

              {/* Activities */}
              <div className="flex flex-wrap gap-2">
                {step.activities.map((activity) => (
                  <span
                    key={activity}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-500"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
