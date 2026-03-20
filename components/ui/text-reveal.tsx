"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({ children, className = "", delay = 0, as: Tag = "p" }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  const MotionTag = motion.create(Tag);

  const isHeading = Tag === "h1" || Tag === "h2" || Tag === "h3";

  if (reduced) {
    return (
      <MotionTag ref={ref} className={className}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      className={`${className} relative`}
      initial={{
        opacity: 0,
        y: 20,
        filter: isHeading ? "blur(6px)" : "blur(3px)",
        clipPath: isHeading ? "inset(0 100% 0 0)" : undefined,
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        clipPath: isHeading ? "inset(0 0% 0 0)" : undefined,
      } : {}}
      transition={{
        duration: isHeading ? 0.6 : 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: isHeading ? 0.4 : 0.3, delay: delay + 0.05 },
        clipPath: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {children}
    </MotionTag>
  );
}
