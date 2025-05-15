import axios from 'axios';

export class StarWarsService {
  private static readonly BASE_URL = 'https://swapi.dev/api';

  public async getPeople(search?: string): Promise<any> {
    const response = await axios.get(`${StarWarsService.BASE_URL}/people`, {
      params: { search }
    });
    return response.data;
  }
}
