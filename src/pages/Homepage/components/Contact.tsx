import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';
import { Prompt, Output } from '@/components/ui/Prompt';

export function Contact() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set('[data-contact-reveal]', { autoAlpha: 0, y: 10 });
      gsap.to('[data-contact-reveal]', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.5,
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
    <section ref={root} id="contact" className="px-6 md:px-10 max-w-[1200px] mx-auto pb-12">
      <Prompt cmd="./contact.sh" />
      <Output>
        <div data-contact-reveal className="text-fg-faint italic text-[13px] mb-2">
          # {t.contact.text}
        </div>
        <div data-contact-reveal className="text-green text-[15px] mb-1">
          → reci bok.
        </div>
        <div data-contact-reveal className="text-[15px] mb-4">
          <a
            href="mailto:antoniobnoni@gmail.com"
            className="text-blue border-b border-blue border-dashed hover:bg-green/20 transition-colors"
          >
            antoniobnoni@gmail.com
          </a>
        </div>
        <div data-contact-reveal className="text-fg-dim text-[12px] mb-6">
          <span className="text-fg-faint">// also:</span>{' '}
          <a
            href="https://github.com/SigmaGrindset"
            target="_blank"
            rel="noreferrer"
            className="text-blue border-b border-blue border-dashed hover:bg-green/20 mr-3"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/antonio-batarilovi%C4%87-509a26240/"
            target="_blank"
            rel="noreferrer"
            className="text-blue border-b border-blue border-dashed hover:bg-green/20"
          >
            linkedin
          </a>
        </div>
        <div data-contact-reveal>
          <span className="text-green">➜  </span>
          <span className="cursor-blink" />
        </div>
      </Output>
    </section>
  );
}
