import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BadgeCheck, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import Reveal from './Reveal';
import { certificates, otherCertificates } from '../data/profile';

const Lightbox: React.FC<{ index: number; onClose: () => void; onMove: (d: number) => void }> = ({
  index,
  onClose,
  onMove,
}) => {
  const cert = certificates[index];
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [onClose, onMove]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      className="lightbox-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="lightbox-panel relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img
          key={cert.image}
          src={cert.image}
          alt={`${cert.title} certificate`}
          className="lightbox-panel max-h-[75vh] w-full rounded-lg bg-white object-contain shadow-2xl"
        />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-white">
          <div>
            <p className="font-display text-lg font-semibold">{cert.title}</p>
            <p className="text-sm text-white/70">
              {cert.issuer}, {cert.date}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {cert.verify && (
              <a href={cert.verify} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark px-4 py-2 text-sm">
                <BadgeCheck size={16} aria-hidden />
                Verify on Coursera
              </a>
            )}
            <button type="button" onClick={() => onMove(-1)} className="btn-ghost-dark p-2" aria-label="Previous certificate">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => onMove(1)} className="btn-ghost-dark p-2" aria-label="Next certificate">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 rounded-full bg-white p-2 text-ink shadow-lg hover:bg-paper"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + certificates.length) % certificates.length)),
    [],
  );

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2">
        {certificates.map((c, i) => (
          <Reveal as="li" key={c.title} delay={(i % 2) * 100} className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="relative block aspect-[4/3] overflow-hidden bg-paper"
              aria-label={`View ${c.title} certificate`}
            >
              <img
                src={c.thumb}
                alt=""
                loading="lazy"
                width={480}
                height={360}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-ink/80 px-2.5 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                <Expand size={14} aria-hidden />
                View
              </span>
            </button>
            <div className="flex flex-1 flex-col p-5">
              <h4 className="font-display text-lg font-bold leading-snug">{c.title}</h4>
              <p className="mt-1 text-sm text-mute">{c.issuer}</p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-sm">
                <span className="num text-mute">
                  {c.date}
                  {c.note ? `, ${c.note.toLowerCase()}` : ''}
                </span>
                {c.verify && (
                  <a
                    href={c.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 font-medium text-brand hover:underline"
                  >
                    <BadgeCheck size={16} aria-hidden />
                    Verify
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
      <p className="mt-5 text-mute">{otherCertificates}</p>

      {open !== null && <Lightbox index={open} onClose={close} onMove={move} />}
    </>
  );
};

export default Certifications;
