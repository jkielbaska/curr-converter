import axios from "axios";

const apiBase = "https://api.apilayer.com/exchangerates_data";
const API_KEY = process.env.API_KEY;

export const apiClient = axios.create({
  baseURL: apiBase,
  headers: {
    apiKey: API_KEY,
  },
});
