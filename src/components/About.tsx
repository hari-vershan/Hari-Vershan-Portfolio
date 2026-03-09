"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const timeline = [
  {
    year: "2017",
    title: "Data to Design",
    desc: "Started at Ugam Solutions as an analyst, developing a deep understanding of data-driven decision making before transitioning into product design.",
  },
  {
    year: "2021",
    title: "Product Design",
    desc: "Joined Srijan Technologies, specialising in responsive design, accessibility, and Agile product development across enterprise CMS platforms.",
  },
  {
    year: "2022",
    title: "Senior Designer",
    desc: "Promoted at Material+ (formerly Srijan), leading UX redesigns that drove 20% conversion improvement. Built scalable design systems.",
  },
  {
    year: "2025",
    title: "Design Leader",
    desc: "Became Product Design Lead at TechJays, leading 20–30 designers across AI-powered enterprise products and building Figma-to-LLM workflows.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">// About</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Building systems,{" "}
            <span className="gradient-text">not just interfaces</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* Narrative */}
          <div>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                I&apos;m an <strong className="text-white font-medium">AI-enabled design leader</strong> with
                a background that bridges data analytics, product design, and
                design management. My career has been a deliberate evolution —
                from understanding data at Ugam Solutions to shaping products at
                Srijan and Material+, to now leading design strategy at TechJays.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                I believe in{" "}
                <strong className="text-white font-medium">
                  building the machine that builds the product
                </strong>{" "}
                — establishing design operations, scalable systems, and
                AI-assisted workflows that multiply team output. My teams don&apos;t
                just deliver screens; they deliver measurable business outcomes.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Currently, I&apos;m pioneering{" "}
                <strong className="text-white font-medium">
                  Figma-to-LLM design pipelines
                </strong>{" "}
                and Claude Code workflows that reduce design-to-development
                handoff time, enabling teams to ship faster with minimal rework.
              </p>
            </ScrollReveal>
          </div>

          {/* Animated Timeline */}
          <div>
            <StaggerContainer className="relative pl-8" staggerDelay={0.15}>
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-accent-green rounded-full" />

              {timeline.map((item, i) => (
                <StaggerItem
                  key={item.year}
                  className="relative pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div
                    className={`absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 border-surface ${
                      i === timeline.length - 1
                        ? "bg-accent-green shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                        : "bg-accent-blue"
                    }`}
                  />

                  <div className="font-mono text-xs tracking-wider text-accent-blue mb-1">
                    {item.year}
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Philosophy callout */}
        <ScrollReveal delay={0.2} className="mt-20">
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green">
            <div className="bg-surface rounded-2xl px-8 md:px-12 py-10 text-center">
              <p className="font-display text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                &ldquo;Design leadership is not about having all the answers. It
                is about building teams that find better ones.&rdquo;
              </p>
              <p className="text-zinc-500 text-sm mt-4">
                — My approach to design management
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
