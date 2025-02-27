import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import { errorHandler } from './middleware/errorHandler';
import { PORT } from './config/config';
import { connectDB } from './utils/db';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes for authentication
app.use('/api/auth', authRoutes);

// Simple health-check
app.get('/', (req: Request, res: Response) => {
  res.send('Authentication Service is running.');
});

// Global error handler
app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});