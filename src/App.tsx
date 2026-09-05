import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InstallPrompt } from './components/InstallPrompt';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Resume } from './pages/Resume';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-gray-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200 relative">
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
          <Navbar />

          {/* Main Routed Content */}
          <main className="flex-1 relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
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
