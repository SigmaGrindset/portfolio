import { useTranslation, useL, type Loc } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectFeatures({ features, num }: { features: Loc[]; num: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLUListElement>({
    selector: '[data-feature]',
    y: 16,
    stagger: 0.05,
  });

  return (
    <section className="relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader num={num} title={t.project.features} />
        <div className="grid grid-cols-12 gap-6">
          <ul ref={ref} className="col-span-12 md:col-start-3 md:col-span-10">
            {features.map((f, i) => (
              <li
                key={i}
                data-feature
                className="grid grid-cols-12 gap-4 py-3 border-b border-rule items-baseline"
              >
                <span className="col-span-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="col-span-11 font-serif text-lg md:text-xl leading-[1.4]">
                  {l(f)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
