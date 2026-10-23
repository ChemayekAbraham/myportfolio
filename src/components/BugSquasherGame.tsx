import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug, X, RotateCcw, Trophy, Sparkles, Volume2, VolumeX, ShieldAlert } from 'lucide-react';
import { sound } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';

interface BugItem {
  id: number;
  name: string;
  emoji: string;
  x: number; // percentage
  y: number; // percentage
  points: number;
  dx: number;
  dy: number;
}

const BUG_TYPES = [
  { name: 'NullPointerException', emoji: '🐛', points: 10 },
  { name: 'CSS Margin-Auto Disaster', emoji: '🪲', points: 15 },
  { name: 'Off-by-One Gremlin', emoji: '🐞', points: 20 },
  { name: 'Undefined is not a function', emoji: '🐜', points: 25 },
  { name: '4am Merge Conflict', emoji: '🦟', points: 30 },
  { name: 'Infinite Recursion', emoji: '🪳', points: 35 },
];

const QUIP_LIST = [
  '“Converted this bug into a premium enterprise feature! 🚀”',
  '“Works on Chemayek’s machine! Why worry? 😂”',
  '“git commit -m \'fix: quick prayer before deploy\' 🙏”',
  '“It’s not a memory leak, it’s memory retention! 🧠”',
  '“Bug squashed! The server lives another day! 💥”',
  '“Documentation updated to say: Working as intended. ✍️”',
];

