import axios from 'axios';
import { getAuthToken, removeAuthToken } from '../../utils/AuthToken';

const BASE_URL = 'http://localhost:8080';

// Existing api instance
export default  axios.create({
  baseURL: BASE_URL,
});

// New axios instance with headers
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const axiosCustom = axios.create({
  baseURL: BASE_URL,
 
});


// Interceptors
axiosPrivate.interceptors.request.use((config) => {
  const accessToken = getAuthToken();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      const { data } = error.response;
      if (data && data.error === 'token_expired') {
        removeAuthToken(); // Remove the token cookie
      }
    }
    return Promise.reject(error);
  }
);





