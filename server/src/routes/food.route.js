import { Router } from "express";
import { CreateFood, updateFoodData } from "../controller/food.controller.js";
import multer from "../libs/multer.cjs";

const router = Router();

router.post("/create", multer.array("foodImage"), CreateFood);
router.post("/updateFoodData/:id", updateFoodData);

export default router;
