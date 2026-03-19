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
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 border-l border-white/10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-papaya border-2 border-bg" />
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-left w-full group"
        aria-expanded={expanded}
        data-cursor="hover"
      >
        <span className="font-mono text-xs text-papaya-safe tracking-widest">LAP {year}</span>
        <h3 className="font-display text-xl md:text-2xl text-text-primary mt-1 group-hover:text-papaya transition-colors">
          {company}
        </h3>
        <p className="text-text-muted text-sm">{role} &middot; {location}</p>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.ul
            className="mt-4 space-y-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {highlights.map((h, i) => (
              <li key={i} className="text-text-body text-sm pl-4 border-l border-papaya/20">
                {h}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
