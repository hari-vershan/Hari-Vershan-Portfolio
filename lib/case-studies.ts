// Rich case study content for individual detail pages
// Separated from constants.ts to keep navigation/config lean

export interface CaseStudyApproachStep {
  title: string;
  detail: string;
}

export interface CaseStudyOutcome {
  metric: string;
  detail: string;
}

export interface CaseStudyFull {
  slug: string;
  title: string;
  tagline: string;
  industry: string;
  description: string;
  domain: string;
  role: string;
  scope: string;
  challenge: string;
  challengeSections?: { title: string; detail: string }[];
  whyItMattered: string;
  approach: CaseStudyApproachStep[];
  outcomes: CaseStudyOutcome[];
  category: "current" | "past";
  liveUrl?: string;
}

// ─── CURRENT CIRCUIT: Active projects at TechJays ───────────────────────

export const CURRENT_PROJECTS: CaseStudyFull[] = [
  {
    slug: "ai-hvac-platform",
    title: "Vortex AI: HVAC Estimation Platform",
    tagline: "2x estimating capacity via automated workflows",
    industry: "Construction & Engineering",
    description: "Scaled estimating capacity 2x without increasing headcount by replacing a fragmented legacy tech stack with an AI-powered unified workspace — reducing standard job processing from 2.3 hours to 20 minutes.",
    domain: "Construction Technology, HVAC Engineering, B2B SaaS",
    role: "Product & Design Lead",
    scope: "AI Platform, Document Extraction, Automated Takeoff, Pricing Engine, Triage Dashboard",
    challenge: "Vortex's growth was bottlenecked by a highly manual, 10-hour average estimating cycle. Highly paid technical estimators were wasting hours hunting through massive PDF sets, manually tracing ductwork in legacy tools, and re-keying data into Excel. Processing ~136 monthly RFQs meant that scaling revenue required linearly scaling expensive headcount.",
    challengeSections: [
      { title: "Data-Driven Prioritisation", detail: "Pipeline analysis revealed a 70/30 split between standard and complex jobs. We targeted the 70% standard jobs for heavy AI automation to clear the queue, while designing a frictionless manual fallback for the complex 30%." },
      { title: "Human-in-the-Loop Design", detail: "To ensure adoption by sceptical engineers, we positioned the AI not as a replacement, but as an assistant. The AI does the heavy lifting, but the estimator remains the final approver via a visual triage dashboard." },
    ],
    whyItMattered: "Scaling revenue was locked behind linearly scaling expensive headcount. Every RFQ that couldn't be processed was revenue left on the table. The opportunity was to break this linear dependency by automating the 70% of standard work, freeing estimators to focus on complex, high-value jobs.",
    approach: [
      { title: "Intelligent Document Extraction", detail: "Computer vision instantly scans 100+ page bid packages, isolating relevant mechanical drawings and extracting required material specs — eliminating hours of manual PDF hunting." },
      { title: "Automated Takeoff & Triage", detail: "The AI automatically measures standard ductwork. A visual dashboard triages the drawings, clearly flagging items that are 'Completed' versus those that 'Need Attention' — giving estimators a clear priority queue." },
      { title: "Integrated Fallback Canvas", detail: "For highly complex geometries, estimators can manually trace and override AI calculations directly within the platform, eliminating context-switching between legacy tools." },
      { title: "Zero-Touch Pricing Generation", detail: "Visual takeoff data (dimensions, materials) is instantly translated into a fully costed Recap Report, eliminating up to 4 hours of manual Excel entry per job." },
    ],
    outcomes: [
      { metric: "2x Capacity", detail: "Doubled quoting capacity without increasing headcount" },
      { metric: "85% Faster", detail: "Standard job processing reduced from ~2.3 hours to 20 minutes" },
      { metric: "50% Cycle Cut", detail: "Weighted average time across all job types from 10 hours to 5.7 hours" },
      { metric: "70% Automated", detail: "Standard jobs fully processed by AI with human approval" },
    ],
    category: "current",
  },
  {
    slug: "ad-agency-system",
    title: "Ad Agency Product System",
    tagline: "End-to-end campaign management",
    industry: "Advertising & Media",
    description: "End-to-end product system for a leading ad agency — streamlining campaign management, asset production, and client delivery across teams.",
    domain: "Digital Advertising, Campaign Management",
    role: "Product Design Lead",
    scope: "Campaign Management, Asset Production, Client Delivery, Cross-Team Workflows",
    challenge: "A leading ad agency was running campaign management across disconnected tools — spreadsheets for planning, email threads for approvals, shared drives for assets, and manual reporting. Creative teams, account managers, and clients had no single source of truth. Campaign timelines were frequently missed, asset versions got confused, and client feedback loops were painfully slow.",
    whyItMattered: "In advertising, speed and coordination are everything. A missed deadline or wrong asset version can cost a client relationship. The agency needed a unified platform that connects planning, production, and delivery into one seamless workflow that everyone — internal teams and clients — can trust.",
    approach: [
      { title: "Campaign Orchestration", detail: "Designed a unified campaign management system where account managers plan, schedule, and track campaigns from brief to delivery. Real-time visibility into every campaign's status across all teams." },
      { title: "Asset Production Pipeline", detail: "Built a structured asset production workflow with version control, approval gates, and automated handoffs between creative, review, and delivery stages." },
      { title: "Client Delivery Portal", detail: "Designed a client-facing portal for campaign reviews, feedback, and approvals. Clients see only what's ready for review, provide inline feedback, and approve with one click." },
      { title: "Cross-Team Coordination", detail: "Created role-based dashboards for creatives, account managers, and leadership — each seeing the information most relevant to their workflow and decision-making." },
    ],
    outcomes: [
      { metric: "Unified", detail: "Campaign management from brief to delivery in one platform" },
      { metric: "Streamlined", detail: "Asset production with version control and approval workflows" },
      { metric: "Client Portal", detail: "Direct client review and approval, eliminating email loops" },
      { metric: "Cross-Team", detail: "Role-based dashboards for all stakeholders" },
    ],
    category: "current",
  },
  {
    slug: "library-forge",
    title: "Library Forge",
    tagline: "AI-powered design system generation",
    industry: "Design Tools",
    description: "AI-powered design system platform enabling teams to generate multi-style UI component libraries from brand inputs. Extract from URLs or enter brand details to generate production-ready code across 9 design styles.",
    domain: "Design Systems, AI Tools, Developer Tools",
    role: "Creator & Product Designer",
    scope: "AI Platform, Component Generation, Multi-Style Export, Production Code",
    challenge: "Creating a design system from scratch takes weeks — defining tokens, building components across styles, ensuring consistency, and generating production code. Design teams repeat this process for every new brand or product. There was no tool that could take brand inputs and automatically generate a complete, multi-style component library ready for production.",
    whyItMattered: "Design systems are the foundation of consistent, scalable products. But the creation cost is prohibitive for many teams. By automating the generation process with AI, teams can go from brand guidelines to production components in minutes instead of weeks — democratizing design system creation.",
    approach: [
      { title: "Dual Input System", detail: "Designed two input paths — paste a URL to extract brand elements automatically, or manually enter brand colors and fonts. Both paths feed into the same AI generation pipeline." },
      { title: "9 Design Style Engine", detail: "Built support for Material, Glassmorphism, Neumorphism, SaaS, Enterprise, Startup, Minimal, Dark, and High Contrast styles. Each style applies a complete set of design tokens to every component." },
      { title: "Component Generation", detail: "AI generates consistent components across all styles — buttons, cards, inputs, navigation elements — with real-time visual property changes including radius, shadows, colors, and spacing." },
      { title: "Multi-Format Export", detail: "Production-ready code exports as Tailwind config, CSS variables, React components, HTML/CSS, Figma JSON, or Storybook — covering the full spectrum of design-to-development handoff." },
    ],
    outcomes: [
      { metric: "9 Styles", detail: "Complete design systems generated across all style variants" },
      { metric: "6 Formats", detail: "Export as Tailwind, CSS, React, HTML, Figma JSON, or Storybook" },
      { metric: "Minutes", detail: "From brand input to production components, not weeks" },
      { metric: "Live", detail: "Shipping at library-forge.vercel.app" },
    ],
    category: "current",
    liveUrl: "https://library-forge.vercel.app/",
  },
];

