import { create } from "zustand";
import axios from "../libs/axios";

const FoodStore = create((set) => ({
  foodData: [],
  getAllFood: async () => {
    const { data } = await axios.get("/food/getAllFoods");

    console.log(data);

    set({ foodData: data.data });
  },
  deleteFoodMenu: async (id) => {
    try {
      const confirm = window.confirm("Do you want to Delete this Menu item ?");

      if(confirm){
      const { data } = await axios.delete(`/food/deleteOne/${id}`);

      console.log(data);

      if (data.success) {
        alert(data.message);
      }
      }
     
    } catch (error) {
      console.error("Error :", error);
    }
  },
}));

export default FoodStore;
