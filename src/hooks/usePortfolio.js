import { useState, useEffect } from "react";

const FALLBACK = {
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
      desc: "A SaaS platform for retail store management — POS billing, inventory, khata book, supplier tracking, analytics, and AI insights in one system.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS"],
      github: "https://github.com/Ishant8287/RetailFlow",
      live: "https://retail-flow-xi.vercel.app/",
    },
    {
      id: "02",
      name: "Blog API",
      desc: "A production-ready REST API with CRUD, resource relationships, filtering, JWT auth, RBAC, pagination and scalable architecture.",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "RBAC"],
      github: "https://github.com/Ishant8287/Blog-api-backend",
      live: null,
    },
    {
      id: "03",
      name: "GymTracker",
      desc: "A React-based weekly workout tracker. Add exercises, log sets, reps, and weight — keeping training consistent and data-driven.",
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

export function usePortfolio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/portfolio")
      .then((r) => r.json())
      .then((res) => {
        if (!cancelled) setData(res.data);
      })
      .catch(() => {
        if (!cancelled) {
          setError("Using offline data");
          setData(FALLBACK);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}
