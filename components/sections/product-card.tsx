"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductCardProps {
  slug: string;
  title: string;
  tagline: string;
  industry: string;
  index: number;
}

export function ProductCard({ slug, title, tagline, industry, index }: ProductCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] h-[60vh] bg-surface rounded-sm border border-white/5 p-8 md:p-12 flex flex-col justify-between group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div>
        <span className="font-mono text-xs text-text-muted tracking-widest uppercase">{industry}</span>
        <h3 className="font-display text-2xl md:text-3xl text-text-primary mt-3 mb-4 group-hover:text-papaya transition-colors">
          {title}
        </h3>
        <p className="text-text-body text-base">{tagline}</p>
      </div>
      <div className="flex-1 my-6 bg-white/5 rounded-sm flex items-center justify-center border border-white/5">
        <span className="text-text-muted font-mono text-xs">Screenshot coming soon</span>
      </div>
      <Link
        href={`/products/${slug}`}
        className="font-mono text-sm text-papaya-safe hover:text-papaya transition-colors inline-flex items-center gap-2"
        data-cursor="hover"
      >
        View Case Study <span aria-hidden="true">&rarr;</span>
      </Link>
    </motion.div>
  );
}
