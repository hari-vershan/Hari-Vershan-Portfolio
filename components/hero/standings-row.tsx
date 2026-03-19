"use client";
import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";

interface StandingsRowProps {
  position: string;
  metric: string;
  value: number;
  suffix: string;
  index: number;
}

export function StandingsRow({ position, metric, value, suffix, index }: StandingsRowProps) {
  return (
    <motion.tr
      className="border-b border-white/5"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <td className="py-3 pr-4 font-display text-papaya text-sm md:text-base whitespace-nowrap">{position}</td>
      <td className="py-3 pr-4 text-text-muted text-sm md:text-base">{metric}</td>
      <td className="py-3 font-mono text-text-primary text-lg md:text-xl font-bold">
        <Counter target={value} suffix={suffix} />
      </td>
    </motion.tr>
  );
}
