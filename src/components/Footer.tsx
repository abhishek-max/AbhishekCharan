import React from 'react';
import { Mail, Linkedin, Phone, Github, ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

const Footer: React.FC = () => {
  const links = [
    { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Phone, label: 'Phone', href: profile.phoneHref },
    ...(profile.github ? [{ icon: Github, label: 'GitHub', href: profile.github }] : []),
  ];

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl font-bold">{profile.name}</p>
          <p className="mt-1 text-white/60">{profile.headline}</p>
        </div>
        <div className="flex items-center gap-3">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gain-bright hover:text-gain-bright"
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-sm text-white/50 md:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href="#top" className="flex items-center gap-1.5 hover:text-white">
            Back to top <ArrowUp size={14} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
