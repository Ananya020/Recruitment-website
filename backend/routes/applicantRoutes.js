import express from "express";
import { createApplicant, getApplicants } from "../controllers/applicantController.js";

const router = express.Router();

router.post("/", createApplicant);
router.get("/", getApplicants);

export default router;