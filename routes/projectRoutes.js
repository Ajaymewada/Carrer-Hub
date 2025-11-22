const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadProject");

const projectController = require("../controllers/projectController");

// GET all projects
router.get("/getprojects", projectController.getProjects);

// GET project by ID
router.get("/getprojects/:id", projectController.getProjectById);

// upload.single("projectFile") ==> same name from frontend
router.post("/create", upload.single("projectFile"), projectController.createProject);


module.exports = router;
