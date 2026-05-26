import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { pmHubAgents, pmHubModules } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

const highlights = [
  { value: "17", label: "AI modules" },
  { value: "100+", label: "PM workflows covered" },
  { value: "3", label: "communication sub-tools" },
  { value: "∞", label: "drafts saved" },
];

export default function PMHubPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-[linear-gradient(160deg,#ffffff_0%,#eff6ff_50%,#f0fdf4_100%)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">PM Hub</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">PM Research & Strategy Hub</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A complete product management command center for research, strategy, prioritization, communication, and experiment planning.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-systems/pm-hub/explore" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]">
            Explore PM Hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-3xl font-semibold tracking-tight text-slate-950">{item.value}</div>
              <div className="mt-1 text-sm text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Modules"
            title="17 modules, one operating system"
            subtitle="This layout comes from your PM Hub build, tightened into a cleaner premium visual language for the portfolio."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pmHubModules.map((module) => (
              <div key={module.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Communication Suite"
            title="Stakeholder communication built into the system"
            subtitle="This is where the tool becomes practical for real product work."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Email & Monday Updates</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Structured updates written from a short prompt plus tone selection.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">General Informed Reply</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Paste a message and generate a reply in multiple tones.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Stakeholder Analysis</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Decision framing, objections, next steps, and communication strategy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Related system"
            title="9-Agent CRO Workflow teaser"
            subtitle="The PM Hub page also shows the nine-agent structure so the relationship between the two builds stays visible."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pmHubAgents.map((agent) => (
              <div key={agent} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                {agent}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-systems/cro-workflow" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]">
            Open 9-Agent Workflow <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#eef2f7] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Built by a PM, for PMs"
              title="Your own workflow, not generic AI output"
              subtitle="Designed as a product-grade operating system that helps product managers accelerate research, strategy, and execution workflows."
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-systems/pm-hub/explore" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]">
            Explore PM Hub <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
      </section>
    </main>
  );
}
