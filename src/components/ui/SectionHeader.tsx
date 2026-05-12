import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export function SectionHeader({ num, title }: { num: string; title: string }) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' },
      });

      tl.from('[data-sh="num"]', { y: 20, opacity: 0, duration: 0.6 })
        .from('[data-sh="title"]', { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
        .from(
          '[data-sh="line"]',
          { scaleX: 0, transformOrigin: 'left center', duration: 0.9 },
          '-=0.5',
        );
    },
    { scope: root },
  );

  return (
    <div ref={root} className="flex items-center gap-4 mb-12">
      <span data-sh="num" className="font-mono text-base text-[color:var(--color-accent)]">
        {num}
      </span>
      <h3 data-sh="title" className="text-2xl md:text-3xl font-bold tracking-tight">
        {title}
      </h3>
      <span data-sh="line" className="flex-1 h-px bg-[color:var(--color-border)]" />
    </div>
  );
}
