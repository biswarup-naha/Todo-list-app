import { Router } from 'express';
import { User } from '../models/user.model.js';
import { verifyToken } from '../utils/token.js';
import { loginUser, registerUser } from '../controllers/user.controller.js';

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;