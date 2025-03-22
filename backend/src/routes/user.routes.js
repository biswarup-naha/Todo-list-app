import { Router } from 'express';
import { User } from '../models/user.model.js';
import { verifyToken } from '../utils/token.js';

const router = Router();

export default router;