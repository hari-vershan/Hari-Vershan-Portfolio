"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Leadership", href: "/leadership" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-700"
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="max-w-6xl mx-auto h-[72px] flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-xl tracking-tight magnetic-hover" style={{ color: "var(--text-primary)" }}>
            HV<span className="text-accent-blue">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[13px] font-medium transition-colors duration-300 group py-1"
                  style={{ color: isActive ? "var(--text-primary)" : "var(--text-muted)" }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-[1.5px] rounded-full transition-all duration-500 ease-out-expo"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: "var(--gradient-accent)",
                    }}
                  />
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] rounded-full bg-accent-blue/50 group-hover:w-full transition-all duration-500 ease-out-expo" />
                </Link>
              );
            })}
            <a
              href="/Hari_Vershan_Product_Design_Lead_Resume.pdf"
              download
              className="flex items-center gap-2 font-mono text-[10px] tracking-[1.5px] uppercase px-4 py-2 rounded-lg transition-all duration-300 magnetic-hover"
              style={{ border: "1px solid var(--border)", color: "#2563eb" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Resume
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg" aria-label="Toggle menu">
            <motion.span className="w-5 h-[1.5px] block rounded-full" style={{ background: "var(--text-primary)" }} animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
            <motion.span className="w-5 h-[1.5px] block rounded-full" style={{ background: "var(--text-primary)" }} animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} />
            <motion.span className="w-5 h-[1.5px] block rounded-full" style={{ background: "var(--text-primary)" }} animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center px-10 md:hidden"
            style={{ background: "var(--bg)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  className="block py-3 font-display text-4xl font-bold tracking-tight transition-colors"
                  style={{ color: pathname === link.href ? "var(--text-primary)" : "var(--text-dim)" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-8 pt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <a href="/Hari_Vershan_Product_Design_Lead_Resume.pdf" download className="font-mono text-sm text-accent-blue flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
