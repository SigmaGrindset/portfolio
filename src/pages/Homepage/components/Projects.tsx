import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation, useL } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { projects, type ProjectDetail } from '@/data/projects';

export function Projects() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-project-row]').forEach((row) => {
        gsap.set(row, { autoAlpha: 0, y: 24 });
        gsap.to(row, {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: row,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="projects" className="relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader num="03" title={t.projects.title} />

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: ProjectDetail; index: number }) {
  const { t } = useTranslation();
  const l = useL();
  const { title, shortDesc, techStack, cardTech, slug, category, featured, year } = project;
  const allTech = cardTech ?? techStack.flatMap((g) => g.items.map((i) => i.name));
  const visibleTech = cardTech ? allTech : allTech.slice(0, 5);

  return (
    <Link
      to="/projects/$slug"
      params={{ slug }}
      data-project-row
      className={
        'group grid grid-cols-12 gap-6 py-10 border-b border-rule items-start transition-colors duration-300 ' +
        (featured ? 'bg-bg-2 px-6 my-2' : 'hover:bg-bg-2 px-6 -mx-6')
      }
    >
      {/* Index marker */}
      <div className="col-span-2 md:col-span-1 font-serif font-light italic text-accent text-3xl md:text-4xl leading-none">
        {String(index).padStart(2, '0')}
      </div>

      {/* Meta (year + category) */}
      <div className="col-span-10 md:col-span-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-fg-secondary md:pt-2">
        <div className="text-fg text-[0.8rem] mb-1">{year}</div>
        {category}
      </div>

      {/* Title + description */}
      <div className="col-span-12 md:col-span-6">
        {featured && (
          <span className="inline-block font-mono text-[0.65rem] uppercase tracking-[0.2em] bg-accent text-bg px-2 py-0.5 mb-3">
            {t.projects.featured}
          </span>
        )}
        <h3
          className={
            'font-serif font-normal tracking-tight leading-[1.1] mb-3 group-hover:text-accent transition-colors ' +
            (featured ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl')
          }
        >
          {title}
        </h3>
        <p className="text-[0.95rem] leading-[1.55] text-fg-secondary max-w-[60ch]">
          {l(shortDesc)}
        </p>
      </div>

      {/* Tech */}
      <div className="col-span-12 md:col-span-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-fg-secondary md:text-right md:pt-2">
        {visibleTech.map((tt, i) => (
          <span key={tt} className="inline-block">
            {tt}
            {i < visibleTech.length - 1 && (
              <span className="text-accent italic px-1.5">·</span>
            )}
          </span>
        ))}
      </div>
    </Link>
  );
}
