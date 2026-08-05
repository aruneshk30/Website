import { GraduationCap, Target, TrendingUp, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { experienceItems, skillGroups } from "@/lib/site-data";

const education = [
  { degree: "MBA, Marketing & Analytics", school: "Indian Institute of Technology Jodhpur", period: "2023 – 2025" },
  { degree: "B.Tech, Civil Engineering", school: "Dr. APJ Abdul Kalam Technical University", period: "2016 – 2020" },
];

const groupIcons = [Target, TrendingUp, Wrench];

export default function ExperiencePage() {
  return (
    <main className="bg-cream">
      <section className="border-b border-charcoal/10 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-terracotta">Experience</p>
              <h1 className="text-4xl font-bold tracking-tight text-charcoal md:text-6xl">
                Experience{" "}
                <span className="font-serif font-normal text-sage-700">in detail</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/65">
                A deeper look at the work, execution style, and measurable outcomes behind the resume.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <ExperienceTimeline items={experienceItems} />
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Education & Skills"
              title="What supports the work"
              subtitle="The portfolio also captures the training and tooling behind the product thinking."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Education */}
            <FadeIn delay={80}>
              <div className="h-full rounded-2xl border border-charcoal/10 bg-cream p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-dustyblue-50 text-dustyblue-800">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-charcoal">Education</h3>

                <div className="relative mt-6 space-y-7 border-l-2 border-charcoal/10 pl-6">
                  {education.map((e) => (
                    <div key={e.degree} className="relative">
                      <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full border-2 border-cream bg-dustyblue-600" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-dustyblue-800/70">
                        {e.period}
                      </p>
                      <p className="mt-1 font-semibold text-charcoal">{e.degree}</p>
                      <p className="mt-0.5 text-sm text-charcoal/60">{e.school}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Skills — grouped, uncolored */}
            <FadeIn delay={140}>
              <div className="h-full rounded-2xl border border-charcoal/10 bg-cream p-7">
                <h3 className="text-xl font-semibold text-charcoal">Core Skills</h3>
                <div className="mt-6 space-y-6">
                  {skillGroups.map((group, gi) => {
                    const Icon = groupIcons[gi % groupIcons.length];
                    return (
                      <div key={group.label}>
                        <div className="mb-3 flex items-center gap-2">
                          <Icon className="h-4 w-4 text-charcoal/40" />
                          <p className="text-xs font-bold uppercase tracking-widest text-charcoal/45">
                            {group.label}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          {group.items.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-charcoal/15 bg-white px-4 py-2 text-xs font-medium text-charcoal/75 transition hover:border-terracotta/40 hover:text-terracotta-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
