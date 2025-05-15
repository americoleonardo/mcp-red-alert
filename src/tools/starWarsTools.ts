import { Tool, ToolDefinition } from '@modelcontext/mcp';
import { StarWarsService } from '../services/starWarsService';

export const searchStarWarsPeople: Tool = {
  name: 'searchStarWarsPeople',
  description: 'Search for Star Wars characters',
  parameters: {
    search: {
      type: 'string',
      description: 'Name of the character to search for'
    }
  },
  async execute(params: { search: string }): Promise<any> {
    const starWarsService = new StarWarsService();
    return await starWarsService.getPeople(params.search);
  }
};
