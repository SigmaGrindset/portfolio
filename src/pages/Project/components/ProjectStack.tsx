import { useTranslation, useL } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';
import type { TechGroup } from '@/data/projects';

export function ProjectStack({ groups, num }: { groups: TechGroup[]; num: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLDivElement>({
    selector: '[data-stack-group]',
    y: 20,
    stagger: 0.08,
  });

  return (
    <section className="relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader num={num} title={t.project.stack} />
        <div ref={ref} className="grid grid-cols-12 gap-6 md:gap-x-12 gap-y-10">
          {groups.map((g, i) => (
            <div
              key={i}
              data-stack-group
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent pb-3 mb-3 border-b border-fg">
                // {l(g.label)}
              </h4>
              <ul>
                {g.items.map((item) => (
                  <li
                    key={item.name}
                    className="py-2 border-b border-rule flex items-baseline justify-between gap-4"
                  >
                    <span className="font-serif text-lg">{item.name}</span>
                    {item.note && (
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-fg-secondary text-right">
                        {l(item.note)}
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
