import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Code2, 
  Database, 
  Film, 
  Wrench, 
  ShieldCheck,
  CheckCircle2, 
  Layers,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { TiltCard } from '../components/TiltCard';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Layers },
    { id: 'Software & Web Engineering', label: 'Software & Web', icon: Code2 },
    { id: 'Database & Systems Architecture', label: 'Database & Systems', icon: Database },
    { id: 'Hardware, Repair & Lab Admin', label: 'Hardware & Lab Admin', icon: Wrench },
    { id: 'Networking & Cybersecurity', label: 'Networking & Security', icon: ShieldCheck },
    { id: 'Media, Design & Cinematography', label: 'Media & Drone Video', icon: Film },
  ];

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory === 'all') return true;
    return cat.title === selectedCategory;
  });

  return (
    <div className="pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="Technical & Creative Arsenal"
          title="Professional"
          highlightedText="Skills & Stack"
          subtitle="A showcase of technical expertise — from full-stack web architecture and cloud backends to 4K drone cinematography, video editing, and precision computer hardware repair."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-8 max-w-4xl mx-auto p-1.5 rounded-2xl glass-card border border-gray-200 dark:border-gray-800/80">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-10 mt-8">
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <TiltCard glowColor="rgba(59, 130, 246, 0.15)">
                  <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6 border border-blue-500/20">
                    {/* Category Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-200 dark:border-gray-800/80">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                          <i className={`${category.icon} text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                            {category.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 self-start sm:self-center">
                        {category.skills.length} Core Technologies
                      </span>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-4 sm:p-5 rounded-2xl bg-black/5 dark:bg-[#16161a] border border-gray-200/80 dark:border-gray-800/80 hover:border-blue-500/50 transition-all duration-200 hover:shadow-lg space-y-2 group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-[#202028] border border-blue-500/20 dark:border-gray-700/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors text-base shrink-0">
                              <i className={skill.icon}></i>
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </h4>
                          </div>

                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-0.5">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Engineering Principles & Methodologies */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-card border border-blue-500/20 shadow-2xl">
          <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>Engineering Principles & Methodologies</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
            {[
              'Microservices & REST APIs',
              'Modular Component Architecture',
              'Automated CI/CD Workflows',
              'Edge Serverless Computing',
              'Prompt Engineering & LLMs',
              'Cross-Platform Optimization',
              'Agile & Rapid Iteration',
              'Hardware Component Diagnostics'
            ].map((principle, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-black/5 dark:bg-[#18181f] border border-gray-200 dark:border-gray-800/80 flex items-center gap-2.5 hover:border-blue-500/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="font-medium">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
