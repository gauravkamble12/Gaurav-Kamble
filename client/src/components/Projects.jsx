import React, { useState } from 'react';
import Reveal from './Reveal';

const categories = [
  { id: 'all', label: 'All Projects', icon: 'fa-solid fa-grid-2' },
  { id: 'mern', label: 'MERN Stack', icon: 'fa-brands fa-react' },
  { id: 'data-ml', label: 'Data & Machine Learning', icon: 'fa-solid fa-chart-line' }
];

const projectsData = [
  {
    id: "messenger",
    title: "Real-Time Web Messenger",
    domain: "MERN Stack / Web Dev",
    category: "mern",
    tag: "Real-Time App",
    desc: "Full-stack instant chat platform built with MERN & Socket.IO. Features web sockets, instant message status, and active user tracking.",
    tech: ["Socket.IO", "React", "Express", "MongoDB"],
    hasLive: true,
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: "blog",
    title: "Full-Stack Media Blogging Platform",
    domain: "MERN Stack / Web Dev",
    category: "mern",
    tag: "MERN Stack",
    desc: "Blogging suite with JWT authentication, custom text editing, dynamic image hosting via Cloudinary, and optimized MongoDB pagination.",
    tech: ["React.js", "Node.js", "Cloudinary API", "JWT"],
    hasLive: true,
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: "heart-disease",
    title: "Heart Disease Analysis Model",
    domain: "Data Analytics & ML",
    category: "data-ml",
    tag: "Predictive Healthcare",
    desc: "Predictive ML model utilizing patient datasets to analyze clinical parameters, perform exploratory data analysis, and accurately predict heart disease risk.",
    tech: ["Python", "Pandas", "Scikit-Learn", "EDA", "Jupyter"],
    hasLive: false,
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: "movie-rec",
    title: "Movie Recommendation System",
    domain: "Data Analytics & ML",
    category: "data-ml",
    tag: "NLP & Recommender",
    desc: "Machine learning engine using cosine similarity and feature engineering to analyze movie attributes and provide personalized recommendations.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NLP"],
    hasLive: false,
    githubLink: "#",
    liveLink: "#"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <div
                    className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
                    <i className="fa-solid fa-laptop-code"></i> Portfolio Work
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Featured Projects</h2>
                <p className="text-slate-400 mt-4 text-base">Production-ready systems spanning full-stack web applications, exploratory data analysis, and predictive machine learning models.</p>
                
                {/* Domain Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                    {categories.map(cat => {
                        const count = cat.id === 'all' ? projectsData.length : projectsData.filter(p => p.category === cat.id).length;
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
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? 'bg-cyan-500/30 text-cyan-200' : 'bg-slate-800 text-slate-400'}`}>
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
                <Reveal key={project.id} delay={index * 90} className="h-full">
                <div key={project.id} className="glass-card rounded-3xl overflow-hidden h-full flex flex-col group border-slate-800 hover:border-cyan-500/40 transition-all">
                    <div className="p-8 flex-1 flex flex-col justify-between">
                        <div>
                            {/* Badges: Tag + Domain */}
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
                                {project.tech.map((techItem, idx) => (
                                    <span key={idx} className="text-xs font-mono bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">
                                        {techItem}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex gap-4 mt-auto pt-4 border-t border-slate-800/80">
                            <a href={project.githubLink} className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-cyan-500/10 text-cyan-400 font-semibold text-sm border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2">
                                <i className="fa-brands fa-github text-lg"></i>
                                <span>GitHub</span>
                            </a>
                            {project.hasLive && (
                                <a href={project.liveLink} className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-emerald-500/10 text-emerald-400 font-semibold text-sm border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-center gap-2">
                                    <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                </Reveal>
            ))}
        </div>
    </section>
  );
}
