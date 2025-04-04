import { Router } from 'express';
import { User } from '../models/user.model.js';
import { verifyToken } from '../utils/token.js';
import { loginUser, logoutUser, registerUser, verify } from '../controllers/user.controller.js';
import { verifyAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyAuth, logoutUser)
router.get("/verify", verify);

export default router;