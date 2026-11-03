import { Project, SkillItem, ServiceItem, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'MD Bayezid Hossen',
  displayName: 'Bayezid Hossen',
  role: 'Frontend Developer & Creative Web Developer',
  headline: 'Building Digital Experiences That Inspire.',
  subheadline: 'I build modern, responsive, and interactive digital experiences using modern web technologies.',
  bio: `Hi, I'm MD Bayezid Hossen 👋
I am a passionate Full-Stack Web Developer dedicated to building clean, interactive, and high-performance web applications. I specialize in crafting seamless user interfaces with React, JavaScript, and Tailwind CSS, while ensuring robust backend functionality and architecture.

I love turning complex ideas into functional, visually striking digital experiences.`,
  location: 'Rangpur, Bangladesh',
  locationDetails: 'Rangpur Sadar, Rangpur',
  email: 'bayezidhosen9080@gmail.com',
  phone: '+880 1608-539080',
  experienceLevel: 'Junior Developer',
  education: {
    institution: 'Rangpur Polytechnic Institute',
    degree: 'Diploma in Engineering / Polytechnic Studies',
    timeline: '2025 – 2026',
    status: 'In Progress / Completed'
  },
  certification: {
    title: 'Full Stack Development',
    type: 'Professional Training & Practical Course'
  },
  socials: {
    github: 'https://github.com/Bayezidhosen',
    linkedin: 'https://www.linkedin.com/in/bayezid-hosen-a4a669387/',
    facebook: 'https://www.facebook.com/bayezidhosen1412',
    email: 'bayezidhosen9080@gmail.com',
  },
  resumePath: '/public/assets/aistudio/Untitled_document_c0628121'
};

export const PROJECTS: Project[] = [
  {
    id: 'studiospace',
    name: 'StudioSpace',
    subtitle: 'Modern Digital Workspace & Studio Showcase Platform',
    description: 'A sleek, interactive web platform crafted for creative teams, showcasing agency work, project management metrics, and customizable workspace views.',
    longDescription: 'StudioSpace was built to explore clean creative agency layouts with high-performance client-side rendering. Features an intuitive dashboard overview, modular project status tracking, animated micro-interactions, and a bespoke dark glassmorphism design system.',
    image: '/src/assets/images/project_studiospace_showcase_1793724263773.jpg',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel', 'Responsive UI'],
    liveUrl: 'https://studiospace-1-6vu2pk469-bayezidhosen9080-8729.vercel.app/',
    hasPublicDemo: true,
    githubUrl: 'https://github.com/Bayezidhosen',
    highlights: [
      'Deployed live on Vercel with responsive mobile-first architecture',
      'Fluid dark theme glassmorphism with high contrast readability',
      'Interactive card filters, project tracking cards, and dashboard metrics',
      'Modular component structure ensuring fast load times'
    ],
    role: 'Frontend Engineering & UI Design',
    year: '2025'
  },
  {
    id: 'bazardor',
    name: 'BazarDor',
    subtitle: 'Market Commodity & Daily Essentials Price Monitor',
    description: 'A modern commodity intelligence and market price tracking web application designed to present daily essentials pricing data cleanly and efficiently.',
    longDescription: 'BazarDor provides a transparent, easy-to-navigate portal for tracking daily market prices, commodities trends, and grocery rate fluctuations. Developed with reusable React components, robust layout logic, and responsive data displays.',
    image: '/src/assets/images/project_bazardor_showcase_1793724264085.jpg',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Data Visualization'],
    hasPublicDemo: false,
    dashboardUrl: 'https://vercel.com/bayezidhosen9080-8729/bazardor-1/DzQS46azWur97btxmZGM79m1ECBn',
    githubUrl: 'https://github.com/Bayezidhosen',
    highlights: [
      'Commodity price tables and visual trends for daily essentials',
      'Configurable staging environment with live deployment in progress',
      'Clean data-first UI with tabular numbers and instant search filtering',
      'Mobile-optimized layouts tailored for rapid on-the-go price checks'
    ],
    role: 'Full-Stack Development (Frontend Focus)',
    year: '2025'
  }
];

