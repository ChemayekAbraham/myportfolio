import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Resume } from './pages/Resume';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-gray-100 font-sans selection:bg-pink-500 selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Routed Content */}
        <main className="flex-1">
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

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
