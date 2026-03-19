"use client";
import { useRef, useEffect, ReactNode } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !containerRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth - window.innerWidth;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${totalWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      animation: gsap.to(track, { x: -totalWidth, ease: "none" }),
    });

    return () => {
      trigger.kill();
    };
  }, [reduced]);

  if (reduced) {
    return <div className="flex flex-col gap-6 px-6">{children}</div>;
  }

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div ref={trackRef} className="flex gap-6 px-6 md:px-16 items-center min-h-screen">
        {children}
      </div>
    </div>
  );
}
