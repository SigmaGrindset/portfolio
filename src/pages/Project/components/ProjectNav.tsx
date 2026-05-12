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
    <section className="py-16 border-t-2 border-fg relative z-10 mt-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6">
        {prev ? (
          <Link
            to="/projects/$slug"
            params={{ slug: prev.slug }}
            className="col-span-12 md:col-span-6 group border-r-0 md:border-r border-rule pr-0 md:pr-6 py-4"
          >
            <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-fg-tertiary mb-3">
              <ArrowLeft size={12} />
              {t.project.prev}
            </div>
            <div className="font-serif text-2xl md:text-3xl font-normal leading-tight group-hover:text-accent transition-colors">
              <em className="italic font-light">{prev.title.split(' ')[0]}</em>
              {prev.title.split(' ').length > 1 && (
                <> {prev.title.split(' ').slice(1).join(' ')}</>
              )}
            </div>
          </Link>
        ) : (
          <div className="col-span-12 md:col-span-6" />
        )}

        {next ? (
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="col-span-12 md:col-span-6 group pl-0 md:pl-6 py-4 md:text-right"
          >
            <div className="flex md:justify-end items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-fg-tertiary mb-3">
              {t.project.next}
              <ArrowRight size={12} />
            </div>
            <div className="font-serif text-2xl md:text-3xl font-normal leading-tight group-hover:text-accent transition-colors">
              <em className="italic font-light">{next.title.split(' ')[0]}</em>
              {next.title.split(' ').length > 1 && (
                <> {next.title.split(' ').slice(1).join(' ')}</>
              )}
            </div>
          </Link>
        ) : (
          <div className="col-span-12 md:col-span-6" />
        )}
      </div>
    </section>
  );
}
