import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Download, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  UserCheck,
  Users,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EXPERIENCE_ITEMS, PERSONAL_INFO, PERSONAL_ATTRIBUTES, REFERENCES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredItems = EXPERIENCE_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  const handleDownloadPDF = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#06b6d4', '#ffffff', '#60a5fa']
    });

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to open and print your PDF resume.');
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Chemayek Abraham - Curriculum Vitae</title>
        <style>
          @page {
            size: A4;
            margin: 12mm 15mm;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: "Times New Roman", Times, Georgia, serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
            color: #111111;
            line-height: 1.35;
            background: #ffffff;
            font-size: 11.5pt;
          }
          .cv-header {
            text-align: center;
            margin-bottom: 14px;
          }
          .cv-title {
            font-size: 19pt;
            font-weight: 900;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-bottom: 3px;
          }
          .cv-name {
            font-size: 13.5pt;
            font-weight: 800;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            margin-bottom: 3px;
          }
          .cv-contact {
            font-size: 10.5pt;
            color: #222222;
            line-height: 1.4;
          }
          .cv-contact a {
            color: #111111;
            text-decoration: underline;
          }
          .section {
            margin-bottom: 12px;
            page-break-inside: avoid;
          }
          .section-title {
            font-size: 11.5pt;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1.5px solid #000000;
            padding-bottom: 2px;
            margin-bottom: 6px;
          }
          
          /* Tables */
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 10.5pt;
          }
          
          /* Personal Info Table */
          .info-table td {
            padding: 2.5px 4px;
            vertical-align: top;
          }
          .info-label {
            font-weight: 700;
            width: 22%;
          }
          .info-val {
            width: 78%;
          }

          /* Bullet List */
          .bullet-list {
            list-style: none;
            padding-left: 0;
            font-size: 10.5pt;
          }
          .bullet-list li {
            position: relative;
            padding-left: 18px;
            margin-bottom: 4px;
            line-height: 1.35;
          }
          .bullet-list li::before {
            content: "•";
            position: absolute;
            left: 4px;
            font-size: 13pt;
            line-height: 1;
          }

          /* Education & Experience Tables */
          .timeline-table td {
            padding: 4px 4px 6px 4px;
            vertical-align: top;
          }
          .col-year {
            width: 22%;
            font-weight: 800;
            font-size: 10.5pt;
            color: #000000;
            white-space: nowrap;
          }
          .col-content {
            width: 78%;
          }
          .inst-name {
            font-size: 11pt;
            font-weight: 800;
            color: #000000;
          }
          .inst-award {
            font-size: 10.5pt;
            font-weight: 600;
            color: #222222;
            margin-top: 1px;
          }
          .role-desc {
            font-size: 10pt;
            color: #333333;
            margin: 2px 0 3px 0;
            line-height: 1.35;
          }
          .sub-bullets {
            list-style: none;
            padding-left: 0;
            margin-top: 2px;
          }
          .sub-bullets li {
            position: relative;
            padding-left: 14px;
            font-size: 10pt;
            color: #222222;
            margin-bottom: 2px;
            line-height: 1.3;
          }
          .sub-bullets li::before {
            content: "-";
            position: absolute;
            left: 2px;
            font-weight: bold;
          }

          /* Competencies Table */
          .skills-table td {
            padding: 3px 4px;
            vertical-align: top;
            font-size: 10.5pt;
          }
          .skill-label {
            font-weight: 800;
            width: 32%;
            color: #000000;
          }
          .skill-val {
            width: 68%;
            color: #222222;
          }

          .ref-table td {
            padding: 4px;
            font-size: 10.5pt;
            line-height: 1.4;
            vertical-align: top;
          }

          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        </style>
      </head>
      <body>
        <!-- Header -->
        <div class="cv-header">
          <div class="cv-title">CURRICULUM VITAE</div>
          <div class="cv-name">${PERSONAL_INFO.name}</div>
          <div class="cv-contact">
            Contact: ${PERSONAL_INFO.phoneFormatted} | E-mail: ${PERSONAL_INFO.email}
          </div>
          <div class="cv-contact">
            Location: Kapchorwa Municipality, Uganda | LinkedIn: https://www.linkedin.com/in/chemayek-abraham-256984322/
          </div>
        </div>

        <!-- Personal Information Section (Table Format) -->
        <div class="section">
          <div class="section-title">PERSONAL INFORMATION</div>
          <table class="info-table">
            <tr>
              <td class="info-label">Sex:</td>
              <td class="info-val">Male</td>
            </tr>
            <tr>
              <td class="info-label">Marital Status:</td>
              <td class="info-val">Married (with a son)</td>
            </tr>
            <tr>
              <td class="info-label">Nationality:</td>
              <td class="info-val">Ugandan</td>
            </tr>
            <tr>
              <td class="info-label">Home District:</td>
              <td class="info-val">Kapchorwa Municipality</td>
            </tr>
            <tr>
              <td class="info-label">Languages:</td>
              <td class="info-val">Kupsabiny (Native/Fluent), English (Fluent), and Kiswahili (Conversational)</td>
            </tr>
            <tr>
              <td class="info-label">Family Background:</td>
              <td class="info-val">Both parents are alive</td>
            </tr>
          </table>
        </div>

        <!-- Personal Profile -->
        <div class="section">
          <div class="section-title">PERSONAL PROFILE</div>
          <ul class="bullet-list">
            <li>Ability to work effectively in a team, Good communication skills</li>
            <li>Ability to work under pressure, Integrity and honesty</li>
            <li>Ability to meet tight reporting schedule, result oriented, self-driven and committed towards goal achievement Problem solving, ability to work with minimum supervision</li>
            <li>Ability to maintain confidentiality</li>
          </ul>
        </div>

        <!-- Educational Background Section (Table Format) -->
        <div class="section">
          <div class="section-title">EDUCATIONAL BACKGROUND</div>
          <table class="timeline-table">
            <tr>
              <td class="col-year">2024 - 2026</td>
              <td class="col-content">
                <div class="inst-name">Nkumba University</div>
                <div class="inst-award">Diploma in Information Systems & Technology</div>
              </td>
            </tr>
            <tr>
              <td class="col-year">2022 - 2024</td>
              <td class="col-content">
                <div class="inst-name">YMCA Comprehensive Institute</div>
                <div class="inst-award">Certificate in Journalism & Mass Communication</div>
              </td>
            </tr>
            <tr>
              <td class="col-year">2022 - 2024</td>
              <td class="col-content">
                <div class="inst-name">Uganda Institute of Information & Communications Technology (UICT)</div>
                <div class="inst-award">Certificate in Computer Science (Certification Pending)</div>
              </td>
            </tr>
            <tr>
              <td class="col-year">Completed</td>
              <td class="col-content">
                <div class="inst-name">Kapchorwa Town View Secondary School</div>
                <div class="inst-award">Uganda Certificate of Education (Senior Four / UCE)</div>
              </td>
            </tr>
          </table>
        </div>

        <!-- Work & Professional Experience (Table Format) -->
        <div class="section">
          <div class="section-title">WORK & PROFESSIONAL EXPERIENCE</div>
          <table class="timeline-table">
            <tr>
              <td class="col-year">2026 - Present</td>
              <td class="col-content">
                <div class="inst-name">Welile Technologies (welileapp.com)</div>
                <div class="inst-award">Full-Stack Software Developer & Contributor (Remote / Kapchorwa)</div>
                <ul class="sub-bullets">
                  <li>Actively participating in core application development for welileapp.com and web platforms.</li>
                  <li>Engineering interactive, responsive UI components using Next.js, React, TypeScript, and Tailwind CSS.</li>
                  <li>Collaborating on RESTful API endpoint integration, user authentication, and Vercel deployments.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="col-year">2024 - 2026</td>
              <td class="col-content">
                <div class="inst-name">Kween Modern High School</div>
                <div class="inst-award">Computer Laboratory Technician (Remote)</div>
                <ul class="sub-bullets">
                  <li>Administering computer laboratory workstations, software environments, and peripherals remotely.</li>
                  <li>Diagnosing and troubleshooting hardware/software system errors remotely, minimizing downtime.</li>
                  <li>Managing scheduled operating system maintenance, driver updates, and data security procedures.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="col-year">2024 - 2025</td>
              <td class="col-content">
                <div class="inst-name">Kapchemweny Stationery, Kapchorwa</div>
                <div class="inst-award">Media Production, Video Editing & Design Tutor</div>
                <ul class="sub-bullets">
                  <li>Instructed students in video editing across all Adobe packages (Premiere Pro, Photoshop), Wondershare Filmora, and Vegas Pro.</li>
                  <li>Operated camera equipment and piloted drones for 4K aerial videography and commercial media packages.</li>
                  <li>Designed commercial stationery assets, flyers, business cards, and digital marketing materials.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="col-year">2019 - 2023<br><span style="font-size: 9pt; font-weight: normal; color: #444;">(5 Years)</span></td>
              <td class="col-content">
                <div class="inst-name">ICT Centre for Kapchorwa</div>
                <div class="inst-award">Computer Repair & Maintenance Specialist (Now Remote)</div>
                <ul class="sub-bullets">
                  <li>Diagnosed and repaired hundreds of desktop PCs, laptops, power modules, motherboards, and storage drives.</li>
                  <li>Handled clean OS installations, driver configurations, system cloning, malware removal, and preventive maintenance.</li>
                  <li>Configured local area network (LAN) cabling, routers, switches, and institutional printer peripherals.</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>

        <!-- Technical & Creative Competencies (Table Format) -->
        <div class="section">
          <div class="section-title">KEY TECHNICAL & CREATIVE COMPETENCIES</div>
          <table class="skills-table">
            <tr>
              <td class="skill-label">Software & Web Development:</td>
              <td class="skill-val">TypeScript, Next.js, React, JavaScript (ES6+), Tailwind CSS, REST APIs, Git/GitHub, welileapp.com</td>
            </tr>
            <tr>
              <td class="skill-label">Drone, Video & Creative Editing:</td>
              <td class="skill-val">Drone Piloting & Aerial Cinematography, Camera Shooting, Adobe Premiere Pro, After Effects, Wondershare Filmora, Vegas Pro, Photoshop, Lightroom, Illustrator</td>
            </tr>
            <tr>
              <td class="skill-label">Hardware, Repair & Lab Admin:</td>
              <td class="skill-val">Computer Hardware Diagnostics, Board-Level Repair, OS Deployment (Windows/Linux), Lab Administration, LAN Cabling & Setup</td>
            </tr>
            <tr>
              <td class="skill-label">AI & Modern Productivity Tools:</td>
              <td class="skill-val">OpenAI API, ChatGPT, Claude, Cursor AI, VS Code, Technical Documentation, Pair Programming</td>
            </tr>
          </table>
        </div>

        <!-- Referees Section (Table Format) -->
        <div class="section">
          <div class="section-title">REFEREES</div>
          <table class="timeline-table">
            <tr>
              <td style="width: 50%; padding: 4px 10px 4px 0; vertical-align: top;">
                <div class="inst-name">1. Chemutai Musau Gilbert</div>
                <div class="inst-award">Director, Kween Modern High School</div>
                <div class="role-desc">Tel: <strong>0772 426 800</strong></div>
              </td>
              <td style="width: 50%; padding: 4px 0 4px 10px; vertical-align: top;">
                <div class="inst-name">2. Victor Mzee</div>
                <div class="inst-award">CEO, ICT Centre</div>
                <div class="role-desc">Tel: <strong>0779 977 942</strong></div>
              </td>
            </tr>
            <tr>
              <td style="width: 50%; padding: 6px 10px 4px 0; vertical-align: top;">
                <div class="inst-name">3. Aggrey Chebet</div>
                <div class="inst-award">Manager, Kapchemweny Stationery</div>
                <div class="role-desc">Tel: <strong>0778 301 998</strong></div>
              </td>
              <td style="width: 50%; padding: 6px 0 4px 10px; vertical-align: top;">
                <div class="inst-name">4. Josh Wanda</div>
                <div class="inst-award">Head Of ICT, Well Technologies Limited</div>
                <div class="role-desc">Tel: <strong>0704 825 473</strong></div>
              </td>
            </tr>
          </table>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="pt-20 pb-16 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="Experience & Credentials"
          title="Real-World Problem"
          highlightedText="Solutions Experience"
          subtitle="A comprehensive timeline of my engineering roles, product deployments, academic background, and professional achievements."
        />

        {/* Download CV Bar & Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 my-10 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 shadow-sm">
          {/* Tab buttons */}
          <div className="flex items-center p-1.5 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white'
              }`}
            >
              All Credentials
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>

          {/* Download button */}
          <button
            onClick={handleDownloadPDF}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>{downloadSuccess ? 'PDF Ready to Print / Save!' : 'Download PDF Resume'}</span>
          </button>
        </div>

        {/* Personal Profile & Core Attributes Card */}
        <div className="mb-10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 space-y-4 shadow-sm">
          <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200 dark:border-gray-800/80">
            <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <UserCheck className="w-4 h-4" />
            </span>
            <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">Personal Profile & Professional Strengths</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
            {PERSONAL_ATTRIBUTES.map((attr, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800/60">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{attr}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-6 sm:space-y-8 mt-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-500/10 space-y-5 shadow-xs"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 dark:border-gray-800/80 pb-4 sm:pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      {item.type === 'experience' ? (
                        <Briefcase className="w-4 h-4" />
                      ) : (
                        <GraduationCap className="w-4 h-4" />
                      )}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400/90 pl-10.5">
                    {item.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 sm:self-start pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#1c1c1c] border border-blue-200 dark:border-gray-800 text-blue-700 dark:text-blue-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-600 dark:text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-gray-500" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400 font-semibold">
                    Key Highlights & Impact:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
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
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Professional & Technical Referees Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800/80">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Users className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Professional & Academic Referees
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400">
                  Direct contacts for verified work, technical support, leadership, and institutional experience.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {REFERENCES.map((ref, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gray-50/70 dark:bg-[#181818] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/40 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {ref.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                      {ref.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-400 font-medium">
                    {ref.organization}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-200 dark:border-gray-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-gray-400">Contact Telephone:</span>
                  <a
                    href={`tel:${ref.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{ref.phoneFormatted}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-8 rounded-3xl bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Interested in reviewing specific codebases or case studies?</h4>
            <p className="text-sm text-slate-600 dark:text-gray-400 mt-1">Explore my open-source repositories and live deployed applications.</p>
          </div>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
};
