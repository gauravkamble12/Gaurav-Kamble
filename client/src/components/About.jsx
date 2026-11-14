import React, { useState } from 'react';
import Reveal from './Reveal';
import CountUp from './CountUp';
import { personalInfo, terminalCommands } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('profile.json');

  return (
    <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border-slate-800">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <i className="fa-solid fa-code-branch"></i> About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Bridging Full-Stack Software, Data Analytics &amp; Systems Engineering.
            </h2>
            {personalInfo.aboutText.map((p, i) => (
              <p key={i} className="text-slate-300 leading-relaxed text-base">
                {p}
              </p>
            ))}

            <Reveal delay={120}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {personalInfo.stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <div className="text-2xl font-bold text-gradient-cyan font-mono">
                      {stat.isText ? (
                        stat.value
                      ) : (
                        <CountUp value={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix || ''} />
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
              <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="flex items-center gap-1">
                  {Object.keys(terminalCommands).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                        activeTab === tab
                          ? 'bg-slate-800 text-cyan-400 font-semibold border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 space-y-4 text-slate-300 min-h-[260px] flex flex-col justify-between">
                <div>
                  <div className="mb-3 text-slate-400">
                    <span className="text-cyan-400">gaurav@dev:~$</span>{' '}
                    <span className="text-slate-100">cat {activeTab}</span>
                  </div>

                  {activeTab === 'profile.json' && (
                    <div className="text-slate-400 pl-2 space-y-1 text-xs">
                      <p>&#123;</p>
                      <p className="pl-4">
                        <span className="text-sky-300">"name"</span>: <span className="text-emerald-300">"{terminalCommands['profile.json'].name}"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-sky-300">"degree"</span>: <span className="text-emerald-300">"{terminalCommands['profile.json'].degree}"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-sky-300">"currentCGPA"</span>: <span className="text-cyan-300">"{terminalCommands['profile.json'].currentCGPA}"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-sky-300">"domains"</span>: [<br />
                        {terminalCommands['profile.json'].domains.map((d, idx) => (
                          <span key={idx} className="block pl-4 text-emerald-300">
                            "{d}"{idx < terminalCommands['profile.json'].domains.length - 1 ? ',' : ''}
                          </span>
                        ))}
                        ]
                      </p>
                      <p className="pl-4">
                        <span className="text-sky-300">"publication"</span>: <span className="text-emerald-300">"{terminalCommands['profile.json'].publication}"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-sky-300">"openToWork"</span>: <span className="text-amber-300">true</span>
                      </p>
                      <p>&#125;</p>
                    </div>
                  )}

                  {activeTab === 'education.json' && (
                    <div className="text-slate-400 pl-2 space-y-2 text-xs">
                      {terminalCommands['education.json'].map((edu, idx) => (
                        <div key={idx} className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                          <p className="text-cyan-300 font-bold">{edu.course || edu.standard} <span className="text-emerald-400 text-[11px] font-mono ml-2">({edu.score})</span></p>
                          <p className="text-slate-400 text-[11px]">{edu.college || edu.school}</p>
                          <p className="text-slate-500 text-[10px]">{edu.period || edu.board}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'skills.sh' && (
                    <div className="text-slate-400 pl-2 space-y-2 text-xs">
                      {terminalCommands['skills.sh'].map((line, idx) => (
                        <p key={idx} className="text-slate-300 font-mono">
                          <span className="text-cyan-400">&gt;</span> {line}
                        </p>
                      ))}
                    </div>
                  )}

                  {activeTab === 'milestones.txt' && (
                    <div className="text-slate-400 pl-2 space-y-2 text-xs">
                      {terminalCommands['milestones.txt'].map((line, idx) => (
                        <p key={idx} className="text-emerald-300 font-mono">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2 text-xs text-slate-500">
                  <span className="text-cyan-400">gaurav@dev:~$</span> <span className="animate-pulse text-cyan-400">_</span>
                  <span className="ml-3 text-[10px] text-slate-500 font-sans italic">Click tabs above to switch files</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
