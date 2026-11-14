import React from 'react';
import Reveal from './Reveal';
import { education } from '../data/portfolioData';

const colorStyles = {
  cyan: {
    border: 'border-cyan-500/30 hover:border-cyan-500/60',
    iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    scoreText: 'text-gradient-cyan',
    glow: 'shadow-[0_0_20px_rgba(0,242,254,0.15)]'
  },
  purple: {
    border: 'border-purple-500/30 hover:border-purple-500/60',
    iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    scoreText: 'text-purple-300',
    glow: 'shadow-[0_0_20px_rgba(157,78,221,0.15)]'
  },
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-500/60',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    scoreText: 'text-emerald-300',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]'
  }
};

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <i className="fa-solid fa-graduation-cap"></i> Academics
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Educational Background</h2>
          <p className="text-slate-400 mt-4 text-base">
            Formal engineering education, academic distinctions, and verified institutional track record.
          </p>
        </div>
      </Reveal>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((item, index) => {
          const style = colorStyles[item.color] || colorStyles.cyan;

          return (
            <Reveal key={item.id} delay={index * 100} className="h-full">
              <div
                className={`glass-card rounded-3xl p-8 h-full flex flex-col justify-between border ${style.border} ${style.glow} transition-all duration-300 group`}
              >
                <div>
                  {/* Top Row: Icon + Period */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${style.iconBg} border flex items-center justify-center text-xl`}>
                      <i className={item.icon}></i>
                    </div>
                    <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                      {item.period}
                    </span>
                  </div>

                  {/* Degree & Institution */}
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${style.badge}`}>
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100 mt-3 mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300 mb-4 flex items-start gap-2">
                    <i className="fa-solid fa-location-dot text-slate-500 mt-1 text-xs"></i>
                    <span>{item.institution}</span>
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {item.details}
                  </p>
                </div>

                {/* Score Banner at Bottom */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono text-slate-400">{item.scoreType}</span>
                  <span className={`text-xl font-mono font-extrabold ${style.scoreText}`}>
                    {item.score}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
