export function Footer() {
  return (
    <footer className="border-t border-rule mt-12">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-8 grid grid-cols-12 gap-6 items-center text-[0.75rem] text-fg-tertiary">
        <span className="col-span-12 md:col-span-6">
          © 2026 Antonio Batarilović. Sva prava pridržana.
        </span>
        <span className="col-span-12 md:col-span-6 flex gap-6 md:justify-end">
          <a
            href="https://github.com/SigmaGrindset"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fg transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/antonio-batarilovi%C4%87-509a26240/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fg transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:antoniobnoni@gmail.com"
            className="hover:text-fg transition-colors"
          >
            Email
          </a>
        </span>
      </div>
    </footer>
  );
}
