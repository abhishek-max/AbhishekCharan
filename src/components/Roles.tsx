import React from 'react';
import Reveal from './Reveal';
import { leadership } from '../data/profile';

/** Leadership roles, shown inside the Awards & leadership section. */
const Roles: React.FC = () => (
  <ul className="space-y-6">
    {leadership.map((r, i) => (
      <Reveal as="li" key={r.title} delay={i * 80}>
        <p className="font-medium">{r.title}</p>
        <p className="text-sm text-mute">
          {r.org}
          {r.period ? `, ${r.period}` : ''}
        </p>
        <p className="mt-1 text-[0.95rem]">{r.detail}</p>
      </Reveal>
    ))}
  </ul>
);

export default Roles;
