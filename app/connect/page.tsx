import React from "react";
import Link from "next/link";
import { CalendarDays, Linkedin, Mail, MessageCircle, ArrowRight, Download } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: Mail,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
  "Book a Meeting": CalendarDays,
};

const contactLinks = [
  { label: "Email", href: "mailto:aruneshk30@gmail.com", tone: "bg-dustyblue-50 text-dustyblue-800" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arunesh-k", tone: "bg-sage-50 text-sage-800" },
  { label: "WhatsApp", href: "https://wa.me/919012666192", tone: "bg-sand text-sand-800" },
  { label: "Book a Meeting", href: "https://calendly.com/aruneshk30/30min", tone: "bg-terracotta/10 text-terracotta-600" },
];

const openTo = [
  {
    title: "Product Conversations",
    desc: "Discussing product strategy, prioritization, funnel thinking, or anything PM-related.",
    tone: "border-dustyblue-800/15 hover:bg-dustyblue-50",
  },
  {
    title: "AI & Systems",
    desc: "Exploring AI workflows, multi-agent systems, and how they apply to real product work.",
    tone: "border-sage-700/15 hover:bg-sage-50",
  },
  {
    title: "Collaborations",
    desc: "Working together on something interesting - tools, ideas, or shared problems worth solving.",
    tone: "border-sand-600/20 hover:bg-sand",
  },
];

export default function ConnectPage() {
  return (
    <main className="bg-cream">

      {/* Hero */}
      <section className="border-b border-charcoal/10 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-terracotta">Connect</p>
              <h1 className="text-4xl font-bold tracking-tight text-charcoal md:text-6xl">
                Let's{" "}
                <span className="font-serif font-normal text-sage-700">talk</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/65">
                If you have something interesting to discuss - reach out.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Open to */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Open to"
              title="What I enjoy talking about"
              subtitle="These are the kinds of conversations I find most interesting and useful."
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {openTo.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div
                  className={`h-full rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${item.tone}`}
                >
                  <h3 className="text-lg font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/60">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reach out + Resume */}
      <section className="border-t border-charcoal/10 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-6">

            {/* Left — contact links */}
            <FadeIn>
              <SectionHeading
                eyebrow="Reach out"
                title="Pick your channel"
                subtitle="I am reachable on all of these. Book a call if you would prefer to talk directly."
              />
              <div className="mt-8 flex flex-col gap-3">
                {contactLinks.map(({ label, href, tone }) => {
                  const Icon = iconMap[label];
                  return (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-cream px-5 py-4 text-sm font-medium text-charcoal transition hover:translate-x-1 hover:border-terracotta/30"
                    >
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${tone}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      {label}
                      <ArrowRight className="ml-auto h-4 w-4 text-charcoal/30" />
                    </Link>
                  );
                })}
              </div>
            </FadeIn>

            {/* Divider */}
            <div className="hidden bg-charcoal/10 lg:block" />

            {/* Right — resume + response time */}
            <FadeIn delay={100} className="flex flex-col justify-center gap-6">
              <div className="rounded-2xl border border-charcoal/10 bg-cream p-7">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">Resume</p>
                <h3 className="mt-3 text-xl font-semibold text-charcoal">Download my resume</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/60">
                  A full summary of my work, impact, and experience as a Product Manager.
                </p>
                <Link
                  href="/Arunesh_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-terracotta px-5 py-3 text-sm font-semibold text-white transition hover:bg-terracotta-600"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </Link>
              </div>

              <div className="rounded-2xl border border-sage-700/15 bg-sage-50 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-sage-800">Response time</p>
                <p className="mt-3 text-sm leading-7 text-charcoal/65">
                  I typically respond within <span className="font-semibold text-charcoal">24 hours</span> - whichever channel you use.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

    </main>
  );
}
