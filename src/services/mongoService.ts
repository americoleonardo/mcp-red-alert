import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export class MongoService {
  private static instance: MongoService;
  private client: MongoClient;
  private db: Db;

  private constructor() {
    this.client = new MongoClient(process.env.MONGODB_URI!);
  }

  public static async getInstance(): Promise<MongoService> {
    if (!MongoService.instance) {
      MongoService.instance = new MongoService();
      await MongoService.instance.connect();
    }
    return MongoService.instance;
  }

  private async connect(): Promise<void> {
    await this.client.connect();
    this.db = this.client.db('mcp_users');
  }

  public getDb(): Db {
    return this.db;
  }
}
