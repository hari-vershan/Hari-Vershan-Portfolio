import Link from "next/link";
import { PRODUCTS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Hari Vershan",
  description: "Case studies and product design work by Hari Vershan.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-bg px-6 md:px-16 lg:px-24 py-24">
      <h1 className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">PRODUCTS</h1>
      <p className="text-text-muted font-mono text-sm mb-16">Case studies from the grid</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="bg-surface border border-white/5 rounded-sm p-8 group hover:border-papaya/30 transition-colors"
            data-cursor="hover"
          >
            <span className="font-mono text-xs text-text-muted tracking-widest uppercase">{product.industry}</span>
            <h2 className="font-display text-xl text-text-primary mt-2 mb-3 group-hover:text-papaya transition-colors">
              {product.title}
            </h2>
            <p className="text-text-body text-sm">{product.tagline}</p>
            <div className="mt-6 aspect-video bg-white/5 rounded-sm flex items-center justify-center border border-white/5">
              <span className="text-text-muted font-mono text-xs">Screenshot coming soon</span>
            </div>
          </Link>
        ))}
      </div>

      <Link href="/" className="inline-block mt-16 font-mono text-sm text-papaya-safe hover:text-papaya transition-colors" data-cursor="hover">
        &larr; Back to race
      </Link>
    </main>
  );
}
