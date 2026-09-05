import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Click outside and Escape key to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Resume', path: '/resume' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0d0d0d]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/80 shadow-md shadow-slate-900/5 dark:shadow-2xl py-3.5'
            : 'bg-white/85 dark:bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-2 text-xl sm:text-2xl font-heading font-extrabold tracking-tight">
              <span className="text-blue-600 dark:text-blue-500">
                Chemayek
              </span>
              <span className="text-slate-900 dark:text-white tracking-wide">
                Abraham
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `
                    nav-link relative text-sm font-medium py-1 transition-all duration-200
                    ${
                      isActive 
                        ? 'active text-blue-600 dark:text-blue-400 font-semibold' 
                        : 'text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
                    }
                    after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px]
                    after:bg-blue-600 after:transition-all after:duration-300
                    ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right CTA & Socials & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200/80 dark:hover:bg-[#1c1c1c] transition-all shadow-sm focus:outline-none"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                aria-label="Toggle light/dark theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-blue-600 hover:rotate-12 transition-transform" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
                )}
              </button>

              <a
                href="https://github.com/ChemayekAbraham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-100 dark:bg-[#141414] hover:bg-gray-200 dark:hover:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="relative group inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile menu button & Theme Toggle */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-gray-800 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-blue-600" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>

              <Link
                to="/contact"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                Hire Me
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1a1a1a] rounded-lg transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6 text-blue-600 dark:text-blue-500" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white/98 dark:bg-[#111111]/98 border-b border-gray-200 dark:border-gray-800/80 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all
                    ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border-l-4 border-blue-600 pl-3'
                        : 'text-slate-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1c1c1c] hover:text-slate-900 dark:hover:text-white'
                    }
                  `}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}
            </div>

            <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between px-2">
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg transition-colors"
                  title="WhatsApp"
                >
                  <WhatsappIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Outside Click Backdrop Overlay on Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
