const Education = require("../models/Education");

// Add
exports.addEducation = async (req, res) => {
  try {
    const edu = new Education(req.body);
    await edu.save();
    res.status(201).json({ success: true, message: "Education added", education: edu });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// List by useruid
exports.getEducationByUser = async (req, res) => {
  try {
    const education = await Education.find({ useruid: req.params.useruid }).sort({ startYear: -1 });
    res.status(200).json({ success: true, education });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single
exports.getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, education });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update
exports.updateEducation = async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, message: "Updated", education: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
