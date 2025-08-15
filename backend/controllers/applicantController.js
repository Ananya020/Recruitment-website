import Applicant from "../models/Applicant.js";

export const createApplicant = async (req, res) => {
  try {
    // Check if we can connect to the database
    if (!Applicant.db.db) {
      return res.status(503).json({ 
        error: "Database not connected. Please check MongoDB connection." 
      });
    }
    
    const newApplicant = new Applicant(req.body);
    await newApplicant.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error("Error creating applicant:", err);
    res.status(500).json({ error: err.message });
  }
};

export const getApplicants = async (req, res) => {
  try {
    // Check if we can connect to the database
    if (!Applicant.db.db) {
      return res.status(503).json({ 
        error: "Database not connected. Please check MongoDB connection." 
      });
    }
    
    const applicants = await Applicant.find().sort({ createdAt: -1 });
    res.json(applicants);
  } catch (err) {
    console.error("Error getting applicants:", err);
    res.status(500).json({ error: err.message });
  }
};
