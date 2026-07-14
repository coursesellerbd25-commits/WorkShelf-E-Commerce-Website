import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import orderRoutes from './routes/orderRoutes.js';
import adminRoutes from './routes/admin.routes.js';
import errorHandler from './middleware/error.middleware.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/v1/admin', adminRoutes);

// Handle 404 Routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;