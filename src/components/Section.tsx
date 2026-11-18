import React from 'react';
import Reveal from './Reveal';

type SectionProps = {
  id: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Two-column section: the title sits in a sticky left column,
 * the content flows on the right.
 */
const Section: React.FC<SectionProps> = ({ id, title, lede, children, className = '' }) => (
  <section id={id} className={`border-t border-line py-20 md:py-28 ${className}`}>
    <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:gap-12 md:px-8">
      <Reveal className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          {lede && <p className="mt-3 max-w-xs text-mute">{lede}</p>}
        </div>
      </Reveal>
      <div className="md:col-span-8">{children}</div>
    </div>
  </section>
);

export default Section;
