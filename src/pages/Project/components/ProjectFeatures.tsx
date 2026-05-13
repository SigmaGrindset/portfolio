import { useTranslation, useL, type Loc } from '@/i18n/i18n';
import { Prompt, Output } from '@/components/ui/Prompt';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectFeatures({ features }: { features: Loc[]; num?: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLUListElement>({
    selector: '[data-feature]',
    y: 8,
    stagger: 0.04,
  });

  return (
    <section className="px-6 md:px-10 max-w-[1200px] mx-auto">
      <Prompt cmd="ls" arg="-1 features/" />
      <Output>
        <h2 className="text-green text-[1.2rem] mt-3 mb-3">
          <span className="text-fg-faint"># </span>
          {t.project.features}
        </h2>
        <ul ref={ref} className="text-[13px]">
          {features.map((f, i) => (
            <li
              key={i}
              data-feature
              className="flex gap-3 py-1.5 text-fg"
            >
              <span className="text-green shrink-0">▸</span>
              <span>
                <span className="text-fg-faint mr-2">[{String(i + 1).padStart(2, '0')}]</span>
                {l(f)}
              </span>
            </li>
          ))}
        </ul>
      </Output>
    </section>
  );
}
