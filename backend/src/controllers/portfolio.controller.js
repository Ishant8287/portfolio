// Portfolio data — in production you could manage this via a CMS or DB
// For now we serve it from here; easy to move to MongoDB later

const portfolioData = {
  name: "Ishant Singh",
  role: "Backend Engineer",
  tagline: "I build scalable systems.",
  about:
    "A backend-focused developer who enjoys crafting clean APIs, robust data models, and systems that don't fall apart under pressure. Actively seeking backend engineering internships.",
  location: "India",
  availability: "Open to internships",
  email: "singhishant683@gmail.com",
  github: "https://github.com/Ishant8287",
  linkedin: "https://www.linkedin.com/in/ishant-singh-9b3bb93a7",
  projects: [
    {
      id: "01",
      name: "RetailFlow",
      desc: "A SaaS platform for retail store management — POS billing, inventory, khata book, supplier tracking, analytics, and AI insights in one system built for small business owners.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS"],
      github: "https://github.com/Ishant8287/RetailFlow",
      live: "https://retail-flow-xi.vercel.app/",
    },
    {
      id: "02",
      name: "Blog API",
      desc: "A production-ready REST API with CRUD operations, resource relationships, filtering, JWT authentication, RBAC, pagination and scalable architecture. Backend fundamentals done right.",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "RBAC"],
      github: "https://github.com/Ishant8287/Blog-api-backend",
      live: null,
    },
    {
      id: "03",
      name: "GymTracker",
      desc: "A React-based weekly workout tracker. Add exercises, log sets, reps, and weight — keeping your training consistent and data-driven.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/Ishant8287/gym-tracker-react",
      live: "https://gym-tracker-react-nine.vercel.app",
    },
  ],
  skills: [
    { group: "Languages", tags: ["Java", "JavaScript"] },
    { group: "Backend", tags: ["Node.js", "Express.js"] },
    { group: "Database", tags: ["MongoDB", "Mongoose"] },
    {
      group: "Core Concepts",
      tags: ["REST APIs", "JWT Auth", "RBAC", "Pagination"],
    },
    { group: "Frontend", tags: ["React", "TailwindCSS"] },
    { group: "Tools", tags: ["Git", "Postman", "VS Code"] },
  ],
};

// GET /api/portfolio
export const getPortfolioData = async (req, res, next) => {
  try {
    res.json({ success: true, data: portfolioData });
  } catch (error) {
    next(error);
  }
};

// GET /api/portfolio/projects
export const getProjects = async (req, res, next) => {
  try {
    res.json({ success: true, data: portfolioData.projects });
  } catch (error) {
    next(error);
  }
};

// GET /api/portfolio/skills
export const getSkills = async (req, res, next) => {
  try {
    res.json({ success: true, data: portfolioData.skills });
  } catch (error) {
    next(error);
  }
};
