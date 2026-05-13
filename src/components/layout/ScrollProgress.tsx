import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed top-0 left-0 right-0 h-0.5 bg-green z-[60] origin-left scale-x-0 pointer-events-none"
    />
  );
}
