export const SECTIONS = [
  { id: "standings", label: "Sector 1: Standings", navLabel: "Standings", href: "#standings" },
  { id: "current-lap", label: "Sector 2: Current Lap", navLabel: "Current Lap", href: "#current-lap" },
  { id: "race-history", label: "Sector 3: Race History", navLabel: "Race History", href: "#race-history" },
  { id: "the-machine", label: "Sector 4: The Machine", navLabel: "The Machine", href: "#the-machine" },
  { id: "the-team", label: "Sector 5: The Team", navLabel: "The Team", href: "#the-team" },
  { id: "products", label: "Sector 6: Products", navLabel: "Products", href: "/products" },
  { id: "pit-stop", label: "Pit Stop: Contact", navLabel: "Contact", href: "#pit-stop" },
] as const;

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
