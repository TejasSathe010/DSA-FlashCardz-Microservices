import { Request, Response } from 'express';
import { IProfile, profiles } from '../models/profile';
import { AuthRequest } from '../middleware/authMiddleware';

// GET /api/profile/ - retrieve the current user profile
export const getProfile = (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const profile = profiles.find(p => p.userId === userId);
  if (!profile) {
    return res.status(404).json({ message: 'Profile not found' });
  }
  res.json(profile);
};

// PUT /api/profile/ - update the current user profile
export const updateProfile = (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const { fullName, bio } = req.body;
  let profile = profiles.find(p => p.userId === userId);
  if (!profile) {
    // If the profile doesn't exist, create a new one
    profile = { userId, fullName: fullName || '', bio: bio || '' };
    profiles.push(profile);
  } else {
    profile.fullName = fullName || profile.fullName;
    profile.bio = bio || profile.bio;
  }
  res.json(profile);
};
