import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Download, 
  Calendar, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EXPERIENCE_ITEMS, PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredItems = EXPERIENCE_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  const handleDownloadCV = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#f43f5e', '#ffffff', '#fb7185']
    });

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);

    const cvContent = `CHEMAYEK ABRAHAM
Full-Stack Software Engineer & AI Systems Developer
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}

==================================================
PROFESSIONAL SUMMARY
==================================================
Results-driven Full-Stack Software Engineer and AI Systems Developer with 3+ years of experience architecting high-performance web applications, intelligent ML systems, e-commerce marketplaces, and digital media platforms. Skilled across TypeScript, Next.js, React, Node.js, Python, PostgreSQL, and Cloud Infrastructure.

==================================================
CORE TECHNICAL SKILLS
==================================================
- Frontend: TypeScript, JavaScript (ES6+), Next.js, React, Tailwind CSS, HTML5/CSS3, Framer Motion
- Backend & Cloud: Node.js, Express, Python, REST APIs, GraphQL, PostgreSQL, MongoDB, Supabase, Vercel
- AI & Data Science: Machine Learning, OpenAI API / LLM Integrations, Pandas, NumPy, Scikit-Learn, Jupyter
- DevOps & Security: Git, GitHub Actions, Docker, Clerk Auth, NextAuth, OAuth2, RBAC

==================================================
KEY PROJECTS
==================================================
1. Welile School of AI (TypeScript, Next.js, OpenAI API) - Live: https://welile-school-of-ai-jlpa.vercel.app
2. E-katale Marketplace (TypeScript, Next.js, PostgreSQL) - Live: https://e-katale-final.vercel.app
3. Danii Media Digital Studio (TypeScript, React, Vite) - Live: https://daniimedia2.vercel.app
4. TA-TRACKS Fleet Logistics System (JavaScript, React, Node.js)
5. TCIAP Python Machine Learning Analytics Engine (Python, Pandas, Scikit-Learn)
6. Elgon Radio Live Web Audio App (JavaScript, React, WebSockets)

==================================================
EXPERIENCE & EDUCATION
==================================================
- Lead Full-Stack & AI Systems Engineer | Welile School of AI (2024 - Present)
- Full-Stack Software Developer | E-katale & Danii Media Systems (2023 - 2024)
- Software Developer & Data Specialist | Independent Projects (2022 - 2023)
- Bachelor of Science in Software Engineering (2020 - 2024)
`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Chemayek_Abraham_Resume_${new Date().getFullYear()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-28 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="Experience & Credentials"
          title="Real-World Problem"
          highlightedText="Solutions Experience"
          subtitle="A comprehensive timeline of my engineering roles, product deployments, academic background, and professional achievements."
        />

        {/* Download CV Bar & Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 my-10 p-6 rounded-2xl bg-[#121212] border border-gray-800/80">
          {/* Tab buttons */}
          <div className="flex items-center p-1.5 rounded-xl bg-[#1a1a1a] border border-gray-800 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Credentials
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'experience'
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'education'
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>

          {/* Download button */}
          <button
            onClick={handleDownloadCV}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-xl shadow-pink-600/25 hover:-translate-y-0.5 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>{downloadSuccess ? 'Resume Downloaded!' : 'Download Complete CV'}</span>
          </button>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-8 mt-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#121212] border border-gray-800/80 hover:border-pink-500/50 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 space-y-6"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-800/80 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                      {item.type === 'experience' ? (
                        <Briefcase className="w-4 h-4" />
                      ) : (
                        <GraduationCap className="w-4 h-4" />
                      )}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-pink-400/90 pl-10.5">
                    {item.company}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-medium text-gray-400 sm:self-start pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1c1c] border border-gray-800 text-pink-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {item.description}
              </p>

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Key Highlights & Impact:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="pt-2 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#1a1a1a] text-gray-300 border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-3xl bg-[#141414] border border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-xl font-bold text-white">Interested in reviewing specific codebases or case studies?</h4>
            <p className="text-sm text-gray-400 mt-1">Explore my open-source repositories and live deployed applications.</p>
          </div>
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-pink-600 hover:bg-pink-500 shadow-lg shadow-pink-600/25 transition-all shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download CV Copy</span>
          </button>
        </div>

      </div>
    </div>
  );
};
