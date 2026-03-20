"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { PAST_CASE_STUDIES } from "@/lib/case-studies";

export function PastCircuits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const previews = PAST_CASE_STUDIES.slice(0, 6);

  return (
    <SectionWrapper id="past-circuits" className="section-glow">
      <TextReveal as="span" className="font-mono text-xs text-papaya-safe tracking-widest uppercase mb-4 block">
        Completed Races
      </TextReveal>
      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-3">
        PAST CIRCUITS
      </TextReveal>
      <TextReveal as="p" className="text-text-body max-w-xl text-lg mb-12" delay={0.1}>
        Case studies from the pit lane — completed races
      </TextReveal>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {previews.map((study, i) => (
          <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link
              href={`/products/${study.slug}`}
              className="block bg-white/[0.03] border border-white/5 rounded-lg p-6 hover:border-papaya/20 transition-all duration-300 h-full group"
              data-cursor="hover"
            >
              <span className="font-mono text-[10px] text-papaya-safe tracking-widest uppercase">
                {study.industry}
              </span>
              <h3 className="font-display text-xl text-text-primary tracking-wide mt-3 mb-2 group-hover:text-papaya transition-colors duration-200">
                {study.title}
              </h3>
              <p className="font-mono text-sm text-papaya-safe/80 mb-3">
                {study.tagline}
              </p>
              <p className="text-text-body text-sm leading-relaxed line-clamp-2">
                {study.description}
              </p>
              <span className="inline-block mt-4 text-sm text-text-muted group-hover:text-papaya-safe transition-colors font-mono">
                View Case Study &rarr;
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10"
      >
        <Link
          href="/products"
          className="inline-block font-mono text-sm tracking-wider text-papaya-safe border border-papaya/30 rounded-sm px-6 py-3 hover:bg-papaya/10 hover:border-papaya/50 transition-all"
          data-cursor="hover"
        >
          VIEW ALL CIRCUITS &rarr;
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
