export interface Project {
  id: string;
  title: string;
  category: 'Web Apps' | 'AI & Machine Learning' | 'Full-Stack' | 'UI/UX Design' | 'DevOps & Cloud';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number;
    icon: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'experience' | 'education';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
}

export const PERSONAL_INFO = {
  name: 'Chemayek Abraham',
  firstName: 'Chemayek',
  lastName: 'Abraham',
  role: 'Software Developer, Media & Video Production Specialist & Computer Technician',
  tagline: 'Full-stack software engineering (welileapp.com), Drone & Video Cinematography (Adobe Suite, Filmora, Vegas Pro), photo retouching & computer hardware repair.',
  bio: "I'm Chemayek Abraham, a passionate Software Developer, Media & Video Production Specialist, and Computer Repair & Maintenance Expert from Kapchorwa Municipality, Uganda. With extensive hands-on experience developing web applications (including welileapp.com), capturing professional video & drone aerial cinematography, editing with all Adobe creative packages, Wondershare Filmora & Vegas Pro, managing computer lab infrastructure, and 5 years in computer hardware maintenance, I thrive on collaborative engineering and creative storytelling.",
  aboutStory: [
    "I am a versatile Software Developer, Computer Technician, and Media Creator from Kapchorwa Municipality, Uganda. Driven by a deep passion for technology and community empowerment, I believe in continuous learning, teamwork, and building practical digital solutions.",
    "My hands-on experience ranges from contributing to the development of welileapp.com and modern platforms, to capturing professional video, operating drones for aerial cinematography, editing across all Adobe Creative Cloud packages (Premiere Pro, Photoshop, After Effects, Lightroom), Filmora, and Vegas Pro, managing school computer laboratory infrastructure at Kween Modern High School, and 5 years of hardware repair & maintenance at the ICT Centre for Kapchorwa.",
    "I am married with a son and blessed that both my parents are still alive. I am fluent in Kupsabiny and English, with conversational knowledge of Kiswahili. I am always open to learning, pair programming, and collaborating with innovative teams locally and globally."
  ],
  avatar: '/images/profile.jpg',
  location: 'Kapchorwa Municipality, Uganda',
  hometown: 'Kapchorwa Municipality',
  maritalStatus: 'Married (with a son)',
  languages: [
    { name: 'Kupsabiny', level: 'Native / Fluent' },
    { name: 'English', level: 'Professional / Fluent' },
    { name: 'Kiswahili', level: 'Conversational / Basic' }
  ],
  email: 'chemayekabraham289@gmail.com',
  phone: '+256775077741',
  phoneFormatted: '+256 775 077 741',
  whatsapp: 'https://wa.me/256775077741',
  whatsappNumber: '+256775077741',
  github: 'https://github.com/ChemayekAbraham',
  linkedin: 'https://www.linkedin.com/in/chemayek-abraham-256984322/',
  stats: {
    yearsExperience: '5+ Years',
    projectsCompleted: '15+',
    repositories: '7+',
    satisfiedClients: '100%'
  },
  status: 'Open for remote/onsite developer, IT support & media collaborations'
};

export const PERSONAL_ATTRIBUTES = [
  'Ability to work effectively in a team, Good communication skills',
  'Ability to work under pressure, Integrity and honesty',
  'Ability to meet tight reporting schedule, result oriented, self-driven and committed towards goal achievement Problem solving, ability to work with minimum supervision',
  'Ability to maintain confidentiality'
];

