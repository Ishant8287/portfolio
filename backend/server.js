import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contact.routes.js";
import portfolioRoutes from "./src/routes/portfolio.routes.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
import { apiLimiter } from "./src/middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting on all API routes
app.use("/api", apiLimiter);

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/portfolio", portfolioRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Portfolio API running" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
