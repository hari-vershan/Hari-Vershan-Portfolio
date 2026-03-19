"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { HorizontalScroll } from "./horizontal-scroll";
import { ProductCard } from "./product-card";
import { PRODUCTS } from "@/lib/constants";

export function CurrentLap() {
  return (
    <div id="current-lap">
      <SectionWrapper id="current-lap-intro" className="flex flex-col justify-center">
        <TextReveal as="span" className="font-mono text-xs text-papaya-safe tracking-widest uppercase mb-4">
          TechJays | 2025 — Present
        </TextReveal>
        <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-6">
          THE CURRENT LAP
        </TextReveal>
        <TextReveal as="p" className="text-text-body max-w-2xl text-lg" delay={0.2}>
          Product Design Lead — leading a 20-30 member cross-functional design team across multiple enterprise engagements, partnering with product and engineering leadership to deliver AI-powered platforms.
        </TextReveal>
      </SectionWrapper>

      <HorizontalScroll>
        {PRODUCTS.slice(0, 4).map((product, i) => (
          <ProductCard key={product.slug} {...product} index={i} />
        ))}
      </HorizontalScroll>
    </div>
  );
}
