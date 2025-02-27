import { Request, Response } from 'express';

export const getHealth = (req: Request, res: Response): void => {
  res.status(200).json({
    status: 'OK',
    message: 'API Gateway is healthy',
    timestamp: new Date().toISOString()
  });
};
