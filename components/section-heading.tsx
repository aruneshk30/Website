export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
    </div>
  );
}
