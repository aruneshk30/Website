export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ai-systems", label: "AI Systems" },
  { href: "/experience", label: "Experience" },
  { href: "/ui&artifacts", label: "UI&Artifacts" },
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
    company: "Sierra Living Concepts — Growth & Digital Strategy",
    period: "Nov 2025 – Present",
    bullets: [
      "Designed and executed 20+ product-page A/B tests, boosting add-to-cart rate by 25.71% and adding ₹1.67 crore in revenue/month through user behaviour analysis using Microsoft Clarity and BI dashboards.",
      "Identified that 500+ bundled furniture set SKUs had unlinked parent-child pricing mismatches of $600–$1,000+ per SKU due to manual pricing dependencies. Proposed and led development of an automated pricing system with variant-level child SKU mapping, coordinating IT, pricing, finance, and operations teams — protecting ₹35–40 lakh in monthly revenue loss and reducing per-SKU mapping time from 28 to 7 minutes through a mid-build process optimisation.",
      "Analysed user journeys, Clarity recordings, and BI dashboards to identify friction in the ATC-to-checkout flow — customers diverting to similar product recommendations and losing entered data due to an unresponsive pop-up form. Coordinated UI/UX designers and IT teams to remove distracting ATC recommendations and replace the pop-up with a dedicated checkout sub-step, reducing drop-offs from 20% to 14% and contributing ₹1.2 crore in monthly revenue.",
      "Identified that custom furniture quote requests were taking 1–2 days due to manual pricing dependencies, giving customers time to disengage. Gathered requirements from the US sales team, coordinated with pricing and IT to define pricing logic and build a real-time pricing calculator, QA'd all outputs before deployment — improving close rates by 30% and generating ₹1.5 crore in additional monthly revenue.",
      "Researched PCI DSS compliance requirements across SAQ levels and produced a compliance recommendation report for senior management. Coordinated with IT to migrate the payment flow from custom card input fields to an Authorize.net hosted solution, reducing compliance scope from SAQ D to SAQ A, then drove a second iteration replacing the hosted popup with an iframe integration for a smoother embedded checkout while maintaining SAQ A compliance.",
      "Coordinated development of a conditional attribute feature on PDPs that surfaces only relevant configuration options based on prior customer selections, reducing decision friction for complex SKUs. Recommended a mid-build UX improvement to display unavailable options in a greyed-out state rather than hiding them, improving configuration clarity.",
      "Manages QA and improvement processes for an AI support chatbot covering product recommendation accuracy, tone consistency, case handling, and support ticket creation across 5 structured test scenarios with multiple test cases each. Produces detailed evaluation reports with error categorisation, contributing to a significant improvement in recommendation relevance — from largely irrelevant initial responses to contextually accurate product suggestions.",
    ],
    metrics: ["₹1.2Cr monthly revenue improvement", "₹1.5Cr additional monthly revenue", "25.71% ATC lift", "500+ SKUs"],
  },
  {
    role: "Management Trainee (Product Strategy)",
    company: "Sierra Living Concepts",
    period: "Jun 2025 – Oct 2025",
    bullets: [
      "Worked within the Product Strategy department, coordinating across sourcing, pricing, finance, operations, design, and marketing teams to execute new product launches, gaining end-to-end exposure to mapping the product development process and optimising the product lifecycle from planning to go-live.",
      "Conducted market research, competitor analysis, and feasibility analysis for Kids' Furniture expansion, delivering a go-to-market roadmap and U.S. laws compliance requirements document to launch in the U.S. market.",
      "Introduced four new products in the Daybeds category and improved category positioning and assortment presentation, contributing to 158.19% category sales growth from ₹12.2 lakh to ₹31.5 lakh per quarter.",
    ],
    metrics: ["158.19% category growth", "₹14L → ₹29L / quarter", "Launch roadmap", "Cross-functional execution"],
  },
  {
    role: "Marketing Intern",
    company: "BoostGrad",
    period: "Feb 2024 – Dec 2024",
    bullets: [
      "Conducted market, competitor, and audience research to identify growth opportunities, contributing to a 12x expansion in brand reach through data-driven targeting and content strategy improvements.",
      "Analysed campaign and user behaviour data via GA4, translating findings into product and positioning recommendations presented to senior stakeholders for feature prioritisation and expansion decisions.",
    ],
    metrics: ["12x reach expansion", "Growth analytics", "Dashboards", "Product positioning"],
  },
];

export const skillGroups = [
  {
    label: "Product & Strategy",
    items: [
      "Product Roadmap",
      "Product Discovery",
      "PRD Development",
      "User Stories",
      "Go-to-Market Execution",
      "OKRs & KPIs",
      "Process Mapping",
      "Stakeholder Management",
      "Cross-functional Collaboration",
      "Sprint Planning",
    ],
  },
  {
    label: "Growth & Experimentation",
    items: [
      "Funnel Optimisation",
      "A/B & Multivariate Testing",
      "Conversion Rate Optimisation",
      "Cohort Analysis",
      "Retention Analysis",
      "Customer Journey Mapping",
      "ICE / RICE / PIE Prioritisation",
      "Dynamic Pricing",
      "Product Configuration Logic",
      "PDP Optimisation",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Google Analytics 4",
      "Power BI",
      "Microsoft Clarity",
      "Looker Studio",
      "Figma",
      "JIRA",
      "Monday.com",
      "AI/RAG Workflows",
    ],
  },
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
    description: "Establishes the baseline — what is actually happening in the funnel before any opinion enters the room.",
  },
  {
    title: "UX Agent",
    description: "Translates numbers into interface problems — where the experience breaks down and why users leave.",
  },
  {
    title: "Research Agent",
    description: "Grounds the diagnosis in market reality — are these problems unique to us or industry-wide patterns?",
  },
  {
    title: "Customer Voice Agent",
    description: "Brings the human layer — what buyers actually say, fear, and need before they convert.",
  },
  {
    title: "Tech Agent",
    description: "Stress-tests every idea against the stack — filters out what cannot be shipped before prioritization.",
  },
  {
    title: "Experimentation Agent",
    description: "Turns validated problems into testable bets — structured hypotheses with measurable success criteria.",
  },
  {
    title: "Prioritization Agent",
    description: "Forces a decision — which bets get resources first, ranked by impact, effort, and confidence.",
  },
  {
    title: "Risk Agent",
    description: "The final filter — what could go wrong, what are we assuming, and what needs a contingency.",
  },
  {
    title: "Documentation Agent",
    description: "Closes the loop — converts decisions into a format engineering can act on without a follow-up meeting.",
  },
];

export const connectLinks = [
  { label: "Email", href: "mailto:aruneshk30@gmail.com", icon: "Mail" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arunesh-k", icon: "Linkedin" },
  { label: "WhatsApp", href: "https://wa.me/919012666192", icon: "MessageCircle" },
  { label: "Book a Meeting", href: "https://calendly.com/aruneshk30/30min", icon: "CalendarDays" },
];
