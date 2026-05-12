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
      <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-10 text-center">
        <div className="max-w-[480px]">
          <h1 className="font-serif font-normal text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
            <em className="italic text-accent">{t.project.notFound}</em>
          </h1>
          <p className="text-fg-secondary mb-8">{t.project.notFoundText}</p>
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] border border-fg text-fg px-5 py-2.5 hover:bg-fg hover:text-bg transition-colors"
          >
            <ArrowLeft size={12} />
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
    <div className="pb-12">
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
