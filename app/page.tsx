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

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const stats = [
  { value: "₹1.5Cr+", label: "monthly revenue impact" },
  { value: "500+", label: "bundle SKUs automated" },
  { value: "20→14%", label: "ATC diversion reduced" },
  { value: "30%", label: "sales quoting improvement" },
];

const previews = [
  {
    href: "#work",
    label: "Projects",
    desc: "Case studies on checkout, pricing, and real-time tooling.",
  },
  {
    href: "#ai-systems",
    label: "AI Systems",
    desc: "AI-powered systems and workflow automation.",
  },
  {
    href: "#experience",
    label: "Experience",
    desc: "Product, growth, experimentation, and systems work.",
  },
];

const projects = [
  {
    title: "Checkout Funnel Optimization",
    desc: "Reduced friction across the checkout journey using behavioral analysis and UX optimization.",
    impact: "ATC diversion reduced",
    Icon: TrendingUp,
  },
  {
    title: "Automated SKU Pricing",
    desc: "Built automated pricing logic for bundled and configurable products.",
    impact: "500+ SKUs automated",
    Icon: Monitor,
  },
  {
    title: "Real-Time Sales Calculator",
    desc: "Created live pricing workflows for internal sales operations.",
    impact: "Revenue acceleration",
    Icon: Briefcase,
  },
];

const aiSystems = [
  {
    title: "PM Research Hub",
    desc: "AI-powered product management operating system for research and prioritization.",
    href: "#",
    Icon: Sparkles,
  },
  {
    title: "9-Agent CRO Workflow",
    desc: "Multi-agent experimentation and CRO workflow system.",
    href: "#",
    Icon: Blocks,
  },
];

const experience = [
  {
    title: "Sierra Living Concepts",
    role: "Product Manager",
    desc: "Leading pricing systems, checkout optimization, experimentation, and operational tooling.",
  },
  {
    title: "BoostGrad",
    role: "Growth & Analytics",
    desc: "Worked on analytics systems, dashboards, funnels, and growth initiatives.",
  },
];

// ─────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
      {children}
    </h2>
  );
}

function SectionSub({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
      {children}
    </p>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes drift {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(40px,-30px) scale(1.05); }
          66% { transform: translate(-20px,40px) scale(0.95); }
        }

        @keyframes spinRing {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div
          className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle,#c7d2fe,#818cf8)",
            filter: "blur(80px)",
            animation: "drift 18s ease-in-out infinite",
          }}
        />
      </div>

      <main className="relative z-10">

        {/* HERO */}
        <section
          id="home"
          className="flex min-h-screen items-center px-6 py-20 lg:px-8"
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Arunesh Kumar
              </div>

              {/* HERO TITLE */}
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                Product Manager
                <br />

                <span className="bg-gradient-to-r from-slate-900 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Growth &amp; Digital Strategy
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500 md:text-xl">
                I build revenue-driving product experiences across e-commerce,
                experimentation, and AI-powered workflows.
              </p>

              {/* BUTTON */}
              <div className="mt-10">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                >
                  View Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-14 grid grid-cols-2 gap-5">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[1.8rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
                  >
                    <p className="text-4xl font-bold text-slate-950">
                      {s.value}
                    </p>

                    <p className="mt-2 text-base text-slate-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:flex items-center justify-center">

              <div className="relative flex h-[500px] w-[440px] items-center justify-center">

                {/* Rings */}
                <div
                  className="absolute rounded-full border border-indigo-100"
                  style={{
                    width: 380,
                    height: 380,
                    top: "50%",
                    left: "50%",
                    animation: "spinRing 30s linear infinite",
                  }}
                />

                <div
                  className="absolute rounded-full border border-indigo-50"
                  style={{
                    width: 520,
                    height: 520,
                    top: "50%",
                    left: "50%",
                    animation: "spinRing 40s linear infinite reverse",
                  }}
                />

                {/* IMAGE */}
                <Image
                  src="/profile.png"
                  alt="Arunesh Kumar"
                  width={390}
                  height={450}
                  priority
                  className="relative z-10 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <SectionLabel>Overview</SectionLabel>

            <SectionTitle>
              Three spaces, one story
            </SectionTitle>

            <SectionSub>
              Projects, AI systems, and experience — organized into focused sections.
            </SectionSub>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {previews.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                    Preview
                  </p>

                  <h3 className="mt-4 text-3xl font-bold text-slate-950">
                    {p.label}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-500">
                    {p.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
                    Open
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <SectionLabel>Projects</SectionLabel>

            <SectionTitle>
              Impact through product
            </SectionTitle>

            <SectionSub>
              Product initiatives focused on revenue, operations, and experimentation.
            </SectionSub>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                        Case Study
                      </p>

                      <h3 className="mt-3 text-3xl font-bold text-slate-950">
                        {p.title}
                      </h3>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                      <p.Icon className="h-6 w-6 text-slate-600" />
                    </div>
                  </div>

                  <p className="text-lg leading-8 text-slate-500">
                    {p.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
                    {p.impact}
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI SYSTEMS */}
        <section
          id="ai-systems"
          className="border-y border-slate-200 bg-white/60 py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <SectionLabel>AI Systems</SectionLabel>

            <SectionTitle>
              AI systems built for leverage
            </SectionTitle>

            <SectionSub>
              Workflow automation, research systems, and experimentation tooling.
            </SectionSub>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {aiSystems.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                      <s.Icon className="h-6 w-6 text-slate-700" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-slate-950">
                        {s.title}
                      </h3>

                      <p className="mt-4 text-lg leading-8 text-slate-500">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
                    Open System
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <SectionLabel>Experience</SectionLabel>

            <SectionTitle>
              Experience snapshot
            </SectionTitle>

            <SectionSub>
              Product, systems, experimentation, and growth operations experience.
            </SectionSub>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {experience.map((e, i) => (
                <div
                  key={e.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                    {i === 0 ? "Current Role" : "Previous Role"}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold text-slate-950">
                    {e.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-500">
                    {e.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-indigo-600">
                    {e.role}
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 py-10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-6 lg:px-8">

            {["#home", "#work", "#ai-systems", "#experience"].map((href) => (
              <Link
                key={href}
                href={href}
                className="text-lg font-medium text-slate-500 transition hover:text-slate-900"
              >
                {href
                  .replace("#", "")
                  .replace("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </footer>
      </main>
    </>
  );
}
