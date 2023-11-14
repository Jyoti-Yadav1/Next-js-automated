// Env variables are used to calculate the Api URL
export const API_BASE_URL = process.env.NODE_ENV == "development" ? "www.api.dev.example.com":"www.api.prod.example.com";