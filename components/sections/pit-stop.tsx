"use client";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { ContactForm } from "@/components/contact/contact-form";

export function PitStop() {
  return (
    <SectionWrapper id="pit-stop" className="flex flex-col">
      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
        THE PIT STOP
      </TextReveal>
      <TextReveal as="p" className="text-text-muted font-mono text-sm mb-16" delay={0.1}>
        Every great race needs a great team — let&apos;s connect
      </TextReveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="relative w-48 h-48 rounded-sm overflow-hidden mb-8">
            <Image src="/images/hari-headshot.jpg" alt="Hari Vershan" fill className="object-cover" />
          </div>
          <p className="text-text-body text-lg mb-8 max-w-md">
            I believe in design that drives real impact — whether it&apos;s making workflows 12x faster or building teams that ship with confidence. If you&apos;re looking for a design leader who blends AI-driven thinking with human-centered craft, let&apos;s talk.
          </p>
          <div className="space-y-3 text-sm">
            <a href="mailto:sr.harivershan@gmail.com" className="flex items-center gap-3 text-text-body hover:text-papaya transition-colors" data-cursor="hover">
              <span className="font-mono text-papaya-safe">EMAIL</span> sr.harivershan@gmail.com
            </a>
            <a href="tel:+917358871333" className="flex items-center gap-3 text-text-body hover:text-papaya transition-colors" data-cursor="hover">
              <span className="font-mono text-papaya-safe">PHONE</span> +91 73588 71333
            </a>
            <a href="https://linkedin.com/in/hari-vershan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-body hover:text-papaya transition-colors" data-cursor="hover">
              <span className="font-mono text-papaya-safe">LINKEDIN</span> linkedin.com/in/hari-vershan
            </a>
          </div>
          <a href="/resume.pdf" download className="inline-block mt-8 font-mono text-sm text-papaya-safe border border-papaya/30 px-6 py-2 rounded-sm hover:bg-papaya/10 transition-colors" data-cursor="hover">
            DOWNLOAD RESUME
          </a>
        </div>
        <div>
          <h3 className="font-display text-lg text-text-primary tracking-wider mb-6">PIT WALL TRANSMISSION</h3>
          <ContactForm />
        </div>
      </div>
      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-text-muted">&copy; {new Date().getFullYear()} Hari Vershan. Built with Claude Code.</span>
        <span className="font-mono text-xs text-text-muted">Designed & Engineered with AI</span>
      </div>
    </SectionWrapper>
  );
}
