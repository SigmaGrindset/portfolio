import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/i18n/i18n';

export function Contact() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set('[data-contact] > *', { autoAlpha: 0, y: 40 });
      gsap.to('[data-contact] > *', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="contact" className="py-40 relative z-10 overflow-hidden">
      <div data-contact className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div
          className="font-mono text-xs uppercase tracking-[0.25em] mb-6 flex items-center gap-3"
          style={{ color: 'var(--color-magenta)' }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: 'var(--color-magenta)', boxShadow: '0 0 12px var(--color-magenta)' }}
          />
          03 / {t.contact.eyebrow}
        </div>

        <h3 className="text-[clamp(3.5rem,14vw,12rem)] font-extrabold tracking-[-0.05em] leading-[0.9] mb-10">
          <span className="block text-stroke">LET&apos;S</span>
          <span className="block italic gradient-neon">build it.</span>
        </h3>

        <p
          className="max-w-[560px] text-[1.1rem] leading-relaxed mb-12"
          style={{ color: 'var(--color-fg-secondary)' }}
        >
          {t.contact.text}
        </p>

        <a
          href="mailto:antoniobnoni@gmail.com"
          data-cursor-hover
          className="group inline-flex items-center gap-4 text-2xl sm:text-4xl font-bold tracking-tight border-b-2 pb-3 transition-colors"
          style={{ borderColor: 'var(--color-magenta)' }}
        >
          antoniobnoni@gmail.com
          <ArrowUpRight
            size={32}
            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            style={{ color: 'var(--color-magenta)' }}
          />
        </a>
      </div>
    </section>
  );
}
