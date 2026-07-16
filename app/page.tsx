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

// ── DATA ──────────────────────────────────────────────────
const stats = [
  { value: "₹1.5Cr+", label: "monthly revenue impact" },
  { value: "500+", label: "bundle SKUs automated" },
  { value: "20→14%", label: "ATC diversion reduced" },
  { value: "30%", label: "sales quoting improvement" },
];

const statTones = [
  { bg: "bg-dustyblue-50", text: "text-dustyblue-800" },
  { bg: "bg-sage-50", text: "text-sage-800" },
  { bg: "bg-sand", text: "text-sand-800" },
  { bg: "bg-terracotta/10", text: "text-terracotta-600" },
];

const previews = [
  {
    href: "/projects",
    label: "Projects",
    desc: "Case studies on checkout, pricing, and real-time tooling.",
    badge: "Checkout • Pricing • Calculator",
  },
  {
    href: "#ai-systems",
    label: "AI Systems",
    desc: "PM Hub and 9-Agent CRO Workflow built for leverage.",
    badge: "Research hub • CRO workflow",
  },
  {
    href: "#experience",
    label: "Experience",
    desc: "Sierra Living Concepts and BoostGrad — full journey.",
    badge: "Sierra • BoostGrad",
  },
  {
    href: "/case-studies",
    label: "Case Studies",
    desc: "Real work case studies.",
    badge: "Case Studies",
  },
  {
    href: "/ui&artifacts",
    label: "UI and Artifacts",
    desc: "UI/UX designs, Process maps, and product documentation from real work.",
    badge: "UI/UX Designs • NPD Process • Cross-functional",
  },
];

const projects = [
  {
    title: "Checkout Funnel Optimization",
    desc: "Reduced friction in checkout using behavioral analysis, Clarity recordings, and targeted UX improvements.",
    impact: "ATC diversion 20% → 14%",
    href: "/projects",
    Icon: TrendingUp,
  },
  {
    title: "Automated SKU Pricing System",
    desc: "Automated pricing cascade for 500+ bundled SKUs with variant-level mapping and sync logic.",
    impact: "~₹35–40L monthly exposure protected",
    href: "/projects",
    Icon: Monitor,
  },
  {
    title: "Real-Time Pricing Calculator",
    desc: "Built a live quoting flow for U.S. sales to reduce quoting time from days to real-time.",
    impact: "~₹1.5Cr additional monthly revenue",
    href: "/projects",
    Icon: Briefcase,
  },
];

const aiSystems = [
  {
    title: "PM Research & Strategy Hub",
    desc: "AI-assisted product operating system for research, PRDs, prioritization, funnel analysis, hypothesis testing, and stakeholder communication — 17 modules in one place.",
    href: "/ai-systems/pm-hub",
    Icon: Sparkles,
  },
  {
    title: "9-Agent CRO Workflow",
    desc: "Multi-agent workflow for conversion analysis, UX diagnosis, and experimentation planning. Each agent handles a specific layer of the CRO stack.",
    href: "/ai-systems/9-agent-cro",
    Icon: Blocks,
  },
];

const experience = [
  {
    title: "Sierra Living Concepts",
    role: "Product Manager",
    desc: "Driving pricing systems, checkout improvements, and real-time sales tooling. Working across product, engineering, and growth to ship revenue-impacting features.",
    href: "/experience",
  },
  {
    title: "BoostGrad",
    role: "Growth & Analytics",
    desc: "Supported marketing and growth initiatives through analytics, dashboard reporting, campaign tracking, and student engagement insights.",
    href: "/experience",
  },
];

// ── COMPONENTS ────────────────────────────────────────────
function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-terracotta">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
      {children}
    </h2>
  );
}

function SectionSub({ children }: { children: string }) {
  return (
    <p className="mt-4 max-w-xl text-base leading-7 text-charcoal/60">
      {children}
    </p>
  );
}

