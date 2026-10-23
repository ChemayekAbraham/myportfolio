import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  FolderGit2, 
  Cpu, 
  Send, 
  Sparkles, 
  Sun, 
  Moon, 
  Github,
  MessageCircle,
  FileText
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { triggerConfetti, triggerFireworks } from '../utils/confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const QuickDock: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const dockItems = [
    { name: 'Home', path: '/', icon: Home, isRoute: true },
    { name: 'Projects', path: '/projects', icon: FolderGit2, isRoute: true },
    { name: 'Skills', path: '/skills', icon: Cpu, isRoute: true },
    { name: 'Resume', path: '/resume', icon: FileText, isRoute: true },
    { name: 'Contact', path: '/contact', icon: Send, isRoute: true },
    { 
      name: 'WhatsApp', 
      href: PERSONAL_INFO.whatsapp, 
      icon: MessageCircle, 
      isExternal: true,
      onClick: (e: React.MouseEvent) => triggerConfetti(e)
    },
    { 
      name: 'GitHub', 
      href: PERSONAL_INFO.github, 
      icon: Github, 
      isExternal: true 
    },
    {
      name: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
      icon: theme === 'dark' ? Sun : Moon,
      isAction: true,
      onClick: toggleTheme
    },
    {
      name: 'Celebrate 🎉',
      icon: Sparkles,
      isAction: true,
      onClick: () => triggerFireworks()
    }
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden sm:block">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="glass-dock px-3 py-2 rounded-2xl flex items-center gap-1.5 sm:gap-2"
      >
        {dockItems.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = hoveredIdx === idx;

          const buttonContent = (
            <motion.div
              onHoverStart={() => setHoveredIdx(idx)}
              onHoverEnd={() => setHoveredIdx(null)}
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 rounded-xl text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -38, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-lg pointer-events-none z-50"
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );

          if (item.isRoute) {
            return (
              <NavLink
                key={item.name}
                to={item.path!}
                className={({ isActive }) => `
                  rounded-xl relative
                  ${isActive ? 'text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20' : ''}
                `}
              >
                {buttonContent}
              </NavLink>
            );
          }

          if (item.isExternal) {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={item.onClick}
              >
                {buttonContent}
              </a>
            );
          }

          return (
            <button
              key={item.name}
              type="button"
              onClick={item.onClick}
              aria-label={item.name}
            >
              {buttonContent}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};
