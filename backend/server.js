import dotenv from 'dotenv';
import connectDB from './src/config/database.js';

dotenv.config();

connectDB();