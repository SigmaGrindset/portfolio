import { useTranslation, useL, type Loc } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectOverview({ paragraphs, num }: { paragraphs: Loc[]; num: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLDivElement>({
    selector: '[data-overview-p]',
    y: 16,
    stagger: 0.08,
  });

  return (
    <section className="py-24 border-b border-rule">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <SectionHeader num={num} title={t.project.overview} />
        <div className="grid grid-cols-12 gap-6">
          <div ref={ref} className="col-span-12 md:col-start-3 md:col-span-8 space-y-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                data-overview-p
                className="text-[1.1rem] leading-[1.7] max-w-[60ch]"
              >
                {l(p)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