export const SKILLS: SkillItem[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend', description: 'Semantic markup, accessibility, SEO best practices', iconName: 'FileCode2', color: '#E34F26' },
  { name: 'CSS3', category: 'frontend', description: 'Modern flexbox, grid, animations & fluid layouts', iconName: 'Palette', color: '#1572B6' },
  { name: 'JavaScript', category: 'frontend', description: 'ES6+, asynchronous programming, DOM manipulation', iconName: 'FileCode', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'frontend', description: 'Type safety, strict interfaces, predictable code', iconName: 'Code', color: '#3178C6' },
  { name: 'React.js', category: 'frontend', description: 'Custom hooks, state management, component architecture', iconName: 'Atom', color: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', description: 'App Router, SSR, performance optimization, SEO', iconName: 'Layers', color: '#FFFFFF' },
  { name: 'Tailwind CSS', category: 'frontend', description: 'Utility-first styling, design systems, responsive design', iconName: 'Wind', color: '#06B6D4' },
  // Backend
  { name: 'Node.js', category: 'backend', description: 'REST APIs, server-side logic, Express runtime', iconName: 'Server', color: '#5FA04E' },
  { name: 'MongoDB', category: 'backend', description: 'NoSQL document schemas, querying, database design', iconName: 'Database', color: '#47A248' },
  // Tools & WebGL
  { name: 'Git & GitHub', category: 'tools', description: 'Version control, branch management, collaboration', iconName: 'GitBranch', color: '#F05032' },
  { name: 'Three.js & 3D Web', category: 'tools', description: 'Interactive WebGL scenes, 3D models, smooth camera animation', iconName: 'Box', color: '#00f2fe' },
  { name: 'Vite & Modern Tooling', category: 'tools', description: 'Fast HMR, module bundling, modern build pipelines', iconName: 'Cpu', color: '#BD34FE' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'responsive-web',
    title: 'Responsive Website Development',
    description: 'Crafting websites that render impeccably across smart phones, tablets, laptops, and ultra-wide desktop monitors with zero visual bugs.',
    iconName: 'Smartphone',
    capabilities: ['Fluid Grid & Flexbox Architectures', 'Cross-browser Compatibility', 'Mobile-First Touch Interactions', 'Clean Typography Scaling']
  },
  {
    id: 'react-interfaces',
    title: 'Modern React Interfaces',
    description: 'Engineering dynamic, component-driven client applications with predictable state, custom hooks, and modular UI hierarchies.',
    iconName: 'Atom',
    capabilities: ['Custom Reusable Components', 'Reactive State & Hooks Management', 'Clean Props Contracts & Strict Typing', 'Smooth User Transitions']
  },
  {
    id: 'nextjs-apps',
    title: 'Next.js Web Applications',
    description: 'Building modern web applications utilizing Next.js architectural patterns for fast page loads, great SEO, and modular page routing.',
    iconName: 'Globe',
    capabilities: ['App Router & Page Routing', 'Search Engine Optimization', 'Asset & Image Optimization', 'API Routes & Full-Stack Readiness']
  },
  {
    id: 'interactive-ui',
    title: 'Interactive UI Development',
    description: 'Transforming static wireframes into captivating digital experiences with smooth micro-interactions, subtle transitions, and 3D accents.',
    iconName: 'Sparkles',
    capabilities: ['Framer Motion Animations', 'Interactive 3D Canvas Accents', 'Zero-Jank Compositor Transitions', 'Tactile Hover & Scroll Effects']
  },
  {
    id: 'perf-optimization',
    title: 'Frontend Performance Optimization',
    description: 'Refining load speed, asset payloads, and Core Web Vitals to provide immediate responsiveness and frictionless user navigation.',
    iconName: 'Gauge',
    capabilities: ['Bundle Size Reduction', 'Lazy Loading & Code Splitting', 'Zero-Layout-Shift Design', 'Clean Accessible Semantics']
  }
];

export const TIMELINE: ExperienceItem[] = [
  {
    period: '2025 – Present',
    role: 'Junior Developer',
    focus: 'Modern Frontend Engineering & Web Development',
    description: 'Actively building modern real-world web applications, expanding full-stack capabilities, and mastering component-driven user interfaces.',
    keyPoints: [
      'Building responsive web applications using React, Tailwind CSS, and TypeScript',
      'Implementing real projects like StudioSpace and BazarDor with clean architecture',
      'Deepening expertise in full-stack architecture using Node.js and MongoDB',
      'Focusing on UI/UX polish, accessible markup, and smooth interactive web experiences'
    ]
  },
  {
    period: '2025 – 2026',
    role: 'Engineering Student',
    focus: 'Rangpur Polytechnic Institute',
    description: 'Pursuing Diploma in Engineering, building a rigorous foundation in computational principles, engineering logic, and systematic problem solving.',
    keyPoints: [
      'Diploma in Engineering / Polytechnic Studies curriculum',
      'Continuous hands-on programming labs, algorithms, and practical assignments',
      'Balancing academic engineering coursework with dedicated modern web development training'
    ]
  },
  {
    period: 'Continuous',
    role: 'Self-Directed Developer & Learner',
    focus: 'Open Source, Web Standards & Modern Tooling',
    description: 'Exploring contemporary web technologies, Git version control workflows, Three.js 3D web design, and high-performance frontend practices.',
    keyPoints: [
      'Contributing to and managing personal repositories on GitHub',
      'Refining design sensibilities to build clean, distinctive portfolios and interfaces',
      'Committed to producing clean, readable, and well-documented codebase'
    ]
  }
];
