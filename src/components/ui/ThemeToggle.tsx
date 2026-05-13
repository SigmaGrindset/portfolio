import { useTheme } from '@/lib/theme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="text-[0.85rem] font-medium text-fg-tertiary hover:text-fg transition-colors cursor-pointer"
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}
