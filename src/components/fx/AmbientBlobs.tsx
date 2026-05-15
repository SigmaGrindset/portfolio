export function AmbientBlobs() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <div
        className="blob"
        style={{
          width: '55vw',
          height: '55vw',
          top: '-10vh',
          left: '-10vw',
          background: 'var(--color-magenta)',
          opacity: 0.45,
          animation: 'blob-float-1 18s ease-in-out infinite',
        }}
      />
      <div
        className="blob"
        style={{
          width: '50vw',
          height: '50vw',
          top: '20vh',
          right: '-15vw',
          background: 'var(--color-cyan)',
          opacity: 0.35,
          animation: 'blob-float-2 22s ease-in-out infinite',
        }}
      />
      <div
        className="blob"
        style={{
          width: '45vw',
          height: '45vw',
          bottom: '-20vh',
          left: '20vw',
          background: 'var(--color-lime)',
          opacity: 0.25,
          animation: 'blob-float-3 26s ease-in-out infinite',
        }}
      />
    </div>
  );
}
