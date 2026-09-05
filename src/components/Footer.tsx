import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUp, ArrowRight, ExternalLink, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-[#080808] border-t border-gray-200 dark:border-gray-800/80 text-gray-500 dark:text-gray-400 overflow-hidden pt-14 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 text-center sm:text-left">
          
          {/* Col 1: Bio / Brand */}
          <div className="space-y-4 lg:pr-4 flex flex-col items-center sm:items-start">
            <Link to="/" className="inline-flex items-center space-x-2 text-2xl font-heading font-extrabold tracking-tight">
              <span className="text-blue-600 dark:text-blue-500">Chemayek</span>
              <span className="text-slate-900 dark:text-white">Abraham</span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed max-w-sm sm:max-w-none">
              Full-Stack Software Engineer, Media Production Specialist & AI Tools Developer based in Kampala, Uganda. Dedicated to architecting robust digital products and accessible web experiences.
            </p>
            <div className="flex items-center justify-center sm:justify-start space-x-2.5 pt-1">
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-50 dark:hover:bg-[#1a1a1a] transition-all shadow-xs"
                title="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-50 dark:hover:bg-[#1a1a1a] transition-all shadow-xs"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-50 dark:hover:bg-[#1a1a1a] transition-all shadow-xs"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-50 dark:hover:bg-[#1a1a1a] transition-all shadow-xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-slate-900 dark:text-white font-bold text-sm sm:text-base mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-blue-600 dark:bg-blue-500 inline-block"></span>
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
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
                    className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Projects */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-slate-900 dark:text-white font-bold text-sm sm:text-base mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-blue-600 dark:bg-blue-500 inline-block"></span>
              Featured Work
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Welile School of AI', url: 'https://github.com/ChemayekAbraham/WelileSchoolOFAi' },
                { name: 'Danii Media Studio', url: 'https://github.com/ChemayekAbraham/daniimedia2' },
                { name: 'TA-TRACKS Music & Audio', url: 'https://github.com/ChemayekAbraham/TA-TRACKS' },
                { name: 'TCIAP Machine Learning', url: 'https://github.com/ChemayekAbraham/TCIAP' },
                { name: 'Elgon Radio Streaming', url: 'https://github.com/ChemayekAbraham/elgonradio' },
              ].map((proj) => (
                <li key={proj.name}>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{proj.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact & Status */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="text-slate-900 dark:text-white font-bold text-sm sm:text-base mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-blue-600 dark:bg-blue-500 inline-block"></span>
              Get in Touch
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-gray-300">
              <div className="flex items-center sm:items-start gap-2.5 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center sm:items-start gap-2.5 justify-center sm:justify-start">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center sm:items-start gap-2.5 justify-center sm:justify-start">
                <WhatsappIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  WhatsApp: {PERSONAL_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center sm:items-start gap-2.5 justify-center sm:justify-start">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Call: {PERSONAL_INFO.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-gray-800/80 space-y-1.5 text-center sm:text-left max-w-sm sm:max-w-none">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Available For Work</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-gray-400 leading-relaxed">
                Open for full-time engineering roles, freelance projects, media production & AI workflows.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center sm:justify-start gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-0.5"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar - Clean single line / centered stacked on mobile */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-slate-500 dark:text-gray-400 leading-normal">
            © {new Date().getFullYear()} <span className="font-semibold text-slate-800 dark:text-gray-200">Chemayek Abraham</span>. All Rights Reserved. Built with passion & precision.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-gray-800 hover:border-blue-500 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
