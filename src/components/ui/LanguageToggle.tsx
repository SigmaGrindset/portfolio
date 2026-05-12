import { useTranslation } from '@/i18n/i18n';

export function LanguageToggle() {
  const { locale, toggle } = useTranslation();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className="font-mono text-[0.7rem] uppercase tracking-[0.15em] w-9 h-9 inline-flex items-center justify-center border border-rule text-fg hover:border-accent hover:text-accent transition-colors cursor-pointer"
    >
      {locale === 'hr' ? 'EN' : 'HR'}
    </button>
  );
}
