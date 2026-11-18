import React from 'react';
import Section from './Section';
import Reveal from './Reveal';
import Roles from './Roles';
import { awards } from '../data/profile';

const Achievements: React.FC = () => (
  <Section id="awards" title="Awards & leadership" lede="Research, competitions, speaking and the teams I have led.">
    <div className="grid gap-12 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <h3 className="text-lg font-bold">Awards</h3>
        <ol className="mt-3 divide-y divide-line border-y border-line">
          {awards.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 60} className="grid grid-cols-[3.5rem_1fr] gap-4 py-5">
              <p className="num font-display text-lg font-bold text-brand">{a.year}</p>
              <div>
                <p className="font-medium leading-snug">{a.title}</p>
                <p className="text-sm text-mute">{a.org}</p>
                <p className="mt-1 text-[0.95rem]">{a.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
      <div className="lg:col-span-2">
        <h3 className="mb-5 text-lg font-bold">Leadership & activities</h3>
        <Roles />
        <p className="mt-8 text-sm text-mute">Outside work: karate, yellow belt.</p>
      </div>
    </div>
  </Section>
);

export default Achievements;
