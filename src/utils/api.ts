import Axios, { AxiosRequestConfig } from "axios";

const api = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
});

const Get = (url: string, params?: any): Promise<any> => {
  const config: AxiosRequestConfig = {
    params,
  };

  return api.get(url, config)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const getUsers = () => {
  return Get('/users');
};

export const getUserById = (id: number) => {
  return Get(`/users/${id}`)
}