import { Tool, ToolDefinition } from '@modelcontext/mcp';
import { MongoService } from '../services/mongoService';

export const getUsersNotUpdated: Tool = {
  name: 'getUsersNotUpdated',
  description: 'Get users not updated in the last 20 days',
  parameters: {},
  async execute(): Promise<any> {
    const mongoService = await MongoService.getInstance();
    const db = mongoService.getDb();
    
    const twentyDaysAgo = new Date();
    twentyDaysAgo.setDate(twentyDaysAgo.getDate() - 20);

    const users = await db.collection('users').find({
      updatedAt: { $lt: twentyDaysAgo }
    }).toArray();

    return users;
  }
};
