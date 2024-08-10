import axios from 'axios';

export type IUserData = {
  id: number
  name: string
  email: string
}

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async (): Promise<IUserData[]> => {
  const { data } = await axios.get<IUserData[]>(API_URL);
  return data;
};
