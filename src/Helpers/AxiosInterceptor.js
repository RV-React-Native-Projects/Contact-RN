import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import envs from '../Config/env';

let headers = {};

const AxiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});

AxiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default AxiosInstance;
