import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  Mail, 
  Download, 
  CheckCircle2, 
  Video,
  Rocket,
  Maximize2,
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/SocialIcons';
import { PERSONAL_INFO, PROJECTS, SERVICES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

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
    <div className="pt-20 pb-16 overflow-hidden bg-transparent">
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex items-center justify-center py-6 sm:py-10 lg:py-12">
        {/* Clean subtle background grid without radiant blur blobs */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              {/* Main Headline */}
              <div className="space-y-2">
                <h2 className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 font-semibold text-center lg:text-left">
                  Welcome to my universe
                </h2>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                  Hi, I'm{' '}
                  <span className="text-blue-600 dark:text-blue-500">
                    Chemayek
                  </span>{' '}
                  <span className="text-slate-900 dark:text-white">
                    Abraham
                  </span>
                </h1>
                <p className="text-blue-600 dark:text-blue-400 font-heading text-base sm:text-lg font-semibold flex items-center justify-center lg:justify-start gap-2">
                  <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                  <span>{PERSONAL_INFO.role}</span>
                </p>
              </div>

              {/* Bio snippet */}
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {PERSONAL_INFO.tagline} Based in Kapchorwa Municipality, Uganda, I build production-grade web applications, interactive media productions, and AI-accelerated systems.
              </p>

              {/* Tech stack pill row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 pt-0.5">
                {['TypeScript', 'Next.js / React', 'Drone Cinematography', 'Video Shooting', 'Adobe Suite', 'Filmora', 'Vegas Pro', 'Hardware Repair'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-[#141414] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons & Connect - Visible on Desktop only in left column */}
              <div className="hidden lg:block pt-2">
                <div className="flex flex-wrap items-center justify-start gap-3">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
                  >
                    <span>Explore Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white bg-white dark:bg-[#161616] hover:bg-gray-50 dark:hover:bg-[#202020] border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 hover:-translate-y-0.5 transition-all shadow-xs"
                  >
                    <span>Get in Touch</span>
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                  </Link>

                  <Link
                    to="/resume"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-[#141414] transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Resume</span>
                  </Link>
                </div>

                {/* Social links row */}
                <div className="flex items-center justify-start gap-2.5 pt-4 text-slate-600 dark:text-gray-400">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-gray-500 font-semibold">Connect:</span>
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800/80 hover:border-emerald-500/50 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-[#1c1c1c] transition-all shadow-xs"
                    title="WhatsApp"
                  >
                    <WhatsappIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-[#1c1c1c] transition-all shadow-xs"
                    title="GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-[#1c1c1c] transition-all shadow-xs"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Profile Card with floating elements */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
              <div className="relative w-full max-w-md">
                {/* Main Card */}
                <div className="relative bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/90 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl overflow-hidden">
                  {/* Top bar styling */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-gray-800/80">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-cyan-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                  </div>

                  {/* Profile image with stylish clean frame */}
                  <div 
                    onClick={() => setIsImageModalOpen(true)}
                    className="relative my-6 mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl bg-gray-100 dark:bg-[#1a1a1a] cursor-pointer group"
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
                      <span className="p-2.5 rounded-full bg-black/70 text-blue-400 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Quick stats mini-grid */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-2">
                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800/80">
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-500">{PERSONAL_INFO.stats.yearsExperience}</div>
                      <div className="text-[11px] text-slate-600 dark:text-gray-400">Experience</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800/80">
                      <div className="text-xl font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.stats.projectsCompleted}</div>
                      <div className="text-[11px] text-slate-600 dark:text-gray-400">Projects</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800/80">
                      <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">{PERSONAL_INFO.stats.repositories}</div>
                      <div className="text-[11px] text-slate-600 dark:text-gray-400">GitHub Repos</div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-[#161616] border border-gray-200 dark:border-blue-500/30 backdrop-blur-md shadow-xl dark:shadow-2xl animate-float">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Media & Full-Stack Pro</div>
                    <div className="text-[10px] text-slate-500 dark:text-gray-400">Photo, Video & AI Tools</div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -top-5 -right-6 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#161616] border border-gray-200 dark:border-gray-800/90 backdrop-blur-md shadow-xl dark:shadow-2xl">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-gray-200">100% Code Quality</span>
                </div>
              </div>

              {/* CTA Buttons & Connect - Visible on Mobile directly after Profile Card */}
              <div className="block lg:hidden w-full mt-8 space-y-4 text-center">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/projects"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all"
                  >
                    <span>Explore Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white bg-white dark:bg-[#161616] hover:bg-gray-50 dark:hover:bg-[#202020] border border-gray-200 dark:border-gray-800 transition-all shadow-xs"
                  >
                    <span>Get in Touch</span>
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-4 pt-1">
                  <Link
                    to="/resume"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-[#141414] transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>View Resume</span>
                  </Link>
                </div>

                {/* Social links row */}
                <div className="flex items-center justify-center gap-2.5 pt-2 text-slate-600 dark:text-gray-400">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-gray-500 font-semibold">Connect:</span>
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800/80 hover:border-emerald-500/50 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-[#1c1c1c] transition-all shadow-xs"
                    title="WhatsApp"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-[#1c1c1c] transition-all shadow-xs"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-[#1c1c1c] transition-all shadow-xs"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= METRICS COUNTER BAR ================= */}
      <section className="py-8 border-y border-gray-200 dark:border-gray-800/70 bg-gray-50/50 dark:bg-black/30 backdrop-blur-xs relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141414]/90 border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/30 transition-colors shadow-xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                {PERSONAL_INFO.stats.yearsExperience}
              </div>
              <p className="mt-1.5 text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Years Experience</p>
              <p className="text-[11px] text-slate-500 dark:text-gray-500 mt-0.5">Full-stack & Media</p>
            </div>

            <div className="text-center p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141414]/90 border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/30 transition-colors shadow-xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
                {PERSONAL_INFO.stats.projectsCompleted}
              </div>
              <p className="mt-1.5 text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Completed Projects</p>
              <p className="text-[11px] text-slate-500 dark:text-gray-500 mt-0.5">Web & Media Platforms</p>
            </div>

            <div className="text-center p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141414]/90 border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/30 transition-colors shadow-xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                {PERSONAL_INFO.stats.repositories}
              </div>
              <p className="mt-1.5 text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">GitHub Repos</p>
              <p className="text-[11px] text-slate-500 dark:text-gray-500 mt-0.5">Open source code</p>
            </div>

            <div className="text-center p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141414]/90 border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/30 transition-colors shadow-xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {PERSONAL_INFO.stats.satisfiedClients}
              </div>
              <p className="mt-1.5 text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Success Rate</p>
              <p className="text-[11px] text-slate-500 dark:text-gray-500 mt-0.5">Reliable delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <section className="py-12 sm:py-16 relative bg-transparent dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Featured Showcase"
            title="Explore My Popular"
            highlightedText="Projects"
            subtitle="A curated selection of production web applications, digital studio showcases, and digital marketplaces engineered by Chemayek Abraham."
          />

          <div className="space-y-8 lg:space-y-10">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                layout="feature-row"
                reversed={idx % 2 === 1}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-800 dark:text-white bg-white dark:bg-[#181818] hover:bg-blue-600 hover:text-white border border-gray-200 dark:border-gray-800 hover:border-blue-500 shadow-md transition-all duration-300 group"
            >
              <span>View All Projects & Repositories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES OVERVIEW ================= */}
      <section className="py-12 sm:py-16 bg-transparent dark:bg-black/40 border-t border-gray-200 dark:border-gray-800/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What I Deliver"
            title="Specialized"
            highlightedText="Services & Solutions"
            subtitle="Leveraging full-stack engineering, media production, and modern AI workflow tools to turn ideas into high-impact digital products."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121212]/90 border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-500/10 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-gray-300">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <span>Explore all services & technical capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="py-12 sm:py-14 relative bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-white dark:bg-[#141414] border border-blue-200 dark:border-blue-500/30 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl dark:shadow-2xl">
            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-500/30 text-xs font-bold tracking-wide shadow-xs">
                <Rocket className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
                <span>Let's Build Something Exceptional</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Have a project or vision in mind?
              </h2>

              <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                Whether you need a full-scale web application, digital media production, e-commerce marketplace, or custom software architecture — I am ready to bring it to life.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white bg-gray-100 dark:bg-[#1a1a1a] hover:bg-gray-200 dark:hover:bg-[#252525] border border-gray-300 dark:border-gray-800 transition-all"
                >
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
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

          {/* Modal Content - Click inside won't close */}
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
