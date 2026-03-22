import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.karawanggadget.com", // backend laravel kamu
  withCredentials: true, // WAJIB untuk Sanctum cookie
    withXSRFToken: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosClient;
