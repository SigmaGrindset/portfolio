import { useTranslation, useL, type Loc } from '@/i18n/i18n';
import { Prompt, Output } from '@/components/ui/Prompt';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectOverview({ paragraphs }: { paragraphs: Loc[]; num?: string }) {
  const { t } = useTranslation();
  const l = useL();
  const ref = useScrollReveal<HTMLDivElement>({
    selector: '[data-overview-p]',
    y: 12,
    stagger: 0.08,
  });

  return (
    <section className="px-6 md:px-10 max-w-[1200px] mx-auto">
      <Prompt cmd="cat" arg="overview.md" />
      <Output>
        <h2 className="text-green text-[1.2rem] mt-3 mb-3">
          <span className="text-fg-faint"># </span>
          {t.project.overview}
        </h2>
        <div ref={ref} className="space-y-3 max-w-[75ch]">
          {paragraphs.map((p, i) => (
            <p key={i} data-overview-p className="text-fg leading-[1.65] text-[14px]">
              {l(p)}
            </p>
          ))}
        </div>
      </Output>
    </section>
  );
}
