import { useTranslation } from '@/i18n/i18n';

export function LanguageToggle() {
  const { locale, toggle } = useTranslation();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className="text-[0.85rem] font-medium text-fg-tertiary hover:text-fg transition-colors cursor-pointer"
    >
      {locale === 'hr' ? 'EN' : 'HR'}
    </button>
  );
}
