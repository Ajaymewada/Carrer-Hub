// controllers/projectController.js
const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const {
      projectTitle,
      description,
      objective,
      dataAssignment,
      keyConcepts,
      projectAssets,
      dataset,
      deliverables,
      estimatedTime,
      impactMetrics,
    } = req.body;

    let tools = [];
    let certifications = [];

    if (req.body.tools) {
      try {
        // If sent as JSON string: '[ "React", "Angular" ]'
        tools = JSON.parse(req.body.tools);
      } catch (err) {
        // If sent as CSV: "React,Angular"
        tools = req.body.tools.split(",");
      }
    }

    if (req.body.certifications) {
      try {
        certifications = JSON.parse(req.body.certifications);
      } catch (err) {
        certifications = req.body.certifications.split(",");
      }
    }

    // File path
    const filePath = req.file ? "/uploads/projects/" + req.file.filename : null;

    const newProject = new Project({
      projectTitle,
      description,
      objective,
      tools,
      dataAssignment,
      keyConcepts,
      projectAssets,
      dataset,
      deliverables,
      estimatedTime,
      impactMetrics,
      certifications,
      projectPrototype: filePath, // Save file path
    });

    await newProject.save();

    return res.status(201).json({
      success: true,
      message: "Project saved successfully",
      data: newProject,
    });
  } catch (error) {
    console.error("Create project error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while saving project",
    });
  }
};

// GET ALL PROJECTS
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ success: true, data: projects });
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET SINGLE PROJECT BY ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.json({ success: true, data: project });
  } catch (err) {
    console.error("Error fetching project:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
