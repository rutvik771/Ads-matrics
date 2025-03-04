// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASEURL}`, // Backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;