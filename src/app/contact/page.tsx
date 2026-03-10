"use client";

import { useState } from "react";
import TextReveal, { CharReveal } from "@/components/TextReveal";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import PageTransition from "@/components/PageTransition";

/* ─── Contact Data ─── */
const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "sr.harivershan@gmail.com",
    href: "mailto:sr.harivershan@gmail.com",
    color: "#2563eb",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    value: "hari-vershan",
    href: "https://www.linkedin.com/in/hari-vershan/",
    color: "#2563eb",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: "GitHub",
    value: "hari-vershan",
    href: "https://github.com/hari-vershan",
    color: "#7c3aed",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 73588 71333",
    href: "tel:+917358871333",
    color: "#059669",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Coimbatore, India",
    href: null,
    color: "#7c3aed",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sr.harivershan@gmail.com?subject=Hello from ${encodeURIComponent(
      formState.name
    )}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${encodeURIComponent(
      formState.name
    )} (${encodeURIComponent(formState.email)})`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <PageTransition>
      {/* ──────────────── Hero ──────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Orbs */}
        <div className="bg-orb bg-orb-blue animate-float w-[550px] h-[550px] top-[-8%] right-[-10%]" />
        <div className="bg-orb bg-orb-purple animate-float-slow w-[450px] h-[450px] bottom-[0%] left-[-8%]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label">// Contact</span>
          </ScrollReveal>
          <CharReveal
            as="h1"
            className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6"
            delay={0.1}
          >
            Let's Connect
          </CharReveal>
          <TextReveal
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            delay={0.2}
          >
            Whether you're looking for a design leader, exploring collaboration, or just want to say hello — I'd love to hear from you.
          </TextReveal>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* ──────────────── Contact Grid ──────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* ── Left: Contact Info ── */}
            <div>
              <ScrollReveal>
                <span className="section-label">// Reach out</span>
                <h2
                  className="font-display text-2xl font-bold tracking-tight mt-2 mb-8"
                  style={{ color: "var(--text-primary)" }}
                >
                  Get in touch
                </h2>
              </ScrollReveal>

              <StaggerContainer
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                staggerDelay={0.08}
              >
                {contactInfo.map((info) => (
                  <StaggerItem key={info.label}>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="card block p-5 group hover:border-accent-blue/30 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="p-2 rounded-lg"
                            style={{
                              background: "var(--bg-tertiary)",
                              color: info.color,
                            }}
                          >
                            {info.icon}
                          </div>
                          <span
                            className="font-mono text-[10px] tracking-[2px] uppercase"
                            style={{ color: "var(--text-dim)" }}
                          >
                            {info.label}
                          </span>
                        </div>
                        <p
                          className="text-sm font-medium group-hover:translate-x-0.5 transition-transform"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {info.value}
                        </p>
                      </a>
                    ) : (
                      <div className="card block p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="p-2 rounded-lg"
                            style={{
                              background: "var(--bg-tertiary)",
                              color: info.color,
                            }}
                          >
                            {info.icon}
                          </div>
                          <span
                            className="font-mono text-[10px] tracking-[2px] uppercase"
                            style={{ color: "var(--text-dim)" }}
                          >
                            {info.label}
                          </span>
                        </div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {info.value}
                        </p>
                      </div>
                    )}
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Download Resume */}
              <ScrollReveal delay={0.3}>
                <a
                  href="/Hari_Vershan_Product_Design_Lead_Resume.pdf"
                  download
                  className="inline-flex items-center gap-3 mt-8 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  <svg
                    className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                    style={{ color: "#2563eb" }}
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
                  Download Resume
                </a>
              </ScrollReveal>
            </div>

            {/* ── Right: Contact Form ── */}
            <ScrollReveal delay={0.15}>
              <TiltCard className="card p-8" glowColor="#2563eb">
                <h3
                  className="font-display text-xl font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Drop a message
                </h3>
                <p
                  className="text-sm mb-8"
                  style={{ color: "var(--text-muted)" }}
                >
                  I&apos;ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-[10px] tracking-[2px] uppercase mb-2"
                      style={{ color: "var(--text-dim)" }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-accent-blue/30"
                      style={{
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-[10px] tracking-[2px] uppercase mb-2"
                      style={{ color: "var(--text-dim)" }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-accent-blue/30"
                      style={{
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-[10px] tracking-[2px] uppercase mb-2"
                      style={{ color: "var(--text-dim)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 resize-none focus:ring-2 focus:ring-accent-blue/30"
                      style={{
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                    }}
                  >
                    {submitted ? "Opening mail client..." : "Send Message"}
                  </button>
                </form>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* ──────────────── Availability Banner ──────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <TiltCard className="card p-8 text-center" glowColor="#059669">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
                </span>
                <span
                  className="font-mono text-[10px] tracking-[2px] uppercase"
                  style={{ color: "#059669" }}
                >
                  Available for opportunities
                </span>
              </div>
              <h3
                className="font-display text-xl md:text-2xl font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Open to design leadership roles &amp; consulting
              </h3>
              <p
                className="text-sm max-w-lg mx-auto"
                style={{ color: "var(--text-muted)" }}
              >
                Currently leading design at TechJays. Open to conversations
                about design leadership, AI-driven product strategy, and
                enterprise design consulting.
              </p>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
