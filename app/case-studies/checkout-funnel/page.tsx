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

// ── PAGE ──────────────────────────────────────────────────
export default function CaseStudy2() {
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
              Case Study 02
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
              UX & Conversion · Funnel Optimization
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Checkout Funnel{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Optimization
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            How session recording analysis revealed two hidden friction points
            killing checkout conversions — and fixing them contributed to ₹1.2
            crore in monthly revenue improvement.
          </p>

          {/* Meta */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Company", value: "Sierra Living Concepts" },
              { label: "Timeline", value: "Nov 2025 – Jan 2026" },
              { label: "My Role", value: "Product Manager" },
              { label: "Teams", value: "UI/UX · Category · IT" },
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
            { value: "~₹1.2Cr", label: "Monthly revenue improvement", color: "text-indigo-600" },
            { value: "20→14%", label: "ATC diversions reduced", color: "text-emerald-600" },
            { value: "84→72%", label: "Checkout abandonment rate", color: "text-blue-600" },
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
              In my early weeks as Product Manager, I made it a habit to review
              Microsoft Clarity session recordings and BI dashboard funnel
              reports every morning. Sierra's average order value is{" "}
              <strong className="text-slate-900">$3,500–$4,000</strong> —
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

        {/* 2 Discovery */}
        <section>
          <StepLabel num={2} title="Discovery — What the Data Showed" />
          <p className="mb-5 text-sm leading-7 text-slate-600">
            Combining Clarity session recordings with BI dashboard funnel
            analysis, I mapped the full ATC-to-checkout journey and identified
            two distinct friction points:
          </p>

          {/* Funnel Visual */}
          <div className="mb-6 space-y-2 rounded-xl border border-slate-200 bg-white p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Funnel Drop-off Map
            </p>
            {[
              { name: "Add to Cart Page", pct: 100, color: "bg-blue-500", stat: "100%", drop: "" },
              { name: "⚠️ ATC → Similar Products", pct: 20, color: "bg-red-500", stat: "20% exit", drop: "Friction Point 1" },
              { name: "Checkout Info Form", pct: 80, color: "bg-amber-500", stat: "80% reach", drop: "" },
              { name: "⚠️ Form Abandonment", pct: 84, color: "bg-red-500", stat: "84% abandon", drop: "Friction Point 2" },
              { name: "Order Confirmed", pct: 16, color: "bg-emerald-500", stat: "~16%", drop: "" },
            ].map((f) => (
              <div key={f.name} className="flex items-center gap-3">
                <span className="w-52 flex-shrink-0 text-xs font-medium text-slate-700 truncate">
                  {f.name}
                </span>
                <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${f.color}`}
                    style={{ width: `${f.pct}%` }}
                  />
                </div>
                <span className={`w-20 text-right text-xs font-semibold ${f.color.replace("bg-", "text-")}`}>
                  {f.stat}
                </span>
                {f.drop && (
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-600">
                    {f.drop}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <ProblemBlock>
              <strong className="text-slate-900">Friction Point 1 — ATC Page Distraction: </strong>
              The add-to-cart page was showing a "similar products" section —
              visually prominent, same category, often lower price. Session
              recordings showed{" "}
              <strong className="text-slate-900">
                20% of ATC page visitors
              </strong>{" "}
              clicking these recommendations and leaving the purchase flow
              entirely. They were being shown a reason to reconsider right at
              the moment of highest intent.
            </ProblemBlock>
            <ProblemBlock>
              <strong className="text-slate-900">Friction Point 2 — Popup Form Data Loss: </strong>
              The checkout information capture was a{" "}
              <strong className="text-slate-900">popup dialog overlay</strong>{" "}
              on the ATC page. Customer feedback and session analysis revealed a
              critical bug: if a user left the popup idle — went to check their
              delivery address, switched tabs, took a call — the form became
              unresponsive and{" "}
              <strong className="text-slate-900">wiped all entered data</strong>
              . On a form asking for name, address, and delivery details, this
              was a conversion killer.
            </ProblemBlock>
          </div>
        </section>

        {/* 3 Before After */}
        <section>
          <StepLabel num={3} title="Before vs After" />
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200">
            <div className="bg-white p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-500">
                Before
              </p>
              <div className="space-y-3">
                {[
                  "Similar products shown on ATC page — 20% click away",
                  "Popup form wipes data on idle — customers restart",
                  "No dedicated checkout step — overlay UX",
                  "84.09% checkout abandonment rate",
                ].map((item) => (
                  <div key={item} className="flex gap-2.5 text-sm text-slate-600">
                    <span className="mt-0.5 font-bold text-red-500">×</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-600">
                After
              </p>
              <div className="space-y-3">
                {[
                  "Similar products removed — relevant cross-sell retained",
                  "Dedicated checkout step — no data loss possible",
                  "Clean next-step page for information capture",
                  "72.77% checkout abandonment rate",
                ].map((item) => (
                  <div key={item} className="flex gap-2.5 text-sm text-slate-600">
                    <span className="mt-0.5 font-bold text-emerald-500">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 Requirements */}
        <section>
          <StepLabel num={4} title="Requirements Definition" />
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
                  { req: "Remove ATC Similar Products", desc: "Remove distracting similar product recommendations from ATC page to eliminate 20% diversion", p: "High" },
                  { req: "Dedicated Checkout Step", desc: "Replace popup with dedicated next-step page — separate URL, no overlay", p: "High" },
                  { req: "Form Session Persistence", desc: "Entered form data must persist if user navigates away or leaves idle — no data loss", p: "High" },
                  { req: "Retain Complementary Cross-sell", desc: "Keep relevant cross-sell (e.g. dining chairs on dining table ATC) — relevant, not distracting", p: "Medium" },
                  { req: "Mobile Checkout Optimization", desc: "Dedicated checkout step fully optimized for mobile — sticky CTA, large inputs, minimal scroll", p: "Medium" },
                ].map((r) => (
                  <tr key={r.req} className="hover:bg-slate-50">
                    <td className="px-5 py-3.5 font-semibold text-slate-900">{r.req}</td>
                    <td className="px-5 py-3.5 text-slate-600">{r.desc}</td>
                    <td className="px-5 py-3.5">
                      <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                        r.p === "High" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
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

        {/* 5 Sprints */}
        <section>
          <StepLabel num={5} title="Sprint Planning & Execution" />
          <div className="space-y-3">
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

        {/* 6 Key Decision */}
        <section>
          <StepLabel num={6} title="The Key Product Decision" />
          <p className="mb-4 text-sm leading-7 text-slate-600">
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
            <strong className="text-slate-900">The reasoning: </strong>
            Similar products at the moment of highest purchase intent are
            essentially saying "maybe reconsider what you picked." Complementary
            products add value to a decision already made. Removing all
            cross-sell would have hurt AOV. Removing only the distracting kind
            protected conversion without sacrificing upsell revenue.
          </SolutionBlock>
        </section>

        {/* 7 Results */}
        <section>
          <StepLabel num={7} title="Results" />
          <div className="grid grid-cols-2 gap-3">
            <ResultCard
              value="20→14%"
              label="ATC page diversions — users leaving for similar products"
              delta="↓ 6 percentage point reduction"
            />
            <ResultCard
              value="84→72%"
              label="Checkout abandonment rate after info form redesign"
              delta="↓ 11.32 percentage point improvement"
            />
            <ResultCard
              value="~₹1.2Cr"
              label="Monthly revenue improvement (700 orders × $3,500 AOV × 6% recovery)"
              delta="↑ From baseline"
            />
            <ResultCard
              value="0"
              label="Customer-reported data-loss incidents post-deployment"
              delta="Bug fully resolved"
            />
          </div>
        </section>

        {/* 8 Learnings */}
        <section>
          <div className="rounded-2xl bg-slate-950 p-8">
            <h2 className="mb-6 text-xl font-bold text-white">What I Learned</h2>
            <div className="space-y-5">
              {[
                {
                  n: "1",
                  title: "Session recordings reveal what metrics can't.",
                  body: "The BI dashboard showed abandonment numbers. Clarity showed exactly what users were doing — clicking similar products, tabbing away, coming back to an empty form. Qualitative and quantitative together tell the complete story.",
                },
                {
                  n: "2",
                  title: "Not all cross-sell is equal.",
                  body: "Removing similar products improved conversion, but we kept complementary cross-sell. Context-appropriate recommendations help; distraction disguised as recommendation hurts.",
                },
                {
                  n: "3",
                  title: "Bugs in the purchase flow are the most expensive bugs.",
                  body: "The popup form data-loss issue had probably been losing orders for months. Customer feedback was the signal — building a habit of reading support tickets surfaces product issues faster than any dashboard.",
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
            href="/case-studies/sku-pricing"
            className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4 flex-shrink-0 text-indigo-500 transition group-hover:-translate-x-1" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Previous</p>
              <p className="mt-0.5 text-sm font-bold text-slate-950">01 — SKU Pricing System</p>
            </div>
          </Link>
          <Link
            href="/case-studies/pricing-calculator"
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Next</p>
              <p className="mt-0.5 text-sm font-bold text-slate-950">03 — Pricing Calculator</p>
            </div>
            <ArrowRight className="h-4 w-4 flex-shrink-0 text-indigo-500 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
