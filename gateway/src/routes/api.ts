import { Router } from 'express';
import { getHealth } from '../controllers/healthController';

const router = Router();

// Health Check Endpoint
router.get('/health', getHealth);

// Future API contracts for authentication, flashcards, etc. will be added here.

export default router;
