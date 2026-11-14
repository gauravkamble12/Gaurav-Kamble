import React from 'react';
import Reveal from './Reveal';

const accents = {
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', chip: 'hover:border-cyan-500/50' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30', chip: 'hover:border-violet-500/50' },
  fuchsia: { text: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/30', chip: 'hover:border-fuchsia-500/50' },
  sky: { text: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30', chip: 'hover:border-sky-500/50' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', chip: 'hover:border-emerald-500/50' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', chip: 'hover:border-amber-500/50' },
  rose: { text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30', chip: 'hover:border-rose-500/50' },
  indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', chip: 'hover:border-indigo-500/50' }
};

const skillGroups = [
  {
    id: 'analytics',
    label: 'Data & Analytics',
    icon: 'fa-solid fa-magnifying-glass-chart',
    accent: 'cyan',
    featured: true,
    skills: [
      { name: 'SQL', icon: 'fa-solid fa-database' },
      { name: 'Python', icon: 'fa-brands fa-python' },
      { name: 'Pandas & NumPy', icon: 'fa-solid fa-table' },
      { name: 'Excel', icon: 'fa-brands fa-microsoft-excel' },
      { name: 'EDA', icon: 'fa-solid fa-magnifying-glass-chart' },
      { name: 'Data Cleaning', icon: 'fa-solid fa-broom' },
      { name: 'Statistics', icon: 'fa-solid fa-chart-line' },
      { name: 'Jupyter', icon: 'fa-solid fa-book' }
    ]
  },
  {
    id: 'visualization',
    label: 'Visualization & Dashboards',
    icon: 'fa-solid fa-chart-column',
    accent: 'violet',
    skills: [
      { name: 'Power BI', icon: 'fa-solid fa-chart-column' },
      { name: 'Tableau', icon: 'fa-solid fa-chart-simple' },
      { name: 'Matplotlib', icon: 'fa-solid fa-chart-area' },
      { name: 'Plotly', icon: 'fa-solid fa-chart-line' },
      { name: 'Seaborn', icon: 'fa-solid fa-water' },
      { name: 'Streamlit', icon: 'fa-solid fa-bolt' },
      { name: 'Dash', icon: 'fa-solid fa-sliders' }
    ]
  },
  {
    id: 'ml-ai',
    label: 'ML, AI & Automation',
    icon: 'fa-solid fa-brain',
    accent: 'fuchsia',
    skills: [
      { name: 'Scikit-Learn', icon: 'fa-solid fa-brain' },
      { name: 'TensorFlow', icon: 'fa-solid fa-network-wired' },
      { name: 'Generative AI', icon: 'fa-solid fa-wand-magic-sparkles' },
      { name: 'NLP', icon: 'fa-solid fa-language' },
      { name: 'Selenium', icon: 'fa-solid fa-robot' },
      { name: 'Web Scraping', icon: 'fa-solid fa-spider' },
      { name: 'Model Evaluation', icon: 'fa-solid fa-clipboard-check' }
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend & UI',
    icon: 'fa-brands fa-react',
    accent: 'sky',
    skills: [
      { name: 'React.js', icon: 'fa-brands fa-react' },
      { name: 'JavaScript', icon: 'fa-brands fa-js' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-wind' },
      { name: 'HTML5 & CSS3', icon: 'fa-brands fa-html5' },
      { name: 'Vite', icon: 'fa-solid fa-gauge-high' }
    ]
  },
  {
    id: 'backend',
    label: 'Backend & Databases',
    icon: 'fa-solid fa-server',
    accent: 'emerald',
    skills: [
      { name: 'Node.js', icon: 'fa-brands fa-node-js' },
      { name: 'Express.js', icon: 'fa-solid fa-server' },
      { name: 'Java', icon: 'fa-brands fa-java' },
      { name: 'REST APIs', icon: 'fa-solid fa-code' },
      { name: 'JWT Auth', icon: 'fa-solid fa-key' },
      { name: 'Socket.IO', icon: 'fa-solid fa-tower-broadcast' },
      { name: 'MongoDB', icon: 'fa-solid fa-leaf' },
      { name: 'MySQL', icon: 'fa-solid fa-database' },
      { name: 'PostgreSQL', icon: 'fa-solid fa-cube' }
    ]
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity & Networking',
    icon: 'fa-solid fa-shield-halved',
    accent: 'rose',
    skills: [
      { name: 'Wireshark', icon: 'fa-solid fa-network-wired' },
      { name: 'Nmap', icon: 'fa-solid fa-satellite-dish' },
      { name: 'OWASP Awareness', icon: 'fa-solid fa-shield-virus' },
      { name: 'TCP/IP & DNS', icon: 'fa-solid fa-diagram-project' },
      { name: 'Linux Security', icon: 'fa-brands fa-linux' },
      { name: 'Network Defense', icon: 'fa-solid fa-lock' },
      { name: 'Access Control (IAM)', icon: 'fa-solid fa-user-shield' }
    ]
  },
  {
    id: 'support-systems',
    label: 'IT Support & Systems Engineering',
    icon: 'fa-solid fa-headset',
    accent: 'indigo',
    skills: [
      { name: 'Hardware & OS Diagnostics', icon: 'fa-solid fa-microchip' },
      { name: 'Windows & Linux Admin', icon: 'fa-solid fa-terminal' },
      { name: 'PowerShell & Bash', icon: 'fa-solid fa-code' },
      { name: 'Network Troubleshooting', icon: 'fa-solid fa-wifi' },
      { name: 'System Event Logs', icon: 'fa-solid fa-file-waveform' },
      { name: 'Helpdesk & IT Support', icon: 'fa-solid fa-ticket' }
    ]
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: 'fa-solid fa-screwdriver-wrench',
    accent: 'amber',
    skills: [
      { name: 'Git & GitHub', icon: 'fa-brands fa-git-alt' },
      { name: 'Docker', icon: 'fa-brands fa-docker' },
      { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
      { name: 'Linux & CLI', icon: 'fa-solid fa-terminal' },
      { name: 'Render', icon: 'fa-solid fa-cloud' }
    ]
  }
];

const totalSkills = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
                <div
                    className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
                    <i className="fa-solid fa-microchip"></i> Expertise
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Technical Skillset</h2>
                <p className="text-slate-400 mt-4 text-base">
                    Multi-disciplinary technical toolkit across Software Engineering, Data Analysis, Machine Learning, Cybersecurity &amp; IT Systems
                    <span className="font-mono text-cyan-400/80 text-sm"> &mdash; {totalSkills}+ tools across {skillGroups.length} specialized domains</span>
                </p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group, index) => {
                const a = accents[group.accent];

                return (
                    <Reveal key={group.id} delay={index * 70} className="h-full">
                    <div
                        className={`glass-panel-card rounded-2xl p-5 sm:p-6 h-full flex flex-col ${a.border} ${group.featured ? 'ring-1 ring-cyan-500/20 bg-slate-900/70' : ''}`}
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

                        <div className="flex flex-wrap gap-2">
                            {group.skills.map(skill => (
                                <span
                                    key={skill.name}
                                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 transition-colors ${a.chip}`}
                                >
                                    <i className={`${skill.icon} ${a.text} text-[11px]`}></i>
                                    {skill.name}
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
