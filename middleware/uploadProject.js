const multer = require("multer");
const path = require("path");

// Storage location
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/projects/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "project-" + unique + ext);
  }
});

// File type restriction
function fileFilter(req, file, cb) {
  const allowed = [".pdf", ".docx"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (!allowed.includes(ext)) {
    return cb(new Error("Only PDF and DOCX files are allowed."));
  }
  cb(null, true);
}

module.exports = multer({ storage, fileFilter });
