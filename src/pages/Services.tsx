import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

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
      description: 'Designing high-fidelity, accessible interfaces with modern dark aesthetics, responsive grids, and intuitive interactive workflows.'
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
    <div className="pt-28 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="Services & Solutions"
          title="High-Impact Digital"
          highlightedText="Engineering Services"
          subtitle="From scalable web architectures and AI-driven platforms to full-scale digital marketplaces — I deliver modern, reliable software built to perform."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#121212] border border-gray-800/80 hover:border-pink-500/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-lg">
                  <i className={`${service.icon} text-2xl`}></i>
                </div>

                {/* Titles */}
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-pink-400 uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="pt-4 border-t border-gray-800/80 space-y-2.5">
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Inquire Action */}
              <div className="pt-6 mt-6 border-t border-gray-800/80">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-pink-400 hover:text-pink-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow / Process Section */}
        <div className="mt-28 p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#101010] border border-gray-800/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/5 blur-3xl pointer-events-none rounded-full"></div>

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
                className="p-6 rounded-2xl bg-[#141414] border border-gray-800/80 hover:border-pink-500/40 transition-colors space-y-3 relative"
              >
                <div className="text-3xl font-black text-pink-500/40 font-mono">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-white">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-pink-600 hover:bg-pink-500 shadow-xl shadow-pink-600/25 transition-all"
            >
              <span>Schedule a Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
