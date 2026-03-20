"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface SkillCategoryProps {
  category: string;
  label: string;
  items: readonly string[];
  index: number;
}

export function SkillCategory({ category, label, items, index }: SkillCategoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="bg-surface border border-white/5 rounded-sm p-6 md:p-8 glow-border relative overflow-hidden group"
      initial={reduced ? {} : { opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Shimmer sweep overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,128,0,0.04) 0%, transparent 50%, rgba(255,128,0,0.02) 100%)",
        }}
      />

      <div className="flex items-baseline gap-3 mb-4 relative z-10">
        <span className="font-display text-papaya text-sm tracking-wider">{category}</span>
        <span className="text-text-muted text-xs font-mono">({label})</span>
      </div>
      <div className="flex flex-wrap gap-2 relative z-10">
        {items.map((item, i) => (
          <motion.span
            key={item}
            className="text-xs font-mono text-text-body bg-white/5 px-3 py-1.5 rounded-sm border border-white/5 hover:border-papaya/40 hover:text-papaya-safe hover:bg-papaya/[0.06] transition-all duration-300 hover:shadow-[0_0_12px_rgba(255,128,0,0.1)]"
            initial={reduced ? {} : { opacity: 0, y: 15, scale: 0.85 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              delay: index * 0.12 + 0.15 + i * 0.04,
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
