import dotenv from 'dotenv';
dotenv.config();

import { connectToMongo } from './database/mongodb';
import { app } from './app';

const port = process.env.PORT || 3000;

async function bootstrap() {
  try {
    await connectToMongo();
    console.log('✅ MongoDB connected');
    
    app.listen(port, () => {
      console.log(`🚀 MCP server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('❌ Error during server startup:', error);
    process.exit(1);
  }
}

bootstrap();