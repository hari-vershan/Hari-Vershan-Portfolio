"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { StandingsRow } from "./standings-row";
import { ParallaxPhoto } from "./parallax-photo";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { STANDINGS } from "@/lib/constants";

export function ChampionshipStandings() {
  return (
    <SectionWrapper id="standings" className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
      {/* Abstract background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-papaya/5 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: "100%", animationDelay: `${i * 2}s` }}
          />
        ))}
      </div>

      {/* Left: Text + Standings */}
      <div className="flex-1 z-10">
        <TextReveal as="h1" className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-wider mb-2">
          HARI VERSHAN
        </TextReveal>
        <TextReveal as="p" className="font-mono text-sm md:text-base text-papaya-safe tracking-widest uppercase mb-12" delay={0.2}>
          Product Design Lead | AI-Driven Design | Enterprise UX
        </TextReveal>

        <table className="w-full max-w-lg" role="table" aria-label="Career championship standings">
          <thead className="sr-only">
            <tr><th>Position</th><th>Metric</th><th>Value</th></tr>
          </thead>
          <tbody>
            {STANDINGS.map((row, i) => (
              <StandingsRow key={row.position} {...row} index={i} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Right: Photo */}
      <div className="flex-shrink-0 z-10">
        <ParallaxPhoto />
      </div>

      <ScrollIndicator />
    </SectionWrapper>
  );
}
