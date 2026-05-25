import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Briefcase,
  Monitor,
  TrendingUp,
  Sparkles,
  Blocks,
} from "lucide-react";
function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
      {children}
    </h2>
  );
}

function SectionSub({ children }: { children: string }) {
  return (
    <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes drift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(40px,-30px) scale(1.05); }
          66%     { transform: translate(-20px,40px) scale(0.95); }
        }
        @keyframes spinRing {
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%,100% { opacity:1; transform:scale(1); }
          50%     { opacity:0.4; transform:scale(1.5); }
        }
        @keyframes pulseDot {
          0%,100% { box-shadow:0 0 0 0 rgba(34,197,94,0.4); }
          50%     { box-shadow:0 0 0 7px rgba(34,197,94,0); }
        }
      `}</style>

      {/* ── FIXED BACKGROUND ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div
          className="absolute -top-48 -right-24 h-[600px] w-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle,#c7d2fe,#818cf8)",
            filter: "blur(80px)",
            animation: "drift 18s ease-in-out infinite",
          }}
        />

        <div
          className="absolute bottom-20 -left-24 h-[380px] w-[380px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle,#bae6fd,#38bdf8)",
            filter: "blur(80px)",
            animation: "drift 22s ease-in-out -7s infinite",
          }}
        />
      </div>

      <main className="relative z-10">

        {/* ── HERO ── */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-24 lg:px-8"
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Left */}
            <div>

              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-slate-500 shadow-sm backdrop-blur">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-emerald-500"
                  style={{ animation: "pulseDot 2s ease-in-out infinite" }}
                />
                Arunesh Kumar · Product Manager
              </div>

              {/* Main Heading */}
              <h1 className="max-w-4xl text-6xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
                Product Manager
                <span className="text-slate-300"> | </span>
                <span className="bg-gradient-to-r from-slate-900 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Growth &amp; Digital Strategy
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-500 md:text-2xl">
                I build revenue-driving product experiences across e-commerce
                systems, experimentation, and AI-powered workflows.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-700 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]"
                >
                  View Work <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-5">
                {stats.map((s, i) => {
                  const bg = [
                    "from-blue-50 to-indigo-50",
                    "from-emerald-50 to-teal-50",
                    "from-amber-50 to-orange-50",
                    "from-violet-50 to-fuchsia-50",
                  ][i];

                  return (
                    <div
                      key={s.label}
                      className={`rounded-[1.7rem] border border-slate-200/80 bg-gradient-to-br ${bg} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md`}
                    >
                      <p className="text-4xl font-bold tracking-tight text-slate-950">
                        {s.value}
                      </p>

                      <p className="mt-2 text-base text-slate-500">
                        {s.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right */}
            <div className="relative hidden lg:flex justify-center">
              <div className="relative flex h-[560px] w-[500px] items-center justify-center">

                {[
                  { size: 380, dur: "32s", dir: "normal" },
                  { size: 500, dur: "48s", dir: "reverse" },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-indigo-200/40"
                    style={{
                      width: r.size,
                      height: r.size,
                      top: "50%",
                      left: "50%",
                      animation: `spinRing ${r.dur} linear infinite`,
                      animationDirection: r.dir as any,
                    }}
                  />
                ))}

                <div className="relative z-10">
                  <Image
                    src="/profile.png"
                    alt="Arunesh Kumar"
                    width={430}
                    height={500}
                    priority
                    className="rounded-3xl object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW ── */}
        <section className="bg-white/70 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-16">
              <SectionLabel>Overview</SectionLabel>
              <SectionTitle>Three spaces, one story</SectionTitle>

              <SectionSub>
                Dedicated pages for projects, AI systems, and experience.
              </SectionSub>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {previews.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                    Preview
                  </p>

                  <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
                    {p.label}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-500">
                    {p.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
                    Open
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="work" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-16">
              <SectionLabel>Projects</SectionLabel>
              <SectionTitle>Impact through product</SectionTitle>

              <SectionSub>
                Three projects with measurable business outcomes.
              </SectionSub>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                        Case Study
                      </p>

                      <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                        {p.title}
                      </h3>
                    </div>

                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500">
                      <p.Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <p className="text-lg leading-8 text-slate-500">
                    {p.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
                    {p.impact}
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI SYSTEMS ── */}
        <section
          id="ai-systems"
          className="border-y border-slate-200 bg-white/70 py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-16">
              <SectionLabel>AI Systems</SectionLabel>
              <SectionTitle>AI systems built for leverage</SectionTitle>

              <SectionSub>
                AI-powered systems designed to amplify PM and growth workflows.
              </SectionSub>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {aiSystems.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                      <s.Icon className="h-7 w-7" />
                    </div>

                    <div>
                      <h3 className="text-4xl font-bold tracking-tight text-slate-950">
                        {s.title}
                      </h3>

                      <p className="mt-4 text-lg leading-8 text-slate-500">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
                    Open system
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-16">
              <SectionLabel>Experience</SectionLabel>
              <SectionTitle>Experience snapshot</SectionTitle>

              <SectionSub>
                Product, growth, systems, and experimentation experience.
              </SectionSub>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {experience.map((e, i) => (
                <div
                  key={e.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                    {i === 0 ? "Current Role" : "Previous Role"}
                  </p>

                  <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
                    {e.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-500">
                    {e.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-indigo-600">
                    {e.role}
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-20 flex flex-wrap items-center justify-center gap-10 border-t border-slate-200 pt-8">
              {["#home", "#work", "#ai-systems", "#experience"].map((href) => (
                <Link
                  key={href}
                  href={href}
                  className="text-lg font-semibold text-slate-500 transition hover:text-slate-900"
                >
                  {href.replace("#", "").replace("-", " ")}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
