import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { register, login } from '../controllers/auth.controller.js';

const router = express.Router();

// Register
router.post('/register', register);

// Login
router.post('/login', login);

router.get('/me', protect, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

export default router;