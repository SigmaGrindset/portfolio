import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * Shell prompt-style section header.
 * Renders: `➜  ~/portfolio git:(main) {cmd} {arg}`
 */
export function Prompt({
  cmd,
  arg,
  path = '~/portfolio',
  branch = 'main',
}: {
  cmd: string;
  arg?: string;
  path?: string;
  branch?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(ref.current, { autoAlpha: 0, y: 10 });
      gsap.to(ref.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="mt-12 mb-4 text-[13px]">
      <span className="text-green font-medium">➜  </span>
      <span className="text-blue mr-1.5">{path}</span>
      <span className="text-fg-faint">git:(</span>
      <span className="text-purple">{branch}</span>
      <span className="text-fg-faint">)</span>
      <span className="text-fg ml-2">{cmd}</span>
      {arg && <span className="text-amber ml-1.5">{arg}</span>}
    </div>
  );
}

/**
 * "Output" wrapper — indented, left rule border, for content under a Prompt.
 */
export function Output({
  children,
  file,
  meta,
}: {
  children: React.ReactNode;
  file?: string;
  meta?: string;
}) {
  return (
    <div className="ml-4 pl-4 border-l border-rule mb-2">
      {file && (
        <div className="text-[11px] text-fg-faint mb-3">
          <span>──── </span>
          <span className="text-blue">{file}</span>
          {meta && <span className="text-fg-dim ml-3">· {meta}</span>}
        </div>
      )}
      {children}
    </div>
  );
}
