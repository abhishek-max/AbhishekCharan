import React from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { skillGroups } from '../data/profile';

const Skills: React.FC = () => (
  <Section id="skills" title="Skills" lede="Grouped the way I use them at work.">
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
      {skillGroups.map((group, gi) => (
        <Reveal key={group.name} delay={(gi % 2) * 100}>
          <h3 className="border-b border-line pb-2 text-lg font-bold">{group.name}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item, i) => (
              <li
                key={item}
                className="pop tag text-ink"
                style={{ '--delay': `${200 + i * 70}ms` } as React.CSSProperties}
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
