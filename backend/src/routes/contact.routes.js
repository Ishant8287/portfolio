import express from "express";
import { sendMessage, getMessages } from "../controllers/contact.controller.js";
import { contactLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/", contactLimiter, sendMessage);
router.get("/", getMessages); // Protect with auth middleware in production

export default router;
