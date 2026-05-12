import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '@/i18n/i18n';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-fg py-6 relative z-10 mt-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-fg-secondary">
          {t.footer} · MMXXVI
        </p>
        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/SigmaGrindset"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-fg hover:text-accent transition-colors inline-flex items-center gap-1.5"
          >
            <Github size={13} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/antonio-batarilovi%C4%87-509a26240/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-fg hover:text-accent transition-colors inline-flex items-center gap-1.5"
          >
            <Linkedin size={13} />
            LinkedIn
          </a>
          <a
            href="mailto:antoniobnoni@gmail.com"
            aria-label="Email"
            className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-fg hover:text-accent transition-colors inline-flex items-center gap-1.5"
          >
            <Mail size={13} />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
