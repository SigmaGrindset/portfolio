import { useRef } from 'react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation, useL } from '@/i18n/i18n';
import type { ProjectDetail } from '@/data/projects';

const statusColor: Record<ProjectDetail['status'], string> = {
  live: 'text-accent',
  dev: 'text-fg-secondary',
  archived: 'text-fg-tertiary',
};

export function ProjectHero({ project }: { project: ProjectDetail }) {
  const { t } = useTranslation();
  const l = useL();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const targets = [
        '[data-ph="back"]',
        '[data-ph="kicker"]',
        '[data-ph="title"]',
        '[data-ph="lede-label"]',
        '[data-ph="lede"]',
        '[data-ph="meta"] > *',
        '[data-ph="actions"]',
      ];
      gsap.set(targets, { autoAlpha: 0, y: 16 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to('[data-ph="back"]', { y: 0, autoAlpha: 1, duration: 0.5 })
        .to('[data-ph="kicker"]', { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.3')
        .to('[data-ph="title"]', { y: 0, autoAlpha: 1, duration: 0.9 }, '-=0.3')
        .to('[data-ph="lede-label"]', { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.5')
        .to('[data-ph="lede"]', { y: 0, autoAlpha: 1, duration: 0.6 }, '-=0.4')
        .to(
          '[data-ph="meta"] > *',
          { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.06 },
          '-=0.3',
        )
        .to('[data-ph="actions"]', { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.2');
    },
    { scope: root },
  );

  const statusLabel = {
    live: t.project.statusLive,
    dev: t.project.statusDev,
    archived: t.project.statusArchived,
  }[project.status];

  return (
    <header ref={root} className="pt-16 pb-20 border-b border-rule">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <Link
          to="/"
          hash="projects"
          data-ph="back"
          className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-fg-tertiary hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          {t.project.back}
        </Link>

        <div className="grid grid-cols-12 gap-6 gap-y-8">
          {/* Title row */}
          <div
            data-ph="kicker"
            className="col-span-12 md:col-span-2 text-[0.75rem] font-medium text-fg-tertiary tracking-[0.05em]"
          >
            <span className="text-accent tabular">{project.year} →</span>
            <br />
            {project.category}
          </div>
          <h1
            data-ph="title"
            className="col-span-12 md:col-span-10 text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[0.95] tracking-[-0.04em]"
          >
            {project.title}<span className="text-accent font-normal">.</span>
          </h1>

          {/* Lede */}
          <div
            data-ph="lede-label"
            className="col-span-12 md:col-span-2 text-[0.75rem] font-medium text-fg-tertiary tracking-[0.05em] md:pt-2"
          >
            Intro
          </div>
          <p
            data-ph="lede"
            className="col-span-12 md:col-start-3 md:col-span-7 text-[1.25rem] leading-[1.5] text-fg-secondary max-w-[50ch]"
          >
            {l(project.shortDesc)}
          </p>

          {/* Meta */}
          <dl
            data-ph="meta"
            className="col-span-12 md:col-start-3 md:col-span-10 mt-8 pt-4 border-t border-fg grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <MetaBlock label={t.project.role} value={l(project.role)} />
            <MetaBlock label={t.project.context} value={l(project.context)} />
            <MetaBlock label={t.project.year} value={project.year} />
            <MetaBlock
              label={t.project.status}
              value={
                <span className={statusColor[project.status]}>
                  {project.status !== 'archived' && '● '}
                  {statusLabel}
                </span>
              }
            />
          </dl>

          {/* Actions */}
          {(project.links.github || project.links.live) && (
            <div
              data-ph="actions"
              className="col-span-12 md:col-start-3 md:col-span-10 flex flex-wrap gap-3 mt-6"
            >
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.85rem] font-medium text-fg border border-fg hover:bg-fg hover:text-bg transition-colors"
                >
                  <Github size={14} />
                  {t.project.github}
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.85rem] font-medium bg-accent text-white border border-accent hover:bg-accent-hover hover:border-accent-hover transition-colors"
                >
                  <ArrowUpRight size={14} />
                  {t.project.live}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function MetaBlock({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-[0.7rem] uppercase tracking-[0.05em] text-fg-tertiary font-medium mb-1">
        {label}
      </dt>
      <dd className="text-[0.9rem] font-medium">{value}</dd>
    </div>
  );
}
