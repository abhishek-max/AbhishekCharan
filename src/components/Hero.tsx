import React, { useMemo } from 'react';
import { Download, Mail } from 'lucide-react';
import { profile, milestones } from '../data/profile';

// Chart geometry: x and y in % of the chart box (y from the top).
// Milestones are spaced evenly so their labels never collide.
const MILESTONE_Y = [80, 68, 54, 40, 27, 13];
const DRAW_START = 500; // ms, matches .chart-draw in index.css
const DRAW_TIME = 2200;

const xAt = (i: number) => 6 + (i * 85) / (milestones.length - 1);

// Small deterministic noise so the line reads like a market chart,
// but looks the same on every visit.
function noise(i: number) {
  const s = Math.sin(i * 12.9898) * 43758.5453;
  return s - Math.floor(s) - 0.5;
}

function buildPath() {
  const anchors = [
    { x: 0, y: 90 },
    ...milestones.map((_, i) => ({ x: xAt(i), y: MILESTONE_Y[i] })),
    { x: 100, y: 6 },
  ];
  const pts: { x: number; y: number }[] = [];
  let k = 0;
  for (let a = 0; a < anchors.length - 1; a++) {
    const p = anchors[a];
    const q = anchors[a + 1];
    const steps = Math.max(3, Math.round((q.x - p.x) / 2.2));
    for (let s = 0; s < steps; s++) {
      const f = s / steps;
      const jitter = s === 0 ? 0 : noise(k++) * 7;
      pts.push({ x: p.x + (q.x - p.x) * f, y: p.y + (q.y - p.y) * f + jitter });
    }
  }
  pts.push(anchors[anchors.length - 1]);
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${(p.x * 10).toFixed(1)},${(p.y * 3).toFixed(1)}`).join(' ');
  const area = `${line} L1000,300 L0,300 Z`;
  return { line, area };
}

const CareerChart: React.FC = () => {
  const { line, area } = useMemo(buildPath, []);
  const last = milestones.length - 1;

  return (
    <div aria-hidden>
      <div className="relative h-[170px] sm:h-[210px] md:h-[240px]">
        <div className="chart-draw absolute inset-0">
          <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="h-full w-full">
            <defs>
              <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2FD3A6" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#2FD3A6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={area} fill="url(#hero-area)" />
            <path
              d={line}
              fill="none"
              stroke="#2FD3A6"
              strokeWidth="2"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {milestones.map((m, i) => {
          const x = xAt(i);
          const y = MILESTONE_Y[i];
          const delay = DRAW_START + (x / 100) * DRAW_TIME;
          return (
            <React.Fragment key={m.label}>
              {/* drop line from the point to the axis */}
              <span
                className="fade-late absolute w-px -translate-x-1/2 border-l border-dashed border-white/20"
                style={{ left: `${x}%`, top: `${y}%`, bottom: 0, '--delay': `${delay}ms` } as React.CSSProperties}
              />
              <span
                className="milestone absolute block h-3 w-3"
                style={{ left: `${x}%`, top: `${y}%`, '--delay': `${delay}ms` } as React.CSSProperties}
              >
                {i === last && <span className="pulse-ring absolute inset-0 rounded-full bg-gain-bright" />}
                <span className="absolute inset-0 rounded-full border-2 border-gain-bright bg-ink" />
              </span>
            </React.Fragment>
          );
        })}
      </div>

      {/* Axis labels: years on small screens, two staggered rows of labels on large ones */}
      <div className="relative h-10 border-t border-white/15 lg:h-[4.75rem]">
        {milestones.map((m, i) => {
          const x = xAt(i);
          const delay = DRAW_START + (x / 100) * DRAW_TIME;
          const align = i === 0 ? '-translate-x-3' : i === last ? '-translate-x-[calc(100%-0.75rem)]' : '-translate-x-1/2';
          return (
            <span
              key={m.label}
              className={`hero-in absolute whitespace-nowrap text-xs leading-tight ${
                i % 2 ? 'lg:top-10' : ''
              } top-2.5`}
              style={{ left: `${x}%`, '--delay': `${delay}ms` } as React.CSSProperties}
            >
              <span className={`block ${align} lg:text-[0.8rem]`}>
                <span className="num font-semibold text-gain-bright">{m.year}</span>
                <span className="hidden text-white/75 lg:inline"> {m.label}</span>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

const Hero: React.FC = () => (
  <section id="top" className="relative overflow-hidden bg-ink text-white">
    <div
      aria-hidden
      className="hero-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black)]"
    />

    <div className="relative mx-auto max-w-6xl px-5 pt-24 md:px-8 md:pt-28">
      <div className="hero-in flex items-center gap-4" style={{ '--delay': '0ms' } as React.CSSProperties}>
        <img
          src={profile.photo}
          alt={profile.name}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20"
        />
        <p className="flex items-center gap-2 text-sm text-white/75">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gain-bright opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gain-bright" />
          </span>
          {profile.status}
        </p>
      </div>

      <h1
        className="hero-in mt-6 text-[clamp(2.75rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.035em]"
        style={{ '--delay': '100ms' } as React.CSSProperties}
      >
        {profile.name}
      </h1>
      <p
        className="hero-in mt-5 max-w-3xl font-display text-xl font-medium text-white/90 md:text-2xl"
        style={{ '--delay': '200ms' } as React.CSSProperties}
      >
        {profile.headline}
      </p>
      <p
        className="hero-in mt-4 max-w-3xl text-white/65"
        style={{ '--delay': '300ms' } as React.CSSProperties}
      >
        {profile.intro}
      </p>

      <div
        className="hero-in mt-8 flex flex-col gap-3 sm:flex-row"
        style={{ '--delay': '400ms' } as React.CSSProperties}
      >
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <Download size={18} aria-hidden />
          Download resume
        </a>
        <a href="#contact" className="btn-ghost-dark">
          <Mail size={18} aria-hidden />
          Get in touch
        </a>
      </div>

      <div className="mt-12 pb-6">
        <CareerChart />
      </div>
    </div>
  </section>
);

export default Hero;