// ─── PAST CIRCUITS: Completed case studies ───────────────────────────────

export const PAST_CASE_STUDIES: CaseStudyFull[] = [
  {
    slug: "healthcare-dental",
    title: "Healthcare & Dental Technology",
    tagline: "Unified 3 platforms serving 20,000+ dental professionals globally",
    industry: "Healthcare & Medical Devices",
    description: "Led the end-to-end design transformation of a fragmented dental professional ecosystem into a unified digital platform spanning events, membership, and commerce across global markets.",
    domain: "Medical Devices, Clinical Education, Dental Services",
    role: "Product Design Lead / Manager",
    scope: "Events Platform, Membership Program, eCommerce, Design System",
    challenge: "A global dental clinical education and products organization was running on a fragmented digital stack. Three critical business functions operated in silos, each creating friction for the same user base of 20,000+ dental professionals.",
    challengeSections: [
      { title: "Events & Seminars", detail: "Over 1,000 webinars and seminars hosted annually, roughly 300 attendees per event, generating 15M+ yen in event revenue. Every region ran its own system. No cross-selling. No unified discovery." },
      { title: "Membership & Community", detail: "The membership program was stuck on a legacy system with manual onboarding that took 3 to 4 weeks. Renewal dropout was high. Documentation was poor. The system could not scale." },
      { title: "eCommerce & Product Discovery", detail: "Outdated catalog. Aging CMS. Stagnating conversion rates. Multiple regional sites with no shared design language, eroding trust among professionals who work across borders." },
    ],
    whyItMattered: "These three products serve the same user. When a dental professional bounces between disconnected systems to register for an event, renew membership, and order supplies, trust erodes and engagement drops. The business was leaving revenue on the table and losing members it had spent years acquiring.",
    approach: [
      { title: "Discovery & User Research", detail: "Led deep stakeholder interviews and user research across Japan and Europe. Mapped end-to-end professional journeys from event discovery to product purchase. The insight was clear: users were navigating 3+ disconnected systems to manage a single relationship." },
      { title: "Unified Events Management Platform", detail: "Designed a scalable events system architected for global reuse. Any region can host events with zero additional platform cost. Designed for real-world complexity: membership-based discounts, dual payment modes, automated refunds, waitlists, attendance tracking, and personalized event discovery." },
      { title: "Membership Program Redesign", detail: "Reimagined the entire membership experience. Integrated CRM as the single source of truth. Designed automated payment flows, tier-based content personalization, and a self-service portal that eliminated back-office dependency. Replaced a 3-4 week onboarding flow with instant activation." },
      { title: "eCommerce & Product Discovery", detail: "Ran a full UX audit and heuristic evaluation. Restructured the information architecture for role-based product discovery by specialty and procedure type. Built a component library with 95% reusability across regions." },
      { title: "Design System", detail: "Established a unified design system across all three workstreams. Reusable components deployable across Japan, Europe, and future regions with minimal customization. Brand consistency with regional flexibility." },
    ],
    outcomes: [
      { metric: "90+ Workshops", detail: "With 500+ participants in 3 days at Annual Dental Symposium" },
      { metric: "3+ Legacy Systems", detail: "Deprecated and replaced with one unified platform" },
      { metric: "95% Reusability", detail: "Feature reusability across all regions" },
      { metric: "Zero SaaS Costs", detail: "Full platform ownership achieved" },
      { metric: "100% Faster", detail: "Onboarding from 3-4 weeks to real-time activation" },
      { metric: "30% Dropout", detail: "Eliminated via automated renewals" },
      { metric: "~60% Traffic", detail: "Increase in user traffic within 3 months of launch" },
      { metric: "10,000+ Hours", detail: "Back-office hours saved through automation" },
    ],
    category: "past",
  },
  {
    slug: "senior-wellness-iot",
    title: "Senior Wellness & IoT-Enabled Care",
    tagline: "Multi-platform remote care ecosystem from zero to one",
    industry: "Healthcare Technology & IoT",
    description: "Designed a multi-platform remote care ecosystem from zero to one, integrating IoT devices, caregiver dashboards, and predictive health insights for senior living communities.",
    domain: "Healthcare Technology, Senior Living, IoT & Wearables",
    role: "Product Design Lead",
    scope: "Mobile (iOS/Android), Web Portal, WearOS App, Caregiver Dashboard",
    challenge: "Senior care was fundamentally reactive. Caregivers learned about health issues only after they became emergencies. No centralized system to monitor vitals, track trends, or flag early warnings. Data from sleep mats, smartwatches, and blood pressure monitors sat in silos. Caregivers had zero unified visibility into a resident's health.",
    whyItMattered: "Timely intervention in senior care is the difference between a routine adjustment and a medical emergency. Caregivers were overworked and under-informed. The opportunity was clear: use IoT and thoughtful design to shift care from reactive to proactive.",
    approach: [
      { title: "User Research in Care Environments", detail: "Conducted research directly in senior living communities. Observed daily care routines. Interviewed caregivers, consultants, and family members. Key insight: the design problem is not showing data — it is showing the right data to the right person at the right time." },
      { title: "IoT Integration Design", detail: "Integrated 4+ IoT devices (sleep mats, smartwatches, BP monitors, weighing scales) feeding sleep, activity, heart rate, blood pressure, and oxygen saturation data into a centralized data lake for near-real-time processing." },
      { title: "Multi-Platform Ecosystem", detail: "Designed a Caregiver Mobile App with at-a-glance summaries and alert prioritization. A Web Portal for clinical analysis. A WearOS Smartwatch App with minimal, glanceable indicators for seniors. A Service Portal for medical aid requests." },
      { title: "Tiered Alert System", detail: "Designed alert hierarchies that separate informational trends from urgent flags to prevent alert fatigue. Built dashboards analyzing historical patterns to predict which residents may need escalated care." },
    ],
    outcomes: [
      { metric: "5 IoT Devices", detail: "Integrated for 24/7 patient vital monitoring" },
      { metric: "100+ Workers", detail: "Healthcare workers and caregivers onboarded in pilot" },
      { metric: "Radical Reduction", detail: "In emergency response time for elderly care" },
      { metric: "Pilot to Scale", detail: "Successful pilot that unlocked larger sales initiative" },
    ],
    category: "past",
  },
  {
    slug: "container-terminal",
    title: "Container Terminal & Maritime Logistics",
    tagline: "One platform, five personas, across international ports",
    industry: "Maritime Logistics",
    description: "Led the redesign of a legacy port management platform into a unified, role-based experience serving five distinct personas across international container terminals.",
    domain: "Port Management, Maritime Logistics, Terminal Operations",
    role: "Product Design Lead",
    scope: "Web App, Mobile App (iOS/Android), Design System",
    challenge: "A global container terminal operator needed to modernize legacy apps that had grown organically across multiple international ports. Each terminal had its own interface. Port operators, truckers, shipping agents, and billing staff navigated completely different systems per location.",
    challengeSections: [
      { title: "Fragmented Systems", detail: "Each terminal had its own interface. Port operators, truckers, shipping agents, and billing staff navigated completely different systems per location, creating massive operational inefficiency." },
      { title: "One-Size-Fits-All UI", detail: "A port operator tracking vessel schedules, a trucker checking gate-pass payments, and a billing clerk reconciling import charges all faced the same generic interface. No role awareness." },
      { title: "Legacy Tech", detail: "No mobile responsiveness. Poor load performance. Growing security vulnerabilities. Inconsistent branding across touchpoints." },
    ],
    whyItMattered: "Container terminals are high-stakes environments. When a trucker cannot quickly check container status or a shipping agent cannot manage vessel schedules efficiently, delays cascade across the supply chain. An outdated digital experience was a competitive liability.",
    approach: [
      { title: "Field Research Across Terminals", detail: "Led stakeholder interviews with 20+ users across multiple international terminals. Conducted on-site observations: truckers using the app in vehicles, port operators monitoring vessel schedules, billing teams handling complex payment reconciliation." },
      { title: "Five Persona Framework", detail: "Defined five distinct user personas (port operators, truckers, shipping agents, billing staff, administrators) with unique workflows, pain points, and feature priorities. Each persona drove its own dashboard design." },
      { title: "Unified Platform with Role-Based Experiences", detail: "Designed one platform, one login, access to any terminal globally. Custom dashboards per persona with live data feeds for real-time decisions." },
      { title: "Design System & Mobile-First", detail: "Built a branded design language with cross-platform accessibility. Prioritized mobile with offline-capable features, push notifications, and one-handed interaction patterns." },
    ],
    outcomes: [
      { metric: "5 Personas", detail: "Served on one unified platform across international terminals" },
      { metric: "20+ Stakeholders", detail: "Researched across multiple terminals" },
      { metric: "Role-Based", detail: "Custom dashboards reducing time-to-task for every user type" },
      { metric: "Cross-Platform", detail: "Responsive design across mobile, tablet, and desktop" },
    ],
    category: "past",
  },
  {
    slug: "higher-education",
    title: "Higher Education Platform",
    tagline: "Industry-leading 95+ performance score for top business school",
    industry: "Education & EdTech",
    description: "Redesigned the digital experience of a top-tier global business school, resolving platform confusion, streamlining course discovery, and delivering industry-leading performance scores.",
    domain: "Education, Business School, Thought Leadership",
    role: "Product Design Lead",
    scope: "Institutional Website, Knowledge Hub, Course Discovery, Marketing Automation",
    challenge: "A globally recognized business school operated two platforms: an institutional website for programs and enrollment, and a separate content hub for business research. Despite serving different purposes, they suffered from overlapping branding, fragmented journeys, and unclear differentiation.",
    challengeSections: [
      { title: "Brand Confusion", detail: "Users confused the two platforms. The knowledge hub and main site looked too similar but served fundamentally different goals." },
      { title: "Broken User Journeys", detail: "Prospective students landed on the content hub expecting program info. Professionals seeking thought leadership ended up on enrollment pages. Navigation created dead ends." },
      { title: "Editorial Bottleneck", detail: "Marketers depended on developers for basic form management. 250+ program-specific forms existed with massive redundancy." },
    ],
    whyItMattered: "The digital experience is often the first touchpoint for students evaluating life-changing education decisions. A confusing presence undermines the brand promise of clarity and excellence.",
    approach: [
      { title: "Behavioral Research & IA Restructuring", detail: "Researched how students search for programs versus how professionals consume thought leadership. Restructured the entire information architecture based on user intent." },
      { title: "Platform Positioning", detail: "Developed distinct positioning for each platform with clear value propositions. Institutional site focused on program discovery. Content hub focused on insight depth." },
      { title: "Personalized Discovery Flows", detail: "Designed guided program exploration based on interests, career goals, and geography. Defined content governance and tagging frameworks for intelligent cross-platform content surfacing." },
      { title: "CMS Modernization", detail: "Led migration to a modern cloud CMS. Consolidated 250 forms into 30 reusable ones. Integrated marketing automation. Built 100+ reusable components." },
    ],
    outcomes: [
      { metric: "95+ Performance", detail: "Score exceeding the 80 target" },
      { metric: "90+ SEO", detail: "Score surpassing the 80 benchmark" },
      { metric: "0.74s FCP", detail: "First Contentful Paint beating the 2s target" },
      { metric: "250 → 30 Forms", detail: "Consolidated into versatile, reusable templates" },
      { metric: "100+ Components", detail: "Reusable components in the design system" },
      { metric: "Award-Winning", detail: "Won industry recognition for platform excellence" },
    ],
    category: "past",
  },
  {
    slug: "media-publishing",
    title: "Media & Digital Publishing",
    tagline: "240M monthly audience with 7x editorial performance improvement",
    industry: "News Media & Publishing",
    description: "Drove the design transformation of two major media platforms: a national news publisher with 240M monthly audience and a multi-brand broadcasting corporation serving 99% of its market.",
    domain: "News Media, Digital Publishing, Ad Tech",
    role: "Product Design Lead",
    scope: "Editorial Platform, Ad Management, Audience Analytics, Multi-Language CMS",
    challenge: "A national news publisher with 240 million monthly audience had editorial tools with 30-second page preview times. Millions of legacy articles needed migration. A multi-brand broadcasting corporation — the number one news channel used by 99% of the population across 4 languages — needed to manage multilingual content across multiple brand properties in real-time.",
    whyItMattered: "In digital media, content creation speed directly drives revenue and audience engagement. Every second of editorial delay means slower coverage. Every percentage point of ad viewability moves significant revenue at 240M scale.",
    approach: [
      { title: "Headless Content Architecture", detail: "Designed an editorial platform with API-first architecture. Separated content creation from delivery so the same article powers web, app, and future channels. Dynamic ad slot configurations give the commercial team granular control." },
      { title: "Performance Transformation", detail: "Drove a caching strategy achieving 99% cache offload. Redesigned editorial page preview from 30 seconds to 4 seconds. That 7x improvement transformed the daily workflow of dozens of editors." },
      { title: "Massive Content Migration", detail: "Designed the migration framework for 2M+ articles, 11M+ images, 110K+ videos from legacy systems, plus 175K articles from an acquired property. All content remained discoverable with editorial history preserved." },
      { title: "Multi-Brand Component Architecture", detail: "Built a common core platform serving multiple brands with 80% reusability. Component-and-Layouts approach enables brand-specific editorial workflows without codebase forks." },
    ],
    outcomes: [
      { metric: "240M Audience", detail: "Monthly audience with 1.5M user registrations post-launch" },
      { metric: "+13% Ad Views", detail: "Increase in ad view capability" },
      { metric: "4s Preview", detail: "Page preview down from 30 seconds — 7x improvement" },
      { metric: "2M+ Articles", detail: "Migrated with 11M+ images and 110K+ videos" },
      { metric: "+20% Ad Revenue", detail: "Via direct selling campaigns for broadcasting corp" },
      { metric: "$100K/qtr Saved", detail: "On microsite creation with reusable templates" },
    ],
    category: "past",
  },
  {
    slug: "life-sciences",
    title: "Life Sciences eCommerce",
    tagline: "80% offline-to-online shift with 0.13s search response",
    industry: "Life Sciences & B2B",
    description: "Designed an omnichannel B2B ecommerce platform that shifted 80% of offline customers online, cut funnel dropout by 30%, and reduced search time from 2 seconds to 0.13 seconds.",
    domain: "Life Sciences, Laboratory Equipment, B2B eCommerce",
    role: "Product Design Lead",
    scope: "eCommerce Platform, Product Discovery, Customer Analytics",
    challenge: "A major life sciences company serving researchers and lab professionals had a fragmented customer experience. Disconnected online and offline channels. 10,000+ specialized products that were hard to discover. High dropout rates in the purchase funnel. The platform couldn't handle B2B complexity: localized pricing, regulatory compliance, and deep technical filtering.",
    whyItMattered: "When a scientist needs a specific reagent, they need to find it fast, verify specs, and purchase through their organization's channel. A slow discovery experience pushes them to competitors. Every funnel dropout was lost revenue.",
    approach: [
      { title: "Omnichannel Experience Design", detail: "Built a platform that seamlessly handles transitions between online browsing, offline purchasing, and hybrid B2B workflows. Designed to feel frictionless regardless of entry point." },
      { title: "Modular Architecture & Integrations", detail: "10,000+ products synced from PIM. Bi-directional integration with CRM, ERP, and PIM. Multi-lingual with localized pricing, currency, and regulatory compliance per country." },
      { title: "Predictive Search & Discovery", detail: "Redesigned the search experience with predictive capabilities. Reduced response time from 2s to 0.13s. Personalized recommendations based on user roles, purchase history, and research domain." },
      { title: "360-Degree Customer Intelligence", detail: "Enabled data and analytics across the full lifecycle, building a 360-degree customer view that informed both the digital experience and sales team strategies." },
    ],
    outcomes: [
      { metric: "80% Shifted", detail: "Offline customers moved to online, generating higher margins" },
      { metric: "50% Faster", detail: "Product discovery through personalization" },
      { metric: "-30% Dropout", detail: "Reduction in funnel dropout, higher revenue per customer" },
      { metric: "0.13s Search", detail: "Response time down from 2 seconds" },
    ],
    category: "past",
  },
  {
    slug: "non-profit-humanitarian",
    title: "Non-Profit & Humanitarian",
    tagline: "$600K+ saved while unifying 120+ country sites",
    industry: "Non-Profit & Humanitarian",
    description: "Redesigned the digital presence of a global child welfare organization across 120+ countries, optimizing donation flows, unifying content, and saving over $600K.",
    domain: "Non-Profit, Humanitarian Aid, Global NGO",
    role: "Product Design Lead",
    scope: "Global CMS, Donation Flow, Multilingual Sites, Accessibility",
    challenge: "A global humanitarian organization protecting children across 120+ countries was running on disparate CMS platforms per country. Donors, volunteers, and supporters faced a fragmented experience. The donation flow was confusing, resulting in low conversion. The visual design lacked the emotional boldness to engage potential donors.",
    whyItMattered: "Every friction point in a donation flow directly impacts the lives of children. A confusing interface, an extra step, an unclear call-to-action — each can cause a donor to abandon the process. Even small conversion improvements translate to significant additional funding for education, healthcare, and child protection worldwide.",
    approach: [
      { title: "Heuristic Evaluation & Accessibility Audit", detail: "Started with a comprehensive evaluation identifying accessibility gaps, consistency issues, and usability barriers. Data-driven foundation ensured the redesign addressed real problems, not assumptions." },
      { title: "Storytelling-Driven Design", detail: "Redesigned key pages with a storytelling-first approach. Bold visuals, compelling narratives, and clear impact statements to create emotional connection before users reach the donation form." },
      { title: "Donation Flow Optimization", detail: "Streamlined the donation process: fewer steps, fewer fields, clear progress indicators. Designed for one-time, monthly, and campaign-specific donations with intuitive switching." },
      { title: "Atomic Design System & Global CMS", detail: "Built the entire platform on atomic design principles for maximum reusability. Centralized CMS unifying all country sites with multilingual support, shared integrations, and consistent governance." },
    ],
    outcomes: [
      { metric: "$600K+ Saved", detail: "Cost savings while enhancing UX, accessibility, and architecture" },
      { metric: "120+ Countries", detail: "Unified under one scalable CMS" },
      { metric: "Atomic Design", detail: "Scalable design system for easy updates and component reuse" },
      { metric: "KPI Tracking", detail: "Donation tracking and strategic insights enabled" },
    ],
    category: "past",
  },
  {
    slug: "cultural-heritage",
    title: "Cultural Heritage & Digital Asset Management",
    tagline: "279,628 assets consolidated with 99%+ AI metadata enrichment",
    industry: "Education & Cultural Preservation",
    description: "Consolidated 4 legacy systems and 279,628 digital assets into a unified, AI-enriched platform safeguarding cultural heritage for research, teaching, and public engagement.",
    domain: "Higher Education, Cultural Preservation, Digital Asset Management",
    role: "Product Design Lead",
    scope: "DAM Platform, AI Metadata, Collection Integration, Workflow Design",
    challenge: "A major university's cultural and research assets — art, archives, specimens, historical collections — were scattered across 4 separate legacy systems. Each had its own interface, search capabilities, and metadata standards. Discovery was difficult. Assets were at risk of information loss. Digitization workflows required 3 steps where 1 should suffice.",
    whyItMattered: "Cultural heritage is irreplaceable. When research assets are hard to find, they don't get used. Knowledge is lost, research is duplicated, and the public benefit diminishes. Making these collections accessible and discoverable was both a scholarly imperative and a public responsibility.",
    approach: [
      { title: "Centralized DAM & Migration", detail: "Migrated terabytes of data into a centralized DAM. Cleaned, standardized, and organized 212,970 assets (7,026 GB) across 3 major collections into a single source of truth." },
      { title: "Legacy Consolidation", detail: "Unified 4 legacy systems into 1 platform, dramatically simplifying the experience for researchers and collection managers." },
      { title: "Workflow Redesign", detail: "Reduced digitization from 3 steps to 1. Automated asset handling to minimize manual effort and free curators for higher-value work." },
      { title: "AI-Powered Metadata Enrichment", detail: "Implemented AI-generated keywords for 99%+ of assets, transforming discoverability from manual and inconsistent to automated and comprehensive." },
    ],
    outcomes: [
      { metric: "279,628 Assets", detail: "Processed across 3 collections" },
      { metric: "212,970 Cleaned", detail: "Assets standardized and migrated (7,026 GB)" },
      { metric: "44,505 Duplicates", detail: "Removed, 25,707 files renamed, saving 500+ hours" },
      { metric: "99%+ AI Tags", detail: "Assets enriched with AI-generated keywords" },
      { metric: "4 → 1 Systems", detail: "Legacy systems consolidated into one platform" },
    ],
    category: "past",
  },
  {
    slug: "pharma-supply-chain",
    title: "Pharmaceutical Supply Chain",
    tagline: "Unified content discovery with AI search foundation",
    industry: "Pharmaceutical & Compliance",
    description: "Unified disparate content sources into a single discovery platform and laid the groundwork for generative AI-powered search in pharma supply chain compliance.",
    domain: "Pharmaceutical, Supply Chain Compliance, Content Aggregation",
    role: "Product Design Lead",
    scope: "Content Discovery, AI Search Foundation, Multi-Source Integration",
    challenge: "A pharma supply chain software platform had valuable knowledge scattered across marketing materials, compliance documentation, product guides, community forums, and eLearning content. Customers outside the network couldn't discover it. Internal users faced inconsistent experiences switching between content types.",
    whyItMattered: "In pharma supply chain management, compliance knowledge and product understanding are critical. When customers can't find documentation or regulatory guidance quickly, it creates operational risk and downstream patient safety concerns.",
    approach: [
      { title: "Content Harmonization", detail: "Unified content from marketing, compliance, product, UX, and community into one seamless experience. Users no longer need to know where content originated." },
      { title: "Author-Friendly Architecture", detail: "Built on a modern CMS with visual page builder and cloud hosting. Authors continue working in their original tools while content auto-syncs to the discovery platform in real-time." },
      { title: "AI Search Foundation", detail: "Integrated AI with content search to build the virtual assistant foundation. Users ask natural language questions and receive contextual answers drawn from across the entire content library." },
      { title: "Content Monetization", detail: "Designed third-party payment integration to enable premium content monetization — a revenue stream impossible with the previous fragmented setup." },
    ],
    outcomes: [
      { metric: "Unified", detail: "Content experience across all source types" },
      { metric: "Centralized", detail: "Marketing, compliance, product, UX, and community content" },
      { metric: "AI Foundation", detail: "Platform ready for generative AI search" },
      { metric: "New Revenue", detail: "Content monetization enabled via payment integration" },
    ],
    category: "past",
  },
  {
    slug: "retail-beauty",
    title: "Retail Beauty & Learning Platform",
    tagline: "8,000 to 100,000 users with gamified mobile-first learning",
    industry: "Retail & Beauty",
    description: "Designed a gamified, mobile-first learning platform that scaled from 8,000 to 100,000 users, transforming how retail beauty advisors learn, engage, and sell.",
    domain: "Retail, Beauty & Cosmetics, Corporate Learning",
    role: "Product Design Lead",
    scope: "Learning App (Web & Mobile), Gamification, Community Features",
    challenge: "A global beauty conglomerate needed a learning platform for retail beauty advisors across North American stores. Traditional LMS platforms are dry, text-heavy, and built for desk workers. Beauty advisors are visually driven, socially connected, and learn on the go between customer interactions.",
    whyItMattered: "Well-trained advisors sell more and create better customer experiences. For a company managing dozens of prestige brands, frontline product knowledge directly impacts brand perception and revenue. A platform advisors actually want to use could transform performance.",
    approach: [
      { title: "Discovery & Persona Mapping", detail: "Ran workshops and discovery sessions to define personas and map journeys. Key insight: beauty advisors are motivated by visual content, peer recognition, and progression — not by traditional certification-style learning." },
      { title: "Data-Driven Prioritization", detail: "Features prioritized by data and direct user feedback. Focused on what drives daily engagement, not building a feature-heavy platform nobody opens." },
      { title: "Gamification System", detail: "Designed bookmarking, likes, unlockable rewards, achievement tracking, leaderboards, and timed challenges. Learning feels like a game, not a chore." },
      { title: "Visual-First, Mobile-First", detail: "Content cards, learning paths, and brand collections designed as a curated editorial experience. Mobile-optimized with quick-hit modules, swipeable interfaces, and offline capabilities." },
      { title: "Community & Social Learning", detail: "Group features, forums, and peer-to-peer sharing created a social learning culture where advisors share tips and celebrate achievements across store locations." },
    ],
    outcomes: [
      { metric: "8K → 100K", detail: "User base growth over two years (12.5x)" },
      { metric: "2 → 10 Roles", detail: "Expanded, reflecting platform versatility" },
      { metric: "Subscription", detail: "Expanded beyond employees to freelancers via paid model" },
      { metric: "Mobile-First", detail: "Optimized for on-the-go retail learning" },
    ],
    category: "past",
  },
  {
    slug: "enterprise-cms",
    title: "Enterprise CMS Optimisation",
    tagline: "45% to 80% product listing accuracy",
    industry: "E-Commerce",
    description: "Redesigned reseller e-commerce CMS increasing product listing accuracy from 45% to 80% through structured UX audit and workflow optimisation.",
    domain: "E-Commerce, Content Management, Reseller Platforms",
    role: "Product Designer",
    scope: "CMS Redesign, UX Audit, Data Quality, Workflow Optimization",
    challenge: "A reseller e-commerce platform had only 45% product listing accuracy — more than half of all product entries had errors, missing information, or inconsistent formatting. The CMS workflow was unintuitive, forcing sellers through complex multi-step processes with no validation or guidance.",
    whyItMattered: "Inaccurate product listings directly hurt conversion rates and customer trust. When product information is wrong or incomplete, customers abandon purchases, return items more frequently, and lose confidence in the platform.",
    approach: [
      { title: "Comprehensive UX Audit", detail: "Conducted a thorough UX audit of the existing CMS, identifying pain points in the listing workflow, data entry patterns, and error-prone areas through heuristic evaluation and user observation." },
      { title: "Workflow Restructuring", detail: "Redesigned the product listing flow with inline validation, smart defaults, and progressive disclosure. Sellers see only relevant fields based on product category, reducing cognitive load." },
      { title: "Data Quality Framework", detail: "Implemented quality scoring for listings with real-time feedback. Sellers see exactly what's missing or incorrect before publishing, with suggestions for improvement." },
      { title: "Performance Monitoring", detail: "Built dashboards tracking listing accuracy trends, common error patterns, and seller performance metrics to enable continuous improvement." },
    ],
    outcomes: [
      { metric: "45% → 80%", detail: "Product listing accuracy improvement" },
      { metric: "UX Audit Led", detail: "Data-driven redesign based on heuristic evaluation" },
      { metric: "Reduced Errors", detail: "Inline validation catching issues before publish" },
      { metric: "Seller Satisfaction", detail: "Improved workflow reducing listing time" },
    ],
    category: "past",
  },
  {
    slug: "recycling-crm",
    title: "Global Recycling Firm CRM",
    tagline: "4.2/5 customer satisfaction with research-led design",
    industry: "Sustainability & Environment",
    description: "Conducted UX research for CRM rollout improving customer satisfaction to 4.2/5 and enabling smooth adoption across non-technical teams.",
    domain: "Sustainability, Recycling Operations, CRM",
    role: "UX Researcher / Product Designer",
    scope: "CRM Platform, UX Research, User Adoption, Training Design",
    challenge: "A global recycling firm was rolling out a new CRM platform to replace manual processes across non-technical operations teams. Previous digital tool adoptions had failed because the tools were designed for tech-savvy users, not for field workers and operations managers who primarily work with physical materials.",
    whyItMattered: "CRM adoption failure means wasted investment and teams reverting to spreadsheets and paper processes. For a recycling firm, operational efficiency directly impacts environmental outcomes — better tracking means better recycling rates.",
    approach: [
      { title: "User Research & Persona Development", detail: "Conducted extensive field research with operations teams, understanding their daily workflows, technical comfort levels, and pain points with existing processes." },
      { title: "Simplified Interface Design", detail: "Designed interfaces optimized for non-technical users with clear visual hierarchy, minimal jargon, and task-focused navigation that mirrors physical workflow patterns." },
      { title: "Adoption Strategy", detail: "Created a phased rollout plan with embedded training, contextual help, and feedback loops. Each phase built on user confidence from the previous one." },
      { title: "Continuous Feedback Integration", detail: "Built in-app feedback mechanisms and regular check-ins to identify adoption barriers early and iterate quickly based on real usage patterns." },
    ],
    outcomes: [
      { metric: "4.2/5 CSAT", detail: "Customer satisfaction score achieved" },
      { metric: "Research-Led", detail: "Design driven by field research with non-technical users" },
      { metric: "Smooth Adoption", detail: "Phased rollout with embedded training" },
      { metric: "Operational Efficiency", detail: "Improved tracking and recycling rates" },
    ],
    category: "past",
  },
];

// ─── Combined: All case studies for routing ──────────────────────────────

export const ALL_CASE_STUDIES: CaseStudyFull[] = [
  ...CURRENT_PROJECTS,
  ...PAST_CASE_STUDIES,
];

export function getCaseStudyBySlug(slug: string): CaseStudyFull | undefined {
  return ALL_CASE_STUDIES.find((cs) => cs.slug === slug);
}
