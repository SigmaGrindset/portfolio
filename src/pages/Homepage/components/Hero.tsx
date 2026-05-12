import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';

export function Hero() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  // Split "Antonio Batarilović." -> first + last
  const parts = t.hero.name.trim().replace(/\.$/, '').split(' ');
  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ');

  useGSAP(
    () => {
      gsap.set(
        [
          '[data-hero="issue"]',
          '[data-hero="kicker"]',
          '[data-hero="title"]',
          '[data-hero="lede"]',
          '[data-hero="meta"] > *',
        ],
        { autoAlpha: 0, y: 20 },
      );

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to('[data-hero="issue"]', { y: 0, autoAlpha: 1, duration: 0.6 })
        .to('[data-hero="kicker"]', { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.3')
        .to('[data-hero="title"]', { y: 0, autoAlpha: 1, duration: 0.9 }, '-=0.3')
        .to('[data-hero="lede"]', { y: 0, autoAlpha: 1, duration: 0.7 }, '-=0.5')
        .to(
          '[data-hero="meta"] > *',
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 },
          '-=0.4',
        );
    },
    { scope: root },
  );

  return (
    <header
      ref={root}
      id="top"
      className="py-16 md:py-24 border-b border-rule"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6">
        {/* Issue marker (left column) */}
        <div
          data-hero="issue"
          className="col-span-12 md:col-span-2 md:border-r md:border-rule md:pr-6"
        >
          <div className="font-serif font-light italic text-accent text-5xl md:text-6xl leading-none">
            01
          </div>
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] mt-2 text-fg-secondary">
            Issue<br />Vol. 2026
          </div>
        </div>

        {/* Main editorial column */}
        <div className="col-span-12 md:col-span-10">
          <div
            data-hero="kicker"
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6"
          >
            — Frontend Developer · Zagreb, HR
          </div>

          <h1
            data-hero="title"
            className="font-serif font-normal wonk text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-[-0.025em] mb-8"
          >
            {firstName}{' '}
            <em className="italic font-light text-accent">{lastName}</em>—
            <br />
            gradi <em className="italic font-light text-accent">stvari</em> za web.
          </h1>

          <p
            data-hero="lede"
            className="font-serif text-xl md:text-2xl leading-[1.4] max-w-[40ch] mb-12 text-fg-secondary"
          >
            {t.hero.intro}
          </p>

          <dl
            data-hero="meta"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-rule max-w-[800px]"
          >
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-fg-tertiary mb-1">
                Lokacija
              </dt>
              <dd className="text-sm font-medium">Zagreb, HR</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-fg-tertiary mb-1">
                Status
              </dt>
              <dd className="text-sm font-medium">Otvoren za prilike</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-fg-tertiary mb-1">
                Edukacija
              </dt>
              <dd className="text-sm font-medium">FER · 3. god.</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-fg-tertiary mb-1">
                Trenutno
              </dt>
              <dd className="text-sm font-medium">Sofascore Academy</dd>
            </div>
          </dl>
        </div>
      </div>
    </header>
  );
}
