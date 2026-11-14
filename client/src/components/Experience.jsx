import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { experienceTimeline, milestones } from '../data/portfolioData';

const milestoneColorMap = {
  cyan: { border: 'hover:border-cyan-500/40', text: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
  purple: { border: 'hover:border-purple-500/40', text: 'text-purple-400', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
  emerald: { border: 'hover:border-emerald-500/40', text: 'text-emerald-400', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  sky: { border: 'hover:border-sky-500/40', text: 'text-sky-400', badge: 'bg-sky-500/10 text-sky-400 border-sky-500/30' }
};

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <i className="fa-solid fa-briefcase"></i> Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Experience &amp; Milestones</h2>
          <p className="text-slate-400 mt-4 text-base">
            Practical engineering internships, published research, and accredited milestones.
          </p>
        </div>
      </Reveal>

      {/* Internship Timeline */}
      <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-800">
        {experienceTimeline.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="relative flex items-center md:justify-between group">
              <Reveal
                className={`flex items-center md:w-1/2 ${
                  isEven ? 'md:pr-12 pl-16 md:pl-0' : 'md:ml-auto md:pl-12 pl-16'
                }`}
                delay={index * 120}
              >
                <div className={`glass-card p-6 rounded-2xl w-full ${isEven ? 'border-cyan-500/20' : 'border-slate-800'}`}>
                  <span className="text-xs font-mono text-cyan-400">{item.period}</span>
                  <h3 className="text-xl font-bold text-slate-100 mt-1">{item.role}</h3>
                  <div className="text-sm font-semibold text-slate-400 mb-3">{item.company}</div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    {item.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Timeline Center Node */}
              <div
                className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 ${
                  isEven ? 'border-cyan-400 text-cyan-400 glow-cyan' : 'border-slate-700 text-slate-400'
                } flex items-center justify-center text-xs`}
              >
                <i className={`fa-solid ${isEven ? 'fa-code' : 'fa-laptop'}`}></i>
              </div>
            </div>
          );
        })}
      </div>

      {/* Real Milestones, Research & Accreditations */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-8">Published Research &amp; Accreditations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, index) => {
            const style = milestoneColorMap[m.color] || milestoneColorMap.cyan;

            return (
              <div
                key={index}
                className={`glass-card p-6 rounded-2xl border-slate-800 flex flex-col justify-between group ${style.border} transition-all`}
              >
                <div>
                  <div className={`${style.text} text-2xl mb-3`}>
                    <i className={m.icon}></i>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${style.badge}`}>
                    {m.badge}
                  </span>
                  <h4 className="font-bold text-slate-100 mt-2 text-base">{m.title}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{m.desc}</p>
                </div>
                <Link
                  to="/certifications"
                  className={`text-xs ${style.text} font-semibold hover:underline inline-flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-800`}
                >
                  <span>View Credential</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
