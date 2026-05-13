import { useTranslation } from '@/i18n/i18n';
import { Prompt, Output } from '@/components/ui/Prompt';
import { useScrollReveal } from '@/lib/useScrollReveal';

export function ProjectGallery({ images }: { images: string[]; num?: string }) {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>({
    selector: '[data-gallery-item]',
    y: 12,
    stagger: 0.08,
  });

  if (!images.length) return null;

  return (
    <section className="px-6 md:px-10 max-w-[1200px] mx-auto">
      <Prompt cmd="ls" arg="-1 screenshots/" />
      <Output>
        <h2 className="text-green text-[1.2rem] mt-3 mb-3">
          <span className="text-fg-faint"># </span>
          {t.project.gallery}
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {images.map((src, i) => (
            <figure
              key={src}
              data-gallery-item
              className={
                'relative group border border-rule bg-bg-2 overflow-hidden ' +
                (i === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[16/10]')
              }
            >
              <img
                src={src}
                alt={`screenshot-${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute bottom-2 left-2 bg-bg/90 border border-rule px-2 py-0.5 text-[10px] text-fg-dim">
                <span className="text-fg-faint">screenshot_</span>
                {String(i + 1).padStart(2, '0')}.png
              </figcaption>
            </figure>
          ))}
        </div>
      </Output>
    </section>
  );
}
