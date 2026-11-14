import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TypedText from './TypedText';
import { personalInfo } from '../data/portfolioData';
import avatarImg from '../assets/avatar.jpg';

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
      className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center min-h-[92vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            {personalInfo.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            <div className="h-14 mt-2 text-xl sm:text-3xl lg:text-4xl font-mono font-semibold text-slate-300">
              <span className="typing-cursor">
                <TypedText phrases={personalInfo.heroPhrases} />
              </span>
            </div>
          </h1>

          <p className="max-w-2xl text-slate-400 text-base sm:text-lg mb-8 leading-relaxed mx-auto lg:mx-0">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-slate-950 font-bold text-sm hover:scale-105 transition-all duration-300 glow-cyan flex items-center gap-2.5"
            >
              <span>Explore My Work</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <i className="fa-regular fa-envelope"></i>
              <span>Contact Me</span>
            </a>
            <Link
              to="/certifications"
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 border border-purple-500/30 text-purple-300 font-semibold text-sm hover:border-purple-400 hover:text-purple-200 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <i className="fa-solid fa-award"></i>
              <span>Credentials &amp; Certs</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-lg"
              title="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-lg"
              title="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <button
              onClick={copyEmail}
              className="px-4 py-3 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-xs font-mono flex items-center gap-2"
              title="Click to copy email address"
            >
              <i className="fa-regular fa-envelope text-sm"></i>
              <span>{copied ? 'Copied to Clipboard!' : personalInfo.email}</span>
              {copied && <i className="fa-solid fa-check text-emerald-400 text-xs"></i>}
            </button>
            <span
              className="p-3 rounded-xl glass-card text-slate-400 text-xs font-mono flex items-center gap-1.5"
              title="Location"
            >
              <i className="fa-solid fa-location-dot text-cyan-400 text-xs"></i>
              <span>{personalInfo.location}</span>
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
          <div className="relative w-full max-w-sm sm:max-w-md">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/25 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative rounded-[32px] p-2.5 sm:p-3 bg-gradient-to-b from-cyan-500/35 via-slate-800/70 to-purple-500/35 shadow-[0_0_50px_rgba(0,242,254,0.18)] group transition-all duration-500 hover:shadow-[0_0_65px_rgba(0,242,254,0.35)]">
              <div className="relative rounded-[26px] overflow-hidden bg-slate-950/90 border border-slate-700/60">
                <img
                  src={avatarImg}
                  alt={personalInfo.name}
                  className="w-full h-[370px] sm:h-[450px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-panel border border-slate-700/80 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                        <span>{personalInfo.name}</span>
                        <i className="fa-solid fa-circle-check text-cyan-400 text-xs"></i>
                      </h3>
                      <p className="text-[11px] font-mono text-cyan-300">B.E. Computer Engineering</p>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-3 sm:-left-6 px-3.5 py-2 rounded-2xl glass-card border border-cyan-500/40 text-cyan-300 shadow-2xl flex items-center gap-2 animate-float pointer-events-none">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-sm text-cyan-400">
                <i className="fa-brands fa-react"></i>
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono text-slate-400 leading-tight">Expertise</p>
                <p className="text-xs font-bold text-slate-100 leading-tight">MERN Stack</p>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 sm:-right-5 px-3.5 py-2 rounded-2xl glass-card border border-purple-500/40 text-purple-300 shadow-2xl flex items-center gap-2 animate-float-delayed pointer-events-none">
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-sm text-purple-400">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono text-slate-400 leading-tight">Academic Honor</p>
                <p className="text-xs font-bold text-purple-200 leading-tight">8.94 CGPA</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-3 sm:-left-6 px-3.5 py-2 rounded-2xl glass-card border border-emerald-500/40 text-emerald-300 shadow-2xl flex items-center gap-2 animate-float-delayed pointer-events-none">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-sm text-emerald-400">
                <i className="fa-solid fa-brain"></i>
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono text-slate-400 leading-tight">Data &amp; AI</p>
                <p className="text-xs font-bold text-emerald-200 leading-tight">Python &amp; ML</p>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 sm:-right-5 px-3.5 py-2 rounded-2xl glass-card border border-sky-500/40 text-sky-300 shadow-2xl flex items-center gap-2 animate-float pointer-events-none">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center text-sm text-sky-400">
                <i className="fa-solid fa-book-bookmark"></i>
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono text-slate-400 leading-tight">Research</p>
                <p className="text-xs font-bold text-sky-200 leading-tight">IJARSCT Paper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
