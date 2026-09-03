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
  role: 'Full-Stack Software Engineer & AI Developer',
  tagline: 'Crafting scalable web architectures, intelligent AI systems, and high-performance digital experiences.',
  bio: "I'm Chemayek Abraham, a passionate Full-Stack Software Engineer and AI Systems Developer based in Kampala, Uganda. With deep expertise across TypeScript, Next.js, React, Node.js, and Python-driven machine learning, I specialize in architecting responsive web applications, high-performance marketplaces, and AI-powered solutions that solve real-world problems.",
  aboutStory: [
    "I am a results-oriented Software Engineer driven by the ambition to bridge cutting-edge technology and human-centric design across Africa and global markets.",
    "My journey spans building scalable platforms such as Welile School of AI, the E-katale digital agricultural marketplace, media production suites like Danii Media, fleet tracking systems (TA-TRACKS), and Python intelligent analytics engines (TCIAP).",
    "I thrive at the intersection of modern full-stack engineering and artificial intelligence — designing clean, maintainable codebases with intuitive user experiences."
  ],
  avatar: 'https://avatars.githubusercontent.com/u/187075270?v=4',
  location: 'Kampala, Uganda',
  email: 'abrahamchemayek@gmail.com',
  phone: '+256 700 000 000',
  github: 'https://github.com/ChemayekAbraham',
  linkedin: 'https://linkedin.com/in/chemayek-abraham',
  twitter: 'https://x.com/ChemayekAbraham',
  stats: {
    yearsExperience: '3+',
    projectsCompleted: '15+',
    repositories: '7+',
    satisfiedClients: '100%'
  },
  status: 'Available for freelance & full-time opportunities'
};

