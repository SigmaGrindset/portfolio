import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';

export function Contact() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set('[data-contact] > *', { autoAlpha: 0, y: 24 });
      gsap.to('[data-contact] > *', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
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
    <section
      ref={root}
      id="contact"
      className="py-32 text-center border-t border-rule mt-16 relative z-10"
    >
      <div data-contact className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
          — 04 / {t.contact.eyebrow}
        </div>
        <h2 className="font-serif italic font-light text-[clamp(3rem,8vw,6rem)] leading-none mb-4">
          Reci <em className="font-normal not-italic">bok.</em>
        </h2>
        <p className="max-w-[500px] mx-auto text-fg-secondary mb-10 mt-4">
          {t.contact.text}
        </p>
        <a
          href="mailto:antoniobnoni@gmail.com"
          className="font-serif text-2xl md:text-3xl underline decoration-rule underline-offset-[8px] decoration-1 hover:text-accent hover:decoration-accent transition-colors"
        >
          antoniobnoni@gmail.com
        </a>
      </div>
    </section>
  );
}
