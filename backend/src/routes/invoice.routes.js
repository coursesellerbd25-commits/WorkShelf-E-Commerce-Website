import express from 'express';
import { generateInvoice } from '../controllers/invoice.controller.js';

const router = express.Router();

router.get('/:orderId', generateInvoice);

export default router;