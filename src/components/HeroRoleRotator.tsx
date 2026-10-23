import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Wrench, Bug, Sparkles } from 'lucide-react';

const ROLES = [
  { text: 'Full-Stack Software Engineer', icon: Code2, color: 'text-blue-500' },
  { text: 'Lead Engineer @ welileapp.com', icon: Sparkles, color: 'text-cyan-400' },
  { text: '4K Aerial Drone Cinematographer', icon: Video, color: 'text-indigo-400' },
  { text: 'Computer Hardware & PC Medic', icon: Wrench, color: 'text-amber-400' },
  { text: 'Certified Professional Bug Creator', icon: Bug, color: 'text-pink-400' }
];

export const HeroRoleRotator: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const currentRole = ROLES[index];
  const IconComponent = currentRole.icon;

  return (
    <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRole.text}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/25 backdrop-blur-md"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${currentRole.color}`} />
          </motion.div>
          <span className="font-heading font-semibold text-sm sm:text-base text-blue-600 dark:text-blue-400 tracking-wide">
            {currentRole.text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
