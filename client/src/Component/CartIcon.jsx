import { ShoppingCartIcon } from "lucide-react";
import OrderStore from "../store/OrderStore";
import {  useNavigate } from "react-router";

const CartIcon = () => {
  const { cartCount } = OrderStore();
  let navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("cart")}
      type="button"
      data-name="btnn"
      className="test fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-800 active:scale-95"
    >
      <ShoppingCartIcon size={20} />

      {cartCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
