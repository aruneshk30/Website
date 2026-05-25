import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Briefcase,
  Monitor,
  TrendingUp,
  Sparkles,
  Blocks,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const stats = [
  {
    value: "₹1.5Cr+",
    label: "monthly revenue impact",
    gradient: "from-violet-600 to-indigo-600",
    bg: "bg-gradient-to-br from-violet-50 to-indigo-50",
    border: "border-violet-200",
    valueColor: "text-violet-700",
  },
  {
    value: "500+",
    label: "bundle SKUs automated",
    gradient: "from-blue-600 to-cyan-500",
    bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
    border: "border-blue-200",
    valueColor: "text-blue-700",
  },
  {
    value: "20→14%",
    label: "ATC diversion reduced",
    gradient: "from-emerald-600 to-teal-500",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    border: "border-emerald-200",
    valueColor: "text-emerald-700",
  },
  {
    value: "30%",
    label: "sales quoting improvement",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-gradient-to-br from-amber-50 to-orange-50",
    border: "border-amber-200",
    valueColor: "text-amber-700",
  },
];

const previews = [
  {
    href: "#work",
    label: "Projects",
    desc: "Case studies on checkout, pricing, and real-time tooling.",
    accent: "from-violet-500 to-indigo-500",
    dot: "bg-violet-500",
  },
  {
    href: "#ai-systems",
    label: "AI Systems",
    desc: "AI-powered systems and workflow automation.",
    accent: "from-blue-500 to-cyan-500",
    dot: "bg-blue-500",
  },
  {
    href: "#experience",
    label: "Experience",
    desc: "Product, growth, experimentation, and systems work.",
    accent: "from-emerald-500 to-teal-500",
    dot: "bg-emerald-500",
  },
];

const projects = [
  {
    title: "Checkout Funnel Optimization",
    desc: "Reduced friction across the checkout journey using behavioral analysis and UX optimization.",
    impact: "ATC diversion reduced",
    href: "/projects/checkout-funnel-optimization",
    Icon: TrendingUp,
    accent: "from-violet-500 to-indigo-600",
    iconBg: "bg-gradient-to-br from-violet-100 to-indigo-100",
    iconColor: "text-violet-600",
    tag: "UX · Analytics",
    tagBg: "bg-violet-100 text-violet-700",
  },
  {
    title: "Automated SKU Pricing",
    desc: "Built automated pricing logic for bundled and configurable products at scale.",
    impact: "500+ SKUs automated",
    href: "/projects/automated-sku-pricing",
    Icon: Monitor,
    accent: "from-blue-500 to-cyan-600",
    iconBg: "bg-gradient-to-br from-blue-100 to-cyan-100",
    iconColor: "text-blue-600",
    tag: "Automation · Pricing",
    tagBg: "bg-blue-100 text-blue-700",
  },
  {
    title: "Real-Time Sales Calculator",
    desc: "Created live pricing workflows for internal sales operations teams.",
    impact: "Revenue acceleration",
    href: "/projects/real-time-sales-calculator",
    Icon: Briefcase,
    accent: "from-emerald-500 to-teal-600",
    iconBg: "bg-gradient-to-br from-emerald-100 to-teal-100",
    iconColor: "text-emerald-600",
    tag: "Tooling · Ops",
    tagBg: "bg-emerald-100 text-emerald-700",
  },
];

const aiSystems = [
  {
    title: "PM Research Hub",
    desc: "AI-powered product management operating system for research and prioritization.",
    href: "/ai-systems/pm-research-hub",
    Icon: Sparkles,
    accent: "from-violet-500 to-purple-600",
    iconBg: "bg-gradient-to-br from-violet-100 to-purple-100",
    iconColor: "text-violet-600",
    tag: "AI · Research",
    tagBg: "bg-violet-100 text-violet-700",
  },
  {
    title: "9-Agent CRO Workflow",
    desc: "Multi-agent experimentation and conversion-rate-optimization workflow system.",
    href: "/ai-systems/9-agent-cro-workflow",
    Icon: Blocks,
    accent: "from-blue-500 to-indigo-600",
    iconBg: "bg-gradient-to-br from-blue-100 to-indigo-100",
    iconColor: "text-blue-600",
    tag: "Agents · CRO",
    tagBg: "bg-blue-100 text-blue-700",
  },
];

