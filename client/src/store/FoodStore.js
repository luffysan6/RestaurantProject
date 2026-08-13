import { create } from "zustand";
import axios from "../libs/axios";

const FoodStore = create((set) => ({
  foodData: [],
  getAllFood: async () => {
    const { data } = await axios.get("/food/getAllFoods");

    console.log(data);

    set({ foodData: data.data });
  },
}));

export default FoodStore;
