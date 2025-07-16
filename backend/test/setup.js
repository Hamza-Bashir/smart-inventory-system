const mongoose = require('mongoose');
require('dotenv').config(); // So .env values are available

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});
