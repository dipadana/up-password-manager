import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3010",
  // baseURL: 'https://yourpassserver.dipaproject.online',
  timeout: 10000,
});

export default instance;
