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
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
    },
    { scope: ref },
  );

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      ref={ref}
      className="sticky top-0 z-50 bg-bg/95 backdrop-blur-md border-b border-rule"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-5 flex justify-between items-baseline">
        <a href="/" className="font-serif text-xl tracking-tight">
          <em className="font-normal italic">A.</em>
          <span className="font-semibold">Batarilović</span>
        </a>
        <div className="hidden md:flex items-baseline gap-10">
          <ul className="flex gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-fg hover:text-accent transition-colors relative group"
                >
                  / {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 pl-6 border-l border-rule">
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
