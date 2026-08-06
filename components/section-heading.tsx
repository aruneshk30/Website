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
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-terracotta">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-charcoal/65">{subtitle}</p>
    </div>
  );
}
