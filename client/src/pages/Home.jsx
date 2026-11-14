import React from 'react';

import { Link } from 'react-router-dom';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import TypedText from '../components/TypedText';
import Contact from '../components/Contact';

const heroPhrases = [
    'Full-Stack MERN Developer.',
    'Data Analyst & BI Specialist.',
    'Machine Learning & AI Enthusiast.',
    'Technical Support & IT Systems.',
    'Computer Engineering Student.'
];

function Home() {
    return (
        <div className="portfolio-app">

            <canvas id="particle-canvas"></canvas>

            <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-slate-800/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-2 group">
                        <span className="font-mono text-2xl font-bold tracking-wider text-gradient">&lt;GK /&gt;</span>
                        <span
                            className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-400 transition-colors">DEV</span>
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
                        <a href="#contact"
                            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 transition-all glow-cyan flex items-center gap-2">
                            <span>Let's Talk</span>
                            <i className="fa-solid fa-paper-plane text-xs"></i>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button id="mobile-menu-btn"
                        className="md:hidden text-slate-300 hover:text-cyan-400 p-2 text-xl focus:outline-none"
                        aria-label="Toggle Menu">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>

                {/* Mobile Dropdown Navigation */}
                <div id="mobile-menu"
                    className="hidden md:hidden glass-panel border-b border-slate-800 px-6 py-4 flex flex-col gap-4 text-center">
                    <a href="#about" className="mobile-link text-slate-200 hover:text-cyan-400 py-2">About</a>
                    <a href="#skills" className="mobile-link text-slate-200 hover:text-cyan-400 py-2">Skills</a>
                    <a href="#projects" className="mobile-link text-slate-200 hover:text-cyan-400 py-2">Projects</a>
                    <a href="#experience" className="mobile-link text-slate-200 hover:text-cyan-400 py-2">Experience</a>
                    <Link to="/certifications" className="mobile-link text-slate-200 hover:text-purple-400 py-2">Certifications</Link>
                    <a href="#contact" className="mobile-link text-slate-200 hover:text-cyan-400 py-2">Contact</a>
                </div>
            </header>

            <section id="hero"
                className="relative z-10 pt-32 pb-20 md:pt-44 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen text-center">

                {/* Status Badge */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    Available for Multi-Domain Engineering, Data &amp; IT Roles
                </div>

                {/* Title & Animated Dynamic Typing Text */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
                    Hi, I'm <span className="text-gradient">Gaurav Kamble</span>
                    <div className="h-16 mt-2 text-2xl sm:text-4xl md:text-5xl font-mono font-semibold text-slate-300">
                        <span className="typing-cursor">
                            <TypedText phrases={heroPhrases} />
                        </span>
                    </div>
                </h1>

                {/* Bio Description */}
                <p className="max-w-3xl text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
                    Computer Engineering student engineering scalable solutions across <span className="text-slate-200 font-semibold">Full-Stack MERN Development</span>, <span className="text-slate-200 font-semibold">Data Analytics &amp; Machine Learning</span>, and <span className="text-slate-200 font-semibold">Technical Support &amp; Systems</span>. Author of published research in IJARSCT.
                </p>

                {/* Hero CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
                    <a href="#projects"
                        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-slate-950 font-bold text-base hover:scale-105 transition-all duration-300 glow-cyan flex items-center gap-3">
                        <span>Explore My Work</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <a href="#contact"
                        className="px-8 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-base hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                        <i className="fa-regular fa-envelope"></i>
                        <span>Contact Me</span>
                    </a>
                    <Link to="/certifications"
                        className="px-8 py-3.5 rounded-xl bg-slate-900/80 border border-purple-500/30 text-purple-300 font-semibold text-base hover:border-purple-400 hover:text-purple-200 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                        <i className="fa-solid fa-award"></i>
                        <span>Credentials &amp; Certs</span>
                    </Link>
                </div>

                {/* Social Bar */}
                <div className="flex items-center justify-center gap-6 text-slate-400">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                        className="p-3 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-xl"
                        title="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="p-3 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-xl"
                        title="LinkedIn">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="mailto:kamblegaurav193@gmail.com"
                        className="p-3 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-xl"
                        title="Email">
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer"
                        className="p-3 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-xl"
                        title="Location: Pune, MH">
                        <i className="fa-solid fa-location-dot"></i>
                    </a>
                </div>

            </section>

            <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                    {/* Ambient Glow Behind Card */}
                    <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none">
                    </div>
                    <div
                        className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none">
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Side: Profile Intro */}
                        <div className="lg:col-span-7 space-y-6">
                            <div
                                className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest">
                                <i className="fa-solid fa-code-branch"></i> About Me
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                                Bridging Full-Stack Software, Data Analytics &amp; Systems Engineering.
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-base">
                                I am a Computer Engineering student based in Pune, India. My technical foundation spans building responsive MERN stack web applications, extracting actionable insights with Python, SQL and Power BI, implementing machine learning models, and diagnosing IT systems.
                            </p>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Whether cleaning messy datasets, designing scalable REST APIs, structuring database schemas, or diagnosing hardware/network issues, I prioritize writing clean, maintainable, and efficient solutions.
                            </p>

                            {/* Core Highlights */}
                            <Reveal delay={120}>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                                        <div className="text-2xl font-bold text-gradient-cyan font-mono">MERN + Py</div>
                                        <div className="text-xs text-slate-400 mt-1">Full-Stack &amp; Data</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                                        <div className="text-2xl font-bold text-gradient-cyan font-mono">
                                            <CountUp value={8.5} decimals={1} suffix="+" />
                                        </div>
                                        <div className="text-xs text-slate-400 mt-1">Academic CGPA</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                                        <div className="text-2xl font-bold text-gradient-cyan font-mono">
                                            <CountUp value={10} suffix="+" />
                                        </div>
                                        <div className="text-xs text-slate-400 mt-1">Verified Certs &amp; Paper</div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Right Side: Tech Terminal View */}
                        <div className="lg:col-span-5">
                            <div
                                className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
                                {/* Terminal Header */}
                                <div
                                    className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                                        <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                                        <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                                    </div>
                                    <span className="text-slate-500 text-xs">gaurav@engineer:~</span>
                                </div>
                                {/* Terminal Content */}
                                <div className="p-6 space-y-4 text-slate-300">
                                    <div>
                                        <span className="text-cyan-400">gaurav@dev:~$</span> <span className="text-slate-100">cat profile.json</span>
                                    </div>
                                    <div className="text-slate-400 pl-4 space-y-1">
                                        <p>"&#123;</p>
                                        <p className="pl-4"><span className="text-sky-300">"name"</span>: <span className="text-emerald-300">"Gaurav Kamble"</span>,</p>
                                        <p className="pl-4"><span className="text-sky-300">"degree"</span>: <span className="text-emerald-300">"B.E. Computer Engineering"</span>,</p>
                                        <p className="pl-4"><span className="text-sky-300">"domains"</span>: [<span className="text-emerald-300">"MERN Stack"</span>, <span className="text-emerald-300">"Data Analytics &amp; BI"</span>, <span className="text-emerald-300">"Machine Learning"</span>, <span className="text-emerald-300">"Technical Support"</span>, <span className="text-emerald-300">"Cybersecurity (Foundations)"</span>],</p>
                                        <p className="pl-4"><span className="text-sky-300">"publication"</span>: <span className="text-emerald-300">"IJARSCT Research Journal"</span>,</p>
                                        <p className="pl-4"><span className="text-sky-300">"location"</span>: <span className="text-emerald-300">"Pune, Maharashtra"</span>,</p>
                                        <p className="pl-4"><span className="text-sky-300">"openToWork"</span>: <span className="text-amber-300">true</span></p>
                                        <p>&#125;"</p>
                                    </div>
                                    <div className="pt-2">
                                        <span className="text-cyan-400">gaurav@dev:~$</span> <span className="animate-pulse">_</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Skills />

            <Projects />

            <section id="experience" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div
                            className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
                            <i className="fa-solid fa-briefcase"></i> Journey
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Experience &amp; Milestones</h2>
                        <p className="text-slate-400 mt-4 text-base">Practical engineering internships, published research, and accredited milestones.</p>
                    </div>
                </Reveal>

                <div
                    className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-800">

                    {/* Timeline Item 1 */}
                    <div className="relative flex items-center md:justify-between group">
                        <Reveal className="flex items-center md:w-1/2 md:pr-12 pl-16 md:pl-0" delay={0}>
                            <div className="glass-card p-6 rounded-2xl w-full border-cyan-500/20">
                                <span className="text-xs font-mono text-cyan-400">Jan 2026 – Feb 2026</span>
                                <h3 className="text-xl font-bold text-slate-100 mt-1">Full-Stack Developer Intern</h3>
                                <div className="text-sm font-semibold text-slate-400 mb-3">Codec Technologies</div>
                                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                                    <li>Designed and implemented RESTful APIs using Node.js &amp; Express.</li>
                                    <li>Structured MongoDB schemas for optimized data retrieval speeds.</li>
                                    <li>Integrated secure authentication workflows for client applications.</li>
                                </ul>
                            </div>
                        </Reveal>
                        <div
                            className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 text-xs glow-cyan">
                            <i className="fa-solid fa-code"></i>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative flex items-center md:justify-between group">
                        <Reveal className="flex items-center md:w-1/2 md:ml-auto md:pl-12 pl-16" delay={120}>
                            <div className="glass-card p-6 rounded-2xl w-full border-slate-800">
                                <span className="text-xs font-mono text-cyan-400">Jul 2025 – Aug 2025</span>
                                <h3 className="text-xl font-bold text-slate-100 mt-1">Web Development Intern</h3>
                                <div className="text-sm font-semibold text-slate-400 mb-3">Codsoft</div>
                                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                                    <li>Developed responsive frontend client interfaces with modern UI standards.</li>
                                    <li>Implemented interactive dynamic web forms and client-side validation.</li>
                                </ul>
                            </div>
                        </Reveal>
                        <div
                            className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center text-slate-400 text-xs">
                            <i className="fa-solid fa-laptop"></i>
                        </div>
                    </div>

                </div>

                {/* Real Milestones, Research & Accreditations (Removed unverified hackathons) */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-8">Published Research &amp; Accreditations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="glass-card p-6 rounded-2xl border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all">
                            <div>
                                <div className="text-cyan-400 text-2xl mb-3"><i className="fa-solid fa-book-bookmark"></i></div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">Journal Publication</span>
                                <h4 className="font-bold text-slate-100 mt-2 text-base">IJARSCT Research Paper</h4>
                                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Authored and published technical research paper in the peer-reviewed IJARSCT journal.</p>
                            </div>
                            <Link to="/certifications" className="text-xs text-cyan-400 font-semibold hover:underline inline-flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-800">
                                <span>Preview Paper</span>
                                <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </Link>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border-slate-800 flex flex-col justify-between group hover:border-purple-500/40 transition-all">
                            <div>
                                <div className="text-purple-400 text-2xl mb-3"><i className="fa-solid fa-award"></i></div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">Professional Credential</span>
                                <h4 className="font-bold text-slate-100 mt-2 text-base">Oracle GenAI Certified</h4>
                                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Certified in Generative AI, LLMs, prompt engineering, and semantic search technologies.</p>
                            </div>
                            <Link to="/certifications" className="text-xs text-purple-400 font-semibold hover:underline inline-flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-800">
                                <span>View Certificate</span>
                                <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </Link>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border-slate-800 flex flex-col justify-between group hover:border-emerald-500/40 transition-all">
                            <div>
                                <div className="text-emerald-400 text-2xl mb-3"><i className="fa-solid fa-briefcase"></i></div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Verified Internship</span>
                                <h4 className="font-bold text-slate-100 mt-2 text-base">Codec Technologies</h4>
                                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Full-Stack development internship building Node.js backend systems and MongoDB structures.</p>
                            </div>
                            <Link to="/certifications" className="text-xs text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-800">
                                <span>View Completion</span>
                                <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </Link>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border-slate-800 flex flex-col justify-between group hover:border-sky-500/40 transition-all">
                            <div>
                                <div className="text-sky-400 text-2xl mb-3"><i className="fa-solid fa-graduation-cap"></i></div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/30">National Honors</span>
                                <h4 className="font-bold text-slate-100 mt-2 text-base">Infosys &amp; NPTEL</h4>
                                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Certified in Front-End Web Development by Infosys Springboard alongside NPTEL credentials.</p>
                            </div>
                            <Link to="/certifications" className="text-xs text-sky-400 font-semibold hover:underline inline-flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-800">
                                <span>View Accreditations</span>
                                <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />

            {/* Footer */}
            <footer className="relative z-10 border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 font-mono">
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>&copy; 2026 Gaurav Kamble. All rights reserved.</div>
                    <div>Designed &amp; Built with React, Tailwind CSS &amp; Node.js</div>
                </div>
            </footer>

        </div>
    );
}

export default Home;
