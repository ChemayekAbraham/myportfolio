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
    <div className={`mb-8 md:mb-10 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3 ${isCenter ? 'mx-auto' : ''}`}>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {title}{' '}
        {highlightedText && (
          <span className="text-blue-600 dark:text-blue-400">
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
