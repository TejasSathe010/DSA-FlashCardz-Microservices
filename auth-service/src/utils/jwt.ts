import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

interface JwtPayload {
  userId: string;
}

export const signToken = (payload: JwtPayload, expiresIn: string = '1h') => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    throw new Error('Invalid token');
  }
};