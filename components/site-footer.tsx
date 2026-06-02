import Link from "next/link";
import { CalendarDays, Linkedin, Mail, MessageCircle } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: Mail,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
  "Book a Meeting": CalendarDays,
};

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "AI Systems", href: "/ai-systems" },
  { label: "Experience", href: "/experience" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resume", href: "/Arunesh_Kumar_Resume.pdf" },
];

const connectLinks = [
  { label: "Email", href: "mailto:aruneshk30@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arunesh-k" },
  { label: "WhatsApp", href: "https://wa.me/919012666192" },
  { label: "Book a Meeting", href: "https://calendly.com/aruneshk30/30min" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-slate-300 bg-[#eef2f7]">
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
              AK
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Arunesh Kumar</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
              Building product systems at the intersection of data, growth, and AI.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900">Pages</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {pageLinks.map((link) => (
                <a key={link.label} href={link.href} className="block transition hover:text-slate-950">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900">Connect</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              {connectLinks.map(({ label, href }) => {
                const Icon = iconMap[label];
                return (
                  <a key={label} href={href} className="flex items-center gap-3 transition hover:text-slate-950">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        <div className="mt-6 flex flex-col gap-3 border-t-2 border-slate-300 pt-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Arunesh Kumar. All rights reserved.</p>
          <p>Built for product, growth, and systems thinking.</p>
        </div>
      </div>
    </footer>
  );
}
