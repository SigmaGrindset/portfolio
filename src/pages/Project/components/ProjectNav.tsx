import { Link } from '@tanstack/react-router';
import { useTranslation } from '@/i18n/i18n';
import type { ProjectDetail } from '@/data/projects';

export function ProjectNav({
  prev,
  next,
}: {
  prev?: ProjectDetail;
  next?: ProjectDetail;
}) {
  const { t } = useTranslation();

  return (
    <section className="py-16 border-t border-fg mt-8">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6">
        {prev ? (
          <Link
            to="/projects/$slug"
            params={{ slug: prev.slug }}
            className="col-span-12 md:col-span-6 group py-3 md:pr-6 md:border-r md:border-rule"
          >
            <div className="text-[0.7rem] uppercase tracking-[0.05em] text-fg-tertiary font-medium mb-2">
              ← {t.project.prev}
            </div>
            <div className="text-[1.75rem] font-light tracking-[-0.02em] leading-tight group-hover:text-accent transition-colors">
              {prev.title}<span className="text-accent">.</span>
            </div>
          </Link>
        ) : (
          <div className="col-span-12 md:col-span-6" />
        )}
        {next ? (
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="col-span-12 md:col-span-6 group py-3 md:pl-6 md:text-right"
          >
            <div className="text-[0.7rem] uppercase tracking-[0.05em] text-fg-tertiary font-medium mb-2">
              {t.project.next} →
            </div>
            <div className="text-[1.75rem] font-light tracking-[-0.02em] leading-tight group-hover:text-accent transition-colors">
              {next.title}<span className="text-accent">.</span>
            </div>
          </Link>
        ) : (
          <div className="col-span-12 md:col-span-6" />
        )}
      </div>
    </section>
  );
}
