import axios from "axios";

// Aman untuk Vite & CRA:
const BASE_URL = import.meta.env.VITE_API_BASE_URL; 

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

// (Opsional) Interceptor Request: header umum, auth, logging
api.interceptors.request.use(
  (config) => {
    // contoh auth:
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;

    // contoh logging ringan:
    // console.debug(`[API] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// (Opsional) Interceptor Response: normalisasi error
api.interceptors.response.use(
  (res) => res,
  (error) => {
    // Bisa mapping pesan error atau refresh token
    return Promise.reject(error);
  }
);

export default api;