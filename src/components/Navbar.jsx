import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
            <a href="#home" className="flex items-center space-x-2.5 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20 group-hover:scale-105 transition-transform duration-300">
                <Terminal className="h-5 w-5" />
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-20 blur-sm -z-10 group-hover:opacity-40 transition-opacity" />
              </div>
              <span className="text-slate-900 font-extrabold text-xl tracking-wider font-space">CHAND<span className="text-purple-600">.DEV</span></span>
            </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 hover:text-slate-900 ${activeSection === link.id ? 'text-purple-600 nav-link-active' : 'text-slate-600'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md shadow-purple-600/10"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition duration-150"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full left-0 transition-all duration-300 ease-in-out ${isOpen ? 'top-full opacity-100 visible' : 'top-[-200px] opacity-0 invisible'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 border-b border-slate-200 backdrop-blur-lg shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-md text-base font-semibold transition-colors ${activeSection === link.id ? 'text-purple-600 bg-purple-50' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              {link.name}
            </a>
          ))}
          <div className="px-4 py-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition duration-150"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
