import express from "express";
import { createTodo, deleteTodo, getTodo, getTodoById, updateTodo } from "../controllers/todo.controller.js";
import { verifyAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/:id")
    .get(verifyAuth, getTodoById)
    .put(verifyAuth, updateTodo)
    .delete(verifyAuth, deleteTodo);

router.route("/")
    .get(verifyAuth, getTodo)
    .post(verifyAuth, createTodo);
    
export default router;