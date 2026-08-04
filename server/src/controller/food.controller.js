// Create , Update , Delete ,Read , Read All
// Admin - Create , Read , Update , Delete
// User - Read

import fileUploader from "../config/fileUploader.js";
import Food from "../model/food.model.js";
import {Object} from 'mongoose'

export const CreateFood = async (req, res) => {
  try {
    const { name, description, category, price, isavaiable } = req.body;
    const file = req.files; // multer.array() then req.files else multer.single then req.file

    console.log(file);
    // validating Data
    if (!name || !description || !category || !price || !isavaiable) {
      return res.status(400).json({
        success: false,
        message: "Kindly Fill all required Fields",
      });
    }

    const result = await Promise.all(
      file.map((fileObj) =>
        fileUploader(fileObj.path, "food_Image").then((value) => {
          console.log(value);
          return value.secure_url;
        }),
      ),
    );

    const newFood = new Food();
    newFood.name = name;
    newFood.description = description;
    newFood.category = category;
    newFood.price = price;
    newFood.isavaiable = isavaiable;
    newFood.images = result;

    await newFood.save();

    console.log(newFood);

    res.status(201).json({
      success: true,
      newFoodItem: newFood,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error at Server",
    });
  }
};
export const updateFoodData = async (req,res) => {
    try {
       const { name, description, category, price, isavaiable, } = req.body;
      const {id} = req.params;


      const foodData = await Food.findOne({_id: new Object(id)});


      if(!foodData){
        return res.status(404).json({
          success:false,
          message:"Resource Not Found"
        })
      }

      foodData.save()

    } catch (error) {
      return res.status(500).json({
      success: false,
      message: "Error at Server",
    });
    }
}