const experience = [
  {
    title: "Sierra Living Concepts",
    role: "Product Manager",
    desc: "Leading pricing systems, checkout optimization, experimentation, and operational tooling.",
    accent: "from-violet-500 to-indigo-600",
    tag: "Current Role",
    tagBg: "bg-violet-100 text-violet-700",
    pillBg: "bg-gradient-to-r from-violet-500 to-indigo-600",
  },
  {
    title: "BoostGrad",
    role: "Growth & Analytics",
    desc: "Worked on analytics systems, dashboards, funnels, and growth initiatives.",
    accent: "from-slate-500 to-slate-700",
    tag: "Previous Role",
    tagBg: "bg-slate-100 text-slate-600",
    pillBg: "bg-gradient-to-r from-slate-500 to-slate-700",
  },
];

const connectLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/arunesh-k" },
  { icon: Mail, label: "Email", href: "mailto:aruneshk30@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919012666192" },
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
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes spinRingReverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
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
        <div
          className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle,#a5f3fc,#67e8f9)",
            filter: "blur(80px)",
            animation: "drift 22s ease-in-out infinite reverse",
          }}
        />
      </div>

      <main className="relative z-10">

        {/* ── HERO ── */}
        <section id="home" className="flex min-h-screen items-center px-6 py-20 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Arunesh Kumar
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                Product Manager
                <br />
                <span className="bg-gradient-to-r from-slate-900 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Growth &amp; Digital Strategy
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500 md:text-xl">
                I build revenue-driving product experiences across e-commerce,
                experimentation, and AI-powered workflows.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-indigo-200"
                >
                  View Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:aruneshk30@gmail.com"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:scale-[1.02] hover:border-indigo-300"
                >
                  <Mail className="h-5 w-5 text-indigo-500" />
                  Contact
                </Link>
              </div>

              {/* STATS — colored cards */}
              <div className="mt-14 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className={`rounded-[1.8rem] border ${s.border} ${s.bg} p-6 shadow-sm backdrop-blur`}
                  >
                    <p className={`text-4xl font-bold ${s.valueColor}`}>
                      {s.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — profile image with fixed ring animation */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative flex h-[500px] w-[440px] items-center justify-center">

                {/* Outer ring — fixed: use a wrapper to rotate around image center */}
                <div
                  className="pointer-events-none absolute"
                  style={{ width: 420, height: 420 }}
                >
                  <div
                    className="h-full w-full rounded-full border border-indigo-200"
                    style={{ animation: "spinRing 30s linear infinite" }}
                  />
                </div>

                <div
                  className="pointer-events-none absolute"
                  style={{ width: 520, height: 520 }}
                >
                  <div
                    className="h-full w-full rounded-full border border-indigo-100"
                    style={{ animation: "spinRingReverse 42s linear infinite" }}
                  />
                </div>

                {/* Glow backdrop */}
                <div
                  className="absolute h-72 w-72 rounded-full opacity-40"
                  style={{
                    background: "radial-gradient(circle, #c7d2fe, #818cf8)",
                    filter: "blur(48px)",
                  }}
                />

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

        {/* ── OVERVIEW ── */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel>Overview</SectionLabel>
            <SectionTitle>Three spaces, one story</SectionTitle>
            <SectionSub>
              Projects, AI systems, and experience — organized into focused sections.
            </SectionSub>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {previews.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Accent bar */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent} rounded-t-[2rem]`}
                  />

                  <div className="flex items-center gap-2 mb-4">
                    <span className={`h-2 w-2 rounded-full ${p.dot}`} />
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                      Preview
                    </p>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-950">{p.label}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-500">{p.desc}</p>

                  <div className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
                    Open
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="work" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel>Projects</SectionLabel>
            <SectionTitle>Impact through product</SectionTitle>
            <SectionSub>
              Product initiatives focused on revenue, operations, and experimentation.
            </SectionSub>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {projects.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Top accent bar */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent} rounded-t-[2rem]`}
                  />

                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${p.tagBg}`}
                      >
                        {p.tag}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-slate-950">
                        {p.title}
                      </h3>
                    </div>
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${p.iconBg}`}
                    >
                      <p.Icon className={`h-6 w-6 ${p.iconColor}`} />
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-500">{p.desc}</p>

                  <div className={`mt-6 inline-flex items-center gap-2 text-base font-semibold bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`}>
                    {p.impact}
                    <ArrowRight className={`h-4 w-4 ${p.iconColor}`} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI SYSTEMS ── */}
        <section id="ai-systems" className="border-y border-slate-200 bg-white/60 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel>AI Systems</SectionLabel>
            <SectionTitle>AI systems built for leverage</SectionTitle>
            <SectionSub>
              Workflow automation, research systems, and experimentation tooling.
            </SectionSub>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {aiSystems.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.accent} rounded-t-[2rem]`}
                  />

                  <div className="flex items-start gap-5">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${s.iconBg}`}
                    >
                      <s.Icon className={`h-6 w-6 ${s.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${s.tagBg}`}>
                        {s.tag}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-slate-950">{s.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-500">{s.desc}</p>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-slate-900">
                    Open System
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel>Experience</SectionLabel>
            <SectionTitle>Experience snapshot</SectionTitle>
            <SectionSub>
              Product, systems, experimentation, and growth operations experience.
            </SectionSub>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {experience.map((e) => (
                <div
                  key={e.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${e.accent} rounded-t-[2rem]`}
                  />

                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${e.tagBg}`}>
                    {e.tag}
                  </span>

                  <h3 className="mt-4 text-3xl font-bold text-slate-950">{e.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-500">{e.desc}</p>

                  <div className={`mt-6 inline-flex items-center gap-2 rounded-full ${e.pillBg} px-4 py-1.5 text-sm font-semibold text-white`}>
                    {e.role}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* 3-column grid */}
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">

              {/* Col 1 — Brand */}
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Arunesh Kumar
                </div>
                <p className="text-sm leading-6 text-slate-500">
                  Product Manager focused on growth, experimentation, and AI-powered workflows.
                </p>

                {/* Nav links */}
                <div className="mt-6 flex flex-col gap-2">
                  {["#home", "#work", "#ai-systems", "#experience"].map((href) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
                    >
                      {href
                        .replace("#", "")
                        .replace("-", " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 2 — Connect (icons) */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-6">
                  Connect
                </p>
                <div className="flex flex-wrap gap-3">
                  {connectLinks.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      aria-label={c.label}
                      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md"
                    >
                      <c.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 3 — Resources */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-6">
                  Resources
                </p>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/Arunesh_Kumar_Resume.pdf"
                    target="_blank"
                    className="group inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    <FileText className="h-5 w-5 text-indigo-500" />
                    Download Resume
                    <ExternalLink className="ml-auto h-4 w-4 text-slate-400 group-hover:text-indigo-500" />
                  </Link>
                  <Link
                    href="mailto:aruneshk30@gmail.com"
                    className="group inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    <Mail className="h-5 w-5 text-indigo-500" />
                    aruneshk30@gmail.com
                    <ExternalLink className="ml-auto h-4 w-4 text-slate-400 group-hover:text-indigo-500" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
              <p>© {new Date().getFullYear()} Arunesh Kumar. All rights reserved.</p>
              <p className="text-xs">Built with Next.js &amp; Tailwind CSS</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
