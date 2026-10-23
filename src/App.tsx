import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InstallPrompt } from './components/InstallPrompt';
import { QuickDock } from './components/QuickDock';
import { MouseGlow } from './components/MouseGlow';
import { CommandPalette } from './components/CommandPalette';
import { BugSquasherGame } from './components/BugSquasherGame';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Resume } from './pages/Resume';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isBugGameOpen, setIsBugGameOpen] = useState(false);

  // Global hotkey for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-gray-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200 relative">
          {/* Ambient Mouse Cursor Spotlight Follower */}
          <MouseGlow />

          {/* Dark Mode Ambient Background Image with Reduced Opacity */}
          <div 
            className="fixed inset-0 pointer-events-none z-0 hidden dark:block overflow-hidden"
            aria-hidden="true"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat opacity-15 sm:opacity-20 mix-blend-screen scale-100 sm:scale-105 transition-opacity duration-500"
              style={{ backgroundImage: "url('/images/dark-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/80 via-transparent to-[#0d0d0d]/90 pointer-events-none" />
          </div>

          {/* Navigation */}
          <Navbar 
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onOpenBugGame={() => setIsBugGameOpen(true)}
          />

          {/* Main Routed Content */}
          <main className="flex-1 relative z-10">
            <Routes>
              <Route path="/" element={<Home onOpenBugGame={() => setIsBugGameOpen(true)} />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Global Interactive Command Palette (Cmd + K) */}
          <CommandPalette 
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
            onOpenBugGame={() => setIsBugGameOpen(true)}
          />

          {/* Interactive Bug Squasher 3000 Arcade Game */}
          <BugSquasherGame 
            isOpen={isBugGameOpen}
            onClose={() => setIsBugGameOpen(false)}
          />

          {/* Floating Quick Action Dock */}
          <QuickDock 
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onOpenBugGame={() => setIsBugGameOpen(true)}
          />

          {/* Floating WhatsApp Action Button */}
          <FloatingWhatsApp />

          {/* PWA Mobile Install Alert Banner */}
          <InstallPrompt />

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
