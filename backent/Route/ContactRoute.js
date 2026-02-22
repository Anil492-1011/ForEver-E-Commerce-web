import express from "express";
import {
  createContactMessage,
  getAllContactMessages,
} from "../Controller/contactController.js";
import { authenticate, isAdmin } from "../Middleware/auth.js";

const router = express.Router();

router.post("/create", createContactMessage);
router.get("/all", authenticate, isAdmin, getAllContactMessages);

export default router;
