import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Briefcase,
  CalendarDays,
  ChevronRight,
  Linkedin,
  Mail,
  MessageCircle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const stats = [
  {
    value: "₹1.5Cr+",
    label: "monthly revenue impact",
    tint: "from-blue-50 to-indigo-50",
  },
  {
    value: "500+",
    label: "bundle SKUs automated",
    tint: "from-emerald-50 to-teal-50",
  },
  {
    value: "20→14%",
    label: "ATC diversion reduced",
    tint: "from-amber-50 to-orange-50",
  },
  {
    value: "30%",
    label: "sales quoting improvement",
    tint: "from-violet-50 to-fuchsia-50",
  },
];

const projectPreviews = [
  {
    title: "Checkout Funnel Optimization",
    summary:
      "Reduced friction in checkout using behavioral analysis, Clarity recordings, and UX improvements.",
    impact: "ATC diversion 20% → 14%",
  },
  {
    title: "Automated SKU Pricing System",
    summary:
      "Automated pricing cascade for 500+ bundled SKUs with variant-level mapping and sync logic.",
    impact: "~₹35–40 lakh monthly exposure protected",
  },
  {
    title: "Real-Time Pricing Calculator",
    summary:
      "Built a live quoting flow for U.S. sales to reduce quoting time from days to real-time.",
    impact: "~₹1.5Cr additional monthly revenue",
  },
];

const systems: {
  icon: LucideIcon;
  title: string;
  summary: string;
  href: string;
}[] = [
  {
    icon: Sparkles,
    title: "PM Research & Strategy Hub",
    summary:
      "AI-assisted product operating system for research, PRDs, prioritization, and stakeholder communication.",
    href: "/ai-systems/pm-hub",
  },
  {
    icon: Blocks,
    title: "9-Agent CRO Workflow",
    summary:
      "Multi-agent workflow for conversion analysis, UX diagnosis, and experimentation planning.",
    href: "/ai-systems/9-agent-cro",
  },
];

const experience = [
  {
    title: "Sierra Living Concepts",
    summary:
      "Product Manager driving pricing systems, checkout improvements, and real-time sales tooling.",
    href: "/experience",
  },
  {
    title: "BoostGrad",
    summary:
      "Digital strategy and growth analytics work focused on insights, dashboards, and engagement.",
    href: "/experience",
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
    >
      {children}
    </a>
  );
}

