import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '@/i18n/i18n';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      className="border-t py-10 relative z-10"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p
          className="font-mono text-[0.7rem] uppercase tracking-[0.2em]"
          style={{ color: 'var(--color-fg-tertiary)' }}
        >
          {t.footer} · 2026
        </p>
        <div className="flex gap-3">
          {[
            { href: 'https://github.com/SigmaGrindset', label: 'GitHub', Icon: Github },
            {
              href: 'https://www.linkedin.com/in/antonio-batarilovi%C4%87-509a26240/',
              label: 'LinkedIn',
              Icon: Linkedin,
            },
            { href: 'mailto:antoniobnoni@gmail.com', label: 'Email', Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              data-cursor-hover
              className="w-10 h-10 inline-flex items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: 'var(--color-border-hover)' }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
