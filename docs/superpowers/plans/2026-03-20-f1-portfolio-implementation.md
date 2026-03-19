# F1 Grand Prix Portfolio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an immersive, F1/McLaren-themed portfolio website for Hari Vershan — a Product Design Lead — with scroll-driven animations, sound, custom cursor, and a reverse-chronological storytelling narrative.

**Architecture:** Next.js App Router with a single-page scrolling experience on `/` (loader → hero → sections → contact) and a separate `/products` route. GSAP ScrollTrigger handles scroll-driven animations. Framer Motion handles component transitions. Tailwind CSS with custom design tokens for styling. Resend API for contact form email delivery.

**Tech Stack:** Next.js (latest stable), GSAP + ScrollTrigger, Framer Motion, Tailwind CSS, Geist + Orbitron fonts, Resend, Vercel deployment.

**Spec:** `docs/superpowers/specs/2026-03-20-f1-portfolio-design.md`

---

## File Structure

```
app/
├── layout.tsx                    # Root layout: fonts, metadata, global providers
├── page.tsx                      # Main single-page experience (composes all sections)
├── globals.css                   # Tailwind imports + custom design tokens + global styles
├── api/
│   └── contact/
│       └── route.ts              # POST handler for contact form → Resend
├── products/
│   ├── page.tsx                  # Product listing grid
│   └── [slug]/
│       └── page.tsx              # Individual product detail
├── not-found.tsx                 # Custom 404 ("Wrong Turn")
│
components/
├── loader/
│   └── formation-lap.tsx         # Full loader sequence (circuit lines → lights → text)
├── nav/
│   ├── telemetry-bar.tsx         # Fixed top nav with sector indicator + track map
│   ├── track-map.tsx             # SVG circuit with scroll progress dot
│   ├── full-screen-menu.tsx      # Overlay menu with sector links
│   └── sound-toggle.tsx          # Speaker icon toggle
├── hero/
│   ├── championship-standings.tsx # Hero section with standings board
│   ├── standings-row.tsx         # Individual stat row with counter animation
│   └── parallax-photo.tsx        # Mouse-movement parallax headshot
├── sections/
│   ├── current-lap.tsx           # S2: TechJays present role
│   ├── product-card.tsx          # Horizontal scroll product card
│   ├── horizontal-scroll.tsx     # Scroll-hijack horizontal container
│   ├── career-timeline.tsx       # S3: Vertical timeline
│   ├── timeline-entry.tsx        # Individual lap/career entry (expandable)
│   ├── the-machine.tsx           # S4: Skills & capabilities
│   ├── skill-category.tsx        # Individual skill group card
│   ├── the-team.tsx              # S5: Leadership section
│   ├── logo-strip.tsx            # Scrolling client logo strip
│   └── pit-stop.tsx              # S7: Contact section
├── contact/
│   └── contact-form.tsx          # Pit wall styled contact form
├── cursor/
│   └── custom-cursor.tsx         # Custom dot cursor with hover expansion
├── sound/
│   └── sound-provider.tsx        # Sound context + Web Audio API manager
├── ui/
│   ├── section-wrapper.tsx       # Reusable section container with scroll ID
│   ├── text-reveal.tsx           # Scroll-triggered text fade-in animation
│   ├── counter.tsx               # Number count-up animation
│   └── scroll-indicator.tsx      # Animated scroll-down chevron
│
lib/
├── constants.ts                  # Section data, standings data, timeline data, product data
├── use-scroll-progress.ts        # Hook: normalized scroll position (0-1)
├── use-reduced-motion.ts         # Hook: prefers-reduced-motion detection
├── use-section-observer.ts       # Hook: which section is in view (for nav)
├── use-mouse-position.ts         # Hook: normalized mouse position for parallax
│
public/
├── images/
│   ├── hari-headshot.jpg         # Professional photo
│   ├── team/                     # Team photos (enhanced)
│   └── products/                 # Product screenshots (placeholder)
├── sounds/
│   ├── engine-rev.mp3            # Loader sound
│   ├── ambient-hum.mp3           # Scroll ambient
│   └── whoosh.mp3                # Section transition
├── resume.pdf                    # Downloadable resume
└── og-image.png                  # Open Graph image (1200x630)
```

---

## Task 1: Project Scaffolding & Configuration

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `tsconfig.json`

- [ ] **Step 1: Create Next.js project**

```bash
cd "/Users/harivershan/Library/CloudStorage/GoogleDrive-hari.sr@techjays.com/My Drive/My Profile/Crazy Portfolio"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack
```

Select defaults. This scaffolds the project with App Router, Tailwind, and TypeScript.

- [ ] **Step 2: Install dependencies**

```bash
npm install gsap @gsap/react framer-motion resend
npm install -D @types/node
```

- [ ] **Step 3: Install fonts**

```bash
npm install geist
```

- [ ] **Step 4: Create directory structure**

```bash
mkdir -p components/{loader,nav,hero,sections,contact,cursor,sound,ui}
mkdir -p lib
mkdir -p public/{images/{team,products},sounds}
```

- [ ] **Step 5: Set up design tokens in `app/globals.css`**

Replace the default `globals.css` with Tailwind imports and custom CSS variables:

```css
@import "tailwindcss";

@theme {
  --color-bg: #0A0A0A;
  --color-surface: #141414;
  --color-papaya: #FF8000;
  --color-papaya-safe: #FFa033;
  --color-text-primary: #FFFFFF;
  --color-text-body: #E0E0E0;
  --color-text-muted: #888888;
  --color-red-light: #FF1801;
  --font-display: 'Orbitron', 'Rajdhani', sans-serif;
  --font-sans: 'Geist Sans', sans-serif;
  --font-mono: 'Geist Mono', monospace;
  --radius-sm: 4px;
}

* {
  cursor: none;
}

@media (pointer: coarse) {
  * {
    cursor: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

html {
  scroll-behavior: smooth;
  background-color: var(--color-bg);
  color: var(--color-text-body);
}

body {
  font-family: var(--font-sans);
  overflow-x: hidden;
}

::selection {
  background-color: var(--color-papaya);
  color: var(--color-bg);
}
```

