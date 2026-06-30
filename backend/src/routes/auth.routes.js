import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { protect, authorize } from '../middleware/auth.middleware.js';

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

router.get(
  '/admin',
  protect,
  authorize('admin'),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Welcome Admin!',
    });
  },
);

router.get(
  '/customer',
  protect,
  authorize('customer'),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Welcome Customer!',
    });
  },
);

export default router;