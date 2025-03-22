import { z } from 'zod';

const userSchema = z.object({
    name: z.string({ required_error: 'Name is required' }).refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), 'Name should contain only alphabets'),
    email: z.string({ required_error: 'Email is required' }).email("Please enter a valid email"),
    phone: z.string({ required_error: 'Phone is required' }).min(10, "Phone number must be at least 10 digits").refine((value) => /^[0-9]+$/.test(value ?? ""), 'Phone number must contain only numbers'),
    password: z.string({required_error: 'Password is required'}).min(8, "Password must be at least 8 characters"),
});

export default userSchema;