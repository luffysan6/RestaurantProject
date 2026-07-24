import { create } from "zustand";
import axiosClient from "../libs/axios";
const Auth = create((set, get) => ({
  authState: {},
  SignUpApi: async (data) => {
    let result = await axiosClient.post("/auth/register", data);
    return result.data.success;
   
  },
}));

export default Auth;
