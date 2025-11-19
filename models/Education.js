const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  useruid: { type: String, required: true },
  instituteName: { type: String, required: true },
  degree: String,
  fieldOfStudy: String,
  startYear: String,
  endYear: String,
  grade: String
}, { timestamps: true });

module.exports = mongoose.model("Education", educationSchema);
