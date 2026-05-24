import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Briefcase,
  CalendarDays,
  Linkedin,
  Mail,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "₹1.5Cr+",
    label: "monthly revenue impact from pricing calculator",
    tint: "from-blue-50 to-indigo-50",
  },
  {
    value: "500+",
    label: "bundle SKUs automated through pricing logic",
    tint: "from-emerald-50 to-teal-50",
  },
  {
    value: "20→14%",
    label: "ATC diversion reduced in checkout flow",
    tint: "from-amber-50 to-orange-50",
  },
  {
    value: "30%",
    label: "conversion improvement in sales quoting",
    tint: "from-violet-50 to-fuchsia-50",
  },
];

const projects = [
  {
    id: "01",
    title: "Checkout Funnel Optimization",
    problem:
      "Users were dropping off between Add-to-Cart and checkout because the flow had friction and data-loss issues.",
    solution:
      "Identified friction with Clarity recordings and BI dashboards, then coordinated UX changes to remove distractions and make the checkout step more structured.",
    impact: [
      "ATC diversion reduced from 20% to 14%",
      "Checkout abandonment improved from 84.09% to 72.77%",
      "~₹2.89Cr monthly revenue impact",
    ],
  },
  {
    id: "02",
    title: "Automated SKU Pricing System",
    problem:
      "500+ bundled SKUs had manual parent-child pricing mismatches, creating operational overhead and revenue leakage.",
    solution:
      "Proposed and drove automated pricing cascade with variant-level child SKU mapping and dynamic price synchronization.",
    impact: [
      "Automated pricing sync across 500+ SKUs",
      "SKU mapping time reduced from 28 min to 7 min",
      "~₹35–40 lakh monthly exposure protected",
    ],
  },
  {
    id: "03",
    title: "Real-Time Pricing Calculator",
    problem:
      "The U.S. sales team waited 1–2 days for custom quotes, slowing customer decisions and reducing conversion speed.",
    solution:
      "Gathered requirements, defined pricing logic, and coordinated with pricing and IT teams to ship a real-time quoting tool.",
    impact: [
      "Quote generation moved to real-time",
      "~30% conversion improvement",
      "~₹1.5Cr additional monthly revenue",
    ],
  },
];

const systems = [
  {
    icon: Sparkles,
    title: "PM Research & Strategy Hub",
    description:
      "An AI-assisted operating system for product work — research synthesis, hypothesis generation, PRD structuring, prioritization, and stakeholder communication.",
    chips: [
      "Funnel Analysis",
      "PRD Writing",
      "Hypothesis Builder",
      "Experiment Planning",
      "Persona Builder",
    ],
    href: "/ai-systems/pm-hub",
  },
  {
    icon: Blocks,
    title: "9-Agent CRO Workflow",
    description:
      "A structured workflow for turning e-commerce data into product decisions — combining customer signals, UX diagnosis, prioritization, and experimentation planning.",
    chips: ["Customer Voice", "UX Review", "Research", "RICE Scoring", "Action Plan"],
    href: "/ai-systems/9-agent-cro",
  },
];

const experience = [
  {
    role: "Product Manager",
    company: "Sierra Living Concepts",
    period: "Nov 2025 – Present",
    bullets: [
      "Drove automated pricing cascade across 500+ bundled furniture SKUs, resolving mismatches and protecting revenue.",
      "Identified checkout friction using Clarity and BI dashboards, then coordinated UX changes that improved conversion.",
      "Shipped a real-time pricing calculator for the U.S. sales team, reducing quote latency from days to live calls.",
    ],
  },
  {
    role: "Management Trainee (Product Strategy)",
    company: "Sierra Living Concepts",
    period: "Jun 2025 – Oct 2025",
    bullets: [
      "Worked across sourcing, pricing, finance, operations, design, and marketing to support launches.",
      "Conducted market and competitor analysis for Kids Furniture expansion in the U.S. market.",
      "Helped introduce new products in Daybeds and supported category growth.",
    ],
  },
  {
    role: "Marketing Intern — Digital Strategy & Growth Analytics",
    company: "BoostGrad",
    period: "Feb 2024 – Nov 2024",
    bullets: [
      "Analyzed user behavior and campaign performance to improve brand reach and engagement insights.",
      "Built dashboards for senior stakeholders to support product positioning and prioritization discussions.",
    ],
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
      {children}
    </span>
  );
}

function PageCard({
  title,
  description,
  href,
  accent = false,
}: {
  title: string;
  description: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group rounded-[1.75rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        accent ? "border-slate-300" : "border-slate-200"
      }`}
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
        Open section
      </div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition group-hover:text-slate-950">
        Explore <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
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

export default function HomePage() {
  return (
    <main>
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

          <div className="relative mx-auto w-full max-w-[560px] lg:translate-x-8">
            <div className="absolute right-10 top-10 h-[420px] w-[420px] rounded-full bg-slate-300/20 blur-3xl" />
            <div className="absolute right-12 top-16 h-[360px] w-[360px] rounded-full bg-indigo-100/40 blur-[90px]" />

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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Impact through product"
            subtitle="Three case studies that show how you think: problem, solution, and measurable outcome."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((item) => (
              <article
                key={item.id}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                      {item.id}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-slate-50 p-3 text-slate-600">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                      Solution
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                  {item.impact.map((point) => (
                    <div
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-slate-700"
                    >
                      <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-slate-500" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="AI Product Systems"
            title="Systems I built using AI to move faster as a PM"
            subtitle="These are the two systems that show leverage: product research and conversion optimization workflows."
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
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.chips.map((chip) => (
                      <Chip key={chip}>{chip}</Chip>
                    ))}
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Where the work happened"
            subtitle="Product systems, growth, and execution across a premium D2C furniture business and earlier marketing analytics work."
          />
          <div className="mt-10 space-y-6">
            {experience.map((job) => (
              <article
                key={job.role}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="grid gap-4 lg:grid-cols-[260px_1fr] lg:items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {job.period}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      {job.role}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {job.company}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-7 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#eef2ff_0%,#f8fafc_100%)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">
                Arunesh Kumar
              </h3>
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
                <Link href="#home" className="block hover:text-slate-950">
                  Home
                </Link>
                <Link href="#projects" className="block hover:text-slate-950">
                  Projects
                </Link>
                <Link href="#systems" className="block hover:text-slate-950">
                  AI Systems
                </Link>
                <Link href="#experience" className="block hover:text-slate-950">
                  Experience
                </Link>
              </div>
            </div>

            <div>
              <h4 className="border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900">
                Connect
              </h4>
              <div className="mt-4 flex flex-wrap gap-3">
                <IconButton href="mailto:aruneshk30@gmail.com" label="Email">
                  <Mail className="h-5 w-5" />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/arunesh-k"
                  label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </IconButton>
                <IconButton href="https://wa.me/919012666192" label="WhatsApp">
                  <MessageCircle className="h-5 w-5" />
                </IconButton>
                <IconButton href="https://calendly.com/your-link" label="Book a meeting">
                  <CalendarDays className="h-5 w-5" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
