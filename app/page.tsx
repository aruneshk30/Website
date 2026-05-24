import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroStats } from "@/lib/site-data";
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
      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
        Open Section
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-5 text-sm font-medium text-slate-500">
        {meta}
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
        Explore
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
        {/* background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.10),_transparent_26%)]" />

        <div className="absolute right-[10%] top-20 h-[420px] w-[420px] rounded-full bg-slate-300/20 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-500 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Product Manager | Growth & Digital Strategy
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              Arunesh <span className="text-slate-500">Kumar</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              I build revenue-driving product experiences across
              e-commerce systems, experimentation, and AI-powered
              workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                View Work
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/connect"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Connect
              </Link>
            </div>

            {/* metrics */}
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-2xl font-semibold tracking-tight text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[560px] lg:translate-x-8">
            {/* glow */}
            <div className="absolute right-10 top-10 h-[420px] w-[420px] rounded-full bg-slate-300/20 blur-3xl" />

            <div className="absolute right-12 top-16 h-[360px] w-[360px] rounded-full bg-indigo-100/40 blur-[90px]" />

            {/* image */}
            <div className="relative z-10">
              <Image
                src="/profile.png"
                alt="Arunesh Kumar"
                width={1272}
                height={1450}
                priority
                className="w-full object-contain drop-shadow-[0_35px_40px_rgba(15,23,42,0.18)]"
              />
            </div>

            {/* floating badge */}
            <div className="absolute bottom-6 left-0 z-20 rounded-[1.5rem] border border-slate-200 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <p className="text-sm font-semibold text-slate-900">
                Product · Growth · Systems
              </p>

              <p className="mt-1 max-w-[260px] text-sm leading-6 text-slate-600">
                Building revenue-driving product experiences and
                AI-powered workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE LINKS */}
      <section className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected Pages"
            title="Three spaces, one story"
            subtitle="Dedicated pages for projects, AI systems, and experience."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <CardLink
              href="/work"
              title="Projects"
              description="Detailed PM case studies with problem, solution and impact."
              meta="Checkout funnel • SKU pricing • Calculator"
            />

            <CardLink
              href="/ai-systems"
              title="AI Systems"
              description="PM Hub and 9-Agent CRO Workflow."
              meta="AI product systems"
            />

            <CardLink
              href="/experience"
              title="Experience"
              description="Detailed experience with outcomes and achievements."
              meta="Sierra • BoostGrad • MBA"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
