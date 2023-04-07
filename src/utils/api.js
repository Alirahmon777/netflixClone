import axios from "axios";

export const api = () =>
  axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
  });

export const API_KEY = import.meta.env.VITE_APP_API_KEY;
