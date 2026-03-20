"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { Counter } from "@/components/ui/counter";
import { LEADERSHIP_PHILOSOPHY } from "@/lib/constants";

export function TheTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper id="the-team" className="section-glow">
      <div ref={ref}>
        <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
          THE TEAM
        </TextReveal>
        <TextReveal as="p" className="text-text-body text-lg max-w-2xl mb-12" delay={0.1}>
          Great products are built by great teams. I invest in building design cultures where craft meets strategy — mentoring designers, establishing governance, and driving cross-functional alignment.
        </TextReveal>

        {/* Blockquote with entrance animation */}
        <motion.div
          className="relative max-w-2xl mb-16"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -inset-4 rounded-lg bg-[radial-gradient(ellipse_at_left,_rgba(255,128,0,0.08)_0%,_transparent_70%)] pointer-events-none" aria-hidden="true" />

          {/* Animated border line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-papaya"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformOrigin: "top" }}
          />

          <blockquote className="relative pl-6">
            <motion.p
              className="text-text-body text-lg italic"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              &ldquo;{LEADERSHIP_PHILOSOPHY.quote}&rdquo;
            </motion.p>
            <motion.p
              className="text-text-muted text-sm font-mono mt-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              {LEADERSHIP_PHILOSOPHY.belief}
            </motion.p>
          </blockquote>
        </motion.div>

        {/* Stats cards with glass effect */}
        <div className="grid grid-cols-3 gap-8 mb-16 max-w-xl">
          {[
            { target: 20, suffix: "-30", label: "Team Members" },
            { target: 4, suffix: ".2/5", label: "CSAT Score" },
            { target: 9, suffix: "+", label: "Years Leading" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-papaya/20 transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                backgroundColor: "rgba(255,128,0,0.04)",
                y: -2,
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(255,128,0,0.06)_0%,_transparent_70%)] pointer-events-none" />
              <div className="font-mono text-3xl md:text-4xl text-text-primary font-bold relative z-10">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <p className="text-text-muted text-xs font-mono mt-1 relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Leadership approach with staggered entrance */}
        <div className="mt-12 space-y-3 max-w-xl">
          {LEADERSHIP_PHILOSOPHY.approach.map((point, i) => (
            <motion.p
              key={i}
              className="text-text-muted text-sm border-l border-papaya/20 pl-4 hover:border-papaya/50 hover:text-text-body transition-all duration-300"
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.35 }}
            >
              {point}
            </motion.p>
          ))}
        </div>

        {/* AI Workflow cards with 3D entrance */}
        <div className="mt-16">
          <motion.h3
            className="font-display text-lg text-text-primary tracking-wider mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            AI WORKFLOW
          </motion.h3>

          {/* Connecting line between cards */}
          <div className="relative">
            <motion.div
              className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-papaya/20 via-papaya/10 to-papaya/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {LEADERSHIP_PHILOSOPHY.aiWorkflow.map((item, i) => (
                <motion.div
                  key={i}
                  className="border border-white/5 rounded-sm p-6 bg-surface/50 glow-border relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{
                    delay: 0.35 + i * 0.08,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(255,128,0,0.25)",
                    transition: { duration: 0.3 },
                  }}
                  style={{ perspective: "600px" }}
                >
                  {/* Step number with glow */}
                  <motion.span
                    className="font-mono text-papaya text-2xl font-bold inline-block"
                    whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(255,128,0,0.5)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <h4 className="font-display text-text-primary text-sm tracking-wider mt-3 mb-2">{item.step}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{item.detail}</p>

                  {/* Hover shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-papaya/[0.03] to-transparent pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
