import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Trophy, BarChart3, Award, ExternalLink, Sparkles, Copy, Check } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';
import { sound } from '../utils/sound';

type Tab = 'terminal' | 'stats' | 'trophies' | 'report';

const TROPHIES = [
  {
    id: 'arch',
    title: 'Master Systems Architect',
    rank: 'S-TIER',
    desc: 'Architected Welile School of AI & enterprise-grade web applications',
    icon: '🏆',
    stars: '★★★★★',
    badgeClass: 'bg-amber-500/20 text-amber-500 border-amber-500/30',
    xp: '+5,000 XP'
  },
  {
    id: 'bug',
    title: 'Artisanal Bug Crafter',
    rank: 'LEGENDARY',
    desc: 'Created & squashed 1,000+ bugs with zero production downtime',
    icon: '🐛',
    stars: '★★★★★',
    badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    xp: '+4,500 XP'
  },
  {
    id: 'drone',
    title: '4K Aerial Cine-Pilot',
    rank: 'DIAMOND',
    desc: 'Cinematic drone cinematography across Mount Elgon & East Africa',
    icon: '🎥',
    stars: '★★★★★',
    badgeClass: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    xp: '+4,200 XP'
  },
  {
    id: 'medic',
    title: 'Hardware Surgeon',
    rank: 'S-TIER',
    desc: 'Precision motherboard repair, custom builds & laboratory administration',
    icon: '🛠️',
    stars: '★★★★★',
    badgeClass: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    xp: '+3,800 XP'
  },
  {
    id: 'stream',
    title: 'Broadcast Stream Engineer',
    rank: 'PLATINUM',
    desc: 'Engineered high-fidelity live audio streaming infrastructure for Elgon Radio',
    icon: '📻',
    stars: '★★★★☆',
    badgeClass: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    xp: '+3,500 XP'
  },
  {
    id: 'uganda',
    title: 'Pearl of Africa Tech Vanguard',
    rank: 'ELITE',
    desc: 'Championing open source & youth technology literacy in Uganda 🇺🇬',
    icon: '🇺🇬',
    stars: '★★★★★',
    badgeClass: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    xp: '+6,000 XP'
  }
];

