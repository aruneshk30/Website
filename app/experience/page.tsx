import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { experienceItems, skills } from "@/lib/site-data";

const skillTones = [
  "bg-dustyblue-50 text-dustyblue-800",
  "bg-sage-50 text-sage-800",
  "bg-sand text-sand-800",
  "bg-terracotta/10 text-terracotta-600",
];

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
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn delay={80}>
              <div className="h-full rounded-2xl border border-charcoal/10 bg-cream p-7">
                <h3 className="text-xl font-semibold text-charcoal">Education</h3>
                <div className="mt-5 space-y-5 text-sm leading-7 text-charcoal/65">
                  <div>
                    <p className="font-medium text-charcoal">MBA, Marketing & Analytics</p>
                    <p>Indian Institute of Technology Jodhpur · 2023 – 2025</p>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">B.Tech, Civil Engineering</p>
                    <p>Dr. APJ Abdul Kalam Technical University · 2016 – 2020</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={140}>
              <div className="h-full rounded-2xl border border-charcoal/10 bg-cream p-7">
                <h3 className="text-xl font-semibold text-charcoal">Core Skills</h3>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {skills.map((skill, i) => (
                    <div
                      key={skill}
                      className={`rounded-xl px-4 py-3 text-sm font-medium ${skillTones[i % skillTones.length]}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
