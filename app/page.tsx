import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Monitor,
  TrendingUp,
  Sparkles,
  Blocks,
  Mail,
} from "lucide-react";

// ── DATA ──────────────────────────────────────────────────
const stats = [
  { value: "₹1.5Cr+", label: "monthly revenue impact" },
  { value: "500+", label: "bundle SKUs automated" },
  { value: "20→14%", label: "ATC diversion reduced" },
  { value: "30%", label: "sales quoting improvement" },
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

const contactLinks = [
  {
    href: "https://linkedin.com/in/arunesh-k",
    label: "LinkedIn",
    sub: "arunesh-k",
    emoji: "in",
    hoverBorder: "hover:border-indigo-300",
    hoverBg: "hover:bg-indigo-50",
  },
  {
    href: "https://wa.me/919012666192",
    label: "WhatsApp",
    sub: "+91 90126 66192",
    emoji: "💬",
    hoverBorder: "hover:border-green-300",
    hoverBg: "hover:bg-green-50",
  },
  {
    href: "https://calendly.com/aruneshk30/30min",
    label: "Book a call",
    sub: "Calendly",
    emoji: "📅",
    hoverBorder: "hover:border-amber-300",
    hoverBg: "hover:bg-amber-50",
  },
];

// ── COMPONENTS ────────────────────────────────────────────
function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-indigo-500">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
      {children}
    </h2>
  );
}

function SectionSub({ children }: { children: string }) {
  return (
    <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
      {children}
    </p>
  );
}

