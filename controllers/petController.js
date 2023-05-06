import Pet from "../models/Pet";

// Get all pets
export const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a pet by id
export const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new pet
export const createPet = async (req, res) => {
  const pet = new Pet(req.body);
  try {
    const newPet = await pet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a pet by id
export const updatePet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    pet.set(req.body);
    const updatedPet = await pet.save();
    res.json(updatedPet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a pet by id
export const deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: "Pet deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
