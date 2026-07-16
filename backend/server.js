import dotenv from 'dotenv';
import app from './src/app.js';
import connectDB from './src/config/database.js';
import http from 'http';
import { Server } from 'socket.io';
import invoiceRoutes from './routes/invoice.routes.js';

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

app.use('/api/v1/invoices', invoiceRoutes);

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.emit(
      'notification',
      '🎉 Welcome to WorkShelf!'
    );

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});