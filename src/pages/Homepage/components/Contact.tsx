import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';

export function Contact() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set('[data-contact-reveal]', { autoAlpha: 0, y: 16 });
      gsap.to('[data-contact-reveal]', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
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
    <section ref={root} id="contact" className="py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 items-end">
        <div
          data-contact-reveal
          className="col-span-12 md:col-span-2 text-[0.75rem] font-medium text-fg-tertiary tracking-[0.05em]"
        >
          <span className="text-accent tabular">04 →</span> {t.contact.eyebrow}
        </div>
        <h2
          data-contact-reveal
          className="col-span-12 md:col-span-10 text-[clamp(3.5rem,8.5vw,7.5rem)] font-light leading-[0.95] tracking-[-0.04em]"
        >
          Reci <span className="text-accent font-normal">bok.</span>
        </h2>
        <p
          data-contact-reveal
          className="col-span-12 md:col-start-3 md:col-span-7 text-[1.1rem] leading-[1.5] text-fg-secondary mt-4"
        >
          {t.contact.text}
        </p>
        <div
          data-contact-reveal
          className="col-span-12 md:col-start-3 md:col-span-10 mt-8 pt-8 border-t border-fg"
        >
          <a
            href="mailto:antoniobnoni@gmail.com"
            className="text-[1.5rem] md:text-[1.75rem] text-fg border-b border-fg pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            antoniobnoni@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
