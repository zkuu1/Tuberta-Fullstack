import axios from "axios";
import { useStateContext } from "./Context/ContextProvider";


const AxiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
  
});

AxiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Tambahkan token hanya jika tersedia
  }
  return config;
});

AxiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      const { response } = error || {}; // Pastikan `response` tidak undefined
      if (response && response.status === 401) { // Gunakan strict comparison
        localStorage.removeItem("ACCESS_TOKEN");
      }
    } catch (e) {
      console.error("Error handling response:", e); // Lebih deskriptif pada log error
    }
    throw error; // Tetap lempar error agar bisa ditangani oleh caller
  }
);

export default AxiosClient;
