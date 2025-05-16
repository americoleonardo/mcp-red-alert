import { Agent } from '@modelcontextprotocol/sdk';

export const coreAgent = new Agent({
  id: 'user-agent',
  description: 'Fetches users not updated recently',
  tools: [
    {
      id: 'fetch-inactive-users',
      description: 'Fetches users not updated in X days',
      handler: async ({ input }) => {
        const { getInactiveUsers } = await import('../services/userService');
        const result = await getInactiveUsers(input.days || 20);
        return { result };
      }
    },
    {
      id: 'fetch-swapi',
      description: 'Fetch characters from Star Wars API',
      handler: async () => {
        const { getStarWarsPeople } = await import('./swapiConnector');
        return { result: await getStarWarsPeople() };
      }
    }
  ]
});
