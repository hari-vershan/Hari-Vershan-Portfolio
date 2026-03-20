"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { VideoBackground } from "@/components/ui/video-background";
import { CURRENT_PROJECTS } from "@/lib/case-studies";

export function CurrentLap() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <div id="current-circuit">
      <SectionWrapper id="current-circuit-intro" className="flex flex-col justify-center section-glow">
        {/* Video background */}
        <VideoBackground
          src="/videos/cars-sequence.mp4"
          opacity={0.18}
          blendMode="screen"
          overlay="cinematic"
          playbackRate={0.6}
        />
        {/* Subtle garage image underneath */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/f1-garage.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.12]"
            aria-hidden="true"
          />
        </div>
        <TextReveal as="span" className="font-mono text-xs text-papaya-safe tracking-widest uppercase mb-4 relative z-10">
          TechJays | 2025 — Present
        </TextReveal>
        <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-6 relative z-10">
          THE CURRENT CIRCUIT
        </TextReveal>
        <TextReveal as="p" className="text-text-body max-w-2xl text-lg relative z-10" delay={0.2}>
          Product Design Lead — leading a 20-30 member cross-functional design team across multiple enterprise engagements, partnering with product and engineering leadership to deliver AI-powered platforms.
        </TextReveal>
      </SectionWrapper>

      {/* Project Cards Grid */}
      <section className="px-6 md:px-16 lg:px-24 py-12 md:py-16">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {CURRENT_PROJECTS.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white/[0.03] border border-white/5 rounded-lg p-6 flex flex-col gap-4 hover:border-papaya/20 transition-all duration-300 group"
            >
              <span className="font-mono text-[10px] text-papaya-safe tracking-widest uppercase">
                {project.industry}
              </span>
              <h3 className="font-display text-xl text-text-primary tracking-wide group-hover:text-papaya transition-colors duration-200">
                {project.title}
              </h3>
              <p className="font-mono text-sm text-papaya-safe/80">
                {project.tagline}
              </p>
              <p className="text-text-body text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-col gap-2 mt-auto pt-2">
                <Link
                  href={`/products/${project.slug}`}
                  className="text-sm text-text-primary hover:text-papaya-safe transition-colors"
                >
                  View Case Study &rarr;
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-body hover:text-papaya-safe transition-colors"
                  >
                    Visit Live App &rarr;
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
