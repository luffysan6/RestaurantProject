import { create } from "zustand";

const OrderStore = create((set, get) => ({
  CartItemData: [],
  cartCount: 0,
  addToCart: (food) => {
    set((state) => {
      let existingItem = state.CartItemData.find(
        (item) => item._id === food._id,
      );
      if (existingItem) {
        console.log(state);
        return {
          cartCount: state.cartCount + 1,
          CartItemData: state.CartItemData.map((item) => {
            return item._id === food._id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        };
      }
      console.log(state);
      return {
        cartCount: state.cartCount + 1,
        CartItemData: [
          ...state.CartItemData,
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
 removeToCart: (id) => {
  set((state) => {
    const existingData = state.CartItemData.find(
      (item) => item._id === id
    );

    if (!existingData) {
      return state;
    }

    if (existingData.quantity <= 1) {
      return {
        cartCount: state.cartCount - 1,
        CartItemData: state.CartItemData.filter(
          (item) => item._id !== id
        ),
      };
    }

    return {
      cartCount: state.cartCount - 1,

      CartItemData: state.CartItemData.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      }),
    };
  });
},
  CreateOrder: () => {},
}));

export default OrderStore;
