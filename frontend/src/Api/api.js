import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4002/bot/v1",
});

export default api;
