import { Link } from '@tanstack/react-router';
import { useTranslation } from '@/i18n/i18n';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export function NotFound() {
  const { t } = useTranslation();
  useDocumentTitle('404');

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 md:px-10">
      <div className="max-w-[640px] grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-2 text-[0.75rem] font-medium text-fg-tertiary tracking-[0.05em]">
          <span className="text-accent tabular">— Error</span>
        </div>
        <h1 className="col-span-12 md:col-span-10 text-[clamp(4rem,12vw,9rem)] font-light leading-none tracking-[-0.04em]">
          <span className="text-accent font-normal">{t.notFound.code}.</span>
        </h1>
        <p className="col-span-12 md:col-start-3 md:col-span-10 text-[1.1rem] text-fg-secondary mt-4 max-w-[50ch]">
          {t.notFound.text}
        </p>
        <div className="col-span-12 md:col-start-3 md:col-span-10 mt-8">
          <Link
            to="/"
            className="text-[1rem] text-fg border-b border-fg pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            ← {t.notFound.backHome}
          </Link>
        </div>
      </div>
    </section>
  );
}
