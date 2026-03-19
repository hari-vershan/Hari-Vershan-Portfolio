"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSoundContext } from "@/components/sound/sound-provider";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface FormationLapProps {
  onComplete: () => void;
}

export function FormationLap({ onComplete }: FormationLapProps) {
  const [phase, setPhase] = useState<"lines" | "lights" | "lightsout" | "text" | "name" | "done">("lines");
  const { play } = useSoundContext();
  const reduced = useReducedMotion();
  const [skipped, setSkipped] = useState(false);

  const skip = useCallback(() => {
    setSkipped(true);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (reduced) { skip(); return; }

    const timers = [
      setTimeout(() => setPhase("lights"), 1200),
      setTimeout(() => setPhase("lightsout"), 2800),
      setTimeout(() => { setPhase("text"); play("rev"); }, 3200),
      setTimeout(() => setPhase("name"), 4200),
      setTimeout(() => { setPhase("done"); onComplete(); }, 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete, play, reduced, skip]);

  if (skipped) return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] bg-bg flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          {/* Skip button */}
          <button
            onClick={skip}
            className="absolute bottom-6 right-6 text-xs font-mono text-text-muted hover:text-papaya transition-colors z-10"
          >
            SKIP
          </button>

          {/* Phase: Circuit lines */}
          {(phase === "lines" || phase === "lights") && (
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-transparent via-papaya/30 to-transparent"
                  style={{
                    width: "150%",
                    transformOrigin: "center",
                    rotate: `${i * 30}deg`,
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 0.6, 0.3] }}
                  transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                />
              ))}
            </div>
          )}

          {/* Phase: Starting lights */}
          {(phase === "lights" || phase === "lightsout") && (
            <div className="flex gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: phase === "lightsout" ? 0 : 1,
                    scale: 1,
                    backgroundColor: phase === "lightsout" ? "#333" : "#FF1801",
                    boxShadow: phase === "lightsout" ? "none" : "0 0 20px #FF1801",
                  }}
                  transition={{
                    opacity: { duration: phase === "lightsout" ? 0.1 : 0.3, delay: phase === "lightsout" ? 0 : i * 0.3 },
                    scale: { duration: 0.3, delay: phase === "lightsout" ? 0 : i * 0.3 },
                  }}
                />
              ))}
            </div>
          )}

          {/* Phase: LIGHTS OUT text */}
          {phase === "text" && (
            <motion.h1
              className="font-display text-2xl md:text-5xl text-text-primary tracking-[0.3em] text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              LIGHTS OUT AND AWAY WE GO
            </motion.h1>
          )}

          {/* Phase: Name reveal */}
          {phase === "name" && (
            <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.h1
                className="font-display text-4xl md:text-7xl text-text-primary tracking-wider"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                HARI VERSHAN
              </motion.h1>
              <motion.div
                className="h-1 bg-papaya mx-auto mt-4"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
