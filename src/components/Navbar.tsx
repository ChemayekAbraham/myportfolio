import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon, Sparkles, Search, Bug } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { triggerConfetti } from '../utils/confetti';
import { sound } from '../utils/sound';

interface NavbarProps {
  onOpenCommandPalette?: () => void;
  onOpenBugGame?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenBugGame
}) => {
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
            ? 'glass-card border-b border-gray-200 dark:border-gray-800/80 shadow-lg py-3 sm:py-3.5'
            : 'bg-white/80 dark:bg-[#0d0d0d]/80 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="group flex items-center space-x-2 text-xl sm:text-2xl font-heading font-extrabold tracking-tight"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping group-hover:bg-cyan-400 transition-colors" />
              <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">
                Chemayek
              </span>
              <span className="text-slate-900 dark:text-white tracking-wide">
                Abraham
              </span>
            </Link>

            {/* Desktop Nav Links with Sliding Active Pill */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 p-1 rounded-2xl glass-card border border-gray-200 dark:border-gray-800/80">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => sound.playClick()}
                    onMouseEnter={() => sound.playHover()}
                    className={`relative px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-xl bg-blue-600 shadow-md shadow-blue-600/30 -z-10"
                      />
                    )}
                    {link.name}
                  </NavLink>
                );
              })}
            </div>

            {/* Right CTA & Socials & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-2.5">
              {/* Command Palette Trigger */}
              <button
                onClick={() => {
                  sound.playClick();
                  if (onOpenCommandPalette) onOpenCommandPalette();
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-800/80 text-xs font-medium cursor-pointer hover:border-blue-500/40 transition-all shadow-xs"
                title="Open Command Palette (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-blue-500" />
                <span className="hidden lg:inline text-slate-500 dark:text-gray-400">Search</span>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-bold rounded bg-black/5 dark:bg-white/10 text-slate-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700">
                  ⌘K
                </kbd>
              </button>

              {/* Bug Squasher Trigger */}
              <button
                onClick={() => {
                  sound.playSquash();
                  if (onOpenBugGame) onOpenBugGame();
                }}
                className="p-2.5 rounded-xl glass-card hover:border-emerald-500/40 text-slate-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all shadow-xs cursor-pointer"
                title="Play Bug Squasher 3000 🐛"
              >
                <Bug className="w-4 h-4" />
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  toggleTheme();
                }}
                className="p-2.5 rounded-xl glass-card hover:border-blue-500/40 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs focus:outline-none cursor-pointer"
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
                onClick={(e) => {
                  sound.playClick();
                  triggerConfetti(e);
                }}
                className="p-2.5 text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 glass-card rounded-xl transition-all shadow-xs"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                onClick={(e) => {
                  sound.playClick();
                  triggerConfetti(e);
                }}
                className="relative group inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hire Me</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile menu button & Quick Controls */}
            <div className="flex md:hidden items-center space-x-1.5">
              <button
                onClick={() => {
                  sound.playClick();
                  if (onOpenCommandPalette) onOpenCommandPalette();
                }}
                className="p-2 rounded-xl glass-card text-slate-700 dark:text-gray-300"
                title="Search (⌘K)"
              >
                <Search className="w-4 h-4 text-blue-500" />
              </button>

              <button
                onClick={() => {
                  sound.playSquash();
                  if (onOpenBugGame) onOpenBugGame();
                }}
                className="p-2 rounded-xl glass-card text-slate-700 dark:text-gray-300 text-emerald-500"
                title="Bug Squasher"
              >
                <Bug className="w-4 h-4 text-emerald-400" />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl glass-card text-slate-700 dark:text-gray-300 transition-colors focus:outline-none"
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
                onClick={(e) => triggerConfetti(e)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                Hire Me
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 dark:text-gray-400 glass-card rounded-xl transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden glass-card border-b border-gray-200 dark:border-gray-800/80 px-4 pt-3 pb-6 space-y-2 mt-2"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all
                    ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
                    }
                  `}
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-3 border-t border-gray-200 dark:border-gray-800 flex items-center justify-around">
                <a
                  href="https://wa.me/256775077741"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card text-emerald-500"
                  title="WhatsApp"
                >
                  <WhatsappIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/ChemayekAbraham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-gray-300"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chemayek-abraham-256984322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card text-blue-500"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
