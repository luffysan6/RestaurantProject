import { Router } from "express";
import { savetodo } from "../controller/todo.controller.js";

const router = Router();

router.post("/save", savetodo);

export default router;
