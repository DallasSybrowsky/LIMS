import express from "express";
import clientController from "../controllers/clientController";

const router = express.Router();

// Get route to fetch all clients
router.get("/", clientController.getAllClients);

// Get route to fetch a specific client by ID
router.get("/:id", clientController.getClientById);

// Post route to create a new client
router.post("/", clientController.createClient);

// Patch route to update an existing client
router.patch("/:id", clientController.updateClient);

// Delete route to delete an existing client
router.delete("/:id", clientController.deleteClient);

export default router;
