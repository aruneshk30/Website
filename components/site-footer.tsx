import Link from "next/link";
import { CalendarDays, Linkedin, Mail, MessageCircle } from "lucide-react";

const footerColumns = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/Projects" },
      { label: "AI Systems", href: "/ai-systems" },
      { label: "Experience", href: "/experience" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Email", href: "mailto:aruneshk30@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/arunesh-k" },
      { label: "WhatsApp", href: "https://wa.me/919012666192" },
      { label: "Book a Meeting", href: "https://calendly.com/your-link" },
    ],
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: Mail,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
  "Book a Meeting": CalendarDays,
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#eef2f7]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
              AK
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Arunesh Kumar</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
              Product Manager shipping outcomes that move revenue.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900">{column.title}</h4>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {column.links.map((link) => (
                  <a key={link.label} href={link.href} className="block transition hover:text-slate-950">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className="border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900">Quick Contact</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              {["Email", "LinkedIn", "WhatsApp", "Book a Meeting"].map((label) => {
                const Icon = iconMap[label];
                const href =
                  label === "Email"
                    ? "mailto:aruneshk30@gmail.com"
                    : label === "LinkedIn"
                      ? "https://linkedin.com/in/arunesh-k"
                      : label === "WhatsApp"
                        ? "https://wa.me/919012666192"
                        : "https://calendly.com/your-link";
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

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-300 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Arunesh Kumar. All rights reserved.</p>
          <p>Built for product, growth, and systems thinking.</p>
        </div>
      </div>
    </footer>
  );
}
