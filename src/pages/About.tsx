import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  Code, 
  Brain, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Mail, 
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const About: React.FC = () => {
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
    <div className="pt-28 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="About Chemayek Abraham"
          title="Driven, Innovative"
          highlightedText="Software Engineer"
          subtitle="Discover my background, engineering philosophy, and passion for creating impactful software solutions across Africa and the globe."
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Left Column: Image Card & Quick Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
              
              <div className="relative bg-[#141414] border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-pink-500/30 bg-[#1c1c1c]">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
                      <p className="text-xs text-pink-400 font-medium">Software Engineer</p>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-black"></span>
                  </div>
                </div>

                {/* Quick Info List */}
                <div className="space-y-3 pt-2 text-sm border-t border-gray-800/80">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-pink-500" /> Location:
                    </span>
                    <span className="text-white font-medium">{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-pink-500" /> Experience:
                    </span>
                    <span className="text-white font-medium">{PERSONAL_INFO.stats.yearsExperience}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-pink-500" /> Email:
                    </span>
                    <span className="text-white font-medium text-xs sm:text-sm truncate max-w-[180px]">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>

                {/* Download CV CTA */}
                <div className="pt-2">
                  <Link
                    to="/resume"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-pink-600 hover:bg-pink-500 shadow-lg shadow-pink-600/25 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>View Resume & Credentials</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-gray-800/80 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-500" />
                <span>Current Focus</span>
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Building AI learning platforms, modern TypeScript/Next.js e-commerce marketplaces, and exploring generative AI agent workflows.
              </p>
            </div>
          </div>

          {/* Right Column: Bio Story & Core Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Hi, I'm <span className="text-pink-500">{PERSONAL_INFO.name}</span> — Crafting the future of software and AI.
              </h3>

              {PERSONAL_INFO.aboutStory.map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Accomplishment Bullets */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-gray-800/80 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                <span>Core Competencies & Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300">
                {[
                  'Full-Stack TypeScript & Next.js Systems',
                  'AI & Machine Learning (OpenAI / Python)',
                  'E-Commerce & Digital Marketplaces',
                  'Fleet & Logistics Dashboards (TA-TRACKS)',
                  'Audio & Real-time Web Media Platforms',
                  'Edge Deployments & Cloud Scalability',
                  'RESTful & GraphQL API Architecture',
                  'Client-Focused Agile Delivery'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values / Philosophy Grid */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span>My Engineering Principles</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreValues.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#121212] border border-gray-800/80 hover:border-pink-500/40 transition-colors space-y-2"
                    >
                      <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h5 className="text-sm font-bold text-white">{val.title}</h5>
                      <p className="text-xs text-gray-400 leading-relaxed">{val.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-pink-600 hover:bg-pink-500 shadow-lg shadow-pink-600/25 transition-all"
              >
                <span>View My Technical Skills</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-300 hover:text-white bg-[#161616] hover:bg-[#222222] border border-gray-800 transition-all"
              >
                <span>Let's Work Together</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
