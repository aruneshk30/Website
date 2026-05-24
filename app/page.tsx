import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aiSystemCards, heroStats, workCaseStudies } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

function CardLink({
  href,
  title,
  description,
  meta,
}: {
  href: string;
  title: string;
  description: string;
  meta: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Open Section</div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-5 text-sm font-medium text-slate-500">{meta}</div>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
        Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.10),_transparent_26%),linear-gradient(180deg,_#f8fafc_0%,_#f4f7fb_100%)]" />
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-slate-200/35 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-500 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-slate-700" />
              Product Manager | Growth & Digital Strategy
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              Arunesh <span className="text-slate-500">Kumar</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              I build revenue-driving product experiences across e-commerce systems, experimentation, and AI-powered workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/work" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
                View Work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/connect" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950">
                Connect
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-slate-200 bg-slate-100" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),transparent_35%)]" />
              <Image
                src="/profile.jpg"
                alt="Arunesh Kumar"
                width={1272}
                height={1450}
                priority
                className="h-[430px] w-full object-cover object-[50%_0%] sm:h-[520px]"
              />
              <div className="border-t border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-900">Premium D2C / Product / Growth</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Clean, strategic portfolio built to showcase product thinking, system design, and measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected Pages"
            title="Three spaces, one story"
            subtitle="Your portfolio is split into dedicated landing pages so each part of the work gets room to breathe."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <CardLink
              href="/work"
              title="Projects"
              description="Detailed case studies with problem, solution, and impact."
              meta="Checkout funnel, SKU pricing, pricing calculator"
            />
            <CardLink
              href="/ai-systems"
              title="AI Systems"
              description="Landing page for PM Hub and 9-Agent CRO Workflow."
              meta="Two PM Hub links • One 9-agent workflow"
            />
            <CardLink
              href="/experience"
              title="Experience"
              description="Detailed experience page with cross-functional work, metrics, and growth narrative."
              meta="Sierra, BoostGrad, education, certifications"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why it works"
            title="The homepage stays lean"
            subtitle="It introduces you, shows your strongest metrics, and points people to the right deep-dive page."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {aiSystemCards.map((card) => (
              <Link key={card.title} href={card.href} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Featured System</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
                <p className="mt-5 text-sm font-medium text-slate-500">{card.meta}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
