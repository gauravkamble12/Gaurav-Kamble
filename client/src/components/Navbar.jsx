import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-mono text-2xl font-bold tracking-wider text-gradient">&lt;GK /&gt;</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-400 transition-colors">
            DEV
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors py-1">About</a>
          <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors py-1">Skills</a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors py-1">Projects</a>
          <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition-colors py-1">Experience</a>
          <Link to="/certifications" className="text-slate-300 hover:text-purple-400 transition-colors py-1">Certifications</Link>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors py-1">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 transition-all glow-cyan flex items-center gap-2"
          >
            <span>Let's Talk</span>
            <i className="fa-solid fa-paper-plane text-xs"></i>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-cyan-400 p-2 text-xl focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-4 flex flex-col gap-4 text-center animate-fadeIn">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-cyan-400 py-2">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-cyan-400 py-2">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-cyan-400 py-2">Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-cyan-400 py-2">Experience</a>
          <Link to="/certifications" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-purple-400 py-2">Certifications</Link>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-cyan-400 py-2">Contact</a>
        </div>
      )}
    </header>
  );
}
