import Applicant from "../models/Applicant.js";

export const createApplicant = async (req, res) => {
  try {
    if (!Applicant.db.db) {
      return res.status(503).json({ 
        error: "DATABASE_ERROR",
        message: "Database not connected. Please check MongoDB connection."
      });
    }

    const requiredFields = [
      "name", "srmEmail", "personalEmail", "phoneNumber", "yearOfStudy", "course", "specialization", "regNo", "domain", "motivation"
    ];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    if (req.body.domain === "technical" && !req.body.subDomain) {
      missingFields.push("subDomain");
    }
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: "MISSING_FIELDS",
        message: `Please fill all required fields: ${missingFields.join(", ")}`,
        fields: missingFields
      });
    }

    const existing = await Applicant.findOne({
      $or: [
        { srmEmail: req.body.srmEmail },
        { personalEmail: req.body.personalEmail },
        { regNo: req.body.regNo }
      ]
    });
    if (existing) {
      return res.status(409).json({
        error: "DUPLICATE_EMAIL",
        message: "You have already registered with this email or registration number."
      });
    }

    if (req.body.domain !== "technical") {
      req.body.subDomain = undefined;
    }

    const newApplicant = new Applicant(req.body);
    await newApplicant.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error("Error creating applicant:", err);
    if (err.code === 11000) {
      return res.status(409).json({
        error: "DUPLICATE_EMAIL",
        message: "You have already registered with this email or registration number."
      });
    }
    res.status(500).json({
      error: "SERVER_ERROR",
      message: err.message || "Failed to create applicant"
    });
  }
};

export const getApplicants = async (req, res) => {
  try {
    if (!Applicant.db.db) {
      return res.status(503).json({ 
        error: "Database not connected. Please check MongoDB connection." 
      });
    }
    
    const applicants = await Applicant.find().sort({ createdAt: -1 });
    res.json(applicants);
  } catch (err) {
    console.error("Error getting applicants:", err);
    res.status(500).json({ error: "SERVER_ERROR", message: err.message || "Failed to get applicants" });
  }
};
