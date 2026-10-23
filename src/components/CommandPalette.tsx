import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Home, 
  FolderGit2, 
  Cpu, 
  FileText, 
  User, 
  Wrench, 
  Send, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Bug, 
  Download, 
  ExternalLink,
  Copy,
  Check,
  Flame
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/sound';
import { triggerConfetti, triggerFireworks } from '../utils/confetti';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Actions' | 'Projects' | 'Connect';
  title: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  badge?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBugGame?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ 
  isOpen, 
  onClose,
  onOpenBugGame 
}) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [soundActive, setSoundActive] = useState(sound.enabled);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      sound.playChime();
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    sound.playSuccess();
    setTimeout(() => setCopiedText(null), 2000);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-home',
      category: 'Navigation',
      title: 'Go to Home',
      subtitle: 'Overview, hero & live GitHub terminal',
      icon: Home,
      action: () => { navigate('/'); onClose(); }
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: 'Explore Projects',
      subtitle: 'Welile, AI platforms, streaming & client apps',
      icon: FolderGit2,
      action: () => { navigate('/projects'); onClose(); }
    },
    {
      id: 'nav-skills',
      category: 'Navigation',
      title: 'View Technical Skills',
      subtitle: 'Languages, frameworks, systems & hardware',
      icon: Cpu,
      action: () => { navigate('/skills'); onClose(); }
    },
    {
      id: 'nav-resume',
      category: 'Navigation',
      title: 'Open Interactive Resume',
      subtitle: 'Experience, milestones, references & PDF export',
      icon: FileText,
      action: () => { navigate('/resume'); onClose(); }
    },
    {
      id: 'nav-about',
      category: 'Navigation',
      title: 'About Chemayek Abraham',
      subtitle: 'Background, bio, personal strengths & philosophy',
      icon: User,
      action: () => { navigate('/about'); onClose(); }
    },
    {
      id: 'nav-services',
      category: 'Navigation',
      title: 'Engineering & Media Services',
      subtitle: 'Web systems, mobile, 4K drone cinematography',
      icon: Wrench,
      action: () => { navigate('/services'); onClose(); }
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: 'Contact Chemayek',
      subtitle: 'Direct messaging, WhatsApp & scheduling',
      icon: Send,
      action: () => { navigate('/contact'); onClose(); }
    },

    // Interactive Actions & Easter Eggs
    {
      id: 'act-bug-game',
      category: 'Actions',
      title: 'Play Bug Squasher 3000 🐛',
      subtitle: 'Chemayek is a Professional Bug Creator - can you squash them?',
      icon: Bug,
      badge: 'Mini-Game',
      action: () => {
        onClose();
        if (onOpenBugGame) onOpenBugGame();
      }
    },
    {
      id: 'act-confetti',
      category: 'Actions',
      title: 'Fire Confetti Cannon 🎉',
      subtitle: 'Celebrate interactive frontend engineering',
      icon: Sparkles,
      badge: 'FX',
      action: () => {
        sound.playChime();
        triggerConfetti();
        onClose();
      }
    },
    {
      id: 'act-fireworks',
      category: 'Actions',
      title: 'Launch Fireworks Celebration 🎆',
      subtitle: 'Multi-burst fireworks show across the viewport',
      icon: Flame,
      badge: 'FX',
      action: () => {
        sound.playChime();
        triggerFireworks();
        onClose();
      }
    },
    {
      id: 'act-theme',
      category: 'Actions',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      subtitle: 'Toggle theme appearance',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        sound.playClick();
      }
    },
    {
      id: 'act-sound',
      category: 'Actions',
      title: soundActive ? 'Mute Sound Effects' : 'Enable Sound Effects',
      subtitle: 'Synthesizer UI clicks and interactive audio',
      icon: soundActive ? VolumeX : Volume2,
      action: () => {
        const next = sound.toggle();
        setSoundActive(next);
      }
    },
    {
      id: 'act-download-cv',
      category: 'Actions',
      title: 'Download Official Resume (PDF)',
      subtitle: 'Jump to resume to export high-res curriculum vitae',
      icon: Download,
      action: () => {
        navigate('/resume');
        onClose();
      }
    },

    // Connect & Copy
    {
      id: 'conn-email',
      category: 'Connect',
      title: copiedText === 'email' ? 'Email Copied!' : `Copy Email (${PERSONAL_INFO.email})`,
      subtitle: 'Click to copy Chemayek’s direct email address',
      icon: copiedText === 'email' ? Check : Copy,
      action: () => handleCopy(PERSONAL_INFO.email, 'email')
    },
    {
      id: 'conn-whatsapp',
      category: 'Connect',
      title: 'Chat on WhatsApp',
      subtitle: PERSONAL_INFO.phone,
      icon: ExternalLink,
      badge: 'Quick Chat',
      action: () => {
        window.open(PERSONAL_INFO.whatsapp, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'conn-github',
      category: 'Connect',
      title: 'Chemayek’s GitHub Profile',
      subtitle: 'View 50+ repositories & open source code',
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },

    // Projects Quick Jump
    ...PROJECTS.map((proj) => ({
      id: `proj-${proj.id}`,
      category: 'Projects' as const,
      title: proj.title,
      subtitle: `${proj.category} • ${proj.tags.slice(0, 3).join(', ')}`,
      icon: FolderGit2,
      action: () => {
        navigate('/projects');
        onClose();
      }
    }))
  ];

  const filteredCommands = commands.filter((cmd) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      (cmd.subtitle && cmd.subtitle.toLowerCase().includes(q)) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        sound.playHover();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        sound.playHover();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          sound.playClick();
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    const activeEl = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.16 }}
            className="relative w-full max-w-2xl rounded-2xl glass-card border border-white/20 dark:border-blue-500/30 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]"
          >
            {/* Top Search Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-200/50 dark:border-gray-800/80 bg-black/5 dark:bg-black/30">
              <Search className="w-5 h-5 text-blue-500 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command, project, or page... (or 'bug', 'cv', 'dark')"
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none"
              />
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono font-semibold rounded bg-black/10 dark:bg-white/10 text-slate-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div ref={listRef} className="overflow-y-auto p-2 space-y-1 divide-y divide-gray-100 dark:divide-gray-800/50">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-slate-500 dark:text-gray-400 text-sm">
                  <p>No matching commands found for "{query}".</p>
                  <p className="text-xs text-blue-500 mt-1">Try "projects", "game", "theme", or "resume"</p>
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = idx === selectedIndex;

                  return (
                    <button
                      key={cmd.id}
                      data-index={idx}
                      onMouseEnter={() => {
                        setSelectedIndex(idx);
                        sound.playHover();
                      }}
                      onClick={() => {
                        sound.playClick();
                        cmd.action();
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all ${
                        isSelected 
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                          : 'text-slate-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`p-2 rounded-lg shrink-0 ${
                          isSelected 
                            ? 'bg-white/20 text-white' 
                            : 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </span>
                        <div className="min-w-0">
                          <p className={`text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                            {cmd.title}
                          </p>
                          {cmd.subtitle && (
                            <p className={`text-xs truncate ${isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-gray-400'}`}>
                              {cmd.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {cmd.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          }`}>
                            {cmd.badge}
                          </span>
                        )}
                        <span className={`text-[10px] hidden sm:inline-block font-mono ${
                          isSelected ? 'text-white/80' : 'text-slate-400 dark:text-gray-500'
                        }`}>
                          {cmd.category}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Tips */}
            <div className="px-4 py-2.5 bg-black/5 dark:bg-black/40 border-t border-gray-200/50 dark:border-gray-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <span><kbd className="font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded">↑</kbd> <kbd className="font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded">↓</kbd> navigate</span>
                <span><kbd className="font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded">↵</kbd> select</span>
              </div>
              <span className="font-medium text-blue-500">⌘K / Ctrl+K</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
