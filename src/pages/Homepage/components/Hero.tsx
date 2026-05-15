import { useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';
import { Marquee } from '@/components/fx/Marquee';
import { skills } from '../utils/skills';

export function Hero() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set(
        ['[data-hero="eyebrow"]', '[data-hero="line"]', '[data-hero="intro"]', '[data-hero="actions"] > *', '[data-hero="meta"] > *'],
        { autoAlpha: 0, y: 30 },
      );
      gsap.set('[data-hero="line"]', { y: 100 });

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.to('[data-hero="eyebrow"]', { y: 0, autoAlpha: 1, duration: 0.7 })
        .to(
          '[data-hero="line"]',
          { y: 0, autoAlpha: 1, duration: 1.2, stagger: 0.15 },
          '-=0.3',
        )
        .to('[data-hero="intro"]', { y: 0, autoAlpha: 1, duration: 0.7 }, '-=0.6')
        .to(
          '[data-hero="actions"] > *',
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 },
          '-=0.4',
        )
        .to(
          '[data-hero="meta"] > *',
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 },
          '-=0.5',
        );
    },
    { scope: root },
  );

  const allSkills = [...skills.frontend, ...skills.backend, ...skills.design];

  return (
    <header
      ref={root}
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-0 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 w-full flex-1 flex flex-col justify-center">
        <div
          data-hero="eyebrow"
          className="font-mono text-xs uppercase tracking-[0.25em] mb-8 flex items-center gap-3"
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: 'var(--color-lime)', boxShadow: '0 0 12px var(--color-lime)' }}
          />
          <span style={{ color: 'var(--color-fg-secondary)' }}>
            {t.hero.eyebrow} — Available for work
          </span>
        </div>

        <h1 className="font-extrabold tracking-[-0.05em] leading-[0.85] text-[clamp(3.5rem,15vw,13rem)] mb-6 select-none">
          <span data-hero="line" className="block text-stroke">
            ANTONIO
          </span>
          <span
            data-hero="line"
            className="glitch block"
            data-text="DEVELOPER"
          >
            DEVELOPER
          </span>
          <span
            data-hero="line"
            className="block italic font-bold gradient-neon"
            style={{ fontStyle: 'italic' }}
          >
            &amp; designer
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mt-8">
          <p
            data-hero="intro"
            className="max-w-[560px] text-[1rem] sm:text-[1.1rem] leading-relaxed"
            style={{ color: 'var(--color-fg-secondary)' }}
          >
            {t.hero.intro}
          </p>

          <div data-hero="actions" className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold border-2 transition-colors duration-200"
              style={{
                background: 'var(--color-magenta)',
                color: '#fff',
                borderColor: 'var(--color-magenta)',
              }}
            >
              {t.hero.ctaProjects}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:antoniobnoni@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold border-2 hover:border-fg transition-colors"
              style={{ borderColor: 'var(--color-border-hover)' }}
            >
              <Mail size={14} />
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <div
          data-hero="meta"
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-[0.7rem] uppercase tracking-[0.15em]"
        >
          <MetaCell label="Location" value="Zagreb, HR" accent="var(--color-cyan)" />
          <MetaCell label="Role" value="Frontend / Design" accent="var(--color-magenta)" />
          <MetaCell label="Year" value="2026" accent="var(--color-lime)" />
          <MetaCell label="Status" value="Open to opps" accent="var(--color-yellow)" />
        </div>
      </div>

      <div className="w-full mt-12">
        <Marquee items={allSkills} />
      </div>
    </header>
  );
}

function MetaCell({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="flex items-center gap-2" style={{ color: 'var(--color-fg-tertiary)' }}>
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: accent }}
        />
        {label}
      </span>
      <span className="font-sans text-sm normal-case tracking-normal font-medium" style={{ color: 'var(--color-fg)' }}>
        {value}
      </span>
    </div>
  );
}
