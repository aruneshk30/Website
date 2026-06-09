import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "01",
    slug: "sku pricing",
    tag: "Platform & Systems · Pricing Automation",
    title: "Automated SKU Pricing & Mapping System",
    brief:
      "How I identified a $500K+ pricing exposure risk buried in 500+ product SKUs — and drove an end-to-end automated solution from zero.",
    metrics: [
      { value: "₹35–40L", label: "Monthly revenue protected" },
      { value: "28→7 min", label: "Mapping time per SKU" },
      { value: "500+", label: "SKUs automated" },
    ],
    tags: ["Pricing Automation", "Backend Systems", "Cross-functional"],
  },
  {
    id: "02",
    slug: "checkout funnel",
    tag: "UX & Conversion · Funnel Optimization",
    title: "Checkout Funnel Optimization",
    brief:
      "How session recording analysis revealed two hidden friction points killing checkout conversions — and fixing them contributed to ₹1.2 crore in monthly revenue.",
    metrics: [
      { value: "~₹1.2Cr", label: "Monthly revenue improvement" },
      { value: "20→14%", label: "ATC diversions reduced" },
      { value: "84→72%", label: "Checkout abandonment" },
    ],
    tags: ["UX Research", "Funnel Analysis", "Microsoft Clarity"],
  },
  {
    id: "03",
    slug: "pricing calculator",
    tag: "Internal Tooling · Sales Enablement",
    title: "Real-Time Pricing Calculator for U.S. Sales",
    brief:
      "How a 1–2 day quote turnaround was killing custom furniture conversions — and the tool that generated ₹1.5 crore in additional monthly revenue.",
    metrics: [
      { value: "~₹1.5Cr", label: "Additional monthly revenue" },
      { value: "~30%", label: "Conversion improvement" },
      { value: "1–2d→0", label: "Quote turnaround eliminated" },
    ],
    tags: ["Internal Tooling", "Sales Enablement", "Requirements"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-slate-950 px-4 pb-20 pt-28 text-center md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">
            Product Case Studies
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Real problems.{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Real outcomes.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400">
            Three product initiatives shipped at Sierra Living Concepts — each
            told as a complete story from discovery to delivery to results.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case studies/${cs.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                {/* Left */}
                <div className="flex-1">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-500">
                    {cs.tag}
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                    {cs.id} — {cs.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                    {cs.brief}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — Metrics */}
                <div className="flex gap-4 lg:flex-col lg:min-w-[180px]">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex-1 rounded-xl border border-slate-100 bg-slate-50 p-4 text-center lg:text-left"
                    >
                      <p className="text-xl font-bold tracking-tight text-slate-950">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                Read full case study{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
