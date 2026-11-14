import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TypedText from './TypedText';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative z-10 pt-32 pb-20 md:pt-44 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen text-center"
    >
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 animate-pulse">
        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
        {personalInfo.badge}
      </div>

      {/* Main Title & Animated Typing */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
        Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
        <div className="h-16 mt-2 text-2xl sm:text-4xl md:text-5xl font-mono font-semibold text-slate-300">
          <span className="typing-cursor">
            <TypedText phrases={personalInfo.heroPhrases} />
          </span>
        </div>
      </h1>

      {/* Bio Description */}
      <p className="max-w-3xl text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
        {personalInfo.bio}
      </p>

      {/* Hero CTA Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
        <a
          href="#projects"
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-slate-950 font-bold text-base hover:scale-105 transition-all duration-300 glow-cyan flex items-center gap-3"
        >
          <span>Explore My Work</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
        <a
          href="#contact"
          className="px-8 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-base hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <i className="fa-regular fa-envelope"></i>
          <span>Contact Me</span>
        </a>
        <Link
          to="/certifications"
          className="px-8 py-3.5 rounded-xl bg-slate-900/80 border border-purple-500/30 text-purple-300 font-semibold text-base hover:border-purple-400 hover:text-purple-200 hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <i className="fa-solid fa-award"></i>
          <span>Credentials &amp; Certs</span>
        </Link>
      </div>

      {/* Social Links & Instant Copy Email */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-xl"
          title="GitHub Profile"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-xl"
          title="LinkedIn Profile"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <button
          onClick={copyEmail}
          className="relative px-4 py-3 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-sm font-mono flex items-center gap-2"
          title="Click to copy email address"
        >
          <i className="fa-regular fa-envelope text-base"></i>
          <span>{copied ? 'Copied to Clipboard!' : personalInfo.email}</span>
          {copied && <i className="fa-solid fa-check text-emerald-400 text-xs"></i>}
        </button>
        <span
          className="p-3 rounded-xl glass-card text-slate-400 text-sm font-mono flex items-center gap-2"
          title="Location"
        >
          <i className="fa-solid fa-location-dot text-cyan-400"></i>
          <span>{personalInfo.location}</span>
        </span>
      </div>
    </section>
  );
}
