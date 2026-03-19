"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/constants";
import { useSectionObserver } from "@/lib/use-section-observer";
import { TrackMap } from "./track-map";
import { SoundToggle } from "./sound-toggle";
import { FullScreenMenu } from "./full-screen-menu";

export function TelemetryBar() {
  const activeSection = useSectionObserver();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLabel = SECTIONS.find((s) => s.id === activeSection)?.label ?? "";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 transition-colors duration-300 ${
          scrolled ? "bg-bg/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 5, duration: 0.6 }}
      >
        <a href="#standings" className="font-display text-lg text-text-primary tracking-wider" aria-label="Back to top">
          HV
        </a>

        <span className="hidden md:block font-mono text-xs text-text-muted tracking-widest uppercase" aria-live="polite" aria-atomic="true">
          {currentLabel}
        </span>

        <div className="flex items-center gap-4">
          <TrackMap />
          <SoundToggle />
          <button
            onClick={() => setMenuOpen(true)}
            className="text-text-muted hover:text-papaya transition-colors p-2"
            aria-label="Open navigation menu"
            data-cursor="hover"
          >
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="0" y1="2" x2="24" y2="2" /><line x1="0" y1="10" x2="24" y2="10" /><line x1="0" y1="18" x2="24" y2="18" />
            </svg>
          </button>
        </div>
      </motion.header>

      <FullScreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
