"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { BIO } from "@/lib/constants";

export function PitStop() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <SectionWrapper id="pit-stop" className="flex flex-col section-glow">
      <div ref={sectionRef}>
        <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
          THE PIT STOP
        </TextReveal>
        <TextReveal as="p" className="text-text-muted font-mono text-sm mb-16" delay={0.1}>
          Every great race needs a great team — let&apos;s connect
        </TextReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column — profile info */}
          <div className="flex flex-col">
            {/* Compact headshot — no background, characteristic style */}
            <motion.div
              className="flex items-center gap-5 mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden ring-1 ring-papaya/30 flex-shrink-0">
                <Image src="/images/hari-headshot.png" alt="Hari Vershan" fill className="object-cover object-top" />
              </div>
              <div>
                <p className="font-display text-lg text-text-primary tracking-wide">Hari Vershan SR</p>
                <p className="font-mono text-xs text-papaya-safe tracking-wider uppercase">Product Design Lead</p>
              </div>
            </motion.div>

            <motion.p
              className="text-text-body text-base mb-3 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {BIO.philosophy}
            </motion.p>
            <motion.p
              className="text-text-muted text-sm mb-3 max-w-md"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              {BIO.status}
            </motion.p>

            {/* Generic status text — no container/border */}
            <motion.p
              className="text-text-muted text-xs font-mono mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Open to design leadership roles &amp; consulting
            </motion.p>

            {/* Contact icons with tooltips */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              {[
                {
                  href: "mailto:sr.harivershan@gmail.com",
                  label: "sr.harivershan@gmail.com",
                  ariaLabel: "Send email",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                  ),
                },
                {
                  href: "tel:+917358871333",
                  label: "+91 73588 71333",
                  ariaLabel: "Call phone",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/hari-vershan/",
                  label: "linkedin.com/in/hari-vershan",
                  ariaLabel: "Open LinkedIn",
                  external: true,
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  href: "https://github.com/hari-vershan",
                  label: "github.com/hari-vershan",
                  ariaLabel: "Open GitHub",
                  external: true,
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                  ),
                },
              ].map((link) => (
                <div key={link.ariaLabel} className="relative group/icon">
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface border border-white/10 text-text-body text-[10px] font-mono px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-text-muted hover:text-papaya hover:border-papaya/40 hover:bg-papaya/5 transition-all duration-300"
                    aria-label={link.ariaLabel}
                    data-cursor="hover"
                  >
                    {link.icon}
                  </a>
                </div>
              ))}
            </motion.div>

            {/* Compact resume CTA */}
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 font-mono text-xs text-papaya-safe border border-papaya/30 px-4 py-2 rounded-sm hover:bg-papaya/10 hover:border-papaya/50 transition-all w-fit"
              data-cursor="hover"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              RESUME
            </motion.a>
          </div>

          {/* Right column — contact form, aligned to start at same level */}
          <div className="flex flex-col">
            <motion.h3
              className="font-display text-lg text-text-primary tracking-wider mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              PIT WALL TRANSMISSION
            </motion.h3>
            <ContactForm />
          </div>
        </div>

        <motion.div
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <span className="font-mono text-xs text-text-muted">&copy; {new Date().getFullYear()} Hari Vershan. Built with Claude Code.</span>
          <span className="font-mono text-xs text-text-muted">Designed &amp; Engineered with AI</span>
        </motion.div>

        {/* F1 inspiration disclaimer */}
        <p className="font-mono text-[10px] text-text-muted/40 text-center leading-relaxed max-w-2xl mx-auto mt-4">
          The visual language and design aesthetic of this portfolio draws inspiration from the spirit of Formula 1 racing and McLaren Racing.
          All trademarks, logos, and brand identities belong to their respective owners. This is a personal portfolio — not affiliated with or endorsed by McLaren Racing Ltd or Formula One.
        </p>
      </div>
    </SectionWrapper>
  );
}
