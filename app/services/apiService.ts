import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
const api = axios.create({
  baseURL: apiUrl,
});

export default api;
