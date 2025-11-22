const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    projectTitle: { type: String, required: true },

    description: { type: String, required: true },
    objective: { type: String, required: true },

    tools: { type: [String], default: [] },

    dataAssignment: { type: String, required: true },
    keyConcepts: { type: String, required: true },
    projectAssets: { type: String, required: true },
    dataset: { type: String, required: true },
    deliverables: { type: String, required: true },

    estimatedTime: { type: String, required: true },

    impactMetrics: { type: String, required: true },

    certifications: { type: [String], default: [] },

    projectPrototype: { type: String }, // <---- NEW FIELD
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
