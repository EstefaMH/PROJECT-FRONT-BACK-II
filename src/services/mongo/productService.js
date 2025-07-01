import { axiosInstance } from "../../config/axiosConfig";


export default class ProductService {
  async getAll() {
    const res = await axiosInstance.get('/products');
    console.log("res", res)
    return res.data.payload.data;
  }

  async create(data) {
    const res = await axiosInstance.post('/tasks', data);
    return res.data;
  }

  async getById(id) {
    const res = await axiosInstance.get(`/products/${id}`);
    console.log("res", res.data)
    return res.data;
  }


}
