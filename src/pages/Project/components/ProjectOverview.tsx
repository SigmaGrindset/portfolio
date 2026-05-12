import { useTranslation, useL, type Loc } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectOverview({ paragraphs, num }: { paragraphs: Loc[]; num: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLDivElement>({ selector: '[data-overview-p]', y: 24, stagger: 0.12 });

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader num={num} title={t.project.overview} />
        <div ref={ref} className="max-w-[760px] space-y-5">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              data-overview-p
              className="text-[color:var(--color-text-secondary)] text-[1.05rem] leading-relaxed"
            >
              {l(p)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
