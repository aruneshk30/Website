import Link from "next/link";
import { navLinks } from "@/lib/site-data";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-soft">
            AK
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-slate-950">Arunesh Kumar</div>
            <div className="text-xs text-slate-500">Product Manager | Growth & Digital Strategy</div>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:flex-nowrap sm:gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-600 transition hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
