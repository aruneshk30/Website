import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Monitor,
  TrendingUp,
  Sparkles,
  Blocks,
} from "lucide-react";
import { FadeIn } from "@/components/fade-in";

// ── DATA ──────────────────────────────────────────────────
const stats = [
  { value: "₹1.67Cr+", label: "monthly revenue from A/B testing" },
  { value: "500+", label: "bundle SKUs automated" },
  { value: "20→14%", label: "checkout diversion reduced" },
  { value: "25.71%", label: "add-to-cart rate lift" },
  { value: "Chatbot QA", label: "AI chatbot QA test scenarios" },
  { value: "Process Map", label: "2 initiation paths, 8 departments, 4 stage gates" },
];

const statTones = [
  { bg: "bg-dustyblue-50", text: "text-dustyblue-800" },
  { bg: "bg-sage-50", text: "text-sage-800" },
  { bg: "bg-sand", text: "text-sand-800" },
  { bg: "bg-terracotta/10", text: "text-terracotta-600" },
  { bg: "bg-dustyblue-50", text: "text-dustyblue-800" },
  { bg: "bg-sage-50", text: "text-sage-800" },
];

const tickerItems = [
  "Product Roadmap", "PRD Development", "Funnel Optimisation", "A/B Testing",
  "Conversion Rate Optimisation", "Dynamic Pricing", "PDP Optimisation",
  "Sprint Planning", "GA4", "Power BI", "Microsoft Clarity", "Figma",
  "JIRA", "Monday.com", "AI/RAG Workflows", "Stakeholder Management",
  "Cohort Analysis", "RICE / ICE / PIE Prioritisation",
];

const previews = [
  { href: "/projects", label: "Projects", desc: "Case studies on checkout, pricing, and real-time tooling.", badge: "Checkout • Pricing • Calculator", Icon: Briefcase, tone: "bg-dustyblue-50 text-dustyblue-800" },
  { href: "/ai-systems", label: "AI Systems", desc: "PM Hub and 9-Agent CRO Workflow built for leverage.", badge: "Research hub • CRO workflow", Icon: Sparkles, tone: "bg-sage-50 text-sage-800" },
  { href: "/experience", label: "Experience", desc: "Sierra Living Concepts and BoostGrad — full journey.", badge: "Sierra • BoostGrad", Icon: TrendingUp, tone: "bg-sand text-sand-800" },
  { href: "/case-studies", label: "Case Studies", desc: "Real work case studies.", badge: "Case Studies", Icon: Monitor, tone: "bg-terracotta/10 text-terracotta-600" },
  { href: "/ui&artifacts", label: "UI and Artifacts", desc: "UI/UX designs, process maps, and product documentation from real work.", badge: "UI/UX Designs • NPD Process", Icon: Blocks, tone: "bg-dustyblue-50 text-dustyblue-800" },
];

const projects = [
  { title: "Checkout Funnel Optimization", desc: "Reduced friction in checkout using behavioral analysis, Clarity recordings, and targeted UX improvements.", impact: "ATC diversion 20% → 14%", href: "/projects", Icon: TrendingUp },
  { title: "Automated SKU Pricing System", desc: "Automated pricing cascade for 500+ bundled SKUs with variant-level mapping and sync logic.", impact: "~₹35–40L monthly exposure protected", href: "/projects", Icon: Monitor },
  { title: "Real-Time Pricing Calculator", desc: "Built a live quoting flow for U.S. sales to reduce quoting time from days to real-time.", impact: "~₹1.5Cr additional monthly revenue", href: "/projects", Icon: Briefcase },
];

const aiSystems = [
  { title: "PM Research & Strategy Hub", desc: "AI-assisted product operating system for research, PRDs, prioritization, funnel analysis, hypothesis testing, and stakeholder communication — 17 modules in one place.", href: "/ai-systems/pm-hub", Icon: Sparkles },
  { title: "9-Agent CRO Workflow", desc: "Multi-agent workflow for conversion analysis, UX diagnosis, and experimentation planning. Each agent handles a specific layer of the CRO stack.", href: "/ai-systems/9-agent-cro", Icon: Blocks },
];

