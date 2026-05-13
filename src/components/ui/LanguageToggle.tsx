import { useTranslation } from '@/i18n/i18n';

export function LanguageToggle() {
  const { locale, toggle } = useTranslation();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className="font-mono text-[10px] uppercase tracking-wider text-fg-dim hover:text-green transition-colors cursor-pointer"
    >
      → {locale === 'hr' ? 'EN' : 'HR'}
    </button>
  );
}
