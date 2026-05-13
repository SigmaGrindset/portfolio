import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';

export function Hero() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set(
        [
          '[data-hero="kicker"]',
          '[data-hero="title"]',
          '[data-hero="lede-label"]',
          '[data-hero="lede"]',
          '[data-hero="meta-label"]',
          '[data-hero="meta"] > *',
        ],
        { autoAlpha: 0, y: 16 },
      );

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to('[data-hero="kicker"]', { y: 0, autoAlpha: 1, duration: 0.5 })
        .to('[data-hero="title"]', { y: 0, autoAlpha: 1, duration: 0.9 }, '-=0.3')
        .to('[data-hero="lede-label"]', { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.4')
        .to('[data-hero="lede"]', { y: 0, autoAlpha: 1, duration: 0.6 }, '-=0.4')
        .to('[data-hero="meta-label"]', { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.3')
        .to(
          '[data-hero="meta"] > *',
          { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.06 },
          '-=0.3',
        );
    },
    { scope: root },
  );

  return (
    <header
      ref={root}
      id="top"
      className="pt-32 pb-24 border-b border-rule"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 gap-y-8">
        {/* Title row */}
        <div
          data-hero="kicker"
          className="col-span-12 md:col-span-2 text-[0.75rem] font-medium text-fg-tertiary tracking-[0.05em]"
        >
          <span className="text-accent tabular">01 →</span>
        </div>
        <h1
          data-hero="title"
          className="col-span-12 md:col-span-10 text-[clamp(3.5rem,8.5vw,8.5rem)] font-light leading-[0.95] tracking-[-0.04em]"
        >
          Gradim stvari
          <br />
          za <span className="text-accent font-normal">web.</span>
        </h1>

        {/* Lede row */}
        <div
          data-hero="lede-label"
          className="col-span-12 md:col-span-2 text-[0.75rem] font-medium text-fg-tertiary tracking-[0.05em] md:pt-2"
        >
          Intro
        </div>
        <p
          data-hero="lede"
          className="col-span-12 md:col-start-3 md:col-span-7 text-[1.25rem] leading-[1.5] text-fg-secondary max-w-[50ch]"
        >
          {t.hero.intro}
        </p>

        {/* Meta row */}
        <div
          data-hero="meta-label"
          className="col-span-12 md:col-span-2 text-[0.75rem] font-medium text-fg-tertiary tracking-[0.05em] md:mt-16"
        >
          Info
        </div>
        <dl
          data-hero="meta"
          className="col-span-12 md:col-start-3 md:col-span-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-fg pt-4"
        >
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.05em] text-fg-tertiary font-medium mb-1">
              Lokacija
            </dt>
            <dd className="text-[0.9rem] font-medium">Zagreb, HR</dd>
          </div>
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.05em] text-fg-tertiary font-medium mb-1">
              Status
            </dt>
            <dd className="text-[0.9rem] font-medium">Otvoren za prilike</dd>
          </div>
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.05em] text-fg-tertiary font-medium mb-1">
              Edukacija
            </dt>
            <dd className="text-[0.9rem] font-medium">FER — 3. god.</dd>
          </div>
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.05em] text-fg-tertiary font-medium mb-1">
              Trenutno
            </dt>
            <dd className="text-[0.9rem] font-medium">Sofascore Academy</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
