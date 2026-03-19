import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-6">
      <h1 className="font-display text-6xl md:text-8xl text-text-primary tracking-wider mb-4">WRONG TURN</h1>
      <p className="text-text-muted font-mono text-sm mb-8">This sector doesn&apos;t exist on the circuit.</p>
      <Link href="/" className="font-mono text-sm text-papaya-safe border border-papaya/30 px-6 py-2 rounded-sm hover:bg-papaya/10 transition-colors" data-cursor="hover">
        BACK TO THE GRID
      </Link>
    </main>
  );
}
