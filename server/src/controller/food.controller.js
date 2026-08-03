// Create , Update , Delete ,Read , Read All
// Admin - Create , Read , Update , Delete
// User - Read

import fileUploader from "../config/fileUploader.js";
import Food from "../model/food.model.js";

export const CreateFood = async (req, res) => {
  try {
    const { name, description, category, price, isavaiable } = req.body;
    const file = req.files; // multer.array() then req.files else multer.single then req.file

    // validating Data
    if (!name || !description || !category || !price || !isavaiable) {
      return res.status(400).json({
        success: false,
        message: "Kindly Fill all required Fields",
      });
    }

    const result = await fileUploader(file[0].path, "food_Image");

    const newFood = new Food();
    newFood.name = name;
    newFood.description = description;
    newFood.category = category;
    newFood.price = price;
    newFood.isavaiable = isavaiable;
    newFood.images = [result?.secure_url];

    await newFood.save();

    console.log(newFood);

    res.status(201).json({ newFood });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error at Server",
    });
  }
};
