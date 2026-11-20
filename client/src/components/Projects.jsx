import React, { useState } from 'react';
import Reveal from './Reveal';
import { projects, projectCategories } from '../data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const matchesCategory = (project, catId) => {
    if (catId === 'all') return true;
    if (Array.isArray(project.category)) {
      return project.category.includes(catId);
    }
    return project.category === catId;
  };

  const filteredProjects = projects.filter((p) => matchesCategory(p, activeCategory));

  return (
    <section id="projects" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <i className="fa-solid fa-laptop-code"></i> Portfolio Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Featured Projects</h2>
          <p className="text-slate-400 mt-4 text-base">
            Engineered systems spanning real-time full-stack web applications, exploratory data analysis, and predictive machine learning models.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {projectCategories.map((cat) => {
              const count = projects.filter((p) => matchesCategory(p, cat.id)).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <i className={cat.icon}></i>
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-cyan-500/30 text-cyan-200' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 80} className="h-full">
            <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col justify-between group border-slate-800 hover:border-cyan-500/40 transition-all p-8">
              <div>
                {project.image && (
                  <div className="relative -mx-8 -mt-8 mb-6 h-48 sm:h-56 overflow-hidden bg-slate-950 border-b border-slate-800 group-hover:border-cyan-500/30 transition-all">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/30 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/40 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
                      <i className="fa-solid fa-sparkles text-cyan-400 text-xs"></i>
                      <span>AI Powered</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {project.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700/80">
                    <i className="fa-solid fa-layer-group text-cyan-400 text-[10px]"></i>
                    <span>Domain: <strong className="text-cyan-300 font-semibold">{project.domain}</strong></span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-semibold text-xs border border-cyan-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-circle-info"></i>
                  <span>Architecture Details</span>
                </button>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs border border-slate-800 transition-all flex items-center justify-center gap-1.5"
                >
                  <i className="fa-brands fa-github text-sm"></i>
                  <span>Repo</span>
                </a>
                {project.hasLive && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold text-xs border border-emerald-500/30 transition-all flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 border-cyan-500/30 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-cyan-400 text-xl transition-colors"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {selectedProject.domain}
            </span>

            <h3 className="text-2xl font-bold text-slate-100 mt-4 mb-3">
              {selectedProject.title}
            </h3>

            {selectedProject.image && (
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 mb-5 bg-slate-950 shadow-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-80 object-cover object-top rounded-2xl"
                />
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm text-[10px] font-mono text-cyan-300 border border-slate-800 flex items-center gap-1.5">
                  <i className="fa-solid fa-image text-[10px]"></i>
                  <span>Application UI Preview</span>
                </div>
              </div>
            )}

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.desc}
            </p>

            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
              Key Architecture &amp; Engineering Highlights
            </h4>
            <ul className="text-xs text-slate-300 space-y-2 mb-6 list-disc list-inside">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
              Tech Stack &amp; Tools
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono bg-slate-900 text-cyan-300 px-3 py-1 rounded-lg border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {selectedProject.hasLive && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-bold text-center text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  <span>Launch Live App</span>
                </a>
              )}
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-center text-xs hover:brightness-110 transition-all glow-cyan flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-github text-sm"></i>
                <span>Explore GitHub Repository</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 rounded-xl bg-slate-900 text-slate-300 font-semibold text-center text-xs border border-slate-800 hover:text-white transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
