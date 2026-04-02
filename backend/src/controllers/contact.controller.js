import Contact from "../models/contact.model.js";
import nodemailer from "nodemailer";

// POST /api/contact
export const sendMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // Save to DB
    const contact = await Contact.create({
      name,
      email,
      message,
      ip: req.ip,
    });

    // Optional: send email notification (if env vars are set)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          subject: `New message from ${name}`,
          html: `
            <h2>New Portfolio Contact</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
      } catch (emailError) {
        console.warn(
          "Email notification failed (non-critical):",
          emailError.message,
        );
      }
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: { id: contact._id },
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/contact (admin - protected in real app)
export const getMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    next(error);
  }
};
