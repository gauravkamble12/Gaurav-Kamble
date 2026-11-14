import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

const supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';

export default function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => supportsMatchMedia && window.matchMedia(QUERY).matches);

  useEffect(() => {
    if (!supportsMatchMedia) return;

    const query = window.matchMedia(QUERY);
    const onChange = (e) => setReduced(e.matches);

    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
