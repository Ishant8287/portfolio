import express from "express";
import {
  getPortfolioData,
  getProjects,
  getSkills,
} from "../controllers/portfolio.controller.js";

const router = express.Router();

router.get("/", getPortfolioData);
router.get("/projects", getProjects);
router.get("/skills", getSkills);

export default router;
