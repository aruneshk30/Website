import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

// ── DATA ─────────────────────────────────────────────────
const stats = [
  { value: "8", label: "Departments mapped" },
  { value: "12 Days", label: "End-to-end launch cycle" },
  { value: "2", label: "Initiation paths documented" },
  { value: "4", label: "Stage gates with approvals" },
];

const departments = [
  { name: "Strategy", color: "bg-indigo-100 text-indigo-700" },
  { name: "Product", color: "bg-blue-100 text-blue-700" },
  { name: "Design", color: "bg-violet-100 text-violet-700" },
  { name: "Operations", color: "bg-amber-100 text-amber-700" },
  { name: "Logistics", color: "bg-orange-100 text-orange-700" },
  { name: "Content", color: "bg-green-100 text-green-700" },
  { name: "SEO", color: "bg-teal-100 text-teal-700" },
  { name: "Inventory", color: "bg-slate-100 text-slate-700" },
];

const stages = [
  {
    num: "Stage 0",
    title: "Proposal & Research",
    days: "2–3 Days",
    desc: "Category Manager or Product Team initiates. Keyword research, competitor analysis, and Product Definition Document (PDD) created covering variants, dimensions, price range, and target persona.",
  },
  {
    num: "Stage 1",
    title: "Idea Screening & Go Decision",
    days: "2–3 Days",
    desc: "Heads of all departments screen the idea. Feasibility, target price, sourcing, and construction issues discussed. Output is a formal Go/No-Go decision that prevents later redesigns.",
  },
  {
    num: "Stage 2",
    title: "Design & Content",
    days: "3 Days",
    desc: "Designer assigned with start and end dates. Initial draft with dimensions and knockdown image sent to 4 departments for approval. Final render triggers content writing and SEO work.",
  },
  {
    num: "Stage 3",
    title: "Pricing, Inventory & Launch",
    days: "4 Days",
    desc: "Pricing prepared from final render dimensions. Inventory set up. Final approval from Category Manager, Product Team, Operations, and Logistics before launch.",
  },
];

const artifacts = [
  {
    title: "New Product Development Process Map",
    tag: "Process Documentation · Cross-functional",
    desc: "End-to-end NPD workflow mapping two initiation paths — Category Manager and Product Team — across 8 departments and 4 stage gates in a 12-day launch cycle. Adopted as the standard operating procedure and onboarding document at Sierra Living Concepts.",
    canvaUrl: "https://www.canva.com/design/DAHPVJk5M5A/LpcmoWFga1LMwvavg5WTnQ/view", // ← Replace with your Canva embed URL
    pdfUrl: "/npd-process.pdf", // ← Replace with your PDF path if using Option 2
    period: "Management Trainee (Product Strategy) · Jun–Oct 2025",
  },
];

