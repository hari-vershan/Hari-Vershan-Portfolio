"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {isInView ? (
          <CountUp target={value} />
        ) : (
          "0"
        )}
      </motion.span>
      {suffix}
    </span>
  );
}

function CountUp({ target }: { target: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={0}
        whileInView={target}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        onUpdate={(latest) => {
          if (ref.current) {
            (ref.current as HTMLElement).textContent = Math.round(
              latest as number
            ).toString();
          }
        }}
      />
    </motion.span>
  );
}

const stats = [
  {
    value: 30,
    suffix: "+",
    label: "Designers Led",
    desc: "Cross-functional team across multiple enterprise engagements",
    color: "from-accent-blue to-blue-400",
  },
  {
    value: 20,
    suffix: "%",
    label: "Conversion Improvement",
    desc: "Through usability audits and data-driven UX redesigns",
    color: "from-accent-purple to-violet-400",
  },
  {
    value: 12,
    suffix: "x",
    label: "Faster Workflows",
    desc: "AI-powered HVAC platform replacing legacy AutoCAD processes",
    color: "from-accent-green to-emerald-400",
  },
  {
    value: 30,
    suffix: "%",
    label: "Dev Effort Reduction",
    desc: "Through scalable design systems and component libraries",
    color: "from-blue-400 to-accent-purple",
  },
];

const capabilities = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Team Leadership",
    desc: "Building and mentoring high-performing design teams with structured feedback, career development, and design critiques.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    title: "Design Operations",
    desc: "Establishing review processes, research frameworks, and UX governance across all product verticals.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: "Design Systems",
    desc: "Building scalable systems improving accessibility, consistency, and reducing front-end development time by 30%.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Product Strategy",
    desc: "Aligning UX strategy with product roadmaps and business goals across concurrent enterprise engagements.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">// Leadership</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Design leadership{" "}
            <span className="gradient-text">at scale</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            Leading teams that ship measurable business impact through research,
            strategy, and execution.
          </p>
        </ScrollReveal>

        {/* Animated Stats */}
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16"
          staggerDelay={0.12}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="card-surface rounded-2xl p-6 md:p-8 group">
                <div className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="font-display text-sm font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {stat.desc}
                </p>
                {/* Gradient bar */}
                <div
                  className={`h-[2px] mt-5 rounded-full bg-gradient-to-r ${stat.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Capabilities */}
        <StaggerContainer
          className="grid md:grid-cols-2 gap-5 mt-10"
          staggerDelay={0.1}
        >
          {capabilities.map((cap) => (
            <StaggerItem key={cap.title}>
              <div className="card-surface rounded-2xl p-6 md:p-8 flex gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue flex-shrink-0 group-hover:bg-accent-blue/20 transition-colors duration-300">
                  {cap.icon}
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-white mb-2">
                    {cap.title}
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