export const PROJECTS: Project[] = [
  {
    id: 'welile-school-of-ai',
    title: 'Welile School of AI',
    category: 'AI & Machine Learning',
    description: 'An AI education and interactive learning platform empowering next-generation developers with modern curriculum, exercises, and AI mentoring tools.',
    longDescription: 'Welile School of AI is a comprehensive learning platform designed to make Artificial Intelligence education accessible across East Africa. It features interactive coding sandboxes, AI curriculum tracks, course progression tracking, and seamless Next.js performance.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
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
    id: 'e-katale-final',
    title: 'E-katale Marketplace',
    category: 'Web Apps',
    description: 'A modern Ugandan digital marketplace and e-commerce platform connecting agricultural farmers, suppliers, and urban consumers.',
    longDescription: 'E-katale is a full-featured digital marketplace built to streamline agricultural trade and consumer grocery supply in Uganda. It offers categorized product catalogs, dynamic cart operations, seller store management, and mobile-friendly responsive checkout.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Tailwind CSS', 'E-Commerce'],
    githubUrl: 'https://github.com/ChemayekAbraham/E-kataleFinal',
    liveUrl: 'https://e-katale-final.vercel.app',
    featured: true,
    metrics: 'Full-Stack E-Commerce Engine',
    highlights: [
      'Multi-vendor product showcase with search and category filtering',
      'Persistent cart state and real-time checkout calculations',
      'Optimized for fast mobile loading in East African networks',
      'Robust component architecture with reusable UI system'
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
    title: 'TA-TRACKS Fleet & Logistics System',
    category: 'Full-Stack',
    description: 'Smart vehicle tracking, transit route coordination, and freight dispatch management dashboard for modern transportation operators.',
    longDescription: 'TA-TRACKS is an enterprise-grade transit and fleet management dashboard designed to provide real-time visibility into vehicle locations, driver schedules, fuel monitoring, and maintenance logs.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    tags: ['JavaScript', 'React', 'Node.js', 'Express', 'Maps API', 'REST API'],
    githubUrl: 'https://github.com/ChemayekAbraham/TA-TRACKS',
    featured: false,
    metrics: 'Fleet Logistics Dashboard',
    highlights: [
      'Real-time vehicle status indicators and route mapping simulation',
      'Driver assignment, cargo manifest, and dispatch management',
      'RESTful backend API with secure token authorization',
      'Data-dense dashboard cards with responsive charts and metrics'
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
    title: 'Frontend Development',
    icon: 'fa-solid fa-code',
    description: 'Building responsive, accessible, and ultra-fast web interfaces.',
    skills: [
      { name: 'TypeScript', level: 95, icon: 'fa-brands fa-js', description: 'Strongly typed scalable architectures' },
      { name: 'Next.js / React', level: 95, icon: 'fa-brands fa-react', description: 'SSR, SSG, App Router & State Management' },
      { name: 'Tailwind CSS', level: 98, icon: 'fa-brands fa-css3-alt', description: 'Utility-first modern design systems' },
      { name: 'JavaScript (ES6+)', level: 95, icon: 'fa-brands fa-square-js', description: 'Asynchronous programming & DOM' },
      { name: 'HTML5 / Semantic Web', level: 98, icon: 'fa-brands fa-html5', description: 'Accessible & SEO-optimized structure' },
      { name: 'Framer Motion', level: 88, icon: 'fa-solid fa-wand-magic-sparkles', description: 'Micro-animations & dynamic transitions' }
    ]
  },
  {
    title: 'Backend & Cloud',
    icon: 'fa-solid fa-server',
    description: 'Architecting robust server backends, microservices, and databases.',
    skills: [
      { name: 'Node.js / Express', level: 90, icon: 'fa-brands fa-node-js', description: 'High-throughput RESTful services & APIs' },
      { name: 'Python', level: 88, icon: 'fa-brands fa-python', description: 'Scripting, backend logic, and API servers' },
      { name: 'PostgreSQL & MySQL', level: 85, icon: 'fa-solid fa-database', description: 'Relational schemas & query optimization' },
      { name: 'MongoDB / Supabase', level: 86, icon: 'fa-solid fa-leaf', description: 'NoSQL storage & real-time databases' },
      { name: 'REST APIs & GraphQL', level: 92, icon: 'fa-solid fa-network-wired', description: 'Clean contract-driven API endpoints' },
      { name: 'Vercel / Cloudflare', level: 90, icon: 'fa-solid fa-cloud', description: 'Serverless deployment & edge caching' }
    ]
  },
  {
    title: 'AI & Data Science',
    icon: 'fa-solid fa-brain',
    description: 'Harnessing machine learning and LLMs to solve complex problems.',
    skills: [
      { name: 'Machine Learning', level: 85, icon: 'fa-solid fa-robot', description: 'Supervised & predictive modeling' },
      { name: 'OpenAI API & LLM Apps', level: 90, icon: 'fa-solid fa-microchip', description: 'Prompt engineering & RAG pipelines' },
      { name: 'Pandas & NumPy', level: 88, icon: 'fa-solid fa-chart-line', description: 'Data wrangling & numerical computing' },
      { name: 'Scikit-Learn', level: 84, icon: 'fa-solid fa-gears', description: 'Algorithm training & model validation' },
      { name: 'Jupyter & EDA', level: 90, icon: 'fa-solid fa-book-open', description: 'Exploratory data analysis & charting' }
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: 'fa-solid fa-screwdriver-wrench',
    description: 'Optimizing continuous integration, version control, and collaboration.',
    skills: [
      { name: 'Git & GitHub', level: 95, icon: 'fa-brands fa-github', description: 'Branching strategies, CI/CD Actions' },
      { name: 'Docker Containers', level: 80, icon: 'fa-brands fa-docker', description: 'Containerization & isolated environments' },
      { name: 'Clerk / NextAuth', level: 92, icon: 'fa-solid fa-shield-halved', description: 'Identity, OAuth, & RBAC security' },
      { name: 'Vite / Webpack', level: 90, icon: 'fa-solid fa-bolt', description: 'Module bundling & build pipelines' },
      { name: 'Postman / API Testing', level: 92, icon: 'fa-solid fa-vial', description: 'Automated endpoint validation' }
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
    id: 'ai-solutions',
    title: 'AI & Machine Learning Solutions',
    subtitle: 'Intelligent Automation & Predictive Systems',
    description: 'Harnessing the power of Machine Learning and Large Language Models to build intelligent assistants, analytics pipelines, automated workflows, and data-driven engines.',
    icon: 'fa-solid fa-brain',
    features: [
      'Custom OpenAI & LLM API integrations',
      'Python data science & predictive modeling (Scikit-Learn)',
      'Intelligent chatbots & automated customer agents',
      'Curriculum & e-learning AI platforms (Welile AI)',
      'Data preprocessing, feature engineering & EDA'
    ]
  },
  {
    id: 'ecommerce-marketplace',
    title: 'E-Commerce & Digital Marketplaces',
    subtitle: 'High-Converting Online Commerce Platforms',
    description: 'Custom e-commerce platforms and multi-vendor marketplaces tailored for high transaction throughput, seamless cart experiences, and local payment gateways.',
    icon: 'fa-solid fa-cart-shopping',
    features: [
      'Multi-vendor catalogs and agricultural markets (E-katale)',
      'Real-time shopping carts and checkout workflows',
      'Mobile-money (M-Pesa, MTN/Airtel) and card checkout ready',
      'Inventory, order tracking, and vendor dashboard systems',
      'Optimized conversion funnels and mobile responsiveness'
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
  {
    id: 'exp-1',
    period: '2024 - Present',
    role: 'Lead Full-Stack & AI Systems Engineer',
    company: 'Welile School of AI & Independent Projects',
    location: 'Kampala, Uganda',
    type: 'experience',
    description: 'Architecting and deploying AI educational platforms and modern web applications with cutting-edge TypeScript and Python stacks.',
    achievements: [
      'Spearheaded the development and launch of Welile School of AI platform deployed on Vercel',
      'Designed high-performance TypeScript components and integrated AI model API endpoints',
      'Implemented automated CI/CD pipelines, unit testing, and edge serverless caching',
      'Mentored junior engineers and created open-source technical documentation'
    ],
    technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'OpenAI API', 'Vercel', 'Python']
  },
  {
    id: 'exp-2',
    period: '2023 - 2024',
    role: 'Full-Stack Software Developer',
    company: 'E-katale & Danii Media Systems',
    location: 'Uganda',
    type: 'experience',
    description: 'Developed scalable digital commerce engines and media agency applications serving commercial clients.',
    achievements: [
      'Engineered the E-katale digital marketplace platform connecting local agricultural producers',
      'Built Danii Media digital studio web platform with customized video showreels and booking tools',
      'Optimized frontend asset delivery achieving 98+ PageSpeed scores on mobile devices',
      'Integrated secure user authentication, shopping carts, and dynamic data filtering'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL', 'Framer Motion']
  },
  {
    id: 'exp-3',
    period: '2022 - 2023',
    role: 'Software Developer & Data Specialist',
    company: 'Logistics & Analytics Solutions',
    location: 'Uganda',
    type: 'experience',
    description: 'Built fleet tracking systems (TA-TRACKS) and Python intelligent analytics platforms (TCIAP).',
    achievements: [
      'Developed TA-TRACKS logistics and vehicle monitoring dashboard interface',
      'Engineered TCIAP Python data science and machine learning analytics pipeline',
      'Designed RESTful API endpoints and implemented SQL/NoSQL database schemas',
      'Contributed to open-source software libraries and identity security frameworks'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'JavaScript', 'React', 'REST APIs', 'Git']
  },
  {
    id: 'edu-1',
    period: '2020 - 2024',
    role: 'Bachelor of Science in Software Engineering',
    company: 'University Degree Program',
    location: 'Uganda',
    type: 'education',
    description: 'Comprehensive software engineering education with honors, specialized in distributed systems, web engineering, artificial intelligence, and database design.',
    achievements: [
      'Specialized in Software Architecture, Full-Stack Development, Data Structures & Algorithms',
      'Conducted research in Machine Learning and Intelligent Systems Application in East Africa',
      'Participated in campus tech hackathons and developer community leadership'
    ],
    technologies: ['Software Architecture', 'Data Structures', 'AI & ML', 'Database Systems', 'Algorithms']
  },
  {
    id: 'cert-1',
    period: '2023 - 2024',
    role: 'Professional Full-Stack & AI Certifications',
    company: 'Global Developer Credentials',
    location: 'Online',
    type: 'education',
    description: 'Advanced certifications in modern full-stack development, Next.js architecture, and AI engineering.',
    achievements: [
      'Advanced React & Next.js Professional Architecture Certification',
      'Python for Machine Learning and Data Science Mastery',
      'Cloud Architecture & Serverless Computing Fundamentals'
    ],
    technologies: ['Next.js', 'React', 'Python', 'Machine Learning', 'Cloud DevOps']
  }
];
