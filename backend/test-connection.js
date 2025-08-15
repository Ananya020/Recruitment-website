import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const testConnection = async () => {
  try {
    console.log("Testing MongoDB connection...");
    console.log("MONGO_URI:", process.env.MONGO_URI ? "Set" : "Not set");
    
    if (!process.env.MONGO_URI) {
      console.log("Please set MONGO_URI in your .env file");
      return;
    }
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully!");
    
    // Test creating a simple document
    const TestModel = mongoose.model("Test", new mongoose.Schema({ name: String }));
    const testDoc = new TestModel({ name: "test" });
    await testDoc.save();
    console.log("✅ Database write test successful!");
    
    await mongoose.connection.close();
    console.log("✅ Connection closed successfully!");
    
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
  }
};

testConnection();
