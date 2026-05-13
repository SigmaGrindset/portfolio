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
      gsap.set('[data-about-reveal]', { autoAlpha: 0, y: 16 });
      gsap.to('[data-about-reveal]', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="about" className="py-24 border-b border-rule">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <SectionHeader num="02" title={t.about.title} />

        <div className="grid grid-cols-12 gap-6">
          {/* Text column */}
          <div data-about-reveal className="col-span-12 md:col-start-3 md:col-span-6">
            <p className="text-[1.05rem] leading-[1.7] mb-5 max-w-[60ch]">
              {t.about.p1Pre}
              <strong className="font-semibold">{t.about.p1Bold1}</strong>
              {t.about.p1Mid}
              <a
                href="https://shiftnudge.com/"
                target="_blank"
                rel="noreferrer"
                className="text-accent border-b border-transparent hover:border-accent transition-colors"
              >
                {t.about.p1Bold2}
              </a>
              {t.about.p1Post}
            </p>
            <p className="text-[1.05rem] leading-[1.7] max-w-[60ch]">{t.about.p2}</p>
          </div>

          {/* Sidebar */}
          <aside
            data-about-reveal
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
                    className="text-accent hover:underline"
                  >
                    {t.about.cvValue} →
                  </a>
                }
              />
            </dl>
          </aside>

          {/* Skills */}
          <div data-about-reveal className="col-span-12 md:col-start-3 md:col-span-10 mt-16">
            <SkillRow label={t.about.frontend} items={skills.frontend} />
            <SkillRow label={t.about.backend} items={skills.backend} />
            <SkillRow label={t.about.design} items={skills.design} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillRow({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-5 border-t border-rule">
      <h3 className="text-[0.75rem] uppercase tracking-[0.05em] text-fg-tertiary font-medium md:pt-1">
        {label}
      </h3>
      <div className="text-[1.1rem] leading-[1.6] font-normal">
        {items.join(', ')}
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between items-baseline border-b border-rule py-2.5 text-[0.85rem]">
      <dt className="text-fg-tertiary">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
