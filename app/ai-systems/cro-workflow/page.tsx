import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { croAgents } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export default function CroWorkflowPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">9-Agent Product</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">9-Agent CRO Workflow</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A structured multi-agent product system for conversion optimization — breaking a business problem into nine specialist lenses.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="The nine lenses"
            title="How the workflow thinks"
            subtitle="Each agent represents a distinct layer of product judgment. The goal is not output volume — it is structured decision quality."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {croAgents.map((agent, index) => (
              <div key={agent.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{agent.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="How it runs"
            subtitle="This page can hold screenshots, examples, and write-ups later. The current version sets up the structure cleanly."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">1. Observe</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">The system starts with funnel signals, user behavior, and a clear problem statement.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">2. Diagnose</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Each agent contributes a different angle — UX, customer voice, tech, risk, and prioritization.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">3. Decide</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">The final output becomes an execution plan with tradeoffs, sequencing, and metrics.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
