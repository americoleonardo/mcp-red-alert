import express from 'express';
import { getInactiveUsers } from '../services/userService';

const router = express.Router();

router.get('/users/inactive', async (req, res) => {
  const days = parseInt(req.query.days as string) || 20;
  const users = await getInactiveUsers(days);
  res.json(users);
});

export default router;
