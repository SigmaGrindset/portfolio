import { Prompt } from './Prompt';

/**
 * Maps an English title to a terminal-flavored command + argument.
 * Falls back to a generic `cat {slug}.md` form.
 */
function commandFor(title: string): { cmd: string; arg?: string } {
  const t = title.toLowerCase();
  if (t.includes('overview') || t.includes('pregled')) return { cmd: 'cat', arg: 'overview.md' };
  if (t.includes('features') || t.includes('funkcionalnosti'))
    return { cmd: 'ls', arg: '-1 features/' };
  if (t.includes('stack') || t.includes('tehnologije'))
    return { cmd: 'cat', arg: 'package.json' };
  if (t.includes('gallery') || t.includes('galerija'))
    return { cmd: 'ls', arg: '-1 screenshots/' };
  if (t.includes('about') || t.includes('o meni')) return { cmd: 'cat', arg: 'about.md' };
  if (t.includes('projects') || t.includes('projekti'))
    return { cmd: 'ls', arg: '-la projects/' };
  if (t.includes('contact') || t.includes('kontakt')) return { cmd: './contact.sh' };
  return { cmd: 'cat', arg: `${title.toLowerCase()}.md` };
}

export function SectionHeader({ title }: { num?: string; title: string }) {
  const { cmd, arg } = commandFor(title);
  return <Prompt cmd={cmd} arg={arg} />;
}
