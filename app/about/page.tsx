import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Driver — Hari Vershan",
  description:
    "Product Design Lead — 9+ years building AI-powered products and high-performing design teams.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const EXPERIENCE = [
  {
    period: "2025 – Present",
    role: "Product Design Lead",
    company: "TechJays",
    highlights: [
      "Leading a design org of 20-30 designers across multiple product verticals",
      "Driving AI-powered enterprise product design from concept to ship",
      "Establishing design operations, governance frameworks, and scalable design systems",
    ],
  },
  {
    period: "2022 – 2025",
    role: "Senior Product Designer",
    company: "Material+",
    highlights: [
      "Achieved 20% conversion improvement through data-driven redesigns",
      "Reduced dev handoff friction, cutting development time by 30%",
      "Led cross-functional squads shipping enterprise SaaS features end-to-end",
    ],
  },
  {
    period: "2021 – 2022",
    role: "Product Designer",
    company: "Srijan Technologies",
    highlights: [
      "Delivered responsive, accessible interfaces for large-scale CMS platforms",
      "Ran A/B testing programs to validate design decisions with real user data",
      "Championed WCAG compliance and inclusive design practices",
    ],
  },
  {
    period: "2017 – 2021",
    role: "Associate Analyst",
    company: "Ugam Solutions",
    highlights: [
      "Performed statistical analysis and built business intelligence dashboards",
      "Translated complex data sets into actionable design and product insights",
      "Bridged the gap between analytics teams and product stakeholders",
    ],
  },
];

const SKILLS = [
  {
    label: "Leadership",
    items: [
      "Design Management",
      "Design Ops",
      "Team Mentoring",
      "Hiring",
      "UX Strategy",
    ],
  },
  {
    label: "Product",
    items: [
      "Product Strategy",
      "Design Systems",
      "Information Architecture",
      "UX Metrics",
    ],
  },
  {
    label: "Research",
    items: [
      "User Interviews",
      "Heuristic Evaluation",
      "A/B Testing",
      "Usability Testing",
    ],
  },
  {
    label: "Tools",
    items: ["Figma", "Miro", "Sketch", "Framer", "Adobe Creative Cloud"],
  },
  {
    label: "AI & Dev",
    items: [
      "Claude Code",
      "LLM Toolchains",
      "MCP Integrations",
      "Figma-to-LLM",
    ],
  },
  {
    label: "Enterprise",
    items: [
      "SharePoint",
      "Drupal",
      "Power BI",
      "Google Workspace",
    ],
  },
];

