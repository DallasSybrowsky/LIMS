import Vaccine from "../models/Vaccine";
import Pet from "../models/Pet";
import Employee from "../models/Employee";

// Get all vaccines for a specific pet
export const getVaccineByPetId = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    const vaccines = pet.vaccines;
    res.json(vaccines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all vaccines by a specific employee
export const getAllVaccinesByEmployeeId = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId);
    const vaccines = employee.vaccines;
    res.json(vaccines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all vaccines by lot number
export const getVaccineByLotNumber = async (req, res) => {
  try {
    const vaccines = await Vaccine.find({
      lotNumber: req.params.lotNumber,
    });
    res.json(vaccines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all vaccines by type
export const getVaccineByType = async (req, res) => {
  try {
    const vaccines = await Vaccine.find({
      type: req.params.type,
    });
    res.json(vaccines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new vaccine for a specific pet
export const createVaccine = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    const vaccine = new Vaccine(req.body);
    pet.vaccines.push(vaccine);
    await pet.save();
    res.status(201).json(vaccine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing vaccine for a specific pet
export const updateVaccine = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    const vaccine = pet.vaccines.id(req.params.vaccineId);
    vaccine.set(req.body);
    const updatedVaccine = await pet.save();
    res.json(updatedVaccine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an existing vaccine for a specific pet
export const deleteVaccine = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    const vaccine = pet.vaccines.id(req.params.vaccineId);
    vaccine.remove();
    const updatedVaccine = await pet.save();
    res.json(updatedVaccine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
