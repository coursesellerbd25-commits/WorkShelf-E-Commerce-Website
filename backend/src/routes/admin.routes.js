import { Router } from 'express';
import { getDashboardStats } from '../controllers/adminController.js';

const router = Router();

router.get('/stats', getDashboardStats);

export default router;