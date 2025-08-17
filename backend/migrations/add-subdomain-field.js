import mongoose from "mongoose";
import Applicant from "../models/Applicant.js";
import "../config/db.js";

const migration = async () => {
  try {
    console.log("Starting migration: Adding subDomain field to existing applicants...");
    
    // Update all existing applicants to have subDomain field
    const result = await Applicant.updateMany(
      { subDomain: { $exists: false } },
      { $set: { subDomain: null } }
    );
    
    console.log(`Migration completed. Updated ${result.modifiedCount} documents.`);
    
    // Close the connection
    await mongoose.connection.close();
    console.log("Database connection closed.");
    
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
};

// Run migration if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  migration();
}

export default migration;
