import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/pages/Homepage/HomePage';

export const Route = createFileRoute('/')({
  component: HomePage,
});