// ── PAGE ─────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes drift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(40px,-30px) scale(1.05); }
          66%     { transform: translate(-20px,40px) scale(0.95); }
        }
        @keyframes spinRing {
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%,100% { opacity:1; transform:scale(1); }
          50%     { opacity:0.4; transform:scale(1.5); }
        }
        @keyframes pulseDot {
          0%,100% { box-shadow:0 0 0 0 rgba(34,197,94,0.4); }
          50%     { box-shadow:0 0 0 7px rgba(34,197,94,0); }
        }
      `}</style>

      {/* ── FIXED BACKGROUND ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Orbs */}
        <div
          className="absolute -top-48 -right-24 h-[600px] w-[600px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle,#c7d2fe,#818cf8)", filter: "blur(80px)", animation: "drift 18s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-20 -left-24 h-[380px] w-[380px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle,#bae6fd,#38bdf8)", filter: "blur(80px)", animation: "drift 22s ease-in-out -7s infinite" }}
        />
        <div
          className="absolute top-1/2 right-1/4 h-[300px] w-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle,#d1fae5,#34d399)", filter: "blur(70px)", animation: "drift 26s ease-in-out -14s infinite" }}
        />
      </div>

      <main className="relative z-10">

        {/* ── HERO ── */}
        <section
          id="home"
          className="relative flex min-h-[85vh] md:min-h-screen items-center overflow-hidden px-4 pb-10 pt-16 md:px-6 md:pb-16 md:pt-24 lg:px-8"
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              
            {/* Left */}
            <div>
              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-500 shadow-sm backdrop-blur">
                <span
                  className="h-2 w-2 rounded-full bg-emerald-500"
                  style={{ animation: "pulseDot 2s ease-in-out infinite" }}
                />
                Arunesh Kumar
              </div>

              {/* Headline */}
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.07] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                Product Manager
                <span className="text-slate-300"> | </span>
                <span className="bg-gradient-to-r from-slate-900 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Growth &amp; Digital Strategy
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500 md:text-xl">
                I build revenue-driving product experiences across e-commerce
                systems, experimentation, and AI-powered workflows.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]"
                >
                  View Work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/connect"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]"
                >
                  Connect <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 grid max-w-lg grid-cols-2 gap-3">
                {stats.map((s, i) => {
                  const bg = [
                    "from-blue-50 to-indigo-50",
                    "from-emerald-50 to-teal-50",
                    "from-amber-50 to-orange-50",
                    "from-violet-50 to-fuchsia-50",
                  ][i];
                  return (
                    <div
                      key={s.label}
                      className={`rounded-[1.5rem] border border-slate-200/80 bg-gradient-to-br ${bg} p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md`}
                    >
                      <p className="text-2xl font-bold tracking-tight text-slate-950">
                        {s.value}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">{s.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Right — profile image with rings */}
            <div className="relative flex justify-center mt-10 lg:mt-0">
              <div className="relative flex h-[300px] w-[280px] items-center justify-center md:h-[420px] md:w-[360px] lg:h-[520px] lg:w-[460px]">
                {/* Rings */}
                {[
                  { size: 360, dur: "32s", dir: "normal" },
                  { size: 460, dur: "48s", dir: "reverse" },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-indigo-200/40"
                    style={{
                      width: r.size,
                      height: r.size,
                      top: "50%",
                      left: "50%",
                      animation: `spinRing ${r.dur} linear infinite`,
                      animationDirection: r.dir as any,
                    }}
                  />
                ))}
                {/* Glow dots */}
                {[
                  { top: 60, right: 80, color: "#818cf8", delay: "0s" },
                  { top: 320, left: 60, color: "#38bdf8", delay: "-1.5s" },
                ].map((d, i) => (
                  <div
                    key={i}
                    className="absolute h-3 w-3 rounded-full"
                    style={{
                      background: d.color,
                      boxShadow: `0 0 20px ${d.color}`,
                      top: (d as any).top,
                      right: (d as any).right,
                      left: (d as any).left,
                      animation: `pulseGlow 3s ease-in-out ${d.delay} infinite`,
                    }}
                  />
                ))}
                {/* Image */}
                <div className="relative z-10 flex justify-center">
                <Image
                src="/profile.png"
                alt="Arunesh Kumar"
                width={400}
                height={460}
                priority
                className="h-auto w-44 md:w-64 lg:w-[400px] rounded-3xl object-contain drop-shadow-2xl"
              />
                 </div>

                {/* Tag */}
                <div className="absolute left-1/2 top-[75%] z-20 w-[200px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 px-3 py-2 shadow-xl backdrop-blur md:left-[20px] md:top-auto md:bottom-8 md:w-[240px] md:px-5 md:py-4">
                  <p className="text-center text-xs font-bold text-slate-900 md:text-left md:text-sm">
                    Product · Growth · Systems
                  </p>
                
                  <p className="mt-1 text-center text-[11px] leading-4 text-slate-500 md:max-w-[200px] md:text-left md:text-sm md:leading-6">
                    Building revenue-driving experiences and AI workflows.
                  </p>
                </div>
              </div>
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

    <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 md:text-lg">
      <p>
        I’m{" "}
        <span className="font-semibold text-slate-900">
          Arunesh Kumar
        </span>
        , a Product Manager focused on growth, experimentation, and
        digital systems. My work sits at the intersection of product,
        analytics, UX, and business impact.
      </p>

      <p>
        At Sierra Living Concepts, I’ve worked on pricing systems,
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
                 className="fade-section group flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                    Preview
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                    {p.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{p.desc}</p>
                  <p className="mt-4 text-xs font-medium text-slate-400">{p.badge}</p>
                  <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
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
            <div className="fade-section mb-12">
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
                  href="/projects"
                  className="fade-section group flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                        Case Study
                      </p>
                      <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                        {p.title}
                      </h3>
                    </div>
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 transition group-hover:border-slate-300 group-hover:bg-white">
                      <p.Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-slate-500">{p.desc}</p>
                 <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    {p.impact}{" "}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI SYSTEMS ── */}
        <section id="ai-systems" className="border-y border-slate-200 bg-white/70 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="fade-section mb-12">
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
                  className="fade-section group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                      <s.Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
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
            <div className="fade-section mb-12">
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
                  className="fade-section rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                    {i === 0 ? "Current Role" : "Previous Role"}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                    {e.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{e.desc}</p>
                  <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                    {e.role} <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
       </main>
    </>
  );
}
        
