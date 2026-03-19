"use client";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS } from "@/lib/constants";
import { useEffect, useRef } from "react";

interface FullScreenMenuProps {
  open: boolean;
  onClose: () => void;
}

export function FullScreenMenu({ open, onClose }: FullScreenMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        if (e.key === "Tab" && menuRef.current) {
          const focusable = menuRef.current.querySelectorAll<HTMLElement>("a, button");
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      };
      window.addEventListener("keydown", handleKey);
      return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
    }
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-text-muted hover:text-papaya transition-colors p-2"
            aria-label="Close menu"
            autoFocus
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <nav className="flex flex-col gap-6">
            {SECTIONS.map((section, i) => (
              <motion.a
                key={section.id}
                href={section.href}
                onClick={onClose}
                className="text-3xl md:text-5xl font-display text-text-primary hover:text-papaya transition-colors"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                {section.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
