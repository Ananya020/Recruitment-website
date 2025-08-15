import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  srmEmail: { type: String, required: true },
  personalEmail: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  course: { type: String, required: true },
  specialization: { type: String, required: true },
  regNo: { type: String, required: true },
  domain: { type: String, required: true },
  motivation: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Applicant", applicantSchema);