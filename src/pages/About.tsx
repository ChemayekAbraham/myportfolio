import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  Code, 
  Brain, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Mail, 
  Briefcase,
  Phone,
  UserCheck,
  Maximize2,
  X
} from 'lucide-react';
import { PERSONAL_INFO, PERSONAL_ATTRIBUTES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const About: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageModalOpen(false);
      }
    };
    if (isImageModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isImageModalOpen]);

  const coreValues = [
    {
      icon: Code,
      title: 'Clean & Scalable Code',
      description: 'Writing maintainable, type-safe, and self-documenting code with modern design patterns and modular component architecture.'
    },
    {
      icon: Brain,
      title: 'AI-First Problem Solving',
      description: 'Harnessing machine learning, OpenAI integrations, and automated pipelines to build intelligent products that adapt and learn.'
    },
    {
      icon: Zap,
      title: 'Peak Performance',
      description: 'Optimizing web vitals, serverless edge caching, query indexing, and lightweight bundles for sub-second responsiveness.'
    },
    {
      icon: ShieldCheck,
      title: 'Security & Reliability',
      description: 'Implementing modern auth (Clerk, OAuth, JWT), secure session storage, and resilient error recovery systems.'
    }
  ];

  return (
    <div className="pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="About Chemayek Abraham"
          title="Driven, Innovative"
          highlightedText="Software Engineer"
          subtitle="Discover my background, engineering philosophy, and passion for creating impactful software solutions across Africa and the globe."
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mt-4 sm:mt-6">
          
          {/* Left Column: Bare Image Card & Quick Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="relative bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm dark:shadow-xl">
                
                {/* Clean Bare Profile Image - Clickable for Full View */}
                <div 
                  onClick={() => setIsImageModalOpen(true)}
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-gray-100 dark:bg-[#1c1c1c] cursor-pointer group shadow-md"
                  role="button"
                  tabIndex={0}
                  aria-label="Click to view full image"
                  title="Click to view full picture"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsImageModalOpen(true);
                    }
                  }}
                >
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle expand indicator on hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/90 dark:bg-black/80 text-blue-600 dark:text-blue-400 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Quick Info List */}
                <div className="space-y-3 pt-3 border-t border-gray-200 dark:border-gray-800/80 text-center">
                  <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800/80 flex flex-col items-center gap-1">
                    <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500" /> Origin & Location
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800/80 flex flex-col items-center gap-1">
                      <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500" /> Experience
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.stats.yearsExperience}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800/80 flex flex-col items-center gap-1">
                      <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Phone
                      </span>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        {PERSONAL_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800/80 flex flex-col items-center gap-1">
                    <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500" /> Direct Email
                    </span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline break-all transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Languages Centered with High Contrast */}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800/80 space-y-2 text-center">
                  <div className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                    Spoken & Written Languages
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 pt-1">
                    {PERSONAL_INFO.languages.map((lang) => (
                      <span
                        key={lang.name}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-[#1c1c1c] text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 shadow-xs"
                      >
                        {lang.name} <span className="text-blue-500 dark:text-blue-400 font-normal">({lang.level.split(' ')[0]})</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download CV CTA */}
                <div className="pt-2">
                  <Link
                    to="/resume"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>View Curriculum Vitae & Resume</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 shadow-sm space-y-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                <span>Work Philosophy</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                Passionate about continuous learning, pair programming, community engagement, computer hardware support, and building resilient web applications.
              </p>
            </div>
          </div>

          {/* Right Column: Bio Story & Core Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Hi, I'm <span className="text-blue-600 dark:text-blue-500">{PERSONAL_INFO.name}</span> — Software Developer, Computer Technician & Media Creator.
              </h3>

              {PERSONAL_INFO.aboutStory.map((paragraph, index) => (
                <p key={index} className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Accomplishment Bullets */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800/80 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500"></span>
                <span>Core Competencies & Real-World Roles</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                {[
                  'Full-Stack Web Development (welileapp.com contributor)',
                  'Drone Piloting & 4K Aerial Cinematography',
                  'Video Shooting & Multi-Software Editing (Adobe Suite, Filmora, Vegas Pro)',
                  'Computer Repair & Maintenance (5 Years at ICT Centre)',
                  'Remote Lab Technician (Kween Modern High School)',
                  'Media, Design & Video Tutoring (Kapchemweny Stationery)',
                  'Diploma in Information Systems & Technology (Nkumba University, 2024-2026)',
                  'Certificate in Journalism & Mass Communication (YMCA Comprehensive Institute, 2022-2024)',
                  'Certificate in Computer Science (UICT, 2022-2024 - Pending)',
                  'Fluent in Kupsabiny & English (Conversational Swahili)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Profile & Strengths */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Personal Profile & Professional Ethics</span>
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                {PERSONAL_ATTRIBUTES.map((attr, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800/60">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{attr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values / Philosophy Grid */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>My Engineering Principles</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreValues.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/40 transition-colors space-y-2 shadow-xs"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">{val.title}</h5>
                      <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{val.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all"
              >
                <span>View My Technical Skills</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white bg-white dark:bg-[#161616] hover:bg-gray-50 dark:hover:bg-[#222222] border border-gray-200 dark:border-gray-800 transition-all shadow-xs"
              >
                <span>Let's Work Together</span>
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* ================= FULL IMAGE MODAL / LIGHTBOX ================= */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsImageModalOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsImageModalOpen(false);
            }}
            className="absolute top-5 right-5 z-60 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors shadow-xl"
            aria-label="Close full view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content - Click inside won't close */}
          <div 
            className="relative max-w-3xl max-h-[85vh] flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="max-h-[85vh] w-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
