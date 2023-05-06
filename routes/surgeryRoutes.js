import express from "express";
import {
  getAllSurgeriesByPetId,
  getAllSurgeriesByEmployeeId,
  getSurgeriesByDate,
  getSurgeriesByType,
  getSurgeriesByType,
  createSurgery,
  createSurgeryCode,
  updateSurgery,
  deleteSurgery,
} from "../controllers/surgeryController";

const router = express.Router({ mergeParams: true });

// Get all surgeries for a specific pet
router.get("/", getAllSurgeriesByPetId);

// Get all surgeries by a specific vet
router.get("/", getAllSurgeriesByEmployeeId);

// Get all surgeries by a specific date
router.get("/", getSurgeriesByDate);

// Get all surgeries by a specific type
router.get("/", getSurgeriesByType);

// Create a new surgery for a specific pet
router.post("/", createSurgery);

// Create a new surgery code
router.post("/", createSurgeryCode);

// Update a specific surgery for a specific pet by id
router.put("/:id", updateSurgery);

// Delete a specific surgery for a specific pet by id
router.delete("/:id", deleteSurgery);

export default router;
