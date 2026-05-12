import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

type Options = {
  y?: number;
  stagger?: number;
  start?: string;
  selector?: string;
  duration?: number;
};

/**
 * Reveal children (matching `selector`) when the container scrolls into view.
 * Returns a ref to attach to the container.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(opts: Options = {}) {
  const ref = useRef<T | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = opts.selector
        ? ref.current.querySelectorAll(opts.selector)
        : ref.current.children;

      gsap.from(targets, {
        y: opts.y ?? 30,
        opacity: 0,
        duration: opts.duration ?? 0.9,
        stagger: opts.stagger ?? 0.08,
        scrollTrigger: {
          trigger: ref.current,
          start: opts.start ?? 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: ref },
  );

  return ref;
}
