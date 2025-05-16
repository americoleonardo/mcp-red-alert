import axios from 'axios';

export async function getStarWarsPeople() {
  const response = await axios.get('https://swapi.info/api/people');
  return response.data;
}
