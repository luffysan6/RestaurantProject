import { create } from "zustand";
import axiosClient from "../libs/axios";
const Auth = create((set, get) => ({
  userData: [],
  SignUpApi: async (data) => {
    let result = await axiosClient.post("/auth/register", data);
    return result.data.success;
  },
  SignInApi: async (data) => {
    try {
      let result = await axiosClient.post("/auth/login", data);
      set({ userData: result.data.data });
      return result.data.success;
    } catch (error) {
      console.log("error", error);
    }
  },
}));

export default Auth;
