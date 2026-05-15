import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation, useL } from '@/i18n/i18n';
import { SkillTag } from '@/components/ui/SkillTag';
import { projects, type ProjectDetail } from '@/data/projects';

const ACCENTS = [
  'var(--color-magenta)',
  'var(--color-cyan)',
  'var(--color-lime)',
  'var(--color-yellow)',
];

export function Projects() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-project-card]').forEach((card) => {
        gsap.set(card, { autoAlpha: 0, y: 50 });
        gsap.to(card, {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });

      gsap.from('[data-projects-title]', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '[data-projects-title]',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="projects" className="py-32 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div data-projects-title>
            <div
              className="font-mono text-xs uppercase tracking-[0.25em] mb-3"
              style={{ color: 'var(--color-magenta)' }}
            >
              02 / Selected Work
            </div>
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-[-0.04em] leading-none">
              <span className="text-stroke">{t.projects.title.toUpperCase()}</span>
            </h2>
          </div>
          <div
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: 'var(--color-fg-secondary)' }}
          >
            ({projects.length.toString().padStart(2, '0')}) projects
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {projects.map((p, i) => {
            const featured = p.featured;
            const span = featured ? 'col-span-12 lg:col-span-8' : 'col-span-12 sm:col-span-6 lg:col-span-4';
            return (
              <div key={p.slug} className={span}>
                <ProjectCard project={p} accent={ACCENTS[i % ACCENTS.length]} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, accent }: { project: ProjectDetail; accent: string }) {
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
      data-cursor-hover
      className={
        'group relative block h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ' +
        (featured ? 'p-8 sm:p-10' : 'p-6')
      }
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: `radial-gradient(circle at 70% 0%, ${accent} 0%, transparent 55%)`,
          mixBlendMode: 'screen',
        }}
      />
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: accent, opacity: 0.6 }}
      />

      <div className="relative flex justify-between items-start mb-5 gap-4">
        <div className="min-w-0">
          <div
            className="font-mono text-[0.7rem] uppercase tracking-[0.2em] mb-2"
            style={{ color: accent }}
          >
            {featured ? `${t.projects.featured} · ${category}` : category}
          </div>
          <h4
            className={
              'font-extrabold tracking-[-0.02em] leading-tight ' +
              (featured ? 'text-3xl sm:text-5xl' : 'text-xl')
            }
          >
            {title}
          </h4>
        </div>
        <span
          aria-hidden
          className="w-10 h-10 flex items-center justify-center rounded-full border flex-shrink-0 transition-colors group-hover:bg-white/5"
          style={{ borderColor: 'var(--color-border-hover)' }}
        >
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>

      <p
        className={
          'relative ' + (featured ? 'text-[0.95rem] mb-6 max-w-[55ch]' : 'text-sm mb-5')
        }
        style={{ color: 'var(--color-fg-secondary)' }}
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
