import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { croAgents } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

const workflowSteps = [
  {
    number: "1",
    title: "Data Agent",
    desc: "Finds funnel leaks, drop-offs, and device splits using GA4, Google Ads, and dashboard data.",
    tone: "bg-dustyblue-50 border-dustyblue-800/15",
    badge: "bg-dustyblue-50 text-dustyblue-800",
    dot: "bg-dustyblue-600",
    label: "Data",
  },
  {
    number: "2",
    title: "UX Agent",
    desc: "Identifies page friction, confusing flows, and interaction barriers using data insights.",
    tone: "bg-sage-50 border-sage-700/15",
    badge: "bg-sage-50 text-sage-800",
    dot: "bg-sage-600",
    label: "UX + Research",
  },
  {
    number: "3",
    title: "Research Agent",
    desc: "Validates UX findings against market benchmarks and competitor behaviour.",
    tone: "bg-sage-50 border-sage-700/15",
    badge: "bg-sage-50 text-sage-800",
    dot: "bg-sage-600",
    label: "UX + Research",
  },
  {
    number: "4",
    title: "Customer Voice Agent",
    desc: "Maps findings to buyer psychology, trust gaps, and real customer language.",
    tone: "bg-sand border-sand-600/20",
    badge: "bg-sand text-sand-800",
    dot: "bg-sand-600",
    label: "Voice + Tech",
  },
  {
    number: "5",
    title: "Tech Agent",
    desc: "Validates technical feasibility on your stack and flags implementation constraints.",
    tone: "bg-sand border-sand-600/20",
    badge: "bg-sand text-sand-800",
    dot: "bg-sand-600",
    label: "Voice + Tech",
  },
  {
    number: "6",
    title: "Experimentation Agent",
    desc: "Designs A/B tests with hypothesis statements, variants, and lift targets.",
    tone: "bg-terracotta/8 border-terracotta/20",
    badge: "bg-terracotta/10 text-terracotta-600",
    dot: "bg-terracotta",
    label: "Experiment",
  },
  {
    number: "7",
    title: "Prioritization Agent",
    desc: "Ranks every action by RICE and ICE score against effort and business impact.",
    tone: "bg-terracotta/8 border-terracotta/20",
    badge: "bg-terracotta/10 text-terracotta-600",
    dot: "bg-terracotta",
    label: "Experiment",
  },
  {
    number: "8",
    title: "Risk Agent",
    desc: "Flags implementation risks, conversion risks, and edge cases before execution.",
    tone: "bg-charcoal/5 border-charcoal/15",
    badge: "bg-charcoal/8 text-charcoal/70",
    dot: "bg-charcoal/60",
    label: "Risk + Docs",
  },
  {
    number: "9",
    title: "Documentation Agent",
    desc: "Produces a dev-ready action plan, decision memo, and 30-day execution summary.",
    tone: "bg-charcoal/5 border-charcoal/15",
    badge: "bg-charcoal/8 text-charcoal/70",
    dot: "bg-charcoal/60",
    label: "Risk + Docs",
  },
];

const colorKey = [
  { label: "Data", color: "bg-dustyblue-600" },
  { label: "UX + Research", color: "bg-sage-600" },
  { label: "Voice + Tech", color: "bg-sand-600" },
  { label: "Experiment", color: "bg-terracotta" },
  { label: "Risk + Docs", color: "bg-charcoal/60" },
];