export const PROJECTS: Project[] = [
  {
    id: 'welile-school-of-ai',
    title: 'Welile School of AI',
    category: 'AI & Machine Learning',
    description: 'An AI education and interactive learning platform empowering next-generation developers with modern curriculum, exercises, and AI mentoring tools.',
    longDescription: 'Welile School of AI is a comprehensive learning platform designed to make Artificial Intelligence education accessible across East Africa. It features interactive coding sandboxes, AI curriculum tracks, course progression tracking, and seamless Next.js performance.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'OpenAI API', 'Vercel'],
    githubUrl: 'https://github.com/ChemayekAbraham/WelileSchoolOFAi',
    liveUrl: 'https://welile-school-of-ai-jlpa.vercel.app',
    featured: true,
    metrics: 'Active AI Learning Platform',
    highlights: [
      'Interactive AI course curriculum and learning roadmap',
      'High-performance Next.js and TypeScript architecture',
      'Responsive dark-mode UI with smooth micro-interactions',
      'Deployed on Vercel with automated CI/CD pipeline'
    ]
  },
  {
    id: 'danii-media',
    title: 'Danii Media Creative Studio',
    category: 'UI/UX Design',
    description: 'High-performance digital agency platform showcasing video production, photography portfolios, dynamic showreels, and client bookings.',
    longDescription: 'A sleek, bespoke agency website engineered for Danii Media. It integrates video showreels, high-resolution media galleries with lazy loading, transparent service pricing tiers, and automated booking lead capture.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/ChemayekAbraham/daniimedia2',
    liveUrl: 'https://daniimedia2.vercel.app',
    featured: true,
    metrics: 'Creative Digital Studio',
    highlights: [
      'Sleek dark glassmorphism layout with smooth Framer Motion transitions',
      'Optimized media galleries with responsive lightbox viewer',
      'Interactive client inquiry and quotation calculator form',
      '100% Google Lighthouse performance score on desktop & mobile'
    ]
  },
  {
    id: 'ta-tracks',
    title: 'TA-TRACKS Music & Audio Distribution System',
    category: 'Full-Stack',
    description: 'Music and audio release distribution platform engineered to publish and synchronize audio tracks across streaming services including Audiomack, Apple Music, Spotify, and YouTube Music.',
    longDescription: 'TA-TRACKS is a music and audio distribution platform built for recording artists, producers, and labels. It streamlines audio upload pipelines, metadata tagging (ISRC/UPC, genre, cover art), catalog management, and release dispatching to top streaming platforms like Audiomack, Apple Music, Spotify, and digital audio stores.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    tags: ['JavaScript', 'React', 'Node.js', 'Express', 'Audio Processing', 'Audiomack API', 'REST API'],
    githubUrl: 'https://github.com/ChemayekAbraham/TA-TRACKS',
    featured: true,
    metrics: 'Music & Audio Distribution',
    highlights: [
      'Automated audio track ingestion pipeline with metadata encoding (ISRC/UPC, artist, genre)',
      'Multi-platform release dispatching across Audiomack, Apple Music, Spotify & YouTube Music',
      'RESTful backend architecture with secure audio asset storage and catalog management',
      'Responsive artist dashboard for release scheduling, cover artwork, and distribution status'
    ]
  },
  {
    id: 'tciap-ml',
    title: 'TCIAP Intelligent Analytics Platform',
    category: 'AI & Machine Learning',
    description: 'Python-driven predictive machine learning and traffic/climate data analytics engine for automated statistical forecasting.',
    longDescription: 'TCIAP (Traffic and Climate Intelligent Analytics Platform) utilizes Python machine learning models and data processing pipelines to analyze environmental sensor feeds and traffic patterns, delivering visual forecasts and analytical insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-Learn', 'Data Science'],
    githubUrl: 'https://github.com/ChemayekAbraham/TCIAP',
    featured: false,
    metrics: 'ML Analytics Pipeline',
    highlights: [
      'Automated data ingestion and cleaning pipeline in Python',
      'Predictive regression and classification modeling with Scikit-Learn',
      'Exploratory Data Analysis (EDA) visualizations and correlations',
      'Modular Python codebase ready for API service deployment'
    ]
  },
  {
    id: 'elgon-radio',
    title: 'Elgon Radio Streaming Web App',
    category: 'Web Apps',
    description: 'Online live radio broadcast player and regional media hub serving streaming audio, program schedules, and interactive listener tools.',
    longDescription: 'Elgon Radio is an audio streaming web application built for the Mount Elgon regional broadcast audience. It provides instant low-latency stream playback, show archives, now-playing metadata, and responsive player controls.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    tags: ['JavaScript', 'React', 'HTML5 Audio', 'Tailwind CSS', 'Web Media'],
    githubUrl: 'https://github.com/ChemayekAbraham/elgonradio',
    featured: false,
    metrics: 'Live Audio Streaming',
    highlights: [
      'Persistent background audio stream player with volume & channel toggles',
      'Program schedule calendar with upcoming show notifications',
      'Mobile-first responsive design tailored for low-bandwidth streams',
      'Community shout-out and listener engagement interface'
    ]
  },
  {
    id: 'clerk-docs',
    title: 'Clerk Identity & Auth Integration Suite',
    category: 'DevOps & Cloud',
    description: 'Secure authentication workflows, user management architectures, and identity documentation for modern cloud applications.',
    longDescription: 'Documentation and reference implementation architectures exploring Clerk, OAuth2, session persistence, multi-factor authentication, and role-based access control (RBAC) in Next.js applications.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'Clerk Auth', 'NextAuth', 'Security', 'Web Tokens'],
    githubUrl: 'https://github.com/ChemayekAbraham/clerk-docs',
    featured: false,
    metrics: 'Auth Architecture',
    highlights: [
      'Multi-provider OAuth (Google, GitHub, Apple) setup templates',
      'Edge middleware authentication and protected API route handlers',
      'User session state synchronization and token refreshing',
      'Comprehensive developer guides and integration patterns'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Software & Web Engineering',
    icon: 'fa-solid fa-code',
    description: 'Structured programming, Object-Oriented development (Java/C/Python), Web Technologies & modern frameworks.',
    skills: [
      { name: 'TypeScript / JavaScript', level: 95, icon: 'fa-brands fa-js', description: 'Type-safe scalable architectures & DOM manipulation' },
      { name: 'Next.js / React', level: 95, icon: 'fa-brands fa-react', description: 'Modern web apps (welileapp.com) & component architectures' },
      { name: 'Object-Oriented Programming (Java / OOP)', level: 88, icon: 'fa-brands fa-java', description: 'Classes, inheritance, polymorphism & modular software design' },
      { name: 'Structured Programming (C / Python)', level: 90, icon: 'fa-brands fa-python', description: 'Algorithms, logic structures, syntax & problem solving' },
      { name: 'Web Architecture & API Integration', level: 94, icon: 'fa-solid fa-network-wired', description: 'RESTful API consumption, state caching & responsive web systems' },
      { name: 'HTML5, CSS3 & Tailwind', level: 98, icon: 'fa-brands fa-html5', description: 'Semantic, responsive & accessible layout engineering' }
    ]
  },
  {
    title: 'Database & Systems Architecture',
    icon: 'fa-solid fa-database',
    description: 'Relational database design, SQL querying, Systems Analysis & Design (SDLC), and Information Systems.',
    skills: [
      { name: 'Database Design & SQL', level: 92, icon: 'fa-solid fa-database', description: 'Relational schema design, normalization, joins & CRUD queries' },
      { name: 'Systems Analysis & Design', level: 90, icon: 'fa-solid fa-diagram-project', description: 'SDLC methodologies, architectural modeling & requirements specification' },
      { name: 'Information Systems Management', level: 90, icon: 'fa-solid fa-server', description: 'Enterprise data flows, decision support & IT infrastructure planning' },
      { name: 'Operating Systems (Windows & Linux)', level: 94, icon: 'fa-brands fa-linux', description: 'CLI commands, file systems, user privileges & kernel management' },
      { name: 'PostgreSQL, MySQL & Supabase', level: 88, icon: 'fa-solid fa-table', description: 'Production database hosting, migrations & indexing' }
    ]
  },
  {
    title: 'Hardware, Repair & Lab Admin',
    icon: 'fa-solid fa-screwdriver-wrench',
    description: '5+ years hands-on computer repair, hardware diagnostics, lab administration, and OS deployments.',
    skills: [
      { name: 'Computer Hardware Repair', level: 98, icon: 'fa-solid fa-laptop-medical', description: 'Board-level diagnosis, power supplies, motherboard & RAM/storage replacements' },
      { name: 'Computer Laboratory Administration', level: 95, icon: 'fa-solid fa-network-wired', description: 'Workstation deployment, software rollouts & school lab management' },
      { name: 'Operating System Deployment', level: 96, icon: 'fa-brands fa-windows', description: 'Clean installations, driver configurations, cloning & malware recovery' },
      { name: 'Remote Technical Support', level: 92, icon: 'fa-solid fa-headset', description: 'Remote troubleshooting, system monitoring & preventive maintenance' },
      { name: 'Office Software & Productivity', level: 96, icon: 'fa-solid fa-file-lines', description: 'Office productivity suites, administrative tools & documentation' }
    ]
  },
  {
    title: 'Networking & Cybersecurity',
    icon: 'fa-solid fa-shield-halved',
    description: 'Cisco networking, OSI model, network administration, router/switch configurations, and security fundamentals.',
    skills: [
      { name: 'Introduction to Networks (Cisco / OSI)', level: 90, icon: 'fa-solid fa-network-wired', description: 'OSI 7-layer model, IP addressing, subnetting & data communication' },
      { name: 'Network Administration', level: 88, icon: 'fa-solid fa-server', description: 'Router & switch configurations, LAN cabling, user accounts & firewalls' },
      { name: 'Cybersecurity Fundamentals', level: 85, icon: 'fa-solid fa-shield-halved', description: 'Data protection, vulnerability assessment, threat mitigation & policies' },
      { name: 'Authentication & Access Control', level: 92, icon: 'fa-solid fa-lock', description: 'OAuth2, token authorization, RBAC & secure session management' }
    ]
  },
  {
    title: 'Media, Design & Cinematography',
    icon: 'fa-solid fa-photo-film',
    description: 'Drone piloting, professional video shooting, editing across all Adobe packages, Filmora, Vegas Pro, photo retouching & graphic design.',
    skills: [
      { name: 'Video Editing (Adobe Suite, Filmora, Vegas Pro)', level: 96, icon: 'fa-solid fa-film', description: 'Premiere Pro, After Effects, Wondershare Filmora & Vegas Pro editing workflows' },
      { name: 'Drone Piloting & Aerial Cinematography', level: 92, icon: 'fa-solid fa-plane-up', description: 'Drone flight control, 4K aerial footage capture, smooth flight tracking & landscape framing' },
      { name: 'Video Shooting & Camera Operation', level: 94, icon: 'fa-solid fa-video', description: 'Professional video capture, composition, multi-angle setups, lighting & field audio' },
      { name: 'Photo Editing & Adobe Creative Cloud', level: 98, icon: 'fa-solid fa-image', description: 'Photoshop, Lightroom, Illustrator, advanced skin retouching & dynamic color grading' },
      { name: 'Graphic Design, Stationery & Branding', level: 95, icon: 'fa-solid fa-palette', description: 'Commercial branding, flyers, business cards, typography & print-ready prep' },
      { name: 'Broadcast Journalism & Audio-Visual Production', level: 90, icon: 'fa-solid fa-tower-broadcast', description: 'Radio/TV production, scriptwriting, voiceover & multimedia news packages' },
      { name: 'Media Ethics, Law & Digital Strategy', level: 90, icon: 'fa-solid fa-scale-balanced', description: 'Ugandan media legal frameworks, copyright, ethical journalism & social channels' },
      { name: 'AI Productivity & Creative Workflow Tools', level: 95, icon: 'fa-solid fa-microchip', description: 'OpenAI API, ChatGPT, Claude, Cursor AI & creative prompt engineering' }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Development',
    subtitle: 'Scalable & Modern Web Applications',
    description: 'End-to-end development of dynamic, lightning-fast web applications using Next.js, React, TypeScript, and Node.js. Built with clean architecture and responsive design.',
    icon: 'fa-solid fa-laptop-code',
    features: [
      'Modern Next.js & React SPA / SSR Architecture',
      'TypeScript type-safe backend & frontend integration',
      'Tailwind CSS customized design systems',
      'Database integration (PostgreSQL, Supabase, MongoDB)',
      'SEO optimization and top Lighthouse web vitals'
    ]
  },
  {
    id: 'media-production',
    title: 'Drone, Video Production & Editing',
    subtitle: 'Video Shooting, Aerial Drones & Multi-Tool Editing',
    description: 'High-end drone aerial cinematography, camera video shooting, professional photo retouching, and video editing across all Adobe Creative packages, Wondershare Filmora, and Vegas Pro.',
    icon: 'fa-solid fa-photo-film',
    features: [
      'Drone Piloting & 4K Aerial Videography / Photography',
      'Video Editing (Adobe Premiere Pro, After Effects, Filmora, Vegas Pro)',
      'Professional Camera Operation, Video Shooting & Lighting',
      'High-End Photo Retouching & Color Grading (Photoshop, Lightroom)',
      'Graphic Design, Brand Identity & Commercial Stationery Printing'
    ]
  },
  {
    id: 'hardware-repair-it-support',
    title: 'Computer Repair, Lab Admin & IT Support',
    subtitle: '5+ Years Hardware Diagnostics, Repair & Maintenance',
    description: 'Expert computer hardware diagnostics, component replacements, operating system deployments, computer laboratory infrastructure administration, and remote technical support.',
    icon: 'fa-solid fa-screwdriver-wrench',
    features: [
      'Board-level diagnostics, component troubleshooting & power repair',
      'Computer lab administration, workstation rollout & school IT management',
      'Clean OS installations, driver configuration, cloning & malware recovery',
      'Preventive hardware maintenance & remote technical troubleshooting',
      'Component upgrades (Motherboards, RAM, NVMe/SSD, cooling systems)'
    ]
  },
  {
    id: 'cloud-backend',
    title: 'Cloud Architecture & Backend APIs',
    subtitle: 'Resilient Microservices & API Engineering',
    description: 'Engineering robust RESTful APIs, serverless microservices, and secure authentication systems built for reliability, data integrity, and high availability.',
    icon: 'fa-solid fa-cloud-arrow-up',
    features: [
      'High-throughput Express / Node.js & Python backend services',
      'Authentication & session management (Clerk, OAuth, JWT)',
      'Serverless deployments on Vercel and Cloudflare',
      'Database optimization, schema migrations, and caching',
      'API rate-limiting, error logging, and monitoring'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Frontend Engineering',
    subtitle: 'Visually Captivating & Intuitive Interfaces',
    description: 'Crafting pixel-perfect, aesthetic interfaces with dark glassmorphism, micro-animations, and intuitive user experiences that captivate users from first glance.',
    icon: 'fa-solid fa-palette',
    features: [
      'Framer Motion smooth page transitions and micro-interactions',
      'Modern dark-theme glassmorphism aesthetics',
      'Responsive design across mobile, tablet, and widescreen',
      'Interactive dashboards, data visualization charts, and widgets',
      'Accessibility (a11y) and keyboard navigation compliance'
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software & Logistics Systems',
    subtitle: 'Tailored Digital Solutions For Operations',
    description: 'Custom software applications engineered for unique organizational workflows — from logistics fleet management (TA-TRACKS) to online streaming broadcasting (Elgon Radio).',
    icon: 'fa-solid fa-cubes',
    features: [
      'Fleet & cargo tracking systems (TA-TRACKS)',
      'Real-time audio streaming players (Elgon Radio)',
      'Custom management dashboards and metrics tracking',
      'Third-party API and hardware sensor integrations',
      'End-to-end maintenance and feature iteration'
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  // --- Professional Experience (Chronological: latest to earliest) ---
  {
    id: 'exp-welile-dev',
    period: '2026 - Present',
    role: 'Full-Stack Software Developer & Contributor',
    company: 'Welile Technologies (welileapp.com)',
    location: 'Kapchorwa / Remote',
    type: 'experience',
    description: 'Participated actively in the development of the welileapp.com application and modern web platforms.',
    achievements: [
      'Contributed to core application development for welileapp.com and web platforms',
      'Engineered interactive, responsive UI components using Next.js, React, TypeScript, and Tailwind CSS',
      'Collaborated on RESTful API endpoint integration, user authentication, and mobile responsiveness',
      'Assisted in testing, debugging, and continuous deployment workflows on Vercel'
    ],
    technologies: ['welileapp.com', 'TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'REST APIs', 'Vercel']
  },
  {
    id: 'exp-kween-lab',
    period: '2024 - 2026',
    role: 'Computer Laboratory Technician (Remote)',
    company: 'Kween Modern High School',
    location: 'Kween / Kapchorwa, Uganda',
    type: 'experience',
    description: 'Providing remote technical administration, system configuration, maintenance, and software support for the school computer laboratory.',
    achievements: [
      'Configured and managed computer lab workstations, educational software packages, and digital resources',
      'Diagnosed and resolved hardware/software system errors remotely, minimizing downtime for student practicals',
      'Established scheduled operating system maintenance, driver updates, and data security procedures'
    ],
    technologies: ['Lab Administration', 'OS Deployment', 'Hardware Diagnostics', 'Remote Support', 'Network Setup']
  },
  {
    id: 'exp-photoshop-tutor',
    period: '2024 - 2025',
    role: 'Media Production, Video Editing & Design Tutor',
    company: 'Kapchemweny Stationery',
    location: 'Kapchorwa, Uganda',
    type: 'experience',
    description: 'Conducted hands-on training in video shooting, drone photography, photo editing across all Adobe packages, Filmora, Vegas Pro, and graphic design.',
    achievements: [
      'Tutored students and staff in photo & video editing across all Adobe packages (Photoshop, Premiere Pro), Wondershare Filmora, and Vegas Pro',
      'Shot video footage and operated drones for aerial photography and commercial media packages',
      'Designed commercial stationery assets, marketing flyers, business cards, and digital branding assets',
      'Trained learners in print-ready exporting, resolution standards, multi-track timelines, and creative design principles'
    ],
    technologies: ['Adobe Creative Suite', 'Premiere Pro', 'Photoshop', 'Filmora', 'Vegas Pro', 'Drone Videography', 'Graphic Design']
  },
  {
    id: 'exp-ict-centre',
    period: '2019 - 2023',
    role: 'Computer Repair & Maintenance Specialist (Now Remote)',
    company: 'ICT Centre for Kapchorwa',
    location: 'Kapchorwa, Uganda',
    type: 'experience',
    description: 'Delivered 5 years of dedicated hardware diagnostics, board-level PC troubleshooting, component repairs, and IT infrastructure maintenance.',
    achievements: [
      'Repaired and serviced hundreds of desktop PCs, laptops, power supplies, motherboards, and storage drives',
      'Handled OS installations, malware removal, system cloning, and preventive hardware cleaning',
      'Configured local area network (LAN) cabling, routers, switches, and peripheral printer connections',
      'Continued providing remote consultation and IT troubleshooting support for institutional clients'
    ],
    technologies: ['Computer Hardware Repair', 'Component Diagnostics', 'OS Installation', 'LAN Networking', 'PC Maintenance']
  },

  // --- Education & Academic Background (Chronological: latest to earliest) ---
  {
    id: 'edu-diploma',
    period: '2024 - 2026',
    role: 'Diploma in Information Systems & Technology',
    company: 'Nkumba University',
    location: 'Uganda',
    type: 'education',
    description: 'Higher education diploma program covering enterprise information systems, database administration, network engineering, and systems analysis.',
    achievements: [
      'Specialized in Database Administration, Systems Analysis, and Enterprise IT Infrastructure',
      'Implemented practical networked systems, system design specifications, and database architectures',
      'Graduated with strong technical proficiency in software tools, data storage, and systems administration'
    ],
    technologies: ['Information Systems', 'Database Systems', 'Systems Analysis', 'IT Infrastructure', 'Networking']
  },
  {
    id: 'edu-journalism',
    period: '2022 - 2024',
    role: 'Certificate in Journalism & Mass Communication',
    company: 'YMCA Comprehensive Institute',
    location: 'Uganda',
    type: 'education',
    description: 'Foundational certification in digital journalism, mass communication, broadcast media, and professional public relations.',
    achievements: [
      'Trained in public reporting, broadcast media production, and press communications',
      'Mastered multimedia storytelling, clear stakeholder communication, and audio/video production',
      'Applied effective communication techniques to software product documentation and media systems'
    ],
    technologies: ['Broadcast Journalism', 'Photojournalism', 'Public Relations', 'Media Production', 'Technical Writing']
  },
  {
    id: 'edu-uict-cs',
    period: '2022 - 2024',
    role: 'Certificate in Computer Science (Certification Pending)',
    company: 'Uganda Institute of Information & Communications Technology (UICT)',
    location: 'Kampala, Uganda',
    type: 'education',
    description: 'Two-year certificate program in Computer Science covering computing fundamentals, programming, algorithms, and information technology systems.',
    achievements: [
      'Completed coursework in computer science principles, programming algorithms, and IT systems',
      'Conducted practical lab assessments in programming logic, web technologies, and database design',
      'Built strong theoretical and practical problem-solving foundation in software systems'
    ],
    technologies: ['Computer Science', 'Algorithms', 'Data Structures', 'Programming', 'UICT']
  },
  {
    id: 'edu-uce-sec',
    period: '2017 - 2020',
    role: 'Uganda Certificate of Education (Senior Four / UCE)',
    company: 'Kapchorwa Town View Secondary School',
    location: 'Kapchorwa, Uganda',
    type: 'education',
    description: 'Senior One to Senior Four secondary education, graduating with the Uganda Certificate of Education (UCE).',
    achievements: [
      'Completed Senior One through Senior Four secondary curriculum',
      'Attained Uganda Certificate of Education (UCE) certification',
      'Built strong academic foundation in English, Mathematics, Sciences, and Computing'
    ],
    technologies: ['Uganda Certificate of Education', 'Senior Four', 'Kapchorwa Town View']
  },
  {
    id: 'edu-primary',
    period: '2010 - 2016',
    role: 'Primary Leaving Examination (PLE)',
    company: 'Alpha Nursery & Primary School',
    location: 'Uganda',
    type: 'education',
    description: 'Nursery to Primary Seven foundational education, successfully completing Primary Leaving Examinations (PLE).',
    achievements: [
      'Completed full primary cycle from Nursery through Primary Seven',
      'Successfully sat and passed Primary Leaving Examinations (PLE)',
      'Built foundational communication, arithmetic, and problem-solving skills'
    ],
    technologies: ['Primary Education', 'PLE', 'Alpha Nursery & Primary']
  }
];

export interface Referee {
  name: string;
  role: string;
  organization: string;
  phone: string;
  phoneFormatted: string;
}

export const REFERENCES: Referee[] = [
  {
    name: 'Chemutai Musau Gilbert',
    role: 'Director',
    organization: 'Kween Modern High School',
    phone: '+256772426800',
    phoneFormatted: '0772 426 800'
  },
  {
    name: 'Victor Mzee',
    role: 'CEO',
    organization: 'ICT Centre',
    phone: '+256779977942',
    phoneFormatted: '0779 977 942'
  },
  {
    name: 'Aggrey Chebet',
    role: 'Manager',
    organization: 'Kapchemweny Stationery',
    phone: '+256778301998',
    phoneFormatted: '0778 301 998'
  },
  {
    name: 'Josh Wanda',
    role: 'Head Of ICT',
    organization: 'Welile Technologies Limited',
    phone: '+256704825473',
    phoneFormatted: '0704 825 473'
  }
];
