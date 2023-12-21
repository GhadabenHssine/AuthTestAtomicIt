// src/routes/authRoutes.ts
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { validateUsername, validateEmail, validatePassword } from '../middleware/validationMiddleware';

const router = express.Router();

router.post('/register', validateUsername, validateEmail, validatePassword, registerUser);
router.post('/login', loginUser);

export default router;
