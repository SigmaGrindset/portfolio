import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';
import { Prompt, Output } from '@/components/ui/Prompt';
import { skills } from '../utils/skills';

export function About() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set('[data-about-reveal]', { autoAlpha: 0, y: 10 });
      gsap.to('[data-about-reveal]', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.06,
        duration: 0.5,
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
    <section ref={root} id="about" className="px-6 md:px-10 max-w-[1200px] mx-auto">
      <Prompt cmd="cat" arg="about.md" />
      <Output file="about.md" meta="last modified 2026-05-13 · 1.2k">
        <h2 data-about-reveal className="text-green text-[1.4rem] mt-4 mb-3">
          <span className="text-fg-faint"># </span>About me
        </h2>

        <p data-about-reveal className="text-fg mb-3 max-w-[75ch] leading-[1.65]">
          {t.about.p1Pre}
          <strong className="text-amber font-medium">{t.about.p1Bold1}</strong>
          {t.about.p1Mid}
          <a
            href="https://shiftnudge.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue border-b border-blue border-dashed hover:bg-green/20 transition-colors"
          >
            {t.about.p1Bold2}
          </a>
          {t.about.p1Post}
        </p>
        <p data-about-reveal className="text-fg mb-6 max-w-[75ch] leading-[1.65]">
          {t.about.p2}
        </p>

        <h3 data-about-reveal className="text-amber text-[1.1rem] mt-6 mb-2">
          <span className="text-fg-faint">## </span>Info
        </h3>
        <div data-about-reveal className="border border-rule bg-bg-2 my-4">
          <InfoRow k="location" v="Zagreb, HR" />
          <InfoRow k="status" v={<span className="text-green">// {t.about.statusValue.toLowerCase()}</span>} />
          <InfoRow k="education" v={t.about.educationValue} />
          <InfoRow k="currently" v={t.about.currentValue} />
          <InfoRow k="english" v={t.about.englishValue} />
          <InfoRow
            k="cv"
            v={
              <a
                href="/cv.pdf"
                download
                className="text-blue border-b border-blue border-dashed hover:bg-green/20 transition-colors"
              >
                ./cv.pdf
              </a>
            }
            last
          />
        </div>
      </Output>

      <Prompt cmd="ls" arg="-1 skills/" />
      <Output>
        <div data-about-reveal>
          <SkillBlock label="frontend" items={skills.frontend} />
        </div>
        <div data-about-reveal>
          <SkillBlock label="backend & data" items={skills.backend} />
        </div>
        <div data-about-reveal>
          <SkillBlock label="design & tools" items={skills.design} />
        </div>
      </Output>
    </section>
  );
}

function SkillBlock({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="bg-bg-2 border border-rule p-3 my-2">
      <div className="text-amber text-[12px] mb-1.5">
        <span className="text-fg-faint">[</span>
        {label}
        <span className="text-fg-faint">]</span>
      </div>
      <div className="text-fg text-[13px]">
        {items.map((s, i) => (
          <span key={s}>
            <span>{s}</span>
            {i < items.length - 1 && <span className="text-fg-faint">, </span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoRow({
  k,
  v,
  last,
}: {
  k: string;
  v: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={
        'grid grid-cols-[130px_1fr] px-4 py-2 text-[13px] ' +
        (last ? '' : 'border-b border-rule')
      }
    >
      <span className="text-fg-dim">{k}</span>
      <span className="text-fg">{v}</span>
    </div>
  );
}
