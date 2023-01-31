const axios = require("axios").default;

const baseURL = "http://127.0.0.1:8000/api";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: { Accept: "application/json" },
});

export default instance;