export const GithubIntelligenceTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('terminal');
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText('npx chemayek-abraham');
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: 'terminal', label: 'Terminal Feed', icon: Terminal },
    { id: 'stats', label: 'Activity & Stats', icon: BarChart3 },
    { id: 'trophies', label: 'Trophies', icon: Trophy },
    { id: 'report', label: 'Report Card', icon: Award }
  ];

  return (
    <div className="w-full rounded-3xl overflow-hidden glass-card border border-blue-500/20 shadow-2xl relative">
      {/* Top Header Bar */}
      <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-800/80 bg-gray-100/70 dark:bg-black/50 flex flex-wrap items-center justify-between gap-4">
        {/* Window dots & title */}
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shadow-xs" />
          </div>
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-slate-700 dark:text-gray-300">
            <Terminal className="w-4 h-4 text-blue-500" />
            <span className="font-semibold">chemayek@uganda-core:~</span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 animate-pulse">
              LIVE
            </span>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center space-x-1 sm:space-x-2 p-1 rounded-xl bg-gray-200/60 dark:bg-[#161618] border border-gray-300/40 dark:border-gray-800">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(tab.id as Tab);
                }}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 sm:p-7 min-h-[340px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* TAB 1: TERMINAL FEED */}
          {activeTab === 'terminal' && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 font-mono text-xs sm:text-sm"
            >
              <div className="space-y-1">
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">$</span> whoami
                </p>
                <p className="text-slate-800 dark:text-gray-200 pl-4">
                  Chemayek Abraham <span className="text-gray-600 dark:text-gray-400">(Full-Stack Engineer • Drone Cinematographer • Hardware Medic)</span>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">$</span> cat flagship_projects.json
                </p>
                <div className="pl-4 text-emerald-600 dark:text-emerald-400 bg-black/5 dark:bg-black/40 p-3 rounded-xl border border-gray-200 dark:border-gray-800/80">
                  <code>{`{
  "production": ["welileapp.com", "Welile School of AI", "TA-TRACKS", "Elgon Radio"],
  "location": "Kapchorwa Municipality, Mount Elgon Region, Uganda 🇺🇬",
  "status": "Ready for high-impact software engineering & media collaborations"
}`}</code>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">$</span> git status --short
                </p>
                <p className="text-blue-600 dark:text-blue-400 pl-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                  M branch 'main': 0 compile errors, 100% test coverage, mountain coffee level: 99999 ☕
                </p>
              </div>
            </motion.div>
          )}

          {/* TAB 2: STATS & STREAK */}
          {activeTab === 'stats' && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 text-center"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-[#121216] border border-gray-200 dark:border-gray-800/80 overflow-hidden shadow-xs">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=ChemayekAbraham&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=60A5FA&icon_color=38BDF8&text_color=FFFFFF&ring_color=60A5FA"
                    alt="GitHub Stats"
                    className="w-full rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-[#121216] border border-gray-200 dark:border-gray-800/80 overflow-hidden shadow-xs">
                  <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=ChemayekAbraham&theme=radical&hide_border=true&background=0D1117&ring=60A5FA&fire=F59E0B&currStreakLabel=60A5FA"
                    alt="GitHub Streak"
                    className="w-full rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: TROPHIES */}
          {activeTab === 'trophies' && (
            <motion.div
              key="trophies"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-1">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Tap any trophy to celebrate Chemayek’s milestones & achievements:
                </p>
                <span className="text-[11px] font-mono text-amber-500 font-bold hidden sm:inline">
                  6/6 UNLOCKED
                </span>
              </div>

              {/* Native High-Tech Trophy Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {TROPHIES.map((trophy) => (
                  <motion.div
                    key={trophy.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      sound.playChime();
                      triggerConfetti();
                    }}
                    className="p-4 rounded-2xl bg-black/5 dark:bg-[#141419] border border-gray-200/80 dark:border-gray-800/80 hover:border-amber-500/50 transition-all cursor-pointer shadow-xs group relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-3xl p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-gray-800/80 group-hover:scale-110 transition-transform">
                        {trophy.icon}
                      </span>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${trophy.badgeClass}`}>
                          {trophy.rank}
                        </span>
                        <span className="text-[10px] text-amber-400 tracking-widest font-mono">
                          {trophy.stars}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {trophy.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-gray-400 mt-1 leading-relaxed">
                      {trophy.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-gray-200/60 dark:border-gray-800/60 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-gray-400 dark:text-gray-500">Tap to inspect</span>
                      <span className="font-bold text-amber-500">{trophy.xp}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: REPORT CARD */}
          {activeTab === 'report' && (
            <motion.div
              key="report"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="font-mono text-[11px] sm:text-xs text-slate-800 dark:text-gray-300 overflow-x-auto"
            >
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-black/60 border border-gray-200 dark:border-gray-800/80 text-left">
                <pre className="text-cyan-600 dark:text-cyan-400 leading-relaxed font-semibold">
{`╔══════════════════════════════════════════════════════════════╗
║               🏫 CHEMAYEK'S OFFICIAL REPORT CARD             ║
╠══════════════════════════════════════════════════════════════╣
║  Full-Stack Dev:        A+++ (Next.js, React, Node, Python)  ║
║  Bug Creation:          WORLD CLASS (Artisanal & handcrafted)║
║  Hardware Mastery:      S-TIER (Resurrects dead PCs daily)   ║
║  Drone & Media Craft:   A+++ (Cinematic 4K & Adobe Suite)    ║
║  Google-Fu:             LEGENDARY (Finds fix in 30 seconds)  ║
║  Ugandan Coffee Intake: CRITICAL HIGH ☕☕☕☕☕               ║
║  Sleep Schedule:        ERROR 404 (Powered by passion)       ║
║  Overall Grade:         A+ (Vetted by compilers worldwide)   ║
╚══════════════════════════════════════════════════════════════╝`}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Interactive Command Bar */}
        <div className="pt-5 mt-4 border-t border-gray-200 dark:border-gray-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-gray-500">
            <span>Terminal status:</span>
            <span className="text-green-500 font-semibold">Ready</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyCommand}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-gray-300 bg-gray-200/80 dark:bg-[#1a1a20] hover:bg-blue-600 hover:text-white transition-all shadow-xs"
              title="Copy terminal command"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'npx chemayek'}</span>
            </button>

            <a
              href="https://github.com/ChemayekAbraham"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => triggerConfetti(e)}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
