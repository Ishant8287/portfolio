export const mainProjects = [
  {
    id: 1,
    name: 'RetailFlow',
    tag: 'SaaS · Full Stack',
    description:
      'Multi-tenant POS & Inventory Management system for Indian retailers. Handles billing, digital khata, AI-powered insights, and real-time analytics across isolated shop instances.',
    highlight: 'Dashboard optimized from ~9s → <150ms using MongoDB $facet pipeline',
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Groq AI', 'JWT', 'ImageKit'],
    live: 'https://retail-flow-xi.vercel.app/',
    github: 'https://github.com/Ishant8287/RetailFlow',
    liveLabel: 'Live Demo',
  },
  {
    id: 2,
    name: 'VeritasAI',
    tag: 'AI · Full Stack',
    description:
      'Hallucination detection middleware for LLMs. Breaks responses into factual claims, validates them via vector search on Pinecone, and returns a confidence-scored verdict.',
    highlight: 'Hybrid verification pipeline: Vector DB similarity + LLM fallback',
    tech: ['Node.js', 'Express', 'Pinecone', 'Groq AI', 'MongoDB', 'React', 'MiniLM'],
    live: 'https://veritas-ai-ai-hallucination-detecti.vercel.app/',
    github: 'https://github.com/Ishant8287/VeritasAI-Hallucination-Detection',
    liveLabel: 'Live Demo',
  },
  {
    id: 3,
    name: 'Step Abroad',
    tag: 'Backend · REST API',
    description:
      'University discovery & student application platform API. Features FSM-based application lifecycle with full audit trail, weighted recommendation engine, and TTL caching.',
    highlight: 'Recommendation engine built entirely inside MongoDB aggregation pipeline',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Jest', 'Supertest'],
    live: 'https://study-abroad-platform-c4uh.onrender.com/',
    github: 'https://github.com/Ishant8287/step-abroad-platform',
    liveLabel: 'API Docs',
  },
]

export const moreProjects = [
  {
    id: 4,
    name: 'Blog API',
    description: 'Production REST API for a blogging platform — full auth lifecycle, RBAC, CRUD, likes, Joi validation, and pagination.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Joi'],
    live: 'https://blog-api-backend-1-cdcp.onrender.com/',
    github: 'https://github.com/Ishant8287/Blog-api-backend',
  },
  {
    id: 5,
    name: 'Auth Service',
    description: 'Full auth API with local credentials, Google OAuth, refresh token rotation, httpOnly cookies, and password reset.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Google OAuth'],
    live: 'https://auth-service-inul.onrender.com/',
    github: 'https://github.com/Ishant8287/auth-service',
  },
  {
    id: 6,
    name: 'Notely',
    description: 'Minimal notes app with dark/light mode, full CRUD, and localStorage persistence.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    live: 'https://notes-app-black-alpha.vercel.app/',
    github: 'https://github.com/Ishant8287/Notes-App',
  },
  {
    id: 7,
    name: 'Gym Tracker',
    description: 'React workout tracking app to log exercises, sets, reps, and monitor weekly volume.',
    tech: ['React', 'JavaScript', 'CSS'],
    live: 'https://gym-tracker-react-nine.vercel.app/',
    github: 'https://github.com/Ishant8287/gym-tracker-react',
  },
]

export const skills = [
  {
    number: '01',
    category: 'Backend',
    subtitle: 'Development',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'bcrypt', 'Helmet'],
  },
  {
    number: '02',
    category: 'Frontend',
    subtitle: 'Development',
    items: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    number: '03',
    category: 'AI & Vector',
    subtitle: 'Integration',
    items: ['Groq', 'Pinecone', 'LLaMA 3.1', 'Embeddings', 'MiniLM-L6'],
  },
  {
    number: '04',
    category: 'Database',
    subtitle: 'Management',
    items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Aggregation Pipeline', 'Indexing'],
  },
  {
    number: '05',
    category: 'Libraries',
    subtitle: '& Integrations',
    items: ['Jest', 'Supertest', 'Joi', 'jsPDF', 'Chart.js', 'ImageKit', 'Resend'],
  },
  {
    number: '06',
    category: 'Dev Tools',
    subtitle: 'Workflow',
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
]
