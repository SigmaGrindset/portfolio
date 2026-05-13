import { useTheme } from '@/lib/theme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="font-mono text-[10px] uppercase tracking-wider text-fg-dim hover:text-green transition-colors cursor-pointer"
    >
      {theme === 'dark' ? '☀ light' : '☾ dark'}
    </button>
  );
}
