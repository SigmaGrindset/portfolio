import { useDocumentTitle } from '@/lib/useDocumentTitle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export function HomePage() {
  useDocumentTitle();
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
