import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  ExternalLink, 
  Code2, 
  Brain, 
  Globe, 
  Layout,
  Search,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { PROJECTS } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { triggerConfetti } from '../utils/confetti';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'AI & Machine Learning', label: 'AI & ML', icon: Brain },
    { id: 'Web Apps', label: 'Web Applications', icon: Globe },
    { id: 'Full-Stack', label: 'Full-Stack & Systems', icon: Code2 },
    { id: 'UI/UX Design', label: 'Media & UI/UX', icon: Layout },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="Source Code & Architecture"
          title="Explore My High-Impact"
          highlightedText="Projects"
          subtitle="Explore open-source repositories, production platforms, aerial media portals, and AI architectures engineered by Chemayek Abraham."
        />

        {/* Filters & Search Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto p-1.5 rounded-2xl glass-card border border-gray-200 dark:border-gray-800/80">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search tech, stack, or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card text-sm text-slate-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Featured Section (if All selected and no search) */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <div className="mb-16 space-y-8">
            <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800/80 pb-3">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Featured Flagship Platforms
              </h3>
            </div>

            <div className="space-y-8 lg:space-y-10">
              {PROJECTS.filter((p) => p.featured).map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  layout="feature-row"
                  reversed={idx % 2 === 1}
                />
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800/80 pb-3">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {selectedCategory === 'all' && searchQuery === ''
                ? 'All Repositories & Implementations'
                : `Filtered Projects (${filteredProjects.length})`}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Showing {filteredProjects.length} of {PROJECTS.length}
            </span>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 glass-card rounded-2xl p-8 space-y-3">
              <p className="text-slate-600 dark:text-gray-400 text-base">No projects match your filter query.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-500/20"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ProjectCard
                      project={project}
                      layout="grid"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* GitHub profile redirect banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl glass-card border border-blue-500/20 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
              <GithubIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Explore GitHub Repository Commits</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">
              View open-source codebases, commit histories, branches, and architectural documentation directly on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/ChemayekAbraham"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => triggerConfetti(e)}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/30 hover:-translate-y-0.5 transition-all"
          >
            <span>GitHub Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
