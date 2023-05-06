import express from "express";
import employeeController from "../controllers/employeeController";

const router = express.Router();

// Get route to fetch all employees
router.get("/", employeeController.getAllEmployees);

// Get route to fetch a specific employee by ID
router.get("/:id", employeeController.getEmployeeById);

// Post route to create a new employee
router.post("/", employeeController.createEmployee);

// Patch route to update an existing employee
router.patch("/:id", employeeController.updateEmployee);

// Delete route to delete an existing employee
router.delete("/:id", employeeController.deleteEmployee);

// Define route for setting employee role
router.patch("/:id/set-role", employeeController.setEmployeeRole);

export default router;
