import { useTranslation } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectGallery({ images, num }: { images: string[]; num: string }) {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>({
    selector: '[data-gallery-item]',
    y: 24,
    stagger: 0.1,
  });

  if (!images.length) return null;

  return (
    <section className="relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader num={num} title={t.project.gallery} />
        <div ref={ref} className="grid grid-cols-12 gap-6">
          {images.map((src, i) => (
            <figure
              key={src}
              data-gallery-item
              className={
                'group relative overflow-hidden border border-rule bg-bg-2 ' +
                (i === 0
                  ? 'col-span-12 aspect-[21/9]'
                  : 'col-span-12 md:col-span-6 aspect-[16/10]')
              }
            >
              <img
                src={src}
                alt={`Screenshot ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute bottom-2 left-3 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-bg bg-fg/80 px-2 py-0.5">
                {String(i + 1).padStart(2, '0')}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
