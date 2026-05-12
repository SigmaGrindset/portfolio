import { useTranslation } from '@/i18n/i18n';
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

  if (!project) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-8 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-3">{t.project.notFound}</h1>
          <p className="text-fg-secondary">{t.project.notFoundText}</p>
        </div>
      </section>
    );
  }

  const { prev, next } = getAdjacentProjects(slug);

  const hasFeatures = (project.features?.length ?? 0) > 0;
  const hasGallery = project.gallery.length > 0;

  let n = 0;
  const overviewNum = `0${++n}.`;
  const featuresNum = hasFeatures ? `0${++n}.` : '';
  const stackNum = `0${++n}.`;
  const galleryNum = hasGallery ? `0${++n}.` : '';

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview paragraphs={project.overview} num={overviewNum} />
      {hasFeatures && project.features && (
        <ProjectFeatures features={project.features} num={featuresNum} />
      )}
      <ProjectStack groups={project.techStack} num={stackNum} />
      {hasGallery && <ProjectGallery images={project.gallery} num={galleryNum} />}
      <ProjectNav prev={prev} next={next} />
    </>
  );
}
