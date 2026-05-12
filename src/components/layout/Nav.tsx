import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

export function Nav() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement | null>(null);

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
    { num: '01.', label: t.nav.about, href: '#about' },
    { num: '02.', label: t.nav.projects, href: '#projects' },
    { num: '03.', label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      ref={ref}
      className="sticky top-0 z-50 backdrop-blur-xl bg-bg/70 border-b border-border"
    >
      <div className="max-w-[1100px] mx-auto px-8 py-5 flex justify-between items-center">
        <a href="/" className="font-bold text-base tracking-tight">
          antonio<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-fg-secondary hover:text-fg transition-colors"
                >
                  <span className="font-mono text-xs text-accent mr-1.5">{l.num}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 pl-4 border-l border-border">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
