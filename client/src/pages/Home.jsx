import React from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="portfolio-app relative min-h-screen bg-[#060913] text-slate-100 overflow-x-hidden">
      {/* Live Interactive Constellation Particle Canvas */}
      <ParticleBackground />

      {/* Fixed Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
