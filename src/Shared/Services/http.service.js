import axios from 'axios';
// import { authService } from './auth.service';
import config from '../../../config.json';

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response
    && error.response.status >= 400
    && error.response.status < 500;

  if (!expectedError) {
    console.error('Logging the error', error);
  }

  const originalRequest = error.config;

  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    // return authService.refreshToken().then((user) => {
    //   console.log('refreshed', user);
    //   return axios(originalRequest);
    // });
  }

  if (error.response.status === 401 && originalRequest._retry) {
    window.location = '/login';
  }
  return Promise.reject(error);
});

export const http = axios.create({
  withCredentials: false,
  baseURL: config.apiUrl,
});

export function createCaller(options) {
  return axios.create({
    withCredentials: false,
    ...options,
  });
}

export function createAuthCaller(token) {
  return axios.create({
    withCredentials: false,
    baseURL: config.apiUrl,
    headers: {
      common: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
}

const exports = {
  http,
  createCaller,
  createAuthCaller,
};

export default exports;
