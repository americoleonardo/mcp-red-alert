import { User } from '../models/user.model';

export async function getInactiveUsers(days: number) {
  const threshold = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  return await User.find({ updatedAt: { $lt: threshold } });
}
