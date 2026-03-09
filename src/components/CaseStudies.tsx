"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface CaseStudy {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  metrics: string[];
  sections: { label: string; content: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "hvac",
    badge: "FEATURED · AI PRODUCT",
    badgeColor: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    title: "AI HVAC Estimation Platform",
    subtitle:
      "End-to-end AI-powered platform replacing legacy AutoCAD workflows with intelligent automation.",
    metrics: ["12x Faster", "Full AutoCAD Replacement", "AI Catalog Matching"],
    sections: [
      {
        label: "Problem",
        content:
          "HVAC estimation relied on manual AutoCAD workflows — slow, error-prone, and impossible to scale. Vendors spent days creating estimates that should take hours.",
      },
      {
        label: "Research",
        content:
          "Conducted stakeholder interviews with HVAC engineers and procurement teams. Mapped the end-to-end estimation workflow, identifying 12 manual touchpoints ripe for automation.",
      },
      {
        label: "Strategy",
        content:
          "Designed a platform that uses AI to extract mechanical diagrams from floor plans, analyse specifications, map duct systems, and auto-generate estimation reports — replacing the entire manual pipeline.",
      },
      {
        label: "Design",
        content:
          "Created an intuitive interface for plan upload, AI-driven extraction review, specification mapping, and report generation. Built an AI-driven catalog browser with material matching for vendor product collation.",
      },
      {
        label: "Impact",
        content:
          "Delivered 12x faster estimation outputs. Fully replaced legacy AutoCAD-based workflows. AI catalog matching streamlined the quotation-to-procurement workflow across vendor teams.",
      },
    ],
  },
  {
    id: "cms",
    badge: "ENTERPRISE · OPTIMISATION",
    badgeColor: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
    title: "Enterprise CMS Optimisation",
    subtitle:
      "Redesigned a reseller e-commerce CMS to dramatically improve product listing accuracy.",
    metrics: ["45% → 80% Accuracy", "UX Audit Led", "Structured Workflow"],
    sections: [
      {
        label: "Problem",
        content:
          "An ad agency's reseller e-commerce platform had only 45% product listing accuracy. Content teams struggled with unintuitive workflows and inconsistent data entry patterns.",
      },
      {
        label: "Research",
        content:
          "Conducted a comprehensive UX audit of the CMS, identifying workflow bottlenecks, confusing navigation patterns, and data validation gaps through heuristic evaluation and user observation.",
      },
      {
        label: "Strategy",
        content:
          "Prioritised fixes using an impact-effort matrix. Focused on restructuring the content entry workflow, adding inline validation, and creating guided templates for consistent product listings.",
      },
      {
        label: "Design",
        content:
          "Redesigned the product entry flow with progressive disclosure, smart defaults, and real-time validation. Added bulk editing capabilities and content quality scoring dashboards.",
      },
      {
        label: "Impact",
        content:
          "Increased product listing accuracy from 45% to 80%. Reduced content entry time and dramatically decreased error rates across the platform.",
      },
    ],
  },
  {
    id: "libraryforge",
    badge: "AI PRODUCT · 2026",
    badgeColor: "text-accent-green bg-accent-green/10 border-accent-green/20",
    title: "Library Forge — AI Design System Platform",
    subtitle:
      "AI-powered platform enabling teams to generate component libraries and documentation automatically.",
    metrics: ["AI-Generated Components", "Auto Documentation", "Design Consistency"],
    sections: [
      {
        label: "Problem",
        content:
          "Design teams spend weeks setting up component libraries and writing documentation for every new project. This repetitive setup work delays actual product design.",
      },
      {
        label: "Research",
        content:
          "Analysed design system workflows across 10+ enterprise projects. Found that 60% of initial setup work was repeatable and could be automated with intelligent defaults.",
      },
      {
        label: "Strategy",
        content:
          "Built an AI-powered platform that takes design tokens, brand guidelines, and component requirements as input, then generates a complete, documented component library.",
      },
      {
        label: "Design",
        content:
          "Created an interface for defining design tokens, previewing generated components in real-time, and customising output. Integrated automatic documentation generation with usage examples.",
      },
      {
        label: "Impact",
        content:
          "Improved design consistency across projects. Reduced UI setup time significantly. Enabled teams to focus on product problems rather than library infrastructure.",
      },
    ],
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="card-surface rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <motion.div layout="position" className="p-8 md:p-10">
        {/* Badge */}
        <motion.span
          layout="position"
          className={`inline-block font-mono text-[10px] tracking-[2px] uppercase px-3 py-1 rounded-md border mb-5 ${study.badgeColor}`}
        >
          {study.badge}
        </motion.span>

        {/* Title & subtitle */}
        <motion.h3
          layout="position"
          className="font-display text-2xl md:text-3xl font-bold text-white mb-3"
        >
          {study.title}
        </motion.h3>
        <motion.p
          layout="position"
          className="text-zinc-400 leading-relaxed mb-6 max-w-2xl"
        >
          {study.subtitle}
        </motion.p>

        {/* Metrics */}
        <motion.div layout="position" className="flex flex-wrap gap-2 mb-4">
          {study.metrics.map((m) => (
            <span
              key={m}
              className="font-mono text-[11px] px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-400"
            >
              {m}
            </span>
          ))}
        </motion.div>

        {/* Expand hint */}
        <motion.div
          layout="position"
          className="flex items-center gap-2 text-xs text-zinc-500"
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            ▼
          </motion.span>
          {expanded ? "Collapse" : "View case study"}
        </motion.div>
      </motion.div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 md:px-10 pb-10 border-t border-white/[0.06] pt-8">
              <div className="grid md:grid-cols-5 gap-6">
                {study.sections.map((section, i) => (
                  <motion.div
                    key={section.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent-blue mb-2">
                      {section.label}
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">// Featured Work</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Products I&apos;ve{" "}
            <span className="gradient-text">shaped</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-16">
            End-to-end design leadership across AI platforms and enterprise
            systems. Click to expand each case study.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.id} delay={i * 0.1}>
              <CaseStudyCard study={study} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
