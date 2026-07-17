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
  { label: "UI & Artifacts", href: "/ui&artifacts" },
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
    <footer className="border-t border-charcoal/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">

          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-terracotta text-sm font-semibold text-white">
              AK
            </div>
            <h3 className="mt-4 text-xl font-semibold text-cream">Arunesh Kumar</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-cream/60">
              Building product systems at the intersection of data, growth, and AI.
            </p>
          </div>

          <div>
            <h4 className="border-b border-cream/10 pb-2 text-sm font-semibold text-cream">Pages</h4>
            <div className="mt-4 space-y-3 text-sm text-cream/60">
              {pageLinks.map((link) => (
                <a key={link.label} href={link.href} className="block transition hover:text-terracotta">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="border-b border-cream/10 pb-2 text-sm font-semibold text-cream">Connect</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream/60">
              {connectLinks.map(({ label, href }) => {
                const Icon = iconMap[label];
                return (
                  <a key={label} href={href} className="flex items-center gap-3 transition hover:text-terracotta">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cream/10 bg-white/5">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Arunesh Kumar. All rights reserved.</p>
          <p>Built for product, growth, and systems thinking.</p>
        </div>
      </div>
    </footer>
  );
}
