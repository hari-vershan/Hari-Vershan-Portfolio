"use client";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface ProductCardProps {
  slug: string;
  title: string;
  tagline: string;
  industry: string;
  description: string;
  index: number;
}

export function ProductCard({ slug, title, tagline, industry, description, index }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const reduced = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -12,
      y: (x - 0.5) * 12,
    });
    setGlowPos({ x: x * 100, y: y * 100 });
  }, [reduced]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div className="perspective-container flex-shrink-0">
      <motion.div
        ref={cardRef}
        className="w-[80vw] md:w-[45vw] lg:w-[35vw] h-[60vh] bg-surface rounded-sm border border-white/5 p-8 md:p-12 flex flex-col group relative overflow-hidden card-reflection"
        style={{
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          boxShadow: isHovered
            ? "0 20px 60px rgba(255,128,0,0.15), 0 0 30px rgba(255,128,0,0.08)"
            : "0 4px 20px rgba(0,0,0,0.3)",
          borderColor: isHovered ? "rgba(255,128,0,0.3)" : "rgba(255,255,255,0.05)",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        data-cursor="hover"
      >
        {/* Dynamic gradient glow following cursor */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,128,0,0.12) 0%, transparent 60%)`,
          }}
        />

        {/* Shimmer sweep on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          initial={{ x: "-100%", opacity: 0 }}
          animate={isHovered ? { x: "200%", opacity: 1 } : { x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
            width: "50%",
          }}
        />

        <div className="relative z-10">
          <span className="font-mono text-xs text-text-muted tracking-widest uppercase">{industry}</span>
          <h3 className="font-display text-2xl md:text-3xl text-text-primary mt-3 mb-4 group-hover:text-papaya transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-body text-base">{tagline}</p>
          <p className="text-text-muted text-sm mt-3 leading-relaxed">{description}</p>
        </div>
        <div className="flex-1" />
        <Link
          href={`/products/${slug}`}
          className="font-mono text-sm text-papaya-safe hover:text-papaya transition-colors inline-flex items-center gap-2 group/link relative z-10"
          data-cursor="hover"
        >
          View Case Study{" "}
          <motion.span
            aria-hidden="true"
            className="inline-block"
            animate={isHovered ? { x: [0, 6, 0] } : { x: 0 }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
          >
            &rarr;
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
