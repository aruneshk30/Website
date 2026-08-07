import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MessageSquareWarning,
  Clock,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { FadeIn } from "@/components/fade-in";

// ── SHARED COMPONENTS ─────────────────────────────────────
function StepLabel({ num, title }: { num: number; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-charcoal text-xs font-bold text-cream">
        {num}
      </div>
      <h2 className="text-xl font-bold tracking-tight text-charcoal md:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function ProblemBlock({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-terracotta/15 bg-terracotta/5 p-5 [border-left:3px_solid_#C1694F]">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-terracotta/10 text-terracotta-600">
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div className="text-sm leading-7 text-charcoal/70">{children}</div>
    </div>
  );
}

function PullQuote({ children }: { children: string }) {
  return (
    <blockquote className="my-6 rounded-r-xl border-l-4 border-sage-700 bg-sage-50 px-5 py-4 md:px-6">
      <p className="font-serif text-base italic leading-8 text-sage-800">{children}</p>
    </blockquote>
  );
}

function SprintCard({
  icon,
  title,
  goal,
  stories,
}: {
  icon: string;
  title: string;
  goal: string;
  stories: string[];
}) {
  return (
    <div className="rounded-xl border border-charcoal/10 bg-white overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-cream px-5 py-3 border-b border-charcoal/10">
        <span className="font-semibold text-sm text-charcoal">
          {icon} {title}
        </span>
        <span className="rounded-full bg-sage-50 px-3 py-0.5 text-xs font-semibold text-sage-800">
          Completed
        </span>
      </div>
      <div className="p-5">
        <p className="mb-4 text-sm leading-6 text-charcoal/70">
          <span className="font-semibold text-charcoal">Sprint Goal: </span>
          {goal}
        </p>
        <div className="space-y-2">
          {stories.map((s, i) => (
            <div key={i} className="flex gap-2.5 text-sm text-charcoal/60 leading-6">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
              <span dangerouslySetInnerHTML={{ __html: s }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultCard({
  value,
  label,
  delta,
}: {
  value: string;
  label: string;
  delta: string;
}) {
  return (
    <div className="rounded-xl border border-charcoal/10 bg-white p-5">
      <p className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-charcoal/55">{label}</p>
      <p className="mt-2 text-xs font-semibold text-sage-700">{delta}</p>
    </div>
  );
}

function TimelineItem({
  week,
  event,
  detail,
}: {
  week: string;
  event: string;
  detail: string;
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-cream bg-sand-600 shadow-sm" />
      <p className="text-[10px] font-bold uppercase tracking-widest text-sand-800">{week}</p>
      <p className="mt-0.5 text-sm font-semibold text-charcoal">{event}</p>
      <p className="mt-1 text-sm leading-6 text-charcoal/60">{detail}</p>
    </div>
  );
}

// ── GRAPHICS ────────────────────────────────────────────
function QuoteFlowDiagram() {
  const steps = [
    { icon: MessageSquareWarning, label: "Customer requests custom quote", tone: "bg-dustyblue-50 text-dustyblue-800" },
    { icon: Clock, label: "Pricing team calculates — 1–2 days", tone: "bg-terracotta/10 text-terracotta-600" },
    { icon: Zap, label: "Sales enters config into calculator", tone: "bg-sand text-sand-800" },
    { icon: CheckCircle2, label: "Instant price, live on the call", tone: "bg-sage-50 text-sage-800" },
  ];
  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-6">
      <p className="mb-5 text-xs font-bold uppercase tracking-widest text-charcoal/40">
        The quote flow, before → after
      </p>
      <div className="grid grid-cols-2 gap-3">
        {steps.map((s, i) => (
          <div key={s.label} className={`relative flex flex-col items-center gap-2.5 rounded-xl ${s.tone} p-5 text-center`}>
            <span className="absolute left-3 top-3 text-[10px] font-bold opacity-40">{i + 1}</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/60">
              <s.icon className="h-4 w-4" />
            </div>
            <p className="text-xs font-semibold leading-5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CloseRateBar() {
  const rows = [
    { label: "Before — manual quoting", value: 110, max: 142, color: "bg-terracotta" },
    { label: "After — real-time calculator", value: 142, max: 142, color: "bg-sage-600" },
  ];
  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-6">
      <p className="mb-5 text-xs font-bold uppercase tracking-widest text-charcoal/40">
        Custom orders closed / month
      </p>
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-1.5 flex items-baseline justify-between">
              <span className="text-sm font-medium text-charcoal/70">{r.label}</span>
              <span className="text-sm font-bold text-charcoal">{r.value}</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-charcoal/5">
              <div className={`h-full rounded-full ${r.color}`} style={{ width: `${(r.value / r.max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold text-sage-700">+32 orders/month — ~30% close-rate improvement</p>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────
export default function CaseStudy3() {
  return (
    <main className="min-h-screen bg-cream">

      {/* Hero */}
      <section className="px-4 pb-14 pt-16 md:px-6 md:pt-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-2 text-sm text-charcoal/55 transition hover:text-terracotta"
            >
              <ArrowLeft className="h-4 w-4" /> All Case Studies
            </Link>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-sand-800">
                    Case Study 03
                  </span>
                  <span className="rounded-full bg-charcoal/5 px-3 py-1 text-xs font-semibold text-charcoal/60">
                    Internal Tooling · Sales Enablement
                  </span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-charcoal md:text-5xl">
                  Real-Time Pricing{" "}
                  <span className="font-serif font-normal text-sand-800">
                    Calculator for U.S. Sales
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-base leading-8 text-charcoal/65">
                  How a 1–2 day quote turnaround was killing custom furniture
                  conversions — and the internal tool that generated ₹1.5 crore in
                  additional monthly revenue.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    { label: "Company", value: "Sierra Living Concepts" },
                    { label: "Timeline", value: "Jun 2025 – Sep 2025" },
                    { label: "My Role", value: "MT → Product Manager" },
                    { label: "Teams", value: "US Sales · Pricing · IT" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-charcoal/10 bg-white px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">{m.label}</p>
                      <p className="mt-1 text-sm font-semibold text-charcoal">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <QuoteFlowDiagram />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Bar */}
      <section className="border-y border-charcoal/10 bg-white px-4 py-6 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: "~₹1.5Cr", label: "Additional monthly revenue", color: "text-sand-800" },
            { value: "~30%", label: "Conversion rate improvement", color: "text-sage-700" },
            { value: "1–2d→0", label: "Quote turnaround eliminated", color: "text-dustyblue-800" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className={`text-2xl font-bold tracking-tight ${s.color} md:text-3xl`}>{s.value}</p>
              <p className="mt-1 text-xs text-charcoal/55">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-6xl space-y-14 px-4 py-14 md:px-6 lg:px-8">

        {/* 1 Background */}
        <FadeIn>
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <StepLabel num={1} title="The Background" />
              <div className="space-y-4 text-sm leading-7 text-charcoal/70">
                <p>
                  Sierra Living Concepts sells custom furniture to the U.S. market —
                  pieces configurable by{" "}
                  <strong className="text-charcoal">
                    dimensions, materials, fabrics, and finishes
                  </strong>
                  . A significant portion of revenue comes from custom order requests
                  handled by the U.S. customer support and sales team.
                </p>
                <p>
                  During my Management Trainee period, while coordinating with
                  operations and finance teams, I noticed the U.S. sales team
                  frequently flagged a recurring issue:{" "}
                  <strong className="text-charcoal">
                    custom quote requests were taking 1–2 days to close
                  </strong>
                  , and a meaningful percentage of customers didn't wait.
                </p>
              </div>
            </div>
            <div className="lg:pt-12">
              <PullQuote>
                "A customer calls, excited about a custom sectional. We say 'we'll
                email you a quote tomorrow.' By tomorrow, they've bought from
                Article or Crate & Barrel."
              </PullQuote>
            </div>
          </section>
        </FadeIn>

        {/* 2 Root Cause */}
        <FadeIn>
          <section>
            <StepLabel num={2} title="Understanding the Root Cause" />
            <p className="mb-5 text-sm leading-7 text-charcoal/70">
              I mapped the entire custom quote process end-to-end by interviewing
              the sales team and pricing team. The problem had three layers:
            </p>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              <ProblemBlock icon={MessageSquareWarning}>
                <strong className="text-charcoal">Layer 1 — Manual Calculation Dependency: </strong>
                Every custom quote required the pricing team to manually calculate
                the price. There was no tool — just spreadsheets and mental math.
              </ProblemBlock>
              <ProblemBlock icon={Clock}>
                <strong className="text-charcoal">Layer 2 — Async Communication Loop: </strong>
                Sales → Pricing → Sales → Customer was a chain of emails and
                messages. Even a 30-minute response meant the customer was already off the phone.
              </ProblemBlock>
              <ProblemBlock icon={MessageSquareWarning}>
                <strong className="text-charcoal">Layer 3 — Decision Delay = Drop-off: </strong>
                Premium buyers spending $5,000–$6,000 on custom pieces are
                comparison shopping. Every hour of delay was a competitor's opportunity.
              </ProblemBlock>
            </div>
          </section>
        </FadeIn>

        {/* 3 Requirements */}
        <FadeIn>
          <section>
            <StepLabel num={3} title="Requirements Definition" />
            <p className="mb-5 text-sm leading-7 text-charcoal/70">
              I gathered requirements through structured sessions with the U.S.
              sales team and pricing team — understanding exactly how they
              calculated quotes manually, what variables were involved, and what
              edge cases existed:
            </p>
            <div className="overflow-x-auto rounded-xl border border-charcoal/10">
              <table className="w-full min-w-[640px] text-sm">
                <thead className="bg-charcoal text-cream">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wide">Requirement</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wide">Description</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold tracking-wide">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 bg-white">
                  {[
                    { req: "Real-Time Price Calculation", desc: "Sales agent enters config — calculator outputs exact price instantly, no pricing team dependency", p: "High" },
                    { req: "All Custom Variables Supported", desc: "Cover all configurable parameters: dimensions, material, finish, quantity, delivery zone", p: "High" },
                    { req: "Pricing Logic Accuracy", desc: "Output must match pricing team's manual methodology exactly — validated with 20+ test cases", p: "High" },
                    { req: "Quote Generation", desc: "Calculator generates a shareable quote summary sendable to customer during or after the call", p: "Medium" },
                    { req: "Sales Team Usability", desc: "Interface usable by sales agents during a live call — simple inputs, instant output, no training required", p: "Medium" },
                    { req: "Pricing Update Mechanism", desc: "When material costs change, pricing logic updatable by pricing team without IT involvement", p: "Low" },
                  ].map((r) => (
                    <tr key={r.req} className="hover:bg-cream">
                      <td className="px-5 py-3.5 font-semibold text-charcoal">{r.req}</td>
                      <td className="px-5 py-3.5 text-charcoal/65">{r.desc}</td>
                      <td className="px-5 py-3.5">
                        <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                          r.p === "High" ? "bg-terracotta/10 text-terracotta-600" :
                          r.p === "Medium" ? "bg-sand text-sand-800" :
                          "bg-sage-50 text-sage-800"
                        }`}>
                          {r.p}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </FadeIn>

        {/* 4 Sprints */}
        <FadeIn>
          <section>
            <StepLabel num={4} title="Sprint Planning & Execution" />
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              <SprintCard
                icon="📋"
                title="Sprint 1 — Pricing Logic Documentation"
                goal="Fully document the pricing team's manual calculation methodology — every variable, every formula, every edge case — so IT can build it accurately."
                stories={[
                  "As a <strong>developer</strong>, I need a complete pricing logic specification covering all product types, materials, dimensions before writing any code",
                  "As a <strong>pricing team member</strong>, I want to review and sign off on the documented logic before build begins",
                  "As a <strong>PM</strong>, I want a list of 20+ test cases with expected outputs to use for QA validation",
                ]}
              />
              <SprintCard
                icon="🔨"
                title="Sprint 2 — Calculator Build"
                goal="Build the calculator tool with all required input variables and real-time price output. Sales team usability testing in the last 2 days of sprint."
                stories={[
                  "As a <strong>sales agent</strong>, I can input a custom configuration and get an accurate price in under 10 seconds while on a live call",
                  "As a <strong>sales agent</strong>, the interface is simple enough that I don't need documentation while using it",
                  "As a <strong>pricing manager</strong>, calculated prices match my manual calculations for all standard configurations",
                ]}
              />
              <SprintCard
                icon="✅"
                title="Sprint 3 — QA, Validation & Deployment"
                goal="Run all 20+ test cases, fix any pricing logic errors, get pricing team sign-off, train U.S. sales team, and deploy."
                stories={[
                  "As a <strong>PM</strong>, I want to validate calculator output against manual pricing for all 20+ test cases with zero tolerance for errors on high-frequency configs",
                  "As a <strong>US sales team member</strong>, I want a 30-minute walkthrough before go-live so I'm confident on real customer calls",
                  "As a <strong>pricing manager</strong>, I want a simple way to update material cost inputs when supplier prices change without raising an IT ticket",
                ]}
              />
            </div>
          </section>
        </FadeIn>

        {/* 5 Timeline + Close Rate Bar */}
        <FadeIn>
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <StepLabel num={5} title="Project Timeline" />
              <div className="relative space-y-6 pl-4">
                <div className="absolute left-4 top-2 bottom-2 w-px bg-charcoal/10" />
                <TimelineItem
                  week="Week 1–2"
                  event="Problem Identification & Stakeholder Alignment"
                  detail="Mapped the full custom quote process, quantified delay impact, aligned US sales, pricing, and IT teams on the solution approach."
                />
                <TimelineItem
                  week="Week 3–4"
                  event="Pricing Logic Documentation"
                  detail="Worked with pricing team to document all calculation formulas, variables, and edge cases. Compiled 20+ QA test cases with expected outputs."
                />
                <TimelineItem
                  week="Week 5–7"
                  event="Build & Iteration"
                  detail="IT team built the calculator. Two rounds of logic corrections identified during internal testing. Sales team usability testing conducted in week 7."
                />
                <TimelineItem
                  week="Week 8"
                  event="QA, Sign-off & Deployment"
                  detail="All 20+ test cases passed. Pricing team signed off on logic accuracy. US sales team trained. Tool deployed to production."
                />
                <TimelineItem
                  week="Month 2–3 Post-Launch"
                  event="Impact Measurement"
                  detail="Custom order closures increased from ~110 to ~142/month. Pricing team no longer on the critical path for any custom quote."
                />
              </div>
            </div>
            <div className="lg:pt-12">
              <CloseRateBar />
            </div>
          </section>
        </FadeIn>

        {/* 6 Results */}
        <FadeIn>
          <section>
            <StepLabel num={6} title="Results" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <ResultCard value="~₹1.5Cr" label="Additional monthly revenue (32 incremental orders × $5,500 AOV × ₹85)" delta="↑ From baseline monthly revenue" />
              <ResultCard value="~30%" label="Improvement in custom order close rate (110 → 142 orders/month)" delta="32 additional closed orders/month" />
              <ResultCard value="1–2d→0" label="Quote turnaround — now generated real-time during customer calls" delta="Pricing team removed from quote critical path" />
              <ResultCard value="100%" label="Custom quotes generated without pricing team dependency post-launch" delta="Full sales team autonomy on custom pricing" />
            </div>
          </section>
        </FadeIn>

        {/* 7 Learnings */}
        <FadeIn>
          <section>
            <div className="rounded-2xl bg-charcoal p-6 md:p-8">
              <h2 className="mb-6 text-xl font-bold text-cream">What I Learned</h2>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                {[
                  { n: "1", title: "The biggest conversion lever is often in the sales process, not the product UI.", body: "We spent time optimizing PDPs and checkout — rightfully — but a broken sales ops process was losing premium customers at the very last mile. Internal tooling can have higher ROI than customer-facing features." },
                  { n: "2", title: "Requirements quality determines build quality.", body: "The most important sprint was Sprint 1 — documenting the pricing logic. Every error found during QA traced back to an edge case not captured in documentation. Investing time upfront saves multiples in rework." },
                  { n: "3", title: "Speed is a feature for high-consideration purchases.", body: "Premium furniture buyers have high intent but fragile attention. A competitor with a faster, more confident sales experience wins. Removing friction from the sales process is product work." },
                ].map((l) => (
                  <div key={l.n} className="flex gap-4">
                    <span className="mt-0.5 text-2xl font-bold text-terracotta">{l.n}</span>
                    <div>
                      <p className="font-semibold text-cream">{l.title}</p>
                      <p className="mt-1 text-sm leading-7 text-cream/60">{l.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Navigation */}
        <FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/case-studies/checkout-funnel"
              className="group flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4 flex-shrink-0 text-terracotta transition group-hover:-translate-x-1" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">Previous</p>
                <p className="mt-0.5 text-sm font-bold text-charcoal">02 — Checkout Funnel</p>
              </div>
            </Link>
            <Link
              href="/case-studies"
              className="group flex items-center justify-between rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-md"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">All Case Studies</p>
                <p className="mt-0.5 text-sm font-bold text-charcoal">View all three →</p>
              </div>
              <ArrowRight className="h-4 w-4 flex-shrink-0 text-terracotta transition group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
