import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
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
  if (layout === 'feature-row') {
    return (
      <div
        className={`group relative bg-[#121212] border border-gray-800/80 hover:border-pink-500/50 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 flex flex-col ${
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-8 lg:gap-12`}
      >
        {/* Project Visual / Image Preview */}
        <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border border-gray-800 bg-[#1c1c1c] aspect-[16/10] group-hover:border-pink-500/40 transition-colors">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20"></div>

          {project.metrics && (
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-pink-500/30 text-pink-400 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.metrics}</span>
            </div>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-pink-600/90 hover:bg-pink-500 backdrop-blur-md text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
              title="Open Live Preview"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-5">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 border border-pink-500/20 text-pink-400">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-pink-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {project.highlights.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#1a1a1a] text-gray-300 border border-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-pink-600 hover:bg-pink-500 shadow-md shadow-pink-600/20 hover:shadow-pink-600/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:text-white bg-[#1a1a1a] hover:bg-[#222222] border border-gray-800 hover:border-gray-700 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Grid layout
  return (
    <div className="group bg-[#121212] border border-gray-800/80 hover:border-pink-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 flex flex-col h-full">
      {/* Visual Header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20"></div>

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-md text-pink-400 border border-pink-500/30">
            {project.category}
          </span>
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-pink-600/90 hover:bg-pink-500 backdrop-blur-md text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
            title="Open Live Preview"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#1a1a1a] text-gray-400 border border-gray-800"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#1a1a1a] text-gray-500 border border-gray-800">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-800/80">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-gray-500 font-medium">Architecture / Engine</span>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
