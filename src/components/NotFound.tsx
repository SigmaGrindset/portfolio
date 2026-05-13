import { Link } from '@tanstack/react-router';
import { useTranslation } from '@/i18n/i18n';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export function NotFound() {
  const { t } = useTranslation();
  useDocumentTitle('404');

  return (
    <section className="min-h-[70vh] flex items-start justify-center px-6 md:px-10 pt-16 max-w-[1200px] mx-auto">
      <div className="max-w-[640px] w-full">
        <div className="text-[13px]">
          <span className="text-green font-medium">➜  </span>
          <span className="text-blue">~/portfolio</span>
          <span className="text-fg ml-2">cd</span>
          <span className="text-amber ml-1.5">./{window.location.pathname.slice(1) || 'unknown'}</span>
        </div>
        <div className="ml-4 pl-4 border-l border-rule mt-3">
          <div className="text-red text-[13px] mb-3">
            <span className="text-fg-faint">bash: </span>
            cd: ./{window.location.pathname.slice(1) || 'unknown'}: No such file or directory
          </div>
          <div className="text-fg-faint text-[11px] mb-6">
            error code: <span className="text-amber">{t.notFound.code}</span>
          </div>
          <pre className="text-amber text-[10px] leading-[1.1] whitespace-pre mb-6 overflow-x-auto">
{`    ██╗  ██╗ ██████╗ ██╗  ██╗
    ██║  ██║██╔═████╗██║  ██║
    ███████║██║██╔██║███████║
    ╚════██║████╔╝██║╚════██║
         ██║╚██████╔╝     ██║
         ╚═╝ ╚═════╝      ╚═╝`}
          </pre>
          <p className="text-fg mb-6 max-w-[60ch]">{t.notFound.text}</p>
          <Link
            to="/"
            className="inline-block text-blue border-b border-blue border-dashed hover:bg-green/20 transition-colors text-[14px]"
          >
            ← cd ../home
          </Link>
        </div>
      </div>
    </section>
  );
}
