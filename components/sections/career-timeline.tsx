"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { TimelineEntry } from "./timeline-entry";
import { TIMELINE } from "@/lib/constants";

export function CareerTimeline() {
  return (
    <SectionWrapper id="race-history" className="flex flex-col justify-center">
      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
        THE RACE SO FAR
      </TextReveal>
      <TextReveal as="p" className="text-text-muted font-mono text-sm mb-16" delay={0.1}>
        Every lap built towards the championship position
      </TextReveal>
      <div className="max-w-2xl mx-auto">
        {TIMELINE.map((entry, i) => (
          <TimelineEntry key={entry.year} {...entry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
