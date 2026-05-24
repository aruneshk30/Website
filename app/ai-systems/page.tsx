import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { aiSystemCards } from "@/lib/site-data";

export default function AiSystemsPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">AI Systems</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">Systems that increase PM leverage</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              This page opens the two AI builds you wanted to showcase: the PM Research & Strategy Hub and the 9-Agent CRO Workflow.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-systems/pm-hub" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
              Open PM Hub <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ai-systems/cro-workflow" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950">
              Explore 9-Agent Workflow
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Systems"
            title="Two links, one story"
            subtitle="One card opens the PM Hub. The other opens the 9-agent product. The page also gives each system enough room to feel like a landing page, not a list."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {aiSystemCards.map((card) => (
              <Link key={card.title} href={card.href} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Open System</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
                <p className="mt-5 text-sm font-medium text-slate-500">{card.meta}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Navigation</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              From here you can go into the PM Hub or the 9-Agent CRO workflow. The PM Hub page also includes a small 9-agent teaser so the relationship between the two systems stays visible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
