"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

/* ─── Shared constants ─── */
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const REVEAL_DURATION = 0.8;
const STAGGER_DELAY = 0.1;
const VIEW_MARGIN = "-60px 0px";

/* ─── ScrollReveal (default export) ─── */
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: VIEW_MARGIN });

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...offset }
      }
      transition={{
        duration: REVEAL_DURATION,
        delay,
        ease: EASE_OUT_EXPO,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerContainer ─── */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = STAGGER_DELAY,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: VIEW_MARGIN });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerItem ─── */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE_OUT_EXPO },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── SlideReveal ─── */
interface SlideRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  delay?: number;
  distance?: number;
  once?: boolean;
}

export function SlideReveal({
  children,
  className = "",
  direction = "left",
  delay = 0,
  distance = 80,
  once = true,
}: SlideRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: VIEW_MARGIN });

  const xOffset = direction === "left" ? -distance : distance;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: xOffset }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: xOffset }
      }
      transition={{
        duration: REVEAL_DURATION,
        delay,
        ease: EASE_OUT_EXPO,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── ScaleReveal ─── */
interface ScaleRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function ScaleReveal({
  children,
  className = "",
  delay = 0,
  once = true,
}: ScaleRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: VIEW_MARGIN });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.8 }
      }
      transition={{
        duration: REVEAL_DURATION,
        delay,
        ease: EASE_OUT_EXPO,
      }}
    >
      {children}
    </motion.div>
  );
}
