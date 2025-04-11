import axios from "axios";
import { getAccessToken } from "../utils/auth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const api = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
