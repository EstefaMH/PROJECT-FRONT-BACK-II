import axiosInstance from '../api/axiosConfig.js';

export const TaskService = {
  async getAll() {
    const res = await axiosInstance.get('/tasks');
    return res.data;
  },
  async create(data) {
    const res = await axiosInstance.post('/tasks', data);
    return res.data;
  }
};
