export function Footer() {
  return (
    <footer className="border-t border-rule px-6 md:px-10 py-4 max-w-[1200px] mx-auto text-[11px] text-fg-faint mt-12 flex flex-col sm:flex-row justify-between gap-3">
      <span>
        <span className="text-fg-faint">{'// '}</span>
        antonio batarilović · MMXXVI · built with vite, react, tanstack
      </span>
      <span className="flex gap-6">
        <a
          href="https://github.com/SigmaGrindset"
          target="_blank"
          rel="noreferrer"
          className="text-fg-dim hover:text-green transition-colors"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/antonio-batarilovi%C4%87-509a26240/"
          target="_blank"
          rel="noreferrer"
          className="text-fg-dim hover:text-green transition-colors"
        >
          linkedin
        </a>
        <a
          href="mailto:antoniobnoni@gmail.com"
          className="text-fg-dim hover:text-green transition-colors"
        >
          email
        </a>
      </span>
    </footer>
  );
}
