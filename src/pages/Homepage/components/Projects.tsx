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
        gsap.set(row, { autoAlpha: 0, y: 16 });
        gsap.to(row, {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'power3.out',
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
    <section ref={root} id="projects" className="py-24 border-b border-rule">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <SectionHeader num="03" title={t.projects.title} />

        <div className="border-t border-fg">
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
  const visibleTech = cardTech ? allTech : allTech.slice(0, 4);

  return (
    <Link
      to="/projects/$slug"
      params={{ slug }}
      data-project-row
      className="group grid grid-cols-12 gap-3 md:gap-6 items-baseline py-10 border-b border-rule relative"
    >
      {/* Animated underline accent */}
      <span
        aria-hidden
        className="absolute left-0 -bottom-px h-px bg-accent w-0 group-hover:w-full transition-[width] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
      />

      {/* Index */}
      <div className="col-span-2 md:col-span-1 text-[0.75rem] font-medium text-fg-tertiary tabular">
        {String(index).padStart(2, '0')}
      </div>

      {/* Year */}
      <div className="col-span-2 md:col-span-1 text-[0.85rem] text-fg-tertiary tabular">
        {year}
      </div>

      {/* Title + description */}
      <div className="col-span-12 md:col-span-6 md:order-none">
        {featured && (
          <div className="text-[0.65rem] uppercase tracking-[0.08em] text-accent font-medium mb-2">
            ★ {t.projects.featured} · {category}
          </div>
        )}
        <h3
          className={
            'tracking-[-0.02em] leading-[1.1] mb-2 transition-colors group-hover:text-accent ' +
            (featured ? 'text-[2rem] md:text-[2.25rem] font-medium' : 'text-[1.75rem] md:text-[1.85rem] font-normal')
          }
        >
          {title}
        </h3>
        <p className="text-[0.95rem] leading-[1.55] text-fg-secondary max-w-[55ch]">
          {l(shortDesc)}
        </p>
      </div>

      {/* Tech */}
      <div className="col-span-10 md:col-span-3 text-[0.75rem] text-fg-tertiary md:text-right md:pt-1">
        {visibleTech.map((tt, i) => (
          <span key={tt} className="inline-block">
            {tt}
            {i < visibleTech.length - 1 && <span>, </span>}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="col-span-2 md:col-span-1 text-[1.5rem] text-fg-tertiary md:text-right md:pt-1 group-hover:text-accent group-hover:translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]">
        →
      </div>
    </Link>
  );
}
