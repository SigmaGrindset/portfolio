import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Skip on touch / coarse pointers
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const xTo = gsap.quickTo(dot, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(dot, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMove = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, [role="button"], [data-cursor-hover]')) {
        dot.classList.add('is-hover');
      }
    };
    const onOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, [role="button"], [data-cursor-hover]')) {
        dot.classList.remove('is-hover');
      }
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerover', onOver);
    window.addEventListener('pointerout', onOut);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerout', onOut);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden />;
}
