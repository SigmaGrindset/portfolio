import { useTranslation, useL, type Loc } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectOverview({ paragraphs, num }: { paragraphs: Loc[]; num: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLDivElement>({
    selector: '[data-overview-p]',
    y: 20,
    stagger: 0.1,
  });

  return (
    <section className="relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader num={num} title={t.project.overview} />
        <div className="grid grid-cols-12 gap-6">
          <div ref={ref} className="col-span-12 md:col-start-3 md:col-span-8 space-y-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                data-overview-p
                className={
                  'text-[1.05rem] leading-[1.7] ' + (i === 0 ? 'dropcap' : '')
                }
              >
                {l(p)}
              </p>
            ))}
          </div>
        </div>
        <style>{`
          .dropcap::first-letter {
            font-family: var(--font-serif);
            font-weight: 600;
            float: left;
            font-size: 5rem;
            line-height: 0.85;
            padding: 0.3rem 0.8rem 0 0;
            color: var(--color-accent);
          }
        `}</style>
      </div>
    </section>
  );
}
