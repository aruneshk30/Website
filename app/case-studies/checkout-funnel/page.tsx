import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  FileWarning,
  MousePointerClick,
  X,
  Check,
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
function JourneyDiagram() {
  const steps = [
    { icon: MousePointerClick, label: "Added to cart", tone: "bg-dustyblue-50 text-dustyblue-800" },
    { icon: Eye, label: "Distracted by similar items", tone: "bg-terracotta/10 text-terracotta-600" },
    { icon: FileWarning, label: "Popup loses entered data", tone: "bg-sand text-sand-800" },
    { icon: Check, label: "Redesigned — order confirmed", tone: "bg-sage-50 text-sage-800" },
  ];
  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-6">
      <p className="mb-5 text-xs font-bold uppercase tracking-widest text-charcoal/40">
        The journey, before → after
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

function FunnelBars() {
  const rows = [
    { name: "Add to Cart Page", pct: 100, tone: "bg-dustyblue-400", stat: "100%", flag: "" },
    { name: "ATC → Similar Products", pct: 20, tone: "bg-terracotta", stat: "20% exit", flag: "Friction Point 1" },
    { name: "Checkout Info Form", pct: 80, tone: "bg-sand-500", stat: "80% reach", flag: "" },
    { name: "Form Abandonment", pct: 84, tone: "bg-terracotta", stat: "84% abandon", flag: "Friction Point 2" },
    { name: "Order Confirmed", pct: 16, tone: "bg-sage-600", stat: "~16%", flag: "" },
  ];
  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-6">
      <p className="mb-5 text-xs font-bold uppercase tracking-widest text-charcoal/40">
        Funnel drop-off map
      </p>
      <div className="space-y-3">
        {rows.map((f) => (
          <div key={f.name} className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-xs font-medium text-charcoal/70 sm:w-48 sm:flex-shrink-0">
              {f.name}
            </span>
            <div className="flex flex-1 items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-charcoal/5">
                <div className={`h-full rounded-full ${f.tone}`} style={{ width: `${f.pct}%` }} />
              </div>
              <span className="w-16 flex-shrink-0 text-right text-xs font-semibold text-charcoal/70">
                {f.stat}
              </span>
              {f.flag && (
                <span className="hidden flex-shrink-0 rounded-full bg-terracotta/10 px-2 py-0.5 text-[10px] font-semibold text-terracotta-600 sm:inline-block">
                  {f.flag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AbandonmentCompareBar() {
  const rows = [
    { label: "Before redesign", value: 84.09, color: "bg-terracotta" },
    { label: "After redesign", value: 72.77, color: "bg-sage-600" },
  ];
  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-6">
      <p className="mb-5 text-xs font-bold uppercase tracking-widest text-charcoal/40">
        Checkout abandonment rate
      </p>
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-1.5 flex items-baseline justify-between">
              <span className="text-sm font-medium text-charcoal/70">{r.label}</span>
              <span className="text-sm font-bold text-charcoal">{r.value}%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-charcoal/5">
              <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold text-sage-700">11.32 point improvement</p>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────
export default function CaseStudy2() {
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
                  <span className="rounded-full bg-sage-50 px-3 py-1 text-xs font-semibold text-sage-800">
                    Case Study 02
                  </span>
                  <span className="rounded-full bg-charcoal/5 px-3 py-1 text-xs font-semibold text-charcoal/60">
                    UX & Conversion · Funnel Optimization
                  </span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-charcoal md:text-5xl">
                  Checkout Funnel{" "}
                  <span className="font-serif font-normal text-sage-700">
                    Optimization
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-base leading-8 text-charcoal/65">
                  How session recording analysis revealed two hidden friction points
                  killing checkout conversions — and fixing them contributed to ₹1.2
                  crore in monthly revenue improvement.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    { label: "Company", value: "Sierra Living Concepts" },
                    { label: "Timeline", value: "Nov 2025 – Jan 2026" },
                    { label: "My Role", value: "Product Manager" },
                    { label: "Teams", value: "UI/UX · Category · IT" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-charcoal/10 bg-white px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">{m.label}</p>
                      <p className="mt-1 text-sm font-semibold text-charcoal">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <JourneyDiagram />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Bar */}
      <section className="border-y border-charcoal/10 bg-white px-4 py-6 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: "~₹1.2Cr", label: "Monthly revenue improvement", color: "text-sage-700" },
            { value: "20→14%", label: "ATC diversions reduced", color: "text-dustyblue-800" },
            { value: "84→72%", label: "Checkout abandonment", color: "text-terracotta" },
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
          <section>
            <StepLabel num={1} title="The Background" />
            <div className="max-w-3xl space-y-4 text-sm leading-7 text-charcoal/70">
              <p>
                In my early weeks as Product Manager, I made it a habit to review
                Microsoft Clarity session recordings and BI dashboard funnel
                reports every morning. Sierra's average order value is{" "}
                <strong className="text-charcoal">$3,500–$4,000</strong> —
                meaning every customer who drops off the checkout flow represents
                thousands of dollars in lost revenue.
              </p>
              <p>
                The business was generating reasonable traffic to product pages,
                and add-to-cart rates were acceptable. But somewhere between "add
                to cart" and "order confirmed," we were losing people. I needed to
                find out exactly where and why.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* 2 Discovery */}
        <FadeIn>
          <section>
            <StepLabel num={2} title="Discovery — What the Data Showed" />
            <p className="mb-5 max-w-3xl text-sm leading-7 text-charcoal/70">
              Combining Clarity session recordings with BI dashboard funnel
              analysis, I mapped the full ATC-to-checkout journey and identified
              two distinct friction points:
            </p>

            <div className="mb-6">
              <FunnelBars />
            </div>

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <ProblemBlock icon={Eye}>
                <strong className="text-charcoal">Friction Point 1 — ATC Page Distraction: </strong>
                The add-to-cart page was showing a "similar products" section —
                visually prominent, same category, often lower price. Session
                recordings showed{" "}
                <strong className="text-charcoal">20% of ATC page visitors</strong>{" "}
                clicking these recommendations and leaving the purchase flow entirely.
              </ProblemBlock>
              <ProblemBlock icon={FileWarning}>
                <strong className="text-charcoal">Friction Point 2 — Popup Form Data Loss: </strong>
                The checkout information capture was a{" "}
                <strong className="text-charcoal">popup dialog overlay</strong>{" "}
                on the ATC page. If a user left the popup idle, the form became
                unresponsive and{" "}
                <strong className="text-charcoal">wiped all entered data</strong>.
              </ProblemBlock>
            </div>
          </section>
        </FadeIn>

        {/* 3 Before After */}
        <FadeIn>
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <StepLabel num={3} title="Before vs After" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-charcoal/10 bg-white p-6">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-terracotta-600">Before</p>
                  <div className="space-y-3">
                    {[
                      "Similar products shown on ATC page — 20% click away",
                      "Popup form wipes data on idle — customers restart",
                      "No dedicated checkout step — overlay UX",
                      "84.09% checkout abandonment rate",
                    ].map((item) => (
                      <div key={item} className="flex gap-2.5 text-sm text-charcoal/70">
                        <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-charcoal/10 bg-white p-6">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-sage-700">After</p>
                  <div className="space-y-3">
                    {[
                      "Similar products removed — relevant cross-sell retained",
                      "Dedicated checkout step — no data loss possible",
                      "Clean next-step page for information capture",
                      "72.77% checkout abandonment rate",
                    ].map((item) => (
                      <div key={item} className="flex gap-2.5 text-sm text-charcoal/70">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pt-12">
              <AbandonmentCompareBar />
            </div>
          </section>
        </FadeIn>

        {/* 4 Requirements */}
        <FadeIn>
          <section>
            <StepLabel num={4} title="Requirements Definition" />
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
                    { req: "Remove ATC Similar Products", desc: "Remove distracting similar product recommendations from ATC page to eliminate 20% diversion", p: "High" },
                    { req: "Dedicated Checkout Step", desc: "Replace popup with dedicated next-step page — separate URL, no overlay", p: "High" },
                    { req: "Form Session Persistence", desc: "Entered form data must persist if user navigates away or leaves idle — no data loss", p: "High" },
                    { req: "Retain Complementary Cross-sell", desc: "Keep relevant cross-sell (e.g. dining chairs on dining table ATC) — relevant, not distracting", p: "Medium" },
                    { req: "Mobile Checkout Optimization", desc: "Dedicated checkout step fully optimized for mobile — sticky CTA, large inputs, minimal scroll", p: "Medium" },
                  ].map((r) => (
                    <tr key={r.req} className="hover:bg-cream">
                      <td className="px-5 py-3.5 font-semibold text-charcoal">{r.req}</td>
                      <td className="px-5 py-3.5 text-charcoal/65">{r.desc}</td>
                      <td className="px-5 py-3.5">
                        <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                          r.p === "High" ? "bg-terracotta/10 text-terracotta-600" : "bg-sand text-sand-800"
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

        {/* 5 Sprints */}
        <FadeIn>
          <section>
            <StepLabel num={5} title="Sprint Planning & Execution" />
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              <SprintCard
                icon="🔍"
                title="Sprint 1 — Analysis & Alignment"
                goal="Quantify the full funnel impact of both friction points and align UI/UX, category, and IT teams on the solution approach."
                stories={[
                  "As a <strong>PM</strong>, I want to quantify exactly how many users are affected by each friction point to prioritize fixes correctly",
                  "As a <strong>UI/UX designer</strong>, I want a clear brief on the ATC page and checkout step redesign before wireframes",
                  "As a <strong>category manager</strong>, I want to understand which cross-sell recommendations to keep vs remove",
                ]}
              />
              <SprintCard
                icon="🎨"
                title="Sprint 2 — UX Design & ATC Fix"
                goal="Remove similar product distractions from ATC page and ship the UI/UX design for the new dedicated checkout step."
                stories={[
                  "As a <strong>customer</strong>, on the ATC page I should only see my cart summary and a clear path to checkout",
                  "As a <strong>customer</strong>, relevant accessories should still be visible for cross-sell value",
                  "As a <strong>UI/UX designer</strong>, I want to deliver approved wireframes for the dedicated checkout step to IT",
                ]}
              />
              <SprintCard
                icon="🏗️"
                title="Sprint 3 — Checkout Step Build & QA"
                goal="Build the dedicated checkout step page, implement form data persistence, QA across device types, and deploy to staging."
                stories={[
                  "As a <strong>customer</strong>, I want to fill in delivery information on a clean dedicated page without distracting overlays",
                  "As a <strong>customer</strong>, if I leave the checkout form and come back, my entered information should still be there",
                  "As a <strong>PM</strong>, I want to verify zero data-loss scenarios across mobile and desktop before production",
                ]}
              />
            </div>
          </section>
        </FadeIn>

        {/* 6 Key Decision */}
        <FadeIn>
          <section>
            <StepLabel num={6} title="The Key Product Decision" />
            <p className="mb-4 max-w-3xl text-sm leading-7 text-charcoal/70">
              One deliberate decision I made that isn't obvious: I kept
              complementary cross-sell on the ATC page while removing similar
              product recommendations.
            </p>
            <PullQuote>
              "Dining chairs on a dining table ATC page adds value to the
              existing decision. Similar dining tables create doubt about it.
              The distinction between helpful and distracting cross-sell is
              context, not category."
            </PullQuote>
            <SolutionBlock>
              <strong className="text-charcoal">The reasoning: </strong>
              Similar products at the moment of highest purchase intent are
              essentially saying "maybe reconsider what you picked." Complementary
              products add value to a decision already made. Removing all
              cross-sell would have hurt AOV. Removing only the distracting kind
              protected conversion without sacrificing upsell revenue.
            </SolutionBlock>
          </section>
        </FadeIn>

        {/* 7 Results */}
        <FadeIn>
          <section>
            <StepLabel num={7} title="Results" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <ResultCard value="20→14%" label="ATC page diversions — users leaving for similar products" delta="↓ 6 percentage point reduction" />
              <ResultCard value="84→72%" label="Checkout abandonment rate after info form redesign" delta="↓ 11.32 percentage point improvement" />
              <ResultCard value="~₹1.2Cr" label="Monthly revenue improvement (700 orders × $3,500 AOV × 6% recovery)" delta="↑ From baseline" />
              <ResultCard value="0" label="Customer-reported data-loss incidents post-deployment" delta="Bug fully resolved" />
            </div>
          </section>
        </FadeIn>

        {/* 8 Learnings */}
        <FadeIn>
          <section>
            <div className="rounded-2xl bg-charcoal p-6 md:p-8">
              <h2 className="mb-6 text-xl font-bold text-cream">What I Learned</h2>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                {[
                  { n: "1", title: "Session recordings reveal what metrics can't.", body: "The BI dashboard showed abandonment numbers. Clarity showed exactly what users were doing — clicking similar products, tabbing away, coming back to an empty form. Qualitative and quantitative together tell the complete story." },
                  { n: "2", title: "Not all cross-sell is equal.", body: "Removing similar products improved conversion, but we kept complementary cross-sell. Context-appropriate recommendations help; distraction disguised as recommendation hurts." },
                  { n: "3", title: "Bugs in the purchase flow are the most expensive bugs.", body: "The popup form data-loss issue had probably been losing orders for months. Customer feedback was the signal — building a habit of reading support tickets surfaces product issues faster than any dashboard." },
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
              href="/case-studies/sku-pricing"
              className="group flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4 flex-shrink-0 text-terracotta transition group-hover:-translate-x-1" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">Previous</p>
                <p className="mt-0.5 text-sm font-bold text-charcoal">01 — SKU Pricing System</p>
              </div>
            </Link>
            <Link
              href="/case-studies/pricing-calculator"
              className="group flex items-center justify-between rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-md"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">Next</p>
                <p className="mt-0.5 text-sm font-bold text-charcoal">03 — Pricing Calculator</p>
              </div>
              <ArrowRight className="h-4 w-4 flex-shrink-0 text-terracotta transition group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
