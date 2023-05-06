import express from "express";
import commentController from "../controllers/commentController";

const router = express.Router();

// Get route to fetch all comments
router.get("/", commentController.getAllComments);

// Get route to fetch a specific comment by ID
router.get("/:id", commentController.getCommentById);

// Post route to create a new comment
router.post("/", commentController.createComment);

// Patch route to update an existing comment
router.patch("/:id", commentController.updateComment);

// Delete route to delete an existing comment
router.delete("/:id", commentController.deleteComment);

export default router;
