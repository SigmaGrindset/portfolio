import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation, useL } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillTag } from '@/components/ui/SkillTag';
import { projects, type ProjectDetail } from '@/data/projects';

export function Projects() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-project-card]').forEach((card) => {
        gsap.set(card, { autoAlpha: 0, y: 40 });
        gsap.to(card, {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });
    },
    { scope: root },
  );

  const featured = projects.filter((p) => p.featured);
  const small = projects.filter((p) => !p.featured);

  return (
    <section ref={root} id="projects" className="py-24 relative z-10">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader num="02." title={t.projects.title} />

        <div className="grid gap-5 mb-5">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {small.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectDetail }) {
  const { t } = useTranslation();
  const l = useL();
  const { title, shortDesc, techStack, cardTech, slug, category, featured } = project;
  const allTech = cardTech ?? techStack.flatMap((g) => g.items.map((i) => i.name));
  const visibleTech = cardTech ? allTech : featured ? allTech.slice(0, 7) : allTech.slice(0, 5);

  return (
    <Link
      to="/projects/$slug"
      params={{ slug }}
      data-project-card
      className={
        'group relative bg-surface border border-border rounded-xl transition-[border-color,transform] duration-300 hover:border-accent hover:-translate-y-1 overflow-hidden block ' +
        (featured ? 'p-8' : 'p-6 flex flex-col gap-4')
      }
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 10%, transparent) 0%, transparent 60%)',
        }}
      />
      <div className="relative flex justify-between items-start mb-3">
        <div>
          {featured && category && (
            <div className="font-mono text-xs text-accent mb-1.5">
              {t.projects.featured} · {category}
            </div>
          )}
          <h4 className={'font-bold tracking-tight ' + (featured ? 'text-2xl' : 'text-lg')}>
            {title}
          </h4>
        </div>
        <span
          aria-hidden
          className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-border text-fg-secondary group-hover:border-accent group-hover:text-accent transition-colors flex-shrink-0"
        >
          <ArrowUpRight size={16} />
        </span>
      </div>
      <p
        className={
          'relative text-fg-secondary ' +
          (featured ? 'text-[0.95rem] mb-6' : 'text-sm flex-1')
        }
      >
        {l(shortDesc)}
      </p>
      <div className="relative flex flex-wrap gap-2">
        {visibleTech.map((tt) => (
          <SkillTag key={tt}>{tt}</SkillTag>
        ))}
      </div>
    </Link>
  );
}