- [ ] **Step 6: Configure `app/layout.tsx` with fonts and metadata**

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Hari Vershan — Product Design Lead | AI-Driven Design",
  description: "Portfolio of Hari Vershan, Product Design Lead with 9+ years of experience in enterprise SaaS, AI-driven products, and design leadership.",
  openGraph: {
    title: "Hari Vershan — Product Design Lead | AI-Driven Design",
    description: "Portfolio of Hari Vershan, Product Design Lead with 9+ years of experience in enterprise SaaS, AI-driven products, and design leadership.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

// Note: JSON-LD structured data will be added via Next.js metadata API in Task 15.
// Skip-to-content link added as first child of body for accessibility.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable}`}>
      <body>
        <a href="#standings" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-papaya focus:text-bg focus:px-4 focus:py-2 focus:rounded-sm">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 7: Create placeholder `app/page.tsx`**

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text-body">
      <h1 className="text-4xl font-bold text-text-primary p-8">Hari Vershan — Coming Soon</h1>
    </main>
  );
}
```

- [ ] **Step 8: Verify dev server runs**

```bash
npm run dev
```

Open `http://localhost:3000` — should show dark background with heading text. Verify fonts load (check Network tab for Geist and Orbitron).

- [ ] **Step 9: Commit**

```bash
git init
echo "node_modules/\n.next/\n.env*.local\n*.tsbuildinfo" > .gitignore
git add -A
git commit -m "chore: scaffold Next.js project with Tailwind, GSAP, fonts, and design tokens"
```

---

## Task 2: Utility Hooks & Shared Components

**Files:**
- Create: `lib/constants.ts`, `lib/use-scroll-progress.ts`, `lib/use-reduced-motion.ts`, `lib/use-section-observer.ts`, `lib/use-mouse-position.ts`, `components/ui/section-wrapper.tsx`, `components/ui/text-reveal.tsx`, `components/ui/counter.tsx`, `components/ui/scroll-indicator.tsx`

- [ ] **Step 1: Create `lib/constants.ts`** — all content data in one place

```ts
export const SECTIONS = [
  { id: "standings", label: "Sector 1: Standings", navLabel: "Standings", href: "#standings" },
  { id: "current-lap", label: "Sector 2: Current Lap", navLabel: "Current Lap", href: "#current-lap" },
  { id: "race-history", label: "Sector 3: Race History", navLabel: "Race History", href: "#race-history" },
  { id: "the-machine", label: "Sector 4: The Machine", navLabel: "The Machine", href: "#the-machine" },
  { id: "the-team", label: "Sector 5: The Team", navLabel: "The Team", href: "#the-team" },
  { id: "products", label: "Sector 6: Products", navLabel: "Products", href: "/products" },
  { id: "pit-stop", label: "Pit Stop: Contact", navLabel: "Contact", href: "#pit-stop" },
] as const;

// Sections that exist on the main page (for scroll observer — excludes Products which is a separate route)
export const SCROLL_SECTIONS = SECTIONS.filter((s) => s.id !== "products");

export const STANDINGS = [
  { position: "P1", metric: "Design Leadership", value: 9, suffix: "+ Years" },
  { position: "Fastest Lap", metric: "Operational Workflows", value: 12, suffix: "x Faster" },
  { position: "Team Principal", metric: "Design Team", value: 20, suffix: "-30 Members" },
  { position: "Podium", metric: "Conversion Improvement", value: 20, suffix: "%" },
  { position: "Pit Efficiency", metric: "Dev Time Reduction", value: 30, suffix: "%" },
] as const;

export const TIMELINE = [
  {
    year: "2025",
    company: "TechJays",
    role: "Product Design Lead",
    location: "India",
    highlights: [
      "Designed end-to-end AI-powered HVAC platform — 12x faster outputs",
      "Built AI-driven catalog browser with material matching",
      "Built end-to-end product system for leading ad agency",
      "Redesigned reseller CMS — 45% to 80% listing accuracy",
      "Leading 20-30 member cross-functional design team",
      "Built AI-driven design workflows using Figma-to-LLM + Claude Code",
    ],
  },
  {
    year: "2022",
    company: "Material+ (Srijan)",
    role: "Senior Product Designer",
    location: "India (Remote)",
    highlights: [
      "20% conversion improvement, 12% productivity gains",
      "Built scalable design systems — 30% dev time reduction",
      "Led UX research: personas, journey mapping, top task analysis",
      "Mentored junior and mid-level designers",
    ],
  },
  {
    year: "2021",
    company: "Srijan Technologies",
    role: "Product Designer",
    location: "India (Remote)",
    highlights: [
      "Responsive design, accessibility, A/B testing",
      "Agile product development across CMS platforms (Drupal, SharePoint)",
    ],
  },
  {
    year: "2019",
    company: "Freelance",
    role: "UX/UI Designer",
    location: "Coimbatore",
    highlights: [
      "Concept-to-launch product design for startups",
      "Digital experiences and marketing collaterals",
    ],
  },
  {
    year: "2017",
    company: "Ugam Solutions",
    role: "Associate Analyst",
    location: "Coimbatore",
    highlights: [
      "Statistical analysis and business intelligence reports",
      "Where the data-driven foundation was built",
    ],
  },
] as const;

export const PRODUCTS = [
  { slug: "ai-hvac-platform", title: "AI HVAC Estimation Platform", tagline: "12x faster than legacy AutoCAD workflows", industry: "Construction & Engineering" },
  { slug: "ad-agency-system", title: "Ad Agency Product System", tagline: "End-to-end campaign management", industry: "Advertising" },
  { slug: "enterprise-cms", title: "Enterprise CMS Optimisation", tagline: "45% to 80% product listing accuracy", industry: "E-Commerce" },
  { slug: "library-forge", title: "Library Forge", tagline: "AI-powered design system generation", industry: "Design Tools" },
  { slug: "recycling-crm", title: "Global Recycling Firm CRM", tagline: "4.2/5 customer satisfaction", industry: "Sustainability" },
  { slug: "ai-catalog-browser", title: "AI-Driven Catalog Browser", tagline: "Automated material matching", industry: "Construction & Engineering" },
] as const;

export const SKILLS = [
  {
    category: "Aero",
    label: "Strategy",
    items: ["Design Management", "Design Operations", "Design Governance", "Product Strategy", "Product Roadmap", "UX Strategy", "Cross-Functional Leadership"],
  },
  {
    category: "Power Unit",
    label: "Tools",
    items: ["Figma", "Miro", "Sketch", "Framer", "Adobe XD", "Photoshop", "Illustrator", "InDesign", "After Effects"],
  },
  {
    category: "Chassis",
    label: "Research",
    items: ["UX Research", "User Interviews", "Heuristic Evaluation", "UX Audits", "Data Analysis", "A/B Testing", "Usability Testing"],
  },
  {
    category: "Electronics",
    label: "AI & Dev",
    items: ["Claude Code", "LLM Toolchains", "MCP Integrations", "Figma-to-LLM Pipelines"],
  },
  {
    category: "Telemetry",
    label: "Enterprise",
    items: ["SharePoint", "Drupal", "Power BI", "Google Workspace"],
  },
] as const;

export const CERTIFICATIONS = [
  { name: "Anthropic Claude Code, AI-Assisted Development", year: "2025" },
  { name: "Design Thinking Practitioner (DTP)", year: "2025" },
  { name: "Enterprise Design Thinking, IBM", year: "2025" },
  { name: "Design-Led Strategy", year: "2024" },
] as const;
```

