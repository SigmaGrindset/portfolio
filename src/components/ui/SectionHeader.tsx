import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export function SectionHeader({ num, title }: { num: string; title: string }) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(['[data-sh="num"]', '[data-sh="title"]'], { autoAlpha: 0, y: 20 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' },
      });
      tl.to('[data-sh="num"]', { y: 0, autoAlpha: 1, duration: 0.6 }).to(
        '[data-sh="title"]',
        { y: 0, autoAlpha: 1, duration: 0.7 },
        '-=0.4',
      );
    },
    { scope: root },
  );

  // Split title to allow italic accent on first word
  const parts = title.split(' ');
  const firstWord = parts[0];
  const rest = parts.slice(1).join(' ');

  return (
    <div
      ref={root}
      className="pt-20 pb-8 grid grid-cols-12 gap-6 items-end border-b-2 border-fg mb-16"
    >
      <div
        data-sh="num"
        className="col-span-2 font-serif font-light italic text-accent text-5xl md:text-6xl leading-none"
      >
        {num.replace('.', '')}
      </div>
      <h2
        data-sh="title"
        className="col-span-10 font-serif font-normal text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight"
      >
        <em className="italic">{firstWord}</em>
        {rest && <span> {rest}</span>}
        {' —'}
      </h2>
    </div>
  );
}
