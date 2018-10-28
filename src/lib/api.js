import axios from 'axios';
/* global API_BASE_URL */

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 20000
});

export const getEvents = () => {
  return api.get(`${API_BASE_URL}/fb/events`);
};

export default api;
