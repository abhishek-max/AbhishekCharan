import React from 'react';
import Section from './Section';
import Reveal from './Reveal';
import Certifications from './Certifications';
import { education } from '../data/profile';

const Education: React.FC = () => (
  <Section id="credentials" title="Education & certifications" lede="Click a certificate to see it full size; Coursera ones link to their verification page.">
    <Reveal>
      <h3 className="text-lg font-bold">Education</h3>
      <ol className="mt-3 divide-y divide-line border-y border-line">
        {education.map((e) => (
          <li key={e.degree} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <p className="num text-sm font-medium text-mute sm:pt-0.5">{e.period}</p>
            <div>
              <p className="font-medium">{e.degree}</p>
              <p className="text-[0.95rem] text-mute">{e.school}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>

    <h3 className="mt-14 mb-4 text-lg font-bold">Certifications</h3>
    <Certifications />
  </Section>
);

export default Education;