- [ ] **Step 2: Create `lib/use-reduced-motion.ts`**

```ts
"use client";
import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
```

- [ ] **Step 3: Create `lib/use-scroll-progress.ts`**

```ts
"use client";
import { useEffect, useState } from "react";

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return progress;
}
```

- [ ] **Step 4: Create `lib/use-section-observer.ts`**

```ts
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
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
}
```

- [ ] **Step 5: Create `lib/use-mouse-position.ts`**

```ts
"use client";
import { useEffect, useState } from "react";

interface MousePosition {
  x: number; // -1 to 1 (normalized from center)
  y: number;
}

export function useMousePosition(): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return pos;
}
```

- [ ] **Step 6: Create `components/ui/section-wrapper.tsx`**

```tsx
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
```

- [ ] **Step 7: Create `components/ui/text-reveal.tsx`**

```tsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({ children, className = "", delay = 0, as: Tag = "p" }: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduced ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </MotionTag>
  );
}
```

- [ ] **Step 8: Create `components/ui/counter.tsx`**

```tsx
"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function Counter({ target, suffix = "", className = "", duration = 2000 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduced) { setCount(target); return; }

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration, reduced]);

  return <span ref={ref} className={className}>{count}{suffix}</span>;
}
```

- [ ] **Step 9: Create `components/ui/scroll-indicator.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <span className="text-xs font-mono text-text-muted tracking-widest uppercase">Scroll</span>
      <motion.div
        className="w-5 h-8 rounded-full border border-text-muted flex items-start justify-center p-1"
        aria-hidden="true"
      >
        <motion.div
          className="w-1 h-2 rounded-full bg-papaya"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
```

- [ ] **Step 10: Verify dev server still runs, commit**

```bash
npm run dev
git add -A
git commit -m "feat: add utility hooks and shared UI components"
```

---

## Task 3: Custom Cursor

**Files:**
- Create: `components/cursor/custom-cursor.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create `components/cursor/custom-cursor.tsx`**

```tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const enter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']")) {
        setHovering(true);
      }
    };
    const leave = () => setHovering(false);
    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    document.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  if (isTouch || !visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-papaya"
        style={{ width: 8, height: 8 }}
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: hovering ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-papaya/40"
        style={{ width: 40, height: 40 }}
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hovering ? 1.5 : 1,
          opacity: hovering ? 1 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
```

- [ ] **Step 2: Add `CustomCursor` to `app/layout.tsx`**

Import and add `<CustomCursor />` inside `<body>` above `{children}`.

- [ ] **Step 3: Verify cursor in browser, commit**

```bash
git add -A
git commit -m "feat: add custom cursor with hover expansion"
```

---

## Task 4: Sound System

**Files:**
- Create: `components/sound/sound-provider.tsx`, `components/nav/sound-toggle.tsx`

- [ ] **Step 1: Create `components/sound/sound-provider.tsx`**

```tsx
"use client";
import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface SoundContextType {
  enabled: boolean;
  toggle: () => void;
  play: (name: "rev" | "whoosh" | "ambient") => void;
}

const SoundContext = createContext<SoundContextType>({
  enabled: false,
  toggle: () => {},
  play: () => {},
});

export function useSoundContext() { return useContext(SoundContext); }

const SOUND_FILES = {
  rev: "/sounds/engine-rev.mp3",
  whoosh: "/sounds/whoosh.mp3",
  ambient: "/sounds/ambient-hum.mp3",
} as const;

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<Record<string, AudioBuffer>>({});
  const reduced = useReducedMotion();

  useEffect(() => {
    // Auto-disable sound when reduced motion is preferred
    if (reduced) { setEnabled(false); return; }
    const stored = localStorage.getItem("sound-enabled");
    if (stored === "true") setEnabled(true);
  }, [reduced]);

  useEffect(() => {
    localStorage.setItem("sound-enabled", String(enabled));
  }, [enabled]);

  const toggle = useCallback(() => {
    setEnabled((prev) => !prev);
  }, []);

  const ensureContext = useCallback(async () => {
    if (audioCtxRef.current) return audioCtxRef.current;
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    // Preload sounds
    for (const [key, url] of Object.entries(SOUND_FILES)) {
      try {
        const res = await fetch(url);
        const data = await res.arrayBuffer();
        buffersRef.current[key] = await ctx.decodeAudioData(data);
      } catch {
        // Sound file not found — silently skip
      }
    }
    return ctx;
  }, []);

  const play = useCallback(async (name: keyof typeof SOUND_FILES) => {
    if (!enabled || reduced) return;
    const ctx = await ensureContext();
    const buffer = buffersRef.current[name];
    if (!buffer || !ctx) return;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  }, [enabled, reduced, ensureContext]);

  return (
    <SoundContext.Provider value={{ enabled, toggle, play }}>
      {children}
    </SoundContext.Provider>
  );
}
```

- [ ] **Step 2: Create `components/nav/sound-toggle.tsx`**

```tsx
"use client";
import { useSoundContext } from "@/components/sound/sound-provider";

