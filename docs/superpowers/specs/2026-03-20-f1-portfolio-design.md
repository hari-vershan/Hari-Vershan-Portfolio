# Hari Vershan — F1 Grand Prix Portfolio Website

## Overview

An immersive, interactive portfolio website for Hari Vershan (Product Design Lead, 9+ years) themed around the McLaren F1 Grand Prix experience. The site tells Hari's career story as a race — starting at the Championship Standings (present-day achievements), then scrolling back through time like a flashback to reveal the journey that built him. The experience ends at "The Pit Stop" — a warm, personal contact section.

**Core metaphor:** The Grand Prix Circuit — the visitor experiences the career as a reverse-chronological F1 race.

**Tech stack:** Next.js (latest stable, App Router), GSAP/Framer Motion for animations, Geist fonts, deployed on Vercel.

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Narrative arc | Grand Prix Circuit (reverse chronological) | Visitor sees current impact first (standings), then flashbacks through the journey |
| Color palette | Papaya Heritage — dark base (#0A0A0A) + McLaren papaya (#FF8000) | Elegant, leadership-appropriate. Refined use of accent, not splashy |
| Interactivity | Cinematic + Immersive — scroll animations, custom cursor, ambient sound (toggleable) | Full sensory experience befitting a design leader's portfolio |
| Navigation | F1 Telemetry bar at TOP — sector indicator, track map progress, sound toggle | User preferred top nav over bottom; telemetry metaphor reinforces F1 theme |
| Loader | Formation Lap — circuit lines animate in, converge at start line, F1 starting lights sequence, "LIGHTS OUT AND AWAY WE GO" | Most memorable intro; user wanted the pit lane rays → start line → lights ceremony |
| Contact | Pit Lane Experience + personal photographic journey | Deceleration feel, warm personal tone, team/event photos |
| Assets | Headshot provided; team photos to be enhanced via Gemini; product screenshots to be added later | Design accommodates placeholder states for future content |

---

## Design Tokens

```
Background:       #0A0A0A (near black)
Surface:          #141414 (card backgrounds)
Primary Accent:   #FF8000 (McLaren papaya) — used ONLY on large text (24px+), borders, icons, and decorative elements
Accent Text-Safe: #FFa033 (lighter papaya variant) — for small body text on dark backgrounds (passes WCAG AA 4.5:1)
Text Primary:     #FFFFFF (headings)
Text Body:        #E0E0E0 (light gray)
Text Muted:       #888888 (passes WCAG AA on #0A0A0A at 4.52:1)
Border Radius:    4px max — sharp, precision feel
Typography:
  - Display/Headings: Orbitron (Google Fonts, OFL license) for sector labels, key headings. Fallback: Rajdhani.
  - UI/Body: Geist Sans
  - Stats/Metrics/Code: Geist Mono
Sound: Off by default, toggleable via top nav icon
```

---

## Section-by-Section Specification

### S0: The Loader — "Formation Lap" (~4-5 seconds)

**Purpose:** Set the tone. Announce the experience.

**Sequence:**
1. Dark canvas (#0A0A0A)
2. Abstract circuit/track lines animate in like pit lane telemetry rays — thin, papaya-tinted lines radiating across the screen
3. Lines converge and trace a simplified track outline, settling at the start/finish line position
4. Five red starting lights appear one by one (classic F1 starting ceremony), vertically stacked
5. All lights go out simultaneously
6. "LIGHTS OUT AND AWAY WE GO" types in with staggered character animation
7. Text morphs/transitions into "HARI VERSHAN" with a burst of papaya energy lines
8. Subtle engine rev audio plays (only if sound is toggled on)
9. Dissolves into Section 1 (Championship Standings)

**Technical notes:**
- Canvas or SVG for track line animations
- CSS animations or GSAP timeline for the lights sequence
- Web Audio API for engine sound (lazy-loaded, toggleable)
- Skip button (small, bottom-right) for returning visitors
- Cookie/localStorage to auto-skip on repeat visits (optional)

---

### S1: "Championship Standings" — Hero Section

**Purpose:** First impression after loader. Establish who Hari is NOW — at the peak of his career.

**Layout:**
- Full viewport height
- Left side: Large animated text reveal of "HARI VERSHAN" (scroll-triggered fade-in)
- Subtitle: "Product Design Lead | AI-Driven Design | Enterprise UX"
- Right side: Professional headshot with subtle parallax mouse-movement effect (image shifts slightly based on cursor position, inspired by sanimani.com)

**Championship Standings Board:**
Styled like F1 constructor/driver standings table:

| Position | Metric | Value |
|----------|--------|-------|
| P1 | Design Leadership | 9+ Years |
| Fastest Lap | Operational Workflows | 12x Faster |
| Team Principal | Design Team | 20-30 Members |
| Podium | Conversion Improvement | 20% |
| Pit Efficiency | Dev Time Reduction | 30% |

- Each row animates in with a staggered delay
- Numbers count up from 0 to final value (counter animation)
- Background: looped abstract line animation (subtle, behind content — inspired by landonorris.com)

**Top Nav appears here:**
- F1 telemetry-style bar
- Left: Hari's name/logo mark
- Center: Current sector name ("Sector 1: Standings")
- Right: Mini track map showing scroll progress as a dot moving along a simplified circuit outline, sound toggle icon, hamburger menu
- Transparent initially, gains dark background on scroll

**Scroll-down indicator:** Animated arrow/chevron at bottom (inspired by thisisundefined.com)

---

### S2: "The Current Lap" — Present Role at TechJays

**Purpose:** Showcase current work and key products.

**Transition:** Scroll triggers a "rewinding" visual — subtle speed lines animate in reverse direction, signaling the flashback begins.

**Content:**
- Section header: "THE CURRENT LAP" with "TechJays | 2025 — Present" subheading
- Role description: Product Design Lead
- Brief summary of scope (leading 20-30 member team, multiple enterprise engagements)

**Product Cards — Horizontal Scroll Strip** (inspired by fableco.uk):
Four cards, each containing:
1. **AI HVAC Estimation Platform** — "12x faster than legacy AutoCAD workflows"
2. **Ad Agency Product System** — "End-to-end campaign management"
3. **Enterprise CMS Optimisation** — "45% to 80% product listing accuracy"
4. **Library Forge** — "AI-powered design system generation"

- Cards are large format, papaya accent border on hover
- Placeholder visual area for product screenshots (to be added later)
- Text fades in on scroll trigger (konpo.studio style)
- Interaction model: Scroll-hijack — vertical scroll drives horizontal card movement within this section. Once all cards are traversed, vertical scroll resumes. Touch devices: native horizontal swipe with snap points. Mouse: scroll wheel maps to horizontal movement within the container.

---

### S3: "The Race So Far" — Career Timeline

**Purpose:** Walk backwards through Hari's career as laps on the circuit.

**Layout:** Vertical timeline with animated progress line (inspired by fadestocodes.dev, speed reduced for readability).

**Timeline Entries (each = a "lap"):**

- **Lap 2025 — TechJays** | Product Design Lead
  - AI HVAC platform, ad agency system, CMS redesign
  - Built AI-driven design workflows (Figma-to-LLM + Claude Code)
  - Leading 20-30 member cross-functional design team

- **Lap 2022 — Material+ (Srijan)** | Senior Product Designer
  - 20% conversion improvement, 12% productivity gains
  - Built scalable design systems (30% dev time reduction)
  - UX research: personas, journey mapping, top task analysis

- **Lap 2021 — Srijan Technologies** | Product Designer
  - Responsive design, accessibility, A/B testing
  - Agile product development across CMS platforms

- **Lap 2019 — Freelance** | UX/UI Designer
  - Concept-to-launch product design for startups
  - Marketing collaterals, engagement optimization

- **Lap 2017 — Ugam Solutions** | Associate Analyst
  - Statistical analysis, business intelligence
  - Where the data-driven foundation was built

**Interactions:**
- Timeline progress line animates on scroll (papaya colored)
- Each lap card slides in with parallax depth (wallofportfolios.in style)
- Expandable on click: accordion-style inline expansion revealing full bullet-point achievements from resume. Expansion animates height with easing.
- Photos/images scroll in alongside timeline entries where available

---

### S4: "The Machine" — Skills & Capabilities

**Purpose:** Technical specification of Hari's skillset, styled like an F1 car tech spec sheet.

**Layout:** Grid/card layout where each category fans out with scroll animation.

**Categories (styled as car components):**

- **Aero (Strategy)**
  Design Management | Design Operations | Design Governance | Product Strategy | Product Roadmap | UX Strategy | Cross-Functional Leadership

- **Power Unit (Tools)**
  Figma | Miro | Sketch | Framer | Adobe Creative Cloud (XD, Photoshop, Illustrator, InDesign, After Effects)

- **Chassis (Research)**
  UX Research | User Interviews | Heuristic Evaluation | UX Audits | Data Analysis | A/B Testing | Usability Testing

- **Electronics (AI & Dev)**
  Claude Code | LLM Toolchains | MCP Integrations | Figma-to-LLM Pipelines

- **Telemetry (Enterprise)**
  SharePoint | Drupal | Power BI | Google Workspace

**Additional elements:**
- Client/company logos in a minimal scrolling strip (fableco.uk style): TechJays, Material+, Srijan, Ugam
- Certifications displayed as "Race Licenses":
  - Anthropic Claude Code (2025)
  - Design Thinking Practitioner (2025)
  - Enterprise Design Thinking, IBM (2025)
  - Design-Led Strategy (2024)

---

### S5: "The Team" — Leadership

**Purpose:** Showcase Hari as a leader who builds and mentors teams.

**Layout:**
- Section opens with a leadership philosophy statement (text fade-in animation)
- Team photos cascade in (wallofportfolios tamanna-mundhra scroll-in effect)
- Photos processed through Gemini to create polished team composites from the meeting screenshots and event photos provided

**Content:**
- "20-30 designers mentored across enterprise engagements"
- "Design operations and governance established across product verticals"
- "Hiring, onboarding, and career development for growing design teams"
- Team culture moments: TechJays "Build AI" event, "Game of Codes" cricket, design review sessions

**Metrics displayed:**
- Team Size: 20-30 members across engagements
- Products Shipped: Multiple enterprise platforms
- Customer Satisfaction: 4.2/5 (recycling firm CRM)

---

### S6: "Products" — Portfolio Showcase

**Purpose:** Dedicated product showcase page.

**Implementation:** Separate route (`/products`) linked from main page and nav. On the main scrolling page, S2 product cards link to `/products/[slug]` for details. "Sector 6: Products" in the nav menu navigates to `/products` (leaves the single-page scroll). The transition uses a page exit animation (fade to black) to maintain immersion.

**Layout:**
- Grid of product cards on the listing page
- Each card: product name, industry tag, one-line impact stat, thumbnail placeholder
- Click through to individual product detail pages

**Product Detail Template:**
- Title and industry
- The Challenge (problem statement)
- The Approach (design process, methodology)
- The Impact (metrics, outcomes)
- Screenshots/visuals (placeholder area for future uploads)
- Tools used

**Products to feature:**
1. AI HVAC Estimation Platform
2. Ad Agency Product System
3. Enterprise CMS Optimisation
4. Library Forge (AI Design System Platform)
5. Global Recycling Firm CRM
6. AI-Driven Catalog Browser

---

### S7: "The Pit Stop" — Contact

**Purpose:** The final destination. Warm, personal, actionable.

**Transition:** Visual "deceleration" — animations slow down, spacing opens up, the intensity of the F1 theme softens.

**Layout — Split:**

**Left side:**
- Hari's photo (larger, personal framing)
- A warm personal message about collaboration and what drives him
- Social links: LinkedIn, Email, Phone
- "Download Resume" link

**Right side:**
- Contact form styled as a pit wall communication panel
  - Name, Email, Message fields
  - "Send Transmission" CTA button (papaya)
- Subtle background animation: abstract pit lane activity (minimal, low-opacity)

**Contact Form Backend:**
- Next.js API route (`/api/contact`) handles POST submissions
- Sends email via Resend API (free tier: 100 emails/day, sufficient for portfolio)
- Environment variable: `RESEND_API_KEY`
- Sends to: sr.harivershan@gmail.com
- Basic validation: required fields, email format
- Success/error states with animation feedback

**Below the fold:**
- Personal photographic journey strip — horizontal scroll of team events, cricket, TechJays moments, design workshops
- "Book a Call" secondary CTA

---

### Global Elements

**Top Navigation — F1 Telemetry Bar:**
- Fixed position, full width
- Left: "HV" monogram or "HARI VERSHAN" text logo
- Center: Current sector name (updates on scroll)
- Right: Mini track map (SVG circuit outline with a dot showing scroll progress), sound toggle, hamburger menu
- Transparent over hero, gains `#0A0A0A` background with slight blur on scroll
- Slim, elegant — not bulky

**Sector Name Mapping (canonical):**

| Section ID | Nav Display Name | Spec Name |
|------------|-----------------|-----------|
| S1 | Sector 1: Standings | Championship Standings |
| S2 | Sector 2: Current Lap | The Current Lap |
| S3 | Sector 3: Race History | The Race So Far |
| S4 | Sector 4: The Machine | The Machine |
| S5 | Sector 5: The Team | The Team |
| S6 | Sector 6: Products | Products (separate route) |
| S7 | Pit Stop: Contact | The Pit Stop |

**Track Map Shape:** A simplified, abstract F1 circuit outline — NOT a specific real-world circuit (avoids trademark issues). Custom SVG with flowing curves, a DRS zone marker, and a clear start/finish line. The scroll progress dot moves along the path.

**Full-Screen Menu Overlay:**
- Opens from hamburger
- Dark overlay with sector names as large text links (using canonical nav display names above)
- Staggered animation on open
- Close button (X) top right

**Custom Cursor:**
- Default: small custom dot cursor (replaces system cursor)
- On interactive elements: expands with papaya glow/ring
- Smooth transition between states (webflow bono portfolio style)
- On text: reverts to system I-beam for usability

**Sound System:**
- Off by default
- Toggle in top nav (speaker icon)
- Sounds: ambient engine hum on scroll, subtle whoosh on section transitions, rev on loader
- Web Audio API, lazy-loaded
- Preference persisted via localStorage (`sound-enabled`) — survives page navigation and sessions
- Respects `prefers-reduced-motion` — auto-disabled

**Scroll Behavior:**
- Smooth scroll with section snap (optional, can be disabled)
- Scroll-triggered animations throughout (GSAP ScrollTrigger or Framer Motion)
- Parallax depth on select elements
- `prefers-reduced-motion` respected — falls back to instant transitions

---

## Page Structure

```
/                   — Main single-page experience (S0-S5, S7)
/products           — Product portfolio listing
/products/[slug]    — Individual product detail pages
```

---

## Asset Requirements

| Asset | Status | Notes |
|-------|--------|-------|
| Professional headshot | Provided | Sage green blazer portrait |
| TechJays team event photo | Provided | "Build AI" branded backdrop |
| Cricket team photo | Provided | "Game of Codes" tournament |
| Meeting screenshot (12 people) | Provided | To be enhanced via Gemini into polished team image |
| Meeting screenshot (25+ people) | Provided | To be enhanced via Gemini into polished team image |
| Product screenshots | Not yet | Placeholder layout, user will provide later |
| Company logos | To be sourced | TechJays, Material+, Srijan, Ugam |
| Engine/ambient sounds | To be created/sourced | Royalty-free F1-inspired audio |
| Resume PDF | Provided | For "Download Resume" link in contact section, stored in `/public/resume.pdf` |

---

## Technical Architecture

**Framework:** Next.js (latest stable, App Router, Server Components default)

**Animation Libraries:**
- GSAP with ScrollTrigger for scroll-driven animations
- Framer Motion for component-level transitions and layout animations
- CSS animations for simple hover/state transitions
- Canvas API or SVG for the loader track line animation

**Audio:** Web Audio API with lazy loading

**Fonts:**
- Geist Sans (body, UI)
- Geist Mono (stats, metrics, data)
- Display font: Orbitron (Google Fonts, OFL license). Fallback: Rajdhani.

**Styling:** Tailwind CSS with custom design tokens

**Image Processing:** Team photos from meeting screenshots will be manually pre-processed using Gemini (build-time, one-off task — not a runtime API dependency). Enhanced images are saved as static assets in `/public/images/team/`.

**Performance:**
- Images: next/image with lazy loading
- Fonts: next/font (zero layout shift)
- Code splitting per route
- Animation-heavy sections use `will-change` and GPU-accelerated properties
- Respect `prefers-reduced-motion` throughout

**Responsive:** Mobile-first. On mobile:
- Horizontal scroll sections become vertical stacks
- Custom cursor disabled (touch devices)
- Sound system hidden
- Animations simplified
- Track map in nav simplified or hidden

---

## Accessibility

- **Color contrast:** #FF8000 (papaya) on #0A0A0A fails WCAG AA for normal text (3.95:1). Use #FFa033 for any small text on dark backgrounds. #FF8000 is reserved for large text (24px+), borders, icons, and decorative elements only.
- **Keyboard navigation:** All interactive elements (menu, cards, timeline entries, form, sound toggle) must be keyboard-accessible. Custom cursor is visual-only — does not affect focus behavior.
- **Focus management:** Full-screen menu overlay traps focus when open. Focus returns to hamburger on close. Skip-to-content link hidden visually but accessible to screen readers.
- **Screen readers:** Loader sequence has `aria-hidden="true"` (decorative). Standings table uses semantic `<table>` with proper headers. Section transitions use `aria-live` regions for sector name updates. Sound toggle has `aria-label`.
- **Reduced motion:** All animations respect `prefers-reduced-motion: reduce`. Fallback: instant transitions, no parallax, static loader (skip to hero). Sound auto-disabled.
- **Images:** All images have descriptive `alt` text. Decorative SVGs/canvas animations use `aria-hidden="true"`.
- **Form:** Contact form fields have associated `<label>` elements. Error messages use `aria-describedby`. Submit button has clear loading/success/error states announced to screen readers.

---

## SEO & Metadata

- **Page title:** "Hari Vershan — Product Design Lead | AI-Driven Design"
- **Meta description:** "Portfolio of Hari Vershan, Product Design Lead with 9+ years of experience in enterprise SaaS, AI-driven products, and design leadership."
- **OG Image:** Static 1200x630 image — dark background with name, title, and papaya accent. Stored in `/public/og-image.png`.
- **OG tags:** title, description, image, url, type (website)
- **Twitter card:** summary_large_image
- **Favicon:** Custom "HV" monogram favicon in papaya on dark
- **Structured data:** Person schema (JSON-LD) with name, jobTitle, url, sameAs (LinkedIn)
- **404 page:** Custom styled page with F1 theme ("Wrong Turn — This sector doesn't exist") and link back to home
- **Canonical URL:** Set on all pages
- **Robots:** Allow all, sitemap reference

---

## Deployment

- **Platform:** Vercel
- **Environment variables:** `RESEND_API_KEY` (for contact form email delivery)
- **Domain:** To be configured by user post-deploy
- **Preview deployments:** Automatic via Vercel git integration (once repo is connected)

---

## GSAP Licensing

GSAP free tier ("No Charge" license) permits use on sites that do not charge users for access. A personal portfolio qualifies. ScrollTrigger is included in the free tier. No paid license needed.

---

## Out of Scope (for v1)

- Blog/writing section
- Dark/light mode toggle (site is dark-only by design)
- CMS integration (content is hardcoded for v1)
- Analytics integration
- i18n / multi-language
- Advanced SEO (beyond meta tags, OG, and structured data defined above)
