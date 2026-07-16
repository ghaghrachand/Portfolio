import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBg from './components/ParticlesBg';
import { Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans selection:bg-purple-500/20 selection:text-purple-900">
      {/* Background radial overlays for premium aesthetics */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-slate-50 to-white -z-50 pointer-events-none" />
      <ParticlesBg />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white/40 py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2.5 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/10">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="text-slate-900 font-extrabold text-lg tracking-wider font-space">CHAND<span className="text-purple-600">.DEV</span></span>
          </div>

          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
