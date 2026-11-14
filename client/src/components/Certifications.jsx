import React, { useState } from 'react';
import CertificateModal from './CertificateModal';
import Reveal from './Reveal';

const certificates = [
  { name: 'Generative AI', file: 'Oracle Certified in Generative AI.pdf', delay: '' },
  { name: 'Advanced Green Skills & AI', file: 'Completed Advanced Green Skills & AI Certified.pdf', delay: 'animate-float-delayed' },
  { name: 'Infosys Front-End Web Dev', file: 'Completed Front-End Web Devcourse from Infosys Springboard.pdf', delay: '' },
  { name: 'Artificial Intelligence', file: 'completed the course of artifical intelligence.pdf', delay: 'animate-float-delayed' },
  { name: 'NPTEL Certification', file: 'NPTEL certification.pdf', delay: '' },
  { name: 'NPTEL Course Completed', file: 'nptel course completed .pdf', delay: 'animate-float-delayed' },
  { name: 'Research Paper IJARSCT', file: 'I have published my research paper in IJARSCT.pdf', delay: '' },
  { name: 'Codec Technologies Internship', file: 'successfully completed internship at Codec Technologies! .pdf', delay: 'animate-float-delayed' },
  { name: '7 Days Course Complete', file: '7 days course complete .pdf', delay: '' },
  { name: 'General Certification', file: 'Certification.pdf', delay: 'animate-float-delayed' }
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
            <i className="fa-solid fa-certificate"></i> Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Certifications &amp; Publications</h2>
          <p className="text-slate-400 mt-4 text-base">Select any credential to preview it without leaving the page.</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <Reveal key={index} delay={index * 60} className="h-full">
          <button
            type="button"
            onClick={() => setActiveCert(cert)}
            aria-label={`Preview ${cert.name}`}
            className={`glass-card rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center text-center group animate-float hover:[animation-play-state:paused] ${cert.delay}`}
          >
            <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-3xl text-purple-400 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(157,78,221,0.5)] transition-all duration-300">
              <i className="fa-solid fa-award"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors mb-4">
              {cert.name}
            </h3>
            <span className="mt-auto px-6 py-2 rounded-xl bg-slate-900/50 group-hover:bg-purple-500/20 text-purple-300 font-semibold text-sm border border-slate-700 group-hover:border-purple-500/50 transition-all flex items-center gap-2">
              <span>View Certificate</span>
              <i className="fa-solid fa-expand text-xs"></i>
            </span>
          </button>
          </Reveal>
        ))}
      </div>

      {activeCert && (
        <CertificateModal key={activeCert.file} cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </section>
  );
}
