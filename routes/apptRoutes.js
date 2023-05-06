import express from "express";
import apptController from "../controllers/apptController";

const router = express.Router();

// Get route to fetch all appointments
router.get("/", apptController.getAllAppts);

// Get route to fetch a specific appointment by ID
router.get("/:id", apptController.getApptById);

// Post route to create a new appointment
router.post("/", apptController.createAppt);

// Patch route to update an existing appointment
router.patch("/:id", apptController.updateAppt);

// Delete route to delete an existing appointment
router.delete("/:id", apptController.deleteAppt);

export default router;
