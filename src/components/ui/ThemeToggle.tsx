import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="w-9 h-9 inline-flex items-center justify-center border border-rule text-fg hover:border-accent hover:text-accent transition-colors cursor-pointer"
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}
