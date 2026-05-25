import React from "react";
import Link from "next/link";
import { CalendarDays, Linkedin, Mail, MessageCircle, ArrowRight, Download } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: Mail,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
  "Book a Meeting": CalendarDays,
};

const contactLinks = [
  { label: "Email", href: "mailto:aruneshk30@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arunesh-k" },
  { label: "WhatsApp", href: "https://wa.me/919012666192" },
  { label: "Book a Meeting", href: "https://calendly.com/aruneshk30/30min" },
];

const openTo = [
  {
    title: "Product Conversations",
    desc: "Discussing product strategy, prioritization, funnel thinking, or anything PM-related.",
    hover: "hover:border-indigo-200 hover:bg-indigo-50",
  },
  {
    title: "AI & Systems",
    desc: "Exploring AI workflows, multi-agent systems, and how they apply to real product work.",
    hover: "hover:border-blue-200 hover:bg-blue-50",
  },
  {
    title: "Collaborations",
    desc: "Working together on something interesting - tools, ideas, or shared problems worth solving.",
    hover: "hover:border-emerald-200 hover:bg-emerald-50",
  },
];

export default function ConnectPage() {
  return (
    <main>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Connect</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{"Let's talk"}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
              If you have something interesting to discuss - reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Open to */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open to"
            title="What I enjoy talking about"
            subtitle="These are the kinds of conversations I find most interesting and useful."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {openTo.map((item) => (
              <div
                key={item.title}
                className={`rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${item.hover}`}
              >
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reach out + Resume */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-indigo-50 to-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1px_1fr]">

            {/* Left — contact links */}
            <div>
              <SectionHeading
                eyebrow="Reach out"
                title="Pick your channel"
                subtitle="I am reachable on all of these. Book a call if you would prefer to talk directly."
              />
              <div className="mt-8 flex flex-col gap-3">
                {contactLinks.map(({ label, href }) => {
                  const Icon = iconMap[label];
                  return (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm transition hover:translate-x-1 hover:border-indigo-200 hover:bg-indigo-50 hover:text-slate-950"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                        <Icon className="h-4 w-4" />
                      </span>
                      {label}
                      <ArrowRight className="ml-auto h-4 w-4 text-slate-300" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden bg-slate-200 lg:block" />

            {/* Right — resume + response time */}
            <div className="flex flex-col justify-center gap-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Resume</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">Download my resume</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  A full summary of my work, impact, and experience as a Product Manager.
                </p>
                <Link
                  href="/Arunesh_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-[1.02]"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </Link>
              </div>

              <div className="rounded-[1.75rem] border border-indigo-100 bg-indigo-50 p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Response time</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  I typically respond within <span className="font-semibold text-slate-900">24 hours</span> - whichever channel you use.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
