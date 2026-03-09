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
        className="fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500"
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-6xl mx-auto h-[72px] flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-lg tracking-tight" style={{ color: "var(--text-primary)" }}>
            HV<span className="text-accent-blue">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative text-sm transition-colors duration-300 group" style={{ color: pathname === link.href ? "var(--text-primary)" : "var(--text-muted)" }}>
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] bg-accent-blue transition-all duration-300" style={{ width: pathname === link.href ? "100%" : "0%" }} />
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-blue group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <a href="/Hari_Vershan_Product_Design_Lead_Resume.pdf" download className="flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase px-4 py-2 rounded-lg transition-all duration-300" style={{ border: "1px solid var(--border)", color: "#2563eb" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Resume
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-[5px] p-1" aria-label="Toggle menu">
            <motion.span className="w-5 h-[2px] block" style={{ background: "var(--text-primary)" }} animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} />
            <motion.span className="w-5 h-[2px] block" style={{ background: "var(--text-primary)" }} animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} />
            <motion.span className="w-5 h-[2px] block" style={{ background: "var(--text-primary)" }} animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="fixed inset-0 z-40 pt-24 px-8 flex flex-col gap-6 md:hidden" style={{ background: "var(--bg)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {navLinks.map((link, i) => (
              <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                <Link href={link.href} className="font-display text-3xl" style={{ color: pathname === link.href ? "var(--text-primary)" : "var(--text-muted)" }}>{link.label}</Link>
              </motion.div>
            ))}
            <motion.a href="/Hari_Vershan_Product_Design_Lead_Resume.pdf" download className="font-mono text-sm text-accent-blue mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>Download Resume ↓</motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
