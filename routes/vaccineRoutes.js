import express from "express";
import {
  getVaccineByPetId,
  getAllVaccinesByEmployeeId,
  getVaccineByLotNumber,
  getVaccineByType,
  createVaccine,
  updateVaccine,
  deleteVaccine,
} from "../controllers/vaccineController";

const router = express.Router({ mergeParams: true });

// Get all vaccines for a specific pet
router.get("/", getVaccineByPetId);

// Get all vaccines by a specific employee
router.get("/", getAllVaccinesByEmployeeId);

// Get all vaccines by lot number
router.get("/", getVaccineByLotNumber);

// Get all vaccines by type
router.get("/", getVaccineByType);

// Create a new vaccine for a specific pet
router.post("/", createVaccine);

// Update a specific vaccine for a specific pet by id
router.put("/:id", updateVaccine);

// Delete a specific vaccine for a specific pet by id
router.delete("/:id", deleteVaccine);

export default router;
