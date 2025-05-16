import express from 'express';
import userRoutes from './routes/userRoutes';
import swapiRoutes from './routes/swapiRoutes';

export const app = express();
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', swapiRoutes);
