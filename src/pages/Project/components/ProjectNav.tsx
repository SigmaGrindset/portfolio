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
    <section className="px-6 md:px-10 max-w-[1200px] mx-auto mt-12 border-t border-rule pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
      {prev ? (
        <Link
          to="/projects/$slug"
          params={{ slug: prev.slug }}
          className="group block py-3"
        >
          <div className="text-fg-faint text-[11px] mb-1">
            <span className="text-fg-faint">← </span>cd ../{prev.slug}
          </div>
          <div className="text-blue group-hover:text-green transition-colors">
            {prev.title.toLowerCase().replace(/\s+/g, '-')}/
          </div>
          <div className="text-fg-faint text-[11px] mt-0.5">{t.project.prev}</div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group block py-3 md:text-right"
        >
          <div className="text-fg-faint text-[11px] mb-1">
            cd ../{next.slug} <span className="text-fg-faint">→</span>
          </div>
          <div className="text-blue group-hover:text-green transition-colors">
            {next.title.toLowerCase().replace(/\s+/g, '-')}/
          </div>
          <div className="text-fg-faint text-[11px] mt-0.5">{t.project.next}</div>
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}
