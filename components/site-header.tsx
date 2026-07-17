"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10">
      {/* backdrop-blur lives here, NOT on <header> itself */}
      <div className="bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal text-sm font-semibold text-cream">
              AK
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-charcoal">Arunesh Kumar</div>
              <div className="text-xs text-charcoal/55">Product Manager | Growth & Digital Strategy</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex lg:gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-charcoal/70 transition hover:text-terracotta">
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-charcoal/10 text-charcoal md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Panel is a direct child of <header>, sibling of the blurred div above — no filter ancestor now */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-charcoal/40" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[80vw] flex-col bg-cream shadow-xl">
            <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
              <span className="text-sm font-semibold text-charcoal">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-charcoal/60 transition hover:bg-charcoal/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-charcoal transition hover:bg-sage-50 hover:text-sage-800"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
