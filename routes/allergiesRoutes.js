import express from "express";
import allergiesController from "../controllers/allergiesController";

const router = express.Router();

// Get route to fetch all allergies
router.get("/", allergiesController.getAllAllergies);

// Get route to fetch a specific allergy by ID
router.get("/:id", allergiesController.getAllergyById);

// Post route to create a new allergy
router.post("/", allergiesController.createAllergy);

// Patch route to update an existing allergy
router.patch("/:id", allergiesController.updateAllergy);

// Delete route to delete an existing allergy
router.delete("/:id", allergiesController.deleteAllergy);

export default router;
