import Medication from "../models/Medication";
import Pet from "../models/Pet";

// Get all medications for a specific pet
export const getAllMedications = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    const medications = pet.medications;
    res.json(medications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific medication for a specific pet
export const getMedicationById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    const medication = pet.medications.id(req.params.medicationId);
    res.json(medication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all medications by lot number
export const getMedicationByLotNumber = async (req, res) => {
  try {
    const medications = await Medication.find({
      lotNumber: req.params.lotNumber,
    });
    res.json(medications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new medication for a specific pet
export const createMedication = async (req, res) => {
  const medication = new Medication(req.body);
  try {
    const pet = await Pet.findById(req.params.petId);
    pet.medications.push(medication);
    await pet.save();
    res.status(201).json(medication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing medication for a specific pet
export const updateMedication = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    const medication = pet.medications.id(req.params.medicationId);
    medication.set(req.body);
    const updatedMedication = await pet.save();
    res.json(updatedMedication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a specific medication for a specific pet
export const deleteMedication = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);
    pet.medications.id(req.params.medicationId).remove();
    await pet.save();
    res.json({ message: "Medication deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
