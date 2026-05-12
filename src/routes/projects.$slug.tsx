import { createFileRoute, useParams } from '@tanstack/react-router';
import { ProjectPage } from '@/pages/Project/ProjectPage';

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectRoute,
});

function ProjectRoute() {
  const { slug } = useParams({ from: '/projects/$slug' });
  return <ProjectPage slug={slug} />;
}