function PreviewCard({
  title,
  summary,
  href,
  badge,
}: {
  title: string;
  summary: string;
  href: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
        Preview
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{summary}</p>
      {badge ? (
        <p className="mt-5 text-sm font-medium text-slate-500">{badge}</p>
      ) : null}
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
        Open page <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_42%,#f8fafc_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_24%),radial-gradient(circle_at_center,_rgba(148,163,184,0.08),_transparent_35%)]" />
        <div className="absolute right-[10%] top-20 h-[420px] w-[420px] rounded-full bg-slate-300/20 blur-[100px]" />
        <div className="absolute left-[12%] top-32 h-56 w-56 rounded-full bg-indigo-200/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-500 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Arunesh Kumar
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
              Product Manager
              <span className="text-slate-400"> | </span>
              <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-blue-500 bg-clip-text text-transparent">
                Growth & Digital Strategy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              I build revenue-driving product experiences across e-commerce
              systems, experimentation, and AI-powered workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-800 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]"
              >
                View Work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/connect"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Connect
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br ${stat.tint} p-5 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl`}
                >
                  <p className="text-2xl font-semibold tracking-tight text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* HERO IMAGE WITH SUBTLE ANIMATION */}
          <div className="relative mx-auto w-full max-w-[560px] lg:translate-x-8">
            <div className="absolute right-10 top-10 h-[420px] w-[420px] rounded-full bg-slate-300/20 blur-3xl" />
            <div className="absolute right-12 top-16 h-[360px] w-[360px] rounded-full bg-indigo-100/40 blur-[90px]" />

            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_72%_28%,rgba(99,102,241,0.18),transparent_24%),radial-gradient(circle_at_35%_75%,rgba(59,130,246,0.14),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.24),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.55)_50%,transparent_100%)] opacity-30 animate-pulse" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle,_rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:18px_18px] opacity-30" />

            <div className="absolute right-8 top-8 h-[380px] w-[380px] rounded-full border border-indigo-200/70 animate-[spin_36s_linear_infinite]" />
            <div className="absolute right-2 top-2 h-[460px] w-[460px] rounded-full border border-slate-200/70 animate-[spin_52s_linear_infinite] [animation-direction:reverse]" />
            <div className="absolute right-6 top-20 h-3 w-3 rounded-full bg-indigo-400/70 shadow-[0_0_30px_rgba(99,102,241,0.8)] animate-pulse" />
            <div className="absolute left-10 top-28 h-2 w-2 rounded-full bg-sky-400/70 shadow-[0_0_20px_rgba(56,189,248,0.8)] animate-pulse" />

            <div className="relative z-10">
              <Image
                src="/profile.png"
                alt="Arunesh Kumar"
                width={1272}
                height={1450}
                priority
                className="w-full object-contain drop-shadow-[0_35px_40px_rgba(15,23,42,0.18)]"
              />
            </div>

            <div className="absolute bottom-6 left-0 z-20 rounded-[1.5rem] border border-slate-200 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <p className="text-sm font-semibold text-slate-900">
                Product · Growth · Systems
              </p>
              <p className="mt-1 max-w-[260px] text-sm leading-6 text-slate-600">
                Building revenue-driving product experiences and AI-powered
                workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE SPACES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Three spaces, one story"
            subtitle="Dedicated pages for projects, AI systems, and experience — the homepage only gives a preview."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <PreviewCard
              href="/work"
              title="Projects"
              summary="Quick glimpse of case studies. Open the page to see the full problem, solution, and impact story."
              badge="Checkout • Pricing • Calculator"
            />
            <PreviewCard
              href="/ai-systems"
              title="AI Systems"
              summary="PM Hub and 9-Agent CRO Workflow. Open the page to enter each system."
              badge="Research hub • CRO workflow"
            />
            <PreviewCard
              href="/experience"
              title="Experience"
              summary="Short preview of Sierra and BoostGrad. Open the page for the full journey."
              badge="Sierra • BoostGrad"
            />
          </div>
        </div>
      </section>

      {/* PROJECT PREVIEW */}
      <section className="bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Impact through product"
            subtitle="A short glimpse here — click into the Work page for the full case studies."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projectPreviews.map((item) => (
              <Link
                key={item.title}
                href="/work"
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                      Preview
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-600 transition group-hover:border-slate-300 group-hover:bg-white group-hover:text-slate-950">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                  {item.impact} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI SYSTEMS PREVIEW */}
      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="AI systems built for leverage"
            subtitle="Two systems, two deep-dive pages. The homepage stays light and points people to the right place."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {systems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                    Open system <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Experience snapshot"
            subtitle="A quick preview here — the full timeline lives on the Experience page."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experience.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Preview
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                  Open experience <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#eef2ff_0%,#f8fafc_100%)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-xl backdrop-blur md:grid-cols-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Arunesh Kumar</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Product Manager building systems that improve growth, experience,
                and measurable business outcomes.
              </p>
            </div>

            <div>
              <h4 className="border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900">
                Pages
              </h4>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <Link href="#home" className="block hover:text-slate-950">Home</Link>
                <Link href="#projects" className="block hover:text-slate-950">Projects</Link>
                <Link href="#systems" className="block hover:text-slate-950">AI Systems</Link>
                <Link href="#experience" className="block hover:text-slate-950">Experience</Link>
              </div>
            </div>

            <div>
              <h4 className="border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900">
                Resources
              </h4>
              <div className="mt-4 space-y-4 text-sm text-slate-600">
                <a href="/Arunesh_Kumar_Resume.pdf" target="_blank" rel="noreferrer" className="block transition hover:text-indigo-600">Resume →</a>
                <a href="mailto:aruneshk30@gmail.com" className="block transition hover:text-indigo-600">aruneshk30@gmail.com</a>
              </div>
            </div>

            <div>
              <h4 className="border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900">Connect</h4>
              <div className="mt-4 flex flex-wrap gap-3">
                <IconButton href="mailto:aruneshk30@gmail.com" label="Email"><Mail className="h-5 w-5" /></IconButton>
                <IconButton href="https://linkedin.com/in/arunesh-k" label="LinkedIn"><Linkedin className="h-5 w-5" /></IconButton>
                <IconButton href="https://wa.me/919012666192" label="WhatsApp"><MessageCircle className="h-5 w-5" /></IconButton>
                <IconButton href="https://calendly.com/your-link" label="Book a meeting"><CalendarDays className="h-5 w-5" /></IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
