"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { SkillCategory } from "./skill-category";
import { LogoStrip } from "./logo-strip";
import { SKILLS, CERTIFICATIONS } from "@/lib/constants";

export function TheMachine() {
  return (
    <SectionWrapper id="the-machine">
      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
        THE MACHINE
      </TextReveal>
      <TextReveal as="p" className="text-text-muted font-mono text-sm mb-12" delay={0.1}>
        Technical specifications
      </TextReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {SKILLS.map((skill, i) => (
          <SkillCategory key={skill.category} {...skill} index={i} />
        ))}
      </div>
      <div className="mb-12">
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
      <LogoStrip />
    </SectionWrapper>
  );
}
