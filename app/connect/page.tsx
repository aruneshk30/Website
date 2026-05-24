import { CalendarDays, Linkedin, Mail, MessageCircle } from "lucide-react";
import { connectLinks } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: Mail,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
  "Book a Meeting": CalendarDays,
};

export default function ConnectPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Connect</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">Let’s connect</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Reach out directly or book time on my calendar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-5">
            {connectLinks.map((link) => {
              const Icon = iconMap[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-1 hover:text-slate-950"
                  aria-label={link.label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
            <SectionHeading
              eyebrow="Calendar"
              title="Book a meeting"
              subtitle="Add your Calendly link and this page becomes your booking entry point."
            />
            <div className="mt-6">
              <a href="https://calendly.com/your-link" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
                Open booking calendar
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
