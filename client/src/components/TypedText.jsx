import React, { useEffect, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const TYPE_MS = 85;
const DELETE_MS = 40;
const HOLD_MS = 1600;
const GAP_MS = 300;

export default function TypedText({ phrases, className = '' }) {
  const reduced = usePrefersReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const phrase = phrases[phraseIndex];

    if (!erasing && length < phrase.length) {
      const timer = setTimeout(() => setLength((n) => n + 1), TYPE_MS);
      return () => clearTimeout(timer);
    }

    if (!erasing && length === phrase.length) {
      const timer = setTimeout(() => setErasing(true), HOLD_MS);
      return () => clearTimeout(timer);
    }

    if (erasing && length > 0) {
      const timer = setTimeout(() => setLength((n) => n - 1), DELETE_MS);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
      setErasing(false);
    }, GAP_MS);

    return () => clearTimeout(timer);
  }, [reduced, phrases, phraseIndex, length, erasing]);

  if (reduced) {
    return <span className={className}>{phrases.join('  |  ')}</span>;
  }

  return <span className={className}>{phrases[phraseIndex].slice(0, length)}</span>;
}
