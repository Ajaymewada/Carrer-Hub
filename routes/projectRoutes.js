const express = require('express');
const router = express.Router();
const { addProject, getProjectsByUser, getProjectById, updateProject} = require('../controllers/projectController');

router.post('/addproject', addProject);
router.get('/myprojects/:useruid', getProjectsByUser);
router.get('/getProjectById/:id', getProjectById);
router.put('/updateProject/:id', updateProject);

module.exports = router;
