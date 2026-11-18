import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <main className="hero-grid flex min-h-screen items-center bg-ink px-5 text-white">
    <div className="mx-auto max-w-lg text-center">
      <p className="num font-display text-7xl font-extrabold text-gain-bright">404</p>
      <h1 className="mt-4 text-3xl font-bold">This page doesn't exist</h1>
      <p className="mt-3 text-white/65">The link may be old or mistyped. The portfolio is one click away.</p>
      <Link to="/" className="btn-primary mt-8">
        <Home size={18} aria-hidden />
        Go to the portfolio
      </Link>
    </div>
  </main>
);

export default NotFound;
