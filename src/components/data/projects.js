export const projects = [
  {
    key: "rf",
    icon: "🛒",
    title: "RetailFlow",
    subtitle: "Full-Stack Retail Management System",
    description:
      "Full-stack retail management system with POS, real-time inventory tracking, and analytics dashboard.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Ishant8287/RetailFlow",
    live: "https://retail-flow-xi.vercel.app/",
  },
  {
    key: "ba",
    icon: "📝",
    title: "Blog API",
    subtitle: "Production-Grade REST API with Auth & RBAC",
    description:
      "Production-grade REST API with JWT auth, role-based access control, and pagination — built for scale.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "RBAC"],
    github: "https://github.com/Ishant8287/Blog-api-backend",
    live: null,
  },
  {
    key: "gt",
    icon: "💪",
    title: "GymTracker",
    subtitle: "Workout Logging React Application",
    description:
      "Workout tracking app for logging sets, reps, and exercises with a clean, fast mobile interface.",
    tech: ["React", "JavaScript", "LocalStorage"],
    github: "https://github.com/Ishant8287/gym-tracker-react",
    live: "https://gym-tracker-react-nine.vercel.app",
  },
];

export const caseStudies = {
  rf: {
    t: "RetailFlow",
    s: "Full-Stack Retail Management System",
    i: "🛒",
    p: "Small and mid-sized retail businesses lack affordable integrated management tools. Disconnected spreadsheets, manual inventory counts, and slow POS systems result in stock discrepancies, lost sales, and poor data visibility.",
    a: "Designed a full-stack MERN application organized into feature modules: authentication, inventory, sales, and analytics — each with its own route, controller, and service layer.",
    arch: [
      {
        l: "React Client",
        c: "rgba(103,232,249,.15)",
        b: "rgba(103,232,249,.3)",
      },
      { ar: 1 },
      { l: "Express API", c: "rgba(245,158,11,.15)", b: "rgba(245,158,11,.3)" },
      { ar: 1 },
      { l: "MongoDB", c: "rgba(74,222,128,.15)", b: "rgba(74,222,128,.3)" },
    ],
    ch: [
      "Keeping inventory consistent across concurrent POS sessions required careful transaction handling",
      "Analytics via MongoDB aggregation without degrading real-time POS response time",
      "Balancing JWT statelessness with secure session management for store staff roles",
    ],
    lrn: [
      "MongoDB aggregation pipelines are powerful for real-time sales analytics",
      "Middleware-based RBAC keeps authorization fully out of business logic",
      "A well-defined API contract up front saved weeks of frontend/backend rework",
    ],
  },
  ba: {
    t: "Blog API",
    s: "Production-Grade REST API with Auth & RBAC",
    i: "📝",
    p: "Most tutorial blog APIs lack production-level concerns: proper authentication flows, role-based permissions, pagination, and error handling. I wanted to build one that reflected real-world standards.",
    a: "Strict layered architecture: routes delegate to controllers, controllers call services, services interact with Mongoose models. JWT with refresh token rotation, all routes protected by reusable middleware.",
    arch: [
      { l: "Client", c: "rgba(251,146,60,.1)", b: "rgba(251,146,60,.3)" },
      { ar: 1 },
      {
        l: "Auth Middleware",
        c: "rgba(248,113,113,.1)",
        b: "rgba(248,113,113,.3)",
      },
      { ar: 1 },
      { l: "Controller", c: "rgba(245,158,11,.15)", b: "rgba(245,158,11,.3)" },
      { ar: 1 },
      { l: "MongoDB", c: "rgba(74,222,128,.15)", b: "rgba(74,222,128,.3)" },
    ],
    ch: [
      "Refresh token rotation without Redis — solved with rotated token stored in DB",
      "RBAC middleware reusable across all resource types (posts, comments, users)",
      "Consistent paginated response shapes across all collection endpoints",
    ],
    lrn: [
      "Custom AppError class makes all errors consistent and debuggable",
      'RBAC as middleware factory: protect("admin","editor") — readable and composable',
      "Pagination logic belongs in a shared utility, not duplicated in every controller",
    ],
  },
  gt: {
    t: "GymTracker",
    s: "Workout Logging React Application",
    i: "💪",
    p: "Most fitness apps are feature-bloated. I needed a fast, offline-friendly app to log sets, reps, and exercises during workouts without ads or paywalls.",
    a: "React application with component-level state management and localStorage persistence. Focused on UX: fast interactions, exercise templates, and a clean mobile-first layout.",
    arch: [
      {
        l: "React Components",
        c: "rgba(103,232,249,.15)",
        b: "rgba(103,232,249,.3)",
      },
      { ar: 1 },
      {
        l: "useState Hooks",
        c: "rgba(245,158,11,.15)",
        b: "rgba(245,158,11,.3)",
      },
      { ar: 1 },
      {
        l: "localStorage",
        c: "rgba(74,222,128,.15)",
        b: "rgba(74,222,128,.3)",
      },
    ],
    ch: [
      "State management across workout, exercise, and set levels without a library",
      "Persisting and hydrating complex nested state from localStorage on load",
      "Making UI fast enough for gym use — minimal re-renders on each set log",
    ],
    lrn: [
      "useState with derived state covers more ground than expected before needing Context",
      "Mobile-first CSS from the start is far easier than retrofitting desktop designs",
      "localStorage serialization of nested arrays needs a robust hydration strategy",
    ],
  },
};