interface BugSquasherGameProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BugSquasherGame: React.FC<BugSquasherGameProps> = ({ isOpen, onClose }) => {
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bugs, setBugs] = useState<BugItem[]>([]);
  const [lastQuip, setLastQuip] = useState<string>('Click Start Game to squash Chemayek’s creations!');
  const [highScore, setHighScore] = useState<number>(0);
  const [soundOn, setSoundOn] = useState(sound.enabled);
  const nextId = useRef(1);

  // Load high score
  useEffect(() => {
    const saved = localStorage.getItem('bug_squasher_highscore');
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  // Timer loop
  useEffect(() => {
    if (!isPlaying) return;

    if (timeLeft <= 0) {
      setIsPlaying(false);
      sound.playChime();
      triggerConfetti();
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('bug_squasher_highscore', String(score));
        setLastQuip('🎉 NEW HIGH SCORE! Chemayek officially crowns you Senior Debugger!');
      } else {
        setLastQuip('⏰ Time is up! Outstanding debugging session!');
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, score, highScore]);

  // Bug spawning loop
  useEffect(() => {
    if (!isPlaying) return;

    const spawner = setInterval(() => {
      setBugs((current) => {
        if (current.length >= 6) return current;
        const randomType = BUG_TYPES[Math.floor(Math.random() * BUG_TYPES.length)];
        const newBug: BugItem = {
          id: nextId.current++,
          name: randomType.name,
          emoji: randomType.emoji,
          x: Math.random() * 80 + 10,
          y: Math.random() * 70 + 15,
          points: randomType.points,
          dx: (Math.random() - 0.5) * 1.5,
          dy: (Math.random() - 0.5) * 1.5,
        };
        return [...current, newBug];
      });
    }, 800);

    return () => clearInterval(spawner);
  }, [isPlaying]);

  // Bug movement loop
  useEffect(() => {
    if (!isPlaying) return;

    const mover = setInterval(() => {
      setBugs((current) =>
        current.map((b) => {
          let nx = b.x + b.dx;
          let ny = b.y + b.dy;
          let ndx = b.dx;
          let ndy = b.dy;

          if (nx < 5 || nx > 90) ndx = -ndx;
          if (ny < 10 || ny > 85) ndy = -ndy;

          return { ...b, x: nx, y: ny, dx: ndx, dy: ndy };
        })
      );
    }, 50);

    return () => clearInterval(mover);
  }, [isPlaying]);

  const startGame = () => {
    setScore(0);
    setCombo(0);
    setTimeLeft(30);
    setBugs([]);
    setIsPlaying(true);
    setLastQuip('Squash those bugs before they hit production!');
    sound.playChime();
  };

  const squashBug = (bug: BugItem, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playSquash();

    const bonus = Math.floor(combo * 2);
    const addedPoints = bug.points + bonus;

    setScore((s) => s + addedPoints);
    setCombo((c) => c + 1);
    setBugs((current) => current.filter((b) => b.id !== bug.id));

    // Random quip occasionally
    if (Math.random() > 0.4) {
      const q = QUIP_LIST[Math.floor(Math.random() * QUIP_LIST.length)];
      setLastQuip(q);
    }
  };

  const handleMiss = () => {
    if (isPlaying && combo > 0) {
      setCombo(0);
      sound.playZap();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl rounded-3xl glass-card border border-emerald-500/30 shadow-2xl overflow-hidden z-10 flex flex-col bg-[#0d1117] text-white"
          >
            {/* Top Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800 bg-black/40">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Bug className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                    <span>Bug Squasher 3000</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">
                      v2.0 LIVE
                    </span>
                  </h3>
                  <p className="text-xs text-gray-400">
                    Chemayek Abraham: Professional Bug Creator & Squasher 🐛🔨
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const next = sound.toggle();
                    setSoundOn(next);
                  }}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300"
                  title="Toggle Sound"
                >
                  {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scoreboard Bar */}
            <div className="grid grid-cols-4 gap-2 px-5 py-3 bg-black/20 border-b border-gray-800 text-center text-xs sm:text-sm font-mono">
              <div className="p-2 rounded-xl bg-white/5">
                <span className="text-gray-400 text-[10px] block">SCORE</span>
                <span className="text-emerald-400 font-bold text-base sm:text-lg">{score}</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5">
                <span className="text-gray-400 text-[10px] block">COMBO</span>
                <span className="text-blue-400 font-bold text-base sm:text-lg">{combo}x</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5">
                <span className="text-gray-400 text-[10px] block">TIME</span>
                <span className={`font-bold text-base sm:text-lg ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-amber-400'}`}>
                  {timeLeft}s
                </span>
              </div>
              <div className="p-2 rounded-xl bg-white/5">
                <span className="text-gray-400 text-[10px] block">RECORD</span>
                <span className="text-purple-400 font-bold text-base sm:text-lg flex items-center justify-center gap-1">
                  <Trophy className="w-3 h-3 text-amber-400" />
                  {highScore}
                </span>
              </div>
            </div>

            {/* Game Canvas Area */}
            <div
              onClick={handleMiss}
              className="relative w-full h-[320px] sm:h-[380px] bg-gradient-to-b from-[#0a0e14] to-[#121824] overflow-hidden select-none cursor-crosshair border-b border-gray-800"
            >
              {/* Grid Lines Visual */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Start Screen Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-6 text-center">
                  <ShieldAlert className="w-12 h-12 text-emerald-400 mb-3 animate-bounce" />
                  <h4 className="text-xl font-bold text-white mb-1">Production is Full of Bugs!</h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-sm mb-5">
                    Click each bug to squash it before it crashes the build. You have 30 seconds!
                  </p>
                  <button
                    onClick={startGame}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:scale-105 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{score > 0 ? 'Play Again' : 'Start Squashing'}</span>
                  </button>
                </div>
              )}

              {/* Active Bugs */}
              {isPlaying &&
                bugs.map((b) => (
                  <button
                    key={b.id}
                    onClick={(e) => squashBug(b, e)}
                    style={{ left: `${b.x}%`, top: `${b.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-2xl bg-black/40 hover:bg-emerald-500/30 border border-emerald-500/40 hover:scale-125 transition-transform cursor-pointer group flex flex-col items-center"
                  >
                    <span className="text-3xl sm:text-4xl filter drop-shadow animate-pulse">
                      {b.emoji}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-emerald-300 bg-black/70 px-1 rounded whitespace-nowrap mt-0.5">
                      +{b.points}xp
                    </span>
                  </button>
                ))}
            </div>

            {/* Bottom Developer Quip Bar */}
            <div className="px-5 py-3 bg-black/40 flex items-center justify-between text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2 truncate">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="italic truncate">{lastQuip}</span>
              </div>
              <span className="text-[11px] text-gray-500 font-mono hidden sm:inline">
                Tap bugs to debug
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
