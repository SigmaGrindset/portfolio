import { useTranslation } from '@/i18n/i18n';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

export function Nav() {
  const { t, locale } = useTranslation();

  const tabs = [
    { num: '1', label: 'about', ext: '.md', href: '#about' },
    { num: '2', label: 'projects', ext: '/', href: '#projects' },
    { num: '3', label: 'contact', ext: '.sh', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Tmux-style status bar */}
      <div className="bg-bg-2 border-b border-rule px-4 py-2 flex justify-between items-center text-[11px] text-fg-dim">
        <div className="flex gap-4 items-center">
          <span className="bg-bg-3 border border-rule rounded-sm px-2 py-0.5">
            <span className="text-green">●</span> session
          </span>
          <span className="hidden sm:inline">~/portfolio/antonio</span>
          <span className="text-purple hidden sm:inline">main</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="hidden md:inline">node 22.4.0</span>
          <span className="font-mono">{locale.toUpperCase()}</span>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      {/* Vim-style tabs */}
      <nav className="bg-bg border-b border-rule flex overflow-x-auto">
        {tabs.map((tab, i) => (
          <a
            key={tab.label}
            href={tab.href}
            className={
              'px-4 py-2.5 text-[12px] border-r border-rule whitespace-nowrap border-t-2 border-t-transparent ' +
              (i === 0
                ? 'bg-bg text-green border-t-green'
                : 'bg-bg-2 text-fg-dim hover:text-fg hover:bg-bg-3') +
              ' transition-colors'
            }
          >
            <span className="text-fg-faint mr-2">[{tab.num}]</span>
            <span className="text-blue">{tab.label}</span>
            <span className="text-fg-dim">{tab.ext}</span>
          </a>
        ))}
        <span className="flex-1 border-b border-transparent" aria-hidden="true">
          {/* used in i18n only via t object below — silence unused */}
          <span className="hidden">{t.nav.about}</span>
        </span>
      </nav>
    </header>
  );
}
