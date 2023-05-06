import express from "express";
import labController from "../controllers/labController";

const router = express.Router();

// Get route to fetch all labs
router.get("/", labController.getAllLabs);

// Get route to fetch a specific lab by ID
router.get("/:id", labController.getLabById);

// Post route to create a new lab
router.post("/", labController.createLab);

// Patch route to update an existing lab
router.patch("/:id", labController.updateLab);

// Delete route to delete an existing lab
router.delete("/:id", labController.deleteLab);

export default router;
