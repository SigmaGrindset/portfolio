import { useTranslation, useL, type Loc } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectFeatures({ features, num }: { features: Loc[]; num: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLUListElement>({
    selector: '[data-feature]',
    y: 12,
    stagger: 0.05,
  });

  return (
    <section className="py-24 border-b border-rule">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <SectionHeader num={num} title={t.project.features} />
        <div className="grid grid-cols-12 gap-6">
          <ul ref={ref} className="col-span-12 md:col-start-3 md:col-span-10 border-t border-fg">
            {features.map((f, i) => (
              <li
                key={i}
                data-feature
                className="grid grid-cols-12 gap-3 md:gap-6 items-baseline py-5 border-b border-rule"
              >
                <span className="col-span-2 md:col-span-1 text-[0.75rem] font-medium text-fg-tertiary tabular">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="col-span-10 md:col-span-11 text-[1.15rem] leading-[1.45]">
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
