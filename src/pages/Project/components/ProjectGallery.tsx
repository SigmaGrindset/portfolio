import { useTranslation } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectGallery({ images, num }: { images: string[]; num: string }) {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>({
    selector: '[data-gallery-item]',
    y: 20,
    stagger: 0.08,
  });

  if (!images.length) return null;

  return (
    <section className="py-24 border-b border-rule">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <SectionHeader num={num} title={t.project.gallery} />
        <div ref={ref} className="grid grid-cols-12 gap-6">
          {images.map((src, i) => (
            <figure
              key={src}
              data-gallery-item
              className={
                'group relative overflow-hidden bg-bg-2 border border-rule ' +
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
              <figcaption className="absolute bottom-3 left-3 text-[0.7rem] uppercase tracking-[0.1em] text-fg bg-bg/80 px-2 py-0.5 backdrop-blur-sm">
                {String(i + 1).padStart(2, '0')}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
