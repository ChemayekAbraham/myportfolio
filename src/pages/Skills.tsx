import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Server, 
  Brain, 
  Wrench, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'Frontend Development', label: 'Frontend & UI', icon: Code2 },
    { id: 'Backend & Cloud', label: 'Backend & Cloud', icon: Server },
    { id: 'AI & Data Science', label: 'AI & Data Science', icon: Brain },
    { id: 'Tools & DevOps', label: 'DevOps & Tools', icon: Wrench },
  ];

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory === 'all') return true;
    return cat.title === selectedCategory;
  });

  return (
    <div className="pt-28 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="Technical Arsenal"
          title="Professional"
          highlightedText="Skills & Stack"
          subtitle="A showcase of my technical expertise — from full-stack web architecture and high-performance frontend frameworks to AI & data engineering."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 my-10 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30 scale-105'
                    : 'bg-[#141414] text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-12 mt-12">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#121212] border border-gray-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-8"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-800/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                    <i className={`${category.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1a1a1a] text-pink-400 border border-pink-500/20 self-start sm:self-center">
                  {category.skills.length} Core Technologies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-2xl bg-[#161616] border border-gray-800/80 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg space-y-3 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-lg bg-[#1e1e1e] border border-gray-700/60 flex items-center justify-center text-pink-400 group-hover:text-white group-hover:bg-pink-600 transition-colors text-sm">
                          <i className={skill.icon}></i>
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-xs font-mono font-semibold text-pink-400">
                        {skill.level}%
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-gray-400 leading-normal">
                      {skill.description}
                    </p>

                    {/* Progress bar */}
                    <div className="w-full bg-[#202020] h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-600 to-rose-400 transition-all duration-1000 group-hover:from-pink-500 group-hover:to-rose-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Architecture & Soft Skills */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#141414] border border-gray-800/80">
          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-pink-500" />
            <span>Engineering Principles & Methodologies</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-gray-300">
            {[
              'Microservices & REST APIs',
              'Modular Component Architecture',
              'Automated CI/CD Workflows',
              'Edge Serverless Computing',
              'Prompt Engineering & LLMs',
              'Cross-Platform Optimization',
              'Agile & Rapid Iteration',
              'Security-First Development'
            ].map((principle, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#181818] border border-gray-800 flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                <span>{principle}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
