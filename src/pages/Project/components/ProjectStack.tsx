import { useTranslation, useL } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';
import type { TechGroup } from '@/data/projects';

export function ProjectStack({ groups, num }: { groups: TechGroup[]; num: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLDivElement>({ selector: '[data-stack-group]', y: 24, stagger: 0.08 });

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader num={num} title={t.project.stack} />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {groups.map((g, i) => (
            <div
              key={i}
              data-stack-group
              className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-xl p-6"
            >
              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-[color:var(--color-accent)] mb-4">
                // {l(g.label)}
              </h4>
              <ul className="space-y-3">
                {g.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-3">
                    <span className="font-medium text-[color:var(--color-text)]">
                      {item.name}
                    </span>
                    {item.note && (
                      <span className="text-sm text-[color:var(--color-text-secondary)]">
                        - {l(item.note)}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
