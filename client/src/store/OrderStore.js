import { create } from "zustand";

const OrderStore = create((set, get) => ({
  CartItemData: [],
  cartCount:0,
  addToCart: (food) => {
    set((state) => {
      let existingItem = state.CartItemData.find((item) => item._id === food._id);
      if (existingItem) {
        console.log(state);
        return {
          cartCount: state.cartCount + 1,
          cart: state.cart.map((item) => {
            return item._id === food._id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        };
      }
      console.log(state);
      return {
        cartCount: state.cartCount + 1,
        cart: [
          ...state.cart,
          {
            _id: food._id,
            name: food.name,
            price: food.price,
            image: food.image,
            quantity: 1,
          },
        ],
      };
    });
  },
  removeToCart: () => {},
  CreateOrder: () => {},
}));

export default OrderStore;
