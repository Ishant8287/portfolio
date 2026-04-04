export const philosophy = [
  {
    icon: "🔗",
    title: "REST API Design",
    body: "Consistent endpoints, proper HTTP verbs, meaningful status codes, and versioned routes.",
  },
  {
    icon: "🔑",
    title: "JWT Authentication",
    body: "Stateless auth with access/refresh token patterns, secure cookies, and proper expiry management.",
  },
  {
    icon: "🛡",
    title: "RBAC Security",
    body: "Role-based access control ensuring users only access what they're permitted to — at middleware level.",
  },
  {
    icon: "🧱",
    title: "Modular Architecture",
    body: "Routes, controllers, services, and models clearly separated. Each layer with a single responsibility.",
  },
  {
    icon: "🚨",
    title: "Error Handling",
    body: "Centralized error middleware, consistent error shapes, no stack traces leaking to clients.",
  },
  {
    icon: "✅",
    title: "Input Validation",
    body: "All inputs validated and sanitized before touching business logic or database. Trust nothing from the client.",
  },
];

export const practices = [
  {
    icon: "📐",
    title: "Clean Code",
    body: "Self-documenting code, meaningful names, small focused functions, zero magic numbers.",
  },
  {
    icon: "📈",
    title: "Scalable Structure",
    body: "Folder structures that scale with the team. Features isolated so new developers onboard fast.",
  },
  {
    icon: "⚡",
    title: "API Optimization",
    body: "Proper indexing, lean queries, pagination by default, and avoiding N+1 problems.",
  },
  {
    icon: "🔒",
    title: "Security Awareness",
    body: "CORS config, rate limiting mindset, helmet headers, sensitive data never in version control.",
  },
];
