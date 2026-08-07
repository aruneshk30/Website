import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const caseStudies = [
  {
    id: "01",
    slug: "sku-pricing",
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
    tone: "dustyblue",
  },
  {
    id: "02",
    slug: "checkout-funnel",
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
    tone: "sage",
  },
  {
    id: "03",
    slug: "pricing-calculator",
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
    tone: "sand",
  },
];

const toneMap: Record<string, { chip: string; metric: string; metricText: string }> = {
  dustyblue: { chip: "bg-dustyblue-50 text-dustyblue-800", metric: "bg-dustyblue-50", metricText: "text-dustyblue-800" },
  sage: { chip: "bg-sage-50 text-sage-800", metric: "bg-sage-50", metricText: "text-sage-800" },
  sand: { chip: "bg-sand text-sand-800", metric: "bg-sand", metricText: "text-sand-800" },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-cream">

      {/* Hero */}
      <section className="px-4 pb-16 pt-28 text-center md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
              Product Case Studies
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Real problems.{" "}
              <span className="font-serif font-normal text-sage-700">Real outcomes.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-charcoal/65">
              Three product initiatives shipped at Sierra Living Concepts — each
              told as a complete story from discovery to delivery to results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-5xl px-4 pb-20 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {caseStudies.map((cs, i) => {
            const tone = toneMap[cs.tone];
            return (
              <FadeIn key={cs.slug} delay={i * 100}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg sm:p-6 lg:p-8"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    {/* Left */}
                    <div className="flex-1">
                      <p className={`mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${tone.chip}`}>
                        {cs.tag}
                      </p>
                      <h2 className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
                        {cs.id} — {cs.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-charcoal/65">
                        {cs.brief}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cs.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-charcoal/5 px-3 py-1 text-xs font-medium text-charcoal/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right — Metrics */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:flex lg:flex-col lg:min-w-[180px] lg:gap-4">
                      {cs.metrics.map((m) => (
                        <div
                          key={m.label}
                          className={`rounded-xl ${tone.metric} p-3 text-center sm:p-4 lg:text-left`}
                        >
                          <p className={`text-base font-bold tracking-tight sm:text-xl ${tone.metricText}`}>
                            {m.value}
                          </p>
                          <p className={`mt-0.5 text-[10px] leading-tight sm:text-xs ${tone.metricText}`}>
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-terracotta">
                    Read full case study{" "}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </main>
  );
}
