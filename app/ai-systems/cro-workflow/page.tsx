import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { croAgents } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

const workflowSteps = [
  {
    number: "1",
    title: "Data Agent",
    desc: "Finds funnel leaks, drop-offs, and device splits using GA4, Google Ads, and dashboard data.",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-400",
    label: "Data",
  },
  {
    number: "2",
    title: "UX Agent",
    desc: "Identifies page friction, confusing flows, and interaction barriers using data insights.",
    color: "bg-teal-50 border-teal-200",
    badge: "bg-teal-100 text-teal-700",
    dot: "bg-teal-400",
    label: "UX + Research",
  },
  {
    number: "3",
    title: "Research Agent",
    desc: "Validates UX findings against market benchmarks and competitor behaviour.",
    color: "bg-teal-50 border-teal-200",
    badge: "bg-teal-100 text-teal-700",
    dot: "bg-teal-400",
    label: "UX + Research",
  },
  {
    number: "4",
    title: "Customer Voice Agent",
    desc: "Maps findings to buyer psychology, trust gaps, and real customer language.",
    color: "bg-violet-50 border-violet-200",
    badge: "bg-violet-100 text-violet-700",
    dot: "bg-violet-400",
    label: "Voice + Tech",
  },
  {
    number: "5",
    title: "Tech Agent",
    desc: "Validates technical feasibility on your stack and flags implementation constraints.",
    color: "bg-violet-50 border-violet-200",
    badge: "bg-violet-100 text-violet-700",
    dot: "bg-violet-400",
    label: "Voice + Tech",
  },
  {
    number: "6",
    title: "Experimentation Agent",
    desc: "Designs A/B tests with hypothesis statements, variants, and lift targets.",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-400",
    label: "Experiment",
  },
  {
    number: "7",
    title: "Prioritization Agent",
    desc: "Ranks every action by RICE and ICE score against effort and business impact.",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-400",
    label: "Experiment",
  },
  {
    number: "8",
    title: "Risk Agent",
    desc: "Flags implementation risks, conversion risks, and edge cases before execution.",
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700",
    dot: "bg-red-400",
    label: "Risk + Docs",
  },
  {
    number: "9",
    title: "Documentation Agent",
    desc: "Produces a dev-ready action plan, decision memo, and 30-day execution summary.",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-400",
    label: "Risk + Docs",
  },
];

const colorKey = [
  { label: "Data", color: "bg-blue-400" },
  { label: "UX + Research", color: "bg-teal-400" },
  { label: "Voice + Tech", color: "bg-violet-400" },
  { label: "Experiment", color: "bg-amber-400" },
  { label: "Risk + Docs", color: "bg-red-400" },
];

export default function CroWorkflowPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-500">9-Agent Product</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">9-Agent CRO Workflow</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A structured multi-agent system for conversion optimization — breaking a business problem into nine specialist lenses, each contributing a distinct layer of product judgment.
            </p>
          </div>
         <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-systems" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]">
              <ArrowRight className="h-4 w-4 rotate-180" /> Back to AI Systems
            </Link>
          </div>
        </div>
      </section>

      {/* Agent cards */}
      <section className="py-20 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="The nine lenses"
            title="How the workflow thinks"
            subtitle="Each agent represents a distinct layer of product judgment. The goal is not output volume — it is structured decision quality."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {croAgents.map((agent, index) => (
              <div key={agent.title} className="flex flex-col rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-400">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{agent.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual workflow */}
      <section className="border-y border-slate-200 bg-[#eef2f7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="How it runs — step by step"
            subtitle="Each agent hands off to the next, building a complete picture from raw data to a dev-ready execution plan."
          />

          <div className="mt-12 flex flex-col lg:flex-row gap-12 items-start">

            {/* Flow diagram */}
            <div className="flex-1 flex flex-col items-center">

              {/* Input */}
              <div className="w-full max-w-sm rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center shadow-sm">
                <p className="text-sm font-semibold text-slate-800">Your business data</p>
                <p className="mt-1 text-xs text-slate-500">GA4 · Google Ads · Sheets dashboard</p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center my-1">
                <div className="w-px h-5 bg-slate-300" />
                <div className="w-2 h-2 rotate-45 border-r-2 border-b-2 border-slate-300 -mt-1" />
              </div>

              {/* Steps */}
              {workflowSteps.map((step, i) => (
                <div key={step.number} className="w-full max-w-sm flex flex-col items-center">
                  <div className={`w-full rounded-2xl border ${step.color} px-5 py-4 shadow-sm`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${step.badge}`}>{step.number} · {step.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-5 mt-1">{step.desc}</p>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <div className="flex flex-col items-center my-1">
                      <div className="w-px h-5 bg-slate-300" />
                      <div className="w-2 h-2 rotate-45 border-r-2 border-b-2 border-slate-300 -mt-1" />
                    </div>
                  )}
                </div>
              ))}

              {/* Arrow to output */}
              <div className="flex flex-col items-center my-1">
                <div className="w-px h-5 bg-slate-300" />
                <div className="w-2 h-2 rotate-45 border-r-2 border-b-2 border-slate-300 -mt-1" />
              </div>

              {/* Final output */}
              <div className="w-full max-w-sm rounded-2xl border border-green-300 bg-green-50 px-6 py-4 text-center shadow-sm">
                <p className="text-sm font-semibold text-green-800">Final output</p>
                <p className="mt-1 text-xs text-green-700">Top 3 actions · Revenue impact · 30-day plan</p>
              </div>
            </div>

            {/* Right side — color key + explanation */}
            <div className="lg:w-72 flex flex-col gap-6 lg:sticky lg:top-24">

              {/* Color key */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Color key</p>
                <div className="flex flex-col gap-2">
                  {colorKey.map(k => (
                    <div key={k.label} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-sm shrink-0 ${k.color}`} />
                      <span className="text-sm text-slate-600">{k.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-phase explanation */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Three phases</p>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">1</div>
                      <p className="text-sm font-semibold text-slate-800">Observe</p>
                    </div>
                    <p className="text-xs text-slate-500 leading-5 pl-8">Data Agent reads funnel signals, drop-offs, and device splits to frame the problem.</p>
                  </div>
                  <div className="w-full h-px bg-slate-100" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-violet-100 flex items-center justify-center text-xs font-bold text-violet-600">2</div>
                      <p className="text-sm font-semibold text-slate-800">Diagnose</p>
                    </div>
                    <p className="text-xs text-slate-500 leading-5 pl-8">UX, Research, Customer Voice, and Tech agents each contribute a specialist lens on the problem.</p>
                  </div>
                  <div className="w-full h-px bg-slate-100" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center text-xs font-bold text-green-600">3</div>
                      <p className="text-sm font-semibold text-slate-800">Decide</p>
                    </div>
                    <p className="text-xs text-slate-500 leading-5 pl-8">Experimentation, Prioritization, Risk, and Documentation agents produce a ranked, dev-ready action plan.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 shadow-sm">
                <p className="text-sm font-semibold text-indigo-900 mb-1">Want to see the PM Hub?</p>
                <p className="text-xs text-indigo-700 leading-5 mb-3">The PM Hub contains 17 AI modules for end-to-end product work.</p>
                <Link href="/ai-systems/pm-hub" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900 transition">
                  Open PM Hub <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
