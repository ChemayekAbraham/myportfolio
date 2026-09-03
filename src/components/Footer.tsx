import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080808] border-t border-gray-800/80 text-gray-400 overflow-hidden pt-16 pb-12">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-pink-600/5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Col 1: Bio / Brand */}
          <div className="space-y-4 lg:pr-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-2xl font-bold tracking-tight">
              <span className="text-pink-500 font-script text-3xl sm:text-4xl">Chemayek</span>
              <span className="text-white font-heading">Abraham</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full-Stack Software Engineer & AI Systems Developer based in Kampala, Uganda. Dedicated to architecting robust digital products, machine learning solutions, and accessible web experiences.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-[#1a1a1a] transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-[#1a1a1a] transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-[#1a1a1a] transition-all"
                title="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-[#1a1a1a] transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-pink-500 inline-block"></span>
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Chemayek', path: '/about' },
                { name: 'Services & Solutions', path: '/services' },
                { name: 'Experience & Resume', path: '/resume' },
                { name: 'Technical Skills', path: '/skills' },
                { name: 'Featured Projects', path: '/projects' },
                { name: 'Contact & Inquiries', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-pink-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-xs text-gray-600 group-hover:text-pink-500 transition-colors">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Projects */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-pink-500 inline-block"></span>
              Featured Work
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Welile School of AI', url: 'https://welile-school-of-ai-jlpa.vercel.app' },
                { name: 'E-katale Marketplace', url: 'https://e-katale-final.vercel.app' },
                { name: 'Danii Media Studio', url: 'https://daniimedia2.vercel.app' },
                { name: 'TA-TRACKS Fleet System', url: 'https://github.com/ChemayekAbraham/TA-TRACKS' },
                { name: 'TCIAP Machine Learning', url: 'https://github.com/ChemayekAbraham/TCIAP' },
                { name: 'Elgon Radio Streaming', url: 'https://github.com/ChemayekAbraham/elgonradio' },
              ].map((proj) => (
                <li key={proj.name}>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{proj.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-pink-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact & Status */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-pink-500 inline-block"></span>
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-1" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-pink-500 shrink-0 mt-1" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-pink-400 transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#141414] border border-gray-800/80 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-semibold text-emerald-400">Available For Work</span>
              </div>
              <p className="text-xs text-gray-400">
                Open for full-time software engineering roles, high-impact freelance projects, and AI integrations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-pink-400 hover:text-pink-300 pt-1"
              >
                <span>Start a conversation</span>
                <Sparkles className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Chemayek Abraham</span>. All Rights Reserved. Built with passion & precision.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-gray-800 hover:border-pink-500/40 text-gray-300 hover:text-pink-400 transition-all text-xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
