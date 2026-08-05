"use client";
import { useEffect, useRef, useState } from "react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fillPercent, setFillPercent] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStates, setActiveStates] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    function updateFill() {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const triggerY = window.innerHeight * 0.4;
      const scrolled = triggerY - rect.top;
      const pct = Math.min(100, Math.max(0, (scrolled / rect.height) * 100));
      setFillPercent(pct);
    }
    updateFill();
    window.addEventListener("scroll", updateFill, { passive: true });
    window.addEventListener("resize", updateFill);
    return () => {
      window.removeEventListener("scroll", updateFill);
      window.removeEventListener("resize", updateFill);
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStates((prev) => {
              if (prev[i]) return prev;
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items.length]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-charcoal/10 md:left-[19px]" />
      <div
        className="absolute left-[15px] top-2 w-px bg-terracotta transition-[height] duration-200 ease-out md:left-[19px]"
        style={{ height: `${fillPercent}%` }}
      />

      <div>
        {items.map((job, i) => (
          <div
            key={job.role + job.period}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={`relative rounded-2xl pb-10 pl-10 pt-1 transition-all duration-700 hover:bg-white/60 md:pl-14 ${
              i < items.length - 1 ? "border-b border-charcoal/8 mb-2" : ""
            } ${activeStates[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <span
              className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-500 md:h-10 md:w-10 ${
                activeStates[i]
                  ? "scale-100 border-terracotta bg-terracotta text-white"
                  : "scale-90 border-charcoal/15 bg-cream text-charcoal/30"
              }`}
            >
              <span className="text-xs font-bold md:text-sm">{i + 1}</span>
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">{job.period}</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-charcoal md:text-3xl">{job.role}</h3>
            <p className="mt-1 text-sm font-medium text-sage-700">{job.company}</p>

            <div className="mt-6 space-y-4">
              {job.bullets.map((b, bi) => (
                <div
                  key={b}
                  className={`flex gap-3 text-sm leading-7 text-charcoal/70 transition-all duration-500 ease-out md:text-base ${
                    activeStates[i] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                  }`}
                  style={{ transitionDelay: activeStates[i] ? `${150 + bi * 90}ms` : "0ms" }}
                >
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
