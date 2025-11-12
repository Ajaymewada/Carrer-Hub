const Project = require('../models/Project');

// ➕ Add a project
exports.addProject = async (req, res) => {
  try {
    const { useruid, title, description, duration, role, technologies, teamSize, projectURL } = req.body;

    if (!title) return res.status(400).json({ success: false, message: 'Project title is required' });

    const newProject = new Project({
      useruid: useruid,
      title,
      description,
      duration,
      role,
      technologies,
      teamSize,
      projectURL,
    });

    await newProject.save();

    res.status(201).json({ success: true, message: 'Project added successfully', project: newProject });
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// 📋 Get all projects
// 📋 Get Projects by useruid
exports.getProjectsByUser = async (req, res) => {
  try {
    const { useruid } = req.params; // we'll send useruid as a route parameter

    if (!useruid) {
      return res.status(400).json({ success: false, message: 'User UID is required' });
    }

    const projects = await Project.find({ useruid }).sort({ createdAt: -1 });

    if (!projects.length) {
      return res.status(404).json({ success: false, message: 'No projects found for this user' });
    }

    res.status(200).json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching user projects:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

