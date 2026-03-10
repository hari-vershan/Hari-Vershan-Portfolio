"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ScaleRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScaleReveal({
  children,
  className = "",
  delay = 0,
}: ScaleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
