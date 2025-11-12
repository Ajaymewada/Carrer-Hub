const express = require('express');
const router = express.Router();
const { addProject, getProjectsByUser } = require('../controllers/projectController');

router.post('/addproject', addProject);
router.get('/myprojects/:useruid', getProjectsByUser);

module.exports = router;
