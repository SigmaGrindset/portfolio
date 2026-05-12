import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skills } from '../utils/skills';

export function About() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set('[data-about="text"] > *', { autoAlpha: 0, y: 20 });
      gsap.to('[data-about="text"] > *', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '[data-about="text"]',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.set('[data-about="card"]', { autoAlpha: 0, x: 20 });
      gsap.to('[data-about="card"]', {
        x: 0,
        autoAlpha: 1,
        duration: 0.9,
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
    <section ref={root} id="about" className="relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader num="02" title={t.about.title} />

        <div className="grid grid-cols-12 gap-6">
          <div data-about="text" className="col-span-12 md:col-start-3 md:col-span-7">
            <p className="text-[1.05rem] leading-[1.7] mb-5 dropcap">
              {t.about.p1Pre}
              <strong className="font-semibold">{t.about.p1Bold1}</strong>
              {t.about.p1Mid}
              <a
                href="https://shiftnudge.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-rule underline-offset-4 hover:decoration-accent hover:text-accent transition-colors"
              >
                {t.about.p1Bold2}
              </a>
              {t.about.p1Post}
            </p>
            <p className="text-[1.05rem] leading-[1.7] mb-8">{t.about.p2}</p>
          </div>

          <aside
            data-about="card"
            className="col-span-12 md:col-start-10 md:col-span-3"
          >
            <dl className="border-t border-rule">
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
                    className="text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1"
                  >
                    {t.about.cvValue} ↓
                  </a>
                }
              />
            </dl>
          </aside>

          <div className="col-span-12 md:col-start-3 md:col-span-10 mt-12 pt-8 border-t border-rule">
            <SkillBlock label={t.about.frontend} items={skills.frontend} />
            <SkillBlock label={t.about.backend} items={skills.backend} />
            <SkillBlock label={t.about.design} items={skills.design} />
          </div>
        </div>
      </div>

      <style>{`
        .dropcap::first-letter {
          font-family: var(--font-serif);
          font-weight: 600;
          float: left;
          font-size: 5rem;
          line-height: 0.85;
          padding: 0.3rem 0.8rem 0 0;
          color: var(--color-accent);
        }
      `}</style>
    </section>
  );
}

function SkillBlock({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="mb-6">
      <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-fg-tertiary mb-3">
        // {label}
      </h3>
      <div className="font-serif text-[1.35rem] leading-[1.6]">
        {items.map((s, i) => (
          <span key={s}>
            <span>{s}</span>
            {i < items.length - 1 && (
              <span className="text-accent italic px-1.5">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between items-baseline border-b border-rule py-3">
      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-fg-secondary">
        {label}
      </dt>
      <dd className="text-sm font-medium">{value}</dd>
    </div>
  );
}
