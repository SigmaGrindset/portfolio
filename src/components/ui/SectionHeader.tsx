import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * Swiss-style section header: small label + huge title with accent on last word.
 * Layout: `{num →} {label}  ·  {title with .accent on last word}`
 */
export function SectionHeader({ num, title }: { num: string; title: string }) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(['[data-sh="label"]', '[data-sh="title"]'], {
        autoAlpha: 0,
        y: 12,
      });
      gsap.to(['[data-sh="label"]', '[data-sh="title"]'], {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: root },
  );

  // Split title to accent the last word
  const words = title.split(' ');
  const head = words.slice(0, -1).join(' ');
  const tail = words[words.length - 1];

  return (
    <div
      ref={root}
      className="grid grid-cols-12 gap-6 items-end mb-16 pb-2"
    >
      <div
        data-sh="label"
        className="col-span-12 md:col-span-2 text-[0.75rem] font-medium text-fg-tertiary tracking-[0.05em] mb-2 md:mb-0"
      >
        <span className="text-accent tabular">
          {num.replace('.', '').padStart(2, '0')} →
        </span>{' '}
        {title}
      </div>
      <h2
        data-sh="title"
        className="col-span-12 md:col-start-3 md:col-span-10 text-[clamp(1.5rem,3.5vw,2.75rem)] font-normal tracking-[-0.02em] leading-[1.1]"
      >
        {head && <span>{head} </span>}
        <span className="text-accent">{tail}.</span>
      </h2>
    </div>
  );
}
