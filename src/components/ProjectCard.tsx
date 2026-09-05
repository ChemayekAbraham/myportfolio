import React, { useState } from 'react';
import { CheckCircle2, ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'feature-row';
  reversed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layout = 'grid',
  reversed = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (layout === 'feature-row') {
    return (
      <div
        className={`group relative bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-500/10 flex flex-col ${
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-6 sm:gap-8 lg:gap-12`}
      >
        {/* Project Visual / Image Preview -> Links to GitHub */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-1/2 relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-[#181818] aspect-[16/10] group-hover:border-blue-500/40 transition-colors block cursor-pointer"
          title="View Source Code on GitHub"
        >
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ${
                imageLoaded ? 'opacity-95 group-hover:opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-[#161616] p-6 text-center">
              <Code2 className="w-10 h-10 text-blue-600 dark:text-blue-500 mb-2 opacity-80" />
              <div className="text-sm font-bold text-slate-900 dark:text-white">{project.title}</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">{project.category}</div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none"></div>

          {project.metrics && (
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-blue-500/30 text-blue-400 text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 sm:gap-2 shadow-lg z-10">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400"></span>
              <span>{project.metrics}</span>
            </div>
          )}

          <div
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all z-10"
            title="View Source Code on GitHub"
          >
            <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </a>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
            {project.title}
          </h3>

          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
              {project.highlights.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Direct GitHub Source Code Action */}
          <div className="pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Grid layout
  return (
    <div className="group bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl hover:-translate-y-1 flex flex-col h-full shadow-xs">
      {/* Visual Header -> Direct Link to GitHub */}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#181818] block cursor-pointer"
        title="View Source Code on GitHub"
      >
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? 'opacity-95 group-hover:opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-[#161616] p-4 text-center">
            <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-500 mb-1 opacity-80" />
            <div className="text-xs font-bold text-slate-900 dark:text-white">{project.title}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none"></div>

        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-md text-blue-400 border border-blue-500/30">
            {project.category}
          </span>
        </div>

        <div
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all z-10"
          title="View Source Code on GitHub"
        >
          <GithubIcon className="w-3.5 h-3.5" />
        </div>
      </a>

      {/* Body */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-3 pt-1">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium bg-gray-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-gray-400 border border-gray-200 dark:border-gray-800"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] font-medium bg-gray-100 dark:bg-[#1a1a1a] text-slate-500 dark:text-gray-500 border border-gray-200 dark:border-gray-800">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Links - Direct to Source Code */}
          <div className="pt-2.5 border-t border-gray-200 dark:border-gray-800/80">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Source Code</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
