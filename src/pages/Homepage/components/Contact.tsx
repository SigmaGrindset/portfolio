import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';

export function Contact() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from('[data-contact] > *', {
        y: 28,
        opacity: 0,
        stagger: 0.12,
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
    <section ref={root} id="contact" className="py-32 text-center relative z-10">
      <div data-contact className="max-w-[1100px] mx-auto px-8">
        <div className="font-mono text-sm text-[color:var(--color-accent)] mb-4">
          03. {t.contact.eyebrow}
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          {t.contact.title}
        </h3>
        <p className="max-w-[500px] mx-auto text-[color:var(--color-text-secondary)] mb-10">
          {t.contact.text}
        </p>
        <a
          href="mailto:antoniobnoni@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-[color:var(--color-accent)] text-white border border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-hover)] hover:-translate-y-px transition-all"
        >
          antoniobnoni@gmail.com
        </a>
      </div>
    </section>
  );
}
