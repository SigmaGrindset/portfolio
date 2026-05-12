import { Check } from 'lucide-react';
import { useTranslation, useL, type Loc } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectFeatures({ features, num }: { features: Loc[]; num: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLUListElement>({ selector: '[data-feature]', y: 20, stagger: 0.06 });

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader num={num} title={t.project.features} />
        <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-[900px]">
          {features.map((f, i) => (
            <li
              key={i}
              data-feature
              className="flex items-start gap-3 text-[color:var(--color-text-secondary)]"
            >
              <Check
                size={18}
                className="text-[color:var(--color-accent)] mt-0.5 flex-shrink-0"
              />
              <span>{l(f)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
