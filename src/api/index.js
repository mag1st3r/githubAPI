import axios from "axios";
import { BASE_URL } from "constants/api";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "accept": "application/vnd.github.v3+json"
  },
});

