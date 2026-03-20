"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineEntryProps {
  year: string;
  company: string;
  role: string;
  location: string;
  highlights: readonly string[];
  index: number;
}

export function TimelineEntry({ year, company, role, location, highlights, index }: TimelineEntryProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 border-l border-white/10 group"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
    >
      {/* Glowing connector line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px"
        initial={{ background: "transparent" }}
        whileInView={{
          background: "linear-gradient(180deg, rgba(255,128,0,0.4) 0%, rgba(255,128,0,0.1) 50%, transparent 100%)",
        }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.2, duration: 0.6 }}
      />

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-papaya border-2 border-bg z-10">
        <div className="absolute inset-0 rounded-full bg-papaya animate-ping opacity-20" />
        <motion.div
          className="absolute -inset-1 rounded-full bg-papaya/30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-left w-full group/btn"
        aria-expanded={expanded}
        data-cursor="hover"
      >
        <motion.span
          className="font-mono text-xs text-papaya-safe tracking-widest inline-block"
          whileHover={{ x: 4, color: "#FF8000" }}
          transition={{ duration: 0.15 }}
        >
          LAP {year}
        </motion.span>
        <h3 className="font-display text-xl md:text-2xl text-text-primary mt-1 group-hover/btn:text-papaya transition-colors duration-200">
          {company}
        </h3>
        <p className="text-text-muted text-sm">{role} &middot; {location}</p>
        <motion.span
          className="inline-block mt-2 text-papaya/50 text-xs font-mono"
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            className="mt-4 space-y-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {highlights.map((h, i) => (
              <motion.li
                key={i}
                className="text-text-body text-sm pl-4 border-l border-papaya/20 hover:border-papaya/60 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                {h}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
