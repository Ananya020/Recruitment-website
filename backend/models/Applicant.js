import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
<<<<<<< HEAD
  srmEmail: { type: String, required: true, unique: true },
  personalEmail: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  yearOfStudy: { 
    type: String, 
    required: true,
    enum: ["1st", "2nd", "3rd", "4th"]
  },
  course: { 
    type: String, 
    required: true,
    enum: ["btech", "bca", "mtech", "mca", "other"]
  },
  specialization: { type: String, required: true },
  regNo: { type: String, required: true, unique: true },
  domain: { 
    type: String, 
    required: true,
    enum: ["technical", "creatives", "non-tech"]
  },
=======
  srmEmail: { type: String, required: true },
  personalEmail: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  course: { type: String, required: true },
  specialization: { type: String, required: true },
  regNo: { type: String, required: true },
  domain: { type: String, required: true },
>>>>>>> 3b4b3bb546e596e4e03034227c12de5ba22e9059
  motivation: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Applicant", applicantSchema);