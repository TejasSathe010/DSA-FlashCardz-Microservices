import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import profileRoutes from './routes/profile';
import { errorHandler } from './middleware/errorHandler';
import { PORT } from './config/config';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes for user profiles
app.use('/api/profile', profileRoutes);

// Health-check endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Profile Service is running.');
});

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Profile Service listening on port ${PORT}`);
});