const experience = [
  {
    title: "Sierra Living Concepts",
    role: "Product Manager",
    roleTag: "Current role",
    bullets: [
      "Designed and executed 20+ product-page A/B tests, lifting add-to-cart rate by 25.71% and adding ₹1.67Cr in monthly revenue.",
      "Identified $600–$1,000+ per-SKU pricing mismatches across 500+ bundled SKUs and drove an automated pricing cascade, protecting ₹35–40L in monthly revenue.",
      "Diagnosed ATC-to-checkout friction via Clarity recordings and BI dashboards; redesigned the checkout flow, cutting drop-offs from 20% to 14% and contributing ₹1.2Cr in monthly revenue.",
      "Built a real-time pricing calculator for U.S. sales, cutting quote turnaround from 1–2 days to real-time and improving close rates by 30% — ₹1.5Cr in additional monthly revenue.",
      "Led PCI DSS compliance migration from SAQ D to SAQ A via an Authorize.net hosted integration, later iterating to an embedded iframe checkout.",
      "Manages QA for an AI support chatbot — running structured evaluation across 5 test scenarios with detailed error-categorised reports, taking recommendation relevance from largely irrelevant to contextually accurate.",
    ],
  },
  {
    title: "Sierra Living Concepts",
    role: "Management Trainee, Product Strategy",
    roleTag: "Previous role",
    bullets: [
      "Coordinated across sourcing, pricing, finance, operations, design, and marketing teams to execute new product launches — end-to-end exposure to the product development lifecycle from planning to go-live.",
      "Conducted market, competitor, and feasibility research for a Kids' Furniture expansion into the U.S. market.",
      "Introduced four new products in the Daybeds category, contributing to 158% category sales growth.",
    ],
  },
  {
    title: "BoostGrad",
    role: "Growth & Analytics",
    roleTag: "Previous role",
    bullets: [
      "Conducted market, competitor, and audience research contributing to a 12x expansion in brand reach.",
      "Analysed campaign and user behaviour data via GA4, translating findings into product and positioning recommendations for stakeholders.",
    ],
  },
];

// ── COMPONENTS ────────────────────────────────────────────
function SectionLabel({ children }: { children: string }) {
  return <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-terracotta">{children}</p>;
}
function SectionTitle({ children }: { children: string }) {
  return <h2 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl">{children}</h2>;
}
function SectionSub({ children }: { children: string }) {
  return <p className="mt-4 max-w-xl text-base leading-7 text-charcoal/65">{children}</p>;
}

function SkillsTicker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-y border-charcoal/10 bg-charcoal py-3">
      <span className="sr-only">Core skills: {tickerItems.join(", ")}</span>
      <div aria-hidden="true" className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-medium text-cream/90">
            {item}
            <span className="h-1 w-1 flex-shrink-0 rounded-full bg-terracotta" />
          </span>
        ))}
      </div>
    </div>
  );
}

