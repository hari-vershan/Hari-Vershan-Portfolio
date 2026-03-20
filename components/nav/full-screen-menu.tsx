"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SECTIONS } from "@/lib/constants";
import { useEffect, useRef } from "react";

interface FullScreenMenuProps {
  open: boolean;
  onClose: () => void;
}

function AnimatedMenuLink({ label, href, delay, onClose }: { label: string; href: string; delay: number; onClose: () => void }) {
  const letters = label.split("");
  const isPageLink = href.startsWith("/");

  const content = (
    <>
      <span className="flex">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className={`inline-block ${letter === " " ? "w-3 md:w-4" : ""}`}
            initial={{ opacity: 0, y: 30, rotateX: -60 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: delay + i * 0.02,
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ perspective: "400px" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
      <motion.div
        className="absolute -bottom-1 left-0 h-[2px] bg-papaya"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </>
  );

  const className = "text-3xl md:text-5xl font-display text-text-primary hover:text-papaya transition-colors block relative group";

  if (isPageLink) {
    return (
      <Link
        href={href}
        onClick={() => onClose()}
        className={className}
        data-cursor="hover"
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={() => onClose()}
      className={className}
      data-cursor="hover"
    >
      {content}
    </a>
  );
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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <motion.div
            className="absolute inset-0 bg-bg/98 backdrop-blur-xl"
            initial={{ clipPath: "circle(0% at calc(100% - 48px) 36px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 48px) 36px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 48px) 36px)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,128,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,128,0,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <motion.button
            onClick={() => onClose()}
            className="absolute top-6 right-6 text-text-muted hover:text-papaya transition-colors p-2 z-10"
            aria-label="Close menu"
            autoFocus
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </motion.button>

          <nav className="flex flex-col gap-6 relative z-10">
            {SECTIONS.map((section, i) => (
              <AnimatedMenuLink
                key={section.id}
                label={section.navLabel}
                href={section.href}
                delay={0.1 + i * 0.05}
                onClose={onClose}
              />
            ))}
          </nav>

          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-papaya/30 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
