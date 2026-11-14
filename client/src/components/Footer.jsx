import React from 'react';
import { personalInfo } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 py-10 text-xs text-slate-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            title="Back to top"
          >
            <span>Back to top</span>
            <i className="fa-solid fa-arrow-up text-[10px]"></i>
          </button>
        </div>

        <div className="text-slate-400">
          Built with <span className="text-cyan-400">React</span>, <span className="text-sky-400">Tailwind CSS</span> &amp; <span className="text-emerald-400">Node/Express</span>
        </div>
      </div>
    </footer>
  );
}
