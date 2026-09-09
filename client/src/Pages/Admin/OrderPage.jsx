import { useEffect } from "react";
import OrderStore from "../../store/OrderStore";
import OrderHistory from "./OrderHistory";

const OrdersPage = () => {
  const { orderData, fetchAdminOrder, OrderStatusChange } = OrderStore();

  useEffect(() => {
    fetchAdminOrder();
  }, [fetchAdminOrder]);

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <OrderHistory orders={orderData} onStatusChange={OrderStatusChange} />
      </div>
    </div>
  );
};

export default OrdersPage;
