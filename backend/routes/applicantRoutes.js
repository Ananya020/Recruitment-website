import express from "express";
import Applicant from "../models/Applicant.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newApplicant = new Applicant(req.body);
    await newApplicant.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const applicants = await Applicant.find().sort({ createdAt: -1 });
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;