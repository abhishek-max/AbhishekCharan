import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { profile } from '../data/profile';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Background change + reading-progress bar. The bar is updated directly
  // so scrolling never re-renders the whole page.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Highlight the section currently in the middle of the screen.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        open ? 'bg-white shadow-[0_1px_0_#DDE3EB]' : scrolled ? 'bg-white/90 shadow-[0_1px_0_#DDE3EB] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className={`font-display text-lg font-bold tracking-tight transition-colors ${
            solid ? 'text-ink' : 'text-white'
          }`}
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-md px-3 py-2 text-[0.95rem] transition-colors ${
                  solid
                    ? isActive
                      ? 'text-brand'
                      : 'text-mute hover:text-ink'
                    : isActive
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-current transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-3 px-4 py-2 text-sm"
          >
            <Download size={16} aria-hidden />
            Resume
          </a>
        </nav>

        <button
          type="button"
          className={`rounded-md p-2 lg:hidden ${solid ? 'text-ink' : 'text-white'}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Reading progress */}
      <div
        ref={progressRef}
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gain"
        style={{ transform: 'scaleX(0)' }}
      />

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Sections"
          className="menu-panel h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white px-5 pb-8 lg:hidden"
        >
          <ul className="divide-y divide-line">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-4 font-display text-xl ${
                    active === item.id ? 'text-brand' : 'text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 w-full"
          >
            <Download size={18} aria-hidden />
            Download resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
