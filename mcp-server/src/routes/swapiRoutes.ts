import express from 'express';
import { getStarWarsPeople } from '../agents/swapiConnector';

const router = express.Router();

router.get('/swapi/users', async (req, res) => {
  const data = await getStarWarsPeople();
  
  const users = data.map((item: any) => {
    return {
      id: item.url.split("/").pop(),
      name: item.name
    }
  })

  res.json(users)
});

export default router;
