import Allergies from "../models/Allergies";

// Get all allergies
export const getAllAllergies = async (req, res) => {
  try {
    const allergies = await Allergies.find();
    res.json(allergies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get an allergy by id
export const getAllergyById = async (req, res) => {
  try {
    const allergy = await Allergies.findById(req.params.id);
    res.json(allergy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new allergy
export const createAllergy = async (req, res) => {
  const allergy = new Allergies(req.body);
  try {
    const newAllergy = await allergy.save();
    res.status(201).json(newAllergy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an allergy by id
export const updateAllergy = async (req, res) => {
  try {
    const allergy = await Allergies.findById(req.params.id);
    allergy.set(req.body);
    const updatedAllergy = await allergy.save();
    res.json(updatedAllergy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an allergy by id
export const deleteAllergy = async (req, res) => {
  try {
    await Allergies.findByIdAndDelete(req.params.id);
    res.json({ message: "Allergy deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
