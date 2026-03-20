"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const LOGOS = ["TechJays", "Material+", "Srijan", "Ugam"];

export function LogoStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduced = useReducedMotion();

  // Double the logos for seamless infinite scroll
  const scrollLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  if (reduced) {
    return (
      <div className="flex items-center justify-center gap-8 md:gap-16 py-8 opacity-40">
        {LOGOS.map((logo) => (
          <span key={logo} className="font-mono text-sm text-text-muted tracking-wider">
            {logo}
          </span>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden py-8 group"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling track */}
      <div
        className="flex gap-12 md:gap-20 items-center whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={{
          animation: "marquee 20s linear infinite",
          width: "fit-content",
        }}
      >
        {scrollLogos.map((logo, i) => (
          <span
            key={`${logo}-${i}`}
            className="font-mono text-sm text-text-muted/50 tracking-wider hover:text-papaya-safe hover:scale-110 transition-all duration-300 flex-shrink-0"
          >
            {logo}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
