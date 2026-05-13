import { useTranslation, useL } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';
import type { TechGroup } from '@/data/projects';

export function ProjectStack({ groups, num }: { groups: TechGroup[]; num: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLDivElement>({
    selector: '[data-stack-group]',
    y: 16,
    stagger: 0.06,
  });

  return (
    <section className="py-24 border-b border-rule">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <SectionHeader num={num} title={t.project.stack} />
        <div className="grid grid-cols-12 gap-6">
          <div ref={ref} className="col-span-12 md:col-start-3 md:col-span-10 border-t border-fg">
            {groups.map((g, i) => (
              <div
                key={i}
                data-stack-group
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-8 py-6 border-b border-rule"
              >
                <h3 className="text-[0.75rem] uppercase tracking-[0.05em] text-fg-tertiary font-medium md:pt-1">
                  {l(g.label)}
                </h3>
                <dl>
                  {g.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-1 md:gap-6 py-1.5 text-[1rem]"
                    >
                      <dt className="font-medium">{item.name}</dt>
                      {item.note ? (
                        <dd className="text-fg-tertiary text-[0.95rem]">
                          {l(item.note)}
                        </dd>
                      ) : (
                        <dd className="text-fg-faint">—</dd>
                      )}
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
