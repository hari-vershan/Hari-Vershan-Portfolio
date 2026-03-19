"use client";
import { motion } from "framer-motion";

const LOGOS = ["TechJays", "Material+", "Srijan", "Ugam"];

export function LogoStrip() {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-16 py-8 opacity-40">
      {LOGOS.map((logo, i) => (
        <motion.span
          key={logo}
          className="font-mono text-sm text-text-muted tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          {logo}
        </motion.span>
      ))}
    </div>
  );
}
