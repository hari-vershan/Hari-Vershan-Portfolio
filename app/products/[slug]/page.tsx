import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies";
import type { Metadata } from "next";

export function generateStaticParams() {
  return ALL_CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Hari Vershan`,
    description: study.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const currentIndex = ALL_CASE_STUDIES.findIndex((cs) => cs.slug === slug);
  const prev = currentIndex > 0 ? ALL_CASE_STUDIES[currentIndex - 1] : null;
  const next =
    currentIndex < ALL_CASE_STUDIES.length - 1
      ? ALL_CASE_STUDIES[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-bg px-6 md:px-16 lg:px-24 py-24">
      {/* ─── Navigation ───────────────────────────────────────── */}
      <div className="flex items-center gap-6 mb-12">
        <Link
          href="/products"
          className="font-mono text-sm text-papaya-safe hover:text-papaya transition-colors"
          data-cursor="hover"
        >
          &larr; All Circuits
        </Link>
        <Link
          href="/"
          className="font-mono text-sm text-text-muted hover:text-text-primary transition-colors"
          data-cursor="hover"
        >
          &larr; Back to race
        </Link>
      </div>

      {/* ─── Header ───────────────────────────────────────────── */}
      <span className="block font-mono text-xs text-text-muted tracking-widest uppercase">
        {study.industry}
      </span>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-text-primary tracking-wider mt-2 mb-4">
        {study.title}
      </h1>
      <p className="text-text-body text-xl md:text-2xl mb-6 max-w-3xl">
        {study.tagline}
      </p>
      <p className="text-text-body text-base mb-12 max-w-3xl leading-relaxed">
        {study.description}
      </p>

      {/* ─── Metadata Row ─────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { label: "Domain", value: study.domain },
          { label: "Role", value: study.role },
          { label: "Scope", value: study.scope },
        ].map((item) => (
          <div key={item.label}>
            <span className="font-mono text-xs text-papaya-safe tracking-widest uppercase">
              {item.label}
            </span>
            <p className="text-text-body text-sm mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      {/* ─── Live URL ─────────────────────────────────────────── */}
      {study.liveUrl && (
        <div className="mb-20">
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/[0.03] border border-papaya/30 rounded-sm px-6 py-3 font-mono text-sm text-papaya-safe hover:bg-papaya/10 transition-colors"
            data-cursor="hover"
          >
            Visit Live Product &rarr;
          </a>
        </div>
      )}

      {/* ─── THE CHALLENGE ────────────────────────────────────── */}
      <section className="mb-20">
        <h2 className="font-display text-2xl text-papaya-safe tracking-wider mb-6">
          THE CHALLENGE
        </h2>
        <p className="text-text-body text-base leading-relaxed max-w-3xl mb-8">
          {study.challenge}
        </p>
        {study.challengeSections && study.challengeSections.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {study.challengeSections.map((section) => (
              <div
                key={section.title}
                className="bg-white/[0.03] border border-white/5 rounded-sm p-6"
              >
                <h3 className="font-display text-sm text-text-primary tracking-wider mb-2">
                  {section.title}
                </h3>
                <p className="text-text-body text-sm leading-relaxed">
                  {section.detail}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ─── WHY IT MATTERED ──────────────────────────────────── */}
      <section className="mb-20">
        <h2 className="font-display text-2xl text-papaya-safe tracking-wider mb-6">
          WHY IT MATTERED
        </h2>
        <p className="text-text-body text-base leading-relaxed max-w-3xl">
          {study.whyItMattered}
        </p>
      </section>

      {/* ─── THE APPROACH ─────────────────────────────────────── */}
      <section className="mb-20">
        <h2 className="font-display text-2xl text-papaya-safe tracking-wider mb-10">
          THE APPROACH
        </h2>
        <div className="space-y-10 max-w-3xl">
          {study.approach.map((step, i) => (
            <div key={step.title} className="flex gap-6">
              <span className="font-mono text-2xl text-papaya-safe shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg text-text-primary tracking-wider mb-2">
                  {step.title}
                </h3>
                <p className="text-text-body text-sm leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── THE OUTCOMES ─────────────────────────────────────── */}
      <section className="mb-20">
        <h2 className="font-display text-2xl text-papaya-safe tracking-wider mb-10">
          THE OUTCOMES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {study.outcomes.map((outcome) => (
            <div
              key={outcome.metric}
              className="bg-white/[0.03] border border-white/5 rounded-sm p-6"
            >
              <span className="block font-display text-2xl text-text-primary mb-2">
                {outcome.metric}
              </span>
              <p className="text-text-body text-sm">{outcome.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Prev / Next Navigation ───────────────────────────── */}
      <div className="border-t border-white/5 pt-12 flex items-center justify-between">
        {prev ? (
          <Link
            href={`/products/${prev.slug}`}
            className="group"
            data-cursor="hover"
          >
            <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
              Previous Circuit
            </span>
            <span className="block font-display text-lg text-text-primary group-hover:text-papaya transition-colors mt-1">
              &larr; {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/products/${next.slug}`}
            className="group text-right"
            data-cursor="hover"
          >
            <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
              Next Circuit
            </span>
            <span className="block font-display text-lg text-text-primary group-hover:text-papaya transition-colors mt-1">
              {next.title} &rarr;
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}
