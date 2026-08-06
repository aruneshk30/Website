import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Users,
  Layers,
  TrendingDown,
  Zap,
  Boxes,
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

function InsightBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-sand/60 bg-sand/40 p-5 [border-left:3px_solid_#C9A15E]">
      <div className="text-sm leading-7 text-charcoal/70">{children}</div>
    </div>
  );
}

function SolutionBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-sage-400/40 bg-sage-50 p-5 [border-left:3px_solid_#5B8A6B]">
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

// ── GRAPHICS ────────────────────────────────────────────
function CascadeDiagram() {
  const steps = [
    { icon: Boxes, label: "Child SKU price changes", tone: "bg-dustyblue-50 text-dustyblue-800" },
    { icon: Zap, label: "Automated cascade engine", tone: "bg-sand text-sand-800" },
    { icon: Layers, label: "500+ parent set SKUs update instantly", tone: "bg-sage-50 text-sage-800" },
  ];
  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-6">
      <p className="mb-5 text-xs font-bold uppercase tracking-widest text-charcoal/40">
        How the cascade works
      </p>
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center gap-3">
            <div className={`flex flex-1 flex-col items-center gap-2 rounded-xl ${s.tone} p-5 text-center`}>
              <s.icon className="h-6 w-6" />
              <p className="text-xs font-semibold leading-5">{s.label}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden h-5 w-5 flex-shrink-0 text-charcoal/25 md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TimeCompareBar() {
  const rows = [
    { label: "Before — manual mapping", value: 28, max: 28, color: "bg-terracotta" },
    { label: "After — last-mapping reuse", value: 7, max: 28, color: "bg-sage-600" },
  ];
  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-6">
      <p className="mb-5 text-xs font-bold uppercase tracking-widest text-charcoal/40">
        Per-SKU mapping time
      </p>
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-1.5 flex items-baseline justify-between">
              <span className="text-sm font-medium text-charcoal/70">{r.label}</span>
              <span className="text-sm font-bold text-charcoal">{r.value} min</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-charcoal/5">
              <div
                className={`h-full rounded-full ${r.color}`}
                style={{ width: `${(r.value / r.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold text-sage-700">75% reduction in mapping effort</p>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────
export default function CaseStudy1() {
  return (
    <main className="min-h-screen bg-cream">

      {/* Hero */}
      <section className="px-4 pb-14 pt-28 md:px-6 lg:px-8">
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
                  <span className="rounded-full bg-dustyblue-50 px-3 py-1 text-xs font-semibold text-dustyblue-800">
                    Case Study 01
                  </span>
                  <span className="rounded-full bg-charcoal/5 px-3 py-1 text-xs font-semibold text-charcoal/60">
                    Platform & Systems · Pricing Automation
                  </span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-charcoal md:text-5xl">
                  Automated SKU Pricing{" "}
                  <span className="font-serif font-normal text-dustyblue-800">
                    & Mapping System
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-base leading-8 text-charcoal/65">
                  How I identified a $500K+ pricing exposure risk buried in 500+
                  product SKUs — and drove an end-to-end automated solution from zero.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    { label: "Company", value: "Sierra Living Concepts" },
                    { label: "Timeline", value: "Nov 2025 – Feb 2026" },
                    { label: "My Role", value: "Product Manager" },
                    { label: "Teams", value: "IT · Pricing · Finance · Ops" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-charcoal/10 bg-white px-4 py-3"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">
                        {m.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-charcoal">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <CascadeDiagram />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Bar */}
      <section className="border-y border-charcoal/10 bg-white px-4 py-6 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: "₹35–40L", label: "Monthly revenue protected", color: "text-dustyblue-800" },
            { value: "28→7 min", label: "SKU mapping time reduced", color: "text-sage-700" },
            { value: "500+", label: "SKUs fully automated", color: "text-terracotta" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className={`text-2xl font-bold tracking-tight ${s.color} md:text-3xl`}>
                {s.value}
              </p>
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
                  Sierra Living Concepts sells premium furniture to the U.S. market
                  — with an average order value of{" "}
                  <strong className="text-charcoal">$3,500–$4,000</strong>. A
                  significant portion of the catalog consists of{" "}
                  <strong className="text-charcoal">bundled set SKUs</strong> —
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
            </div>
            <div className="lg:pt-12">
              <PullQuote>
                "The bedroom set on the website was priced at what it cost 6 months
                ago — but every component inside it had been repriced since then.
                Nobody noticed."
              </PullQuote>
            </div>
          </section>
        </FadeIn>

        {/* 2 Problem */}
        <FadeIn>
          <section>
            <StepLabel num={2} title="Discovering the Real Problem" />
            <p className="mb-5 text-sm leading-7 text-charcoal/70">
              I started digging. What I found was a four-layered problem that had
              been silently compounding for months:
            </p>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <ProblemBlock icon={AlertTriangle}>
                <strong className="text-charcoal">Problem 1 — Pricing Drift: </strong>
                Parent set SKUs were priced manually and never updated when child
                SKU prices changed. Mismatches had accumulated to{" "}
                <strong className="text-charcoal">$600–$1,000+ per SKU</strong>.
              </ProblemBlock>
              <ProblemBlock icon={Users}>
                <strong className="text-charcoal">Problem 2 — Manual Operations: </strong>
                Every time a set order came in, the operations team had to{" "}
                <strong className="text-charcoal">manually identify which child SKUs</strong>{" "}
                belonged to that set. Wrong variant = wrong fulfillment.
              </ProblemBlock>
              <ProblemBlock icon={Layers}>
                <strong className="text-charcoal">Problem 3 — No Variant Intelligence: </strong>
                Furniture has complex variants — fabric vs leather, queen vs king,
                walnut vs oak — with no way to map child variant to parent variant.
              </ProblemBlock>
              <ProblemBlock icon={TrendingDown}>
                <strong className="text-charcoal">Problem 4 — Scaling Risk: </strong>
                With 500+ set SKUs across multiple categories, manual maintenance
                was not scalable. Every price update was a potential error.
              </ProblemBlock>
            </div>
          </section>
        </FadeIn>

        {/* 3 Requirements */}
        <FadeIn>
          <section>
            <StepLabel num={3} title="Requirements Definition" />
            <p className="mb-5 text-sm leading-7 text-charcoal/70">
              I translated the four problem areas into functional requirements,
              prioritized by business impact and technical dependency:
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
                    { req: "Dynamic Price Cascade", desc: "Child SKU price changes auto-update all parent set SKUs immediately", p: "High" },
                    { req: "Variant-Level Mapping", desc: "Map child SKU variants to corresponding parent set variants", p: "High" },
                    { req: "New Set Auto-Pricing", desc: "New set SKUs auto-calculate price from child component prices", p: "High" },
                    { req: "Mapping Interface + Validation", desc: "Internal tool with error checks preventing incorrect mappings", p: "Medium" },
                    { req: "Last Mapping Reuse", desc: "Pre-populate new variant with last mapping data to reduce effort", p: "Medium" },
                    { req: "Order Fulfillment Auto-ID", desc: "Set orders auto-identify correct child SKUs for ops team", p: "Medium" },
                    { req: "Bundle Discount Logic", desc: "Support dynamic sale pricing and bundle discounts on cascade price", p: "Low" },
                  ].map((r) => (
                    <tr key={r.req} className="hover:bg-cream">
                      <td className="px-5 py-3.5 font-semibold text-charcoal">{r.req}</td>
                      <td className="px-5 py-3.5 text-charcoal/65">{r.desc}</td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                            r.p === "High"
                              ? "bg-terracotta/10 text-terracotta-600"
                              : r.p === "Medium"
                              ? "bg-sand text-sand-800"
                              : "bg-sage-50 text-sage-800"
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
        </FadeIn>

        {/* 4 Sprints */}
        <FadeIn>
          <section>
            <StepLabel num={4} title="Sprint Planning & Execution" />
            <p className="mb-5 text-sm leading-7 text-charcoal/70">
              We ran the project in four two-week sprints, coordinating between
              IT, pricing, and catalog teams with regular check-ins and mid-build
              adjustments.
            </p>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
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
        </FadeIn>

        {/* 5 Key Decision */}
        <FadeIn>
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <StepLabel num={5} title="The Key Mid-Build Decision" />
              <p className="mb-4 text-sm leading-7 text-charcoal/70">
                During Sprint 3, when the catalog team started using the mapping
                interface, I noticed it was taking{" "}
                <strong className="text-charcoal">25–30 minutes per set SKU</strong>{" "}
                to complete variant mapping. With 500+ SKUs to map, this was going
                to take weeks and create a bottleneck.
              </p>
              <InsightBlock>
                <strong className="text-charcoal">The insight: </strong>Most new
                variant mappings were nearly identical to the last one. A walnut
                king bedroom set mapped almost exactly like a walnut queen bedroom
                set — same child SKUs, different size variant. But the tool was
                making the mapper start from scratch every time.
              </InsightBlock>
              <div className="mt-3">
                <SolutionBlock>
                  <strong className="text-charcoal">My recommendation: </strong>
                  Build a "reuse last mapping" feature — when a catalog manager
                  starts mapping a new variant, pre-populate it with the last
                  mapping for that set. The IT team implemented this in 2 days.{" "}
                  <strong className="text-charcoal">
                    Mapping time dropped from ~28 minutes to ~7 minutes per SKU
                  </strong>{" "}
                  — a 75% reduction.
                </SolutionBlock>
              </div>
            </div>
            <div className="lg:pt-12">
              <TimeCompareBar />
            </div>
          </section>
        </FadeIn>

        {/* 6 Results */}
        <FadeIn>
          <section>
            <StepLabel num={6} title="Results" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <ResultCard value="₹35–40L" label="Monthly pricing exposure protected across all set categories" delta="↑ From ₹0 protected previously" />
              <ResultCard value="28→7 min" label="Per-SKU mapping time via last-mapping reuse optimization" delta="75% reduction in mapping effort" />
              <ResultCard value="500+" label="Set SKUs fully mapped and automated across all categories" delta="100% catalog coverage" />
              <ResultCard value="0" label="Manual pricing updates required for existing or new set SKUs" delta="Fully automated pricing cascade live" />
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
                  { n: "1", title: "Silent problems are the most expensive.", body: "Nobody had flagged this because the mispricing was gradual — no single change caused a visible error. Regular cross-functional reviews and pricing audits would have caught this earlier." },
                  { n: "2", title: "Mid-build observations matter as much as upfront requirements.", body: "The last-mapping-reuse recommendation saved more time than most of the upfront requirements. Staying close to the product during build — not just at handoff — creates real value." },
                  { n: "3", title: "Automation compounds.", body: "This system doesn't just fix today's pricing — it prevents every future pricing error across every new SKU and every price change. The ROI grows with the catalog." },
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

        {/* Next */}
        <FadeIn>
          <Link
            href="/case-studies/checkout-funnel"
            className="group flex items-center justify-between rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-md"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40">Next Case Study</p>
              <p className="mt-1 text-lg font-bold text-charcoal">02 — Checkout Funnel Optimization</p>
            </div>
            <ArrowRight className="h-5 w-5 flex-shrink-0 text-terracotta transition group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </main>
  );
}
