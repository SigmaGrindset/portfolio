type Props = {
  items: readonly string[];
  separator?: string;
};

export function Marquee({ items, separator = '✦' }: Props) {
  const row = (
    <div className="marquee-track">
      {[0, 1].map((dup) => (
        <div key={dup} className="flex shrink-0 items-center pr-12" aria-hidden={dup === 1}>
          {items.map((it, i) => (
            <span
              key={`${dup}-${i}`}
              className="flex items-center gap-8 px-6 text-[clamp(2.5rem,7vw,6rem)] font-extrabold tracking-tight leading-none"
            >
              <span className="text-stroke">{it}</span>
              <span className="text-magenta text-[0.5em]" style={{ color: 'var(--color-magenta)' }}>
                {separator}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="marquee relative overflow-hidden py-6 border-y border-border">
      {row}
    </div>
  );
}
