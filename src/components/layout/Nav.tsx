import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

function useUtcClock() {
  const [time, setTime] = useState(() => formatUtc(new Date()));
  useEffect(() => {
    const id = setInterval(() => setTime(formatUtc(new Date())), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function formatUtc(d: Date) {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
}

export function Nav() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement | null>(null);
  const utc = useUtcClock();

  useGSAP(
    () => {
      gsap.from(ref.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: ref },
  );

  const links = [
    { num: '01', label: t.nav.about, href: '#about' },
    { num: '02', label: t.nav.projects, href: '#projects' },
    { num: '03', label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 mix-diff text-white"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-5 flex justify-between items-center">
        <a href="/" className="font-extrabold text-lg tracking-tight">
          antonio<span style={{ color: 'var(--color-magenta)' }}>_</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs font-mono uppercase tracking-[0.15em] hover:opacity-60 transition-opacity"
                >
                  <span style={{ color: 'var(--color-magenta)' }} className="mr-1.5">
                    {l.num}/
                  </span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline font-mono text-[0.7rem] uppercase tracking-[0.15em] opacity-70 tabular-nums">
            {utc}
          </span>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
