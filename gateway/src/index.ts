import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import apiRouter from './routes/api';
import { errorHandler } from './middleware/errorHandler';
import { PORT } from './config/config';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// Health check route at root
app.get('/', (req: Request, res: Response) => {
  res.send('API Gateway is running.');
});

// Global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`API Gateway is listening on port ${PORT}`);
});
