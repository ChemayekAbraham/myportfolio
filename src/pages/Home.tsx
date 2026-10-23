import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Code2, 
  Mail, 
  Download, 
  CheckCircle2, 
  Video,
  Rocket,
  Maximize2,
  X,
  Sparkles,
  Zap,
  Globe,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/SocialIcons';
import { PERSONAL_INFO, PROJECTS, SERVICES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { HeroRoleRotator } from '../components/HeroRoleRotator';
import { GithubIntelligenceTerminal } from '../components/GithubIntelligenceTerminal';
import { TiltCard } from '../components/TiltCard';
import { triggerConfetti, triggerFireworks } from '../utils/confetti';

export const Home: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageModalOpen(false);
      }
    };
    if (isImageModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isImageModalOpen]);

  return (
    <div className="pt-20 pb-20 overflow-hidden bg-transparent">
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex items-center justify-center py-8 sm:py-12 lg:py-16">
        {/* Animated Cyber Grid & Ambient Glow Orbs */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text & CTAs */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Active Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block -ml-3.5" />
                <span>Available for Worldwide Remote & On-Site Projects</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                  Hi, I'm{' '}
                  <span className="gradient-text-cyber">
                    Chemayek
                  </span>{' '}
                  <span className="text-slate-900 dark:text-white">
                    Abraham
                  </span>
                </h1>

                {/* Animated Role Rotator */}
                <HeroRoleRotator />
              </div>

              {/* Bio snippet */}
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {PERSONAL_INFO.tagline} Based in Kapchorwa Municipality, Uganda, I build production-grade web platforms, capture aerial 4K cinematography, and maintain high-reliability computing infrastructure.
              </p>

              {/* Tech stack pill row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {['TypeScript', 'Next.js / React', 'Node.js', 'Python', '4K Drone', 'Adobe Premiere Pro', 'Hardware Medic', 'welileapp.com'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold glass-card text-slate-700 dark:text-gray-300 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all shadow-xs cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Desktop CTA Buttons & Connect */}
              <div className="hidden lg:block pt-3 space-y-4">
                <div className="flex flex-wrap items-center justify-start gap-3.5">
                  <Link
                    to="/projects"
                    onClick={(e) => triggerConfetti(e)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Explore Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white glass-card hover:border-blue-500/50 hover:-translate-y-0.5 transition-all shadow-xs"
                  >
                    <span>Get in Touch</span>
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </Link>

                  <Link
                    to="/resume"
                    onClick={(e) => triggerConfetti(e)}
                    className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Resume</span>
                  </Link>
                </div>

                {/* Social links row */}
                <div className="flex items-center justify-start gap-3 pt-1 text-slate-600 dark:text-gray-400">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-gray-500 font-bold">Connect:</span>
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => triggerConfetti(e)}
                    className="p-2.5 rounded-xl glass-card hover:border-emerald-500/50 hover:text-emerald-500 hover:scale-110 transition-all shadow-xs"
                    title="WhatsApp"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => triggerConfetti(e)}
                    className="p-2.5 rounded-xl glass-card hover:border-blue-500/50 hover:text-blue-500 hover:scale-110 transition-all shadow-xs"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => triggerConfetti(e)}
                    className="p-2.5 rounded-xl glass-card hover:border-blue-500/50 hover:text-blue-500 hover:scale-110 transition-all shadow-xs"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive 3D Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="lg:col-span-5 flex flex-col items-center lg:items-end relative"
            >
              <div className="relative w-full max-w-md">
                <TiltCard glowColor="rgba(59, 130, 246, 0.25)">
                  <div className="relative glass-card rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-blue-500/20">
                    {/* Top window styling */}
                    <div className="flex items-center justify-between pb-5 border-b border-gray-200 dark:border-gray-800/80">
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                        verified_dev_profile.ug
                      </div>
                    </div>

                    {/* Profile image with stylish frame */}
                    <div 
                      onClick={() => setIsImageModalOpen(true)}
                      className="relative my-6 mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-2xl bg-gray-100 dark:bg-[#1a1a1a] cursor-pointer group"
                      role="button"
                      tabIndex={0}
                      title="Click to view full picture"
                    >
                      <img
                        src={PERSONAL_INFO.avatar}
                        alt={PERSONAL_INFO.name}
                        className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="p-3 rounded-full bg-black/70 text-blue-400 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Maximize2 className="w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    {/* Quick stats mini-grid */}
                    <div className="grid grid-cols-3 gap-2.5 text-center pt-2">
                      <div className="p-2.5 rounded-2xl bg-black/5 dark:bg-black/40 border border-gray-200 dark:border-gray-800/80">
                        <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400">{PERSONAL_INFO.stats.yearsExperience}</div>
                        <div className="text-[10px] text-slate-600 dark:text-gray-400 font-medium">Experience</div>
                      </div>
                      <div className="p-2.5 rounded-2xl bg-black/5 dark:bg-black/40 border border-gray-200 dark:border-gray-800/80">
                        <div className="text-xl font-extrabold text-slate-900 dark:text-white">{PERSONAL_INFO.stats.projectsCompleted}</div>
                        <div className="text-[10px] text-slate-600 dark:text-gray-400 font-medium">Projects</div>
                      </div>
                      <div className="p-2.5 rounded-2xl bg-black/5 dark:bg-black/40 border border-gray-200 dark:border-gray-800/80">
                        <div className="text-xl font-extrabold text-cyan-500 dark:text-cyan-400">{PERSONAL_INFO.stats.repositories}</div>
                        <div className="text-[10px] text-slate-600 dark:text-gray-400 font-medium">GitHub Repos</div>
                      </div>
                    </div>
                  </div>
                </TiltCard>

                {/* Floating Tech Badges */}
                <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 px-4 py-3 rounded-2xl glass-card border border-blue-500/30 backdrop-blur-xl shadow-2xl animate-float">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-500 dark:text-blue-400">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Media & Full-Stack Pro</div>
                    <div className="text-[10px] text-slate-500 dark:text-gray-400">4K Drone, Video & AI Tools</div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -top-5 -right-6 items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card border border-emerald-500/30 backdrop-blur-xl shadow-2xl">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-gray-200">100% Client Satisfaction</span>
                </div>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="block lg:hidden w-full mt-8 space-y-4 text-center">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/projects"
                    onClick={(e) => triggerConfetti(e)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Explore Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-gray-200 glass-card hover:border-blue-500/50 transition-all shadow-xs"
                  >
                    <span>Get in Touch</span>
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-4 pt-1">
                  <Link
                    to="/resume"
                    onClick={(e) => triggerConfetti(e)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>View Resume</span>
                  </Link>
                </div>

                {/* Mobile Social links */}
                <div className="flex items-center justify-center gap-3 pt-2 text-slate-600 dark:text-gray-400">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-gray-500 font-bold">Connect:</span>
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => triggerConfetti(e)}
                    className="p-2.5 rounded-xl glass-card hover:border-emerald-500/50 hover:text-emerald-500 transition-all shadow-xs"
                    title="WhatsApp"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => triggerConfetti(e)}
                    className="p-2.5 rounded-xl glass-card hover:border-blue-500/50 hover:text-blue-500 transition-all shadow-xs"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => triggerConfetti(e)}
                    className="p-2.5 rounded-xl glass-card hover:border-blue-500/50 hover:text-blue-500 transition-all shadow-xs"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= METRICS COUNTER BAR ================= */}
      <section className="py-8 border-y border-gray-200 dark:border-gray-800/70 bg-gray-50/50 dark:bg-black/30 backdrop-blur-md relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <TiltCard>
              <div className="text-center p-5 rounded-2xl glass-card hover:border-blue-500/40 transition-colors shadow-xs">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                  {PERSONAL_INFO.stats.yearsExperience}
                </div>
                <p className="mt-1.5 text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Years Experience</p>
                <p className="text-[11px] text-slate-500 dark:text-gray-500 mt-0.5">Full-Stack & Media</p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="text-center p-5 rounded-2xl glass-card hover:border-cyan-500/40 transition-colors shadow-xs">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.stats.projectsCompleted}
                </div>
                <p className="mt-1.5 text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Completed Projects</p>
                <p className="text-[11px] text-slate-500 dark:text-gray-500 mt-0.5">Web & Media Apps</p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="text-center p-5 rounded-2xl glass-card hover:border-indigo-500/40 transition-colors shadow-xs">
                <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {PERSONAL_INFO.stats.repositories}
                </div>
                <p className="mt-1.5 text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">GitHub Repos</p>
                <p className="text-[11px] text-slate-500 dark:text-gray-500 mt-0.5">Open-Source Code</p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="text-center p-5 rounded-2xl glass-card hover:border-emerald-500/40 transition-colors shadow-xs">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  {PERSONAL_INFO.stats.satisfiedClients}
                </div>
                <p className="mt-1.5 text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Success Rate</p>
                <p className="text-[11px] text-slate-500 dark:text-gray-500 mt-0.5">Reliable & Timely</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ================= GITHUB LIVE INTELLIGENCE TERMINAL ================= */}
      <section className="py-14 sm:py-18 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Live Developer Terminal"
            title="GitHub Intelligence &"
            highlightedText="Engineering Velocity"
            subtitle="Explore real-time developer metrics, open-source repository trophies, commit activity streaks, and official developer report cards."
          />

          <div className="mt-6 sm:mt-8">
            <GithubIntelligenceTerminal />
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <section className="py-14 sm:py-18 relative bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Featured Showcase"
            title="Explore My High-Impact"
            highlightedText="Projects"
            subtitle="A curated selection of production web applications, educational platforms, and digital media portals engineered by Chemayek Abraham."
          />

          <div className="space-y-8 lg:space-y-12">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                layout="feature-row"
                reversed={idx % 2 === 1}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              onClick={(e) => triggerConfetti(e)}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-800 dark:text-white glass-card hover:bg-blue-600 hover:text-white hover:border-blue-500 shadow-xl transition-all duration-300 group"
            >
              <span>View All Projects & Repositories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES OVERVIEW ================= */}
      <section className="py-14 sm:py-18 bg-transparent border-t border-gray-200 dark:border-gray-800/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What I Deliver"
            title="Specialized"
            highlightedText="Services & Solutions"
            subtitle="Leveraging full-stack engineering, 4K aerial cinematography, and computer hardware repair to build dependable solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <TiltCard key={service.id}>
                <div className="group p-6 sm:p-8 rounded-3xl glass-card hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <i className={`${service.icon} text-lg`}></i>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-800/80">
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-gray-300">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <span>Explore all technical & media capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="py-14 sm:py-18 relative bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <TiltCard glowColor="rgba(59, 130, 246, 0.3)">
            <div className="relative rounded-3xl glass-card border border-blue-500/40 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl text-center">
              <div className="relative z-10 max-w-2xl mx-auto space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 text-xs font-bold tracking-wide">
                  <Rocket className="w-3.5 h-3.5 text-blue-500" />
                  <span>Let's Build Something Legendary Together</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Have an ambitious project or vision in mind?
                </h2>

                <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  Whether you need a full-scale web application, digital media production, 4K aerial drone shooting, or computer hardware infrastructure — I am ready to deliver excellence.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link
                    to="/contact"
                    onClick={() => triggerFireworks()}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all"
                  >
                    <span>Start a Collaboration</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    onClick={(e) => triggerConfetti(e)}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-700 dark:text-gray-200 glass-card hover:border-blue-500/50 transition-all shadow-xs"
                  >
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ================= FULL IMAGE MODAL / LIGHTBOX ================= */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsImageModalOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsImageModalOpen(false);
            }}
            className="absolute top-5 right-5 z-60 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors shadow-xl"
            aria-label="Close full view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div 
            className="relative max-w-3xl max-h-[85vh] flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="max-h-[85vh] w-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
