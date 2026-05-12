import { useTranslation } from '@/i18n/i18n';

export function LanguageToggle() {
  const { locale, toggle } = useTranslation();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className="font-mono text-xs w-9 h-9 inline-flex items-center justify-center rounded-lg border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors uppercase cursor-pointer"
    >
      {locale === 'hr' ? 'EN' : 'HR'}
    </button>
  );
}
