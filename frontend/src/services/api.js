import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const fetchPortfolioData = () => api.get("/portfolio");
export const fetchProjects = () => api.get("/portfolio/projects");
export const fetchSkills = () => api.get("/portfolio/skills");
export const sendContactMessage = (data) => api.post("/contact", data);

export default api;
