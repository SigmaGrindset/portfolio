import { useRef, type ReactNode } from 'react';
import { Download } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';
import { SkillTag } from '@/components/ui/SkillTag';
import { skills } from '../utils/skills';

export function About() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from('[data-about-title]', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '[data-about-title]',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

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
    <section ref={root} id="about" className="py-32 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div data-about-title className="mb-16">
          <div
            className="font-mono text-xs uppercase tracking-[0.25em] mb-3"
            style={{ color: 'var(--color-magenta)' }}
          >
            01 / About
          </div>
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-[-0.04em] leading-none">
            <span className="text-stroke">{t.about.title.toUpperCase()}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          <div data-about="text">
            <p
              className="text-[1.1rem] sm:text-[1.25rem] leading-relaxed mb-6"
              style={{ color: 'var(--color-fg-secondary)' }}
            >
              {t.about.p1Pre}
              <strong className="font-semibold" style={{ color: 'var(--color-fg)' }}>
                {t.about.p1Bold1}
              </strong>
              {t.about.p1Mid}
              <a
                href="https://shiftnudge.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline underline-offset-4 transition-colors"
                style={{
                  color: 'var(--color-fg)',
                  textDecorationColor: 'var(--color-magenta)',
                }}
              >
                {t.about.p1Bold2}
              </a>
              {t.about.p1Post}
            </p>
            <p
              className="text-[1.05rem] leading-relaxed mb-10"
              style={{ color: 'var(--color-fg-secondary)' }}
            >
              {t.about.p2}
            </p>

            <SkillGroup label={t.about.frontend} items={skills.frontend} accent="var(--color-magenta)" />
            <SkillGroup label={t.about.backend} items={skills.backend} accent="var(--color-cyan)" />
            <SkillGroup label={t.about.design} items={skills.design} accent="var(--color-lime)" />
          </div>

          <aside
            data-about="card"
            className="rounded-2xl p-7 border sticky top-24"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h4
              className="text-xs uppercase tracking-[0.2em] mb-5 font-mono"
              style={{ color: 'var(--color-magenta)' }}
            >
              // {t.about.info}
            </h4>
            <InfoRow label={t.about.location} value={t.about.locationValue} />
            <InfoRow label={t.about.status} value={t.about.statusValue} />
            <InfoRow label={t.about.education} value={t.about.educationValue} />
            <InfoRow label={t.about.current} value={t.about.currentValue} />
            <InfoRow label={t.about.english} value={t.about.englishValue} />
            <InfoRow
              label={t.about.cv}
              value={
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-1.5 transition-colors hover:opacity-70"
                  style={{ color: 'var(--color-magenta)' }}
                >
                  {t.about.cvValue}
                  <Download size={14} />
                </a>
              }
              last
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  label,
  items,
  accent,
}: {
  label: string;
  items: readonly string[];
  accent: string;
}) {
  return (
    <div className="mt-8">
      <div
        className="font-mono text-xs uppercase tracking-[0.2em] mb-3 flex items-center gap-2"
        style={{ color: accent }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: accent }}
        />
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <SkillTag key={s}>{s}</SkillTag>
        ))}
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  last,
}: {
  label: string;
  value: ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={'flex justify-between items-baseline py-3 ' + (last ? '' : 'border-b')}
      style={!last ? { borderColor: 'var(--color-border)' } : undefined}
    >
      <span className="text-sm font-mono uppercase tracking-[0.1em]" style={{ color: 'var(--color-fg-secondary)' }}>
        {label}
      </span>
      <span className="text-sm font-medium" style={{ color: 'var(--color-fg)' }}>
        {value}
      </span>
    </div>
  );
}
