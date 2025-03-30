import { Todo } from "../models/todo.model.js";

export const createTodo = async (req, res) => {
    const { title, description, status } = req.body;
    const userId = req.user._id.toString();
    
    try {
        const todo = await Todo.create({ title, description, status, user: userId });
        res.status(201).json({ success: true, message: "Todo created", todo });
    } catch (error) {
        res.status(500).json({ success: false, message: error?.message || "Error creating todo" });
    }
}

export const getTodo = async (req, res) => {
    const userId = req.user._id;
    try {
        const todo = await Todo.find({ user: userId });
        res.status(200).json({ success: true, message: "todos fetched", todo });
    } catch (error) {
        res.status(500).json({ success: false, message: error?.message || "Error fetching todo" });
    }
}


export const getTodoById = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    try {
        const todo = await Todo.findOne({ _id: id, user: userId });
        if (!todo) return res.status(404).json({ success: false, message: "no such todo" });
        res.status(200).json({ success: true, message: "todo fetched", todo });
    } catch (error) {
        res.status(500).json({ success: false, message: error?.message || "Error fetching todo" });
    }
}

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const fields = req.body;
    const userId = req.user._id.toString();
    try {
        const todo = await Todo.findOneAndUpdate({ _id: id, user: userId }, { $set: fields }, {new: true});
        res.status(200).json({ success: true, message: "todo updated", todo });
    } catch (error) {
        res.status(500).json({ success: false, message: error?.message || "Error updating todo" });
    }
}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id.toString();
    try {
        const todo = await Todo.findOneAndDelete({ _id: id, user: userId });
        res.status(200).json({ success: true, message: "todo deleted", todo });
    } catch (error) {
        res.status(500).json({ success: false, message: error?.message || "Error deleting todo" });
    }
}