import { z } from 'zod';

const todoSchema = z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    status: z.enum(['pending', 'completed', 'deleted']),
    user: z.string({ required_error: 'User is required' }),
});

export default todoSchema;