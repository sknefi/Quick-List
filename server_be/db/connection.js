const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://filipkarika1:JEc2DIn3YWzdiON9@cluster0.usgh8.mongodb.net/"
  )
  .then(() => console.log("🥳🎉 Connected to db"))
  .catch(() => console.log("💀❌ Connection failed!"));