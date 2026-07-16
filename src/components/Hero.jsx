import React from 'react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Glow Elements (Ambient floating gradient bubbles) */}
      <div className="absolute -top-10 -left-10 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/15 to-indigo-500/15 rounded-full blur-[100px] animate-float pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-gradient-to-tr from-teal-400/15 to-blue-500/15 rounded-full blur-[110px] animate-float-reverse pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle Pill Badge */}
        <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-100 px-4 py-1.5 rounded-full text-purple-700 text-sm font-bold mb-6 tracking-wide hover:border-purple-200 transition duration-300">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
          <span>Senior Software Engineer</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Hi, I am <span className="text-gradient-primary">Chand Patel</span>
        </h1>

        <h2 className="text-xl sm:text-3xl font-semibold text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Building <span className="text-purple-600">scalable enterprise solutions</span>, PIM architectures, and GenAI-powered data workflows.
        </h2>

        {/* Short Bio */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building software that scales, performs, and solves real business challenges. Expertise spans enterprise applications, Pimcore PIM, backend architecture, and AI-powered data workflows—all engineered with clean, maintainable code.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 hover:scale-105"
          >
            <span>View My Projects</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-sm"
          >
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mb-12">

          <a
            href="https://www.linkedin.com/in/chand-patel-777287190"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-600 p-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-600/30 hover:scale-110 hover:shadow-sm transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ghaghrachand9798@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-600 p-2.5 rounded-full bg-white border border-slate-200 hover:border-cyan-600/30 hover:scale-110 hover:shadow-sm transition-all duration-200"
            aria-label="Email Address"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Down indicator inside flow */}
        <a href="#about" className="hidden md:flex flex-col items-center cursor-pointer group hover:opacity-80 transition-opacity mx-auto w-fit">
          <span className="text-xs text-slate-500 uppercase tracking-widest mb-2 group-hover:text-purple-600 transition-colors">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1 mx-auto group-hover:border-purple-600 transition-colors">
            <div className="w-1.5 h-3 bg-purple-500 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
