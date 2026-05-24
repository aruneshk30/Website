import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { workCaseStudies } from "@/lib/site-data";

export default function WorkLandingPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Projects</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">Selected work with real business impact</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A deeper look at the product work that matters most: problem discovery, solution design, execution, and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-8">
            {workCaseStudies.map((item) => (
              <article key={item.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{item.id}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.brief}</p>
                    <div className="mt-5">
                      <Link href="/connect" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                        Discuss this project <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Problem</div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.problem}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Solution</div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.solution}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Impact</div>
                      <div className="mt-3 space-y-3">
                        {item.impact.map((point) => (
                          <div key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                            <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-slate-500" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#eef2f7] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="How to read this page"
              title="Each card is a case study"
              subtitle="Open a project, read the problem, understand the solution, and scan the impact. That is the point of the page."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
