import mongoose, { mongo } from "mongoose";

const foodSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  name: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 200,
  },
  category: {
    type: String,
    default: "all",
    enum: {
      values: ["all", "breakfast", "lunch", "dinner", "snack", "dessert"],
      message: "{VALUE} is not supported",
    },
  },
  description: {
    type: String,
    maxLength: 500,
    minLength: 100,
    required: true,
  },
  images: {
    type: [String],
  },
  isavaiable: {
    type: Boolean,
    default: false,
  },
});

const Food = mongoose.model("food", foodSchema);

export default Food;
