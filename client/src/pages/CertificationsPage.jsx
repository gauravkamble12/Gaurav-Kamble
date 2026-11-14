import React from 'react';
import { Link } from 'react-router-dom';
import Certifications from '../components/Certifications';

export default function CertificationsPage() {
  return (
    <div className="portfolio-app min-h-screen bg-cyber-bg text-slate-100">
      <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-mono text-2xl font-bold tracking-wider text-gradient">&lt;GK /&gt;</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-400 transition-colors">DEV</span>
          </Link>
          <nav className="flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors py-1">
              <i className="fa-solid fa-arrow-left mr-2"></i> Back to Portfolio
            </Link>
          </nav>
        </div>
      </header>

      <div className="pt-24">
        <Certifications />
      </div>
    </div>
  );
}
