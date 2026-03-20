"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface FormationLapProps {
  onComplete: () => void;
}

export function FormationLap({ onComplete }: FormationLapProps) {
  const [phase, setPhase] = useState<"lines" | "lights" | "lightsout" | "text" | "name" | "done">("lines");
  const reduced = useReducedMotion();
  const [skipped, setSkipped] = useState(false);

  const skip = useCallback(() => {
    setSkipped(true);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (reduced) { skip(); return; }

    // Smooth timing — total ~5.5s for a polished reveal
    const timers = [
      setTimeout(() => setPhase("lights"), 900),
      setTimeout(() => setPhase("lightsout"), 2800),
      setTimeout(() => setPhase("text"), 3200),
      setTimeout(() => setPhase("name"), 4200),
      setTimeout(() => { setPhase("done"); onComplete(); }, 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete, reduced, skip]);

  if (skipped) return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] bg-bg flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          aria-hidden="true"
        >
          {/* Full-screen race car background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/f1-race-hero.jpg"
              alt=""
              fill
              className="object-cover"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          {/* Scan-line effect */}
          <div
            className="absolute inset-0 z-[2] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
              backgroundSize: "100% 4px",
            }}
          />

          {/* Skip button */}
          <button
            onClick={skip}
            className="absolute bottom-6 right-6 text-xs font-mono text-text-muted hover:text-papaya transition-colors z-20"
          >
            SKIP
          </button>

          {/* Phase: Circuit lines */}
          {(phase === "lines" || phase === "lights") && (
            <div className="absolute inset-0 z-[3]">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 h-px"
                  style={{
                    width: "150%",
                    transformOrigin: "center",
                    rotate: `${i * 30}deg`,
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,128,0,0.5) 30%, rgba(255,128,0,0.8) 50%, rgba(255,128,0,0.5) 70%, transparent 100%)",
                    boxShadow: "0 0 12px rgba(255,128,0,0.3)",
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 0.8, 0.5] }}
                  transition={{ duration: 0.6, delay: i * 0.03, ease: "easeOut" }}
                />
              ))}
            </div>
          )}

          {/* Phase: Starting lights */}
          {(phase === "lights" || phase === "lightsout") && (
            <div className="flex gap-5 md:gap-6 z-[5]">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full relative"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: phase === "lightsout" ? 0 : 1,
                    scale: 1,
                    backgroundColor: phase === "lightsout" ? "#222" : "#FF1801",
                  }}
                  style={{
                    boxShadow:
                      phase === "lightsout"
                        ? "none"
                        : "0 0 30px 8px rgba(255,24,1,0.6), 0 0 60px 16px rgba(255,24,1,0.3), inset 0 0 15px rgba(255,100,50,0.4)",
                  }}
                  transition={{
                    opacity: {
                      duration: phase === "lightsout" ? 0.12 : 0.3,
                      delay: phase === "lightsout" ? 0 : i * 0.3,
                    },
                    scale: {
                      duration: 0.3,
                      delay: phase === "lightsout" ? 0 : i * 0.3,
                    },
                  }}
                >
                  {phase !== "lightsout" && (
                    <motion.div
                      className="absolute inset-1 rounded-full bg-red-400/30"
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Phase: LIGHTS OUT text */}
          {phase === "text" && (
            <motion.h1
              className="font-display text-3xl md:text-6xl lg:text-7xl text-text-primary tracking-[0.3em] text-center z-[5]"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                textShadow: [
                  "0 0 20px rgba(255,128,0,0)",
                  "0 0 40px rgba(255,128,0,0.6), 0 0 80px rgba(255,128,0,0.3)",
                  "0 0 20px rgba(255,128,0,0.3)",
                ],
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              LIGHTS OUT AND AWAY WE GO
            </motion.h1>
          )}

          {/* Phase: Name reveal */}
          {phase === "name" && (
            <motion.div
              className="text-center z-[5] relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[2px] bg-gradient-to-r from-transparent via-papaya/40 to-transparent"
                    style={{
                      width: "120vw",
                      top: `${30 + i * 6}%`,
                    }}
                    initial={{ x: "100vw", opacity: 0 }}
                    animate={{ x: "-100vw", opacity: [0, 0.8, 0] }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.03,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>

              <motion.h1
                className="font-display text-5xl md:text-8xl lg:text-9xl text-text-primary tracking-wider relative"
                initial={{ scale: 1.4, opacity: 0, x: 60 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  textShadow:
                    "0 0 30px rgba(255,128,0,0.4), 0 0 60px rgba(255,128,0,0.2)",
                }}
              >
                HARI VERSHAN
              </motion.h1>
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-papaya to-transparent mx-auto mt-4"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "70%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
