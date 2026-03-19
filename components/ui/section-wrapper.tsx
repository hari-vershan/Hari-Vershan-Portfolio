"use client";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative min-h-screen px-6 md:px-16 lg:px-24 py-20 ${className}`}>
      {children}
    </section>
  );
}
