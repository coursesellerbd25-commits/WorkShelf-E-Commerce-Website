import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);

export default app;