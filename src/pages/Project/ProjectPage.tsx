import { Link } from '@tanstack/react-router';
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
      <section className="px-6 md:px-10 max-w-[1200px] mx-auto pt-6 text-[13px]">
        <div>
          <span className="text-green font-medium">➜  </span>
          <span className="text-blue">~/portfolio</span>
          <span className="text-fg ml-2">cat</span>
          <span className="text-amber ml-1.5">projects/{slug}</span>
        </div>
        <div className="ml-4 pl-4 border-l border-rule mt-3 mb-6">
          <div className="text-red text-[13px] mb-3">
            <span className="text-fg-faint">cat: </span>
            projects/{slug}: No such file or directory
          </div>
          <p className="text-fg mb-4">{t.project.notFoundText}</p>
          <Link
            to="/"
            hash="projects"
            className="inline-block text-blue border-b border-blue border-dashed hover:bg-green/20 transition-colors"
          >
            ← cd ../projects
          </Link>
        </div>
      </section>
    );
  }

  const { prev, next } = getAdjacentProjects(slug);
  const hasFeatures = (project.features?.length ?? 0) > 0;
  const hasGallery = project.gallery.length > 0;

  return (
    <div className="pb-12">
      <ProjectHero project={project} />
      <ProjectOverview paragraphs={project.overview} />
      {hasFeatures && project.features && <ProjectFeatures features={project.features} />}
      <ProjectStack groups={project.techStack} />
      {hasGallery && <ProjectGallery images={project.gallery} />}
      <ProjectNav prev={prev} next={next} />
    </div>
  );
}
