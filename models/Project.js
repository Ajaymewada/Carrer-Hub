const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    duration: { type: String, trim: true },
    role: { type: String, trim: true },
    technologies: { type: String, trim: true },
    teamSize: { type: Number },
    projectURL: { type: String, trim: true },
    useruid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
