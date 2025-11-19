const express = require("express");
const router = express.Router();
const {
  addEducation,
  getEducationByUser,
  getEducationById,
  updateEducation
} = require("../controllers/educationController");

router.post("/add", addEducation);
router.get("/list/:useruid", getEducationByUser);
router.get("/:id", getEducationById);
router.put("/:id", updateEducation);

module.exports = router;