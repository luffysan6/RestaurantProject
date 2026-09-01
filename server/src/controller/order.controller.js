import { verfiyToken } from "../libs/token.js";
import OrderModel from "../model/order.model.js";

export const CreateOrder = async (req, res) => {
  try {
    const OrderData = req.body;
    const { jwt } = req.cookies;

    if (jwt == undefined) {
      return res.status(401).json({
        message: "you are not allowed",
        success: false,
      });
    }

    const totalCartValue = OrderData.cartItem.reduce(
      (totalValue, item) => totalValue + item.quantity * item.price,
      0,
    );

    const CartItem = OrderData.cartItem.map((item) => {
      return {
        foodId: item._id,
        quantity: item.quantity,
      };
    });

    const userData = await verfiyToken(jwt);
    console.log(userData)

    const newOrder = new OrderModel();

    newOrder.totalCartValue = totalCartValue;
    newOrder.customerId = userData.id,
    newOrder.CartItem = CartItem,
    newOrder.status = "pending";


    await newOrder.save();

    res.status(201).json({
      message: "Order Created Successfully",
      orderDetails: newOrder,
      success: true,
    });
  } catch (error) {
    (console.log("Found Error at Order Creation", error.message),
      res.status(500).json({
        message: "Error at Server",
        success: false,
      }));
  }
};
