"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const contactLinks = [
  {
    label: "Email",
    value: "sr.harivershan@gmail.com",
    href: "mailto:sr.harivershan@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "hari-vershan",
    href: "https://www.linkedin.com/in/hari-vershan/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 73588 71333",
    href: "tel:+917358871333",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Coimbatore, India",
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — CTA */}
          <div>
            <ScrollReveal>
              <span className="section-label">// Contact</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-white">Let&apos;s build</span>{" "}
                <span className="gradient-text-full">intelligent products</span>{" "}
                <span className="text-white">together.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Open to Product Design Lead, Design Manager, and Head of Design
                roles — particularly in AI-driven product companies and
                enterprise SaaS organisations.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:sr.harivershan@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm rounded-xl hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send a Message
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="/Hari_Vershan_Product_Design_Lead_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/[0.1] text-zinc-300 font-medium text-sm rounded-xl hover:bg-white/[0.04] hover:border-white/[0.15] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Contact cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {contactLinks.map((link) => (
              <StaggerItem key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="card-surface rounded-xl p-5 flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue flex-shrink-0 group-hover:bg-accent-blue/20 transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[2px] uppercase text-zinc-600 mb-1">
                        {link.label}
                      </div>
                      <div className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="card-surface rounded-xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue flex-shrink-0">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[2px] uppercase text-zinc-600 mb-1">
                        {link.label}
                      </div>
                      <div className="text-sm text-zinc-300">{link.value}</div>
                    </div>
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
