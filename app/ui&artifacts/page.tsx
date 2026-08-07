import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Maximize2, Layers } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

// ── DATA ─────────────────────────────────────────────────
const stats = [
  { value: "8", label: "Departments mapped" },
  { value: "12 Days", label: "End-to-end launch cycle" },
  { value: "2", label: "Initiation paths documented" },
  { value: "4", label: "Stage gates with approvals" },
];

const departments = [
  { name: "Strategy", tone: "bg-dustyblue-50 text-dustyblue-800" },
  { name: "Product", tone: "bg-sage-50 text-sage-800" },
  { name: "Design", tone: "bg-sand text-sand-800" },
  { name: "Operations", tone: "bg-terracotta/10 text-terracotta-600" },
  { name: "Logistics", tone: "bg-dustyblue-50 text-dustyblue-800" },
  { name: "Content", tone: "bg-sage-50 text-sage-800" },
  { name: "SEO", tone: "bg-sand text-sand-800" },
  { name: "Inventory", tone: "bg-charcoal/10 text-charcoal/75" },
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

const PDF_URL = "/New Product Development.pdf";
const CANVA_URL = "https://www.canva.com/design/DAHPVJk5M5A/LpcmoWFga1LMwvavg5WTnQ/view";

// ── PAGE ─────────────────────────────────────────────────
export default function ArtifactsPage() {
  return (
    <main className="min-h-screen bg-cream">

      {/* ── HERO ── */}
      <section className="border-b border-charcoal/10 bg-white px-4 pb-14 pt-16 md:px-6 md:pt-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-charcoal/55 transition hover:text-terracotta"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Link>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
              UI and Artifacts
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-charcoal md:text-5xl">
              Product{" "}
              <span className="font-serif font-normal text-sage-700">
                Documentation & Process Work
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-charcoal/65">
              Real artifacts from product work at Sierra Living Concepts —
              process maps, workflows, and documentation that show how I think
              about cross-functional execution and operational clarity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-14 md:px-6 lg:px-8">

        {/* ── ARTIFACT CARD ── */}
        <FadeIn>
          <section className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white">

            {/* Card header */}
            <div className="border-b border-charcoal/10 bg-charcoal p-6 md:p-8">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-dustyblue-50 px-3 py-1 text-xs font-semibold text-dustyblue-800">
                  Process Map
                </span>
                <span className="rounded-full bg-cream/10 px-3 py-1 text-xs font-semibold text-cream/70">
                  Cross-functional · 8 Departments
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-cream md:text-3xl">
                New Product Development Process
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-cream/60">
                End-to-end NPD workflow designed for Sierra Living Concepts —
                mapping two initiation paths across 8 departments, 4 stage gates,
                and a 12-day launch cycle. Adopted as the standard operating
                procedure and onboarding reference across teams.
              </p>
              <p className="mt-3 text-xs text-cream/40">
                Management Trainee (Product Strategy) · Jun–Oct 2025
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px border-b border-charcoal/10 bg-charcoal/10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white px-6 py-5 text-center">
                  <p className="text-2xl font-bold tracking-tight text-charcoal">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs text-charcoal/55">{s.label}</p>
                </div>
              ))}
            </div>

            {/* ── PDF SECTION ── */}
            <div className="p-4 md:p-6 lg:p-8">

              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-charcoal/40">
                Process Map — PDF
              </p>

              {/* ── MOBILE: download button ── */}
              <div className="block md:hidden">
                <div className="rounded-xl border border-charcoal/10 bg-cream p-8 text-center">
                  <Layers className="mx-auto mb-3 h-10 w-10 text-charcoal/35" />
                  <p className="mb-1 text-sm font-semibold text-charcoal">
                    New Product Development Process
                  </p>
                  <p className="mb-5 text-xs leading-5 text-charcoal/55">
                    Best viewed on desktop. Tap below to open the full PDF or
                    Canva view.
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    <a
                      href={PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-charcoal/15 bg-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-terracotta/40"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open PDF
                    </a>
                    <a
                      href={CANVA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:bg-terracotta-600"
                    >
                      <Maximize2 className="h-4 w-4" />
                      Full Page View
                    </a>
                  </div>
                </div>
              </div>

              {/* ── DESKTOP: tall full-width PDF iframe ── */}
              <div className="hidden md:block">
                <div className="overflow-hidden rounded-xl border border-charcoal/10">
                  <iframe
                    src={PDF_URL}
                    width="100%"
                    height="1000"
                    className="w-full"
                    title="New Product Development Process Map"
                    style={{ minHeight: "1000px" }}
                  />
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-charcoal/45">
                    Sierra Living Concepts · New Product Development Process · 2025
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal/55 transition hover:text-charcoal"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Open PDF
                    </a>
                    <span className="text-charcoal/20">·</span>
                    <a
                      href={CANVA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 transition hover:text-terracotta"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      Full page view on Canva
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ── PROCESS OVERVIEW ── */}
        <FadeIn>
          <section className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight text-charcoal">
              Process Overview
            </h2>

            {/* Departments */}
            <div className="rounded-xl border border-charcoal/10 bg-white p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-charcoal/40">
                Departments Covered
              </p>
              <div className="flex flex-wrap gap-3">
                {departments.map((d) => (
                  <span
                    key={d.name}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold ${d.tone}`}
                  >
                    {d.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Stages */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40">
                Stage Breakdown
              </p>
              {stages.map((s, i) => (
                <div
                  key={s.num}
                  className="rounded-xl border border-charcoal/10 bg-white p-5"
                >
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-charcoal text-xs font-bold text-cream">
                        {i}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-terracotta">
                          {s.num}
                        </span>
                        <h3 className="text-sm font-bold text-charcoal">
                          {s.title}
                        </h3>
                      </div>
                    </div>
                    <span className="rounded-full bg-sand px-3 py-0.5 text-xs font-semibold text-sand-800">
                      {s.days}
                    </span>
                  </div>
                  <p className="pl-10 text-sm leading-6 text-charcoal/60">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── TWO INITIATION PATHS ── */}
        <FadeIn>
          <section>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-charcoal/40">
              Two Initiation Paths
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Initiated by Category Manager",
                  desc: "Category Manager identifies a market gap through keyword research, competitor analysis, and customer demand signals. Shares requirements with the Product Team who lead research and ideation.",
                  tone: "border-dustyblue-800/15 bg-dustyblue-50",
                  tag: "text-dustyblue-800",
                },
                {
                  title: "Initiated by Product Team",
                  desc: "Product Team identifies and proposes a new product opportunity. Submits proposal to Team Lead and Category Manager for approval before research and ideation begins.",
                  tone: "border-sage-700/15 bg-sage-50",
                  tag: "text-sage-800",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className={`rounded-xl border p-5 ${p.tone}`}
                >
                  <h3 className={`mb-2 text-sm font-bold ${p.tag}`}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-6 text-charcoal/65">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── WHY THIS MATTERS ── */}
        <FadeIn>
          <section className="rounded-2xl bg-charcoal p-6 md:p-8">
            <h2 className="mb-6 text-xl font-bold text-cream">
              Why This Process Was Built
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
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
                  <span className="mt-0.5 text-2xl font-bold text-terracotta">
                    {l.n}
                  </span>
                  <div>
                    <p className="font-semibold text-cream">{l.title}</p>
                    <p className="mt-1 text-sm leading-7 text-cream/60">
                      {l.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── BACK LINK ── */}
        <FadeIn>
          <Link
            href="/case-studies"
            className="group flex items-center justify-between rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-md"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40">
                View More Work
              </p>
              <p className="mt-1 text-lg font-bold text-charcoal">
                Case Studies →
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-terracotta transition group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>

     <div className="h-8 md:h-16" />
    </main>
  );
}