// ── PAGE ─────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="bg-cream">

      {/* ── HERO ── */}
      <section id="home" className="relative flex min-h-[85vh] items-center overflow-hidden bg-cream px-4 pb-10 pt-16 md:px-6 md:pb-16 md:pt-24 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-sand bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-charcoal">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                Arunesh Kumar
              </div>

              <h1 className="animate-fade-up mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-charcoal md:text-6xl" style={{ animationDelay: "80ms" }}>
                Product Manager{" "}
                <span className="font-serif font-normal text-sage-700">building growth systems</span>
              </h1>

              <p className="animate-fade-up mt-5 max-w-md text-lg leading-8 text-charcoal/65" style={{ animationDelay: "160ms" }}>
                I build revenue-driving product experiences across e-commerce systems, experimentation, and AI-powered workflows.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {stats.map((s, i) => {
                  const tone = statTones[i % statTones.length];
                  return (
                    <div key={s.label} className={`animate-fade-up rounded-xl ${tone.bg} p-3.5`} style={{ animationDelay: `${240 + i * 60}ms` }}>
                      <p className={`text-base font-bold leading-tight ${tone.text}`}>{s.value}</p>
                      <p className={`mt-0.5 text-[11px] leading-snug ${tone.text}`}>{s.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/projects" className="animate-fade-up inline-flex items-center gap-2 rounded-xl bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-terracotta-600" style={{ animationDelay: "620ms" }}>
                  View Work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/connect" className="animate-fade-up inline-flex items-center gap-2 rounded-xl bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-terracotta-600" style={{ animationDelay: "680ms" }}>
                  Connect <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="animate-fade-up relative mx-auto h-[260px] w-full max-w-xs overflow-hidden rounded-2xl bg-sage lg:mx-0 lg:h-[400px] lg:max-w-sm" style={{ animationDelay: "100ms" }}>
              <Image src="/profile.png" alt="Arunesh Kumar" fill priority className="object-cover object-top" />
            </div>
          </div>

        </div>
      </section>

      <SkillsTicker />

     {/* ── ABOUT ME ── */}
      <section className="bg-white/60 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>About Me</SectionLabel>
            <SectionTitle>Building products that drive growth & measurable impact</SectionTitle>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-charcoal/70 md:text-lg">
              <p>
                I'm <span className="font-semibold text-charcoal">Arunesh Kumar</span>, a Product Manager focused on growth, experimentation, and digital systems. My work sits at the intersection of product, analytics, UX, business impact, and compliance.
              </p>
              <p>
                At Sierra Living Concepts, I build and optimise e-commerce features for a D2C furniture brand serving the U.S. market — spanning pricing systems, checkout UX, payment compliance, chatbot improvement processes, accessibility, and internal tooling — turning operational gaps into automated, revenue-protecting systems.
              </p>
              <p>
                I enjoy solving messy problems, understanding user behavior, and coordinating across engineering, design, pricing, and operations to turn insight into scalable systems, experiments, and measurable business value.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-12">
            <SectionLabel>Overview</SectionLabel>
            <SectionTitle>Three spaces, one story</SectionTitle>
            <SectionSub>Dedicated pages for projects, AI systems, and experience — scroll down for a preview of each.</SectionSub>
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {previews.map((p, i) => (
              <FadeIn key={p.label} delay={i * 80}>
                <Link href={p.href} className="group flex h-full flex-col rounded-[1.75rem] border border-charcoal/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-md">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${p.tone}`}>
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/55">Preview</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-charcoal">{p.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/65">{p.desc}</p>
                  <p className="mt-4 text-xs font-medium text-charcoal/50">{p.badge}</p>
                  <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">
                    Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-12">
            <SectionLabel>Projects</SectionLabel>
            <SectionTitle>Impact through product</SectionTitle>
            <SectionSub>Three projects, measurable outcomes — driven by data, UX insight, and systematic thinking.</SectionSub>
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {projects.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
                <Link href="/case-studies" className="group flex h-full flex-col rounded-[1.75rem] border border-charcoal/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-md">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/50">Case Study</p>
                      <h3 className="mt-2 text-xl font-bold tracking-tight text-charcoal">{p.title}</h3>
                    </div>
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-charcoal/10 bg-cream text-charcoal/60 transition group-hover:border-terracotta/40 group-hover:bg-white">
                      <p.Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-charcoal/65">{p.desc}</p>
                  <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">
                    {p.impact} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SYSTEMS ── */}
      <section id="ai-systems" className="border-y border-charcoal/10 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-12">
            <SectionLabel>AI Systems</SectionLabel>
            <SectionTitle>AI systems built for leverage</SectionTitle>
            <SectionSub>Two AI-powered systems designed to amplify PM and growth workflows through structured intelligence.</SectionSub>
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {aiSystems.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <Link href={s.href} className="group block rounded-[1.75rem] border border-charcoal/10 bg-cream p-7 shadow-sm transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-charcoal/10 bg-white text-charcoal/70 shadow-sm">
                      <s.Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40">{String(i + 1).padStart(2, "0")}</p>
                      <h3 className="mt-1 text-2xl font-bold tracking-tight text-charcoal">{s.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-charcoal/65">{s.desc}</p>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">
                    Open system <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Experience</SectionLabel>
            <SectionTitle>Experience snapshot</SectionTitle>
            <SectionSub>Three roles, each with real, measurable ownership.</SectionSub>
          </FadeIn>
          <div className="relative mt-12 space-y-12 border-l-2 border-sand pl-8">
            {experience.map((e, i) => (
              <FadeIn key={`${e.title}-${e.role}`} delay={i * 100}>
                <div className="relative">
                  <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-terracotta" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/50">{e.roleTag}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-charcoal">{e.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-sage-700">{e.role}</p>
                  <ul className="mt-4 space-y-2.5">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-6 text-charcoal/65">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-terracotta" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {i === 0 && (
                    <Link href="/experience" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:text-terracotta-600">
                      Full experience <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
