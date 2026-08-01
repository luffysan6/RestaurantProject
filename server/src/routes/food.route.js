import { Router } from "express";
import { CreateFood } from "../controller/food.controller.js";
import multer from "../libs/multer.cjs";

const router = Router();

router.post("/create", multer.array("foodImage"), CreateFood);

export default router;
