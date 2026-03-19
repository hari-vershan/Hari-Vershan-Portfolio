"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { Counter } from "@/components/ui/counter";

const TEAM_IMAGES = [
  { src: "/images/team/build-ai-event.jpg", alt: "TechJays Build AI team event" },
  { src: "/images/team/cricket-team.jpg", alt: "TechJays Game of Codes cricket team" },
  { src: "/images/team/design-review.jpg", alt: "Design team review session" },
];

export function TheTeam() {
  return (
    <SectionWrapper id="the-team">
      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
        THE TEAM
      </TextReveal>
      <TextReveal as="p" className="text-text-body text-lg max-w-2xl mb-12" delay={0.1}>
        Great products are built by great teams. I invest in building design cultures where craft meets strategy — mentoring designers, establishing governance, and driving cross-functional alignment.
      </TextReveal>
      <div className="grid grid-cols-3 gap-8 mb-16 max-w-xl">
        <div>
          <div className="font-mono text-3xl md:text-4xl text-text-primary font-bold">
            <Counter target={20} suffix="-30" />
          </div>
          <p className="text-text-muted text-xs font-mono mt-1">Team Members</p>
        </div>
        <div>
          <div className="font-mono text-3xl md:text-4xl text-text-primary font-bold">
            <Counter target={4} suffix=".2/5" />
          </div>
          <p className="text-text-muted text-xs font-mono mt-1">CSAT Score</p>
        </div>
        <div>
          <div className="font-mono text-3xl md:text-4xl text-text-primary font-bold">
            <Counter target={9} suffix="+" />
          </div>
          <p className="text-text-muted text-xs font-mono mt-1">Years Leading</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TEAM_IMAGES.map((img, i) => (
          <motion.div
            key={img.src}
            className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
      <div className="mt-12 space-y-3 max-w-xl">
        {[
          "Design operations and governance established across product verticals",
          "Hiring, onboarding, and career development for growing design teams",
          "Structured feedback, portfolio reviews, and mentorship culture",
        ].map((point, i) => (
          <TextReveal key={i} as="p" className="text-text-muted text-sm border-l border-papaya/20 pl-4" delay={i * 0.1}>
            {point}
          </TextReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
