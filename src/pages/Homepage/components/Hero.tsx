import { useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';

const HERO_IMAGE_SRC =
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80';

export function Hero() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  const nameParts = t.hero.name.trim().replace(/\.$/, '').split(' ');
  const firstName = nameParts[0];
  const lastName = (nameParts.slice(1).join(' ') || '') + '.';

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('[data-hero="eyebrow"]', { y: 20, opacity: 0, duration: 0.6 })
        .from(
          '[data-hero="name-line"]',
          { y: 80, opacity: 0, duration: 1.1, stagger: 0.12 },
          '-=0.3',
        )
        .from(
          '[data-hero="image-wrap"]',
          {
            scale: 0.85,
            rotation: -2,
            y: 30,
            opacity: 0,
            duration: 1.1,
            ease: 'back.out(1.2)',
          },
          '-=0.8',
        )
        .from(
          '[data-hero="badge"]',
          { y: 20, opacity: 0, duration: 0.7 },
          '-=0.6',
        )
        .from('[data-hero="tagline"]', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('[data-hero="intro"]', { y: 20, opacity: 0, duration: 0.7 }, '-=0.5')
        .from(
          '[data-hero="actions"] > *',
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          '-=0.4',
        );

      // Subtle float on the image card for editorial feel
      gsap.to('[data-hero="image-wrap"]', {
        y: -10,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2.5,
      });
    },
    { scope: root },
  );

  return (
    <header
      ref={root}
      id="top"
      className="relative min-h-[88vh] flex items-center py-24 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-8 w-full">
        <div
          data-hero="eyebrow"
          className="font-mono text-sm text-[color:var(--color-accent)] mb-6"
        >
          {t.hero.eyebrow}
        </div>

        {/* Name + overlapping image */}
        <div className="relative mb-10">
          <h1 className="font-extrabold tracking-[-0.04em] leading-[0.88] text-[clamp(3.5rem,12vw,9.5rem)]">
            <span data-hero="name-line" className="block relative z-10">
              {firstName}
            </span>
            <span data-hero="name-line" className="block relative z-30">
              {lastName}
            </span>
          </h1>

          {/* Floating image card */}
          <div
            data-hero="image-wrap"
            className="absolute z-20 top-[6%] right-[2%] sm:right-[6%] lg:right-[8%] w-[42vw] sm:w-[34vw] md:w-[28vw] lg:w-[22vw] xl:w-[260px] max-w-[280px] aspect-[4/5] rotate-[3deg]"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-2xl shadow-black/40">
              <img
                src={HERO_IMAGE_SRC}
                alt="Antonio Batarilović - placeholder"
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  padding: '1px',
                  background:
                    'linear-gradient(135deg, var(--color-accent), transparent 60%)',
                  WebkitMask:
                    'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
            </div>

            <div
              data-hero="badge"
              className="absolute -bottom-4 -left-4 sm:-left-6 bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-md px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[color:var(--color-text-secondary)] -rotate-[2deg]"
            >
              <span className="text-[color:var(--color-accent)]">(01)</span>{' '}
              Frontend Dev
            </div>
          </div>
        </div>

        <h2
          data-hero="tagline"
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[color:var(--color-text-secondary)] mb-8 max-w-[700px]"
        >
          {t.hero.tagline}
        </h2>
        <p
          data-hero="intro"
          className="max-w-[600px] text-[color:var(--color-text-secondary)] text-[1.05rem] mb-10"
        >
          {t.hero.intro}
        </p>
        <div data-hero="actions" className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-[color:var(--color-accent)] text-white border border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-hover)] hover:border-[color:var(--color-accent-hover)] hover:-translate-y-px transition-all"
          >
            {t.hero.ctaProjects}
            <ArrowRight size={16} />
          </a>
          <a
            href="mailto:antoniobnoni@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-[color:var(--color-surface)] text-[color:var(--color-text)] border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] hover:-translate-y-px transition-all"
          >
            <Mail size={16} />
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </header>
  );
}
