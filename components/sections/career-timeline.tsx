"use client";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { TimelineEntry } from "./timeline-entry";
import { VideoBackground } from "@/components/ui/video-background";
import { ParticleField } from "@/components/ui/particle-field";
import { TIMELINE } from "@/lib/constants";
import { useScrollProgress } from "@/lib/use-scroll-progress";

export function CareerTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress();

  return (
    <SectionWrapper id="race-history" className="flex flex-col justify-center section-glow">
      {/* Race flags video background for the timeline section */}
      <VideoBackground
        src="/videos/race-flags.mp4"
        opacity={0.08}
        blendMode="screen"
        overlay="cinematic"
        playbackRate={0.5}
      />
      {/* Particle field for ambient depth */}
      <ParticleField count={40} color="#FF8000" speed={0.3} connectLines />

      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4 relative z-10">
        THE RACE SO FAR
      </TextReveal>
      <TextReveal as="p" className="text-text-muted font-mono text-sm mb-16 relative z-10" delay={0.1}>
        Every lap built towards the championship position
      </TextReveal>
      <div className="max-w-2xl mx-auto relative z-10" ref={timelineRef}>
        {/* Animated glowing dot that travels down the timeline */}
        <div
          className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full z-10 pointer-events-none"
          style={{
            top: `${scrollProgress * 100}%`,
            background: "radial-gradient(circle, #FF8000 0%, transparent 70%)",
            boxShadow: "0 0 12px 4px rgba(255, 128, 0, 0.5), 0 0 24px 8px rgba(255, 128, 0, 0.2)",
            transition: "top 0.1s linear",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-papaya animate-ping opacity-30" />
        </div>
        {TIMELINE.map((entry, i) => (
          <TimelineEntry key={entry.year} {...entry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
