import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { TiltCard } from '../components/TiltCard';
import { triggerFireworks, triggerConfetti } from '../utils/confetti';

export const Services: React.FC = () => {
  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      description: 'Understanding core business requirements, system constraints, user journeys, and technical feasibility to construct an optimized architecture plan.'
    },
    {
      step: '02',
      title: 'UI/UX & Prototyping',
      description: 'Designing high-fidelity, accessible interfaces with modern aesthetics, responsive grids, and intuitive interactive workflows.'
    },
    {
      step: '03',
      title: 'Full-Stack Development',
      description: 'Writing robust, type-safe code in TypeScript, Next.js, and Python with automated CI/CD, modular components, and database models.'
    },
    {
      step: '04',
      title: 'Testing & Cloud Deployment',
      description: 'Rigorous unit testing, security audits, Lighthouse speed optimization, and seamless edge deployment on Vercel or cloud servers.'
    }
  ];

  return (
    <div className="pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="Services & Solutions"
          title="High-Impact Digital"
          highlightedText="Engineering Services"
          subtitle="From scalable web architectures and digital media productions to 4K drone cinematography and computer repair — I deliver modern, reliable solutions built to perform."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SERVICES.map((service) => (
            <TiltCard key={service.id} glowColor="rgba(59, 130, 246, 0.2)">
              <div className="group relative glass-card hover:border-blue-500/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between h-full border border-blue-500/20">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">
                    <i className={`${service.icon} text-2xl`}></i>
                  </div>

                  {/* Titles */}
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800/80 space-y-2.5">
                    <span className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Inquire Action */}
                <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-800/80">
                  <Link
                    to="/contact"
                    onClick={(e) => triggerConfetti(e)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Workflow / Process Section */}
        <div className="mt-24 p-8 sm:p-12 lg:p-16 rounded-3xl glass-card border border-blue-500/20 relative overflow-hidden shadow-2xl">
          <SectionHeader
            badge="My Development Process"
            title="How I Bring Ideas"
            highlightedText="To Life"
            subtitle="A structured, collaborative approach ensuring project predictability, high code standards, and timely delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-black/5 dark:bg-[#16161c] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/40 transition-colors space-y-3 relative group"
              >
                <div className="text-3xl font-black text-blue-600/40 dark:text-blue-400/40 font-mono group-hover:text-blue-500 transition-colors">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              onClick={() => triggerFireworks()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Schedule a Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
