import axios from "axios";

export const api = axios.create({
  baseURL: "https://web-production-b2c5.up.railway.app/",
  timeout: 15000,
});
