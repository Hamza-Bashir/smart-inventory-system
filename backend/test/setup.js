const mongoose = require("mongoose");
require("dotenv").config();

beforeAll(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});
