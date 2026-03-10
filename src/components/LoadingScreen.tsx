"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_TEXT = "HV.";
const SUBTITLE = "Product Design Lead";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasLoaded = sessionStorage.getItem("hv-loaded");
    if (!hasLoaded) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hv-loaded", "true");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Logo letters */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              overflow: "hidden",
            }}
          >
            {LOGO_TEXT.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Horizontal line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              width: "clamp(80px, 20vw, 160px)",
              height: 2,
              background: "var(--foreground)",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontSize: "clamp(0.75rem, 2vw, 1rem)",
              color: "var(--foreground)",
              opacity: 0.7,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            {SUBTITLE}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
