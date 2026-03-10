"use client";

import { useRef, ElementType } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Shared easing ─── */
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── TextReveal ─── */
interface TextRevealProps {
  children: string;
  className?: string;
  as?: ElementType;
  delay?: number;
}

export default function TextReveal({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  const words = children.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.04,
              delayChildren: delay,
            },
          },
        }}
        style={{
          display: "flex",
          flexWrap: "wrap" as const,
          gap: "0 0.3em",
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: EASE_OUT_EXPO,
                },
              },
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ─── CharReveal ─── */
interface CharRevealProps {
  children: string;
  className?: string;
  as?: ElementType;
  delay?: number;
}

export function CharReveal({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: CharRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  const chars = children.split("");

  return (
    <Tag className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.03,
              delayChildren: delay,
            },
          },
        }}
        style={{
          display: "flex",
          flexWrap: "wrap" as const,
          perspective: 600,
        }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            variants={{
              hidden: { opacity: 0, y: 40, rotateX: 40 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 0.6,
                  ease: EASE_OUT_EXPO,
                },
              },
            }}
            style={{
              display: "inline-block",
              transformOrigin: "bottom center",
              whiteSpace: char === " " ? "pre" : "normal",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
