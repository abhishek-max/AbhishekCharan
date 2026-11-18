import React from 'react';
import { ExternalLink, Smartphone, Globe } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { featuredProject, projects, otherProjects } from '../data/profile';
import { useInView } from '../hooks/useInView';

const SPARK =
  'M0,150 L25,140 L45,146 L70,120 L95,128 L120,104 L140,112 L165,90 L190,96 L215,70 L240,78 L262,58 L290,64 L315,40 L340,48 L365,26 L400,18';

const Sparkline: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      aria-hidden
      className={`hero-grid relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-ink ${inView ? 'is-visible' : ''}`}
    >
      <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="spark-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2FD3A6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2FD3A6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="spark-area" d={`${SPARK} L400,200 L0,200 Z`} fill="url(#spark-area)" />
        <path
          className="spark-line"
          d={SPARK}
          pathLength={1}
          fill="none"
          stroke="#2FD3A6"
          strokeWidth="2.5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <p className="absolute left-4 top-3 font-display text-sm font-semibold text-white/80">
        Track My Stock
      </p>
    </div>
  );
};

const TechList: React.FC<{ tech: string[] }> = ({ tech }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Technologies">
    {tech.map((t) => (
      <li key={t} className="tag">
        {t}
      </li>
    ))}
  </ul>
);

const Projects: React.FC = () => {
  const fp = featuredProject;
  return (
    <Section id="projects" title="Projects" lede="Things I have built and shipped, starting with the one you can download.">
      <Reveal as="article" className="rounded-2xl border border-line bg-white p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="flex items-center gap-2 text-sm font-medium text-gain">
              <span className="h-2 w-2 rounded-full bg-gain" aria-hidden />
              Live on Android and the web
            </p>
            <h3 className="mt-2 text-2xl font-bold md:text-3xl">{fp.title}</h3>
            <p className="mt-2 text-mute">{fp.summary}</p>
            <ul className="mt-4 space-y-2">
              {fp.points?.map((pt) => (
                <li key={pt} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gain">
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <TechList tech={fp.tech} />
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-2">
            <Sparkline />
            {fp.links?.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={i === 0 ? 'btn-primary' : 'btn-outline'}
              >
                {i === 0 ? <Smartphone size={18} aria-hidden /> : <Globe size={18} aria-hidden />}
                {l.label}
                <ExternalLink size={14} aria-hidden className="opacity-70" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            delay={i * 120}
            className="flex flex-col rounded-2xl border border-line bg-white p-6 transition-colors duration-300 hover:border-brand/40"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-mute">{p.summary}</p>
            {p.points && (
              <ul className="mt-3 space-y-1.5 text-[0.95rem]">
                {p.points.map((pt) => (
                  <li key={pt} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-ink/30">
                    {pt}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto pt-5">
              <TechList tech={p.tech} />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="text-lg font-bold">Earlier builds</h3>
        <ul className="mt-3 divide-y divide-line border-y border-line">
          {otherProjects.map((p) => (
            <li key={p.title} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
              <p className="font-medium">{p.title}</p>
              <p className="text-[0.95rem] text-mute sm:col-span-2">
                {p.summary}
                <span className="mt-1 block text-sm text-ink/50">{p.tech.join(', ')}</span>
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
};

export default Projects;
