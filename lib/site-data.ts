export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/ai-systems", label: "AI Systems" },
  { href: "/experience", label: "Experience" },
  { href: "/connect", label: "Connect" },
];

export const heroStats = [
  { value: "₹1.5Cr+", label: "monthly revenue impact" },
  { value: "500+", label: "bundle SKUs automated" },
  { value: "20→14%", label: "ATC diversion reduced" },
];

export const workCaseStudies = [
  {
    id: "01",
    title: "Checkout Funnel Optimization",
    brief:
      "Users were diverting from Add-to-Cart to similar product pages and abandoning checkout because the popup-based info form wiped data on idle.",
    problem:
      "The checkout path had friction at the ATC → checkout transition, which created abandonment and prevented users from completing high-intent purchases.",
    solution:
      "Analyzed Microsoft Clarity recordings and BI dashboards, aligned UI/UX, category managers, and IT teams, and redesigned the flow to remove distracting recommendations and capture information in a dedicated checkout step.",
    impact: [
      "ATC diversions reduced from 20% to 14%",
      "Checkout abandonment improved from 84.09% to 72.77%",
      "≈ ₹2.89 crore monthly revenue recovered",
    ],
  },
  {
    id: "02",
    title: "Automated SKU Pricing & Mapping System",
    brief:
      "500+ bundled furniture set SKUs had unlinked parent-child pricing, causing manual dependencies and recurring mismatches.",
    problem:
      "Every set order needed manual child-SKU identification, which created operational overhead and pricing mismatches of $600–$1,000+ per SKU.",
    solution:
      "Proposed and drove a backend automated pricing cascade with variant-level child SKU mapping, coordinating IT, pricing, finance, and operations teams.",
    impact: [
      "Dynamic price synchronization across 500+ SKUs",
      "SKU mapping time reduced from 28 min to 7 min",
      "≈ ₹35–40 lakh monthly revenue loss protected",
    ],
  },
  {
    id: "03",
    title: "Real-Time Pricing Calculator for U.S. Sales",
    brief:
      "Custom furniture quote requests took 1–2 days due to manual pricing calculations, slowing customer decisions.",
    problem:
      "Sales teams waited on pricing output, giving customers time to drop off or second-guess purchases during the quoting cycle.",
    solution:
      "Gathered requirements from the U.S. sales team, coordinated pricing and IT teams to define logic, QA'd outputs, and launched a real-time calculator.",
    impact: [
      "Quote generation reduced from 1–2 days to real-time",
      "Conversion rate improved by 30%",
      "≈ ₹1.5 crore in additional monthly revenue",
    ],
  },
];

export const aiSystemCards = [
  {
    href: "/ai-systems/pm-hub",
    title: "PM Research & Strategy Hub",
    description:
      "A PM operating system for research, hypothesis building, prioritization, PRDs, stakeholder communication, and experimentation.",
    meta: "17 modules • Saved work • Tone-aware outputs",
    accent: "navy",
  },
  {
    href: "/ai-systems/cro-workflow",
    title: "9-Agent CRO Workflow",
    description:
      "A structured multi-agent workflow that turns e-commerce behavior, UX signals, and business goals into product decisions.",
    meta: "9 agents • CRO logic • Prioritization",
    accent: "slate",
  },
];

export const experienceItems = [
  {
    role: "Product Manager",
    company: "Sierra Living Concepts— Growth & Digital Strategy",
    period: "Nov 2025 – Present",
    bullets: [
      "Proposed and drove an automated pricing cascade system across 500+ bundled furniture set SKUs.",
      "Identified two ATC-to-checkout friction points via Clarity and BI dashboards and coordinated a redesign.",
      "Drove a real-time pricing calculator for the U.S. sales team, reducing quote turnaround from days to live calls.",
      "Coordinated conditional attribute logic on PDPs and executed 20+ product-page tests that lifted add-to-cart rate by 15.71%.",
    ],
    metrics: ["₹1.2Cr monthly revenue improvement", "₹1.5Cr additional monthly revenue", "20+ tests", "500+ SKUs"],
  },
  {
    role: "Management Trainee (Product Strategy)",
    company: "Sierra Living Concepts",
    period: "Jun 2025 – Oct 2025",
    bullets: [
      "Worked across sourcing, pricing, finance, operations, design, and marketing teams to support new product launches.",
      "Conducted market, competitor, and feasibility analysis for Kids Furniture expansion in the U.S. market.",
      "Introduced four new products in the Daybeds category, contributing to 200% category sales growth.",
    ],
    metrics: ["200% category growth", "₹14L → ₹29L / quarter", "Launch roadmap", "Cross-functional execution"],
  },
  {
    role: "Marketing Intern",
    company: "BoostGrad",
    period: "Feb 2024 – Dec 2024",
    bullets: [
      "Analyzed user behavior and campaign performance data, contributing to brand reach expansion from 20K to 270K.",
      "Delivered data-driven performance insights via dashboards to support feature prioritization and CX decisions.",
    ],
    metrics: ["20K → 270K reach", "Growth analytics", "Dashboards", "Product positioning"],
  },
];

