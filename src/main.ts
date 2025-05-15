import { MCPServer } from '@modelcontext/mcp';
import { getUsersNotUpdated } from './tools/userTools';
import { searchStarWarsPeople } from './tools/starWarsTools';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const server = new MCPServer({
    port: parseInt(process.env.MCP_PORT || '3000')
  });

  server.addTool(getUsersNotUpdated);
  server.addTool(searchStarWarsPeople);

  await server.start();
  console.log(`MCP Server running on port ${process.env.MCP_PORT}`);
}

startServer().catch(console.error);
