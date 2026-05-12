import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillTag } from '@/components/ui/SkillTag';
import { skills } from '../utils/skills';

export function About() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from('[data-about="text"] > *', {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '[data-about="text"]',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('[data-about="card"]', {
        x: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '[data-about="card"]',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="about" className="py-24 relative z-10">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader num="01." title={t.about.title} />

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          <div data-about="text">
            <p className="text-[color:var(--color-text-secondary)] mb-4">
              {t.about.p1Pre}
              <strong className="text-[color:var(--color-text)] font-semibold">{t.about.p1Bold1}</strong>
              {t.about.p1Mid}
              <a
                href="https://shiftnudge.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--color-text)] font-semibold underline decoration-[color:var(--color-border)] underline-offset-4 hover:decoration-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
              >
                {t.about.p1Bold2}
              </a>
              {t.about.p1Post}
            </p>
            <p className="text-[color:var(--color-text-secondary)] mb-8">{t.about.p2}</p>

            <SkillGroup label={t.about.frontend} items={skills.frontend} />
            <SkillGroup label={t.about.backend} items={skills.backend} />
            <SkillGroup label={t.about.design} items={skills.design} />
          </div>

          <aside
            data-about="card"
            className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-xl p-7"
          >
            <h4 className="text-xs uppercase tracking-[0.1em] text-[color:var(--color-text-tertiary)] mb-4">
              {t.about.info}
            </h4>
            <InfoRow label={t.about.location} value={t.about.locationValue} />
            <InfoRow label={t.about.status} value={t.about.statusValue} />
            <InfoRow label={t.about.education} value={t.about.educationValue} />
            <InfoRow label={t.about.current} value={t.about.currentValue} />
            <InfoRow label={t.about.english} value={t.about.englishValue} last />
          </aside>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="mt-8">
      <div className="font-mono text-xs uppercase tracking-[0.1em] text-[color:var(--color-accent)] mb-3">
        // {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <SkillTag key={s}>{s}</SkillTag>
        ))}
      </div>
    </div>
  );
}

function InfoRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div
      className={
        'flex justify-between items-baseline py-3 ' +
        (last ? '' : 'border-b border-[color:var(--color-border)]')
      }
    >
      <span className="text-sm text-[color:var(--color-text-secondary)]">{label}</span>
      <span className="text-sm font-medium text-[color:var(--color-text)]">{value}</span>
    </div>
  );
}
