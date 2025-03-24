import { Router } from 'express';
import userRoutes from './user.routes.js';
const routes=Router();

routes.use('/user', userRoutes);
// routes.use('/todos', todoRoutes);

export { routes };