import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/i18n/i18n';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export function NotFound() {
  const { t } = useTranslation();
  useDocumentTitle('404');

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative z-10 px-8">
      <div className="text-center max-w-[520px]">
        <div className="font-mono text-sm text-accent mb-6">{t.notFound.code}</div>
        <h1 className="font-extrabold tracking-[-0.03em] leading-[0.95] text-[clamp(2.5rem,7vw,5rem)] mb-6">
          {t.notFound.title}
        </h1>
        <p className="text-fg-secondary text-lg mb-10">{t.notFound.text}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-accent text-white border border-accent hover:bg-accent-hover hover:-translate-y-px transition-[background-color,border-color,transform] duration-200"
        >
          <ArrowLeft size={16} />
          {t.notFound.backHome}
        </Link>
      </div>
    </section>
  );
}
