import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ── SHARED COMPONENTS ─────────────────────────────────────
function StepLabel({ num, title }: { num: number; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
        {num}
      </div>
      <h2 className="text-xl font-bold tracking-tight text-slate-950 md:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function ProblemBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-red-100 bg-red-50 p-5 [border-left:3px_solid_#ef4444]">
      <div className="text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

function SolutionBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5 [border-left:3px_solid_#10b981]">
      <div className="text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

function PullQuote({ children }: { children: string }) {
  return (
    <blockquote className="my-6 rounded-r-xl border-l-4 border-indigo-400 bg-indigo-50 px-6 py-4">
      <p className="text-base italic leading-8 text-indigo-900">{children}</p>
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
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between bg-slate-50 px-5 py-3 border-b border-slate-200">
        <span className="font-semibold text-sm text-slate-900">
          {icon} {title}
        </span>
        <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-semibold text-emerald-700">
          Completed
        </span>
      </div>
      <div className="p-5">
        <p className="mb-4 text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-900">Sprint Goal: </span>
          {goal}
        </p>
        <div className="space-y-2">
          {stories.map((s, i) => (
            <div key={i} className="flex gap-2.5 text-sm text-slate-500 leading-6">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
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
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-3xl font-bold tracking-tight text-slate-950">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-xs font-semibold text-emerald-600">{delta}</p>
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
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-indigo-500 shadow-sm shadow-indigo-200" />
      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">{week}</p>
      <p className="mt-0.5 text-sm font-semibold text-slate-900">{event}</p>
      <p className="mt-1 text-sm leading-6 text-slate-500">{detail}</p>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────
export default function CaseStudy3() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-slate-950 px-4 pb-16 pt-28 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/case-studies"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All Case Studies
          </Link>

          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-indigo-900/60 px-3 py-1 text-xs font-semibold text-indigo-300">
              Case Study 03
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
              Internal Tooling · Sales Enablement
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Real-Time Pricing{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Calculator for U.S. Sales
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            How a 1–2 day quote turnaround was killing custom furniture
            conversions — and the internal tool that generated ₹1.5 crore in
            additional monthly revenue.
          </p>

          {/* Meta */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Company", value: "Sierra Living Concepts" },
              { label: "Timeline", value: "Jun 2025 – Sep 2025" },
              { label: "My Role", value: "MT → Product Manager" },
              { label: "Teams", value: "US Sales · Pricing · IT" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {m.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Bar */}
      <section className="border-b border-slate-200 bg-white px-4 py-6 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4">
          {[
            { value: "~₹1.5Cr", label: "Additional monthly revenue", color: "text-indigo-600" },
            { value: "~30%", label: "Conversion rate improvement", color: "text-emerald-600" },
            { value: "1–2d→0", label: "Quote turnaround eliminated", color: "text-blue-600" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className={`text-2xl font-bold tracking-tight ${s.color} md:text-3xl`}>
                {s.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-4xl space-y-14 px-4 py-14 md:px-6 lg:px-8">

        {/* 1 Background */}
        <section>
          <StepLabel num={1} title="The Background" />
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Sierra Living Concepts sells custom furniture to the U.S. market —
              pieces configurable by{" "}
              <strong className="text-slate-900">
                dimensions, materials, fabrics, and finishes
              </strong>
              . A significant portion of revenue comes from custom order requests
              handled by the U.S. customer support and sales team.
            </p>
            <p>
              During my Management Trainee period, while coordinating with
              operations and finance teams, I noticed the U.S. sales team
              frequently flagged a recurring issue:{" "}
              <strong className="text-slate-900">
                custom quote requests were taking 1–2 days to close
              </strong>
              , and a meaningful percentage of customers didn't wait.
            </p>
          </div>
          <PullQuote>
            "A customer calls, excited about a custom sectional. We say 'we'll
            email you a quote tomorrow.' By tomorrow, they've bought from
            Article or Crate & Barrel."
          </PullQuote>
        </section>

        {/* 2 Root Cause */}
        <section>
          <StepLabel num={2} title="Understanding the Root Cause" />
          <p className="mb-5 text-sm leading-7 text-slate-600">
            I mapped the entire custom quote process end-to-end by interviewing
            the sales team and pricing team. The problem had three layers:
          </p>
          <div className="space-y-3">
            <ProblemBlock>
              <strong className="text-slate-900">Layer 1 — Manual Calculation Dependency: </strong>
              Every custom quote required the pricing team to manually calculate
              the price based on dimensions, material, finish, and
              customizations. There was no tool — just spreadsheets and mental
              math. The pricing team was a{" "}
              <strong className="text-slate-900">
                bottleneck on every single custom request
              </strong>
              .
            </ProblemBlock>
            <ProblemBlock>
              <strong className="text-slate-900">Layer 2 — Async Communication Loop: </strong>
              Sales → Pricing → Sales → Customer was a chain of emails and
              messages. Even a 30-minute response from pricing meant the
              customer was already off the phone. The async nature of the
              process built in delay by design.
            </ProblemBlock>
            <ProblemBlock>
              <strong className="text-slate-900">Layer 3 — Decision Delay = Drop-off: </strong>
              Premium furniture buyers — high-income U.S. homeowners spending
              $5,000–$6,000 on custom pieces — are comparison shopping. Every
              hour of delay was a competitor's opportunity. Monthly custom
              orders were sitting at ~110 closed with significant untapped
              volume.
            </ProblemBlock>
          </div>
        </section>

        {/* 3 Requirements */}
        <section>
          <StepLabel num={3} title="Requirements Definition" />
          <p className="mb-5 text-sm leading-7 text-slate-600">
            I gathered requirements through structured sessions with the U.S.
            sales team and pricing team — understanding exactly how they
            calculated quotes manually, what variables were involved, and what
            edge cases existed:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold tracking-wide">Requirement</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold tracking-wide">Description</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold tracking-wide">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  { req: "Real-Time Price Calculation", desc: "Sales agent enters config — calculator outputs exact price instantly, no pricing team dependency", p: "High" },
                  { req: "All Custom Variables Supported", desc: "Cover all configurable parameters: dimensions, material, finish, quantity, delivery zone", p: "High" },
                  { req: "Pricing Logic Accuracy", desc: "Output must match pricing team's manual methodology exactly — validated with 20+ test cases", p: "High" },
                  { req: "Quote Generation", desc: "Calculator generates a shareable quote summary sendable to customer during or after the call", p: "Medium" },
                  { req: "Sales Team Usability", desc: "Interface usable by sales agents during a live call — simple inputs, instant output, no training required", p: "Medium" },
                  { req: "Pricing Update Mechanism", desc: "When material costs change, pricing logic updatable by pricing team without IT involvement", p: "Low" },
                ].map((r) => (
                  <tr key={r.req} className="hover:bg-slate-50">
                    <td className="px-5 py-3.5 font-semibold text-slate-900">{r.req}</td>
                    <td className="px-5 py-3.5 text-slate-600">{r.desc}</td>
                    <td className="px-5 py-3.5">
                      <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                        r.p === "High" ? "bg-red-100 text-red-700" :
                        r.p === "Medium" ? "bg-amber-100 text-amber-700" :
                        "bg-emerald-100 text-emerald-700"
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

        {/* 4 Sprints */}
        <section>
          <StepLabel num={4} title="Sprint Planning & Execution" />
          <div className="space-y-3">
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

        {/* 5 Timeline */}
        <section>
          <StepLabel num={5} title="Project Timeline" />
          <div className="relative space-y-6 pl-4">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200" />
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
        </section>

        {/* 6 Results */}
        <section>
          <StepLabel num={6} title="Results" />
          <div className="grid grid-cols-2 gap-3">
            <ResultCard
              value="~₹1.5Cr"
              label="Additional monthly revenue (32 incremental orders × $5,500 AOV × ₹85)"
              delta="↑ From baseline monthly revenue"
            />
            <ResultCard
              value="~30%"
              label="Improvement in custom order close rate (110 → 142 orders/month)"
              delta="32 additional closed orders/month"
            />
            <ResultCard
              value="1–2d→0"
              label="Quote turnaround — now generated real-time during customer calls"
              delta="Pricing team removed from quote critical path"
            />
            <ResultCard
              value="100%"
              label="Custom quotes generated without pricing team dependency post-launch"
              delta="Full sales team autonomy on custom pricing"
            />
          </div>
        </section>

        {/* 7 Learnings */}
        <section>
          <div className="rounded-2xl bg-slate-950 p-8">
            <h2 className="mb-6 text-xl font-bold text-white">What I Learned</h2>
            <div className="space-y-5">
              {[
                {
                  n: "1",
                  title: "The biggest conversion lever is often in the sales process, not the product UI.",
                  body: "We spent time optimizing PDPs and checkout — rightfully — but a broken sales ops process was losing premium customers at the very last mile. Internal tooling can have higher ROI than customer-facing features.",
                },
                {
                  n: "2",
                  title: "Requirements quality determines build quality.",
                  body: "The most important sprint was Sprint 1 — documenting the pricing logic. Every error found during QA traced back to an edge case not captured in documentation. Investing time upfront saves multiples in rework.",
                },
                {
                  n: "3",
                  title: "Speed is a feature for high-consideration purchases.",
                  body: "Premium furniture buyers have high intent but fragile attention. A competitor with a faster, more confident sales experience wins. Removing friction from the sales process is product work.",
                },
              ].map((l) => (
                <div key={l.n} className="flex gap-4">
                  <span className="mt-0.5 text-2xl font-bold text-indigo-400">{l.n}</span>
                  <div>
                    <p className="font-semibold text-white">{l.title}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-400">{l.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/case-studies/checkout-funnel"
            className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4 flex-shrink-0 text-indigo-500 transition group-hover:-translate-x-1" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Previous</p>
              <p className="mt-0.5 text-sm font-bold text-slate-950">02 — Checkout Funnel</p>
            </div>
          </Link>
          <Link
            href="/case-studies"
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">All Case Studies</p>
              <p className="mt-0.5 text-sm font-bold text-slate-950">View all three →</p>
            </div>
            <ArrowRight className="h-4 w-4 flex-shrink-0 text-indigo-500 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
