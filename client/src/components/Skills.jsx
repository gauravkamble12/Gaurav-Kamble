import React, { useState } from 'react';
import Reveal from './Reveal';
import { skillGroups } from '../data/portfolioData';

const colorMap = {
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', chip: 'hover:border-cyan-500/50' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30', chip: 'hover:border-violet-500/50' },
  fuchsia: { text: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/30', chip: 'hover:border-fuchsia-500/50' },
  sky: { text: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30', chip: 'hover:border-sky-500/50' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', chip: 'hover:border-emerald-500/50' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', chip: 'hover:border-amber-500/50' },
  rose: { text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30', chip: 'hover:border-rose-500/50' },
  indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', chip: 'hover:border-indigo-500/50' }
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Domains' },
    { id: 'development', label: 'Full-Stack Web', match: ['frontend', 'backend', 'tools'] },
    { id: 'data-ml', label: 'Data & AI', match: ['analytics', 'visualization', 'ml-ai'] },
    { id: 'systems', label: 'Security & Systems', match: ['cybersecurity', 'support-systems'] }
  ];

  const filteredGroups = activeFilter === 'all'
    ? skillGroups
    : skillGroups.filter((g) => {
        const option = filterOptions.find((o) => o.id === activeFilter);
        return option && option.match.includes(g.id);
      });

  const totalSkills = skillGroups.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <section id="skills" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <i className="fa-solid fa-microchip"></i> Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Technical Skillset</h2>
          <p className="text-slate-400 mt-4 text-base">
            Multi-disciplinary technical toolkit across Software Engineering, Data Analysis, Machine Learning, Cybersecurity &amp; IT Systems
            <span className="font-mono text-cyan-400/80 text-sm"> &mdash; {totalSkills}+ technologies across {skillGroups.length} domains</span>
          </p>

          {/* Quick Domain Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                  activeFilter === opt.id
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_12px_rgba(0,242,254,0.2)]'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredGroups.map((group, index) => {
          const a = colorMap[group.color] || colorMap.cyan;

          return (
            <Reveal key={group.id} delay={index * 60} className="h-full">
              <div
                className={`glass-panel-card rounded-2xl p-5 sm:p-6 h-full flex flex-col ${a.border} ${
                  group.featured ? 'ring-1 ring-cyan-500/20 bg-slate-900/70' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 shrink-0 rounded-xl ${a.bg} ${a.border} border flex items-center justify-center text-lg ${a.text}`}>
                    <i className={group.icon}></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-100 leading-tight">{group.label}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      {group.skills.length} skills
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skillName) => (
                    <span
                      key={skillName}
                      className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 transition-colors ${a.chip}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${a.bg} ${a.border} border`}></span>
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
