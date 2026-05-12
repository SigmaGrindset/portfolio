import { Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
    <section className="py-16 border-t border-border relative z-10 mt-8">
      <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {prev ? (
          <Link
            to="/projects/$slug"
            params={{ slug: prev.slug }}
            className="group bg-surface border border-border rounded-xl p-6 hover:border-accent hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-fg-tertiary mb-3">
              <ArrowLeft size={14} />
              {t.project.prev}
            </div>
            <div className="text-xl font-bold tracking-tight group-hover:text-accent transition-colors">
              {prev.title}
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group bg-surface border border-border rounded-xl p-6 hover:border-accent hover:-translate-y-1 transition-all md:text-right"
          >
            <div className="flex md:justify-end items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-fg-tertiary mb-3">
              {t.project.next}
              <ArrowRight size={14} />
            </div>
            <div className="text-xl font-bold tracking-tight group-hover:text-accent transition-colors">
              {next.title}
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
