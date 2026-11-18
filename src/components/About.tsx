import React from 'react';
import { MapPin, Mail, Linkedin, GraduationCap } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { profile, summary, stats } from '../data/profile';
import { useCountUp, useInView } from '../hooks/useInView';

const Stat: React.FC<{ value: number; suffix: string; label: string; start: boolean }> = ({
  value,
  suffix,
  label,
  start,
}) => {
  const n = useCountUp(value, start);
  return (
    <div className="border-t-2 border-ink pt-4">
      <p className="num font-display text-4xl font-bold tracking-tight md:text-5xl">
        {n.toLocaleString('en-IN')}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-mute">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  const details = [
    { icon: MapPin, text: profile.location },
    { icon: GraduationCap, text: 'MBA, Business Analytics & Finance' },
    { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, text: profile.linkedinLabel, href: profile.linkedin },
  ];

  return (
    <Section id="about" title="About" lede="Finance first, then data. I like problems where both matter.">
      <Reveal className="space-y-4 text-lg leading-relaxed">
        {summary.map((p) => (
          <p key={p.slice(0, 20)} className="max-w-prose">
            {p}
          </p>
        ))}
      </Reveal>

      <Reveal delay={100}>
        <ul className="mt-8 grid gap-3 text-mute sm:grid-cols-2">
          {details.map(({ icon: Icon, text, href }) => (
            <li key={text} className="flex min-w-0 items-center gap-3">
              <Icon size={18} className="shrink-0 text-brand" aria-hidden />
              {href ? (
                <a
                  href={href}
                  className="truncate hover:text-brand"
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>

      <div ref={ref} className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} start={inView} />
        ))}
      </div>
    </Section>
  );
};

export default About;
