import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: process.env.MONGODB_DATABASE,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}
