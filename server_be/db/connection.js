const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🥳🎉 Connected to db"))
  .catch(() => console.log("💀❌ Connection to db failed!"));
