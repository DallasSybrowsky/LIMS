import express from "express";
import petController from "../controllers/petController";

const router = express.Router();

// Get route to fetch all pets
router.get("/", petController.getAllPets);

// Get route to fetch a specific pet by ID
router.get("/:id", petController.getPetById);

// Post route to create a new pet
router.post("/", petController.createPet);

// Patch route to update an existing pet
router.patch("/:id", petController.updatePet);

// Delete route to delete an existing pet
router.delete("/:id", petController.deletePet);

export default router;
