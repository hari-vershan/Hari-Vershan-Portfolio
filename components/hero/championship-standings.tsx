"use client";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { TextReveal } from "@/components/ui/text-reveal";
import { Counter } from "@/components/ui/counter";
import { STANDINGS } from "@/lib/constants";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const TAGLINES = [
  "40% Designer. 60% Leader.",
  "Building the machine that builds the product.",
  "AI-powered design. Human-centered craft.",
] as const;

// Particle system for floating ambient particles
function HeroParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    })), []);

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: `radial-gradient(circle, rgba(255,128,0,${p.opacity}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${p.size * 3}px rgba(255,128,0,${p.opacity * 0.5})`,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 20, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity * 0.5, p.opacity * 1.2, p.opacity],
            scale: [1, 1.3, 0.8, 1.1, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Letter-by-letter stagger animation for the name
function StaggeredName() {
  const line1 = "HARI".split("");
  const line2 = "VERSHAN SR".split("");
  return (
    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-text-primary tracking-wider mb-4 leading-none drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
      <span className="flex">
        {line1.map((letter, i) => (
          <motion.span
            key={`l1-${i}`}
            className="inline-block"
            initial={{ opacity: 0, y: 60, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3 + i * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ perspective: "500px" }}
          >
            {letter}
          </motion.span>
        ))}
      </span>
      <span className="flex">
        {line2.map((letter, i) => (
          <motion.span
            key={`l2-${i}`}
            className={letter === " " ? "inline-block w-4 md:w-6" : "inline-block"}
            initial={{ opacity: 0, y: 60, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.45 + i * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ perspective: "500px" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

export function ChampionshipStandings() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse-reactive parallax for gradient orbs
  const orbX1 = useTransform(mouseX, [-1, 1], [-40, 40]);
  const orbY1 = useTransform(mouseY, [-1, 1], [-30, 30]);
  const orbX2 = useTransform(mouseX, [-1, 1], [30, -30]);
  const orbY2 = useTransform(mouseY, [-1, 1], [20, -20]);

  const rotateTagline = useCallback(() => {
    setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateTagline, 3000);
    return () => clearInterval(interval);
  }, [rotateTagline]);

  // Track mouse position for parallax
  useEffect(() => {
    if (reduced) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, reduced]);

  return (
    <section
      ref={containerRef}
      id="standings"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-bleed F1 car background with cinematic zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src="/images/f1-race-hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/50 to-black/30"
        aria-hidden="true"
      />

      {/* Secondary gradient for bottom readability */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Animated gradient orbs — now mouse-reactive */}
      <div className="absolute inset-0 z-[2] pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-papaya/[0.05] blur-[120px]"
          style={{
            top: "-10%",
            left: "-10%",
            x: orbX1,
            y: orbY1,
          }}
          animate={{
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-papaya/[0.04] blur-[100px]"
          style={{
            bottom: "5%",
            right: "0%",
            x: orbX2,
            y: orbY2,
          }}
          animate={{
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Third orb — subtle center glow */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-papaya/[0.02] blur-[80px]"
          style={{ top: "40%", left: "30%" }}
          animate={{
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.5, 0.8, 0.4, 0.5],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      {!reduced && <HeroParticles />}

      {/* Speed lines — horizontal racing streaks */}
      {!reduced && (
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-papaya/20 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                width: "60%",
                left: "-60%",
              }}
              animate={{ x: ["0%", "250%"] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Profile Image — Subtle, professional race suit portrait */}
      <motion.div
        className="absolute right-0 md:right-6 lg:right-16 bottom-0 z-[3] pointer-events-none"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative w-[280px] h-[420px] md:w-[340px] md:h-[510px] lg:w-[400px] lg:h-[600px]">
          <Image
            src="/images/hari-racesuit.png"
            alt="Hari Vershan"
            fill
            className="object-contain object-bottom"
            priority
          />
          {/* Bottom fade — blends into page seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" style={{ top: '60%' }} />
          {/* Top fade — subtle blend at shoulders */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg/30 to-transparent" style={{ bottom: '70%' }} />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-[3] w-full px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-3xl">
          {/* Letter-staggered name */}
          {reduced ? (
            <div className="mb-4">
              <TextReveal
                as="h1"
                className="font-display text-6xl md:text-8xl lg:text-9xl text-text-primary tracking-wider leading-none drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
              >
                HARI
              </TextReveal>
              <TextReveal
                as="span"
                className="font-display text-6xl md:text-8xl lg:text-9xl text-text-primary tracking-wider leading-none drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] block"
              >
                VERSHAN SR
              </TextReveal>
            </div>
          ) : (
            <StaggeredName />
          )}

          {/* Rotating tagline */}
          <div className="h-10 md:h-12 mb-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                className="font-mono text-sm md:text-base text-papaya-safe tracking-widest uppercase absolute inset-x-0"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {TAGLINES[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Intro paragraph */}
          <motion.p
            className="font-mono text-sm md:text-base text-text-body leading-relaxed mb-14 max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I build AI-powered enterprise products and the high-performing teams
            behind them. 9+ years turning complexity into clarity — from data
            analytics to design leadership.
          </motion.p>

          {/* Stats grid — glassmorphic cards with enhanced hover */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            role="list"
            aria-label="Career highlights"
          >
            {STANDINGS.map((row, i) => (
              <motion.div
                key={row.position}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 md:p-5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] overflow-hidden card-reflection"
                role="listitem"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  backgroundColor: "rgba(255, 128, 0, 0.08)",
                  borderColor: "rgba(255, 128, 0, 0.3)",
                  scale: 1.03,
                  y: -4,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Shimmer sweep on hover */}
                <motion.div
                  className="absolute inset-0 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                  }}
                />
                <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-2 relative z-10">
                  {row.position}
                </span>
                <span className="font-display text-3xl md:text-4xl text-text-primary font-bold block leading-none mb-1 relative z-10">
                  <Counter target={row.value} suffix={row.suffix} duration={2000 + i * 200} />
                </span>
                <span className="font-mono text-xs text-text-muted tracking-wide block mt-2 relative z-10">
                  {row.metric}
                </span>
              </motion.div>
            ))}

            {/* Role card — sits alongside the metrics */}
            <motion.div
              className="relative bg-gradient-to-br from-papaya/10 to-papaya/[0.03] backdrop-blur-md border border-papaya/20 rounded-lg p-4 md:p-5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] overflow-hidden card-reflection"
              role="listitem"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + STANDINGS.length * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                backgroundColor: "rgba(255, 128, 0, 0.12)",
                borderColor: "rgba(255, 128, 0, 0.4)",
                scale: 1.03,
                y: -4,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                }}
              />
              <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-2 relative z-10">
                Current Role
              </span>
              <span className="font-display text-lg md:text-xl text-text-primary font-bold block leading-tight mb-1 relative z-10">
                Product Design Lead
              </span>
              <span className="font-mono text-xs text-text-muted tracking-wide block mt-1 relative z-10">
                TechJays · 2025
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down CTA with animated chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.span
          className="text-xs font-mono text-text-muted tracking-widest uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-5 h-8 rounded-full border border-text-muted/50 flex items-start justify-center p-1"
          aria-hidden="true"
          animate={{ borderColor: ["rgba(136,136,136,0.3)", "rgba(255,128,0,0.5)", "rgba(136,136,136,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-papaya"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          className="text-papaya/60"
          animate={{ y: [0, 4, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <path
            d="M1 1L10 10L19 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
