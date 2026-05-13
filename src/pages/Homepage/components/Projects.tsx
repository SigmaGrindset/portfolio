import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation, useL } from '@/i18n/i18n';
import { Prompt, Output } from '@/components/ui/Prompt';
import { projects, type ProjectDetail } from '@/data/projects';

const statusStyle: Record<ProjectDetail['status'], string> = {
  live: 'bg-green/15 text-green',
  dev: 'bg-amber/15 text-amber',
  archived: 'bg-fg-faint/20 text-fg-dim',
};

// Cute fake sizes based on slug length
function fakeSize(slug: string): string {
  const n = (slug.length * 0.4 + (slug.charCodeAt(0) % 5)).toFixed(1);
  return `${n}k`;
}

export function Projects() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-ls-row]').forEach((row) => {
        gsap.set(row, { autoAlpha: 0, y: 8 });
        gsap.to(row, {
          y: 0,
          autoAlpha: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: row,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="projects" className="px-6 md:px-10 max-w-[1200px] mx-auto">
      <Prompt cmd="ls" arg="-la projects/" />
      <Output>
        <div className="text-fg-faint text-[11px] mb-2">total {projects.length}</div>
        <div className="text-[13px]">
          {/* Header */}
          <div className="hidden md:grid grid-cols-[100px_60px_60px_1fr_100px] gap-4 py-2 border-b border-rule text-fg-faint text-[11px]">
            <span>permissions</span>
            <span className="text-right">size</span>
            <span>year</span>
            <span>name</span>
            <span className="text-right">status</span>
          </div>
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i + 1} status={t.project} />
          ))}
        </div>
      </Output>
    </section>
  );
}

function ProjectRow({
  project,
  status,
}: {
  project: ProjectDetail;
  index: number;
  status: { statusLive: string; statusDev: string; statusArchived: string };
}) {
  const l = useL();
  const { title, shortDesc, techStack, cardTech, slug, year, featured } = project;
  const allTech = cardTech ?? techStack.flatMap((g) => g.items.map((i) => i.name));
  const visibleTech = cardTech ? allTech : allTech.slice(0, 5);

  const statusLabel = {
    live: status.statusLive,
    dev: status.statusDev,
    archived: status.statusArchived,
  }[project.status];

  // Featured = directory style. Archived = regular file. Otherwise = directory.
  const isFile = project.status === 'archived' && !featured;
  const perms = isFile ? '-rw-r--r--' : 'drwxr-xr-x';
  const permsFirst = isFile ? '-' : 'd';

  return (
    <Link
      to="/projects/$slug"
      params={{ slug }}
      data-ls-row
      className="grid md:grid-cols-[100px_60px_60px_1fr_100px] gap-2 md:gap-4 py-3 border-b border-rule group hover:bg-bg-2 -mx-3 px-3 transition-colors"
    >
      <span className="text-fg-dim text-[12px] hidden md:block">
        <span className={isFile ? 'text-fg-dim' : 'text-blue'}>{permsFirst}</span>
        {perms.slice(1)}
      </span>
      <span className="text-amber text-[12px] text-right hidden md:block">
        {fakeSize(slug)}
      </span>
      <span className="text-fg-dim text-[12px] hidden md:block">{year}</span>
      <div className="min-w-0">
        <span className="text-blue group-hover:text-green transition-colors text-[14px]">
          {title.toLowerCase().replace(/\s+/g, '-')}
          {!isFile && '/'}
          {featured && <span className="text-amber ml-2">★</span>}
        </span>
        <div className="text-fg-dim text-[11px] mt-0.5 max-w-[70ch]">
          {l(shortDesc)}
        </div>
        <div className="mt-1.5">
          {visibleTech.map((tt, i) => (
            <span key={tt} className="text-purple text-[11px]">
              {tt.toLowerCase()}
              {i < visibleTech.length - 1 && (
                <span className="text-fg-faint"> · </span>
              )}
            </span>
          ))}
        </div>
      </div>
      <span
        className={
          'text-[10px] px-2 py-0.5 uppercase tracking-wider justify-self-start md:justify-self-end self-start ' +
          statusStyle[project.status]
        }
      >
        {project.status === 'live' && '● '}
        {project.status === 'dev' && '● '}
        {statusLabel}
      </span>
    </Link>
  );
}
