import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0d0d]/95 backdrop-blur-md border-b border-gray-800/80 shadow-2xl py-3.5'
          : 'bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-gray-800/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-2 text-xl sm:text-2xl font-bold tracking-tight">
            <span className="text-pink-500 font-script text-3xl sm:text-4xl group-hover:scale-105 transition-transform inline-block">
              Chemayek
            </span>
            <span className="text-white tracking-wide font-heading">
              Abraham
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-pink-500 animate-pulse ml-0.5"></span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative text-sm font-medium py-1 transition-all duration-200
                  ${isActive ? 'text-pink-400 font-semibold' : 'text-gray-300 hover:text-white'}
                  after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px]
                  after:bg-gradient-to-r after:from-pink-500 after:to-rose-400 after:transition-all after:duration-300
                  ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right CTA & Socials */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/ChemayekAbraham"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-pink-400 hover:bg-[#1a1a1a] rounded-lg transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-lg shadow-pink-600/25 hover:shadow-pink-600/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              to="/contact"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-pink-600 hover:bg-pink-500 transition-colors"
            >
              Hire Me
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-pink-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#111111]/98 border-b border-gray-800/80 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
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
                      ? 'bg-pink-500/10 text-pink-400 font-semibold border-l-4 border-pink-500 pl-3'
                      : 'text-gray-300 hover:bg-[#1c1c1c] hover:text-white'
                  }
                `}
              >
                <span>{link.name}</span>
                <span className="text-xs text-gray-500">→</span>
              </NavLink>
            ))}
          </div>

          <div className="pt-4 mt-2 border-t border-gray-800 flex items-center justify-between px-2">
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/ChemayekAbraham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1a1a1a] text-gray-300 hover:text-pink-400 rounded-lg transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/chemayek-abraham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1a1a1a] text-gray-300 hover:text-pink-400 rounded-lg transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/ChemayekAbraham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1a1a1a] text-gray-300 hover:text-pink-400 rounded-lg transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 text-xs font-semibold text-pink-400 hover:text-pink-300"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
