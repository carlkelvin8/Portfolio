/**
 * Portfolio Configuration
 * Student Founder Version – Honest & Professional
 */

export const portfolioData = {
  // ================================
  // PERSONAL INFORMATION
  // ================================
  personal: {
    name: 'Carl Manahan',
    role: 'BSIT Student • Founder @ GGH Software',
    tagline:
      'Building real-world web applications that solve business problems.',
    description:
      'I am a 2nd-year BSIT student at Access Computer College and the founder of GGH Software. I build custom web systems for different industries, focusing on clean architecture, performance, and practical business solutions.',
    email: 'carlmanahan134@gmail.com',
    github: 'https://github.com/carlkelvin8',
    linkedin: 'https://linkedin.com/in/carlmanahan',
    location: 'Philippines',
    profileImage: '/carl.png',
    resume: '#',
    summary: [
      '2nd-year BSIT student actively building production-ready applications.',
      'Founder of GGH Software delivering custom software for multiple industries.',
      'Full-stack developer using Laravel, .NET Core, React, Node.js, and SQL databases.',
    ],
  },

  // ================================
  // ABOUT SECTION
  // ================================
  about: {
    title: 'Founder Mindset & Engineering Craft',
    summary:
      'As both a student and a founder, I combine academic learning with real-world execution. I design and develop custom software systems that streamline business workflows, improve efficiency, and enhance user experience. My goal is continuous growth as an engineer while delivering meaningful digital solutions.',
    highlights: [
      { text: 'Custom Business Systems', icon: 'architecture' },
      { text: 'Full-Stack Development', icon: 'code' },
      { text: 'Database Design & Optimization', icon: 'database' },
      { text: 'REST API Development', icon: 'api' },
      { text: 'Client Requirement Analysis', icon: 'team' },
      { text: 'Project Deployment & Maintenance', icon: 'delivery' },
    ],
  },

  // ================================
  // SKILLS SECTION
  // ================================
  skills: {
    categories: [
      {
        name: 'Core Technologies',
        description: 'Main stack used in building web applications.',
        items: [
          { name: 'Laravel (PHP)', icon: 'laravel' },
          { name: '.NET Core', icon: 'dotnet' },
          { name: 'Node.js', icon: 'node' },
          { name: 'React', icon: 'react' },
          { name: 'Hono', icon: 'node' },
          { name: 'Prisma ORM', icon: 'database' },
          { name: 'PostgreSQL', icon: 'sql' },
          { name: 'MySQL', icon: 'database' },
          { name: 'REST APIs', icon: 'api' },
        ],
      },
      {
        name: 'DevOps & Infrastructure',
        description: 'Deployment and development workflow tools.',
        items: [
          { name: 'Docker', icon: 'docker' },
          { name: 'Git & Version Control', icon: 'git' },
          { name: 'CI/CD Basics', icon: 'cicd' },
          { name: 'AWS (Basic Deployment)', icon: 'aws' },
        ],
      },
      {
        name: 'Architecture & Design',
        description: 'System structure and performance optimization.',
        items: [
          { name: 'System Design Fundamentals', icon: 'architecture' },
          { name: 'API Design', icon: 'api' },
          { name: 'Database Optimization', icon: 'performance' },
          { name: 'Role-Based Access Control', icon: 'server' },
          { name: 'AI Prompt Engineering', icon: 'openai' },
        ],
      },
      {
        name: 'Business & Leadership',
        description: 'Founder and project management skills.',
        items: [
          { name: 'Client Communication', icon: 'direction' },
          { name: 'Project Planning', icon: 'agile' },
          { name: 'Self-Led Team Projects', icon: 'mentor' },
        ],
      },
    ],
  },

  // ================================
  // PROJECTS / CASE STUDIES
  // ================================
  projects: [
    {
      id: 1,
      title: 'Portfolio Website',
      category: 'Personal Portfolio',
      image:
        'https://placehold.co/800x500/a855f7/ffffff?text=Portfolio',
      description:
        'A modern, interactive portfolio website showcasing my projects, skills, and experience with stunning animations and effects.',
      problem:
        'Needed a professional online presence to showcase my work and attract potential clients and employers.',
      solution:
        'Built a fully responsive portfolio using React and Mantine UI with custom animations, interactive elements, and modern design patterns.',
      role: 'Full-Stack Developer & Designer',
      impact:
        'Created a strong personal brand with an engaging user experience that effectively showcases my technical abilities.',
      technologies: ['React', 'Mantine UI', 'Vite', 'CSS3', 'JavaScript'],
      github: 'https://github.com/carlkelvin8/Portfolio.git',
      demo: '#',
    },
    {
      id: 2,
      title: 'Lesgo API',
      category: 'Backend API',
      image:
        'https://placehold.co/800x500/14b8a6/ffffff?text=Lesgo+API',
      description:
        'A robust REST API built with Laravel for scalable web applications with PostgreSQL database.',
      problem:
        'Need for a reliable, scalable API infrastructure to power multiple client applications.',
      solution:
        'Developed a RESTful API with Laravel, proper authentication, data validation, and optimized PostgreSQL queries.',
      role: 'Backend Developer',
      impact:
        'Provided a solid foundation for multiple frontend applications with consistent data handling.',
      technologies: ['Laravel', 'PostgreSQL', 'REST API', 'PHP'],
      github: 'https://github.com/carlkelvin8/Lesgo-API.git',
      demo: '#',
    },
    {
      id: 3,
      title: 'Clinforce AI',
      category: 'AI & Healthcare',
      image:
        'https://placehold.co/800x500/6366f1/ffffff?text=Clinforce+AI',
      description:
        'AI-powered healthcare management system leveraging artificial intelligence for clinical operations.',
      problem:
        'Healthcare facilities needed intelligent automation to improve patient care and operational efficiency.',
      solution:
        'Built with Laravel backend and Vue.js frontend, integrated AI capabilities with healthcare workflows to provide smart insights and automation.',
      role: 'Full-Stack Developer & AI Integration',
      impact:
        'Enhanced clinical decision-making and streamlined healthcare operations through AI assistance.',
      technologies: ['Laravel', 'Vue.js', 'AI/ML', 'OpenAI API', 'PHP'],
      github: 'https://github.com/carlkelvin8/Clinforce-AI.git',
      demo: '#',
    },
    {
      id: 4,
      title: 'Lost & Found System',
      category: 'Community Web Application',
      image:
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Lost+%26+Found',
      description:
        'A web platform connecting people who lost items with those who found them, facilitating community recovery.',
      problem:
        'No centralized system for reporting and claiming lost items in the community.',
      solution:
        'Built using Laravel MVC with Blade templating, featuring search functionality, image uploads, and notification system.',
      role: 'Full-Stack Developer',
      impact:
        'Helped community members recover lost items efficiently and reduced time spent searching.',
      technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'Bootstrap'],
      github: 'https://github.com/carlkelvin8/Lost-Found.git',
      demo: '#',
    },
    {
      id: 5,
      title: 'Ibaan GIS',
      category: 'Geographic Information System',
      image:
        'https://placehold.co/800x500/8b5cf6/ffffff?text=Ibaan+GIS',
      description:
        'Geographic Information System for Ibaan municipality providing spatial data visualization and management.',
      problem:
        'Municipality lacked a digital system for managing and visualizing geographic and demographic data.',
      solution:
        'Developed with Express.js backend and React frontend, featuring interactive maps with Leaflet.js and MySQL database for location-based information management.',
      role: 'Full-Stack Developer',
      impact:
        'Improved municipal planning and decision-making through accessible geographic data visualization.',
      technologies: ['Express.js', 'React', 'MySQL', 'Leaflet.js', 'Node.js'],
      github: 'https://github.com/carlkelvin8/Ibaan-GIS.git',
      demo: '#',
    },
    {
      id: 6,
      title: 'Tala',
      category: 'Web Application',
      image:
        'https://placehold.co/800x500/ec4899/ffffff?text=Tala',
      description:
        'A custom web application built with Hono, Prisma, and React to address specific business requirements.',
      problem:
        'Business needed a tailored solution that existing software couldn\'t provide.',
      solution:
        'Created a modern full-stack application using Hono for the API layer, Prisma ORM for database management, and React for the frontend interface.',
      role: 'Full-Stack Developer',
      impact:
        'Delivered a solution perfectly aligned with business processes, improving operational efficiency.',
      technologies: ['Hono', 'Prisma', 'React', 'PostgreSQL', 'TypeScript'],
      github: 'https://github.com/carlkelvin8/Tala.git',
      demo: '#',
    },
  ],

  // ================================
  // EXPERIENCE & EDUCATION
  // ================================
  experience: [
    {
      type: 'experience',
      title: 'Founder / Full-Stack Developer',
      company: 'GGH Software',
      duration: '2022 - Present',
      isCurrent: true,
      description:
        'Founded GGH Software to build custom software solutions for different business industries. I manage requirement gathering, system architecture, development, deployment, and ongoing support.',
      achievements: [
        'Designed and developed custom web applications for business clients.',
        'Built database-driven systems with secure authentication and role management.',
        'Handled deployment and maintenance of production web apps.',
        'Collaborated directly with clients to translate business needs into software solutions.',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Information Technology (BSIT)',
      company: 'Access Computer College',
      duration: '2024 - Present',
      isCurrent: true,
      description:
        'Currently a 2nd-year college student focusing on software development, databases, and system design.',
      achievements: [
        'Building real-world systems alongside academic studies.',
        'Continuously improving programming and problem-solving skills.',
      ],
    },
  ],

  // ================================
  // NAVIGATION
  // ================================
  navLinks: [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'GitHub', to: 'github' },
    { label: 'Experience', to: 'experience' },
    { label: 'Testimonials', to: 'testimonials' },
    { label: 'Contact', to: 'contact' },
  ],
};
