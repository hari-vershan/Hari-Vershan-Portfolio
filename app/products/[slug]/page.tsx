import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/constants";
import type { Metadata } from "next";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: `${product.title} — Hari Vershan`, description: product.tagline };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-bg px-6 md:px-16 lg:px-24 py-24">
      <Link href="/products" className="font-mono text-sm text-papaya-safe hover:text-papaya transition-colors mb-8 inline-block" data-cursor="hover">
        &larr; All Products
      </Link>

      <span className="block font-mono text-xs text-text-muted tracking-widest uppercase mt-8">{product.industry}</span>
      <h1 className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mt-2 mb-4">{product.title}</h1>
      <p className="text-text-body text-xl mb-16">{product.tagline}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div>
          <h2 className="font-display text-papaya-safe tracking-wider mb-4">THE CHALLENGE</h2>
          <p className="text-text-body text-sm">Case study content to be added.</p>
        </div>
        <div>
          <h2 className="font-display text-papaya-safe tracking-wider mb-4">THE APPROACH</h2>
          <p className="text-text-body text-sm">Case study content to be added.</p>
        </div>
        <div>
          <h2 className="font-display text-papaya-safe tracking-wider mb-4">THE IMPACT</h2>
          <p className="text-text-body text-sm">Case study content to be added.</p>
        </div>
      </div>

      <div className="aspect-video bg-surface border border-white/5 rounded-sm flex items-center justify-center mb-16">
        <span className="text-text-muted font-mono text-sm">Product screenshots coming soon</span>
      </div>
    </main>
  );
}
