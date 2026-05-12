import { Github, Mail } from 'lucide-react';
import { useTranslation } from '@/i18n/i18n';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-[color:var(--color-border)] py-8 relative z-10">
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-[color:var(--color-text-tertiary)]">
          {t.footer} · 2026
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/SigmaGrindset"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:antoniobnoni@gmail.com"
            aria-label="Email"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
