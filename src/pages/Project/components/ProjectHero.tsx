import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation, useL } from '@/i18n/i18n';
import { Prompt, Output } from '@/components/ui/Prompt';
import type { ProjectDetail } from '@/data/projects';

const statusColor: Record<ProjectDetail['status'], string> = {
  live: 'text-green',
  dev: 'text-amber',
  archived: 'text-fg-dim',
};

export function ProjectHero({ project }: { project: ProjectDetail }) {
  const { t } = useTranslation();
  const l = useL();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set('[data-ph-reveal]', { autoAlpha: 0, y: 10 });
      gsap.to('[data-ph-reveal]', {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
      });
    },
    { scope: root },
  );

  const statusLabel = {
    live: t.project.statusLive,
    dev: t.project.statusDev,
    archived: t.project.statusArchived,
  }[project.status];

  return (
    <header ref={root} className="px-6 md:px-10 max-w-[1200px] mx-auto pt-6">
      <Link
        to="/"
        hash="projects"
        data-ph-reveal
        className="inline-block text-[12px] text-fg-dim hover:text-green transition-colors mb-6"
      >
        <span className="text-fg-faint">←</span> cd ../projects
      </Link>

      <Prompt cmd="cat" arg={`projects/${project.slug}/README.md`} />
      <Output
        file={`${project.slug}/README.md`}
        meta={`year ${project.year} · ${project.category.toLowerCase()}`}
      >
        <h1
          data-ph-reveal
          className="text-green text-[1.6rem] md:text-[2rem] mt-3 mb-4 leading-tight"
        >
          <span className="text-fg-faint"># </span>
          {project.title}
        </h1>

        <p
          data-ph-reveal
          className="text-fg text-[15px] max-w-[75ch] leading-[1.65] mb-6"
        >
          {l(project.shortDesc)}
        </p>

        <h2 data-ph-reveal className="text-amber text-[1.1rem] mt-6 mb-2">
          <span className="text-fg-faint">## </span>Meta
        </h2>
        <div data-ph-reveal className="border border-rule bg-bg-2 mb-6">
          <MetaRow k="role" v={l(project.role)} />
          <MetaRow k="context" v={l(project.context)} />
          <MetaRow k="year" v={project.year} />
          <MetaRow
            k="status"
            v={
              <span className={statusColor[project.status]}>
                {project.status !== 'archived' && '● '}
                {statusLabel}
              </span>
            }
            last
          />
        </div>

        <div data-ph-reveal className="flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider border border-rule text-fg px-4 py-2 hover:border-green hover:text-green transition-colors"
            >
              $ git clone
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider bg-green text-bg border border-green px-4 py-2 hover:bg-accent-hover hover:border-accent-hover transition-colors"
            >
              $ open ./live
            </a>
          )}
        </div>
      </Output>
    </header>
  );
}

function MetaRow({
  k,
  v,
  last,
}: {
  k: string;
  v: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={
        'grid grid-cols-[110px_1fr] px-4 py-2 text-[13px] ' +
        (last ? '' : 'border-b border-rule')
      }
    >
      <span className="text-fg-dim">{k}</span>
      <span className="text-fg">{v}</span>
    </div>
  );
}

