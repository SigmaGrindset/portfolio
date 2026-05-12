import { useEffect } from 'react';

const BASE = 'Antonio Batarilović';

/**
 * Sets document.title to "{title} — Antonio Batarilović".
 * Pass an empty string or undefined to use just the base name.
 */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — Portfolio`;
  }, [title]);
}
