import axios from "axios";

/* export const API_BASE_URL = "https://localhost:3009/api"; */
export const API_BASE_URL = "https://contact-management-api-lac0.onrender.com/api";
export const API_BASE_URL_TEST = "https://blog-fake-api.onrender.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
});
