"use client";
import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <section id={id} className={`relative px-6 md:px-16 lg:px-24 py-12 md:py-16 noise-bg overflow-hidden ${className}`}>
      {/* Animated racing divider at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "repeating-linear-gradient(90deg, #FF8000 0px, #FF8000 8px, transparent 8px, transparent 16px)",
        }}
        initial={reduced ? { scaleX: 1, opacity: 0.2 } : { scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 0.2 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        aria-hidden="true"
      />

      <motion.div
        ref={ref}
        initial={reduced ? {} : { opacity: 0, y: 40, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
