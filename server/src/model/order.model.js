import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    totalCartValue: Number,
    CartItem: [
      {
        foodId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "food",
          require: true,
        },
        quantity: Number,
      },
    ],
    status: {
      type: String,
      enum: {
        values: [
          "pending",
          "preparing",
          "outOfDelivery",
          "delivered",
          "cancelled",
        ],
        message: "{VALUE} is not supported",
        default: "pending",
        require: true,
      },
      customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require:true
      },
    },
  },
  {
    timeStamps: true,
  },
);

const OrderModel = mongoose.model("order", OrderSchema);

export default OrderModel;