export default function CroWorkflowPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="border-b border-charcoal/10 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-terracotta">9-Agent Product</p>
              <h1 className="text-4xl font-semibold tracking-tight text-charcoal md:text-6xl">
                9-Agent{" "}
                <span className="font-serif font-normal text-sage-700">CRO Workflow</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/65">
                A structured multi-agent system for conversion optimization — breaking a business problem into nine specialist lenses, each contributing a distinct layer of product judgment.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/ai-systems"
                className="inline-flex items-center gap-2 rounded-xl bg-terracotta px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-terracotta-600"
              >
                <ArrowRight className="h-4 w-4 rotate-180" /> Back to AI Systems
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Agent cards */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="The nine lenses"
              title="How the workflow thinks"
              subtitle="Each agent represents a distinct layer of product judgment. The goal is not output volume — it is structured decision quality."
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {croAgents.map((agent, index) => (
              <FadeIn key={agent.title} delay={index * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-charcoal">{agent.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/65">{agent.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Visual workflow */}
      <section className="border-y border-charcoal/10 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Workflow"
              title="How it runs — step by step"
              subtitle="Each agent hands off to the next, building a complete picture from raw data to a dev-ready execution plan."
            />
          </FadeIn>

          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start">
            {/* Flow diagram */}
            <FadeIn className="flex flex-1 flex-col items-center" delay={80}>
              {/* Input */}
              <div className="w-full max-w-sm rounded-2xl border border-charcoal/10 bg-cream px-6 py-4 text-center">
                <p className="text-sm font-semibold text-charcoal">Your business data</p>
                <p className="mt-1 text-xs text-charcoal/55">GA4 · Google Ads · Sheets dashboard</p>
              </div>

              <div className="flex flex-col items-center my-1">
                <div className="w-0.5 h-6 bg-charcoal/20" />
                <div className="w-3 h-3 rotate-45 border-r-2 border-b-2 border-charcoal/30 -mt-1.5" />
              </div>

              {workflowSteps.map((step, i) => (
                <div key={step.number} className="w-full max-w-sm flex flex-col items-center">
                  <div className={`w-full rounded-2xl border ${step.tone} px-5 py-4`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${step.badge}`}>
                        {step.number} · {step.title}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal/60 leading-5 mt-1">{step.desc}</p>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <div className="flex flex-col items-center my-1">
                      <div className="w-px h-5 bg-charcoal/15" />
                      <div className="w-2 h-2 rotate-45 border-r-2 border-b-2 border-charcoal/20 -mt-1" />
                    </div>
                  )}
                </div>
              ))}

              <div className="flex flex-col items-center my-1">
                <div className="w-px h-5 bg-charcoal/15" />
                <div className="w-2 h-2 rotate-45 border-r-2 border-b-2 border-charcoal/20 -mt-1" />
              </div>

              <div className="w-full max-w-sm rounded-2xl border border-sage-700/25 bg-sage-50 px-6 py-4 text-center">
                <p className="text-sm font-semibold text-sage-800">Final output</p>
                <p className="mt-1 text-xs text-sage-700">Top 3 actions · Revenue impact · 30-day plan</p>
              </div>
            </FadeIn>

            {/* Right side — color key + explanation */}
            <FadeIn className="flex flex-col gap-6 lg:w-72 lg:sticky lg:top-24" delay={120}>
              <div className="rounded-2xl border border-charcoal/10 bg-cream p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-3">Color key</p>
                <div className="flex flex-col gap-2">
                  {colorKey.map((k) => (
                    <div key={k.label} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-sm shrink-0 ${k.color}`} />
                      <span className="text-sm text-charcoal/65">{k.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-charcoal/10 bg-cream p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-4">Three phases</p>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-dustyblue-50 flex items-center justify-center text-xs font-bold text-dustyblue-800">1</div>
                      <p className="text-sm font-semibold text-charcoal">Observe</p>
                    </div>
                    <p className="text-xs text-charcoal/55 leading-5 pl-8">Data Agent reads funnel signals, drop-offs, and device splits to frame the problem.</p>
                  </div>
                  <div className="w-full h-px bg-charcoal/10" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-sand flex items-center justify-center text-xs font-bold text-sand-800">2</div>
                      <p className="text-sm font-semibold text-charcoal">Diagnose</p>
                    </div>
                    <p className="text-xs text-charcoal/55 leading-5 pl-8">UX, Research, Customer Voice, and Tech agents each contribute a specialist lens on the problem.</p>
                  </div>
                  <div className="w-full h-px bg-charcoal/10" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-sage-50 flex items-center justify-center text-xs font-bold text-sage-800">3</div>
                      <p className="text-sm font-semibold text-charcoal">Decide</p>
                    </div>
                    <p className="text-xs text-charcoal/55 leading-5 pl-8">Experimentation, Prioritization, Risk, and Documentation agents produce a ranked, dev-ready action plan.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-terracotta/20 bg-terracotta/5 p-5">
                <p className="text-sm font-semibold text-charcoal mb-1">Want to see the PM Hub?</p>
                <p className="text-xs text-charcoal/60 leading-5 mb-3">The PM Hub contains 17 AI modules for end-to-end product work.</p>
                <Link href="/ai-systems/pm-hub" className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta-600 hover:text-terracotta transition">
                  Open PM Hub <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
