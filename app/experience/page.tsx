import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experienceItems, skills } from "@/lib/site-data";

export default function ExperiencePage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Experience</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">Experience in detail</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A deeper look at the work, execution style, and measurable outcomes behind the resume.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-6">
            {experienceItems.map((job) => (
              <article key={job.role} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{job.period}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{job.role}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{job.company}</p>
                  </div>

                  <div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {job.metrics.map((metric) => (
                        <div key={metric} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 shadow-sm">
                          {metric}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 space-y-3">
                      {job.bullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3 text-sm leading-7 text-slate-600">
                          <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-slate-500" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#eef2f7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Education & Skills"
            title="What supports the work"
            subtitle="The portfolio also captures the training and tooling behind the product thinking."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Education</h3>
              <div className="mt-5 space-y-5 text-sm leading-7 text-slate-600">
                <div>
                  <p className="font-medium text-slate-900">MBA, Marketing & Analytics</p>
                  <p>Indian Institute of Technology Jodhpur · 2023 – 2025</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">B.Tech, Civil Engineering</p>
                  <p>Dr. APJ Abdul Kalam Technical University · 2016 – 2020</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Core Skills</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
