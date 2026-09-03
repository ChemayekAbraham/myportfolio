import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightedText,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold tracking-wider uppercase mb-4 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {title}{' '}
        {highlightedText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-400">
            {highlightedText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
