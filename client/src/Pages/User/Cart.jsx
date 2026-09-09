import React from "react";
import { Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import OrderStore from "../../store/OrderStore";

const Cart = () => {
  const {
    CartItemData: cart,
    addToCart,
    removeToCart,
    cartCount,
    CreateOrder,
  } = OrderStore();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Empty Cart
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <ShoppingBag size={36} className="text-gray-400" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Your cart is empty
          </h2>

          <p className="mt-2 text-gray-500">
            Add some delicious food to your cart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>

          <p className="mt-1 text-sm text-gray-500">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* ================= CART ITEMS ================= */}
          <div className="space-y-4 lg:col-span-2">
            {cart.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <div
                  key={item._id}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
                >
                  <div className="flex items-center gap-4">
                    {/* Food Image Placeholder */}
                    <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gray-100 sm:flex">
                      <img src={item.image} />
                    </div>

                    {/* Food Details */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>

                      <p className="mt-1 font-semibold text-gray-800">
                        ₹{itemTotal}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 p-1">
                      <button
                        type="button"
                        onClick={() => removeToCart(item._id)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-white hover:text-red-600"
                      >
                        {item.quantity === 1 ? (
                          <Trash2 size={17} />
                        ) : (
                          <Minus size={17} />
                        )}
                      </button>

                      <span className="w-10 text-center font-semibold text-gray-800">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => addToCart({ _id: item._id })}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white transition hover:bg-gray-700"
                      >
                        <Plus size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= PRICE DETAILS ================= */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">
                Order Price Details
              </h2>

              <div className="my-5 h-px bg-gray-100" />

              {/* Individual Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-gray-700">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-semibold text-gray-800">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-5 h-px bg-gray-100" />

              {/* Summary */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Items ({totalItems})</span>

                  <span className="font-medium text-gray-800">₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Delivery</span>

                  <span className="font-medium text-green-600">FREE</span>
                </div>
              </div>

              <div className="my-5 h-px bg-gray-200" />

              {/* Total */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-gray-900">
                    Total Amount
                  </p>

                  <p className="text-xs text-gray-400">
                    Inclusive of all items
                  </p>
                </div>

                <p className="text-2xl font-bold text-gray-900">₹{subtotal}</p>
              </div>

              {/* Create Order */}
              <button
                type="button"
                onClick={() => CreateOrder()}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-gray-700 active:scale-[0.98]"
              >
                <ShoppingBag size={19} />
                Place Order
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                Review your order before placing it
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