const CERTIFICATIONS = [
  { name: "Anthropic Claude Code, AI-Assisted Development", year: "2025" },
  { name: "Design Thinking Practitioner", year: "2025" },
  { name: "Enterprise Design Thinking, IBM", year: "2025" },
  { name: "Design-Led Strategy", year: "2024" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* ── Top navigation ─────────────────────────────────── */}
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-4">
        <Link
          href="/"
          className="font-mono text-sm text-papaya-safe hover:text-papaya transition-colors inline-block"
          data-cursor="hover"
        >
          &larr; Back to Grid
        </Link>
      </div>

      {/* ── Hero / Header ──────────────────────────────────── */}
      <header className="px-6 md:px-16 lg:px-24 pb-16 border-b border-white/5">
        <span className="font-mono text-xs text-text-muted tracking-widest uppercase block mb-3">
          Driver Profile
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-text-primary tracking-wider mb-6">
          ABOUT THE DRIVER
        </h1>
        <p className="text-text-body text-lg md:text-xl max-w-3xl leading-relaxed">
          An AI-enabled design leader with a career that bridges data analytics,
          product design, and design management — always focused on building
          teams that ship exceptional products.
        </p>
      </header>

      <div className="px-6 md:px-16 lg:px-24 py-16 space-y-24">
        {/* ── Philosophy ───────────────────────────────────── */}
        <section aria-labelledby="philosophy">
          <h2
            id="philosophy"
            className="font-display text-2xl md:text-3xl text-text-primary tracking-wider mb-8"
          >
            RACING PHILOSOPHY
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/[0.03] border border-white/5 rounded-sm p-8">
              <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-4">
                Core Belief
              </span>
              <p className="text-text-body leading-relaxed text-lg">
                <span className="text-papaya-safe font-semibold">
                  &ldquo;Building the machine that builds the product.&rdquo;
                </span>{" "}
                Establishing design operations, scalable systems, and
                AI-assisted workflows that multiply team output.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-sm p-8">
              <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-4">
                Vision
              </span>
              <ul className="space-y-4 text-text-body leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-papaya-safe mt-1 shrink-0">/</span>
                  AI amplifies human judgment rather than replacing it
                </li>
                <li className="flex gap-3">
                  <span className="text-papaya-safe mt-1 shrink-0">/</span>
                  Building design cultures where craft meets strategy
                </li>
                <li className="flex gap-3">
                  <span className="text-papaya-safe mt-1 shrink-0">/</span>
                  Mentoring designers, establishing governance, and driving
                  cross-functional alignment
                </li>
              </ul>
            </div>
          </div>

          <p className="text-text-muted font-mono text-sm mt-6">
            Currently based in Coimbatore, India.
          </p>
        </section>

        {/* ── Race History (Experience) ────────────────────── */}
        <section aria-labelledby="experience">
          <h2
            id="experience"
            className="font-display text-2xl md:text-3xl text-text-primary tracking-wider mb-8"
          >
            RACE HISTORY
          </h2>

          <div className="relative border-l border-papaya/20 pl-8 space-y-12 ml-4">
            {EXPERIENCE.map((entry) => (
              <article key={entry.company} className="relative">
                {/* timeline dot */}
                <span className="absolute -left-[2.55rem] top-1.5 w-3 h-3 rounded-full bg-papaya-safe border-2 border-bg" />

                <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-1">
                  {entry.period}
                </span>
                <h3 className="font-display text-xl text-text-primary tracking-wide">
                  {entry.role}
                </h3>
                <span className="font-mono text-sm text-text-muted block mb-4">
                  {entry.company}
                </span>
                <ul className="space-y-2">
                  {entry.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-text-body text-sm flex gap-3 leading-relaxed"
                    >
                      <span className="text-papaya-safe shrink-0">&mdash;</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── Telemetry (Skills) ───────────────────────────── */}
        <section aria-labelledby="skills">
          <h2
            id="skills"
            className="font-display text-2xl md:text-3xl text-text-primary tracking-wider mb-8"
          >
            TELEMETRY DATA
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((group) => (
              <div
                key={group.label}
                className="bg-white/[0.03] border border-white/5 rounded-sm p-6"
              >
                <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-4">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs text-text-body bg-white/[0.04] border border-white/5 px-3 py-1.5 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pit Garage (Education & Certs) ───────────────── */}
        <section aria-labelledby="education">
          <h2
            id="education"
            className="font-display text-2xl md:text-3xl text-text-primary tracking-wider mb-8"
          >
            PIT GARAGE
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white/[0.03] border border-white/5 rounded-sm p-8">
              <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-4">
                Education
              </span>
              <h3 className="font-display text-lg text-text-primary tracking-wide">
                B.E in Electronics and Communication
              </h3>
              <p className="font-mono text-sm text-text-muted mt-1">
                SNS College of Engineering, Coimbatore
              </p>
              <p className="font-mono text-xs text-text-muted mt-1">
                2014 – 2017
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-white/[0.03] border border-white/5 rounded-sm p-8">
              <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-4">
                Certifications
              </span>
              <ul className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.name} className="flex justify-between gap-4">
                    <span className="text-text-body text-sm leading-relaxed">
                      {cert.name}
                    </span>
                    <span className="font-mono text-xs text-text-muted shrink-0 mt-0.5">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Comms Channel (Contact) ──────────────────────── */}
        <section aria-labelledby="contact">
          <h2
            id="contact"
            className="font-display text-2xl md:text-3xl text-text-primary tracking-wider mb-8"
          >
            COMMS CHANNEL
          </h2>

          <div className="bg-white/[0.03] border border-white/5 rounded-sm p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-2">
                  Email
                </span>
                <a
                  href="mailto:sr.harivershan@gmail.com"
                  className="text-text-body hover:text-papaya-safe transition-colors text-sm break-all"
                  data-cursor="hover"
                >
                  sr.harivershan@gmail.com
                </a>
              </div>

              <div>
                <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-2">
                  Phone
                </span>
                <a
                  href="tel:+917358871333"
                  className="text-text-body hover:text-papaya-safe transition-colors text-sm"
                  data-cursor="hover"
                >
                  +91 73588 71333
                </a>
              </div>

              <div>
                <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-2">
                  LinkedIn
                </span>
                <a
                  href="https://linkedin.com/in/hari-vershan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-body hover:text-papaya-safe transition-colors text-sm"
                  data-cursor="hover"
                >
                  linkedin.com/in/hari-vershan
                </a>
              </div>

              <div>
                <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase block mb-2">
                  GitHub
                </span>
                <a
                  href="https://github.com/hari-vershan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-body hover:text-papaya-safe transition-colors text-sm"
                  data-cursor="hover"
                >
                  github.com/hari-vershan
                </a>
              </div>
            </div>

            {/* Resume download */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 bg-papaya-safe/10 border border-papaya/20 text-papaya-safe font-mono text-sm px-6 py-3 rounded-sm hover:bg-papaya-safe/20 transition-colors"
                data-cursor="hover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ── Bottom navigation ──────────────────────────────── */}
      <div className="px-6 md:px-16 lg:px-24 py-12 border-t border-white/5">
        <Link
          href="/"
          className="font-mono text-sm text-papaya-safe hover:text-papaya transition-colors inline-block"
          data-cursor="hover"
        >
          &larr; Back to Grid
        </Link>
      </div>
    </main>
  );
}
