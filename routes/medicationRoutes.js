import express from "express";
import {
  getAllMedications,
  getMedicationById,
  createMedication,
  updateMedication,
  deleteMedication,
} from "../controllers/medicationController";

const router = express.Router({ mergeParams: true });

// Get all medications for a specific pet
router.get("/", getAllMedications);

// Get a specific medication for a specific pet by id
router.get("/:id", getMedicationById);

// Create a new medication for a specific pet
router.post("/", createMedication);

// Update a specific medication for a specific pet by id
router.put("/:id", updateMedication);

// Delete a specific medication for a specific pet by id
router.delete("/:id", deleteMedication);

export default router;
