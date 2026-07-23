import { create } from "zustand";

const demo = create((set, get) => ({
  name: "Gourav",
  age: 19,
  updateName: (newName) => set({ name: newName }),
}));

export default demo;
