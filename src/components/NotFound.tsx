import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/i18n/i18n';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export function NotFound() {
  const { t } = useTranslation();
  useDocumentTitle('404');

  return (
    <section className="min-h-[70vh] flex items-center justify-center relative z-10 px-6 md:px-10">
      <div className="text-center max-w-[640px]">
        <div className="font-serif font-light italic text-accent text-[clamp(6rem,18vw,12rem)] leading-none mb-4">
          {t.notFound.code}
        </div>
        <h1 className="font-serif font-normal text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight mb-6">
          <em>{t.notFound.title.split(' ')[0]}</em>{' '}
          {t.notFound.title.split(' ').slice(1).join(' ')}
        </h1>
        <p className="text-fg-secondary text-lg mb-10 max-w-[40ch] mx-auto">
          {t.notFound.text}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] border border-fg text-fg px-6 py-3 hover:bg-fg hover:text-bg transition-colors"
        >
          <ArrowLeft size={14} />
          {t.notFound.backHome}
        </Link>
      </div>
    </section>
  );
}
