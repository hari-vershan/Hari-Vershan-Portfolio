"use client";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  category: string;
  label: string;
  items: readonly string[];
  index: number;
}

export function SkillCategory({ category, label, items, index }: SkillCategoryProps) {
  return (
    <motion.div
      className="bg-surface border border-white/5 rounded-sm p-6 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-display text-papaya text-sm tracking-wider">{category}</span>
        <span className="text-text-muted text-xs font-mono">({label})</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="text-xs font-mono text-text-body bg-white/5 px-3 py-1.5 rounded-sm border border-white/5">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
