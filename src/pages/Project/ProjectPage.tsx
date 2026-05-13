import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/i18n/i18n';
import { useDocumentTitle } from '@/lib/useDocumentTitle';
import { getProjectBySlug, getAdjacentProjects } from '@/data/projects';
import { ProjectHero } from './components/ProjectHero';
import { ProjectOverview } from './components/ProjectOverview';
import { ProjectFeatures } from './components/ProjectFeatures';
import { ProjectStack } from './components/ProjectStack';
import { ProjectGallery } from './components/ProjectGallery';
import { ProjectNav } from './components/ProjectNav';

export function ProjectPage({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const project = getProjectBySlug(slug);
  useDocumentTitle(project?.title);

  if (!project) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-10 py-24">
        <div className="max-w-[640px] grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-2 text-[0.75rem] font-medium text-fg-tertiary tracking-[0.05em]">
            <span className="text-accent tabular">— Error</span>
          </div>
          <h1 className="col-span-12 md:col-span-10 text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none tracking-[-0.04em]">
            {t.project.notFound}<span className="text-accent font-normal">.</span>
          </h1>
          <p className="col-span-12 md:col-start-3 md:col-span-10 text-[1rem] text-fg-secondary mt-4">
            {t.project.notFoundText}
          </p>
          <Link
            to="/"
            hash="projects"
            className="col-span-12 md:col-start-3 md:col-span-10 mt-6 inline-flex items-center gap-2 text-[0.9rem] font-medium text-fg border-b border-fg pb-0.5 self-start hover:text-accent hover:border-accent transition-colors"
          >
            <ArrowLeft size={14} />
            {t.project.back}
          </Link>
        </div>
      </section>
    );
  }

  const { prev, next } = getAdjacentProjects(slug);
  const hasFeatures = (project.features?.length ?? 0) > 0;
  const hasGallery = project.gallery.length > 0;

  let n = 0;
  const overviewNum = `0${++n}`;
  const featuresNum = hasFeatures ? `0${++n}` : '';
  const stackNum = `0${++n}`;
  const galleryNum = hasGallery ? `0${++n}` : '';

  return (
    <div>
      <ProjectHero project={project} />
      <ProjectOverview paragraphs={project.overview} num={overviewNum} />
      {hasFeatures && project.features && (
        <ProjectFeatures features={project.features} num={featuresNum} />
      )}
      <ProjectStack groups={project.techStack} num={stackNum} />
      {hasGallery && <ProjectGallery images={project.gallery} num={galleryNum} />}
      <ProjectNav prev={prev} next={next} />
    </div>
  );
}
