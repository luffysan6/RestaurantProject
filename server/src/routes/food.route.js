import { Router } from "express";
import {
  CreateFood,
  GetOne,
  readAllData,
  updateFoodData,
  DeleteOne,
} from "../controller/food.controller.js";
import multer from "../libs/multer.cjs";

const router = Router();

router.post("/create", multer.array("foodImage"), CreateFood);
router.post("/updateFoodData/:id", updateFoodData);
router.get("/getAllFoods", readAllData);
router.get("/getone/:id", GetOne);
router.delete("/deleteOne/:id", DeleteOne);

export default router;