// ── PAGE ─────────────────────────────────────────────────
export default function ArtifactsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-slate-950 px-4 pb-16 pt-28 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">
            PM Artifacts
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Product{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Documentation & Process Work
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Real artifacts from product work at Sierra Living Concepts —
            process maps, workflows, and documentation that show how I think
            about cross-functional execution and operational clarity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-14 md:px-6 lg:px-8">

        {/* Artifact Card */}
        <section className="rounded-2xl border border-slate-200 bg-white overflow-hidden">

          {/* Card Header */}
          <div className="border-b border-slate-200 bg-slate-950 p-8">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-indigo-900/60 px-3 py-1 text-xs font-semibold text-indigo-300">
                Process Map
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                Cross-functional · 8 Departments
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              New Product Development Process
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              End-to-end NPD workflow designed for Sierra Living Concepts —
              mapping two initiation paths across 8 departments, 4 stage
              gates, and a 12-day launch cycle. Adopted as the standard
              operating procedure and onboarding reference across teams.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              {artifacts[0].period}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-slate-200 border-b border-slate-200 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-6 py-5 text-center">
                <p className="text-2xl font-bold tracking-tight text-slate-950">
                  {s.value}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Process Map Embed */}
          <div className="p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Process Map
            </p>

            {/* ── OPTION 1: Canva Embed ── */}
            {/* Replace YOUR_CANVA_EMBED_URL with your actual Canva embed URL */}
            {/* To get it: In Canva → Share → More → Embed → Copy embed URL */}
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <iframe
                src="https://www.canva.com/design/DAHPVJk5M5A/LpcmoWFga1LMwvavg5WTnQ/view"
                width="100%"
                height="600"
                allowFullScreen
                className="w-full"
                title="New Product Development Process Map"
              />
            </div>

            {/* ── OPTION 2: If using PDF instead of Canva embed ── */}
            {/* Uncomment this and comment out the iframe above */}
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <iframe
                src="/public/New Product Development.pdf"
                width="100%"
                height="700"
                className="w-full"
                title="New Product Development Process Map"
              />
            </div>

            {/* Open in new tab link */}
            <div className="mt-4 flex justify-end">
              <a
                href="https://www.canva.com/design/DAHPVJk5M5A/LpcmoWFga1LMwvavg5WTnQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Open full map <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-950">
            Process Overview
          </h2>

          {/* Departments */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Departments Covered
            </p>
            <div className="flex flex-wrap gap-2">
              {departments.map((d) => (
                <span
                  key={d.name}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${d.color}`}
                >
                  {d.name}
                </span>
              ))}
            </div>
          </div>

          {/* Stages */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Stage Breakdown
            </p>
            {stages.map((s, i) => (
              <div
                key={s.num}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                      {i}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">
                        {s.num}
                      </span>
                      <h3 className="text-sm font-bold text-slate-950">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-semibold text-amber-700">
                    {s.days}
                  </span>
                </div>
                <p className="pl-10 text-sm leading-6 text-slate-500">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Two Initiation Paths */}
        <section>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            Two Initiation Paths
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Initiated by Category Manager",
                desc: "Category Manager identifies a market gap through keyword research, competitor analysis, and customer demand signals. Shares requirements with the Product Team who lead research and ideation.",
                color: "border-indigo-200 bg-indigo-50",
                tag: "text-indigo-600",
              },
              {
                title: "Initiated by Product Team",
                desc: "Product Team identifies and proposes a new product opportunity. Submits proposal to Team Lead and Category Manager for approval before research and ideation begins.",
                color: "border-blue-200 bg-blue-50",
                tag: "text-blue-600",
              },
            ].map((p) => (
              <div
                key={p.title}
                className={`rounded-xl border p-5 ${p.color}`}
              >
                <h3 className={`mb-2 text-sm font-bold ${p.tag}`}>
                  {p.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Matters */}
        <section className="rounded-2xl bg-slate-950 p-8">
          <h2 className="mb-6 text-xl font-bold text-white">
            Why This Process Was Built
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Eliminate ambiguity in cross-functional launches.",
                body: "Before this process map, different departments had different understandings of when they were involved and what they needed to deliver. This map made every touchpoint, approval, and handoff explicit.",
              },
              {
                n: "2",
                title: "Prevent late-stage redesigns.",
                body: "The formal Go decision at Stage 1 — covering feasibility, pricing, and sourcing — was specifically designed to surface blockers early and prevent costly design changes after the Design phase had begun.",
              },
              {
                n: "3",
                title: "Create institutional knowledge.",
                body: "The process map plus post-launch review documents were adopted as the onboarding reference for new team members and a handover document when categories changed managers.",
              },
            ].map((l) => (
              <div key={l.n} className="flex gap-4">
                <span className="mt-0.5 text-2xl font-bold text-indigo-400">
                  {l.n}
                </span>
                <div>
                  <p className="font-semibold text-white">{l.title}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-400">
                    {l.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back Link */}
        <Link
          href="/case-studies"
          className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              View More Work
            </p>
            <p className="mt-1 text-lg font-bold text-slate-950">
              Case Studies →
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-indigo-500 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  );
}
