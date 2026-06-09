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

function InsightBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-amber-100 bg-amber-50 p-5 [border-left:3px_solid_#f59e0b]">
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

// ── PAGE ──────────────────────────────────────────────────
export default function CaseStudy1() {
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
              Case Study 01
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
              Platform & Systems · Pricing Automation
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Automated SKU Pricing{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              & Mapping System
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            How I identified a $500K+ pricing exposure risk buried in 500+
            product SKUs — and drove an end-to-end automated solution from zero.
          </p>

          {/* Meta */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Company", value: "Sierra Living Concepts" },
              { label: "Timeline", value: "Nov 2025 – Feb 2026" },
              { label: "My Role", value: "Product Manager" },
              { label: "Teams", value: "IT · Pricing · Finance · Ops" },
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
            { value: "₹35–40L", label: "Monthly revenue protected", color: "text-indigo-600" },
            { value: "28→7 min", label: "SKU mapping time reduced", color: "text-emerald-600" },
            { value: "500+", label: "SKUs fully automated", color: "text-blue-600" },
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
              Sierra Living Concepts sells premium furniture to the U.S. market
              — with an average order value of{" "}
              <strong className="text-slate-900">$3,500–$4,000</strong>. A
              significant portion of the catalog consists of{" "}
              <strong className="text-slate-900">bundled set SKUs</strong> —
              bedroom sets, dining sets, living room combinations — where a
              single parent SKU contains multiple child SKUs like a bed, two
              nightstands, and a dresser.
            </p>
            <p>
              During my early weeks as a Management Trainee, while working
              closely with the pricing and finance teams on product launches, I
              noticed something that didn't add up. Set product prices on the
              website weren't reflecting recent changes made to individual
              component prices.
            </p>
          </div>
          <PullQuote>
            "The bedroom set on the website was priced at what it cost 6 months
            ago — but every component inside it had been repriced since then.
            Nobody noticed."
          </PullQuote>
        </section>

        {/* 2 Problem */}
        <section>
          <StepLabel num={2} title="Discovering the Real Problem" />
          <p className="mb-5 text-sm leading-7 text-slate-600">
            I started digging. What I found was a four-layered problem that had
            been silently compounding for months:
          </p>
          <div className="space-y-3">
            <ProblemBlock>
              <strong className="text-slate-900">Problem 1 — Pricing Drift: </strong>
              Parent set SKUs were priced manually and never updated when child
              SKU prices changed. Mismatches had accumulated to{" "}
              <strong className="text-slate-900">$600–$1,000+ per SKU</strong>.
              With 25–30 bedroom set orders per month at ~$3,500 AOV, this was
              significant revenue exposure sitting in plain sight.
            </ProblemBlock>
            <ProblemBlock>
              <strong className="text-slate-900">Problem 2 — Manual Operations: </strong>
              Every time a set order came in, the operations team had to{" "}
              <strong className="text-slate-900">
                manually identify which child SKUs
              </strong>{" "}
              belonged to that set. No structured mapping existed. Wrong variant
              = wrong fulfillment.
            </ProblemBlock>
            <ProblemBlock>
              <strong className="text-slate-900">Problem 3 — No Variant Intelligence: </strong>
              Furniture has complex variants — fabric vs leather, queen vs king,
              walnut vs oak. The system had no way to map which variant of a
              child SKU corresponded to which variant of the parent set SKU.
            </ProblemBlock>
            <ProblemBlock>
              <strong className="text-slate-900">Problem 4 — Scaling Risk: </strong>
              With 500+ set SKUs across multiple categories, manual maintenance
              was not scalable. Every price update was a potential error.
            </ProblemBlock>
          </div>
        </section>

        {/* 3 Requirements */}
        <section>
          <StepLabel num={3} title="Requirements Definition" />
          <p className="mb-5 text-sm leading-7 text-slate-600">
            I translated the four problem areas into functional requirements,
            prioritized by business impact and technical dependency:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold tracking-wide">
                    Requirement
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-semibold tracking-wide">
                    Description
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-semibold tracking-wide">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  {
                    req: "Dynamic Price Cascade",
                    desc: "Child SKU price changes auto-update all parent set SKUs immediately",
                    p: "High",
                  },
                  {
                    req: "Variant-Level Mapping",
                    desc: "Map child SKU variants to corresponding parent set variants",
                    p: "High",
                  },
                  {
                    req: "New Set Auto-Pricing",
                    desc: "New set SKUs auto-calculate price from child component prices",
                    p: "High",
                  },
                  {
                    req: "Mapping Interface + Validation",
                    desc: "Internal tool with error checks preventing incorrect mappings",
                    p: "Medium",
                  },
                  {
                    req: "Last Mapping Reuse",
                    desc: "Pre-populate new variant with last mapping data to reduce effort",
                    p: "Medium",
                  },
                  {
                    req: "Order Fulfillment Auto-ID",
                    desc: "Set orders auto-identify correct child SKUs for ops team",
                    p: "Medium",
                  },
                  {
                    req: "Bundle Discount Logic",
                    desc: "Support dynamic sale pricing and bundle discounts on cascade price",
                    p: "Low",
                  },
                ].map((r) => (
                  <tr key={r.req} className="hover:bg-slate-50">
                    <td className="px-5 py-3.5 font-semibold text-slate-900">
                      {r.req}
                    </td>
                    <td className="px-5 py-3.5 text-slate-600">{r.desc}</td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                          r.p === "High"
                            ? "bg-red-100 text-red-700"
                            : r.p === "Medium"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
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
          <p className="mb-5 text-sm leading-7 text-slate-600">
            We ran the project in four two-week sprints, coordinating between
            IT, pricing, and catalog teams with regular check-ins and mid-build
            adjustments.
          </p>
          <div className="space-y-3">
            <SprintCard
              icon="🏁"
              title="Sprint 1 — Discovery & Architecture"
              goal="Fully scope the problem, align all stakeholders on solution approach, and define the data model for parent-child SKU relationships."
              stories={[
                "As a <strong>pricing manager</strong>, I want to see which set SKUs have pricing mismatches so I can understand the full exposure",
                "As a <strong>developer</strong>, I need a clear data model showing how parent and child SKUs relate at variant level",
                "As a <strong>PM</strong>, I want all team leads aligned on requirements before any build begins",
              ]}
            />
            <SprintCard
              icon="⚙️"
              title="Sprint 2 — Core Pricing Cascade Build"
              goal="Build and test the backend pricing cascade — when a child SKU price changes, parent set SKU prices update automatically in real time."
              stories={[
                "As a <strong>pricing team member</strong>, when I update a child SKU price, all parent sets should reflect the new price within seconds",
                "As a <strong>catalog manager</strong>, when I create a new set SKU, the price should auto-calculate from component prices",
                "As a <strong>finance lead</strong>, I want to validate that cascade pricing matches our manual calculation methodology",
              ]}
            />
            <SprintCard
              icon="🗂️"
              title="Sprint 3 — Variant Mapping & Interface"
              goal="Build variant-level mapping interface, add validation checks, and implement last-mapping-reuse optimization that cut mapping time from 28 to 7 min."
              stories={[
                "As a <strong>catalog manager</strong>, I want to map child SKU variants to parent set variants through a simple interface without errors",
                "As a <strong>catalog manager</strong>, when creating a new variant, I want the system to suggest the last mapping",
                "As a <strong>PM</strong>, I want validation checks that prevent wrong variant-to-set mappings",
              ]}
            />
            <SprintCard
              icon="✅"
              title="Sprint 4 — QA, Rollout & Ops Integration"
              goal="Full QA across all 500+ SKUs, ops fulfillment auto-identification testing, staging → production deployment, and catalog team training."
              stories={[
                "As an <strong>ops team member</strong>, when a set order arrives, I want to automatically see which child SKUs to pick",
                "As a <strong>catalog manager</strong>, I want to complete mapping for all 500+ existing set SKUs using the new interface",
                "As a <strong>PM</strong>, I want to verify zero pricing errors across a sample of 50 set SKUs post-deployment",
              ]}
            />
          </div>
        </section>

        {/* 5 Key Decision */}
        <section>
          <StepLabel num={5} title="The Key Mid-Build Decision" />
          <p className="mb-4 text-sm leading-7 text-slate-600">
            During Sprint 3, when the catalog team started using the mapping
            interface, I noticed it was taking{" "}
            <strong className="text-slate-900">25–30 minutes per set SKU</strong>{" "}
            to complete variant mapping. With 500+ SKUs to map, this was going
            to take weeks and create a bottleneck.
          </p>
          <InsightBlock>
            <strong className="text-slate-900">The insight: </strong>Most new
            variant mappings were nearly identical to the last one. A walnut
            king bedroom set mapped almost exactly like a walnut queen bedroom
            set — same child SKUs, different size variant. But the tool was
            making the mapper start from scratch every time.
          </InsightBlock>
          <div className="mt-3">
            <SolutionBlock>
              <strong className="text-slate-900">My recommendation: </strong>
              Build a "reuse last mapping" feature — when a catalog manager
              starts mapping a new variant, pre-populate it with the last
              mapping for that set. The IT team implemented this in 2 days.{" "}
              <strong className="text-slate-900">
                Mapping time dropped from ~28 minutes to ~7 minutes per SKU
              </strong>{" "}
              — a 75% reduction.
            </SolutionBlock>
          </div>
        </section>

        {/* 6 Results */}
        <section>
          <StepLabel num={6} title="Results" />
          <div className="grid grid-cols-2 gap-3">
            <ResultCard
              value="₹35–40L"
              label="Monthly pricing exposure protected across all set categories"
              delta="↑ From ₹0 protected previously"
            />
            <ResultCard
              value="28→7 min"
              label="Per-SKU mapping time via last-mapping reuse optimization"
              delta="75% reduction in mapping effort"
            />
            <ResultCard
              value="500+"
              label="Set SKUs fully mapped and automated across all categories"
              delta="100% catalog coverage"
            />
            <ResultCard
              value="0"
              label="Manual pricing updates required for existing or new set SKUs"
              delta="Fully automated pricing cascade live"
            />
          </div>
        </section>

        {/* 7 Learnings */}
        <section>
          <div className="rounded-2xl bg-slate-950 p-8">
            <h2 className="mb-6 text-xl font-bold text-white">
              What I Learned
            </h2>
            <div className="space-y-5">
              {[
                {
                  n: "1",
                  title: "Silent problems are the most expensive.",
                  body: "Nobody had flagged this because the mispricing was gradual — no single change caused a visible error. Regular cross-functional reviews and pricing audits would have caught this earlier.",
                },
                {
                  n: "2",
                  title: "Mid-build observations matter as much as upfront requirements.",
                  body: "The last-mapping-reuse recommendation saved more time than most of the upfront requirements. Staying close to the product during build — not just at handoff — creates real value.",
                },
                {
                  n: "3",
                  title: "Automation compounds.",
                  body: "This system doesn't just fix today's pricing — it prevents every future pricing error across every new SKU and every price change. The ROI grows with the catalog.",
                },
              ].map((l) => (
                <div key={l.n} className="flex gap-4">
                  <span className="mt-0.5 text-2xl font-bold text-indigo-400">
                    {l.n}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{l.title}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-400">
                      {l.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next */}
        <Link
          href="/case-studies/checkout-funnel"
          className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Next Case Study
            </p>
            <p className="mt-1 text-lg font-bold text-slate-950">
              02 — Checkout Funnel Optimization
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-indigo-500 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  );
}
