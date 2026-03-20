import Link from "next/link";
import { CURRENT_PROJECTS, PAST_CASE_STUDIES } from "@/lib/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Circuits — Hari Vershan",
  description: "Every race tells a story — explore the full grid of case studies and product design work by Hari Vershan.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-bg px-6 md:px-16 lg:px-24 py-24">
      <Link
        href="/"
        className="inline-block font-mono text-sm text-papaya-safe hover:text-papaya transition-colors mb-12"
        data-cursor="hover"
      >
        &larr; Back to race
      </Link>

      <h1 className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
        ALL CIRCUITS
      </h1>
      <p className="text-text-muted font-mono text-sm mb-20">
        Every race tells a story &mdash; here&apos;s the full grid
      </p>

      {/* ─── CURRENT CIRCUIT ──────────────────────────────────── */}
      <section className="mb-24">
        <h2 className="font-mono text-xs text-papaya-safe tracking-[0.2em] uppercase mb-8">
          Current Circuit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENT_PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="bg-white/[0.03] border border-white/5 rounded-sm p-8 flex flex-col"
            >
              <Link
                href={`/products/${project.slug}`}
                className="group flex-1"
                data-cursor="hover"
              >
                <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
                  {project.industry}
                </span>
                <h3 className="font-display text-xl text-text-primary mt-2 mb-3 group-hover:text-papaya transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-body text-sm">{project.tagline}</p>
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 font-mono text-xs text-papaya-safe hover:text-papaya transition-colors"
                  data-cursor="hover"
                >
                  Visit Live App &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── PAST CIRCUITS ────────────────────────────────────── */}
      <section>
        <h2 className="font-mono text-xs text-papaya-safe tracking-[0.2em] uppercase mb-8">
          Past Circuits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAST_CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/products/${study.slug}`}
              className="bg-white/[0.03] border border-white/5 rounded-sm p-8 group hover:border-papaya/30 transition-colors"
              data-cursor="hover"
            >
              <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
                {study.industry}
              </span>
              <h3 className="font-display text-xl text-text-primary mt-2 mb-3 group-hover:text-papaya transition-colors">
                {study.title}
              </h3>
              <p className="text-text-body text-sm">{study.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
