import { useTranslation, useL } from '@/i18n/i18n';
import { Prompt, Output } from '@/components/ui/Prompt';
import { useScrollReveal } from '@/lib/useScrollReveal';
import type { TechGroup } from '@/data/projects';

export function ProjectStack({ groups }: { groups: TechGroup[]; num?: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLPreElement>({
    selector: '[data-stack-group]',
    y: 10,
    stagger: 0.05,
  });

  return (
    <section className="px-6 md:px-10 max-w-[1200px] mx-auto">
      <Prompt cmd="cat" arg="package.json" />
      <Output>
        <h2 className="text-green text-[1.2rem] mt-3 mb-3">
          <span className="text-fg-faint"># </span>
          {t.project.stack}
        </h2>
        <pre
          ref={ref}
          className="bg-bg-2 border border-rule p-4 text-[12px] leading-[1.6] overflow-x-auto"
        >
          <span className="text-fg-faint">{'{'}</span>
          {groups.map((g, gi) => (
            <span key={gi} data-stack-group className="block ml-4 mt-2">
              <span className="text-blue">"{l(g.label).toLowerCase()}"</span>
              <span className="text-fg-faint">: {'{'}</span>
              {g.items.map((item, ii) => (
                <span key={item.name} className="block ml-4">
                  <span className="text-blue">"{item.name}"</span>
                  <span className="text-fg-faint">: </span>
                  <span className="text-amber">"{item.note ? l(item.note) : '—'}"</span>
                  {(ii < g.items.length - 1 || gi < groups.length - 1) && (
                    <span className="text-fg-faint">,</span>
                  )}
                </span>
              ))}
              <span className="block ml-0 text-fg-faint">{'}'}{gi < groups.length - 1 ? ',' : ''}</span>
            </span>
          ))}
          <span className="block text-fg-faint mt-2">{'}'}</span>
        </pre>
      </Output>
    </section>
  );
}