export const skills = [
  "Product Discovery",
  "Funnel Optimization",
  "A/B Testing",
  "PRD Development",
  "User Journey Mapping",
  "UX Optimization",
  "Microsoft Clarity",
  "Power BI",
  "Looker Studio",
  "GA4",
  "Figma",
  "Monday.com",
];

export const pmHubModules = [
  { title: "Funnel Analysis", description: "Customise funnel steps, enter drop-off data, and get UX + optimization analysis." },
  { title: "Feature Research", description: "Market landscape, competitor benchmarks, user needs, and strategic fit." },
  { title: "PRD Writer", description: "Structured Product Requirements Document with user stories, requirements, and success metrics." },
  { title: "Hypothesis Builder", description: "If/Then/Because hypotheses with validation plans and evidence collection." },
  { title: "Persona Builder", description: "Detailed personas with goals, frustrations, jobs-to-be-done, and insights." },
  { title: "Competitive Intelligence", description: "Comparison, pricing, positioning maps, and strategic gaps." },
  { title: "OKR & Metrics Planner", description: "Key results, north star metric, leading indicators, and guardrails." },
  { title: "User Journey Mapper", description: "Touchpoints, emotions, friction points, and aha moment identification." },
  { title: "A/B Test Planner", description: "Sample size, success criteria, risk, and go/no-go checklist." },
  { title: "Feature Brainstorm", description: "8–10 structured feature ideas with effort, impact scores, and recommendation." },
  { title: "Prioritization Framework", description: "RICE / ICE scoring table and backlog recommendation." },
  { title: "Voice of Customer", description: "Sentiment, themes, pain points, and demand signals from raw feedback." },
  { title: "Qual & Quant Analysis", description: "Synthesize interviews and survey data into insights and recommendations." },
  { title: "Risk & Assumptions Log", description: "Likelihood × impact matrix and mitigation strategies." },
  { title: "Insight Repository", description: "Searchable knowledge base for analyses, drafts, and product notes." },
  { title: "Dashboard", description: "Overview, recent insights, and quick actions to every module." },
  { title: "Stakeholder Communication", description: "Email updates, informed replies, and stakeholder analysis with tone switching." },
];

export const pmHubAgents = [
  "Research",
  "Strategy",
  "PRD",
  "Roadmapping",
  "Analytics",
  "UX",
  "Experimentation",
  "CRO",
  "Prioritization",
];

export const croAgents = [
  {
    title: "Data Agent",
    description: "Pulls the core numbers, identifies trends, and frames the baseline problem.",
  },
  {
    title: "UX Agent",
    description: "Reads interface friction, flow problems, and task completion barriers.",
  },
  {
    title: "Research Agent",
    description: "Looks at market and competitor context to ground the recommendation.",
  },
  {
    title: "Customer Voice",
    description: "Synthesizes reviews, complaints, support tickets, and user feedback.",
  },
  {
    title: "Tech Agent",
    description: "Checks implementation constraints, dependencies, and feasibility.",
  },
  {
    title: "Experimentation",
    description: "Defines hypotheses, test design, and measurement strategy.",
  },
  {
    title: "Prioritization",
    description: "Ranks actions by impact, effort, confidence, and sequence.",
  },
  {
    title: "Risk Agent",
    description: "Flags downside risk, edge cases, and mitigation steps.",
  },
  {
    title: "Documentation",
    description: "Produces the final summary, decision memo, and execution plan.",
  },
];

export const connectLinks = [
  { label: "Email", href: "mailto:aruneshk30@gmail.com", icon: "Mail" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arunesh-k", icon: "Linkedin" },
  { label: "WhatsApp", href: "https://wa.me/919012666192", icon: "MessageCircle" },
  { label: "Book a Meeting", href: "https://calendly.com/aruneshk30/30min", icon: "CalendarDays" },
];
