export const SECTIONS = [
  { id: "standings", label: "Sector 1: Standings", navLabel: "Standings", href: "#standings" },
  { id: "current-circuit", label: "Sector 2: Current Circuit", navLabel: "Current Circuit", href: "#current-circuit" },
  { id: "race-history", label: "Sector 3: Race History", navLabel: "Race History", href: "#race-history" },
  { id: "the-machine", label: "Sector 4: The Machine", navLabel: "The Machine", href: "#the-machine" },
  { id: "the-team", label: "Sector 5: The Team", navLabel: "The Team", href: "#the-team" },
  { id: "past-circuits", label: "Sector 6: Past Circuits", navLabel: "Past Circuits", href: "#past-circuits" },
  { id: "pit-stop", label: "Pit Stop: Contact", navLabel: "Contact", href: "#pit-stop" },
  { id: "about", label: "About the Driver", navLabel: "About", href: "/about" },
  { id: "work", label: "All Work", navLabel: "Work", href: "/products" },
] as const;

export const SCROLL_SECTIONS = SECTIONS.filter((s) => !["about", "work"].includes(s.id));

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
    year: "2022–2025",
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
    year: "2017–2019",
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
  { slug: "ai-hvac-platform", title: "AI HVAC Estimation Platform", tagline: "12x faster than legacy AutoCAD workflows", industry: "Construction & Engineering", description: "End-to-end AI platform that extracts mechanical diagrams from floor plans, analyses specifications, maps duct systems, and generates automated estimation reports — replacing legacy AutoCAD workflows." },
  { slug: "ad-agency-system", title: "Ad Agency Product System", tagline: "End-to-end campaign management", industry: "Advertising", description: "End-to-end product system for a leading ad agency — streamlining campaign management, asset production, and client delivery across teams." },
  { slug: "enterprise-cms", title: "Enterprise CMS Optimisation", tagline: "45% to 80% product listing accuracy", industry: "E-Commerce", description: "Redesigned reseller e-commerce CMS, conducting UX audits and implementing data-driven redesigns that dramatically improved product listing accuracy." },
  { slug: "library-forge", title: "Library Forge", tagline: "AI-powered design system generation", industry: "Design Tools", description: "AI-powered design system platform enabling teams to generate component libraries and documentation automatically. Live at library-forge.vercel.app" },
  { slug: "recycling-crm", title: "Global Recycling Firm CRM", tagline: "4.2/5 customer satisfaction", industry: "Sustainability", description: "Conducted UX research for CRM rollout improving customer satisfaction to 4.2/5 and enabling smooth adoption across non-technical teams." },
  { slug: "ai-catalog-browser", title: "AI-Driven Catalog Browser", tagline: "Automated material matching", industry: "Construction & Engineering", description: "AI-driven catalog browser with automated material matching capabilities, streamlining procurement workflows for construction projects." },
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

export const LEADERSHIP_PHILOSOPHY = {
  quote: "Design leadership is not about having all the answers. It is about building teams that find better ones.",
  belief: "AI amplifies human judgment rather than replacing it — integrated throughout the design process as a force multiplier.",
  approach: [
    "Facilitating design reviews that elevate craft across all verticals",
    "Portfolio reviews, skill mapping, and growth paths for each designer",
    "Scaling teams with consistent practices and delivery standards",
    "Implementing review processes and UX standards across product verticals",
  ],
  aiWorkflow: [
    { step: "Figma → LLM Pipelines", detail: "Design specs flow into LLM chains understanding component structure, intent, and accessibility" },
    { step: "Claude Code Prototyping", detail: "AI generates production-ready components; humans review, AI executes" },
    { step: "Ship with Confidence", detail: "Design-to-development handoff time reduces dramatically with minimal rework" },
  ],
} as const;

export const BIO = {
  headline: "40% Designer. 60% Leader.",
  intro: "I build AI-powered enterprise products and the high-performing teams behind them.",
  philosophy: "An AI-enabled design leader with a career that bridges data analytics, product design, and design management — always focused on building teams that ship exceptional products.",
  coreBeliefs: "My core philosophy centers on 'building the machine that builds the product' — establishing design operations, scalable systems, and AI-assisted workflows that multiply team output.",
  education: {
    degree: "B.E, Electronics and Communication",
    institution: "SNS College of Engineering, Coimbatore",
    years: "2014–2017",
  },
  status: "Currently leading design at TechJays. Open to conversations about design leadership, AI-driven product strategy, and enterprise design consulting.",
} as const;

export const CERTIFICATIONS = [
  { name: "Anthropic Claude Code, AI-Assisted Development", year: "2025" },
  { name: "Design Thinking Practitioner (DTP)", year: "2025" },
  { name: "Enterprise Design Thinking, IBM", year: "2025" },
  { name: "Design-Led Strategy", year: "2024" },
] as const;
