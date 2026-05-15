import type { ReactNode } from 'react';

export function SkillTag({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-mono text-[0.7rem] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border"
      style={{
        background: 'transparent',
        borderColor: 'var(--color-border-hover)',
        color: 'var(--color-fg-secondary)',
      }}
    >
      {children}
    </span>
  );
}
