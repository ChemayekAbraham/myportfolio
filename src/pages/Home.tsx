import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Mail, 
  Download, 
  CheckCircle2, 
  Brain 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import { PERSONAL_INFO, PROJECTS, SERVICES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

export const Home: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center py-12 lg:py-20">
        {/* Background glow & grid */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#161616] border border-gray-800/90 text-xs font-medium text-gray-300 shadow-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>{PERSONAL_INFO.status}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h2 className="text-sm uppercase tracking-widest text-gray-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-8 h-[2px] bg-pink-500 inline-block"></span>
                  <span>Welcome to my universe</span>
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Hi, I'm{' '}
                  <span className="text-pink-500 font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl inline-block -rotate-1 hover:rotate-0 transition-transform">
                    Chemayek
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                    Abraham
                  </span>
                </h1>
                <p className="text-pink-400 font-heading text-lg sm:text-xl font-semibold flex items-center justify-center lg:justify-start gap-2">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span>{PERSONAL_INFO.role}</span>
                </p>
              </div>

              {/* Bio snippet */}
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {PERSONAL_INFO.tagline} Based in Kampala, Uganda, I build production-grade web applications, interactive AI platforms, and high-converting e-commerce engines.
              </p>

              {/* Tech stack pill row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {['TypeScript', 'Next.js / React', 'Python & AI', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#141414] text-gray-300 border border-gray-800 hover:border-pink-500/40 hover:text-pink-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-xl shadow-pink-600/30 hover:shadow-pink-600/50 hover:-translate-y-0.5 transition-all"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-gray-200 hover:text-white bg-[#161616] hover:bg-[#202020] border border-gray-800 hover:border-gray-700 hover:-translate-y-0.5 transition-all"
                >
                  <span>Get in Touch</span>
                  <Mail className="w-4 h-4 text-pink-500" />
                </Link>

                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-gray-400 hover:text-pink-400 hover:bg-[#141414] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </Link>
              </div>

              {/* Social links row */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-gray-400">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Connect:</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141414] border border-gray-800/80 hover:border-pink-500/50 hover:text-pink-400 hover:bg-[#1c1c1c] transition-all"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141414] border border-gray-800/80 hover:border-pink-500/50 hover:text-pink-400 hover:bg-[#1c1c1c] transition-all"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141414] border border-gray-800/80 hover:border-pink-500/50 hover:text-pink-400 hover:bg-[#1c1c1c] transition-all"
                  title="Twitter / X"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Profile Card with floating elements */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-md">
                {/* Background decorative glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>

                {/* Main Card */}
                <div className="relative bg-[#121212] border border-gray-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                  {/* Top bar styling */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-800/80">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-500">chemayek.dev</span>
                  </div>

                  {/* Profile image with stylish frame */}
                  <div className="relative my-6 mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-pink-500/40 shadow-xl bg-[#1a1a1a]">
                    <img
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2 text-center py-1 px-2 rounded-lg bg-black/70 backdrop-blur-md border border-pink-500/20 text-xs font-semibold text-pink-400">
                      Chemayek Abraham
                    </div>
                  </div>

                  {/* Quick stats mini-grid */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-2">
                    <div className="p-2.5 rounded-xl bg-[#181818] border border-gray-800/80">
                      <div className="text-xl font-bold text-pink-500">{PERSONAL_INFO.stats.yearsExperience}</div>
                      <div className="text-[11px] text-gray-400">Experience</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#181818] border border-gray-800/80">
                      <div className="text-xl font-bold text-white">{PERSONAL_INFO.stats.projectsCompleted}</div>
                      <div className="text-[11px] text-gray-400">Projects</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#181818] border border-gray-800/80">
                      <div className="text-xl font-bold text-pink-400">{PERSONAL_INFO.stats.repositories}</div>
                      <div className="text-[11px] text-gray-400">GitHub Repos</div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 px-4 py-3 rounded-2xl bg-[#161616]/95 border border-pink-500/30 backdrop-blur-md shadow-2xl animate-float">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">AI & ML Specialist</div>
                    <div className="text-[10px] text-gray-400">Next.js & Python Engine</div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -top-5 -right-6 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#161616]/95 border border-gray-800/90 backdrop-blur-md shadow-2xl">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-semibold text-gray-200">100% Code Quality</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= METRICS COUNTER BAR ================= */}
      <section className="py-12 border-y border-gray-800/70 bg-[#0f0f0f]/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6 rounded-2xl bg-[#141414] border border-gray-800/80 hover:border-pink-500/30 transition-colors">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                {PERSONAL_INFO.stats.yearsExperience}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">Years of Experience</p>
              <p className="text-xs text-gray-500 mt-1">Full-stack & AI development</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-[#141414] border border-gray-800/80 hover:border-pink-500/30 transition-colors">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                {PERSONAL_INFO.stats.projectsCompleted}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">Completed Projects</p>
              <p className="text-xs text-gray-500 mt-1">Web, Mobile & AI Apps</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-[#141414] border border-gray-800/80 hover:border-pink-500/30 transition-colors">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pink-400">
                {PERSONAL_INFO.stats.repositories}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">Active GitHub Repos</p>
              <p className="text-xs text-gray-500 mt-1">Open source contributions</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-[#141414] border border-gray-800/80 hover:border-pink-500/30 transition-colors">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-400">
                {PERSONAL_INFO.stats.satisfiedClients}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">Success Rate</p>
              <p className="text-xs text-gray-500 mt-1">Reliable delivery & support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Featured Showcase"
            title="Explore My Popular"
            highlightedText="Projects"
            subtitle="A curated selection of production web applications, AI learning platforms, and digital marketplaces engineered by Chemayek Abraham."
          />

          <div className="space-y-12 lg:space-y-16">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                layout="feature-row"
                reversed={idx % 2 === 1}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#181818] hover:bg-pink-600 border border-gray-800 hover:border-pink-500 shadow-xl transition-all duration-300 group"
            >
              <span>View All 7+ Projects & Repositories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES OVERVIEW ================= */}
      <section className="py-24 bg-[#0a0a0a] border-t border-gray-800/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What I Deliver"
            title="Specialized"
            highlightedText="Services & Solutions"
            subtitle="Leveraging full-stack engineering, artificial intelligence, and cloud scalability to turn complex concepts into polished reality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group p-8 rounded-3xl bg-[#121212] border border-gray-800/80 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <i className={`${service.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-800/80">
                  <ul className="space-y-2 text-xs text-gray-300">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors"
            >
              <span>Explore all services & technical capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-pink-950/40 via-[#181818] to-purple-950/40 border border-pink-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Build Something Exceptional</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Have a project or vision in mind?
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Whether you need a full-scale web application, AI system integration, e-commerce marketplace, or custom software architecture — I am ready to bring it to life.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-pink-600 hover:bg-pink-500 shadow-xl shadow-pink-600/30 hover:shadow-pink-600/50 hover:-translate-y-0.5 transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-gray-200 hover:text-white bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 transition-all"
                >
                  <Mail className="w-4 h-4 text-pink-500" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
