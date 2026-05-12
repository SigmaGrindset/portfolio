import { useRef } from 'react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation, useL } from '@/i18n/i18n';
import type { ProjectDetail } from '@/data/projects';

const statusStyle: Record<ProjectDetail['status'], string> = {
  live: 'text-accent border-accent',
  dev: 'text-fg border-fg',
  archived: 'text-fg-tertiary border-rule',
};

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
        '[data-ph="lede"]',
        '[data-ph="meta"] > *',
        '[data-ph="actions"] > *',
      ];
      gsap.set(targets, { autoAlpha: 0, y: 16 });
      gsap.set('[data-ph="title"]', { y: 32 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to('[data-ph="back"]', { y: 0, autoAlpha: 1, duration: 0.5 })
        .to('[data-ph="category"]', { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.2')
        .to('[data-ph="title"]', { y: 0, autoAlpha: 1, duration: 0.9 }, '-=0.3')
        .to('[data-ph="lede"]', { y: 0, autoAlpha: 1, duration: 0.7 }, '-=0.5')
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
    <header ref={root} className="pt-10 pb-12 border-b border-rule relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <Link
          to="/"
          hash="projects"
          data-ph="back"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-fg-secondary hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft size={12} />
          {t.project.back}
        </Link>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 md:border-r md:border-rule md:pr-6">
            <div
              data-ph="category"
              className="font-mono text-xs uppercase tracking-[0.15em] text-accent"
            >
              {project.category}
            </div>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-fg-tertiary mt-2">
              {project.year}
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h1
              data-ph="title"
              className="font-serif font-normal wonk text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.025em] mb-6"
            >
              <em className="italic font-light text-accent">
                {project.title.split(' ')[0]}
              </em>
              {project.title.split(' ').length > 1 && (
                <> {project.title.split(' ').slice(1).join(' ')}</>
              )}
            </h1>

            <p
              data-ph="lede"
              className="font-serif text-xl md:text-2xl leading-[1.4] max-w-[44ch] mb-12 text-fg-secondary"
            >
              {l(project.shortDesc)}
            </p>

            <dl
              data-ph="meta"
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-rule max-w-[800px] mb-10"
            >
              <MetaBlock label={t.project.role} value={l(project.role)} />
              <MetaBlock label={t.project.context} value={l(project.context)} />
              <MetaBlock label={t.project.year} value={project.year} />
              <MetaBlock
                label={t.project.status}
                value={
                  <span
                    className={
                      'inline-flex items-center gap-1.5 px-2 py-0.5 border text-[0.7rem] font-mono uppercase tracking-[0.1em] ' +
                      statusStyle[project.status]
                    }
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {statusLabel}
                  </span>
                }
              />
            </dl>

            <div data-ph="actions" className="flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] border border-fg text-fg px-5 py-2.5 hover:bg-fg hover:text-bg transition-colors"
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
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] bg-accent text-bg border border-accent px-5 py-2.5 hover:bg-accent-hover hover:border-accent-hover transition-colors"
                >
                  <ArrowUpRight size={14} />
                  {t.project.live}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MetaBlock({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-fg-tertiary mb-1">
        {label}
      </dt>
      <dd className="text-sm font-medium">{value}</dd>
    </div>
  );
}
