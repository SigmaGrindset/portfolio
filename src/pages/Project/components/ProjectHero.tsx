import { useRef } from 'react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation, useL } from '@/i18n/i18n';
import type { ProjectDetail } from '@/data/projects';

const statusStyle: Record<ProjectDetail['status'], string> = {
  live: 'text-green-400 border-green-400/30 bg-green-400/10',
  dev: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  archived:
    'text-[color:var(--color-text-tertiary)] border-[color:var(--color-border)] bg-[color:var(--color-surface)]',
};

const buttonTransition =
  'transition-[background-color,border-color,color] duration-200';

export function ProjectHero({ project }: { project: ProjectDetail }) {
  const { t } = useTranslation();
  const l = useL();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const targets = [
        '[data-ph="back"]',
        '[data-ph="category"]',
        '[data-ph="title"]',
        '[data-ph="desc"]',
        '[data-ph="meta"] > *',
        '[data-ph="actions"] > *',
      ];

      gsap.set(targets, { autoAlpha: 0, y: 16 });
      gsap.set('[data-ph="title"]', { y: 40 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('[data-ph="back"]', { y: 0, autoAlpha: 1, duration: 0.5 })
        .to('[data-ph="category"]', { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.2')
        .to('[data-ph="title"]', { y: 0, autoAlpha: 1, duration: 0.9 }, '-=0.3')
        .to('[data-ph="desc"]', { y: 0, autoAlpha: 1, duration: 0.7 }, '-=0.5')
        .to(
          '[data-ph="meta"] > *',
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 },
          '-=0.4',
        )
        .to(
          '[data-ph="actions"] > *',
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 },
          '-=0.3',
        );
    },
    { scope: root },
  );

  const statusLabel = {
    live: t.project.statusLive,
    dev: t.project.statusDev,
    archived: t.project.statusArchived,
  }[project.status];

  return (
    <header ref={root} className="pt-12 pb-16 relative z-10">
      <div className="max-w-[1100px] mx-auto px-8">
        <Link
          to="/"
          hash="projects"
          data-ph="back"
          className="inline-flex items-center gap-2 text-sm font-mono text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-accent)] transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          {t.project.back}
        </Link>

        <div data-ph="category" className="font-mono text-sm text-[color:var(--color-accent)] mb-4">
          {project.category}
        </div>

        <h1
          data-ph="title"
          className="font-extrabold tracking-[-0.03em] leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)] mb-6"
        >
          {project.title}
        </h1>

        <p
          data-ph="desc"
          className="text-[color:var(--color-text-secondary)] text-lg max-w-[720px] mb-10"
        >
          {l(project.shortDesc)}
        </p>

        <div data-ph="meta" className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 max-w-[800px]">
          <MetaBlock label={t.project.role} value={l(project.role)} />
          <MetaBlock label={t.project.context} value={l(project.context)} />
          <MetaBlock label={t.project.year} value={project.year} />
          <MetaBlock
            label={t.project.status}
            value={
              <span
                className={
                  'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-xs font-mono ' +
                  statusStyle[project.status]
                }
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {statusLabel}
              </span>
            }
          />
        </div>

        <div data-ph="actions" className="flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className={
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm bg-[color:var(--color-surface)] text-[color:var(--color-text)] border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] ' +
                buttonTransition
              }
            >
              <Github size={16} />
              {t.project.github}
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className={
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm bg-[color:var(--color-accent)] text-white border border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-hover)] ' +
                buttonTransition
              }
            >
              <ArrowUpRight size={16} />
              {t.project.live}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

function MetaBlock({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[color:var(--color-text-tertiary)] mb-2">
        {label}
      </div>
      <div className="text-sm text-[color:var(--color-text)] font-medium">{value}</div>
    </div>
  );
}
