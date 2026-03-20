"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { SkillCategory } from "./skill-category";
import { LogoStrip } from "./logo-strip";
import { VideoBackground } from "@/components/ui/video-background";
import { ParticleField } from "@/components/ui/particle-field";
import { SKILLS, CERTIFICATIONS } from "@/lib/constants";

export function TheMachine() {
  return (
    <SectionWrapper id="the-machine" className="section-glow">
      {/* Tyres video for the "machine / skills" section — mechanical feel */}
      <VideoBackground
        src="/videos/tyres.mp4"
        opacity={0.1}
        blendMode="screen"
        overlay="cinematic"
        playbackRate={0.5}
      />
      {/* Particle field — tech/circuit aesthetic */}
      <ParticleField count={50} color="#FF8000" speed={0.4} connectLines />

      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4 relative z-10">
        THE MACHINE
      </TextReveal>
      <TextReveal as="p" className="text-text-muted font-mono text-sm mb-12 relative z-10" delay={0.1}>
        Technical specifications
      </TextReveal>
      <div className="relative z-10">
        {/* Decorative circuit board schematic SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_120s_linear_infinite]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.04 }}
          aria-hidden="true"
        >
          <line x1="50" y1="100" x2="550" y2="100" stroke="#FF8000" strokeWidth="0.5" />
          <line x1="50" y1="200" x2="550" y2="200" stroke="#FF8000" strokeWidth="0.5" />
          <line x1="50" y1="300" x2="550" y2="300" stroke="#FF8000" strokeWidth="0.5" />
          <line x1="50" y1="400" x2="550" y2="400" stroke="#FF8000" strokeWidth="0.5" />
          <line x1="50" y1="500" x2="550" y2="500" stroke="#FF8000" strokeWidth="0.5" />
          <line x1="100" y1="50" x2="100" y2="550" stroke="#FF8000" strokeWidth="0.5" />
          <line x1="200" y1="50" x2="200" y2="550" stroke="#FF8000" strokeWidth="0.5" />
          <line x1="300" y1="50" x2="300" y2="550" stroke="#FF8000" strokeWidth="0.5" />
          <line x1="400" y1="50" x2="400" y2="550" stroke="#FF8000" strokeWidth="0.5" />
          <line x1="500" y1="50" x2="500" y2="550" stroke="#FF8000" strokeWidth="0.5" />
          <line x1="100" y1="100" x2="200" y2="200" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="300" y1="100" x2="400" y2="200" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="200" y1="300" x2="300" y2="400" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="400" y1="300" x2="500" y2="400" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="100" y1="400" x2="200" y2="500" stroke="#FF8000" strokeWidth="0.8" />
          {[100, 200, 300, 400, 500].map((x) =>
            [100, 200, 300, 400, 500].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#FF8000" />
            ))
          )}
          <rect x="225" y="225" width="150" height="150" stroke="#FF8000" strokeWidth="1" rx="4" />
          <rect x="260" y="260" width="80" height="80" stroke="#FF8000" strokeWidth="0.5" rx="2" />
          <line x1="225" y1="275" x2="200" y2="275" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="225" y1="325" x2="200" y2="325" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="375" y1="275" x2="400" y2="275" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="375" y1="325" x2="400" y2="325" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="275" y1="225" x2="275" y2="200" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="325" y1="225" x2="325" y2="200" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="275" y1="375" x2="275" y2="400" stroke="#FF8000" strokeWidth="0.8" />
          <line x1="325" y1="375" x2="325" y2="400" stroke="#FF8000" strokeWidth="0.8" />
        </svg>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 relative z-10">
          {SKILLS.map((skill, i) => (
            <SkillCategory key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
      <div className="mb-12 relative z-10">
        <h3 className="font-display text-lg text-papaya-safe tracking-wider mb-6">RACE LICENSES</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex items-center gap-3 text-sm">
              <span className="font-mono text-papaya text-xs">{cert.year}</span>
              <span className="text-text-body">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10">
        <LogoStrip />
      </div>
    </SectionWrapper>
  );
}
