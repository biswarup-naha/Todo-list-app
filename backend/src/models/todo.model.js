import mongoose from 'mongoose';
import todoZodSchema from '../schema/todo.js';

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, required: true, enum: ['pending', 'completed', 'deleted'] },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

todoSchema.pre("validate", function (next) {
    try {
        // todoZodSchema.parse(this.toObject());
        const validatedData = todoZodSchema.parse({ ...this.toObject(), user: this.user.toString() });
        Object.assign(this, validatedData);
        next();
    } catch (error) {
        next(new Error(error.errors.map((e) => e.message).join(", ")));
    }
});

export const Todo = mongoose.model('Todo', todoSchema);

