import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from '@/i18n/i18n';

const ASCII_NAME = `   █████╗ ███╗   ██╗████████╗ ██████╗ ███╗   ██╗██╗ ██████╗
  ██╔══██╗████╗  ██║╚══██╔══╝██╔═══██╗████╗  ██║██║██╔═══██╗
  ███████║██╔██╗ ██║   ██║   ██║   ██║██╔██╗ ██║██║██║   ██║
  ██╔══██║██║╚██╗██║   ██║   ██║   ██║██║╚██╗██║██║██║   ██║
  ██║  ██║██║ ╚████║   ██║   ╚██████╔╝██║ ╚████║██║╚██████╔╝
  ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚═╝ ╚═════╝`;

const ASCII_LAST = `██████╗  █████╗ ████████╗ █████╗ ██████╗ ██╗██╗      ██████╗ ██╗   ██╗██╗ ██████╗
██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██║██║     ██╔═══██╗██║   ██║██║██╔════╝
██████╔╝███████║   ██║   ███████║██████╔╝██║██║     ██║   ██║██║   ██║██║██║
██╔══██╗██╔══██║   ██║   ██╔══██║██╔══██╗██║██║     ██║   ██║╚██╗ ██╔╝██║██║
██████╔╝██║  ██║   ██║   ██║  ██║██║  ██║██║███████╗╚██████╔╝ ╚████╔╝ ██║╚██████╗
╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝ ╚═════╝   ╚═══╝  ╚═╝ ╚═════╝`;

export function Hero() {
  const { t } = useTranslation();
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set(
        [
          '[data-hero="ascii-1"]',
          '[data-hero="ascii-2"]',
          '[data-hero="kv"] > *',
          '[data-hero="intro"]',
        ],
        { autoAlpha: 0, y: 10 },
      );
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to('[data-hero="ascii-1"]', { y: 0, autoAlpha: 1, duration: 0.6 })
        .to('[data-hero="ascii-2"]', { y: 0, autoAlpha: 1, duration: 0.6 }, '-=0.3')
        .to(
          '[data-hero="kv"] > *',
          { y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.07 },
          '-=0.2',
        )
        .to('[data-hero="intro"]', { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.2');
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className="px-6 md:px-10 pt-10 pb-12 max-w-[1200px] mx-auto">
      <pre
        data-hero="ascii-1"
        className="text-green text-[8px] md:text-[10px] leading-[1.1] whitespace-pre overflow-x-auto"
        aria-label="Antonio"
      >
        {ASCII_NAME}
      </pre>
      <pre
        data-hero="ascii-2"
        className="text-amber text-[8px] md:text-[10px] leading-[1.1] whitespace-pre overflow-x-auto mt-1 mb-6"
        aria-label="Batarilović"
      >
        {ASCII_LAST}
      </pre>

      <dl data-hero="kv" className="text-fg-dim text-[13px] space-y-1 mb-6">
        <KV k="role" v="frontend developer" />
        <KV k="loc" v="Zagreb, HR" />
        <KV k="study" v="FER · 3rd year" />
        <KV k="now" v="Sofascore Frontend Academy" />
        <KV k="status" v="open to opportunities" highlight />
      </dl>

      <p
        data-hero="intro"
        className="text-fg max-w-[75ch] leading-[1.65] text-[14px]"
      >
        <span className="text-fg-faint italic"># </span>
        {t.hero.intro}
      </p>
    </section>
  );
}

function KV({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="flex gap-2 items-baseline">
      <dt className="text-blue w-20 shrink-0">{k}:</dt>
      <dd className={highlight ? 'text-green' : 'text-amber'}>"{v}"</dd>
    </div>
  );
}
