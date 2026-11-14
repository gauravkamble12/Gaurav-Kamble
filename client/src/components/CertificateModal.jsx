import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

const ZOOM_STEPS = [0.75, 1, 1.25, 1.5, 2, 2.5];

export default function CertificateModal({ cert, onClose }) {
  const closeRef = useRef(null);
  const canvasRef = useRef(null);
  const pdfRef = useRef(null);

  const [status, setStatus] = useState('loading');
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [zoomIndex, setZoomIndex] = useState(1);
  const [rendering, setRendering] = useState(false);

  const scale = ZOOM_STEPS[zoomIndex];
  const fileUrl = encodeURI(`/certificates/${cert.file}`);

  useEffect(() => {
    let cancelled = false;
    let loadingTask = null;

    (async () => {
      try {
        const pdfjsLib = await import('pdfjs-dist');
        if (cancelled) return;

        pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

        loadingTask = pdfjsLib.getDocument({ url: fileUrl });
        const doc = await loadingTask.promise;
        if (cancelled) return;

        pdfRef.current = doc;
        setPageCount(doc.numPages);
        setStatus('ready');
      } catch {
        if (!cancelled) setStatus('error');
      }
    })();

    return () => {
      cancelled = true;
      pdfRef.current = null;
      if (loadingTask) {
        loadingTask.destroy().catch(() => {});
      }
    };
  }, [fileUrl]);

  useEffect(() => {
    if (status !== 'ready' || !pdfRef.current) return;

    let cancelled = false;
    let renderTask = null;

    setRendering(true);

    (async () => {
      try {
        const pdfPage = await pdfRef.current.getPage(page);
        if (cancelled) return;

        const viewport = pdfPage.getViewport({ scale });
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        renderTask = pdfPage.render({ canvas, viewport, transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null });
        await renderTask.promise;

        if (!cancelled) setRendering(false);
      } catch {
        if (!cancelled) setRendering(false);
      }
    })();

    return () => {
      cancelled = true;
      if (renderTask) renderTask.cancel();
    };
  }, [page, scale, status]);

  const goToPage = useCallback((next) => {
    setPage(Math.min(Math.max(next, 1), pageCount || 1));
  }, [pageCount]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goToPage(page + 1);
      if (e.key === 'ArrowLeft') goToPage(page - 1);
    };

    document.addEventListener('keydown', onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, page, goToPage]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={cert.name}
    >
      <div
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="relative w-full max-w-4xl h-[92vh] sm:h-[88vh] glass-panel border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
        <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 border-b border-slate-800 shrink-0">
          <div className="w-9 h-9 shrink-0 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <i className="fa-solid fa-certificate"></i>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm sm:text-base font-bold text-slate-100 truncate">{cert.name}</h3>
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">Credential preview</p>
          </div>

          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-purple-300 hover:border-purple-500/40 transition-colors"
          >
            <i className="fa-solid fa-download"></i>
            <span>Download</span>
          </a>

          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close preview"
            className="w-9 h-9 shrink-0 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors flex items-center justify-center"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="relative flex-1 min-h-0 bg-slate-950 overflow-auto">
          {status === 'loading' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400">
              <i className="fa-solid fa-spinner fa-spin text-2xl text-cyan-400"></i>
              <span className="text-xs font-mono">Loading document</span>
            </div>
          )}

          {status === 'error' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6">
              <i className="fa-solid fa-triangle-exclamation text-3xl text-amber-400"></i>
              <p className="text-sm text-slate-300">This document could not be rendered on your browser.</p>
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/40 text-purple-300 font-semibold text-sm"
              >
                <i className="fa-solid fa-up-right-from-square"></i>
                <span>Open in new tab</span>
              </a>
            </div>
          )}

          {status === 'ready' && (
            <div className="min-h-full flex justify-center py-4 px-2 sm:py-6">
              <canvas
                ref={canvasRef}
                className={`rounded-lg shadow-2xl bg-white transition-opacity duration-150 ${rendering ? 'opacity-40' : 'opacity-100'}`}
              ></canvas>
            </div>
          )}
        </div>

        <div className="px-4 sm:px-5 py-3 border-t border-slate-800 shrink-0 flex items-center justify-between gap-3">
          <p className="hidden sm:flex items-center gap-2 text-[11px] text-slate-500">
            <i className="fa-solid fa-keyboard text-slate-600"></i>
            <kbd className="font-mono text-slate-400">Esc</kbd> to close
          </p>

          {status === 'ready' ? (
            <div className="flex items-center gap-1.5 sm:gap-2 mx-auto sm:mx-0 sm:ml-auto">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page <= 1}
                aria-label="Previous page"
                className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 disabled:opacity-30 disabled:hover:text-slate-300 disabled:hover:border-slate-800 transition-colors flex items-center justify-center"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>

              <span className="font-mono text-xs text-slate-400 px-2 tabular-nums">
                {page} / {pageCount}
              </span>

              <button
                onClick={() => goToPage(page + 1)}
                disabled={page >= pageCount}
                aria-label="Next page"
                className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 disabled:opacity-30 disabled:hover:text-slate-300 disabled:hover:border-slate-800 transition-colors flex items-center justify-center"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>

              <span className="w-px h-5 bg-slate-800 mx-1"></span>

              <button
                onClick={() => setZoomIndex((i) => Math.max(i - 1, 0))}
                disabled={zoomIndex === 0}
                aria-label="Zoom out"
                className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 disabled:opacity-30 disabled:hover:text-slate-300 disabled:hover:border-slate-800 transition-colors flex items-center justify-center"
              >
                <i className="fa-solid fa-magnifying-glass-minus text-xs"></i>
              </button>

              <span className="font-mono text-xs text-slate-400 w-11 text-center tabular-nums">
                {Math.round(scale * 100)}%
              </span>

              <button
                onClick={() => setZoomIndex((i) => Math.min(i + 1, ZOOM_STEPS.length - 1))}
                disabled={zoomIndex === ZOOM_STEPS.length - 1}
                aria-label="Zoom in"
                className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 disabled:opacity-30 disabled:hover:text-slate-300 disabled:hover:border-slate-800 transition-colors flex items-center justify-center"
              >
                <i className="fa-solid fa-magnifying-glass-plus text-xs"></i>
              </button>
            </div>
          ) : (
            <span></span>
          )}

          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300"
          >
            <i className="fa-solid fa-download"></i>
            <span>Open</span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
