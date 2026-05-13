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
        y: -16,
        opacity: 0,
        duration: 0.5,
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
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-6 grid grid-cols-12 gap-6 items-baseline">
        <a
          href="/"
          className="col-span-12 md:col-span-5 text-[0.9rem] font-medium tracking-tight"
        >
          Antonio Batarilović
          <span className="text-fg-tertiary font-normal ml-2 hidden sm:inline">
            — frontend developer, Zagreb
          </span>
        </a>
        <ul className="col-span-12 md:col-start-8 md:col-span-5 hidden md:flex gap-10 justify-end items-baseline">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.875rem] font-medium text-fg relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300" />
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3 pl-4 border-l border-rule">
            <LanguageToggle />
            <ThemeToggle />
          </li>
        </ul>
        <div className="md:hidden col-span-12 flex justify-end items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
