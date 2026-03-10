"use client";

import { useRef, useState, useEffect, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, MotionValue } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.5 };
const MAX_TILT = 8;

export default function TiltCard({
  children,
  className = "",
  glowColor = "#2563eb",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, SPRING_CONFIG);
  const springRotateY = useSpring(rotateY, SPRING_CONFIG);
  const springGlowX = useSpring(glowX, SPRING_CONFIG);
  const springGlowY = useSpring(glowY, SPRING_CONFIG);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Normalise to -1..1 and apply max tilt
    const tiltX = -(mouseY / (rect.height / 2)) * MAX_TILT;
    const tiltY = (mouseX / (rect.width / 2)) * MAX_TILT;

    rotateX.set(tiltX);
    rotateY.set(tiltY);

    // Glow follows mouse position as percentage
    const percentX = ((e.clientX - rect.left) / rect.width) * 100;
    const percentY = ((e.clientY - rect.top) / rect.height) * 100;
    glowX.set(percentX);
    glowY.set(percentY);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isHovered ? 1.02 : 1,
        boxShadow: isHovered
          ? "0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)"
          : "0 4px 12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)",
      }}
      transition={{ type: "spring", ...SPRING_CONFIG }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
        position: "relative",
        overflow: "hidden",
        borderRadius: "inherit",
        willChange: "transform",
      }}
    >
      {/* Radial gradient glow that follows mouse position */}
      <GlowOverlay
        glowX={springGlowX}
        glowY={springGlowY}
        glowColor={glowColor}
        visible={isHovered}
      />

      {/* Card content */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </motion.div>
  );
}

/* ─── GlowOverlay ─── */
/* Subscribes to motion values to update the radial gradient position */
function GlowOverlay({
  glowX,
  glowY,
  glowColor,
  visible,
}: {
  glowX: MotionValue<number>;
  glowY: MotionValue<number>;
  glowColor: string;
  visible: boolean;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGradient = () => {
      overlayRef.current?.style.setProperty(
        "background",
        `radial-gradient(600px circle at ${glowX.get()}% ${glowY.get()}%, ${glowColor}, transparent 40%)`
      );
    };

    const unsubX = glowX.on("change", updateGradient);
    const unsubY = glowY.on("change", updateGradient);

    return () => {
      unsubX();
      unsubY();
    };
  }, [glowX, glowY, glowColor]);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        borderRadius: "inherit",
        opacity: visible ? 0.15 : 0,
        transition: "opacity 0.3s ease",
        pointerEvents: "none",
        background: `radial-gradient(600px circle at 50% 50%, ${glowColor}, transparent 40%)`,
      }}
    />
  );
}
