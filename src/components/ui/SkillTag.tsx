import type { ReactNode } from 'react';

export function SkillTag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs px-3 py-1.5 bg-surface border border-border rounded-md text-fg-secondary">
      {children}
    </span>
  );
}
