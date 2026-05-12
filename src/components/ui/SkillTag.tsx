import type { ReactNode } from 'react';

export function SkillTag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs px-3 py-1.5 bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-md text-[color:var(--color-text-secondary)]">
      {children}
    </span>
  );
}