export function SoundToggle() {
  const { enabled, toggle } = useSoundContext();

  return (
    <button
      onClick={toggle}
      aria-label={enabled ? "Mute sound" : "Enable sound"}
      className="text-text-muted hover:text-papaya transition-colors p-2"
      data-cursor="hover"
    >
      {enabled ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 010 14.14" /><path d="M15.54 8.46a5 5 0 010 7.07" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  );
}
```

- [ ] **Step 3: Wrap layout with `SoundProvider`, commit**

Add `<SoundProvider>` wrapper in `app/layout.tsx` around `{children}` + `<CustomCursor />`.

```bash
git add -A
git commit -m "feat: add sound system with Web Audio API and localStorage persistence"
```

---

## Task 5: Top Navigation — Telemetry Bar

**Files:**
- Create: `components/nav/telemetry-bar.tsx`, `components/nav/track-map.tsx`, `components/nav/full-screen-menu.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create `components/nav/track-map.tsx`**

An SVG of a simplified, abstract F1 circuit with a dot that moves along the path based on scroll progress.

```tsx
"use client";
import { useScrollProgress } from "@/lib/use-scroll-progress";

export function TrackMap() {
  const progress = useScrollProgress();

  // Abstract circuit path (custom, not a real-world track)
  const pathD = "M10,30 Q10,10 30,10 L60,10 Q80,10 80,25 Q80,40 65,45 Q50,50 50,35 Q50,20 65,15 L85,15 Q95,15 95,30 L95,50 Q95,65 80,65 L20,65 Q10,65 10,50 Z";

  return (
    <div className="hidden md:block w-24 h-10" aria-hidden="true">
      <svg viewBox="0 0 105 75" className="w-full h-full">
        <path d={pathD} fill="none" stroke="#333" strokeWidth="2" />
        <circle r="3" fill="#FF8000">
          <animateMotion dur="1s" fill="freeze" keyPoints={`${progress};${progress}`} keyTimes="0;1" calcMode="linear">
            <mpath href="#track-path" />
          </animateMotion>
        </circle>
        <path id="track-path" d={pathD} fill="none" stroke="none" />
      </svg>
    </div>
  );
}
```

Note: The animateMotion approach may need adjustment; an alternative is to use `getPointAtLength` in a `useEffect` with a ref to the SVG path. Implement whichever renders the moving dot correctly during visual testing.

- [ ] **Step 2: Create `components/nav/full-screen-menu.tsx`**

```tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS } from "@/lib/constants";
import { useEffect, useRef } from "react";

interface FullScreenMenuProps {
  open: boolean;
  onClose: () => void;
}

export function FullScreenMenu({ open, onClose }: FullScreenMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        // Focus trap: Tab cycles within menu
        if (e.key === "Tab" && menuRef.current) {
          const focusable = menuRef.current.querySelectorAll<HTMLElement>("a, button");
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      };
      window.addEventListener("keydown", handleKey);
      return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
    }
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-text-muted hover:text-papaya transition-colors p-2"
            aria-label="Close menu"
            autoFocus
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <nav className="flex flex-col gap-6">
            {SECTIONS.map((section, i) => (
              <motion.a
                key={section.id}
                href={section.href}
                onClick={onClose}
                className="text-3xl md:text-5xl font-display text-text-primary hover:text-papaya transition-colors"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                {section.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 3: Create `components/nav/telemetry-bar.tsx`**

```tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/constants";
import { useSectionObserver } from "@/lib/use-section-observer";
import { TrackMap } from "./track-map";
import { SoundToggle } from "./sound-toggle";
import { FullScreenMenu } from "./full-screen-menu";

export function TelemetryBar() {
  const activeSection = useSectionObserver();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLabel = SECTIONS.find((s) => s.id === activeSection)?.label ?? "";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 transition-colors duration-300 ${
          scrolled ? "bg-bg/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 5, duration: 0.6 }}
      >
        {/* Left: Logo */}
        <a href="#standings" className="font-display text-lg text-text-primary tracking-wider" aria-label="Back to top">
          HV
        </a>

        {/* Center: Sector label */}
        <span className="hidden md:block font-mono text-xs text-text-muted tracking-widest uppercase" aria-live="polite" aria-atomic="true">
          {currentLabel}
        </span>

        {/* Right: Track map, sound, menu */}
        <div className="flex items-center gap-4">
          <TrackMap />
          <SoundToggle />
          <button
            onClick={() => setMenuOpen(true)}
            className="text-text-muted hover:text-papaya transition-colors p-2"
            aria-label="Open navigation menu"
            data-cursor="hover"
          >
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="0" y1="2" x2="24" y2="2" /><line x1="0" y1="10" x2="24" y2="10" /><line x1="0" y1="18" x2="24" y2="18" />
            </svg>
          </button>
        </div>
      </motion.header>

      <FullScreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
```

- [ ] **Step 4: Add `TelemetryBar` to layout, commit**

Add `<TelemetryBar />` inside `<body>` in `app/layout.tsx`.

```bash
git add -A
git commit -m "feat: add telemetry navigation bar with track map, menu, and sound toggle"
```

---

## Task 6: Formation Lap Loader

**Files:**
- Create: `components/loader/formation-lap.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/loader/formation-lap.tsx`**

This is the most complex animation component. It orchestrates:
1. Circuit lines radiating in
2. Lines converging to start/finish line
3. Five red lights appearing one by one
4. Lights going out
5. "LIGHTS OUT AND AWAY WE GO" text animation
6. Morphing into "HARI VERSHAN"
7. Dissolve out

```tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSoundContext } from "@/components/sound/sound-provider";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface FormationLapProps {
  onComplete: () => void;
}

export function FormationLap({ onComplete }: FormationLapProps) {
  const [phase, setPhase] = useState<"lines" | "lights" | "lightsout" | "text" | "name" | "done">("lines");
  const { play } = useSoundContext();
  const reduced = useReducedMotion();
  const [skipped, setSkipped] = useState(false);

  const skip = useCallback(() => {
    setSkipped(true);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (reduced) { skip(); return; }

    const timers = [
      setTimeout(() => setPhase("lights"), 1200),
      setTimeout(() => setPhase("lightsout"), 2800),
      setTimeout(() => { setPhase("text"); play("rev"); }, 3200),
      setTimeout(() => setPhase("name"), 4200),
      setTimeout(() => { setPhase("done"); onComplete(); }, 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete, play, reduced, skip]);

  if (skipped) return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] bg-bg flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          {/* Skip button */}
          <button
            onClick={skip}
            className="absolute bottom-6 right-6 text-xs font-mono text-text-muted hover:text-papaya transition-colors z-10"
          >
            SKIP
          </button>

          {/* Phase: Circuit lines */}
          {(phase === "lines" || phase === "lights") && (
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-transparent via-papaya/30 to-transparent"
                  style={{
                    width: "150%",
                    transformOrigin: "center",
                    rotate: `${i * 30}deg`,
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 0.6, 0.3] }}
                  transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                />
              ))}
            </div>
          )}

          {/* Phase: Starting lights */}
          {(phase === "lights" || phase === "lightsout") && (
            <div className="flex gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: phase === "lightsout" ? 0 : 1,
                    scale: 1,
                    backgroundColor: phase === "lightsout" ? "#333" : "#FF1801",
                    boxShadow: phase === "lightsout" ? "none" : "0 0 20px #FF1801",
                  }}
                  transition={{
                    opacity: { duration: phase === "lightsout" ? 0.1 : 0.3, delay: phase === "lightsout" ? 0 : i * 0.3 },
                    scale: { duration: 0.3, delay: phase === "lightsout" ? 0 : i * 0.3 },
                  }}
                />
              ))}
            </div>
          )}

          {/* Phase: LIGHTS OUT text */}
          {phase === "text" && (
            <motion.h1
              className="font-display text-2xl md:text-5xl text-text-primary tracking-[0.3em] text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              LIGHTS OUT AND AWAY WE GO
            </motion.h1>
          )}

          {/* Phase: Name reveal */}
          {phase === "name" && (
            <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.h1
                className="font-display text-4xl md:text-7xl text-text-primary tracking-wider"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                HARI VERSHAN
              </motion.h1>
              <motion.div
                className="h-1 bg-papaya mx-auto mt-4"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Integrate loader into `app/page.tsx`**

Important: Content is always in the DOM for SEO — the loader overlays on top and is removed when done. This way server-rendered HTML includes all content.

```tsx
"use client";
import { useState } from "react";
import { FormationLap } from "@/components/loader/formation-lap";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-bg">
      {!loaded && <FormationLap onComplete={() => setLoaded(true)} />}
      {/* Content is always rendered in the DOM (SSR-friendly). Loader overlays on top via fixed positioning. */}
      <div className="text-text-primary p-8">
        <h1 className="text-4xl font-display">Sections coming next...</h1>
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Test loader in browser, commit**

Verify: circuit lines animate → 5 red lights appear → lights go out → text → name → dissolves. Skip button works.

```bash
git add -A
git commit -m "feat: add Formation Lap loader with starting lights sequence"
```

---

## Task 7: Hero — Championship Standings

**Files:**
- Create: `components/hero/championship-standings.tsx`, `components/hero/standings-row.tsx`, `components/hero/parallax-photo.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/hero/parallax-photo.tsx`**

```tsx
"use client";
import Image from "next/image";
import { useMousePosition } from "@/lib/use-mouse-position";
import { motion } from "framer-motion";

export function ParallaxPhoto() {
  const mouse = useMousePosition();

  return (
    <motion.div
      className="relative w-64 h-80 md:w-80 md:h-96 rounded-sm overflow-hidden"
      animate={{ x: mouse.x * 15, y: mouse.y * 10 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <Image
        src="/images/hari-headshot.jpg"
        alt="Hari Vershan — Product Design Lead"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `components/hero/standings-row.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";

interface StandingsRowProps {
  position: string;
  metric: string;
  value: number;
  suffix: string;
  index: number;
}

export function StandingsRow({ position, metric, value, suffix, index }: StandingsRowProps) {
  return (
    <motion.tr
      className="border-b border-white/5"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <td className="py-3 pr-4 font-display text-papaya text-sm md:text-base whitespace-nowrap">{position}</td>
      <td className="py-3 pr-4 text-text-muted text-sm md:text-base">{metric}</td>
      <td className="py-3 font-mono text-text-primary text-lg md:text-xl font-bold">
        <Counter target={value} suffix={suffix} />
      </td>
    </motion.tr>
  );
}
```

- [ ] **Step 3: Create `components/hero/championship-standings.tsx`**

```tsx
"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { StandingsRow } from "./standings-row";
import { ParallaxPhoto } from "./parallax-photo";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { STANDINGS } from "@/lib/constants";

export function ChampionshipStandings() {
  return (
    <SectionWrapper id="standings" className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
      {/* Abstract background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-papaya/5 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: "100%", animationDelay: `${i * 2}s` }}
          />
        ))}
      </div>

      {/* Left: Text + Standings */}
      <div className="flex-1 z-10">
        <TextReveal as="h1" className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-wider mb-2">
          HARI VERSHAN
        </TextReveal>
        <TextReveal as="p" className="font-mono text-sm md:text-base text-papaya-safe tracking-widest uppercase mb-12" delay={0.2}>
          Product Design Lead | AI-Driven Design | Enterprise UX
        </TextReveal>

        <table className="w-full max-w-lg" role="table" aria-label="Career championship standings">
          <thead className="sr-only">
            <tr><th>Position</th><th>Metric</th><th>Value</th></tr>
          </thead>
          <tbody>
            {STANDINGS.map((row, i) => (
              <StandingsRow key={row.position} {...row} index={i} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Right: Photo */}
      <div className="flex-shrink-0 z-10">
        <ParallaxPhoto />
      </div>

      <ScrollIndicator />
    </SectionWrapper>
  );
}
```

- [ ] **Step 4: Add hero to `app/page.tsx`, verify in browser, commit**

Replace the placeholder content with `<ChampionshipStandings />` (shown when `loaded` is true).

```bash
git add -A
git commit -m "feat: add Championship Standings hero section with parallax photo and counter animations"
```

---

## Task 8: Current Lap Section (S2) with Horizontal Scroll

**Files:**
- Create: `components/sections/current-lap.tsx`, `components/sections/product-card.tsx`, `components/sections/horizontal-scroll.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/product-card.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductCardProps {
  slug: string;
  title: string;
  tagline: string;
  industry: string;
  index: number;
}

export function ProductCard({ slug, title, tagline, industry, index }: ProductCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] h-[60vh] bg-surface rounded-sm border border-white/5 p-8 md:p-12 flex flex-col justify-between group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div>
        <span className="font-mono text-xs text-text-muted tracking-widest uppercase">{industry}</span>
        <h3 className="font-display text-2xl md:text-3xl text-text-primary mt-3 mb-4 group-hover:text-papaya transition-colors">
          {title}
        </h3>
        <p className="text-text-body text-base">{tagline}</p>
      </div>

      {/* Placeholder for product screenshot */}
      <div className="flex-1 my-6 bg-white/5 rounded-sm flex items-center justify-center border border-white/5">
        <span className="text-text-muted font-mono text-xs">Screenshot coming soon</span>
      </div>

      <Link
        href={`/products/${slug}`}
        className="font-mono text-sm text-papaya-safe hover:text-papaya transition-colors inline-flex items-center gap-2"
        data-cursor="hover"
      >
        View Case Study <span aria-hidden="true">&rarr;</span>
      </Link>
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `components/sections/horizontal-scroll.tsx`**

Implements scroll-hijack: vertical scroll drives horizontal movement within the container.

```tsx
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
```

- [ ] **Step 3: Create `components/sections/current-lap.tsx`**

```tsx
"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { HorizontalScroll } from "./horizontal-scroll";
import { ProductCard } from "./product-card";
import { PRODUCTS } from "@/lib/constants";

export function CurrentLap() {
  return (
    <div id="current-lap">
      <SectionWrapper id="current-lap-intro" className="flex flex-col justify-center">
        <TextReveal as="span" className="font-mono text-xs text-papaya-safe tracking-widest uppercase mb-4">
          TechJays | 2025 — Present
        </TextReveal>
        <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-6">
          THE CURRENT LAP
        </TextReveal>
        <TextReveal as="p" className="text-text-body max-w-2xl text-lg" delay={0.2}>
          Product Design Lead — leading a 20-30 member cross-functional design team across multiple enterprise engagements, partnering with product and engineering leadership to deliver AI-powered platforms.
        </TextReveal>
      </SectionWrapper>

      <HorizontalScroll>
        {PRODUCTS.slice(0, 4).map((product, i) => (
          <ProductCard key={product.slug} {...product} index={i} />
        ))}
      </HorizontalScroll>
    </div>
  );
}
```

- [ ] **Step 4: Add to `app/page.tsx`, verify horizontal scroll, commit**

```bash
git add -A
git commit -m "feat: add Current Lap section with scroll-hijack horizontal product cards"
```

---

## Task 9: Career Timeline (S3)

**Files:**
- Create: `components/sections/career-timeline.tsx`, `components/sections/timeline-entry.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/timeline-entry.tsx`**

```tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineEntryProps {
  year: string;
  company: string;
  role: string;
  location: string;
  highlights: readonly string[];
  index: number;
}

export function TimelineEntry({ year, company, role, location, highlights, index }: TimelineEntryProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 border-l border-white/10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-papaya border-2 border-bg" />

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-left w-full group"
        aria-expanded={expanded}
        data-cursor="hover"
      >
        <span className="font-mono text-xs text-papaya-safe tracking-widest">LAP {year}</span>
        <h3 className="font-display text-xl md:text-2xl text-text-primary mt-1 group-hover:text-papaya transition-colors">
          {company}
        </h3>
        <p className="text-text-muted text-sm">{role} &middot; {location}</p>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            className="mt-4 space-y-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {highlights.map((h, i) => (
              <li key={i} className="text-text-body text-sm pl-4 border-l border-papaya/20">
                {h}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `components/sections/career-timeline.tsx`**

```tsx
"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { TimelineEntry } from "./timeline-entry";
import { TIMELINE } from "@/lib/constants";

export function CareerTimeline() {
  return (
    <SectionWrapper id="race-history" className="flex flex-col justify-center">
      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
        THE RACE SO FAR
      </TextReveal>
      <TextReveal as="p" className="text-text-muted font-mono text-sm mb-16" delay={0.1}>
        Every lap built towards the championship position
      </TextReveal>

      <div className="max-w-2xl mx-auto">
        {TIMELINE.map((entry, i) => (
          <TimelineEntry key={entry.year} {...entry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 3: Add to `app/page.tsx`, verify, commit**

```bash
git add -A
git commit -m "feat: add career timeline section with expandable entries"
```

---

## Task 10: The Machine — Skills (S4)

**Files:**
- Create: `components/sections/the-machine.tsx`, `components/sections/skill-category.tsx`, `components/sections/logo-strip.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/skill-category.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  category: string;
  label: string;
  items: readonly string[];
  index: number;
}

export function SkillCategory({ category, label, items, index }: SkillCategoryProps) {
  return (
    <motion.div
      className="bg-surface border border-white/5 rounded-sm p-6 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-display text-papaya text-sm tracking-wider">{category}</span>
        <span className="text-text-muted text-xs font-mono">({label})</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="text-xs font-mono text-text-body bg-white/5 px-3 py-1.5 rounded-sm border border-white/5">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `components/sections/logo-strip.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";

const LOGOS = ["TechJays", "Material+", "Srijan", "Ugam"];

export function LogoStrip() {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-16 py-8 opacity-40">
      {LOGOS.map((logo, i) => (
        <motion.span
          key={logo}
          className="font-mono text-sm text-text-muted tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          {logo}
        </motion.span>
      ))}
    </div>
  );
}
```

Note: Replace text with actual logo images when available.

- [ ] **Step 3: Create `components/sections/the-machine.tsx`**

```tsx
"use client";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { SkillCategory } from "./skill-category";
import { LogoStrip } from "./logo-strip";
import { SKILLS, CERTIFICATIONS } from "@/lib/constants";

export function TheMachine() {
  return (
    <SectionWrapper id="the-machine">
      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
        THE MACHINE
      </TextReveal>
      <TextReveal as="p" className="text-text-muted font-mono text-sm mb-12" delay={0.1}>
        Technical specifications
      </TextReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {SKILLS.map((skill, i) => (
          <SkillCategory key={skill.category} {...skill} index={i} />
        ))}
      </div>

      {/* Certifications as "Race Licenses" */}
      <div className="mb-12">
        <h3 className="font-display text-lg text-papaya-safe tracking-wider mb-6">RACE LICENSES</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex items-center gap-3 text-sm">
              <span className="font-mono text-papaya text-xs">{cert.year}</span>
              <span className="text-text-body">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>

      <LogoStrip />
    </SectionWrapper>
  );
}
```

- [ ] **Step 4: Add to `app/page.tsx`, verify, commit**

```bash
git add -A
git commit -m "feat: add The Machine skills section with certifications and logo strip"
```

---

## Task 11: The Team — Leadership (S5)

**Files:**
- Create: `components/sections/the-team.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/the-team.tsx`**

```tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { Counter } from "@/components/ui/counter";

const TEAM_IMAGES = [
  { src: "/images/team/build-ai-event.jpg", alt: "TechJays Build AI team event" },
  { src: "/images/team/cricket-team.jpg", alt: "TechJays Game of Codes cricket team" },
  { src: "/images/team/design-review.jpg", alt: "Design team review session" },
];

export function TheTeam() {
  return (
    <SectionWrapper id="the-team">
      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
        THE TEAM
      </TextReveal>

      <TextReveal as="p" className="text-text-body text-lg max-w-2xl mb-12" delay={0.1}>
        Great products are built by great teams. I invest in building design cultures where craft meets strategy — mentoring designers, establishing governance, and driving cross-functional alignment.
      </TextReveal>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-8 mb-16 max-w-xl">
        <div>
          <div className="font-mono text-3xl md:text-4xl text-text-primary font-bold">
            <Counter target={20} suffix="-30" />
          </div>
          <p className="text-text-muted text-xs font-mono mt-1">Team Members</p>
        </div>
        <div>
          <div className="font-mono text-3xl md:text-4xl text-text-primary font-bold">
            <Counter target={4} suffix=".2/5" />
          </div>
          <p className="text-text-muted text-xs font-mono mt-1">CSAT Score</p>
        </div>
        <div>
          <div className="font-mono text-3xl md:text-4xl text-text-primary font-bold">
            <Counter target={9} suffix="+" />
          </div>
          <p className="text-text-muted text-xs font-mono mt-1">Years Leading</p>
        </div>
      </div>

      {/* Team photo grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TEAM_IMAGES.map((img, i) => (
          <motion.div
            key={img.src}
            className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Leadership philosophy points */}
      <div className="mt-12 space-y-3 max-w-xl">
        {[
          "Design operations and governance established across product verticals",
          "Hiring, onboarding, and career development for growing design teams",
          "Structured feedback, portfolio reviews, and mentorship culture",
        ].map((point, i) => (
          <TextReveal key={i} as="p" className="text-text-muted text-sm border-l border-papaya/20 pl-4" delay={i * 0.1}>
            {point}
          </TextReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Copy provided photos to `public/images/`**

Copy Hari's headshot to `/public/images/hari-headshot.jpg`. Copy team photos to `/public/images/team/`. Use placeholder names matching the code above. If the actual enhanced images aren't ready yet, create placeholder images.

- [ ] **Step 3: Add to `app/page.tsx`, verify, commit**

```bash
git add -A
git commit -m "feat: add The Team leadership section with metrics and photo grid"
```

---

## Task 12: Pit Stop — Contact Section (S7)

**Files:**
- Create: `components/sections/pit-stop.tsx`, `components/contact/contact-form.tsx`, `app/api/contact/route.ts`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `app/api/contact/route.ts`**

```ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "sr.harivershan@gmail.com",
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
```

- [ ] **Step 2: Create `components/contact/contact-form.tsx`**

```tsx
"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs font-mono text-text-muted tracking-widest uppercase mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-text-primary focus:border-papaya focus:outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-mono text-text-muted tracking-widest uppercase mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-text-primary focus:border-papaya focus:outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-mono text-text-muted tracking-widest uppercase mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-text-primary focus:border-papaya focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="w-full bg-papaya text-bg font-display tracking-wider py-3 rounded-sm hover:bg-papaya/90 disabled:opacity-50 transition-all"
        data-cursor="hover"
      >
        {status === "sending" ? "TRANSMITTING..." : status === "sent" ? "TRANSMISSION SENT" : "SEND TRANSMISSION"}
      </button>

      {status === "error" && (
        <p className="text-red-light text-sm font-mono" role="alert">Failed to send. Please try again or email directly.</p>
      )}
      {status === "sent" && (
        <motion.p
          className="text-green-400 text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          role="status"
        >
          Message received. I&apos;ll be in touch.
        </motion.p>
      )}
    </form>
  );
}
```

- [ ] **Step 3: Create `components/sections/pit-stop.tsx`**

```tsx
"use client";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { ContactForm } from "@/components/contact/contact-form";

export function PitStop() {
  return (
    <SectionWrapper id="pit-stop" className="flex flex-col">
      <TextReveal as="h2" className="font-display text-4xl md:text-6xl text-text-primary tracking-wider mb-4">
        THE PIT STOP
      </TextReveal>
      <TextReveal as="p" className="text-text-muted font-mono text-sm mb-16" delay={0.1}>
        Every great race needs a great team — let&apos;s connect
      </TextReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Personal */}
        <div>
          <div className="relative w-48 h-48 rounded-sm overflow-hidden mb-8">
            <Image src="/images/hari-headshot.jpg" alt="Hari Vershan" fill className="object-cover" />
          </div>
          <p className="text-text-body text-lg mb-8 max-w-md">
            I believe in design that drives real impact — whether it&apos;s making workflows 12x faster or building teams that ship with confidence. If you&apos;re looking for a design leader who blends AI-driven thinking with human-centered craft, let&apos;s talk.
          </p>
          <div className="space-y-3 text-sm">
            <a href="mailto:sr.harivershan@gmail.com" className="flex items-center gap-3 text-text-body hover:text-papaya transition-colors" data-cursor="hover">
              <span className="font-mono text-papaya-safe">EMAIL</span> sr.harivershan@gmail.com
            </a>
            <a href="tel:+917358871333" className="flex items-center gap-3 text-text-body hover:text-papaya transition-colors" data-cursor="hover">
              <span className="font-mono text-papaya-safe">PHONE</span> +91 73588 71333
            </a>
            <a href="https://linkedin.com/in/hari-vershan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-body hover:text-papaya transition-colors" data-cursor="hover">
              <span className="font-mono text-papaya-safe">LINKEDIN</span> linkedin.com/in/hari-vershan
            </a>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-8 font-mono text-sm text-papaya-safe border border-papaya/30 px-6 py-2 rounded-sm hover:bg-papaya/10 transition-colors"
            data-cursor="hover"
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right: Contact form */}
        <div>
          <h3 className="font-display text-lg text-text-primary tracking-wider mb-6">PIT WALL TRANSMISSION</h3>
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-text-muted">&copy; {new Date().getFullYear()} Hari Vershan. Built with Claude Code.</span>
        <span className="font-mono text-xs text-text-muted">Designed & Engineered with AI</span>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 4: Add to `app/page.tsx`, verify, commit**

```bash
git add -A
git commit -m "feat: add Pit Stop contact section with Resend email form"
```

---

## Task 13: Compose Main Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Assemble all sections in `app/page.tsx`**

```tsx
"use client";
import { useState } from "react";
import { FormationLap } from "@/components/loader/formation-lap";
import { ChampionshipStandings } from "@/components/hero/championship-standings";
import { CurrentLap } from "@/components/sections/current-lap";
import { CareerTimeline } from "@/components/sections/career-timeline";
import { TheMachine } from "@/components/sections/the-machine";
import { TheTeam } from "@/components/sections/the-team";
import { PitStop } from "@/components/sections/pit-stop";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="bg-bg">
      {/* Loader overlays on top via fixed positioning — content always in DOM for SEO */}
      {!loaded && <FormationLap onComplete={() => setLoaded(true)} />}
      <ChampionshipStandings />
      <CurrentLap />
      <CareerTimeline />
      <TheMachine />
      <TheTeam />
      <PitStop />
    </main>
  );
}
```

- [ ] **Step 2: Full browser walkthrough**

Verify the complete flow: loader → hero → scroll through all sections → contact form. Check:
- Animations trigger correctly
- Horizontal scroll works
- Timeline entries expand
- Custom cursor behaves properly
- Nav updates sector name on scroll
- Menu overlay opens/closes
- Reduced motion fallbacks work (test with browser setting)

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: compose full single-page experience with all sections"
```

---

## Task 14: Products Pages

**Files:**
- Create: `app/products/page.tsx`, `app/products/[slug]/page.tsx`

- [ ] **Step 1: Create `app/products/page.tsx`**

```tsx
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
```

- [ ] **Step 2: Create `app/products/[slug]/page.tsx`**

```tsx
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

      {/* Screenshot placeholder */}
      <div className="aspect-video bg-surface border border-white/5 rounded-sm flex items-center justify-center mb-16">
        <span className="text-text-muted font-mono text-sm">Product screenshots coming soon</span>
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Create `app/not-found.tsx`**

```tsx
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
```

- [ ] **Step 4: Verify products pages and 404, commit**

```bash
git add -A
git commit -m "feat: add products listing, product detail, and custom 404 pages"
```

---

## Task 15: SEO, Accessibility & Final Polish

**Files:**
- Modify: `app/layout.tsx`
- Create: `app/robots.ts`, `app/sitemap.ts`

Note: Structured data (JSON-LD) and skip-to-content link were already added to `app/layout.tsx` in Task 1.

- [ ] **Step 1: Add canonical URL to metadata in `app/layout.tsx`**

Add to the existing `metadata` export:

```ts
alternates: {
  canonical: "https://harivershan.com",
},
```

Update the URL once the actual domain is configured.

- [ ] **Step 2: Create `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://harivershan.com/sitemap.xml",
  };
}
```

- [ ] **Step 3: Create `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://harivershan.com";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...PRODUCTS.map((p) => ({
      url: `${baseUrl}/products/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
```

- [ ] **Step 4: Copy resume PDF to `public/resume.pdf`**

Copy Hari's resume PDF to `public/resume.pdf` for the download link.

- [ ] **Step 4: Create placeholder sound files**

Create empty/silent placeholder MP3 files in `public/sounds/` (engine-rev.mp3, ambient-hum.mp3, whoosh.mp3). These will be replaced with real royalty-free audio later. For now, the sound system won't crash if they're missing (it silently catches fetch errors).

- [ ] **Step 5: Final browser verification**

Full walkthrough checklist:
- [ ] Loader plays and skips correctly
- [ ] Hero section renders with counter animations
- [ ] Horizontal scroll section works on desktop and mobile
- [ ] Timeline entries expand/collapse
- [ ] Skills section renders all categories
- [ ] Team section shows photos (or gracefully handles missing images)
- [ ] Contact form submits (test with RESEND_API_KEY in .env.local)
- [ ] Products page lists all products
- [ ] Product detail pages render
- [ ] 404 page shows for invalid routes
- [ ] Custom cursor works (desktop only)
- [ ] Sound toggle persists preference
- [ ] Top nav updates sector name on scroll
- [ ] Full-screen menu opens/closes, keyboard accessible
- [ ] Reduced motion: verify all animations are disabled
- [ ] Mobile: verify layout, no horizontal overflow, touch interactions

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add structured data, skip link, and final polish"
```

---

## Task 16: Create `.env.local` Template & README

**Files:**
- Create: `.env.example`

- [ ] **Step 1: Create `.env.example`**

```
# Contact form email delivery (https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxx
```

- [ ] **Step 2: Ensure `.env*.local` is in `.gitignore`**

Verify the `.gitignore` includes `.env*.local`.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: add environment variable template"
```

---

## Execution Notes

- **Images:** Copy Hari's headshot and team photos into `public/images/` before running Task 7+. If photos aren't ready, the site will render gracefully with broken-image fallbacks.
- **Sounds:** The sound system silently handles missing audio files. Replace placeholder files with real F1 ambient sounds when available.
- **Resend:** Create a free Resend account at resend.com, get an API key, and add to `.env.local` for the contact form to work.
- **Product content:** Case study text (challenge, approach, impact) can be filled in later by editing `lib/constants.ts` and the product detail pages.
- **Gemini image processing:** Enhance team meeting screenshots into polished composites as a one-off manual task. Save outputs to `public/images/team/`.
