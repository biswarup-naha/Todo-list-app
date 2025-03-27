import { z } from 'zod';
import mongoose from 'mongoose';

const objectIdSchema = z
    .string()
    .refine((id) => mongoose.Types.ObjectId.isValid(id), { message: 'Invalid ObjectId' });

const todoSchema = z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string().optional(),
    status: z.enum(['pending', 'completed', 'deleted'], { required_error: 'Status must be set' }),
    user: objectIdSchema, 
});

export default todoSchema;
