import { useTranslation } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectGallery({ images, num }: { images: string[]; num: string }) {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>({ selector: '[data-gallery-item]', y: 30, stagger: 0.1 });

  if (!images.length) return null;

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-[1100px] mx-auto px-8">
        <SectionHeader num={num} title={t.project.gallery} />
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {images.map((src, i) => (
            <div
              key={src}
              data-gallery-item
              className={
                'group relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface ' +
                (i === 0 ? 'md:col-span-2 md:aspect-[21/9]' : '')
              }
            >
              <img
                src={src}
                alt={`Screenshot ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
