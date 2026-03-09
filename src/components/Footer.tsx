import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 relative z-10" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-display font-bold text-lg tracking-tight" style={{ color: "var(--text-primary)" }}>
              HV<span className="text-accent-blue">.</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {["Leadership", "Work", "About", "Contact"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-xs" style={{ color: "var(--text-muted)" }}>{item}</Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/hari-vershan" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]" style={{ color: "var(--text-muted)" }} aria-label="GitHub">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/hari-vershan/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]" style={{ color: "var(--text-muted)" }} aria-label="LinkedIn">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm" style={{ color: "var(--text-dim)" }}>&copy; 2026 Hari Vershan S R</p>
            <p className="font-mono text-[11px] mt-1" style={{ color: "var(--text-dim)" }}>Crafted with AI-assisted workflows</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
