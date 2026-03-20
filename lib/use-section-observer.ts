"use client";
import { useEffect, useState } from "react";
import { SCROLL_SECTIONS } from "./constants";

export function useSectionObserver(): string {
  const [activeSection, setActiveSection] = useState(SCROLL_SECTIONS[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SCROLL_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.15, rootMargin: "-15% 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
}
