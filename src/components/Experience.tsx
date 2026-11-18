import React, { useEffect, useRef } from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { experience } from '../data/profile';
import { prefersReducedMotion } from '../hooks/useInView';

const typeStyle: Record<string, string> = {
  Current: 'bg-gain text-white',
  'Full-time': 'bg-brand-soft text-brand',
  Internship: 'bg-gain/10 text-gain',
  'Own business': 'bg-line/60 text-mute',
};

const Experience: React.FC = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // The timeline fills in as you scroll past it.
  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;
    if (prefersReducedMotion()) {
      fill.style.transform = 'scaleY(1)';
      return;
    }
    let frame = 0;
    const update = () => {
      const rect = list.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const p = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
      fill.style.transform = `scaleY(${p})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Section id="experience" title="Experience" lede="Most recent first.">
      <ol ref={listRef} className="relative">
        <div aria-hidden className="absolute bottom-2 left-[5px] top-2 w-0.5 bg-line" />
        <div
          ref={fillRef}
          aria-hidden
          className="absolute bottom-2 left-[5px] top-2 w-0.5 origin-top bg-brand"
          style={{ transform: 'scaleY(0)' }}
        />

        {experience.map((job) => (
          <Reveal as="li" key={job.org + job.period} className="relative pb-12 pl-10 last:pb-0">
            <span
              aria-hidden
              className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-brand bg-paper"
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="num text-sm font-medium text-mute">{job.period}</p>
              {job.type && (
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeStyle[job.type]}`}>
                  {job.type}
                </span>
              )}
            </div>
            <h3 className="mt-2 text-xl font-bold md:text-2xl">{job.role}</h3>
            <p className="mt-0.5 text-mute">
              {job.org}
              {job.place ? `, ${job.place}` : ''}
            </p>
            <ul className="mt-4 max-w-prose space-y-2">
              {job.points.map((pt) => (
                <li key={pt} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-ink/30">
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
