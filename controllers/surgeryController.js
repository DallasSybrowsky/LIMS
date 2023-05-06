import Surgery from "../models/Surgery.js";
import Pet from "../models/Pet.js";
import Employee from "../models/Employee.js";

// Get all surgeries for a specific pet
export const getAllSurgeriesByPetId = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    const surgeries = pet.surgeries;
    res.json(surgeries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all surgeries by a specific vet
export const getAllSurgeriesByEmployeeId = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId);
    const surgeries = employee.surgeries;
    res.json(surgeries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all surgeries by a specific date
export const getSurgeriesByDate = async (req, res) => {
  try {
    const surgeries = await Surgery.find({
      surgeryDate: req.params.surgeryDate,
    });
    res.json(surgeries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all surgeries by a specific type
export const getSurgeriesByType = async (req, res) => {
  try {
    const surgeries = await Surgery.find({
      surgeryType: req.params.surgeryType,
    });
    res.json(surgeries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new surgery for a specific pet
export const createSurgery = async (req, res) => {
  const surgery = new Surgery(req.body);
  try {
    const pet = await Pet.findById(req.params.petId);
    pet.surgeries.push(surgery);
    await pet.save();
    res.status(201).json(surgery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Create a new surgery code
export const createSurgeryCode = async (req, res) => {
  const surgeryCode = new SurgeryCode(req.body);
  try {
    await surgeryCode.save();
    res.status(201).json(surgeryCode);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing surgery for a specific pet
export const updateSurgery = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    const surgery = pet.surgeries.id(req.params.surgeryId);
    surgery.set(req.body);
    const updatedSurgery = await pet.save();
    res.json(updatedSurgery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a specific surgery for a specific pet
export const deleteSurgery = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    pet.surgeries.id(req.params.surgeryId).remove();
    await pet.save();
    res.json({ message: "Surgery deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
