import { axiosInstance } from "../../config/axiosConfig";


export const AuthService = {

  async register(userData) {
    console.log(userData)

    const response = await axiosInstance.post('/auth/register', {
      "first_name": userData.first_name,
      "last_name": userData.last_name,
      "email": userData.email,
      "age": userData.age,
      "password": userData.password,
      "role": "user"
    });
    console.log(response)

    return response

  },

  async login(user, password) {
    const res = await axiosInstance.post('/auth/login', {
      "email": user,
      "password": password
    });
    return res.data;
  }
};
