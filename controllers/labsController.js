import Labs from "../models/Labs";

// Get all labs
export const getAllLabs = async (req, res) => {
  try {
    const labs = await Labs.find();
    res.json(labs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a lab by id
export const getLabById = async (req, res) => {
  try {
    const lab = await Labs.findById(req.params.id);
    res.json(lab);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new lab
export const createLab = async (req, res) => {
  try {
    const newLab = await Labs.create(req.body);
    res.status(201).json(newLab);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a lab by id
export const updateLab = async (req, res) => {
  try {
    const lab = await Labs.findById(req.params.id);
    lab.set(req.body);
    const updatedLab = await lab.save();
    res.json(updatedLab);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a lab by id
export const deleteLab = async (req, res) => {
  try {
    await Labs.findByIdAndDelete(req.params.id);
    res.json({ message: "Lab deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
