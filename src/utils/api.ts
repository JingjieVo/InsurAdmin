
import axios from 'axios';
import { ENV } from './constant';


const TOKEN_USER = 'eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZU51bWJlciI6IjAzMzMzMzMzMzMiLCJ1c2VySWQiOjUsInN1YiI6IjAzMzMzMzMzMzMiLCJleHAiOjE3MzMyODk4NTF9.BF9oR03oHglxx0fRosUkDKC-wIi9pbDczQMqx7BAqQw'



export const apiClient = axios.create({
    baseURL: ENV.BASE_URL,
    headers: {
      'Authorization': `Bearer ${TOKEN_USER}`,
      'Content-Type': 'application/json',
    },
  });
  export const apiClientNoAuth = axios.create({
    baseURL: ENV.BASE_URL,
    headers: {
      // 'Authorization': `Bearer ${TOKEN_USER}`,
      'Content-Type': 'application/json',
    },
  });