// ── PAGE ─────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="bg-cream">

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative flex min-h-[85vh] items-center overflow-hidden bg-cream px-4 pb-10 pt-16 md:px-6 md:pb-16 md:pt-24 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">

          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-sand bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-charcoal">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Arunesh Kumar
          </div>

          {/* Asymmetric row: headline left, photo card right, offset */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">

            <div>
              <h1
                className="animate-fade-up text-4xl font-bold leading-[1.15] tracking-tight text-charcoal md:text-6xl"
                style={{ animationDelay: "80ms" }}
              >
                Product Manager{" "}
                <span className="font-serif font-normal text-sage-700">
                  building growth systems
                </span>
              </h1>

              <p
                className="animate-fade-up mt-5 max-w-md text-lg leading-8 text-charcoal/60"
                style={{ animationDelay: "160ms" }}
              >
                I build revenue-driving product experiences across e-commerce
                systems, experimentation, and AI-powered workflows.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="animate-fade-up inline-flex items-center gap-2 rounded-xl bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-terracotta-600"
                  style={{ animationDelay: "240ms" }}
                >
                  View Work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/connect"
                  className="animate-fade-up inline-flex items-center gap-2 rounded-xl border border-sand bg-transparent px-6 py-3.5 text-sm font-semibold text-charcoal transition hover:border-charcoal/30"
                  style={{ animationDelay: "300ms" }}
                >
                  Connect <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Photo card — offset down on desktop */}
            <div
              className="animate-fade-up relative mt-4 h-[220px] overflow-hidden rounded-2xl bg-sage lg:mt-10 lg:h-[280px]"
              style={{ animationDelay: "100ms" }}
            >
              <Image
                src="/profile.png"
                alt="Arunesh Kumar"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Stat cluster — pulled right, not grid-aligned with text above */}
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4 lg:ml-auto lg:mr-0">
            {stats.map((s, i) => {
              const tone = statTones[i % statTones.length];
              return (
                <div
                  key={s.label}
                  className={`animate-fade-up rounded-xl ${tone.bg} p-4`}
                  style={{ animationDelay: `${360 + i * 60}ms` }}
                >
                  <p className={`text-lg font-bold ${tone.text}`}>{s.value}</p>
                  <p className={`mt-0.5 text-xs ${tone.text}`}>{s.label}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── ABOUT ME ── */}
      <section className="bg-white/60 py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <SectionLabel>About Me</SectionLabel>
          <SectionTitle>
            Building products that drive growth & measurable impact
          </SectionTitle>
          <div className="mt-6 space-y-5 text-base leading-8 text-charcoal/70 md:text-lg">
            <p>
              I'm{" "}
              <span className="font-semibold text-charcoal">
                Arunesh Kumar
              </span>
              , a Product Manager focused on growth, experimentation, and
              digital systems. My work sits at the intersection of product,
              analytics, UX, and business impact.
            </p>
            <p>
              At Sierra Living Concepts, I've worked on pricing systems,
              checkout optimization, and revenue-driving workflows —
              contributing to measurable business outcomes through pricing
              automation, conversion improvements, and real-time sales tools.
            </p>
            <p>
              I enjoy solving messy problems, understanding user behavior,
              and transforming insights into scalable systems, experiments,
              and product improvements that create measurable business value.
            </p>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Overview</SectionLabel>
            <SectionTitle>Three spaces, one story</SectionTitle>
            <SectionSub>
              Dedicated pages for projects, AI systems, and experience — scroll
              down for a preview of each.
            </SectionSub>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {previews.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group flex flex-col rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40">
                  Preview
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-charcoal">
                  {p.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/60">{p.desc}</p>
                <p className="mt-4 text-xs font-medium text-charcoal/40">{p.badge}</p>
                <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">
                  Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Projects</SectionLabel>
            <SectionTitle>Impact through product</SectionTitle>
            <SectionSub>
              Three projects, measurable outcomes — driven by data, UX insight,
              and systematic thinking.
            </SectionSub>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.title}
                href="/case-studies"
                className="group flex flex-col rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40">
                      Case Study
                    </p>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-charcoal">
                      {p.title}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-sand bg-cream text-charcoal/60 transition group-hover:border-terracotta/40 group-hover:bg-white">
                    <p.Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm leading-7 text-charcoal/60">{p.desc}</p>
                <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">
                  {p.impact}{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SYSTEMS ── */}
      <section id="ai-systems" className="border-y border-sand bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>AI Systems</SectionLabel>
            <SectionTitle>AI systems built for leverage</SectionTitle>
            <SectionSub>
              Two AI-powered systems designed to amplify PM and growth workflows
              through structured intelligence.
            </SectionSub>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {aiSystems.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-[1.75rem] border border-sand bg-cream p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-sand bg-white text-charcoal/70 shadow-sm">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-charcoal">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-charcoal/60">
                      {s.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">
                  Open system{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Experience</SectionLabel>
            <SectionTitle>Experience snapshot</SectionTitle>
            <SectionSub>
              Two roles, both focused on measurable product and growth outcomes.
            </SectionSub>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {experience.map((e, i) => (
              <Link
                key={e.title}
                href="/experience"
                className="rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40">
                  {i === 0 ? "Current Role" : "Previous Role"}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-charcoal">
                  {e.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-charcoal/60">{e.desc}</p>
                <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-terracotta">
                  {e.role} <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
