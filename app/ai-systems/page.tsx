import Link from "next/link";
import { ArrowRight, Sparkles, Blocks, Layers, Users, Target, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { pmHubModules, croAgents } from "@/lib/site-data";

const pmHubHighlights = pmHubModules.slice(0, 6);

const pmHubStats = [
  { value: "17", label: "AI modules" },
  { value: "100+", label: "PM workflows" },
  { value: "3", label: "communication tools" },
];

const croPhases = [
  { icon: Layers, title: "Observe", desc: "Data Agent reads funnel signals and drop-offs.", tone: "bg-dustyblue-50 text-dustyblue-800" },
  { icon: Users, title: "Diagnose", desc: "UX, Research, Voice, and Tech agents each add a lens.", tone: "bg-sand text-sand-800" },
  { icon: Target, title: "Decide", desc: "Experimentation, Prioritization, Risk, Docs ship a plan.", tone: "bg-sage-50 text-sage-800" },
];

export default function AiSystemsPage() {
  return (
    <main className="min-h-screen bg-cream">

      {/* Hero */}
      <section className="px-4 pb-14 pt-28 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-terracotta">AI Systems</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-charcoal md:text-6xl">
              Two systems, built{" "}
              <span className="font-serif font-normal text-sage-700">for leverage.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/65">
              A 17-module research and strategy hub, and a 9-agent workflow for
              conversion optimization — each targets a different layer of PM work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── PM HUB SHOWCASE ── */}
      <section id="pm-hub" className="border-y border-charcoal/10 bg-white/70 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">

              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-dustyblue-50 text-dustyblue-800">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
                  PM Research & Strategy Hub
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-charcoal/65 md:text-base">
                  An AI-assisted operating system for research, PRDs, prioritization,
                  funnel analysis, hypothesis testing, and stakeholder communication —
                  one integrated workflow, not seventeen separate tools.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 max-w-sm">
                  {pmHubStats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-dustyblue-50 p-3 text-center">
                      <p className="text-lg font-bold text-dustyblue-800">{s.value}</p>
                      <p className="mt-0.5 text-[11px] leading-snug text-dustyblue-800/80">{s.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/ai-systems/pm-hub"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-terracotta-600"
                >
                  Explore PM Hub <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Module preview grid */}
              <div className="rounded-2xl border border-charcoal/10 bg-white p-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-charcoal/40">
                  A few of the 17 modules
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {pmHubHighlights.map((m) => (
                    <div key={m.title} className="rounded-xl bg-cream p-3.5">
                      <p className="text-sm font-semibold text-charcoal">{m.title}</p>
                      <p className="mt-1 text-xs leading-5 text-charcoal/55 line-clamp-2">{m.description}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/ai-systems/pm-hub"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:text-terracotta-600"
                >
                  See all 17 modules <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 9-AGENT CRO SHOWCASE ── */}
      <section id="cro-workflow" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">

              {/* Agent flow preview */}
              <div className="order-2 rounded-2xl border border-charcoal/10 bg-white p-5 lg:order-1">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-charcoal/40">
                  Nine specialist lenses
                </p>
                <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-3">
                  {croAgents.map((a, i) => (
                    <div key={a.title} className="rounded-xl bg-sage-50 p-3 text-center">
                      <p className="text-[10px] font-bold text-sage-700">{String(i + 1).padStart(2, "0")}</p>
                      <p className="mt-1 text-xs font-semibold leading-4 text-sage-800">{a.title}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {croPhases.map((p) => (
                    <div key={p.title} className={`rounded-xl ${p.tone} p-3 text-center`}>
                      <p.icon className="mx-auto h-4 w-4" />
                      <p className="mt-1 text-[11px] font-semibold">{p.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-50 text-sage-800">
                  <Blocks className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
                  9-Agent CRO Workflow
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-charcoal/65 md:text-base">
                  A structured multi-agent system for conversion optimization —
                  each agent contributes a distinct layer of product judgment, from
                  raw funnel data to a dev-ready, prioritized action plan.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 max-w-sm">
                  <div className="rounded-xl bg-sage-50 p-3 text-center">
                    <p className="text-lg font-bold text-sage-800">9</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-sage-800/80">specialist agents</p>
                  </div>
                  <div className="rounded-xl bg-sage-50 p-3 text-center">
                    <p className="text-lg font-bold text-sage-800">3</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-sage-800/80">decision phases</p>
                  </div>
                  <div className="rounded-xl bg-sage-50 p-3 text-center">
                    <ShieldCheck className="mx-auto h-4 w-4 text-sage-800" />
                    <p className="mt-0.5 text-[11px] leading-snug text-sage-800/80">risk-checked</p>
                  </div>
                </div>

                <Link
                  href="/ai-systems/cro-workflow"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-terracotta-600"
                >
                  Open 9-Agent Workflow <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="border-t border-charcoal/10 bg-charcoal py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">Built by a PM, for PMs</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-cream md:text-3xl">
              Your own workflow, not generic AI output
            </h2>
            <p className="mt-4 text-sm leading-7 text-cream/60 md:text-base">
              Designed as a product-grade operating system that helps product
              managers accelerate research, strategy, and execution — not a chatbot
              wrapper, a real workflow built around how PM work actually happens.
            </p>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
